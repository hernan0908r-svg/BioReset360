import { MercadoPagoConfig, Preference } from 'mercadopago';

// Configuramos MP solo si tenemos el token (evitamos que rompa en build time)
let client: MercadoPagoConfig | null = null;
if (process.env.MERCADOPAGO_ACCESS_TOKEN) {
  client = new MercadoPagoConfig({
    accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
    options: { timeout: 5000 },
  });
}

const PLAN_DETAILS = {
  essencial: { title: 'Plan Essencial - BioReset360', unit_price: 290000 },
  vital: { title: 'Plan Vital - BioReset360', unit_price: 890000 },
  premium: { title: 'Plan Premium - BioReset360', unit_price: 1890000 },
} as const;

export async function createPreference(planId: 'essencial' | 'vital' | 'premium') {
  if (!client) {
    throw new Error('MERCADOPAGO_ACCESS_TOKEN no está configurado en .env.local');
  }

  const plan = PLAN_DETAILS[planId];
  if (!plan) throw new Error('Plan inválido');

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const preference = new Preference(client);
  const result = await preference.create({
    body: {
      items: [
        {
          id: planId,
          title: plan.title,
          quantity: 1,
          unit_price: plan.unit_price,
          currency_id: 'COP',
        },
      ],
      back_urls: {
        success: `${baseUrl}/pago/exitoso`,
        pending: `${baseUrl}/pago/pendiente`,
        failure: `${baseUrl}/pago/fallido`,
      },
      auto_return: 'approved',
      // external_reference: '' // Aquí podríamos guardar el ID del usuario/sesión luego
    },
  });

  if (!result.init_point) {
    throw new Error('No se pudo generar el link de pago (init_point)');
  }

  return { init_point: result.init_point, id: result.id };
}
