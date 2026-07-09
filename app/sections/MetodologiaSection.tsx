'use client';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const steps = [
  {
    num: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="10" r="5" />
        <path d="M4 24c0-5.5 4.5-9 10-9s10 3.5 10 9" />
      </svg>
    ),
    title: 'Cuestionario de inicio',
    desc: 'Cinco preguntas para saber dónde estás y qué nivel se ajusta a tu momento.',
  },
  {
    num: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="16" height="20" rx="2" />
        <path d="M10 10h8M10 14h8M10 18h5" />
      </svg>
    ),
    title: 'Tu proceso, a medida',
    desc: 'La Dra. Rozo diseña tu plan — no hay protocolos genéricos, hay un proceso que parte de ti.',
  },
  {
    num: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4l2.5 7.5H24l-6 4.4 2.3 7L14 19l-6.3 3.9L10 16 4 11.5h7.5Z" />
      </svg>
    ),
    title: 'Semanas con dirección',
    desc: 'Cada sesión tiene un propósito. Al cierre te llevas materiales concretos y un cambio real.',
  },
];

export default function MetodologiaSection() {
  return (
    <section style={{ background: 'var(--color-canvas)', borderTop: '1px solid var(--color-hairline)' }}>
      <style jsx>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          margin-top: 64px;
          border: 1px solid var(--color-hairline);
          border-radius: 16px;
          overflow: hidden;
          background: var(--color-hairline);
        }
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr; }
        }
        .step-cell {
          background: var(--color-canvas);
          padding: 40px 36px;
          transition: background 0.2s ease;
        }
        .step-cell:hover { background: var(--color-surface-soft); }
        .step-icon {
          width: 56px; height: 56px;
          border-radius: 14px;
          background: var(--color-primary);
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          margin-bottom: 24px;
        }
      `}</style>

      <div className="container-padding" style={{ maxWidth: 1200, margin: '0 auto', paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>
        <FadeIn>
          <div style={{ marginBottom: 0 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Cómo funciona</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 400,
              color: 'var(--color-ink)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: 480,
            }}>
              Tu camino hacia el bienestar
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1}>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <StaggerItem key={i} direction="up">
                <div className="step-cell">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div className="step-icon" style={{ marginBottom: 0 }}>{step.icon}</div>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 11, fontWeight: 600,
                      letterSpacing: '0.12em',
                      color: 'var(--color-primary)',
                      background: 'var(--color-surface-soft)',
                      border: '1px solid var(--color-hairline)',
                      borderRadius: 999,
                      padding: '4px 10px',
                    }}>{step.num}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.25, marginBottom: 12, letterSpacing: '-0.01em' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.75, color: 'var(--color-body)', margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
            <Link href="/triaje" className="btn-secondary" style={{ padding: '11px 24px' }}>
              Empezar con el cuestionario →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
