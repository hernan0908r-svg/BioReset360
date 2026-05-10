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
    <div style={{ background: 'var(--color-canvas)', minHeight: '100vh', paddingTop: 96, paddingBottom: 96 }}>
      <section id="planes" style={{ background: 'transparent', padding: '0 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-border-strong)', marginBottom: 16 }}>Planes de Sanación</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 64, fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.1, marginBottom: 18, letterSpacing: '-1px' }}>Elige tu plan.</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 400, color: 'var(--color-body)', maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>
              Atención personal y directa de la Dra. Patricia Rozo.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, alignItems: 'start' }}>
            {plans.map(p => (
              <div key={p.id} className="hover-card" style={{ borderRadius: 'var(--rounded-md)', background: p.colL, border: p.feat ? `1px solid var(--color-primary)` : '1px solid var(--color-hairline)', padding: '36px', position: 'relative', boxShadow: p.feat ? '0 12px 32px rgba(0,0,0,.06)' : 'none' }}>
                {p.feat && <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: 'var(--color-on-primary)', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, padding: '4px 16px', borderRadius: 'var(--rounded-pill)', whiteSpace: 'nowrap', letterSpacing: '1px' }}>MÁS RECOMENDADO</div>}
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: p.col, marginBottom: 20 }} />
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 4 }}>Plan</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 6 }}>{p.name}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', marginBottom: 24 }}>{p.tag}</p>
                <div style={{ marginBottom: 4 }}><span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 400, color: 'var(--color-ink)', letterSpacing: '-1px' }}>${p.price}</span></div>
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
                  padding: '12px 24px', borderRadius: 'var(--rounded-pill)',
                  background: p.feat ? 'var(--color-primary)' : 'var(--color-canvas)',
                  border: p.feat ? 'none' : '1px solid var(--color-hairline)',
                  textDecoration: 'none',
                }}>{p.cta}</Link>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 64, background: 'var(--color-signature-cream)', padding: '48px', borderRadius: 'var(--rounded-lg)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 16 }}>¿No sabes qué plan es para ti?</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--color-body)', marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>Realiza nuestro breve cuestionario de triaje emocional y recibe una recomendación personalizada en menos de 2 minutos.</p>
            <Link href="/triaje" style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 500, color: 'var(--color-on-primary)', background: 'var(--color-primary)', padding: '16px 36px', borderRadius: 'var(--rounded-pill)', display: 'inline-block', textDecoration: 'none' }}>Iniciar Cuestionario →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
