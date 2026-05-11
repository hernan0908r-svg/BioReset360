import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { DM_Serif_Display } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: { default: 'BioReset360 · Programa Integral de Bienestar · Dra. Patricia Rozo', template: '%s · BioReset360' },
  description: 'BioReset360 es un programa de bienestar integral creado y dirigido personalmente por la Dra. Patricia Rozo. Psicología clínica, terapias vibracionales y medicina contemplativa. Bogotá.',
  keywords: ['psicología integrativa', 'bienestar', 'Patricia Rozo', 'BioReset360', 'Bogotá', 'Enfoque 360'],
  openGraph: {
    title: 'BioReset360 · Programa Integral de Bienestar',
    description: 'Programa de bienestar integral creado por la Dra. Patricia Rozo. Psicología clínica, terapias vibracionales y medicina contemplativa. Bogotá.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'BioReset360',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
