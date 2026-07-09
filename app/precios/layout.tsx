import type { Metadata } from 'next';
import { PLANES } from '@/data/planes';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Planes y Precios',
  description:
    'Planes y precios de BioReset360. Compara los tres programas — Essencial, Vital y Quantum — con precios transparentes en COP, pago en cuotas y proceso completo por nivel.',
};

// JSON-LD de ofertas — ayuda a Google a mostrar los planes con precio.
const productsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': PLANES.map(plan => ({
    '@type': 'Product',
    name: `Plan ${plan.nombre} — BioReset360`,
    description: `${plan.sesiones} sesiones individuales de ${plan.duracion} en ${plan.semanas} semanas. ${plan.tagline}.`,
    url: `${SITE_URL}/precios`,
    brand: { '@type': 'Brand', name: 'BioReset360' },
    offers: {
      '@type': 'Offer',
      price: plan.precioTotal,
      priceCurrency: 'COP',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/pago?plan=${plan.id}`,
    },
  })),
};

export default function PreciosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      {children}
    </>
  );
}
