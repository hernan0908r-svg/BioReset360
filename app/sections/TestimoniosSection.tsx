'use client';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const testimonials = [
  {
    name: 'Valentina M.',
    role: 'Diseñadora · 34 años',
    plan: 'Plan Vital',
    planAccent: '#C2724B',
    planBg: '#F4E6DB',
    quote: 'Después de meses de ansiedad sin respuestas, el programa de la Dra. Rozo me dio herramientas que van más allá de la psicología convencional. El sonido binaural cambió mi forma de dormir.',
  },
  {
    name: 'Andrés C.',
    role: 'Emprendedor · 41 años',
    plan: 'Plan Quantum',
    planAccent: '#A2762F',
    planBg: '#F1E8D4',
    quote: 'Pensé que necesitaba solo hablar con alguien. Lo que encontré fue un proceso integral que tocó mi cuerpo, mente y alma. Tres meses después, soy otra persona.',
  },
  {
    name: 'Carolina R.',
    role: 'Docente · 28 años',
    plan: 'Plan Essencial',
    planAccent: '#2D5D5A',
    planBg: '#E4EDEB',
    quote: 'Llegué en crisis y en la primera sesión sentí una contención que nunca había experimentado. La Dra. Rozo combina rigor clínico con una presencia que sana.',
  },
];

export default function TestimoniosSection() {
  return (
    <section style={{ background: 'var(--color-canvas)', borderTop: '1px solid var(--color-hairline)' }}>
      <style jsx>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 48px;
        }
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr; max-width: 480px; }
        }
        .t-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--color-hairline);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .t-card:hover { box-shadow: var(--shadow-ambient); transform: translateY(-3px); }
        .accent-bar { height: 3px; }
        .card-content { padding: 28px 24px 24px; flex: 1; display: flex; flex-direction: column; }
      `}</style>

      <div className="container-padding" style={{ maxWidth: 1240, margin: '0 auto', paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Historias de clientes</div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 500, lineHeight: 1.15,
                letterSpacing: '-0.02em', color: 'var(--color-ink)',
              }}>
                Voces del programa.
              </h2>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', maxWidth: 240, lineHeight: 1.6, textAlign: 'right' }}>
              En sus propias palabras
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1}>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <StaggerItem key={i} direction="up">
                <div className="t-card">
                  <div className="accent-bar" style={{ background: t.planAccent }} />
                  <div className="card-content">
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(14px, 1.4vw, 16px)',
                      lineHeight: 1.7,
                      color: 'var(--color-ink)',
                      marginBottom: 24,
                      flex: 1,
                    }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginTop: 'auto', paddingTop: 18, borderTop: '1px solid var(--color-hairline)' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--color-ink)' }}>{t.name}</div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-muted)', marginTop: 2 }}>{t.role}</div>
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700,
                        letterSpacing: '0.10em', textTransform: 'uppercase',
                        color: t.planAccent, background: t.planBg,
                        padding: '4px 10px', borderRadius: 999,
                        whiteSpace: 'nowrap', flexShrink: 0,
                      }}>
                        {t.plan}
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
