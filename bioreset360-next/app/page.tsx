'use cache';
import type { Metadata } from 'next';
import HeroSection from './sections/HeroSection';
import TriajeSection from './sections/TriajeSection';
import TerapiasSection from './sections/TerapiasSection';
import TerapeutaTeaserSection from './sections/TerapeutaTeaserSection';
import TestimoniosSection from './sections/TestimoniosSection';
import MetodologiaSection from './sections/MetodologiaSection';
import PricingSection from './sections/PricingSection';
import FaqSection from './sections/FaqSection';

export const metadata: Metadata = {
  title: 'BioReset360 · Programa Integral de Bienestar · Dra. Patricia Rozo',
  description: 'Programa de bienestar integral creado y dirigido por la Dra. Patricia Rozo. Psicología clínica, terapias vibracionales y medicina contemplativa. Bogotá.',
};

export default async function HomePage() {
  return (
    <div style={{ background: 'var(--color-canvas)' }}>
      <HeroSection />
      <MetodologiaSection />
      <TerapiasSection />
      <TriajeSection />
      <TerapeutaTeaserSection />
      <PricingSection />
      <TestimoniosSection />
      <FaqSection />
    </div>
  );
}
