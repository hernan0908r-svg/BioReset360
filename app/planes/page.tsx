'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PLANES } from '@/data/planes';

function formatPrecio(n: number) {
  return n.toLocaleString('es-CO');
}

export default function PlanesPage() {
  const [activeId, setActiveId] = useState('essencial');
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredDel, setHoveredDel] = useState<number | null>(null);

  const plan = PLANES.find(p => p.id === activeId)!;

  function handlePlanChange(id: string) {
    setActiveId(id);
    setExpandedPhase(0);
    setOpenFaq(null);
  }

  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '100vh' }}>
      <style jsx>{`
        /* ── Tab selector ── */
        .plan-tabs {
          display: flex;
          border-bottom: 2px solid var(--color-hairline);
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .plan-tabs::-webkit-scrollbar { display: none; }

        .plan-tab {
          flex: 1;
          min-width: 200px;
          padding: 0;
          background: transparent;
          border: none;
          border-bottom: 4px solid transparent;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.25s, background 0.25s;
          position: relative;
          bottom: -2px;
        }
        .plan-tab-inner {
          padding: 28px 36px 26px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          transition: background 0.25s;
        }
        .plan-tab:hover .plan-tab-inner {
          background: var(--color-surface-soft);
        }
        .plan-tab.active .plan-tab-inner {
          background: var(--tab-active-bg, rgba(45,93,90,0.07));
        }

        /* ── Split layout ── */
        .split-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 0;
          min-height: 80vh;
        }
        @media (max-width: 900px) {
          .split-layout { grid-template-columns: 1fr; }
          .sticky-sidebar { position: relative !important; top: 0 !important; border-right: none !important; border-bottom: 1px solid var(--color-hairline) !important; padding: 32px 24px !important; }
        }

        .sticky-sidebar {
          position: sticky;
          top: 72px;
          height: fit-content;
          border-right: 1px solid var(--color-hairline);
          padding: 48px 32px 48px;
          align-self: flex-start;
        }

        .sidebar-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 14px 0;
          border-bottom: 1px solid var(--color-hairline);
        }
        .sidebar-stat:last-of-type { border-bottom: none; }

        /* ── Phase timeline ── */
        .phase-item {
          border: 1px solid var(--color-hairline);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 12px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .phase-item:hover { border-color: var(--color-hairline); box-shadow: 0 2px 12px rgba(35,32,24,0.06); }
        .phase-item.open { border-color: currentColor; }

        .phase-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          cursor: pointer;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          transition: background 0.15s ease;
        }
        .phase-header:hover { background: var(--color-surface-soft); }
        .phase-header.open-header { background: transparent; }

        .phase-body {
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.35s ease;
        }

        /* ── Entregable cards ── */
        .del-card {
          border: 1px solid var(--color-hairline);
          border-radius: 12px;
          padding: 24px;
          cursor: default;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
          background: #fff;
        }
        .del-card:hover {
          border-color: var(--color-primary);
          box-shadow: 0 8px 24px rgba(45,93,90,0.12);
          transform: translateY(-2px);
        }
        .del-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 28px;
        }
        @media (max-width: 640px) {
          .del-grid { grid-template-columns: 1fr; }
        }

        /* ── Para quién ── */
        .quien-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 28px;
        }
        @media (max-width: 640px) {
          .quien-grid { grid-template-columns: 1fr; }
        }
        .quien-card {
          padding: 20px;
          border-radius: 10px;
          background: var(--color-canvas);
          border: 1px solid var(--color-hairline);
          border-left: 3px solid;
          transition: box-shadow 0.2s ease;
        }
        .quien-card:hover { box-shadow: 0 4px 16px rgba(35,32,24,0.07); }

        /* ── FAQ ── */
        .faq-row {
          border-bottom: 1px solid var(--color-hairline);
        }
        .faq-row:first-child { border-top: 1px solid var(--color-hairline); }
        .faq-btn-inner {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 18px 0;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: var(--color-ink);
          line-height: 1.45;
          transition: color 0.15s;
        }
        .faq-btn-inner:hover { color: var(--color-primary); }

        :global(.cta-btn) {
          display: block;
          width: 100%;
          padding: 14px 20px;
          text-align: center;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          border-radius: 10px;
          text-decoration: none;
          transition: opacity 0.2s ease, transform 0.15s ease;
          letter-spacing: 0.01em;
          margin-top: 28px;
        }
        :global(.cta-btn:hover) { opacity: 0.88; transform: translateY(-1px); }

        .content-section { padding: 56px 48px; }
        .content-section + .content-section { border-top: 1px solid var(--color-hairline); }
        @media (max-width: 768px) {
          .content-section { padding: 40px 24px; }
        }

        .section-eyebrow {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-muted);
          margin-bottom: 12px;
        }
      `}</style>

      {/* ══ HEADER ══ */}
      <section style={{ paddingTop: 72, paddingBottom: 0 }}>
        <div className="container-padding" style={{ maxWidth: 1100, margin: '0 auto', paddingBottom: 40 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 16 }}>
            Programas BioReset360
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--color-ink)', marginBottom: 16 }}>
            Explora cada proceso en detalle
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.75, color: 'var(--color-body)', maxWidth: 520 }}>
            Selecciona un programa y navega por su estructura, fases, entregables y preguntas frecuentes.
            Para ver precios y comparativa, visita{' '}
            <Link href="/precios" style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: 3 }}>la página de precios</Link>.
          </p>
        </div>

        {/* Tab selector */}
        <div className="container-padding" style={{ maxWidth: 1100, margin: '0 auto', padding: '0' }}>
          <div className="plan-tabs container-padding" style={{ paddingLeft: 0, paddingRight: 0 }}>
            {PLANES.map(p => {
              const isActive = activeId === p.id;
              return (
                <button
                  key={p.id}
                  className={`plan-tab${isActive ? ' active' : ''}`}
                  style={{
                    borderBottomColor: isActive ? p.color.primario : 'transparent',
                    color: p.color.primario,
                    ['--tab-active-bg' as string]: p.color.claro,
                  }}
                  onClick={() => handlePlanChange(p.id)}
                >
                  <div className="plan-tab-inner">
                    {/* Nivel pill */}
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      alignSelf: 'flex-start',
                    }}>
                      <span style={{
                        width: 7, height: 7, borderRadius: '50%',
                        background: isActive ? p.color.primario : 'var(--color-hairline)',
                        flexShrink: 0,
                        transition: 'background 0.25s',
                      }} />
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: isActive ? p.color.primario : 'var(--color-muted)',
                        transition: 'color 0.25s',
                      }}>
                        {p.nivel}
                      </span>
                    </span>
                    {/* Plan name */}
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(20px, 2.2vw, 26px)',
                      fontWeight: 400,
                      color: isActive ? 'var(--color-ink)' : 'var(--color-muted)',
                      letterSpacing: '-0.01em',
                      transition: 'color 0.25s',
                    }}>
                      {p.nombre}®
                    </span>
                    {/* Meta */}
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12,
                      color: isActive ? 'var(--color-body)' : 'var(--color-hairline)',
                      transition: 'color 0.25s',
                    }}>
                      {p.sesiones} ses. · {p.semanas} sem.
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ SPLIT LAYOUT ══ */}
      <div className="container-padding" style={{ maxWidth: 1100, margin: '0 auto', padding: '0' }}>
        <div className="split-layout">

          {/* ── LEFT: Sticky sidebar ── */}
          <aside className="sticky-sidebar">
            <div style={{
              display: 'inline-block',
              background: plan.color.claro,
              color: plan.color.texto,
              fontFamily: 'var(--font-body)',
              fontSize: 9, fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '5px 12px', borderRadius: 999,
              marginBottom: 16,
            }}>
              {plan.badge}
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 32px)', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: 6 }}>
              {plan.nombre}®
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', fontStyle: 'italic', marginBottom: 28 }}>
              {plan.tagline}
            </p>

            {/* Stats */}
            <div style={{ marginBottom: 28 }}>
              {[
                { l: 'Sesiones', v: plan.sesiones },
                { l: 'Duración', v: `${plan.semanas} semanas` },
                { l: 'Por sesión', v: plan.duracion },
                { l: 'Proceso completo', v: `$${formatPrecio(plan.precioTotal)} COP` },
              ].map(s => (
                <div key={s.l} className="sidebar-stat">
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>{s.l}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1 }}>{s.v}</span>
                </div>
              ))}
            </div>

            <Link href={`/pago?plan=${plan.id}`} className="cta-btn" style={{ background: plan.color.primario }}>
              {plan.ctaBoton} →
            </Link>

            <Link href="/precios" style={{ display: 'block', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-muted)', textDecoration: 'underline', textUnderlineOffset: 3, marginTop: 16 }}>
              Comparar todos los precios
            </Link>
          </aside>

          {/* ── RIGHT: Content sections ── */}
          <div>

            {/* Para quién */}
            <div className="content-section">
              <div className="section-eyebrow">¿Para quién es?</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 8 }}>
                Este proceso es para ti si…
              </h3>
              <div className="quien-grid">
                {plan.paraQuien.map((item, i) => (
                  <div key={i} className="quien-card" style={{ borderLeftColor: plan.color.primario }}>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: plan.color.texto, marginBottom: 8 }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 400, color: 'var(--color-ink)', marginBottom: 8, lineHeight: 1.3 }}>{item.titulo}</h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-body)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fases interactivas */}
            <div className="content-section">
              <div className="section-eyebrow">Estructura del proceso</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 8 }}>
                Tu hoja de ruta — {plan.semanas} semanas
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', marginBottom: 28, lineHeight: 1.6 }}>
                Haz clic en cada fase para ver qué ocurre dentro.
              </p>
              <div>
                {plan.fases.map((fase, i) => {
                  const isOpen = expandedPhase === i;
                  return (
                    <div key={i} className={`phase-item${isOpen ? ' open' : ''}`} style={{ borderColor: isOpen ? plan.color.primario : 'var(--color-hairline)', color: plan.color.primario }}>
                      <button
                        className={`phase-header${isOpen ? ' open-header' : ''}`}
                        onClick={() => setExpandedPhase(isOpen ? null : i)}
                      >
                        {/* Phase number circle */}
                        <div style={{
                          width: 40, height: 40, borderRadius: '50%',
                          background: isOpen ? plan.color.primario : 'var(--color-surface-soft)',
                          color: isOpen ? '#fff' : 'var(--color-muted)',
                          fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 400,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'background 0.2s, color 0.2s',
                        }}>
                          {fase.num}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: isOpen ? plan.color.texto : 'var(--color-muted)', marginBottom: 4, transition: 'color 0.2s' }}>
                            {fase.semana}
                          </div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.25 }}>
                            {fase.titulo}
                          </div>
                        </div>
                        {/* Toggle icon */}
                        <div style={{
                          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                          border: `1px solid ${isOpen ? plan.color.primario : 'var(--color-hairline)'}`,
                          background: isOpen ? plan.color.primario : 'transparent',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'all 0.2s',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                        }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#fff' : 'var(--color-muted)'} strokeWidth="2.5" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                          </svg>
                        </div>
                      </button>

                      <div className="phase-body" style={{
                        maxHeight: isOpen ? '300px' : '0',
                        opacity: isOpen ? 1 : 0,
                      }}>
                        <div style={{ padding: '0 24px 24px 72px' }}>
                          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--color-body)', margin: 0 }}>
                            {fase.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Entregables */}
            <div className="content-section">
              <div className="section-eyebrow">Qué te llevas</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 8 }}>
                Al cerrar las {plan.semanas} semanas
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', marginBottom: 4, lineHeight: 1.6 }}>
                Pasa el cursor sobre cada entregable para ver el detalle.
              </p>
              <div className="del-grid">
                {plan.entregables.map((e, i) => {
                  const isHov = hoveredDel === i;
                  return (
                    <div
                      key={i}
                      className="del-card"
                      onMouseEnter={() => setHoveredDel(i)}
                      onMouseLeave={() => setHoveredDel(null)}
                      style={{ borderColor: isHov ? plan.color.primario : 'var(--color-hairline)' }}
                    >
                      <div style={{
                        width: 40, height: 40, borderRadius: 10, marginBottom: 16,
                        background: isHov ? plan.color.primario : plan.color.claro,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 18, color: isHov ? '#fff' : plan.color.texto,
                        transition: 'all 0.2s ease',
                      }}>◈</div>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 400, color: 'var(--color-ink)', marginBottom: 8, lineHeight: 1.3 }}>{e.titulo}</h4>
                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-body)', lineHeight: 1.7, margin: 0,
                        maxHeight: isHov ? '200px' : '0',
                        opacity: isHov ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.25s ease, opacity 0.2s ease',
                      }}>
                        {e.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQ */}
            <div className="content-section">
              <div className="section-eyebrow">Preguntas frecuentes</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 28 }}>
                Antes de comenzar
              </h3>
              <div>
                {plan.faq.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="faq-row">
                      <button className="faq-btn-inner" onClick={() => setOpenFaq(isOpen ? null : i)}>
                        <span>{item.q}</span>
                        <div style={{
                          width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                          border: `1px solid ${isOpen ? plan.color.primario : 'var(--color-hairline)'}`,
                          background: isOpen ? plan.color.primario : 'transparent',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'all 0.2s',
                          transform: isOpen ? 'rotate(45deg)' : 'none',
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#fff' : 'var(--color-muted)'} strokeWidth="2.5" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                          </svg>
                        </div>
                      </button>
                      <div style={{
                        overflow: 'hidden',
                        maxHeight: isOpen ? '300px' : '0',
                        opacity: isOpen ? 1 : 0,
                        paddingBottom: isOpen ? '18px' : '0',
                        transition: 'max-height 0.3s ease, opacity 0.25s ease, padding 0.25s ease',
                      }}>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8, color: 'var(--color-body)', margin: 0 }}>{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA final */}
            <div className="content-section" style={{ background: plan.color.claro }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.2, letterSpacing: '-0.01em', marginBottom: 10 }}>
                {plan.ctaTexto}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-body)', marginBottom: 24, lineHeight: 1.6 }}>
                {plan.sesiones} sesiones · {plan.semanas} semanas · ${formatPrecio(plan.precioTotal)} COP
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                <Link href={`/pago?plan=${plan.id}`} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                  color: '#fff', background: plan.color.primario,
                  padding: '13px 28px', borderRadius: 10, textDecoration: 'none',
                  transition: 'opacity 0.2s, transform 0.15s',
                  boxShadow: `0 4px 16px ${plan.color.primario}40`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}>
                  {plan.ctaBoton} ↗
                </Link>
                <Link href="/triaje" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-muted)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  Hacer el triaje primero
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
