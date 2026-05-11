'use cache';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Planes de Sanación · BioReset360®',
  description: 'Conoce los planes de sanación diseñados por la Dra. Patricia Rozo.',
};

const plans = [
  { id: 'essencial', name: 'Essencial', tag: 'Primer paso al bienestar', price: '290.000', per: 'por sesión', dur: '60 min por sesión', col: 'var(--color-signature-coral)', colL: 'var(--color-canvas)', feat: false, cta: 'Adquirir Plan', items: ['Consulta psicológica inicial', 'Evaluación emocional', 'Plan terapéutico personal', null, null, null] },
  { id: 'vital', name: 'Vital', tag: 'El camino más elegido', price: '890.000', per: 'COP / mes', dur: '4 sesiones + 2 terapias complementarias', col: 'var(--color-signature-forest)', colL: 'var(--color-surface-soft)', feat: true, cta: 'Adquirir Plan Vital', items: ['Consulta psicológica semanal', 'Evaluación continua', 'Plan terapéutico adaptativo', '2 terapias complementarias / mes', 'Soporte vía WhatsApp', null] },
  { id: 'premium', name: 'Premium', tag: 'Transformación integral 360°', price: '1.890.000', per: 'COP / mes', dur: 'Acceso ilimitado · Sin restricciones', col: 'var(--color-signature-yellow)', colL: 'var(--color-canvas)', feat: false, cta: 'Adquirir Plan Premium', items: ['Sesiones psicológicas ilimitadas', 'Evaluación profunda continua', 'Plan terapéutico integral', 'Todas las terapias complementarias', 'Soporte prioritario WhatsApp', 'Sesiones de integración semanales'] },
];

export default async function PlanesPage() {
  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '100vh', paddingTop: 64, paddingBottom: 64 }}>
      <style>{`
        .planes-section { padding: 0 48px; }
        .planes-header h1 { font-size: 64px; }
        .planes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; align-items: start; }
        .plan-card { padding: 36px; }
        .plan-price-num { font-size: 40px; }
        .planes-cta-box { padding: 48px; }
        .planes-cta-box h3 { font-size: 36px; }
        @media (max-width: 900px) {
          .planes-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .planes-section { padding: 0 24px; }
          .planes-header h1 { font-size: clamp(36px, 9vw, 56px); }
          .plan-card { padding: 24px; }
          .plan-price-num { font-size: 32px; }
          .planes-cta-box { padding: 28px 24px; }
          .planes-cta-box h3 { font-size: 26px; }
        }
        @media (max-width: 480px) {
          .planes-section { padding: 0 16px; }
        }
      `}</style>

      <section id="planes" className="planes-section">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="planes-header" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-border-strong)', marginBottom: 16 }}>Planes de Sanación</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.1, marginBottom: 18, letterSpacing: '-1px' }}>Elige tu plan.</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 400, color: 'var(--color-body)', maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>
              Atención personal y directa de la Dra. Patricia Rozo.
            </p>
          </div>

          <div className="planes-grid">
            {plans.map(p => (
              <div key={p.id} className="hover-card plan-card" style={{ borderRadius: 'var(--rounded-md)', background: p.colL, border: p.feat ? `1px solid var(--color-primary)` : '1px solid var(--color-hairline)', position: 'relative', boxShadow: p.feat ? '0 12px 32px rgba(0,0,0,.06)' : 'none' }}>
                {p.feat && <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: 'var(--color-on-primary)', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, padding: '4px 16px', borderRadius: 'var(--rounded-pill)', whiteSpace: 'nowrap', letterSpacing: '1px' }}>MÁS RECOMENDADO</div>}
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: p.col, marginBottom: 20 }} />
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 4 }}>Plan</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 6 }}>{p.name}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', marginBottom: 24 }}>{p.tag}</p>
                <div style={{ marginBottom: 4 }}><span className="plan-price-num" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--color-ink)', letterSpacing: '-1px' }}>${p.price}</span></div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', marginBottom: 6 }}>{p.per}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 400, color: 'var(--color-body)', paddingBottom: 22, marginBottom: 22, borderBottom: `1px solid var(--color-hairline)` }}>{p.dur}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                  {p.items.map((it, i) => it ? (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-ink)', flexShrink: 0, fontWeight: 500 }}>✓</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 400, lineHeight: 1.45, color: 'var(--color-body)' }}>{it}</span>
                    </div>
                  ) : null)}
                </div>
                <Link href={`/pago?plan=${p.id}`} style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 500,
                  color: p.feat ? 'var(--color-on-primary)' : 'var(--color-ink)',
                  padding: '14px 24px', borderRadius: 'var(--rounded-pill)',
                  background: p.feat ? 'var(--color-primary)' : 'var(--color-canvas)',
                  border: p.feat ? 'none' : '1px solid var(--color-hairline)',
                  textDecoration: 'none', minHeight: 48,
                }}>{p.cta}</Link>
              </div>
            ))}
          </div>

          <div className="planes-cta-box" style={{ marginTop: 48, background: 'var(--color-signature-cream)', borderRadius: 'var(--rounded-lg)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--color-ink)', marginBottom: 16 }}>¿No sabes qué plan es para ti?</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-body)', marginBottom: 28, maxWidth: 520, margin: '0 auto 28px' }}>Realiza nuestro cuestionario de triaje emocional y recibe una recomendación personalizada en menos de 2 minutos.</p>
            <Link href="/triaje" style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 500, color: 'var(--color-on-primary)', background: 'var(--color-primary)', padding: '16px 36px', borderRadius: 'var(--rounded-pill)', display: 'inline-block', textDecoration: 'none' }}>Iniciar Cuestionario →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
