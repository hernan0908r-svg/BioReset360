'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const testimonials = [
  {
    name: 'Valentina M.',
    role: 'Diseñadora · 34 años',
    plan: 'Plan Vital',
    quote: 'Después de meses de ansiedad sin respuestas, el programa de la Dra. Rozo me dio herramientas que van más allá de la psicología convencional. El sonido binaural cambió mi forma de dormir.',
  },
  {
    name: 'Andrés C.',
    role: 'Emprendedor · 41 años',
    plan: 'Plan Premium',
    quote: 'Pensé que necesitaba solo hablar con alguien. Lo que encontré fue un proceso integral que tocó mi cuerpo, mente y alma. Tres meses después, soy otra persona.',
  },
  {
    name: 'Carolina R.',
    role: 'Docente · 28 años',
    plan: 'Plan Essencial',
    quote: 'Llegué en crisis y en la primera sesión sentí una contención que nunca había experimentado. La Dra. Rozo combina rigor clínico con una presencia que sana.',
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function TestimoniosSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section style={{ background: 'var(--color-surface-dark)' }}>
      <style jsx>{`
        .responsive-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 80px;
        }
        @media (max-width: 768px) {
          .responsive-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            margin-bottom: 48px;
          }
        }
        .attribution-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-top: 1px solid rgba(234,232,204,0.10);
          padding-top: 32px;
        }
        @media (max-width: 480px) {
          .attribution-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
        .preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 80px;
          border-top: 1px solid rgba(234,232,204,0.10);
          padding-top: 40px;
        }
      `}</style>
      <div className="container-padding" style={{ maxWidth: 1320, margin: '0 auto', paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>

        {/* Header */}
        <FadeIn>
          <div className="responsive-header">
            <div className="eyebrow-dark">Voces del programa</div>
            {/* Navigation */}
            <div style={{ display: 'flex', gap: 8 }}>
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  animate={{ background: activeIndex === i ? 'var(--color-on-dark)' : 'rgba(234,232,204,0.20)' }}
                  transition={{ duration: 0.3 }}
                  style={{ width: 32, height: 2, border: 'none', cursor: 'pointer', padding: 0 }}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Main large testimonial — crossfade with slide */}
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease }}
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 3vw, 42px)',
              fontWeight: 400,
              color: 'var(--color-on-dark)',
              lineHeight: 1.35,
              maxWidth: 900,
              marginBottom: 52,
              letterSpacing: '-0.01em',
            }}
          >
            "{active.quote}"
          </motion.blockquote>
        </AnimatePresence>

        {/* Attribution + plan */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`attr-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
            className="attribution-row"
          >
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--color-on-dark)', marginBottom: 4 }}>{active.name}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-on-dark-muted)' }}>{active.role}</div>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, color: 'rgba(139, 168, 60, 0.80)', letterSpacing: '0.10em', textTransform: 'uppercase' }}>
              {active.plan}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Preview row — all testimonials summarized */}
        <div className="preview-grid desktop-only">
          {testimonials.map((testimonial, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              animate={{ opacity: activeIndex === i ? 1 : 0.4 }}
              whileHover={{ opacity: activeIndex === i ? 1 : 0.7 }}
              transition={{ duration: 0.2 }}
              style={{
                all: 'unset',
                cursor: 'pointer',
                padding: '24px 0',
                borderRight: i < 2 ? '1px solid rgba(234,232,204,0.10)' : 'none',
                paddingRight: i < 2 ? 40 : 0,
              }}
            >
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: 'var(--color-on-dark)', marginBottom: 4 }}>{testimonial.name}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-on-dark-muted)', marginBottom: 12 }}>{testimonial.role}</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 13,
                color: 'var(--color-on-dark-muted)',
                lineHeight: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                "{testimonial.quote}"
              </div>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
