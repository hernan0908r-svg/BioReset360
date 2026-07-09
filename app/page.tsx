'use cache';
import type { Metadata } from 'next';
import HeroSection from './sections/HeroSection';
import MetodologiaSection from './sections/MetodologiaSection';
import TriajeSection from './sections/TriajeSection';
import TerapeutaTeaserSection from './sections/TerapeutaTeaserSection';
import TestimoniosSection from './sections/TestimoniosSection';
import PricingSection from './sections/PricingSection';
import FaqSection from './sections/FaqSection';
import FinalCtaSection from './sections/FinalCtaSection';
import { HOME_FAQS } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'BioReset360 · Programa Integral de Bienestar · Dra. Patricia Rozo',
  description: 'Programa de bienestar integral creado y dirigido por la Dra. Patricia Rozo. Psicología clínica y medicina contemplativa. Bogotá.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default async function HomePage() {
  return (
    <div style={{ background: 'var(--color-canvas)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <MetodologiaSection />
      <TriajeSection />
      <TerapeutaTeaserSection />
      <TestimoniosSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
