'use client';
import Link from 'next/link';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', textAlign: 'center', background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 480 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Algo salió mal</div>
        <h1 className="display-serif" style={{ fontSize: 'clamp(32px, 6vw, 48px)', marginBottom: 16 }}>
          Un tropiezo<br /><em>momentáneo.</em>
        </h1>
        <p className="body-lead" style={{ marginBottom: 36 }}>
          Ocurrió un error inesperado al cargar esta página. Suele resolverse al intentarlo de nuevo.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={reset} className="btn-primary" style={{ border: 'none' }}>
            Intentar de nuevo
          </button>
          <Link href="/" className="btn-ghost">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
