// BioReset360 — Marketing UI Kit
// Nav.jsx — Top navigation bar

const Nav = ({ activePage = 'home' }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'Platform', href: '#' },
    { label: 'Protocols', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Pricing', href: '#' },
  ];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: '#fff',
      borderBottom: '1px solid #eeeeee',
      height: 64,
      display: 'flex', alignItems: 'center',
      padding: '0 48px',
    }}>
      {/* Wordmark */}
      <a href="#" style={{ textDecoration: 'none', marginRight: 40, flexShrink: 0 }}>
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, fontWeight: 400, color: '#181d26', letterSpacing: '-0.3px' }}>Bio</span>
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 22, fontWeight: 500, color: '#181d26', letterSpacing: '-0.3px' }}>Reset360</span>
      </a>

      {/* Center nav links */}
      <div style={{ display: 'flex', gap: 4, flex: 1, alignItems: 'center' }}>
        {navLinks.map(link => (
          <a key={link.label} href={link.href} style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 14, fontWeight: 400,
            color: '#333840',
            textDecoration: 'none',
            padding: '8px 12px',
            borderRadius: 6,
          }}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Right cluster */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <a href="#" style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 14, fontWeight: 400,
          color: '#333840',
          textDecoration: 'none',
          padding: '8px 12px',
        }}>
          Log in
        </a>
        <a href="#" style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 14, fontWeight: 500,
          color: '#181d26',
          textDecoration: 'none',
          padding: '8px 16px',
          border: '1px solid #dddddd',
          borderRadius: 12,
          background: '#fff',
        }}>
          Book demo
        </a>
        <a href="#" style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 14, fontWeight: 500,
          color: '#fff',
          textDecoration: 'none',
          padding: '10px 20px',
          borderRadius: 12,
          background: '#181d26',
          boxShadow: '0 1px 4px rgba(27,97,201,0.10)',
        }}>
          Get started free
        </a>
      </div>
    </nav>
  );
};

Object.assign(window, { Nav });
