import Link from 'next/link';
import { THEME } from '@/lib/theme';

export default function PagoExitosoPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center', background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 500 }}>
        <div style={{ width: 80, height: 80, borderRadius: 28, background: '#d8e8d9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke={THEME.primary} strokeWidth="1.5" fill="none" /><path d="M13 20l5 5 9-10" stroke={THEME.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 14 }}>Pago confirmado</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.15, marginBottom: 16 }}>¡Bienvenida/o al programa!</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300, color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: 36 }}>Tu pago ha sido procesado exitosamente. La Dra. Patricia Rozo se pondrá en contacto contigo en las próximas 24 horas para agendar tu primera sesión.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link href="/" style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: '#fff', padding: '16px 32px', borderRadius: 14, background: THEME.primary, textDecoration: 'none' }}>Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
