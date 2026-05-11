'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const QUESTIONS = [
  { q: '¿Cómo describirías tu estado emocional ahora mismo?', opts: [{ t: 'Me siento en crisis', s: 'Desbordado/a, sin poder manejarlo', score: 1, col: 'var(--color-signature-coral)', bg: 'var(--color-surface-soft)' }, { t: 'Siento bloqueos y ansiedad', s: 'Algo no fluye, me genera angustia', score: 2, col: 'var(--color-signature-forest)', bg: 'var(--color-surface-soft)' }, { t: 'Busco crecer profundamente', s: 'Estoy bien, pero quiero evolucionar', score: 3, col: 'var(--color-signature-yellow)', bg: 'var(--color-surface-soft)' }] },
  { q: '¿Hace cuánto tiempo te sientes así?', opts: [{ t: 'Es reciente y urgente', s: 'Días o pocas semanas', score: 1, col: 'var(--color-signature-coral)', bg: 'var(--color-surface-soft)' }, { t: 'Semanas o meses', s: 'Ya lleva un tiempo afectándome', score: 2, col: 'var(--color-signature-forest)', bg: 'var(--color-surface-soft)' }, { t: 'Es algo a largo plazo', s: 'Quiero explorarlo con profundidad', score: 3, col: 'var(--color-signature-yellow)', bg: 'var(--color-surface-soft)' }] },
  { q: '¿Qué área de tu vida sientes más afectada?', opts: [{ t: 'Mi bienestar emocional', s: 'Crisis, ansiedad o desborde', score: 1, col: 'var(--color-signature-coral)', bg: 'var(--color-surface-soft)' }, { t: 'Relaciones o trabajo', s: 'No rindo, tengo conflictos', score: 2, col: 'var(--color-signature-forest)', bg: 'var(--color-surface-soft)' }, { t: 'Propósito e identidad', s: 'Quién soy y hacia dónde voy', score: 3, col: 'var(--color-signature-yellow)', bg: 'var(--color-surface-soft)' }] },
  { q: '¿Tienes experiencia previa en terapia?', opts: [{ t: 'No, es la primera vez', s: 'Nunca he ido a terapia', score: 1, col: 'var(--color-signature-coral)', bg: 'var(--color-surface-soft)' }, { t: 'Algo de experiencia', s: 'He ido de forma esporádica', score: 2, col: 'var(--color-signature-forest)', bg: 'var(--color-surface-soft)' }, { t: 'Sí, busco algo más profundo', s: 'Tengo experiencia y quiero más', score: 3, col: 'var(--color-signature-yellow)', bg: 'var(--color-surface-soft)' }] },
  { q: '¿Qué tipo de acompañamiento te resuena?', opts: [{ t: 'Atención rápida', s: 'Necesito apoyo inmediato', score: 1, col: 'var(--color-signature-coral)', bg: 'var(--color-surface-soft)' }, { t: 'Proceso con herramientas', s: 'Quiero estrategias y seguimiento', score: 2, col: 'var(--color-signature-forest)', bg: 'var(--color-surface-soft)' }, { t: 'Transformación integral', s: 'Cuerpo, mente y alma en armonía', score: 3, col: 'var(--color-signature-yellow)', bg: 'var(--color-surface-soft)' }] },
];

const RESULTS = {
  essencial: { plan: 'Essencial', col: 'var(--color-signature-coral)', bg: 'var(--color-surface-soft)', price: '290.000', headline: 'Tu momento pide atención y cuidado.', sub: 'Comenzar es el acto más valiente. El Plan Essencial te ofrece un primer espacio seguro de escucha y contención personal con la Dra. Rozo.', perks: ['Consulta psicológica inicial completa', 'Evaluación emocional personalizada', 'Plan terapéutico diseñado para ti', 'Seguimiento directo con la Dra. Rozo'] },
  vital: { plan: 'Vital', col: 'var(--color-signature-forest)', bg: 'var(--color-surface-soft)', price: '890.000', headline: 'Estás listo/a para un proceso más profundo.', sub: 'El Plan Vital combina psicología clínica con terapias complementarias para liberar bloqueos y recuperar tu flujo natural.', perks: ['4 sesiones mensuales de psicología', '2 terapias complementarias incluidas', 'Seguimiento entre sesiones', 'Evaluación continua de progreso'] },
  premium: { plan: 'Premium', col: 'var(--color-signature-yellow)', bg: 'var(--color-surface-soft)', price: '1.890.000', headline: 'Buscas transformación integral. Es tu momento.', sub: 'El Plan Premium es tu portal a un cambio profundo y real. Acceso ilimitado a todas las modalidades del Método Enfoque 360.', perks: ['Sesiones psicológicas ilimitadas', 'Todas las terapias complementarias', 'Sesiones de integración semanales', 'Acompañamiento prioritario diario'] },
};

export default function TriajePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const total = QUESTIONS.length;

  const transition = (cb: () => void) => {
    setVisible(false);
    setTimeout(() => { cb(); setVisible(true); }, 320);
  };

  const handleAnswer = (score: number) => {
    if (selected !== null) return;
    setSelected(score);
    setTimeout(() => {
      transition(() => {
        const newAnswers = [...answers, score];
        setAnswers(newAnswers);
        setSelected(null);
        if (newAnswers.length === total) setStep(total + 1);
        else setStep(s => s + 1);
      });
    }, 400);
  };

  const handleBack = () => {
    if (step <= 1) return;
    transition(() => { setAnswers(a => a.slice(0, -1)); setStep(s => s - 1); });
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || emailSending || emailSent) return;
    const r = RESULTS[planKey];
    setEmailSending(true);
    try {
      await fetch('/api/triaje/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, planKey, planName: r.plan, headline: r.headline, perks: r.perks, price: r.price }),
      });
      setEmailSent(true);
    } catch {
      // email delivery is optional — silently fail
    } finally {
      setEmailSending(false);
    }
  };

  const sum = answers.reduce((a, b) => a + b, 0);
  const planKey = sum <= 7 ? 'essencial' : sum <= 11 ? 'vital' : 'premium';

  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '100vh' }}>
      {/* Progress bar — solo visible en preguntas */}
      {step > 0 && step <= total && (
        <div style={{ position: 'sticky', top: 68, zIndex: 50, background: 'rgba(255,255,255,0.97)', borderBottom: '1px solid var(--color-hairline)', height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(16px, 4vw, 48px)' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)' }}>Pregunta {step} de {total}</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} style={{ width: i < step ? 28 : 6, height: 6, borderRadius: 3, background: i < step ? 'var(--color-primary)' : 'var(--color-hairline)', transition: 'all .4s ease' }} />
            ))}
          </div>
          <button onClick={handleBack} style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>← Volver</button>
        </div>
      )}

      <div>
        {/* Intro */}
        {step === 0 && (
          <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center', backgroundColor: 'var(--color-signature-cream)' }}>
            <FadeIn>
              <div style={{ maxWidth: 600, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', padding: '48px', borderRadius: 32, boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}>
                <div style={{ width: 72, height: 72, borderRadius: 24, background: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 36px' }}>
                  <svg width="36" height="36" viewBox="0 0 32 32" fill="none"><path d="M16 4 Q22 10 22 18 C22 22.4 19.3 25 16 25 C12.7 25 10 22.4 10 18 Q10 10 16 4Z" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" /></svg>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 20 }}>Cuestionario de Triaje Emocional</div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 8vw, 68px)', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.15, marginBottom: 24, letterSpacing: '-1px' }}>Encontremos el camino adecuado para ti</h1>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 400, color: 'var(--color-body)', lineHeight: 1.8, marginBottom: 16 }}>5 preguntas breves para identificar qué tipo de acompañamiento resonará mejor con tu momento actual.</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', marginBottom: 24, fontWeight: 500 }}>Sin juicios · Completamente confidencial · ~2 minutos</p>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, maxWidth: 400, margin: '0 auto 32px', textAlign: 'left' }}>
                  <input type="checkbox" id="privacy" checked={acceptedPrivacy} onChange={(e) => setAcceptedPrivacy(e.target.checked)} style={{ marginTop: 4, cursor: 'pointer', accentColor: 'var(--color-primary)' }} />
                  <label htmlFor="privacy" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.5, cursor: 'pointer' }}>
                    He leído y acepto la <Link href="/politica-de-privacidad" style={{ color: 'var(--color-ink)', textDecoration: 'underline' }}>Política de Tratamiento de Datos Personales</Link>.
                  </label>
                </div>
                <button 
                  onClick={() => transition(() => setStep(1))} 
                  disabled={!acceptedPrivacy}
                  style={{ fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 500, color: 'var(--color-on-primary)', padding: '18px 48px', borderRadius: 'var(--rounded-lg)', background: acceptedPrivacy ? 'var(--color-primary)' : 'var(--color-muted)', border: 'none', cursor: acceptedPrivacy ? 'pointer' : 'not-allowed', boxShadow: acceptedPrivacy ? '0 8px 24px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.2s ease', opacity: acceptedPrivacy ? 1 : 0.6 }}
                >
                  Comenzar →
                </button>
              </div>
            </FadeIn>
          </div>
        )}

        {/* Questions */}
        {step >= 1 && step <= total && (
          <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(16px)', transition: 'opacity .35s ease,transform .35s ease' }}>
            <div style={{ maxWidth: 620, width: '100%' }}>
              <FadeIn>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 24, textAlign: 'center' }}>Pregunta {step} de {total}</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.2, textAlign: 'center', marginBottom: 56, letterSpacing: '-0.5px' }}>{QUESTIONS[step - 1].q}</h2>
              </FadeIn>
              <StaggerContainer staggerDelay={0.08}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {QUESTIONS[step - 1].opts.map((opt, i) => {
                    const isSel = selected === opt.score;
                    return (
                      <StaggerItem key={i}>
                        <button onClick={() => handleAnswer(opt.score)} className="hover-card-subtle" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 24, padding: '28px 32px', borderRadius: 'var(--rounded-lg)', background: isSel ? opt.col : opt.bg, border: `2px solid ${isSel ? opt.col : 'transparent'}`, cursor: 'pointer', textAlign: 'left', transform: isSel ? 'scale(1.02)' : 'none', transition: 'all .25s ease' }}>
                          <div style={{ width: 44, height: 44, borderRadius: 14, background: isSel ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: isSel ? 'var(--color-on-primary)' : opt.col }}>
                            {String.fromCharCode(65 + i)}
                          </div>
                          <div>
                            <div style={{ fontFamily: 'var(--font-body)', fontSize: 20, fontWeight: 500, color: isSel ? 'var(--color-on-primary)' : 'var(--color-ink)', marginBottom: 6 }}>{opt.t}</div>
                            <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 400, color: isSel ? 'rgba(255,255,255,.8)' : 'var(--color-body)' }}>{opt.s}</div>
                          </div>
                        </button>
                      </StaggerItem>
                    );
                  })}
                </div>
              </StaggerContainer>
            </div>
          </div>
        )}

        {/* Results */}
        {step > total && (() => {
          const r = RESULTS[planKey];
          return (
            <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px 60px', textAlign: 'center' }}>
              <FadeIn>
                <div style={{ maxWidth: 640, width: '100%' }}>
                  <div style={{ width: 88, height: 88, borderRadius: 28, background: r.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
                    <svg width="42" height="42" viewBox="0 0 34 34" fill="none"><path d="M17 4L20 13H29L22 18.5L25 27L17 22L9 27L12 18.5L5 13H14Z" stroke={r.col} strokeWidth="1.5" strokeLinejoin="round" fill="none" /></svg>
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 12 }}>Tu perfil de bienestar</div>
                  <div style={{ display: 'inline-block', background: r.bg, color: r.col, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '8px 24px', borderRadius: 'var(--rounded-pill)', marginBottom: 24 }}>Plan {r.plan}</div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-1px' }}>{r.headline}</h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 20, fontWeight: 400, lineHeight: 1.8, color: 'var(--color-body)', marginBottom: 44 }}>{r.sub}</p>
                  <div className="hover-card" style={{ background: 'var(--color-canvas)', borderRadius: 24, padding: '40px', border: '1px solid var(--color-hairline)', marginBottom: 44, textAlign: 'left', boxShadow: '0 12px 32px rgba(0,0,0,.03)' }}>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 24 }}>¿Qué incluye?</div>
                    {r.perks.map((p, i) => (
                      <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: i < r.perks.length - 1 ? 16 : 0 }}>
                        <span style={{ color: r.col, fontWeight: 600, fontSize: 16, flexShrink: 0, marginTop: 1 }}>✓</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 400, color: 'var(--color-body)' }}>{p}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: 32, paddingTop: 28, borderTop: '1px solid var(--color-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-muted)' }}>Precio desde</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 500, color: 'var(--color-ink)' }}>${r.price} COP</div>
                    </div>
                  </div>
                  {/* Email capture — optional, sends result to inbox */}
                  {!emailSent ? (
                    <form onSubmit={handleEmailSubmit} style={{ marginBottom: 24, display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@correo.com"
                        required
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 14,
                          padding: '12px 20px',
                          border: '1px solid var(--color-hairline)',
                          background: 'var(--color-canvas)',
                          color: 'var(--color-ink)',
                          outline: 'none',
                          flexGrow: 1,
                          maxWidth: 260,
                        }}
                      />
                      <button
                        type="submit"
                        disabled={emailSending}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 13,
                          fontWeight: 500,
                          padding: '12px 22px',
                          background: 'transparent',
                          border: '1px solid var(--color-ink)',
                          color: 'var(--color-ink)',
                          cursor: emailSending ? 'wait' : 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {emailSending ? 'Enviando…' : 'Recibir por correo'}
                      </button>
                    </form>
                  ) : (
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', marginBottom: 24, textAlign: 'center' }}>
                      ✓ Resultado enviado a <strong style={{ color: 'var(--color-ink)' }}>{email}</strong>
                    </p>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <Link href={`/pago?plan=${planKey}`} style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 500, color: 'var(--color-on-primary)', padding: '18px 40px', borderRadius: 'var(--rounded-lg)', background: r.col, textAlign: 'center', textDecoration: 'none', boxShadow: '0 8px 24px rgba(0,0,0,.1)' }}>Adquirir Plan {r.plan} →</Link>
                    <Link href="/planes" style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-muted)', padding: '16px', textAlign: 'center', textDecoration: 'none' }}>Ver todos los planes</Link>
                  </div>
                  <div style={{ marginTop: 28 }}>
                    <button onClick={() => { setStep(0); setAnswers([]); setSelected(null); }} style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>Repetir cuestionario</button>
                  </div>
                </div>
              </FadeIn>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
