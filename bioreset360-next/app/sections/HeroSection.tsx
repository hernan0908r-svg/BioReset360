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
      <style jsx>{`
        .responsive-hero-grid {
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: 72px;
          align-items: flex-end;
        }
        @media (max-width: 1024px) {
          .responsive-hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            align-items: flex-start;
          }
        }
        @media (max-width: 768px) {
          .headline-title { font-size: clamp(44px, 12vw, 64px) !important; }
          .credential-card { left: 16px !important; bottom: 16px !important; padding: 12px 16px !important; }
          .stat-item { padding-left: 16px !important; }
          .stat-item:nth-child(2n) { border-right: none; }
          .stat-item:nth-child(n+3) { border-top: 1px solid var(--color-hairline); }
        }
        .credential-card {
          position: absolute;
          bottom: 40px;
          left: clamp(-20px, -5vw, -40px);
          background: var(--color-canvas);
          border: 1px solid var(--color-hairline);
          padding: 16px 24px;
          max-width: 200px;
          z-index: 2;
        }
        .responsive-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--color-hairline);
          margin-top: 80px;
        }
        @media (max-width: 768px) {
          .responsive-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            margin-top: 48px;
          }
        }
        .stat-item {
          padding: 32px 0;
          border-right: 1px solid var(--color-hairline);
          padding-left: 32px;
        }
        .stat-item:nth-child(4), .stat-item:last-child { border-right: none; }
      `}</style>

      <div className="container-padding" style={{ maxWidth: 1320, margin: '0 auto', paddingTop: 80 }}>

        {/* Eyebrow */}
        <FadeIn delay={0.05}>
          <div className="eyebrow" style={{ marginBottom: 52, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-muted)' }}>Psicología del Alma</span>
            <span style={{ width: 32, height: 1, background: 'var(--color-hairline)', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-muted)' }}>Bogotá, Colombia</span>
          </div>
        </FadeIn>

        {/* Main grid: text left, photo right */}
        <div className="responsive-hero-grid">
          {/* Left: Headline + body + CTAs */}
          <div>
            <FadeIn delay={0.1}>
              <h1 className="display-serif headline-title" style={{ fontSize: 'var(--text-display-xl-size)', lineHeight: 1.01, marginBottom: 32 }}>
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
            <div style={{ position: 'relative', height: 'clamp(400px, 50vh, 600px)' }}>
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
              <div className="credential-card">
                <div className="eyebrow" style={{ marginBottom: 8, fontSize: 10, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-muted)' }}>Atención personal</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.3 }}>
                  100% con la<br />Dra. Rozo
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats bar */}
        <StaggerContainer staggerDelay={0.07}>
          <div className="responsive-stats-grid">
            {stats.map(([statValue, statLabel], i) => (
              <StaggerItem key={i} direction="up" duration={0.5}>
                <div className="stat-item">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 400, color: 'var(--color-accent)', letterSpacing: '-0.02em', lineHeight: 1 }}>{statValue}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--color-muted)', marginTop: 8, letterSpacing: '0.01em' }}>{statLabel}</div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
