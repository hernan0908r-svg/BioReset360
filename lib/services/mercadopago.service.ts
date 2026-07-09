import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';
import { PLANES } from '@/data/planes';

// Configuramos MP solo si tenemos el token (evitamos que rompa en build time)
let client: MercadoPagoConfig | null = null;
if (process.env.MERCADOPAGO_ACCESS_TOKEN) {
  client = new MercadoPagoConfig({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
    options: { timeout: 5000 },
  });
}

// La fuente de verdad de planes y precios es data/planes.ts — nunca duplicar precios aquí.
export type PlanId = (typeof PLANES)[number]['id'];

export async function createPreference(planId: PlanId) {
  if (!client) {
    throw new Error('MERCADOPAGO_ACCESS_TOKEN no está configurado en .env.local');
  }

  const plan = PLANES.find(p => p.id === planId);
  if (!plan) throw new Error('Plan inválido');

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const preference = new Preference(client);
  const result = await preference.create({
    body: {
      items: [
        {
          id: plan.id,
          title: `Plan ${plan.nombre}® - BioReset360`,
          quantity: 1,
          unit_price: plan.precioTotal,
          currency_id: 'COP',
        },
      ],
      back_urls: {
        success: `${baseUrl}/pago/exitoso`,
        pending: `${baseUrl}/pago/pendiente`,
        failure: `${baseUrl}/pago/fallido`,
      },
      auto_return: 'approved',
      // El webhook confirma el pago del lado servidor y dispara el aviso de venta.
      // OJO: MercadoPago no puede llamar a localhost — el webhook solo funciona con un dominio público.
      notification_url: `${baseUrl}/api/mercadopago/webhook`,
      // external_reference guarda el plan para que el webhook sepa qué se compró.
      external_reference: plan.id,
      metadata: { plan_id: plan.id },
    },
  });

  if (!result.init_point) {
    throw new Error('No se pudo generar el link de pago (init_point)');
  }

  return { init_point: result.init_point, id: result.id };
}

// Consulta un pago por id (lo usa el webhook para verificar el estado real contra MercadoPago).
export async function getPayment(paymentId: string) {
  if (!client) {
    throw new Error('MERCADOPAGO_ACCESS_TOKEN no está configurado en .env.local');
  }
  return new Payment(client).get({ id: paymentId });
}
