'use cache';
import type { Metadata } from 'next';
import Image from 'next/image';
import { WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'La Dra. Patricia Rozo · Creadora del Método Enfoque 360',
  description: 'Conoce a la Dra. Patricia Rozo, médica integrativa y creadora del Método Enfoque 360. Ella diseña y ejecuta personalmente cada proceso terapéutico en BioReset360.',
};

const formacion = [
  { year: '2010', title: 'Medicina · Especialización Clínica', inst: 'Universidad de los Andes · Bogotá', type: 'Pregrado' },
  { year: '2013', title: 'Neuropsicología y Cognitiva', inst: 'U. Complutense de Madrid · España', type: 'Máster' },
  { year: '2015', title: 'Psicoterapia Integrativa', inst: 'Instituto Europeo de Psicología Positiva', type: 'Especialización' },
  { year: '2018', title: 'Terapia de Aceptación y Compromiso (ACT)', inst: 'Association for Contextual Behavioral Science', type: 'Certificación' },
  { year: '2020', title: 'Terapia Cognitivo-Conductual (TCC)', inst: 'Beck Institute', type: 'Certificación' },
  { year: '2022', title: 'Mindfulness Based Stress Reduction', inst: 'Universidad Brown · MBSR', type: 'Certificación' },
];

export default async function ElTerapeutaPage() {
  return (
    <div style={{ background: 'var(--color-canvas)' }}>
      <style>{`
        .terapeuta-hero { padding: 64px 48px 80px; }
        .terapeuta-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .terapeuta-hero-title { font-size: 52px; }
        .photo-card { height: 520px; }
        .badge-card { position: absolute; top: 28px; right: -20px; }
        .stats-row { display: flex; gap: 24px; margin-bottom: 40px; flex-wrap: wrap; }
        .formacion-section { padding: 80px 48px; }
        .formacion-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
        .cta-section { padding: 72px 48px; }
        @media (max-width: 900px) {
          .terapeuta-hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .badge-card { right: 0; top: 16px; }
          .formacion-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 768px) {
          .terapeuta-hero { padding: 48px 24px 56px; }
          .terapeuta-hero-title { font-size: clamp(32px, 8vw, 48px); }
          .photo-card { height: clamp(300px, 60vw, 420px) !important; }
          .badge-card { right: 8px; top: 12px; }
          .formacion-section { padding: 56px 24px; }
          .cta-section { padding: 56px 24px; }
        }
        @media (max-width: 480px) {
          .terapeuta-hero { padding: 40px 16px 48px; }
          .formacion-section { padding: 48px 16px; }
          .cta-section { padding: 48px 16px; }
          .badge-card { display: none; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="terapeuta-hero" style={{ background: 'var(--color-canvas)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="terapeuta-hero-grid">
            <div>
              <h1 className="terapeuta-hero-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.1, marginBottom: 8 }}>
                Dra. Patricia<br /><span style={{ fontWeight: 400 }}>Rozo</span>
              </h1>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 28, letterSpacing: '0.2px' }}>
                Psicóloga Integrativa · Creadora del Método Enfoque 360
              </div>

              <div style={{ background: 'var(--color-surface-soft)', borderRadius: 'var(--rounded-lg)', padding: '20px 24px', marginBottom: 28, borderLeft: `4px solid var(--color-primary)` }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 400, lineHeight: 1.75, color: 'var(--color-ink)' }}>
                  <strong>BioReset360 no es una clínica ni un equipo de psicólogos.</strong> Es la plataforma que la Dra. Patricia Rozo diseñó integrando ciencia clínica con herramientas de optimización del bienestar.
                </p>
              </div>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 400, lineHeight: 1.9, color: 'var(--color-body)', marginBottom: 32 }}>
                Especializada en la intersección entre neurociencia clínica y psicología contemplativa, con más de 12 años acompañando personas en procesos de transformación profunda.
              </p>

              <div className="stats-row">
                {[['12+', 'Años de experiencia'], ['300+', 'Pacientes acompañados'], ['6', 'Especializaciones']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 400, color: 'var(--color-muted)', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo card */}
            <div style={{ position: 'relative' }}>
              <div className="hover-card photo-card" style={{ borderRadius: 'var(--rounded-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 24, position: 'relative', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.1)' }}>
                <Image
                  src="/images/dra-rozo.jpg"
                  alt="Dra. Patricia Rozo"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div style={{ position: 'relative', zIndex: 1, borderRadius: 'var(--rounded-md)', background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(8px)', padding: '16px 20px', border: '1px solid rgba(255,255,255,.12)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 400, color: '#ffffff', marginBottom: 4 }}>{"\"Cada consulta es un acto de escucha profunda.\""}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,.7)' }}>Dra. Patricia Rozo</div>
                </div>
              </div>
              <div className="hover-card-subtle badge-card" style={{ background: '#fff', borderRadius: 'var(--rounded-md)', padding: '14px 18px', boxShadow: '0 8px 32px rgba(0,0,0,.1)', border: '1px solid var(--color-hairline)', zIndex: 10 }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 4 }}>Atención personal</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, color: 'var(--color-ink)' }}>100% con la Dra. Rozo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMACIÓN + MÉTODO ── */}
      <section className="formacion-section" style={{ background: 'var(--color-canvas)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="formacion-grid">
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-border-strong)', marginBottom: 16 }}>Formación académica</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.15, marginBottom: 36 }}>Una trayectoria construida con rigor y ciencia</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {formacion.map((it, i) => (
                  <div key={i} style={{ display: 'flex', gap: 20, paddingBottom: 20, marginBottom: 20, borderBottom: i < formacion.length - 1 ? '1px solid var(--color-hairline)' : 'none' }}>
                    <div style={{ width: 44, flexShrink: 0 }}>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, color: 'var(--color-primary)' }}>{it.year}</div>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4, gap: 8 }}>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--color-ink)' }}>{it.title}</div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 500, color: 'var(--color-primary)', background: 'var(--color-surface-soft)', padding: '2px 8px', borderRadius: 999, flexShrink: 0 }}>{it.type}</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 400, color: 'var(--color-muted)' }}>{it.inst}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-border-strong)', marginBottom: 16 }}>El Método Enfoque 360</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.15, marginBottom: 24 }}>Donde la ciencia y la experiencia convergen</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 400, lineHeight: 1.9, color: 'var(--color-body)', marginBottom: 28 }}>
                El Método Enfoque 360 nace de mi convicción de que el ser humano no puede ser fragmentado. Lo desarrollé integrando neuropsicología clínica como base, con herramientas de optimización que amplían lo que la medicina convencional no alcanza.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
                {[
                  ['Precisión Clínica', 'Protocolos basados en evidencia y adaptados a tu contexto individual y biomarkers.'],
                  ['Ciencia y optimización', 'Integro neurociencia, psicología cognitiva y herramientas de vanguardia.'],
                  ['El proceso es personal, no estándar', 'No existe un protocolo único. Cada plan terapéutico es construido por mí, con y para cada persona.'],
                ].map(([t, s]) => (
                  <div key={t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-primary)', marginTop: 6, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 4 }}>{t}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 400, color: 'var(--color-muted)', lineHeight: 1.65 }}>{s}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hover-card-subtle" style={{ background: 'var(--color-signature-cream)', borderRadius: 'var(--rounded-lg)', padding: '24px 28px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontStyle: 'italic', fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.5, marginBottom: 12 }}>{"\"La optimización de la salud no es magia, es la aplicación precisa de la ciencia en la vida de un individuo.\""}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-muted)' }}>— Dra. Patricia Rozo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO ES TRABAJAR CONMIGO ── */}
      <section style={{ background: 'var(--color-surface-soft)', padding: '72px 48px', borderTop: '1px solid var(--color-hairline)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-border-strong)', marginBottom: 16 }}>En primera persona</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.15 }}>Cómo es trabajar conmigo</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              ['Te escucho antes de proponer', 'La primera sesión es para entender tu historia completa — no para encajarte en un protocolo. El plan se construye después de conocerte.'],
              ['Hablamos claro', 'Sabrás siempre en qué punto del proceso estás, qué estamos trabajando y por qué. Sin misticismo innecesario ni jerga clínica impenetrable.'],
              ['El cierre es parte del trabajo', 'No creo en procesos indefinidos. Acordamos un final desde el inicio y llegamos a él con resultados que puedes nombrar.'],
            ].map(([t, s]) => (
              <div key={t} style={{ background: 'var(--color-canvas)', border: '1px solid var(--color-hairline)', borderRadius: 'var(--rounded-lg)', padding: '28px 26px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 10, lineHeight: 1.3 }}>{t}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.75, color: 'var(--color-body)' }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" style={{ background: 'var(--color-surface-soft)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-border-strong)', marginBottom: 16 }}>¿Listo para comenzar?</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.15, marginBottom: 20 }}>Tu camino hacia la optimización empieza aquí.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 400, color: 'var(--color-body)', lineHeight: 1.8, marginBottom: 36 }}>Si tienes dudas sobre el método o quieres saber si BioReset360® es para ti, contáctame directamente.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 500, color: '#fff', padding: '14px 28px', borderRadius: 'var(--rounded-lg)', background: '#25D366', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.659-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
