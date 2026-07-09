'use client';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PLANES } from '@/data/planes';

function formatPrecio(n: number) {
  return n.toLocaleString('es-CO');
}

function PagoContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get('plan') ?? '';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const planData = PLANES.find(p => p.id === planId);

  if (!planData) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, marginBottom: 16 }}>Plan no encontrado</h2>
        <Link href="/precios" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', textDecoration: 'underline' }}>Volver a ver precios</Link>
      </div>
    );
  }

  // Derivamos todo de la fuente de verdad (data/planes.ts)
  const plan = {
    name: `Plan ${planData.nombre}®`,
    price: formatPrecio(planData.precioTotal),
    col: planData.color.primario,
    bg: planData.color.claro,
    items: planData.incluye,
  };

  const handlePayment = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/mercadopago/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Error al iniciar pago');
      
      // Redirigir a MercadoPago
      window.location.href = json.data.init_point;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: '60px 24px', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 12 }}>Resumen de compra</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 400, color: 'var(--color-ink)' }}>Estás a un paso de iniciar</h1>
      </div>

      <div style={{ background: '#fff', borderRadius: 20, border: '1px solid var(--color-hairline)', overflow: 'hidden', marginBottom: 32 }}>
        <div style={{ padding: '32px 32px 24px', borderBottom: '1px solid var(--color-hairline)', background: plan.bg }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: plan.col, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>{plan.name}</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 500, color: 'var(--color-ink)' }}>${plan.price}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-body)' }}>COP</span>
          </div>
        </div>
        <div style={{ padding: '24px 32px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, color: 'var(--color-muted)', marginBottom: 16 }}>¿Qué incluye?</div>
          {plan.items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
              <span style={{ color: plan.col, fontWeight: 500 }}>✓</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-body)', lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {error && (
        <div style={{ background: '#F4E6DB', border: '1px solid #C2724B', color: '#8A4A2C', padding: '16px', borderRadius: 12, fontFamily: 'var(--font-body)', fontSize: 13, marginBottom: 24 }}>
          {error}
        </div>
      )}

      <button onClick={handlePayment} disabled={loading} style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 500, color: '#fff', background: loading ? 'var(--color-muted)' : 'var(--color-primary)', padding: '16px', borderRadius: 8, border: 'none', cursor: loading ? 'default' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, transition: 'background .2s' }}
        onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = 'var(--color-primary-active)'; }}
        onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)'; }}>
        <svg width="14" height="16" viewBox="0 0 12 14" fill="none" aria-hidden="true">
          <rect x="1" y="6" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M3.5 6V4a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        {loading ? 'Preparando...' : 'Pagar de forma segura'}
      </button>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 14, fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-muted)' }}>
        Procesado por MercadoPago · Conexión cifrada · No almacenamos datos de tu tarjeta
      </div>

      {/* Qué pasa después del pago */}
      <div style={{ marginTop: 32, background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline)', borderRadius: 16, padding: '24px 28px' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 16 }}>
          ¿Qué pasa después del pago?
        </div>
        {[
          'Recibes la confirmación de tu compra por correo.',
          'La Dra. Rozo te contacta en las siguientes 24 horas.',
          'Coordinan juntos tu primera sesión — presencial o virtual.',
        ].map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: i < 2 ? 12 : 0 }}>
            <span style={{
              width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
              background: 'var(--color-primary)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
            }}>{i + 1}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-body)', lineHeight: 1.6 }}>{step}</span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Link href="/precios" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', textDecoration: 'none' }}>← Volver a planes y precios</Link>
      </div>
    </div>
  );
}

export default function PagoPage() {
  return (
    <div style={{ background: 'var(--color-canvas)' }}>
      <Suspense fallback={<div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando...</div>}>
        <PagoContent />
      </Suspense>
    </div>
  );
}
