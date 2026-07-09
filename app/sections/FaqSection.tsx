'use client';
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { HOME_FAQS as faqs } from '@/data/faqs';
import { WHATSAPP_URL } from '@/lib/site';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: 'var(--color-canvas)' }}>
      <style jsx>{`
        .faq-layout {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 80px;
          align-items: flex-start;
        }
        @media (max-width: 900px) {
          .faq-layout { grid-template-columns: 1fr; gap: 40px; }
          .faq-sticky { position: static !important; top: auto !important; }
        }
        .faq-sticky {
          position: sticky;
          top: 96px;
        }
        .faq-item {
          border-bottom: 1px solid var(--color-hairline);
        }
        .faq-item:first-child { border-top: 1px solid var(--color-hairline); }
        .faq-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          padding: 22px 0;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          color: var(--color-ink);
          line-height: 1.45;
          transition: color 0.15s;
        }
        .faq-btn:hover { color: var(--color-primary); }
        .faq-btn:hover .faq-icon { border-color: var(--color-primary); }
        .faq-icon {
          width: 28px; height: 28px;
          flex-shrink: 0;
          margin-top: 1px;
          border: 1px solid var(--color-hairline);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.22s ease;
        }
        .faq-icon.open {
          background: var(--color-primary);
          border-color: var(--color-primary);
          transform: rotate(45deg);
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.32s ease, opacity 0.25s ease;
          padding: 0;
        }
        .faq-answer-inner {
          padding-bottom: 22px;
        }
        .faq-answer p {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.85;
          color: var(--color-body);
          margin: 0;
        }
      `}</style>

      <div className="container-padding" style={{ maxWidth: 1160, margin: '0 auto', paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>
        <div className="faq-layout">

          {/* Left — sticky title */}
          <FadeIn>
            <div className="faq-sticky">
              <div className="eyebrow" style={{ marginBottom: 18 }}>FAQ</div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 400,
                color: 'var(--color-ink)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: 20,
              }}>
                Preguntas<br />frecuentes
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '20px 0' }}>
                {['Proceso', 'Pagos', 'Sesiones', 'Resultados'].map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 11, fontWeight: 500,
                    color: 'var(--color-muted)',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 999,
                    padding: '4px 10px',
                  }}>{tag}</span>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.75, color: 'var(--color-body)' }}>
                ¿Algo no quedó claro?{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ color: 'var(--color-ink)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  Escríbenos por WhatsApp
                </a>
                {' '}— respondemos el mismo día.
              </p>
            </div>
          </FadeIn>

          {/* Right — accordion */}
          <FadeIn delay={0.1}>
            <div>
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="faq-item">
                    <button className="faq-btn" onClick={() => setOpenIndex(isOpen ? null : i)}>
                      <span>{faq.q}</span>
                      <div className={`faq-icon${isOpen ? ' open' : ''}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                          stroke={isOpen ? '#fff' : 'var(--color-ink)'}
                          strokeWidth="2.5" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </button>
                    <div
                      className="faq-answer"
                      style={{ maxHeight: isOpen ? '320px' : '0', opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="faq-answer-inner">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
