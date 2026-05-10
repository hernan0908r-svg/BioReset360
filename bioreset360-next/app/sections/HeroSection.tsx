'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const stats = [
  ['300+', 'Pacientes acompañados'],
  ['12+', 'Años de experiencia'],
  ['6', 'Modalidades terapéuticas'],
  ['1', 'Creadora del método'],
];

export default function HeroSection() {
  return (
    <section style={{ background: 'var(--color-canvas)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '80px 60px 0' }}>

        {/* Eyebrow */}
        <FadeIn delay={0.05}>
          <div className="eyebrow" style={{ marginBottom: 52, display: 'flex', alignItems: 'center', gap: 16 }}>
            <span>Psicología del Alma</span>
            <span style={{ width: 32, height: 1, background: 'var(--color-hairline)', display: 'inline-block' }} />
            <span>Bogotá, Colombia</span>
          </div>
        </FadeIn>

        {/* Main grid: text left, photo right */}
        <div style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: 72, alignItems: 'flex-end' }}>

          {/* Left: Headline + body + CTAs */}
          <div>
            <FadeIn delay={0.1}>
              <h1 className="display-serif" style={{ fontSize: 'clamp(64px, 7vw, 100px)', lineHeight: 1.01, marginBottom: 32 }}>
                BioReset<br />360®.
              </h1>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(20px, 2vw, 28px)',
                fontWeight: 400,
                lineHeight: 1.3,
                color: 'var(--color-body)',
                marginBottom: 28,
              }}>
                Para que vuelvas a ser tú.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <p className="body-lead" style={{ fontSize: 16, maxWidth: 420, marginBottom: 52 }}>
                Un acompañamiento profundo para quienes buscan paz mental, propósito y equilibrio duradero — creado y dirigido por la Dra. Patricia Rozo.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href="/triaje" style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--color-on-dark)',
                  padding: '15px 36px',
                  background: 'var(--color-ink)',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>
                  Iniciar mi proceso
                </Link>
                <Link href="/el-terapeuta" style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 400,
                  color: 'var(--color-muted)',
                  textDecoration: 'underline',
                  textUnderlineOffset: 4,
                  textDecorationColor: 'var(--color-hairline)',
                  letterSpacing: '0.01em',
                }}>
                  Conocer el Enfoque 360
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right: Photo — editorial, flush to bottom */}
          <FadeIn delay={0.15} direction="none">
            <div style={{ position: 'relative', height: 600 }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                <Image
                  src="/images/dra-rozo.jpg"
                  alt="Dra. Patricia Rozo"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              {/* Floating credential card */}
              <div style={{
                position: 'absolute',
                bottom: 40,
                left: -40,
                background: 'var(--color-canvas)',
                border: '1px solid var(--color-hairline)',
                padding: '20px 28px',
                maxWidth: 220,
              }}>
                <div className="eyebrow" style={{ marginBottom: 8 }}>Atención personal</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.3 }}>
                  100% con la<br />Dra. Rozo
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats bar */}
        <StaggerContainer staggerDelay={0.07}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid var(--color-hairline)',
            marginTop: 80,
          }}>
            {stats.map(([statValue, statLabel], i) => (
              <StaggerItem key={i} direction="up" duration={0.5}>
                <div style={{
                  padding: '32px 0',
                  borderRight: i < 3 ? '1px solid var(--color-hairline)' : 'none',
                  paddingLeft: i === 0 ? 0 : 32,
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 400, color: 'var(--color-accent)', letterSpacing: '-0.02em', lineHeight: 1 }}>{statValue}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-muted)', marginTop: 8, letterSpacing: '0.01em' }}>{statLabel}</div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}
