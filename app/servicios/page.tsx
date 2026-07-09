'use cache';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PLANES } from '@/data/planes';

export const metadata: Metadata = {
  title: 'El Método Enfoque 360 · BioReset360®',
  description: 'Conoce el Método Enfoque 360: un solo proceso psicoterapéutico con tres niveles de profundidad — Essencial, Vital y Quantum — diseñado y ejecutado personalmente por la Dra. Patricia Rozo.',
};

function formatPrecio(n: number) {
  return n.toLocaleString('es-CO');
}

export default async function ElMetodoPage() {
  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '100vh' }}>
      <style>{`
        .metodo-header { padding: 64px 48px 72px; }
        .plan-chapter { padding: 72px 48px; }
        .plan-chapter-inner { max-width: 1100px; margin: 0 auto; }
        .plan-top-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; margin-bottom: 56px; }
        .quien-grid, .del-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .fase-list { display: flex; flex-direction: column; gap: 0; }
        .fase-row { display: flex; gap: 20px; padding: 22px 0; border-top: 1px solid var(--color-hairline); }
        .fase-row:last-child { }
        .metodo-cta { padding: 80px 48px; }
        .cta-banner { padding: 48px 56px; display: flex; justify-content: space-between; align-items: center; gap: 40px; }
        .cta-banner-title { font-size: 36px; }
        @media (max-width: 900px) {
          .plan-top-grid { grid-template-columns: 1fr; gap: 28px; }
          .quien-grid, .del-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .metodo-header { padding: 48px 24px 56px; }
          .plan-chapter { padding: 56px 24px; }
          .metodo-cta { padding: 48px 24px; }
          .cta-banner { flex-direction: column; align-items: flex-start; padding: 32px 28px; gap: 28px; }
          .cta-banner-title { font-size: 26px; }
        }
        @media (max-width: 480px) {
          .metodo-header { padding: 40px 16px 48px; }
          .plan-chapter { padding: 40px 16px; }
          .metodo-cta { padding: 40px 16px; }
          .cta-banner { padding: 28px 20px; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <section className="metodo-header">
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>El Método Enfoque 360</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.08, marginBottom: 24 }}>
              Un solo método.<br />Tres niveles de profundidad.
            </h1>
            <p className="body-lead" style={{ maxWidth: 640, margin: '0 auto 24px' }}>
              El Método Enfoque 360 es un proceso de psicología clínica con estructura, dirección y cierre real — diseñado y ejecutado personalmente por la Dra. Patricia Rozo. No es un protocolo genérico: cada nivel responde a un momento vital distinto, con fases, entregables y un final concreto definidos desde el inicio.
            </p>
            <Link href="/triaje" className="btn-secondary" style={{ padding: '11px 24px' }}>
              ¿No sabes cuál nivel es para ti? →
            </Link>
          </div>
        </div>
      </section>

      {/* ── UN CAPÍTULO POR PLAN ── */}
      {PLANES.map((plan, idx) => (
        <section
          key={plan.id}
          className="plan-chapter"
          style={{
            background: idx % 2 === 0 ? 'var(--color-surface-soft)' : 'var(--color-canvas)',
            borderTop: '1px solid var(--color-hairline)',
          }}
        >
          <div className="plan-chapter-inner">
            <div className="plan-top-grid">
              {/* Izquierda — identidad del plan */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)' }}>
                    {plan.nivel.toUpperCase()}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600,
                    background: plan.color.claro, color: plan.color.texto,
                    padding: '4px 10px', borderRadius: 999,
                  }}>
                    {plan.badge}
                  </span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.15, marginBottom: 8 }}>
                  {plan.nombre}®
                </h2>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16, color: plan.color.texto, marginBottom: 24 }}>
                  {plan.tagline}
                </p>
                <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginBottom: 28 }}>
                  {[
                    { v: plan.sesiones, l: 'Sesiones' },
                    { v: plan.semanas, l: 'Semanas' },
                    { v: plan.duracion, l: 'Por sesión' },
                  ].map(s => (
                    <div key={s.l}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1 }}>{s.v}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: 4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link
                    href={`/pago?plan=${plan.id}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
                      color: '#fff', background: plan.color.primario,
                      padding: '13px 26px', borderRadius: 8, textDecoration: 'none',
                    }}
                  >
                    Desde ${formatPrecio(Math.round(plan.precioTotal / plan.sesiones / 100) * 100)} COP/sesión ↗
                  </Link>
                  <Link href="/planes" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                    Explorar en detalle
                  </Link>
                </div>
              </div>

              {/* Derecha — para quién */}
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 16 }}>
                  Este proceso es para ti si…
                </div>
                <div className="quien-grid">
                  {plan.paraQuien.map((item, i) => (
                    <div key={i} style={{ padding: '16px 18px', borderRadius: 10, background: idx % 2 === 0 ? 'var(--color-canvas)' : '#fff', border: '1px solid var(--color-hairline)', borderLeft: `3px solid ${plan.color.primario}` }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 6, lineHeight: 1.3 }}>{item.titulo}</div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-body)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Estructura del proceso */}
            <div style={{ marginBottom: 48 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 16 }}>
                Estructura del proceso — {plan.semanas} semanas
              </div>
              <div className="fase-list">
                {plan.fases.map((fase, i) => (
                  <div key={i} className="fase-row">
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                      background: plan.color.claro, color: plan.color.texto,
                      fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 500,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {fase.num}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: plan.color.texto, marginBottom: 4 }}>
                        {fase.semana}
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 6, lineHeight: 1.25 }}>
                        {fase.titulo}
                      </div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--color-body)', margin: 0, maxWidth: 620 }}>
                        {fase.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Qué te llevas */}
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 16 }}>
                Qué te llevas al cerrar
              </div>
              <div className="del-grid">
                {plan.entregables.map((e, i) => (
                  <div key={i} style={{ padding: '18px 20px', borderRadius: 10, background: idx % 2 === 0 ? '#fff' : 'var(--color-surface-soft)', border: '1px solid var(--color-hairline)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 6 }}>{e.titulo}</div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-body)', lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA FINAL ── */}
      <section className="metodo-cta" style={{ background: 'var(--color-canvas)', borderTop: '1px solid var(--color-hairline)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="cta-banner" style={{ borderRadius: 'var(--rounded-lg)', background: 'var(--color-primary)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -60, top: -60, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,.05)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 14 }}>Tres niveles, un proceso</div>
              <h2 className="cta-banner-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--color-on-primary)', lineHeight: 1.2, marginBottom: 12 }}>¿Cuál nivel necesitas?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 400, color: 'rgba(255,255,255,.7)', maxWidth: 460 }}>
                No tienes que decidirlo solo/a. El cuestionario te orienta en dos minutos, sin compromiso.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0, position: 'relative', zIndex: 1 }}>
              <Link href="/triaje" style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: 'var(--color-ink)', padding: '14px 28px', borderRadius: 'var(--rounded-pill)', background: 'var(--color-canvas)', display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', textDecoration: 'none' }}>Encuentra tu plan →</Link>
              <Link href="/precios" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.7)', textAlign: 'center', padding: '8px', textDecoration: 'none' }}>Ver precios y comparativa</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
