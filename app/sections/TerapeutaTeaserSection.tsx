'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const credentials = [
  ['Psicología Clínica', 'U. de los Andes · Especialización'],
  ['Terapias Complementarias', 'IACT International · Certificación'],
  ['Mindfulness MBSR', 'Programa certificado Jon Kabat-Zinn'],
];

export default function TerapeutaTeaserSection() {
  return (
    <section style={{ background: 'var(--color-canvas)' }}>
      <style jsx>{`
        .responsive-terapeuta-grid {
          display: grid;
          grid-template-columns: 5fr 4fr;
          gap: 100px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .responsive-terapeuta-grid {
            grid-template-columns: 1fr;
            gap: 64px;
          }
          .sticky-photo { position: relative; top: 0; }
        }
        .cred-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 16px 0;
          gap: 24px;
          border-bottom: 1px solid var(--color-hairline);
        }
        .cred-row.first {
          border-top: 1px solid var(--color-hairline);
        }
        @media (max-width: 480px) {
          .cred-row { flex-direction: column; gap: 4px; padding: 12px 0; }
        }
        .sticky-photo { position: sticky; top: 100px; }
        @media (max-width: 768px) {
          .floating-name-card { left: 16px !important; bottom: -16px !important; }
        }
      `}</style>
      <div className="container-padding" style={{ maxWidth: 1320, margin: '0 auto', paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>

        {/* Section eyebrow */}
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: 64 }}>La Dra. Patricia Rozo</div>
        </FadeIn>

        {/* Asymmetric 5:4 grid — text left, photo right */}
        <div className="responsive-terapeuta-grid">
          {/* Left: editorial text content */}
          <div>
            <FadeIn delay={0.05}>
              <h2 className="display-serif" style={{ fontSize: 'var(--text-display-md-size)', lineHeight: 1.08, marginBottom: 44 }}>
                Una sola voz.<br /><em>Un método propio.</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <blockquote style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(16px, 1.6vw, 20px)',
                fontWeight: 400,
                color: 'var(--color-body)',
                lineHeight: 1.6,
                borderLeft: '2px solid var(--color-ink)',
                paddingLeft: 28,
                marginBottom: 44,
              }}>
                "BioReset360 no es una clínica ni un equipo de psicólogos. Es la plataforma que yo diseñé integrando ciencia clínica con herramientas de optimización del bienestar."
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="body-lead" style={{ marginBottom: 48 }}>
                Cada sesión, cada plan, cada decisión pasa directamente por mi rigor. Tu proceso es conmigo — sin intermediarios, sin protocolos genéricos.
              </p>
            </FadeIn>

            {/* Credentials as horizontal rows */}
            <StaggerContainer staggerDelay={0.08}>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 52 }}>
                {credentials.map(([credTitle, credSub], i) => (
                  <StaggerItem key={credTitle} direction="none">
                    <div className={`cred-row ${i === 0 ? 'first' : ''}`}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--color-ink)' }}>{credTitle}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', textAlign: 'right', flexShrink: 0 }}>{credSub}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <FadeIn delay={0.25}>
              <Link href="/el-terapeuta" style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--color-ink)',
                textDecoration: 'none',
                border: '1px solid var(--color-ink)',
                padding: '14px 28px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                letterSpacing: '0.01em',
              }}>
                Conocer más sobre la Dra. Rozo →
              </Link>
            </FadeIn>
          </div>

          {/* Right: photo sticky with floating card */}
          <FadeIn delay={0.1} direction="none">
            <div className="sticky-photo">
              <div style={{ position: 'relative', height: 'clamp(400px, 60vh, 620px)' }}>
                <Image
                  src="/images/dra-rozo.jpg"
                  alt="Dra. Patricia Rozo"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
                {/* Floating name card */}
                <div className="floating-name-card" style={{
                  position: 'absolute',
                  bottom: -20,
                  left: 'clamp(-20px, -4vw, -32px)',
                  background: 'var(--color-canvas)',
                  border: '1px solid var(--color-hairline)',
                  padding: '16px 24px',
                  maxWidth: 'calc(100% - 40px)',
                  zIndex: 2,
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400, color: 'var(--color-ink)', marginBottom: 4 }}>
                    Dra. Patricia Rozo
                  </div>
                  <div className="eyebrow" style={{ letterSpacing: '0.05em', fontSize: 10 }}>
                    Creadora del Método Enfoque 360
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
