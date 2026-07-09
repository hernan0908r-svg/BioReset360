// URL base del sitio. Configurar NEXT_PUBLIC_BASE_URL en producción (Vercel).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || 'https://bioreset360.com'
).replace(/\/$/, '');

export const SITE_NAME = 'BioReset360';

// Contacto — un solo lugar para actualizar cuando estén los datos reales.
// TODO: reemplazar con el número real de WhatsApp de la Dra. Rozo.
export const WHATSAPP_NUMBER = '573000000000';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CONTACT_EMAIL = 'bioreset360@gmail.com';

// Aviso de crisis — estándar ético en sitios de salud mental.
export const CRISIS_NOTICE =
  'BioReset360 no ofrece atención de emergencias. Si estás en una crisis o en riesgo, llama a la Línea 106 (Bogotá) o a la línea nacional 123.';
