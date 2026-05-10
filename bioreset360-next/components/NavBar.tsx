'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Terapias', href: '/servicios' },
  { label: 'La Dra. Rozo', href: '/el-terapeuta' },
  { label: 'Planes', href: '/planes' },
  { label: 'Cuestionario', href: '/triaje' },
];

const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 10,
  fontWeight: 500,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--color-muted)',
  lineHeight: 1,
  marginTop: 3,
};

export default function NavBar() {
  const path = usePathname();
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(253, 248, 240, 0.94)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--color-hairline)',
      height: 72, display: 'flex', alignItems: 'center',
      padding: '0 60px',
    }}>
      {/* Logo */}
      <Link href="/" style={{ flexShrink: 0, textDecoration: 'none', marginRight: 'auto' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 400, color: 'var(--color-ink)', letterSpacing: '-0.01em', lineHeight: 1 }}>
          BioReset360®
        </div>
        <div style={eyebrow}>Enfoque 360 · Bogotá</div>
      </Link>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: 2, alignItems: 'center', marginRight: 40 }}>
        {links.map(lk => {
          const isActive = path === lk.href || (lk.href !== '/' && path.startsWith(lk.href));
          return (
            <Link key={lk.href} href={lk.href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 400,
              color: isActive ? 'var(--color-ink)' : 'var(--color-muted)',
              padding: '8px 16px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              borderBottom: isActive ? '1px solid var(--color-ink)' : '1px solid transparent',
              transition: 'color 0.15s ease, border-color 0.15s ease',
            }}>
              {lk.label}
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <Link href="/agendar" style={{
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        fontWeight: 500,
        color: 'var(--color-ink)',
        padding: '10px 22px',
        border: '1px solid var(--color-ink)',
        textDecoration: 'none',
        letterSpacing: '0.01em',
        transition: 'background 0.15s ease, color 0.15s ease',
      }}>
        Agendar Cita
      </Link>
    </nav>
  );
}
