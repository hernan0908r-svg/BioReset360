'use client';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

const DARK_BG = '#1F302E';

export default function FinalCtaSection() {
  return (
    <section style={{ background: DARK_BG, position: 'relative', overflow: 'hidden' }}>
      <style jsx>{`
        .final-cta-inner {
          padding-top: var(--spacing-section);
          padding-bottom: var(--spacing-section);
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-light {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          color: var(--color-ink);
          background: var(--color-canvas);
          padding: 16px 36px;
          border-radius: var(--rounded-md);
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .btn-light:hover { background: #fff; }
        .btn-outline-light {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          color: rgba(246,242,234,0.85);
          border: 1px solid rgba(246,242,234,0.3);
          padding: 16px 36px;
          border-radius: var(--rounded-md);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .btn-outline-light:hover { border-color: rgba(246,242,234,0.7); color: #fff; }
      `}</style>

      {/* Blob decorativo */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: -120, right: -100, width: 420, height: 420,
        borderRadius: '50%', background: 'rgba(246,242,234,0.04)', pointerEvents: 'none',
      }} />

      <div className="container-padding final-cta-inner" style={{ maxWidth: 760, margin: '0 auto' }}>
        <FadeIn>
          <div className="eyebrow-dark" style={{ marginBottom: 20 }}>Da el primer paso</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: 'var(--color-on-dark)',
            marginBottom: 20,
          }}>
            No tienes que<br /><em>resolverlo a solas.</em>
          </h2>
          <p className="body-lead-dark" style={{ maxWidth: 480, margin: '0 auto 40px' }}>
            Cinco preguntas, dos minutos — y una recomendación honesta sobre el proceso que se ajusta a tu momento. Sin compromiso.
          </p>
          <div className="cta-buttons">
            <Link href="/triaje" className="btn-light">Encuentra tu plan →</Link>
            <Link href="/precios" className="btn-outline-light">Ver planes y precios</Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
