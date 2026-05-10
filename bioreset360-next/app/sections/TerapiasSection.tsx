'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const therapies = [
  { name: 'Flores de Bach', cat: 'Energética', dur: '60 min', desc: 'Esencias florales para equilibrar estados emocionales y patrones de conducta desde el campo vibracional.' },
  { name: 'Sonido Binaural', cat: 'Vibración', dur: '75 min', desc: 'Frecuencias de audio que sincronizan los hemisferios cerebrales, induciendo estados profundos de calma.' },
  { name: 'Cromoterapia', cat: 'Lumínica', dur: '50 min', desc: 'Frecuencias de color para restaurar el equilibrio energético del cuerpo y aliviar tensiones emocionales.' },
  { name: 'Mindfulness', cat: 'Contemplativa', dur: '60 min', desc: 'Prácticas de atención plena para reducir el ruido mental y cultivar ecuanimidad duradera.' },
  { name: 'Reiki', cat: 'Energética', dur: '60 min', desc: 'Canalización de energía vital para liberar bloqueos y activar los mecanismos de autosanación natural.' },
  { name: 'Aromaterapia', cat: 'Sensorial', dur: '45 min', desc: 'Aceites esenciales puros para estimular el sistema límbico y regular estados emocionales.' },
];

export default function TerapiasSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="servicios" style={{ background: 'var(--color-surface-soft)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 60px' }}>

        {/* Header */}
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, gap: 40 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Terapias Complementarias</div>
              <h2 className="display-serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
                Seis caminos<br /><em>hacia el equilibrio.</em>
              </h2>
              <p className="body-lead" style={{ marginTop: 20, maxWidth: 460 }}>
                Estas terapias se ofrecen de forma independiente o como apoyo a tu plan de psicología clínica para acelerar tu proceso de sanación integral.
              </p>
            </div>
            <Link href="/servicios" style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'var(--color-muted)',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
              textDecorationColor: 'var(--color-hairline)',
              flexShrink: 0,
              paddingBottom: 4,
            }}>
              Ver todas →
            </Link>
          </div>
        </FadeIn>

        {/* Editorial accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {therapies.map((therapy, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={therapy.name}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{ borderTop: '1px solid var(--color-hairline)', cursor: 'pointer' }}
                animate={{ backgroundColor: isOpen ? 'var(--color-canvas)' : 'transparent' }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '48px 1fr auto 96px 32px',
                    gap: 32,
                    padding: '28px 24px 28px 0',
                    alignItems: 'center',
                  }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-accent)', letterSpacing: '0.05em', opacity: 0.75 }}>
                    0{index + 1}
                  </span>
                  <span className="display-serif" style={{ fontSize: 'clamp(20px, 2vw, 28px)', letterSpacing: '-0.01em' }}>
                    {therapy.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {therapy.cat}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', textAlign: 'right' }}>
                    {therapy.dur}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                    style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--color-muted)', textAlign: 'right', lineHeight: 1, display: 'inline-block' }}
                  >
                    +
                  </motion.span>
                </motion.div>

                {/* Smooth height animation on expand */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="desc"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 24px 36px 80px' }}>
                        <p className="body-lead" style={{ maxWidth: 560, lineHeight: 1.8, color: 'var(--color-body)' }}>
                          {therapy.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <div style={{ borderTop: '1px solid var(--color-hairline)' }} />
        </div>

      </div>
    </section>
  );
}
