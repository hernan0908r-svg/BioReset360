'use client';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const pillars = [
  {
    title: 'Enfoque 360°',
    desc: 'Integra la mente (psicología), el cuerpo (sensaciones) y el espíritu (energía) de forma inseparable. No fragmentamos al ser humano.',
  },
  {
    title: 'Resultados Reales',
    desc: 'Procesos breves y enfocados — de 1 a 12 sesiones — diseñados para que recuperes tu bienestar sin años de terapia interminable.',
  },
  {
    title: 'Atención de Autor',
    desc: 'Tú no eres un paciente más. Eres un consultante atendido directamente por la creadora del modelo, sin intermediarios.',
  },
];

export default function MetodologiaSection() {
  return (
    <section style={{ background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 60px' }}>

        {/* Header row */}
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 96, gap: 80 }}>
            <div style={{ maxWidth: 600 }}>
              <div className="eyebrow-dark" style={{ marginBottom: 24 }}>El Método · Psicología del Alma</div>
              <h2 className="display-serif-dark" style={{ fontSize: 'clamp(40px, 4.5vw, 64px)', lineHeight: 1.08 }}>
                ¿Qué es<br />BioReset360®?
              </h2>
            </div>
            <p className="body-lead-dark" style={{ maxWidth: 380, paddingTop: 16, flexShrink: 0 }}>
              Una metodología de Psicología del Alma creada y dirigida exclusivamente por la Dra. Patricia Rozo. A diferencia de la terapia convencional, busca un reseteo integral del ser humano.
            </p>
          </div>
        </FadeIn>

        {/* Numbered pillar rows */}
        <StaggerContainer staggerDelay={0.1}>
          {pillars.map((pillar, i) => (
            <StaggerItem key={i} direction="none">
              <div style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr 1fr',
                gap: 48,
                padding: '44px 0',
                borderTop: '1px solid rgba(253,248,240,0.10)',
                alignItems: 'start',
              }}>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'rgba(200, 137, 58, 0.70)',
                  paddingTop: 6,
                  letterSpacing: '0.05em',
                }}>
                  0{i + 1}
                </div>
                <h3 className="display-serif-dark" style={{ fontSize: 'clamp(24px, 2.5vw, 34px)', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                  {pillar.title}
                </h3>
                <p className="body-lead-dark" style={{ paddingTop: 4 }}>
                  {pillar.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
          <div style={{ borderTop: '1px solid rgba(253,248,240,0.10)' }} />
        </StaggerContainer>

        {/* Pull quote */}
        <FadeIn delay={0.2}>
          <div style={{ marginTop: 96 }}>
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 2.5vw, 32px)',
              fontWeight: 400,
              color: 'var(--color-on-dark)',
              lineHeight: 1.45,
              maxWidth: 760,
              marginBottom: 24,
            }}>
              "Tú no eres un paciente más en una clínica. Eres un consultante atendido directamente por la creadora del modelo."
            </blockquote>
            <cite style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              fontStyle: 'normal',
              color: 'rgba(253,248,240,0.40)',
              letterSpacing: '0.05em',
            }}>
              — Dra. Patricia Rozo, Creadora del Método Enfoque 360
            </cite>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
