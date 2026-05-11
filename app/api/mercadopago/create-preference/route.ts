import { NextResponse } from 'next/server';
import { CreatePreferenceSchema } from '@/lib/validations/pago';
import { createPreference } from '@/lib/services/mercadopago.service';

export async function POST(request: Request) {
  console.log('[POST /api/mercadopago/create-preference] start');

  try {
    const body = await request.json();
    const parsed = CreatePreferenceSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Input inválido', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { init_point, id } = await createPreference(parsed.data.planId);
    
    console.log('[POST /api/mercadopago/create-preference] success', id);
    return NextResponse.json({ data: { init_point } }, { status: 200 });

  } catch (error) {
    console.error('[POST /api/mercadopago/create-preference] error', error);
    
    // Si es nuestro error custom de falta de token, devolvemos un 500 claro
    if (error instanceof Error && error.message.includes('MERCADOPAGO_ACCESS_TOKEN')) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: 'Error interno al comunicarse con MercadoPago' },
      { status: 500 }
    );
  }
}
