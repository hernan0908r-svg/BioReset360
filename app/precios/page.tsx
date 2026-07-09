'use client';
import Link from 'next/link';
import { PLANES, COMPARATIVA } from '@/data/planes';

function formatPrecio(n: number) {
  return n.toLocaleString('es-CO');
}

export default function PreciosPage() {
  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '100vh' }}>
      <style jsx>{`
        /* ── Cards grid ── */
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        @media (max-width: 1024px) {
          .plans-grid {
            grid-template-columns: 1fr;
            max-width: 520px;
            margin: 0 auto;
            gap: 24px;
          }
        }

        /* ── Stats row inside card ── */
        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          background: var(--color-surface-strong);
          border-radius: 8px;
          overflow: hidden;
        }
        .stat-cell {
          padding: 14px 0;
          text-align: center;
          border-right: 1px solid var(--color-hairline);
        }
        .stat-cell:last-child { border-right: none; }

        /* ── Comparison table ── */
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
        }
        .comparison-table th {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-muted);
          padding: 16px 12px;
          text-align: center;
          border-bottom: 2px solid var(--color-hairline);
        }
        .comparison-table th:first-child { text-align: left; }
        .comparison-table td {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-body);
          padding: 14px 12px;
          text-align: center;
          border-bottom: 1px solid var(--color-hairline);
        }
        .comparison-table td:first-child {
          text-align: left;
          font-weight: 500;
          color: var(--color-ink);
        }
        .comparison-table tr:last-child td { border-bottom: none; }
        @media (max-width: 640px) {
          .comparison-table th,
          .comparison-table td { font-size: 12px; padding: 10px 6px; }
        }

        /* ── Progress bar ── */
        .progress-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .progress-cell {
          text-align: center;
          padding: 32px 16px;
          border-right: 1px solid var(--color-hairline);
        }
        .progress-cell:last-child { border-right: none; }
        @media (max-width: 640px) {
          .progress-bar { grid-template-columns: 1fr; }
          .progress-cell { border-right: none; border-bottom: 1px solid var(--color-hairline); }
          .progress-cell:last-child { border-bottom: none; }
        }

        /* ── CTA buttons ── */
        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Plan CTA button hover ── */
        .plan-cta-btn:hover {
          opacity: 0.88;
        }
      `}</style>

      {/* ══════════ HEADER ══════════ */}
      <section style={{ padding: '80px 0 16px' }}>
        <div className="container-padding" style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>PLANES Y PRECIOS</div>
          <h1
            className="display-serif"
            style={{ fontSize: 'clamp(36px, 8vw, 56px)', marginBottom: 16 }}
          >
            Inversión en tu bienestar
          </h1>
          <p className="body-lead" style={{ maxWidth: 520, margin: '0 auto 24px' }}>
            Psicoterapia basada en evidencia · Tres niveles de transformación · Presencial y virtual · Pago en cuotas disponible
          </p>
          <Link href="/planes" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--color-accent)',
            borderBottom: '1px solid var(--color-hairline)',
            paddingBottom: 2,
          }}>
            Ver detalle completo de cada plan →
          </Link>
        </div>
      </section>

      {/* ══════════ PLAN CARDS ══════════ */}
      <section style={{ padding: '48px 0 80px' }}>
        <div className="container-padding" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="plans-grid">
            {PLANES.map(plan => (
              <div
                key={plan.id}
                className="ambient-shadow"
                style={{
                  background: '#ffffff',
                  borderRadius: 16,
                  padding: 'clamp(28px, 4vw, 40px)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: plan.destacado
                    ? `2px solid ${plan.color.primario}`
                    : '1px solid var(--color-hairline)',
                  overflow: 'hidden',
                }}
              >
                {/* Más elegido badge */}
                {plan.destacado && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 28,
                    background: plan.color.primario,
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    borderRadius: '0 0 8px 8px',
                  }}>
                    MÁS ELEGIDO
                  </div>
                )}

                {/* Nivel + badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                  }}>
                    {plan.nivel.toUpperCase()}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    fontWeight: 600,
                    background: `${plan.color.primario}18`,
                    color: plan.color.texto,
                    padding: '4px 10px',
                    borderRadius: 9999,
                    border: `1px solid ${plan.color.primario}35`,
                  }}>
                    {plan.badge}
                  </span>
                </div>

                {/* Plan name */}
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3.5vw, 34px)',
                  fontWeight: 500,
                  color: 'var(--color-ink)',
                  lineHeight: 1.15,
                  marginBottom: 6,
                }}>
                  {plan.nombre}®
                </h2>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'var(--color-muted)',
                  marginBottom: 24,
                  fontStyle: 'italic',
                }}>
                  {plan.tagline}
                </p>

                {/* Stats row */}
                <div className="stats-row" style={{ marginBottom: 28 }}>
                  {[
                    { val: plan.sesiones, label: 'Sesiones' },
                    { val: plan.semanas, label: 'Semanas' },
                    { val: plan.duracion, label: 'Por sesión' },
                  ].map(s => (
                    <div key={s.label} className="stat-cell">
                      <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 22,
                        fontWeight: 500,
                        color: 'var(--color-ink)',
                        lineHeight: 1,
                      }}>
                        {s.val}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 10,
                        color: 'var(--color-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginTop: 4,
                      }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price — anclado en valor por sesión */}
                <div style={{
                  background: `${plan.color.primario}0e`,
                  border: `1px solid ${plan.color.primario}25`,
                  borderRadius: 10,
                  padding: '16px 20px',
                  marginBottom: 24,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    fontWeight: 600,
                    color: plan.color.texto,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}>
                    DESDE
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(26px, 3vw, 32px)',
                    fontWeight: 500,
                    color: 'var(--color-ink)',
                    letterSpacing: '-0.5px',
                    lineHeight: 1,
                  }}>
                    ${formatPrecio(Math.round(plan.precioTotal / plan.sesiones / 100) * 100)}
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      fontWeight: 400,
                      color: 'var(--color-muted)',
                      marginLeft: 6,
                    }}>
                      COP / sesión
                    </span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: 'var(--color-muted)',
                    marginTop: 6,
                  }}>
                    Proceso completo: ${formatPrecio(plan.precioTotal)} COP · Pago en cuotas disponible
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'var(--color-hairline)', marginBottom: 20 }} />

                {/* Incluye */}
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--color-muted)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}>
                  INCLUYE
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32, flex: 1 }}>
                  {plan.incluye.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{
                        color: plan.color.primario,
                        fontSize: 14,
                        lineHeight: '20px',
                        flexShrink: 0,
                        fontWeight: 600,
                      }}>
                        ✓
                      </span>
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 13,
                        color: 'var(--color-body)',
                        lineHeight: 1.5,
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/pago?plan=${plan.id}`}
                  className="plan-cta-btn"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    color: '#ffffff',
                    background: plan.color.primario,
                    padding: '15px 24px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                    boxShadow: `0 4px 14px ${plan.color.primario}40`,
                  }}
                >
                  {plan.ctaBoton} ↗
                </Link>

                {/* Trust row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 14,
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  color: 'var(--color-muted)',
                }}>
                  <svg width="11" height="13" viewBox="0 0 12 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <rect x="1" y="6" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M3.5 6V4a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  Pago seguro con MercadoPago
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TABLA COMPARATIVA ══════════ */}
      <section style={{ padding: '80px 0', background: 'var(--color-surface-soft)' }}>
        <div className="container-padding" style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>COMPARATIVA DE PLANES</div>
          </div>
          <div
            className="ambient-shadow"
            style={{
              background: '#ffffff',
              borderRadius: 16,
              border: '1px solid var(--color-hairline)',
              overflow: 'hidden',
            }}
          >
            <div style={{ overflowX: 'auto' }}>
              <table className="comparison-table">
                <thead>
                  <tr style={{ background: 'var(--color-surface-strong)' }}>
                    <th style={{ minWidth: 200 }}></th>
                    <th>Essencial</th>
                    <th>Vital</th>
                    <th>Quantum</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARATIVA.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : 'var(--color-surface-soft)' }}>
                      <td>{row.label}</td>
                      <td style={{ color: row.essencial === '—' ? 'var(--color-muted)' : undefined }}>{row.essencial}</td>
                      <td style={{ color: row.vital === '—' ? 'var(--color-muted)' : undefined }}>{row.vital}</td>
                      <td style={{ color: row.quantum === '—' ? 'var(--color-muted)' : undefined }}>{row.quantum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BARRA DE PROGRESIÓN ══════════ */}
      <section style={{ padding: '0', borderTop: '1px solid var(--color-hairline)' }}>
        <div className="container-padding" style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="progress-bar">
            {PLANES.map((plan, i) => (
              <div key={plan.id} className="progress-cell">
                <div style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: plan.color.primario,
                  margin: '0 auto 12px',
                  boxShadow: `0 0 0 4px ${plan.color.primario}20`,
                }} />
                {i < PLANES.length - 1 && (
                  <div style={{
                    position: 'absolute' as const,
                    top: '50%',
                    right: 0,
                    width: 24,
                    height: 1,
                    background: 'var(--color-hairline)',
                  }} />
                )}
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase' as const,
                  color: 'var(--color-muted)',
                  marginBottom: 4,
                }}>
                  {plan.nivel.toUpperCase()}
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 500,
                  color: 'var(--color-ink)',
                  marginBottom: 4,
                }}>
                  {plan.nombre}®
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: plan.color.primario,
                }}>
                  ${formatPrecio(plan.precioTotal)} · {plan.semanas} sem.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA BOX ══════════ */}
      <section style={{ padding: '64px 0 96px' }}>
        <div className="container-padding" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div
            className="ambient-shadow"
            style={{
              background: 'var(--color-surface-dark)',
              borderRadius: 20,
              padding: 'clamp(40px, 5vw, 64px)',
              border: '1px solid var(--color-hairline)',
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 5vw, 36px)',
              fontWeight: 500,
              color: 'var(--color-ink)',
              lineHeight: 1.2,
              marginBottom: 16,
            }}>
              ¿No sabes qué nivel es para ti?
            </h3>
            <p className="body-lead" style={{ maxWidth: 480, margin: '0 auto 32px' }}>
              Realiza nuestro cuestionario de triaje emocional y recibe una
              recomendación personalizada en menos de 2 minutos.
            </p>
            <div className="cta-buttons">
              <Link href="/triaje" style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                fontWeight: 600,
                color: '#ffffff',
                background: 'var(--color-primary)',
                padding: '16px 36px',
                borderRadius: 8,
                display: 'inline-block',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(45,93,90,0.25)',
              }}>
                Iniciar Cuestionario →
              </Link>
              <Link href="/planes" style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                fontWeight: 500,
                color: 'var(--color-ink)',
                background: '#ffffff',
                border: '1px solid var(--color-hairline)',
                padding: '16px 36px',
                borderRadius: 8,
                display: 'inline-block',
                textDecoration: 'none',
              }}>
                Ver detalle de planes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
