import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { SITE_URL, WHATSAPP_URL, CONTACT_EMAIL } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'BioReset360 · Programa Integral de Bienestar · Dra. Patricia Rozo', template: '%s · BioReset360' },
  description: 'BioReset360 es un programa de bienestar integral creado y dirigido personalmente por la Dra. Patricia Rozo. Psicología clínica y medicina contemplativa. Bogotá.',
  keywords: ['psicología integrativa', 'bienestar', 'Patricia Rozo', 'BioReset360', 'Bogotá', 'Enfoque 360'],
  openGraph: {
    title: 'BioReset360 · Programa Integral de Bienestar',
    description: 'Programa de bienestar integral creado por la Dra. Patricia Rozo. Psicología clínica y medicina contemplativa. Bogotá.',
    url: SITE_URL,
    type: 'website',
    locale: 'es_CO',
    siteName: 'BioReset360',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/el-terapeuta#persona`,
      name: 'Dra. Patricia Rozo',
      jobTitle: 'Psicóloga Integrativa',
      description: 'Creadora del Método Enfoque 360. Psicología clínica y medicina contemplativa.',
      url: `${SITE_URL}/el-terapeuta`,
      image: `${SITE_URL}/images/dra-rozo.jpg`,
      worksFor: { '@id': `${SITE_URL}/#organizacion` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organizacion`,
      name: 'BioReset360',
      description: 'Programa de bienestar integral creado y dirigido personalmente por la Dra. Patricia Rozo.',
      url: SITE_URL,
      email: CONTACT_EMAIL,
      areaServed: { '@type': 'City', name: 'Bogotá' },
      address: { '@type': 'PostalAddress', addressLocality: 'Bogotá', addressCountry: 'CO' },
      sameAs: [WHATSAPP_URL],
      priceRange: '$$',
      founder: { '@id': `${SITE_URL}/el-terapeuta#persona` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
