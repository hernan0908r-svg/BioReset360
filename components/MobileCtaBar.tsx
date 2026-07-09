'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Rutas donde la barra ayuda a convertir. Se excluyen el propio triaje,
// el checkout y las páginas legales/resultado de pago.
const SHOW_ON = ['/', '/el-terapeuta', '/servicios', '/precios', '/planes'];

export default function MobileCtaBar() {
  const path = usePathname();
  if (!SHOW_ON.includes(path)) return null;

  return (
    <div
      className="mobile-cta-bar mobile-only"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: '10px 16px calc(10px + env(safe-area-inset-bottom))',
        background: 'rgba(246, 242, 234, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--color-hairline)',
      }}
    >
      <Link
        href="/triaje"
        className="btn-primary"
        style={{ width: '100%', padding: '15px 24px', fontSize: 15 }}
      >
        Encuentra tu plan · 2 min →
      </Link>
    </div>
  );
}
