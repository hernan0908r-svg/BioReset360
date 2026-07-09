import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getPayment } from '@/lib/services/mercadopago.service';
import { sendSaleNotification, sendPurchaseConfirmation } from '@/lib/services/email.service';
import { PLANES } from '@/data/planes';

// MercadoPago a veces hace un GET para validar la URL del webhook.
export async function GET() {
  return NextResponse.json({ ok: true }, { status: 200 });
}

// Valida la firma x-signature de MercadoPago.
// Si no hay MERCADOPAGO_WEBHOOK_SECRET configurado, se omite (modo abierto para dev/MVP).
function isValidSignature(request: Request, dataId: string | undefined): boolean {
  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET;
  if (!secret) {
    console.warn('[webhook] MERCADOPAGO_WEBHOOK_SECRET no configurado; se omite validación de firma');
    return true;
  }

  const xSignature = request.headers.get('x-signature');
  const xRequestId = request.headers.get('x-request-id');
  if (!xSignature || !xRequestId || !dataId) return false;

  const parts: Record<string, string> = {};
  for (const piece of xSignature.split(',')) {
    const [k, v] = piece.split('=');
    if (k && v) parts[k.trim()] = v.trim();
  }
  const { ts, v1 } = parts;
  if (!ts || !v1) return false;

  const manifest = `id:${dataId};request-id:${xRequestId};ts:${ts};`;
  const computed = crypto.createHmac('sha256', secret).update(manifest).digest('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(computed), Buffer.from(v1));
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  console.log('[POST /api/mercadopago/webhook] start');

  try {
    const url = new URL(request.url);
    const queryDataId = url.searchParams.get('data.id') ?? url.searchParams.get('id') ?? undefined;
    let type: string | undefined =
      url.searchParams.get('type') ?? url.searchParams.get('topic') ?? undefined;
    let paymentId: string | undefined = queryDataId;

    // Webhooks v2 envían un body JSON: { type, action, data: { id } }
    const parsed: unknown = await request.json().catch(() => null);
    const body =
      parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : null;
    const data =
      body && typeof body.data === 'object' && body.data !== null
        ? (body.data as Record<string, unknown>)
        : null;

    if (!type && body) {
      if (typeof body.type === 'string') type = body.type;
      else if (typeof body.topic === 'string') type = body.topic;
    }
    if (!paymentId && data && (typeof data.id === 'string' || typeof data.id === 'number')) {
      paymentId = String(data.id);
    }

    // Validación de firma (si hay secret configurado).
    if (!isValidSignature(request, queryDataId ?? paymentId)) {
      console.warn('[webhook] firma inválida — rechazado');
      return NextResponse.json({ error: 'firma inválida' }, { status: 401 });
    }

    // Solo nos interesan las notificaciones de pago.
    if (type !== 'payment' || !paymentId) {
      console.log('[webhook] notificación ignorada', { type, paymentId });
      return NextResponse.json({ received: true }, { status: 200 });
    }

    // Verificamos el estado real contra MercadoPago (no confiamos en el payload).
    const payment = await getPayment(paymentId);
    console.log('[webhook] payment', payment.id, payment.status);

    if (payment.status === 'approved') {
      const planId = payment.external_reference ?? '';
      const plan = PLANES.find((p) => p.id === planId);
      const planName = plan?.nombre ?? (planId || 'Desconocido');
      const payerEmail = payment.payer?.email;

      // Aviso interno a la Dra.
      await sendSaleNotification({
        planId,
        planName,
        amount: payment.transaction_amount ?? plan?.precioTotal ?? 0,
        currency: payment.currency_id ?? 'COP',
        payerEmail,
        paymentId: payment.id ?? paymentId,
      });

      // Confirmación al cliente (si MercadoPago entregó su correo).
      if (payerEmail) {
        await sendPurchaseConfirmation({ to: payerEmail, planName });
      }
      console.log('[webhook] avisos enviados para', planId);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('[POST /api/mercadopago/webhook] error', error);
    // 500 → MercadoPago reintenta la notificación (útil si el fallo fue transitorio).
    return NextResponse.json({ error: 'Error procesando el webhook' }, { status: 500 });
  }
}
