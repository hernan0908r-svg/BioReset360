'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

const whatIs = [
  '4, 8 o 12 semanas con inicio, estructura y cierre real.',
  'Ciencia clínica + herramientas de regulación integradas.',
  'Materiales que te llevas y puedes usar después del proceso.',
];

export default function HeroSection() {
  return (
    <section style={{ background: 'var(--color-canvas)', overflow: 'hidden', position: 'relative' }}>
      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 6fr 5fr;
          gap: 64px;
          align-items: center;
          padding-top: 72px;
          padding-bottom: 72px;
        }
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; gap: 48px; padding-top: 48px; }
        }
        .what-is {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px 80px;
          padding-top: 64px;
          margin-top: 64px;
          border-top: 1px solid var(--color-hairline);
          align-items: start;
        }
        @media (max-width: 768px) {
          .what-is { grid-template-columns: 1fr; gap: 32px; padding-top: 48px; margin-top: 48px; }
        }
        .cta-row { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
        .proof-line {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-muted);
          letter-spacing: 0.01em;
        }
        .proof-line .divider {
          width: 3px; height: 3px; border-radius: 50%;
          background: var(--color-hairline);
        }
      `}</style>

      {/* Background blob — uno solo, sutil */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: -60, right: -80, width: 460, height: 520,
        borderRadius: '62% 38% 65% 35% / 55% 50% 50% 45%',
        background: 'rgba(45,93,90,0.08)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container-padding" style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* LEFT — Copy (el mensaje primero) */}
          <div>
            <FadeIn delay={0.08}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 5.5vw, 62px)',
                fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em',
                color: 'var(--color-ink)', marginBottom: 24,
              }}>
                Algo no está<br />donde debería.<br /><em>Trabajémoslo.</em>
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="body-lead" style={{ maxWidth: 420, marginBottom: 36 }}>
                Un proceso de psicología integrativa diseñado para ti — con estructura, dirección y un cierre real. Dirigido personalmente por la Dra. Patricia Rozo.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="cta-row" style={{ marginBottom: 28 }}>
                <Link href="/triaje" className="btn-primary">Encuentra tu plan · 2 min</Link>
                <Link href="/el-terapeuta" className="btn-ghost">Conocer a la Dra. Rozo</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.26}>
              <div className="proof-line">
                <span>12+ años de práctica clínica</span>
                <span className="divider" />
                <span>300+ procesos acompañados</span>
                <span className="divider" />
                <span>Presencial y virtual</span>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT — Photo */}
          <FadeIn delay={0.15} direction="none">
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                height: 'clamp(380px, 52vh, 560px)',
                borderRadius: '120px 120px 16px 16px',
                overflow: 'hidden',
                background: 'var(--color-surface-strong)',
              }}>
                <Image
                  src="/images/dra-rozo.jpg"
                  alt="Dra. Patricia Rozo, psicóloga integrativa y creadora del Método Enfoque 360"
                  fill priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ¿Qué es BioReset360? */}
        <FadeIn delay={0.1}>
          <div className="what-is">
            {/* Left — label + heading */}
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>¿Qué es BioReset360?</div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 3vw, 36px)',
                fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.02em',
                color: 'var(--color-ink)', marginBottom: 20,
              }}>
                No es terapia indefinida.<br /><em>Es un proceso con cierre.</em>
              </h2>
              <p className="body-lead" style={{ maxWidth: 420 }}>
                Psicología clínica con herramientas de regulación — combinadas en un proceso que tiene inicio, estructura y un final concreto. Para quienes quieren cambiar algo real, no solo hablar de ello.
              </p>
            </div>

            {/* Right — for whom + bullet points */}
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>¿Para quién es?</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-body)', lineHeight: 1.7, marginBottom: 24 }}>
                Para quienes sienten que algo no fluye — en lo emocional, lo relacional o lo existencial — y quieren abordarlo con seriedad.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {whatIs.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'var(--color-primary)',
                      flexShrink: 0, marginTop: 2,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                        <path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: 'var(--color-body)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
