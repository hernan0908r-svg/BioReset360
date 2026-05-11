'use client';
import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';

const faqs = [
  {
    q: '¿Qué diferencia al Método Enfoque 360 de la terapia tradicional?',
    a: 'En BioReset360 no fragmentamos tu ser. Integramos psicología clínica profunda con herramientas de regulación nerviosa (como Flores de Bach o Sonido Binaural). En lugar de solo hablar del síntoma, buscamos un "reseteo" real del cuerpo, la mente y el campo energético.'
  },
  {
    q: '¿Cuántas sesiones necesito para ver resultados?',
    a: 'Depende enteramente de tu momento vital y tus objetivos. Algunos consultantes logran resolver crisis puntuales en nuestro Plan Vital (4 sesiones), mientras que otros buscan sanar traumas profundos que requieren un acompañamiento sostenido. Te sugerimos realizar el Triaje Emocional para guiarte mejor.'
  },
  {
    q: '¿La Dra. Rozo me atenderá personalmente?',
    a: 'Sí, al 100%. BioReset360 es una plataforma de atención de autor. No delegamos procesos a otros profesionales. Cada evaluación, diseño de plan y sesión terapéutica pasa exclusivamente por el criterio y las manos de la Dra. Patricia Rozo.'
  },
  {
    q: '¿Son obligatorias las terapias complementarias?',
    a: 'No. Sin embargo, forman parte del poder de la metodología. Mientras la psicología clínica aborda tus procesos cognitivos, herramientas como la Cromoterapia o el Sonido Binaural le "hablan" a tu cuerpo para sacarlo del estado de alerta y facilitar la recuperación.'
  },
  {
    q: '¿Cómo funciona el agendamiento y los pagos?',
    a: 'Puedes adquirir sesiones individuales o planes mensuales directamente a través de nuestra web. Al agendar, podrás elegir el horario que más te convenga en nuestro calendario interactivo y realizar el pago mediante pasarelas seguras.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ background: 'var(--color-canvas)', padding: '120px 48px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-border-strong)', marginBottom: 16 }}>Preguntas Frecuentes</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 4vw, 56px)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Resolvemos tus dudas.
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="hover-card-subtle"
                style={{ 
                  background: 'var(--color-surface-soft)', 
                  borderRadius: 'var(--rounded-lg)', 
                  border: '1px solid var(--color-hairline)',
                  overflow: 'hidden',
                }}
              >
                <button 
                  onClick={() => toggleOpen(i)}
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '24px 32px', 
                    background: 'transparent', 
                    border: 'none', 
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 500, color: isOpen ? 'var(--color-signature-coral)' : 'var(--color-ink)', transition: 'color 0.2s ease', paddingRight: 24 }}>
                    {faq.q}
                  </span>
                  <div style={{ 
                    width: 32, height: 32, borderRadius: '50%', background: isOpen ? 'var(--color-ink)' : 'transparent', border: isOpen ? 'none' : '1px solid var(--color-border-strong)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#fff' : 'var(--color-ink)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </button>
                
                <div style={{ 
                  height: isOpen ? 'auto' : 0, 
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: isOpen ? '0 32px 32px 32px' : '0 32px'
                }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--color-body)' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
