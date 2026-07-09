import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', textAlign: 'center', background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 480 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Error 404</div>
        <h1 className="display-serif" style={{ fontSize: 'clamp(32px, 6vw, 48px)', marginBottom: 16 }}>
          Esta página no está<br /><em>donde debería.</em>
        </h1>
        <p className="body-lead" style={{ marginBottom: 36 }}>
          El enlace puede haber cambiado o ya no existe. Volvamos a un lugar conocido.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">Volver al inicio</Link>
          <Link href="/precios" className="btn-ghost">Ver planes y precios</Link>
        </div>
      </div>
    </div>
  );
}
