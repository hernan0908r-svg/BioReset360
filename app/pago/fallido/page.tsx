import Link from 'next/link';

export default function PagoFallidoPage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center', background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 500 }}>
        <div style={{ width: 80, height: 80, borderRadius: 28, background: '#f5e8df', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="#c0774e" strokeWidth="1.5" fill="none" /><path d="M15 15l10 10M25 15L15 25" stroke="#c0774e" strokeWidth="2" strokeLinecap="round" /></svg>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#c0774e', marginBottom: 14 }}>Pago rechazado</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.15, marginBottom: 16 }}>Hubo un problema con tu pago</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300, color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: 36 }}>Tu tarjeta fue rechazada o el pago no pudo procesarse. No se te ha cobrado nada.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link href="/planes" style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: '#fff', padding: '16px 32px', borderRadius: 14, background: '#c0774e', textDecoration: 'none' }}>Intentar con otro método</Link>
          <Link href="/" style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', padding: '12px', textDecoration: 'none' }}>Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
