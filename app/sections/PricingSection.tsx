'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { PLANES } from '@/data/planes';

// Derivado de la fuente de verdad (data/planes.ts) — no duplicar precios.
const plans = PLANES.map(p => ({
  name: `${p.nombre}®`,
  description: `${p.sesiones} sesiones · ${p.semanas} semanas · ${p.badge}`,
  price: p.precioTotal.toLocaleString('es-CO'),
  featured: p.destacado,
  nivel: p.nivel,
}));

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section style={{ background: 'var(--color-surface-soft)' }}>
      <style jsx>{`
        .responsive-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 80px;
          margin-bottom: 80px;
        }
        @media (max-width: 1024px) {
          .responsive-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
        }
        .plan-row {
          display: grid;
          grid-template-columns: 1fr auto auto auto;
          gap: 40px;
          padding: 28px 0;
          align-items: center;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        @media (max-width: 768px) {
          .plan-row {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 32px 0;
          }
          .plan-description, .plan-price { text-align: left !important; }
          .desktop-arrow { display: none; }
        }
        .cta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 56px;
          flex-wrap: wrap;
          gap: 24px;
        }
        @media (max-width: 480px) {
          .cta-row { flex-direction: column; align-items: flex-start; gap: 32px; }
        }
      `}</style>
      <div className="container-padding" style={{ maxWidth: 1320, margin: '0 auto', paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>

        {/* Header */}
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: 32 }}>Precios</div>
          <div className="responsive-header">
            <h2 className="display-serif" style={{ fontSize: 'var(--text-display-lg-size)', flexShrink: 0 }}>
              Tres niveles.<br /><em>Un proceso.</em>
            </h2>
            <p className="body-lead" style={{ maxWidth: 380, paddingBottom: 6 }}>
              Tres niveles, un solo proceso. La Dra. Rozo diseña el tuyo — no hay un plan genérico que sirva para todos.
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
                <Link href="/precios" className="plan-row" style={{
                  background: hoveredIndex === i ? 'rgba(45,93,90,0.045)' : 'transparent'
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
                  <span className="plan-description" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', textAlign: 'right' }}>
                    {plan.description}
                  </span>
                  <span className="plan-price display-serif" style={{ fontSize: 'clamp(24px, 1.8vw, 26px)', letterSpacing: '-0.01em', textAlign: 'right', flexShrink: 0 }}>
                    ${plan.price} <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-muted)', fontWeight: 400 }}>COP</span>
                  </span>
                  <motion.span
                    animate={{ x: hoveredIndex === i ? 8 : 0, opacity: hoveredIndex === i ? 1 : 0.25 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--color-accent)', flexShrink: 0 }}
                    className="desktop-arrow"
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
          <div className="cta-row">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)' }}>
              ¿No sabes qué nivel es para ti?{' '}
              <Link href="/triaje" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Encuentra tu plan en 2 minutos
              </Link>
              {' '}· Pago en cuotas disponible
            </p>
            <Link href="/precios" style={{
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
              Ver todos los precios →
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
