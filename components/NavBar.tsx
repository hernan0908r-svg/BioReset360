'use client';
import { useEffect, useState } from 'react';
import LinkNext from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'La Dra. Rozo', href: '/el-terapeuta' },
  { label: 'El método', href: '/servicios' },
  { label: 'Planes y precios', href: '/precios' },
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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navHeight = scrolled ? 60 : 72;

  return (
    <>
      <nav
        aria-label="Navegación principal"
        style={{
          position: 'sticky', top: 0, zIndex: 100,
          background: 'rgba(246, 242, 234, 0.94)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--color-hairline)',
          boxShadow: scrolled ? 'var(--shadow-ambient)' : 'none',
          height: navHeight, display: 'flex', alignItems: 'center',
          transition: 'height 0.25s ease, box-shadow 0.25s ease',
        }}
        className="container-padding"
      >
        {/* Logo */}
        <LinkNext href="/" style={{ flexShrink: 0, textDecoration: 'none', marginRight: 'auto' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 500, color: 'var(--color-ink)', letterSpacing: '-0.01em', lineHeight: 1 }}>
            BioReset360®
          </div>
          <div style={eyebrow}>Enfoque 360 · Bogotá</div>
        </LinkNext>

        {/* Desktop Nav links */}
        <div className="desktop-only" style={{ display: 'flex', gap: 2, alignItems: 'center', marginRight: 32 }}>
          {links.map(lk => {
            const isActive = path === lk.href || (lk.href !== '/' && path.startsWith(lk.href));
            return (
              <LinkNext key={lk.href} href={lk.href} style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: isActive ? 500 : 400,
                color: isActive ? 'var(--color-ink)' : 'var(--color-muted)',
                padding: '6px 14px',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                borderRadius: 6,
                background: isActive ? 'var(--color-surface-soft)' : 'transparent',
                transition: 'color 0.15s ease, background 0.15s ease',
              }}
              onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--color-ink)'; }}
              onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)'; }}>
                {lk.label}
              </LinkNext>
            );
          })}
        </div>

        {/* Desktop CTA — una sola acción principal */}
        <LinkNext href="/triaje" className="desktop-only btn-primary" style={{ fontSize: 13, padding: '10px 22px' }}>
          Encuentra tu plan
        </LinkNext>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-only"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <div style={{ width: 24, height: 2, background: 'var(--color-ink)', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: 24, height: 2, background: 'var(--color-ink)', opacity: isOpen ? 0 : 1 }} />
          <div style={{ width: 24, height: 2, background: 'var(--color-ink)', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: navHeight,
          left: 0,
          width: '100%',
          height: `calc(100vh - ${navHeight}px)`,
          background: 'var(--color-canvas)',
          zIndex: 99,
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          overflowY: 'auto',
        }}>
          {links.map(lk => (
            <LinkNext
              key={lk.href}
              href={lk.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 26,
                fontWeight: 500,
                color: 'var(--color-ink)',
                textDecoration: 'none',
              }}
            >
              {lk.label}
            </LinkNext>
          ))}
          <LinkNext
            href="/contacto"
            onClick={() => setIsOpen(false)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 26,
              fontWeight: 500,
              color: 'var(--color-ink)',
              textDecoration: 'none',
            }}
          >
            Contacto
          </LinkNext>
          <LinkNext
            href="/triaje"
            onClick={() => setIsOpen(false)}
            className="btn-primary"
            style={{ marginTop: 'auto', fontSize: 16, padding: 18 }}
          >
            Encuentra tu plan · 2 min
          </LinkNext>
        </div>
      )}
    </>
  );
}
