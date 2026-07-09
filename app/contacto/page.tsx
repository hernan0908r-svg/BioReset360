'use cache';
import type { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL, CONTACT_EMAIL, CRISIS_NOTICE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escríbenos por WhatsApp o correo. La Dra. Patricia Rozo responde personalmente. Atención presencial en Bogotá y virtual para todo el mundo.',
};

const channels = [
  {
    label: 'WhatsApp',
    value: 'Respuesta el mismo día',
    href: WHATSAPP_URL,
    cta: 'Escribir por WhatsApp →',
    external: true,
  },
  {
    label: 'Correo electrónico',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    cta: 'Enviar un correo →',
    external: false,
  },
];

export default async function ContactoPage() {
  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '80vh' }}>
      <section style={{ padding: '80px 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Contacto</div>
          <h1 className="display-serif" style={{ fontSize: 'clamp(36px, 7vw, 56px)', marginBottom: 16 }}>
            Hablemos.
          </h1>
          <p className="body-lead" style={{ maxWidth: 480, margin: '0 auto 56px' }}>
            Si tienes dudas sobre el método, los planes o tu caso particular, escríbeme directamente. Respondo yo — no un asistente.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 48, textAlign: 'left' }}>
            {channels.map(ch => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.external ? '_blank' : undefined}
                rel={ch.external ? 'noreferrer' : undefined}
                className="hover-card-subtle"
                style={{
                  display: 'block',
                  background: '#fff',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 16,
                  padding: '28px 28px 24px',
                  textDecoration: 'none',
                }}
              >
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 10 }}>
                  {ch.label}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 16, lineHeight: 1.3, overflowWrap: 'anywhere' }}>
                  {ch.value}
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--color-primary)' }}>
                  {ch.cta}
                </span>
              </a>
            ))}
          </div>

          {/* Horarios y modalidad */}
          <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '28px 32px', marginBottom: 32, textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 8 }}>Modalidad</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--color-body)' }}>
                  Presencial en Bogotá, Colombia.<br />Virtual para cualquier lugar del mundo.
                </p>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 8 }}>Horario de respuesta</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--color-body)' }}>
                  Lunes a viernes, 8:00 — 18:00.<br />Los mensajes del fin de semana se responden el lunes.
                </p>
              </div>
            </div>
          </div>

          {/* Aviso de crisis */}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.7, color: 'var(--color-muted)', maxWidth: 520, margin: '0 auto 40px' }}>
            {CRISIS_NOTICE}
          </p>

          <Link href="/triaje" className="btn-primary">
            ¿No sabes por dónde empezar? Encuentra tu plan →
          </Link>
        </div>
      </section>
    </div>
  );
}
