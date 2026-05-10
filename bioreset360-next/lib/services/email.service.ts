import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export type TriajeEmailParams = {
  to: string;
  planKey: string;
  planName: string;
  headline: string;
  perks: string[];
  price: string;
};

export async function sendTriajeResult(params: TriajeEmailParams): Promise<void> {
  if (!resend) throw new Error('RESEND_API_KEY is not configured in .env.local');

  const { to, planKey, planName, headline, perks, price } = params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'BioReset360 <onboarding@resend.dev>';

  await resend.emails.send({
    from: fromEmail,
    to,
    subject: `Tu resultado: Plan ${planName} — BioReset360`,
    html: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:Georgia,'Times New Roman',serif;background:#FDF8F0;margin:0;padding:40px 20px;color:#1C1410;">
  <div style="max-width:560px;margin:0 auto;">
    <div style="font-family:-apple-system,sans-serif;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#7E6E5C;margin-bottom:32px;">
      BioReset360 · Resultado de Triaje Emocional
    </div>
    <h1 style="font-size:40px;font-weight:400;line-height:1.15;margin:0 0 16px;letter-spacing:-0.01em;">${headline}</h1>
    <div style="display:inline-block;background:#EDE3D1;font-family:-apple-system,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#C8893A;padding:6px 16px;margin-bottom:40px;">
      Plan ${planName} recomendado
    </div>
    <div style="background:#fff;border:1px solid #D9CCB8;padding:32px;margin-bottom:32px;">
      <div style="font-family:-apple-system,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#7E6E5C;margin-bottom:20px;">Incluye</div>
      ${perks.map(perk => `
      <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid #EDE3D1;">
        <span style="color:#C8893A;font-weight:600;flex-shrink:0;">✓</span>
        <span style="font-family:-apple-system,sans-serif;font-size:14px;color:#3C2E22;line-height:1.5;">${perk}</span>
      </div>`).join('')}
      <div style="margin-top:24px;padding-top:20px;border-top:1px solid #D9CCB8;display:flex;justify-content:space-between;align-items:baseline;">
        <span style="font-family:-apple-system,sans-serif;font-size:13px;color:#7E6E5C;">Precio desde</span>
        <span style="font-size:28px;font-weight:400;color:#1C1410;">$${price} COP</span>
      </div>
    </div>
    <a href="${baseUrl}/pago?plan=${planKey}" style="display:block;background:#1C1410;color:#FDF8F0;font-family:-apple-system,sans-serif;font-size:14px;font-weight:500;text-align:center;padding:16px 32px;text-decoration:none;letter-spacing:0.02em;margin-bottom:24px;">
      Adquirir Plan ${planName} →
    </a>
    <a href="${baseUrl}/planes" style="display:block;font-family:-apple-system,sans-serif;font-size:13px;color:#7E6E5C;text-align:center;text-decoration:underline;padding:8px;">
      Ver todos los planes
    </a>
    <div style="margin-top:40px;padding-top:24px;border-top:1px solid #D9CCB8;font-family:-apple-system,sans-serif;font-size:11px;color:#7E6E5C;line-height:1.7;">
      Este resultado fue generado por el cuestionario de triaje emocional de BioReset360.
      La Dra. Patricia Rozo confirmará tu plan en tu primera sesión.<br>
      <a href="${baseUrl}/politica-de-privacidad" style="color:#7E6E5C;">Política de privacidad</a>
    </div>
  </div>
</body>
</html>`,
  });
}
