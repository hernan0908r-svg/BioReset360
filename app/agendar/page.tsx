'use cache';
import type { Metadata } from 'next';
import { WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Agendar Cita · Dra. Patricia Rozo',
  description: 'Reserva tu espacio para una sesión con la Dra. Patricia Rozo en BioReset360.',
};

export default async function AgendarPage() {
  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '100vh', paddingBottom: 120 }}>
      <section style={{ background: 'linear-gradient(to bottom, var(--color-surface-soft), var(--color-canvas))', padding: '96px 48px 64px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-border-strong)', marginBottom: 16 }}>Reserva tu espacio</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-1px' }}>Agenda tu sesión</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 400, color: 'var(--color-body)', lineHeight: 1.6, maxWidth: 600, margin: '0 auto' }}>
            Selecciona el horario que mejor se adapte a ti. Si tienes dudas, puedes contactarnos directamente.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 48px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          
          {/* Booking Widget Placeholder */}
          <div style={{ background: '#fff', borderRadius: 'var(--rounded-lg)', padding: '48px', border: '1px solid var(--color-hairline)', boxShadow: '0 24px 60px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 500, textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>Calendario de Reservas</h3>
            <div style={{ width: '100%', maxWidth: 1000, margin: '0 auto', minHeight: 700 }}>
              <iframe
                src="https://calendly.com/calendly?embed_domain=bioreset360.com&embed_type=Inline"
                width="100%"
                height="700"
                style={{ border: 0, borderRadius: 'var(--rounded-lg)', background: '#fff' }}
                title="Agendar Cita con BioReset360"
              ></iframe>
              {/* NOTA PARA EL CLIENTE: Reemplazar 'https://calendly.com/calendly' por el enlace real de la cuenta de Calendly de la Dra. Rozo */}
            </div>
          </div>

          {/* Fallback Direct Contact */}
          <div style={{ background: 'var(--color-signature-cream)', borderRadius: 'var(--rounded-lg)', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 8 }}>¿Prefieres agendar por WhatsApp?</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-body)' }}>Escríbenos y te ayudaremos a encontrar el espacio ideal para ti.</p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 500, color: '#fff', padding: '16px 32px', borderRadius: 'var(--rounded-pill)', background: '#25D366', display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0, boxShadow: '0 8px 24px rgba(37, 211, 102, 0.2)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.659-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              Agendar por WhatsApp
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
