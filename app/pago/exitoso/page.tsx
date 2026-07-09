import Link from 'next/link';
import { THEME } from '@/lib/theme';
import { WHATSAPP_URL } from '@/lib/site';

export default function PagoExitosoPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center', background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 520 }}>
        <div style={{ width: 80, height: 80, borderRadius: 28, background: '#d8e8d9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="16" stroke={THEME.primary} strokeWidth="1.5" fill="none" /><path d="M13 20l5 5 9-10" stroke={THEME.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 14 }}>Pago confirmado</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.15, marginBottom: 16 }}>¡Bienvenida/o al programa!</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-body)', lineHeight: 1.8, marginBottom: 32 }}>
          Tu pago fue procesado exitosamente y recibirás la confirmación por correo.
        </p>

        {/* Próximos pasos */}
        <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '24px 28px', marginBottom: 32, textAlign: 'left' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 16 }}>
            Próximos pasos
          </div>
          {[
            'La Dra. Patricia Rozo te contactará en las próximas 24 horas.',
            'Coordinarán juntos el horario de tu primera sesión.',
            'Recibirás las indicaciones para llegar (o el enlace virtual).',
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: i < 2 ? 12 : 0 }}>
              <span style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                background: THEME.primary, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
              }}>{i + 1}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-body)', lineHeight: 1.6 }}>{step}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: '#fff', padding: '16px 32px', borderRadius: 8, background: '#25D366', textDecoration: 'none' }}>
            ¿Tienes una duda? Escríbenos por WhatsApp
          </a>
          <Link href="/" style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', padding: '12px', textDecoration: 'none' }}>Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
