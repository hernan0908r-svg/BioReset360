'use cache';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terapias Complementarias · BioReset360®',
  description: 'Conoce las herramientas vibracionales, energéticas y contemplativas del Método Enfoque 360.',
};

const items = [
  { name: 'Flores de Bach', cat: 'Energética', dur: '60 min', col: 'var(--color-signature-yellow)', desc: 'Esencias florales para equilibrar estados emocionales y patrones de conducta desde el campo vibracional. La Dra. Rozo prepara una fórmula única para ti basada en tu estado emocional actual, ayudando a disolver el estrés, la ansiedad y el miedo de forma natural.' },
  { name: 'Sonido Binaural', cat: 'Vibración', dur: '75 min', col: 'var(--color-signature-forest)', desc: 'Frecuencias de audio que sincronizan los hemisferios cerebrales, induciendo estados profundos de calma. Utilizamos audífonos especializados para emitir tonos que guían a tu cerebro hacia frecuencias Theta o Delta, ideales para el descanso y la reprogramación mental.' },
  { name: 'Cromoterapia', cat: 'Lumínica', dur: '50 min', col: 'var(--color-signature-coral)', desc: 'Frecuencias de color para restaurar el equilibrio energético del cuerpo y aliviar tensiones emocionales. Cada color tiene una longitud de onda específica que estimula respuestas fisiológicas, ideal para tratar el insomnio, la falta de energía y la fatiga mental.' },
  { name: 'Mindfulness', cat: 'Contemplativa', dur: '60 min', col: 'var(--color-primary)', desc: 'Prácticas de atención plena para reducir el ruido mental y cultivar ecuanimidad duradera. Aprenderás herramientas prácticas y basadas en neurociencia para dejar de vivir en piloto automático y recuperar el control sobre tu reactividad emocional.' },
  { name: 'Reiki', cat: 'Energética', dur: '60 min', col: 'var(--color-signature-coral)', desc: 'Canalización de energía vital para liberar bloqueos y activar los mecanismos de autosanación natural. Un espacio de relajación profunda donde el cuerpo entra en un estado parasimpático, permitiendo que la energía fluya sin obstrucciones.' },
  { name: 'Aromaterapia', cat: 'Sensorial', dur: '45 min', col: 'var(--color-signature-forest)', desc: 'Aceites esenciales puros para estimular el sistema límbico y regular estados emocionales. La Dra. Rozo selecciona cuidadosamente compuestos orgánicos que inciden directamente en el cerebro emocional, evocando sensaciones de seguridad y paz.' },
];

export default async function TerapiasComplementariasPage() {
  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '100vh' }}>
      <style>{`
        .servicios-section { padding: 64px 48px 72px; }
        .terapias-section { padding: 0 48px 80px; }
        .terapias-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .terapia-card { padding: 40px; }
        .servicios-cta { padding: 80px 48px; }
        .cta-banner { padding: 48px 56px; display: flex; justify-content: space-between; align-items: center; gap: 40px; }
        .cta-banner-title { font-size: 36px; }
        @media (max-width: 768px) {
          .servicios-section { padding: 48px 24px 56px; }
          .terapias-section { padding: 0 24px 56px; }
          .terapias-grid { grid-template-columns: 1fr; }
          .terapia-card { padding: 28px 24px; }
          .servicios-cta { padding: 48px 24px; }
          .cta-banner { flex-direction: column; align-items: flex-start; padding: 32px 28px; gap: 28px; }
          .cta-banner-title { font-size: 26px; }
        }
        @media (max-width: 480px) {
          .servicios-section { padding: 40px 16px 48px; }
          .terapias-section { padding: 0 16px 48px; }
          .servicios-cta { padding: 40px 16px; }
          .cta-banner { padding: 28px 20px; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <section className="servicios-section">
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-border-strong)', marginBottom: 16 }}>Las Herramientas del Enfoque 360</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.08, marginBottom: 24 }}>
              Terapias Complementarias.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 400, lineHeight: 1.8, color: 'var(--color-body)', marginBottom: 40 }}>
              El Método Enfoque 360 no se limita a la palabra. Integramos herramientas clínicas, energéticas y contemplativas que hablan directamente a tu sistema nervioso, facilitando una recuperación profunda y sostenida.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRID DE TERAPIAS ── */}
      <section className="terapias-section">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="terapias-grid">
            {items.map((t) => (
              <div key={t.name} className="hover-card-subtle terapia-card" style={{ background: 'var(--color-surface-soft)', borderRadius: 'var(--rounded-md)', border: '1px solid var(--color-hairline)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%', background: t.col, opacity: 0.1 }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: t.col, opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--color-canvas)' }} />
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 4 }}>{t.name}</h2>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-muted)' }}>
                      {t.cat} · {t.dur}
                    </div>
                  </div>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'var(--color-body)' }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="servicios-cta" style={{ background: 'var(--color-canvas)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="cta-banner" style={{ borderRadius: 'var(--rounded-lg)', background: 'var(--color-primary)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -60, top: -60, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,.05)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 14 }}>Planes Integrales</div>
              <h2 className="cta-banner-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--color-on-primary)', lineHeight: 1.2, marginBottom: 12 }}>¿Cuál herramienta necesitas?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 400, color: 'rgba(255,255,255,.7)', maxWidth: 460 }}>
                No tienes que decidirlo ahora. En la consulta, la Dra. Rozo seleccionará las herramientas ideales para tu proceso.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0, position: 'relative', zIndex: 1 }}>
              <Link href="/triaje" style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: 'var(--color-ink)', padding: '14px 28px', borderRadius: 'var(--rounded-pill)', background: 'var(--color-canvas)', display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap', textDecoration: 'none' }}>Iniciar Cuestionario de Triaje →</Link>
              <Link href="/planes" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.7)', textAlign: 'center', padding: '8px', textDecoration: 'none' }}>Ver planes de sanación</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
