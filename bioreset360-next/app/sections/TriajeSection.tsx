'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowRight from '@/components/ArrowRight';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const cards = [
  {
    id: 'u',
    plan: 'Essencial',
    title: 'Necesito ayuda urgente',
    sub: 'Estoy en crisis o bajo gran presión',
    desc: 'Acceso inmediato. Sin listas de espera. Contención segura desde la primera sesión.',
    cta: 'Quiero atención hoy',
  },
  {
    id: 'b',
    plan: 'Vital',
    title: 'Siento un bloqueo o ansiedad',
    sub: 'Algo no fluye en mi vida',
    desc: 'Psicología clínica con herramientas vibracionales para liberar lo que te frena.',
    cta: 'Explorar mi bloqueo',
  },
  {
    id: 't',
    plan: 'Premium',
    title: 'Busco transformación profunda',
    sub: 'Quiero evolucionar en todos los niveles',
    desc: 'Programa inmersivo 360° que integra cuerpo, mente y espíritu para un cambio real.',
    cta: 'Iniciar mi transformación',
  },
];

export default function TriajeSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="triaje" style={{ background: 'var(--color-surface-dark)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 60px' }}>

        {/* Big serif question */}
        <FadeIn>
          <div style={{ marginBottom: 80 }}>
            <div className="eyebrow-dark" style={{ marginBottom: 28 }}>Triaje Emocional</div>
            <h2 className="display-serif-dark" style={{ fontStyle: 'italic', fontSize: 'clamp(40px, 5.5vw, 80px)', maxWidth: 760, marginBottom: 28 }}>
              ¿En qué momento estás hoy?
            </h2>
            <p className="body-lead-dark" style={{ maxWidth: 440 }}>
              Cada camino es diferente. Cuéntame dónde estás y te acompaño desde ahí.
            </p>
          </div>
        </FadeIn>

        {/* State cards */}
        <StaggerContainer staggerDelay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {cards.map(card => {
              const isHovered = hoveredId === card.id;
              return (
                <StaggerItem key={card.id} direction="up">
                  <motion.div
                    onMouseEnter={() => setHoveredId(card.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    style={{
                      border: `1px solid ${isHovered ? 'rgba(253,248,240,0.28)' : 'rgba(253,248,240,0.10)'}`,
                      padding: '48px 40px 44px',
                      cursor: 'pointer',
                      background: isHovered ? 'rgba(253,248,240,0.05)' : 'transparent',
                      transition: 'border-color 0.2s ease, background 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: isHovered ? 'rgba(200, 137, 58, 0.85)' : 'var(--color-on-dark-muted)',
                      marginBottom: 20,
                      transition: 'color 0.2s ease',
                    }}>
                      Plan {card.plan}
                    </div>
                    <h3 className="display-serif-dark" style={{ fontSize: 'clamp(22px, 2vw, 28px)', lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 10 }}>
                      {card.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: 15,
                      color: 'var(--color-on-dark-muted)',
                      marginBottom: 24,
                      lineHeight: 1.4,
                    }}>
                      {card.sub}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: 'rgba(253,248,240,0.45)',
                      marginBottom: 36,
                      flex: 1,
                    }}>
                      {card.desc}
                    </p>
                    <motion.div
                      animate={{ x: isHovered ? 6 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        fontFamily: 'var(--font-body)',
                        fontSize: 13,
                        fontWeight: 500,
                        color: isHovered ? 'var(--color-on-dark)' : 'var(--color-on-dark-muted)',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {card.cta} <ArrowRight />
                    </motion.div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Link to full questionnaire */}
        <FadeIn delay={0.3}>
          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
            <Link href="/triaje" style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 400,
              color: 'var(--color-on-dark-muted)',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
              textDecorationColor: 'rgba(253,248,240,0.20)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}>
              Hacer el cuestionario completo
              <span style={{ fontSize: 11, opacity: 0.5 }}>(~2 min)</span>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
