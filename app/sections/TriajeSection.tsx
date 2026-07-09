'use client';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const cards = [
  {
    id: 'u',
    planLabel: 'Nivel I · 4 sesiones',
    title: 'Necesito ayuda urgente',
    sub: 'Estoy en crisis o bajo gran presión',
    desc: 'Acceso inmediato. Sin listas de espera. Contención segura desde la primera sesión.',
    cta: 'Quiero atención hoy',
    accent: '#2D5D5A',
    bg: '#E4EDEB',
  },
  {
    id: 'b',
    planLabel: 'Nivel II · 8 sesiones',
    title: 'Siento un bloqueo o ansiedad',
    sub: 'Algo no fluye en mi vida',
    desc: 'Psicología clínica con herramientas de regulación para liberar lo que te frena.',
    cta: 'Explorar mi bloqueo',
    accent: '#C2724B',
    bg: '#F4E6DB',
  },
  {
    id: 't',
    planLabel: 'Nivel III · 12 sesiones',
    title: 'Busco transformación profunda',
    sub: 'Quiero evolucionar en todos los niveles',
    desc: 'Programa inmersivo 360° que integra cuerpo, mente y espíritu para un cambio real.',
    cta: 'Iniciar mi transformación',
    accent: '#A2762F',
    bg: '#F1E8D4',
  },
];

export default function TriajeSection() {
  return (
    <section id="triaje" style={{ background: 'var(--color-surface-soft)' }}>
      <style jsx>{`
        .triaje-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        @media (max-width: 900px) {
          .triaje-grid { grid-template-columns: 1fr; max-width: 480px; gap: 16px; }
        }
        :global(.triaje-card) {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 16px;
          padding: 28px 28px 24px;
          border: 1px solid var(--color-hairline);
          text-decoration: none;
          height: 100%;
          transition: box-shadow 0.25s ease, transform 0.22s ease, border-color 0.22s ease;
        }
        :global(.triaje-card:hover) {
          transform: translateY(-5px);
          box-shadow: var(--shadow-elevated);
        }
        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          margin-top: auto;
          padding-top: 20px;
          transition: gap 0.15s ease;
        }
        :global(.triaje-card:hover) .card-cta { gap: 10px; }
      `}</style>

      <div className="container-padding" style={{ maxWidth: 1240, margin: '0 auto', paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>
        <FadeIn>
          <div style={{ maxWidth: 600 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>¿Por dónde empezar?</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 46px)',
              fontWeight: 500, lineHeight: 1.12, letterSpacing: '-0.02em',
              color: 'var(--color-ink)', marginBottom: 18, fontStyle: 'italic',
            }}>
              ¿En qué momento estás hoy?
            </h2>
            <p className="body-lead" style={{ maxWidth: 440 }}>
              No todos llegamos al mismo lugar por el mismo motivo. Elige el que más resuena con lo que vives hoy.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.09}>
          <div className="triaje-grid">
            {cards.map(card => (
              <StaggerItem key={card.id} direction="up">
                <Link href="/triaje" className="triaje-card" style={{ borderTop: `3px solid ${card.accent}` }}>
                  <span style={{
                    alignSelf: 'flex-start',
                    fontFamily: 'var(--font-body)',
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: card.accent,
                    background: card.bg,
                    padding: '5px 12px', borderRadius: 999,
                    marginBottom: 18,
                  }}>
                    {card.planLabel}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(19px, 2vw, 23px)',
                    fontWeight: 500, lineHeight: 1.22, color: 'var(--color-ink)',
                    letterSpacing: '-0.01em', marginBottom: 10, display: 'block',
                  }}>
                    {card.title}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic', fontSize: 14,
                    color: card.accent, marginBottom: 12, lineHeight: 1.45, display: 'block',
                  }}>
                    {card.sub}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13, lineHeight: 1.75,
                    color: 'var(--color-body)', display: 'block',
                  }}>
                    {card.desc}
                  </span>
                  <span className="card-cta" style={{ color: card.accent }}>
                    {card.cta} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeIn delay={0.25}>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link href="/triaje" className="btn-ghost" style={{ fontSize: 13 }}>
              Hacer el cuestionario completo <span style={{ opacity: 0.6, fontSize: 12 }}>~2 min</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
