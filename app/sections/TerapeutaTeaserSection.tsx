'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

const credPills = [
  'Psicología Clínica · U. de los Andes',
  'Neuropsicología · U. Complutense de Madrid',
  'Mindfulness MBSR · Jon Kabat-Zinn',
];

export default function TerapeutaTeaserSection() {
  return (
    <section style={{ background: 'var(--color-surface-soft)' }}>
      <style jsx>{`
        .terapeuta-grid {
          display: grid;
          grid-template-columns: 4fr 5fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .terapeuta-grid { grid-template-columns: 1fr; gap: 56px; }
          .sticky-photo { position: relative; top: 0; }
        }
        .cred-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 14px 0;
          gap: 24px;
          border-bottom: 1px solid var(--color-hairline);
        }
        .cred-row:first-child { border-top: 1px solid var(--color-hairline); }
        @media (max-width: 480px) {
          .cred-row { flex-direction: column; gap: 4px; }
        }
        .sticky-photo { position: sticky; top: 100px; }
        :global(.about-btn) {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: var(--color-ink);
          border: 1px solid var(--color-ink);
          padding: 13px 26px;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        :global(.about-btn:hover) { background: var(--color-ink); color: var(--color-canvas); }
      `}</style>

      <div className="container-padding" style={{ maxWidth: 1240, margin: '0 auto', paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>
        <FadeIn>
          <div className="eyebrow" style={{ marginBottom: 56 }}>La Dra. Patricia Rozo</div>
        </FadeIn>

        <div className="terapeuta-grid">
          {/* Left — photo (sticky) */}
          <FadeIn delay={0.1} direction="none">
            <div className="sticky-photo">
              <div style={{ position: 'relative', height: 'clamp(380px, 55vh, 580px)', overflow: 'hidden', borderRadius: '8px' }}>
                <Image
                  src="/images/dra-rozo.jpg"
                  alt="Dra. Patricia Rozo"
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              {/* Floating name card */}
              <div style={{
                marginTop: -24,
                marginLeft: -16,
                display: 'inline-block',
                background: 'var(--color-canvas)',
                border: '1px solid var(--color-hairline)',
                padding: '14px 20px',
                boxShadow: '0 4px 16px rgba(35,32,24,0.07)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 400, color: 'var(--color-ink)', marginBottom: 3 }}>Dra. Patricia Rozo</div>
                <div className="eyebrow" style={{ fontSize: 9, letterSpacing: '0.1em' }}>Creadora del Método Enfoque 360</div>
              </div>
            </div>
          </FadeIn>

          {/* Right — content */}
          <div>
            <FadeIn delay={0.05}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(30px, 3.5vw, 44px)',
                fontWeight: 400,
                color: 'var(--color-ink)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 36,
              }}>
                Una sola voz.<br /><em>Un método propio.</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <blockquote style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(16px, 1.6vw, 19px)',
                fontWeight: 400,
                color: 'var(--color-body)',
                lineHeight: 1.65,
                borderLeft: '2px solid var(--color-primary)',
                paddingLeft: 24,
                marginBottom: 36,
              }}>
                &ldquo;Diseñé BioReset360 porque quería un proceso que fuera clínicamente riguroso y profundamente humano al mismo tiempo. Eso no existía — así que lo construí.&rdquo;
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="body-lead" style={{ marginBottom: 44 }}>
                Cada sesión es conmigo — no con un equipo que no te conoce. Tu proceso parte de tu historia, no de un protocolo estándar.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 44 }}>
                {credPills.map(c => (
                  <span key={c} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12, fontWeight: 500,
                    color: 'var(--color-body)',
                    background: 'var(--color-canvas)',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 999,
                    padding: '7px 14px',
                  }}>{c}</span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <Link href="/el-terapeuta" className="about-btn">
                Conocer más sobre la Dra. Rozo →
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
