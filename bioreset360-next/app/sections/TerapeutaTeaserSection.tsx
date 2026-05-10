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
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 60px' }}>

        {/* Section eyebrow */}
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: 64 }}>La Dra. Patricia Rozo</div>
        </FadeIn>

        {/* Asymmetric 5:4 grid — text left, photo right */}
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gap: 100, alignItems: 'start' }}>

          {/* Left: editorial text content */}
          <div>
            <FadeIn delay={0.05}>
              <h2 className="display-serif" style={{ fontSize: 'clamp(36px, 4vw, 60px)', lineHeight: 1.08, marginBottom: 44 }}>
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
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      padding: '16px 0',
                      borderTop: i === 0 ? '1px solid var(--color-hairline)' : 'none',
                      borderBottom: '1px solid var(--color-hairline)',
                      gap: 24,
                    }}>
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
            <div style={{ position: 'sticky', top: 100 }}>
              <div style={{ position: 'relative', height: 620 }}>
                <Image
                  src="/images/dra-rozo.jpg"
                  alt="Dra. Patricia Rozo"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
                {/* Floating name card */}
                <div style={{
                  position: 'absolute',
                  bottom: -20,
                  left: -32,
                  background: 'var(--color-canvas)',
                  border: '1px solid var(--color-hairline)',
                  padding: '20px 28px',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400, color: 'var(--color-ink)', marginBottom: 4 }}>
                    Dra. Patricia Rozo
                  </div>
                  <div className="eyebrow" style={{ letterSpacing: '0.05em' }}>
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
