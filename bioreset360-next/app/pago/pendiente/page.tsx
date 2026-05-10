import Link from 'next/link';

export default function PagoPendientePage() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center', background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 500 }}>
        <div style={{ width: 80, height: 80, borderRadius: 28, background: '#fdf5e4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
          <span style={{ fontSize: 32 }}>⏳</span>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 14 }}>Pago pendiente</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 400, color: 'var(--color-ink)', lineHeight: 1.15, marginBottom: 16 }}>Estamos procesando tu pago</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300, color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: 36 }}>MercadoPago nos avisará en cuanto se acredite. No te preocupes, te contactaremos cuando esté listo.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link href="/" style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: 'var(--color-ink)', padding: '16px 32px', borderRadius: 14, background: 'var(--color-hairline)', textDecoration: 'none' }}>Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
