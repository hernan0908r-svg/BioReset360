'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const plans = [
  { name: 'Essencial', description: 'Primer paso al bienestar · 60 min', price: '290.000' },
  { name: 'Vital', description: '4 sesiones + 2 terapias / mes', price: '890.000', featured: true },
  { name: 'Premium', description: 'Acceso ilimitado · Transformación 360°', price: '1.890.000' },
];

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section style={{ background: 'var(--color-surface-soft)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 60px' }}>

        {/* Header */}
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: 32 }}>Planes de Sanación</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 80, marginBottom: 80 }}>
            <h2 className="display-serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', flexShrink: 0 }}>
              Tres niveles.<br /><em>Un proceso.</em>
            </h2>
            <p className="body-lead" style={{ maxWidth: 380, paddingBottom: 6 }}>
              La sanación profunda requiere continuidad y estructura. Cada plan está diseñado personalmente por la Dra. Rozo para restaurar tu bienestar.
            </p>
          </div>
        </FadeIn>

        {/* Plans as editorial list rows */}
        <StaggerContainer staggerDelay={0.08}>
          {plans.map((plan, i) => (
            <StaggerItem key={plan.name} direction="none">
              <div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ borderTop: '1px solid var(--color-hairline)' }}
              >
                <Link href={`/pago?plan=${plan.name.toLowerCase()}`} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto auto auto',
                  gap: 40,
                  padding: '28px 0',
                  alignItems: 'center',
                  textDecoration: 'none',
                  background: hoveredIndex === i ? 'rgba(28,20,16,0.025)' : 'transparent',
                  transition: 'background 0.2s ease',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
                    <span className="display-serif" style={{ fontSize: 'clamp(22px, 2vw, 28px)', letterSpacing: '-0.01em' }}>
                      {plan.name}
                    </span>
                    {plan.featured && (
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: '0.10em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent)',
                        border: '1px solid var(--color-accent)',
                        padding: '3px 10px',
                        opacity: 0.85,
                      }}>
                        Más elegido
                      </span>
                    )}
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', textAlign: 'right' }}>
                    {plan.description}
                  </span>
                  <span className="display-serif" style={{ fontSize: 'clamp(20px, 1.8vw, 26px)', letterSpacing: '-0.01em', textAlign: 'right', flexShrink: 0 }}>
                    ${plan.price} <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-muted)', fontWeight: 400 }}>COP</span>
                  </span>
                  <motion.span
                    animate={{ x: hoveredIndex === i ? 8 : 0, opacity: hoveredIndex === i ? 1 : 0.25 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--color-accent)', flexShrink: 0 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </StaggerItem>
          ))}
          <div style={{ borderTop: '1px solid var(--color-hairline)' }} />
        </StaggerContainer>

        {/* CTA row */}
        <FadeIn delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 56, flexWrap: 'wrap', gap: 24 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)' }}>
              ¿No sabes qué plan es para ti?{' '}
              <Link href="/triaje" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Haz el cuestionario de triaje
              </Link>
            </p>
            <Link href="/planes" style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--color-on-dark)',
              background: 'var(--color-ink)',
              padding: '14px 32px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}>
              Ver todos los planes →
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
