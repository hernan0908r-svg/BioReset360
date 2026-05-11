'use client';
import { useState } from 'react';
import LinkNext from 'next/link';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(242, 240, 228, 0.94)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--color-hairline)',
        height: 72, display: 'flex', alignItems: 'center',
        padding: '0 0', // Moved to container class logic
      }} className="container-padding">
        
        {/* Logo */}
        <LinkNext href="/" style={{ flexShrink: 0, textDecoration: 'none', marginRight: 'auto' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 400, color: 'var(--color-ink)', letterSpacing: '-0.01em', lineHeight: 1 }}>
            BioReset360®
          </div>
          <div style={eyebrow}>Enfoque 360 · Bogotá</div>
        </LinkNext>

        {/* Desktop Nav links */}
        <div className="desktop-only" style={{ display: 'flex', gap: 2, alignItems: 'center', marginRight: 40 }}>
          {links.map(lk => {
            const isActive = path === lk.href || (lk.href !== '/' && path.startsWith(lk.href));
            return (
              <LinkNext key={lk.href} href={lk.href} style={{
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
              </LinkNext>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <LinkNext href="/agendar" className="desktop-only" style={{
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
        </LinkNext>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-only"
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
          top: 72,
          left: 0,
          width: '100%',
          height: 'calc(100vh - 72px)',
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
                color: 'var(--color-ink)',
                textDecoration: 'none',
              }}
            >
              {lk.label}
            </LinkNext>
          ))}
          <LinkNext 
            href="/agendar" 
            onClick={() => setIsOpen(false)}
            style={{
              marginTop: 'auto',
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              fontWeight: 500,
              color: 'var(--color-on-dark)',
              padding: '18px',
              background: 'var(--color-ink)',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Agendar Cita
          </LinkNext>
        </div>
      )}
    </>
  );
}

