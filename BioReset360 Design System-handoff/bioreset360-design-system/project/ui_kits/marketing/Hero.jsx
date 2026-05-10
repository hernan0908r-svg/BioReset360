// BioReset360 — Marketing UI Kit
// Hero.jsx — White canvas hero band

const Hero = () => (
  <section style={{
    background: '#fff',
    padding: '96px 48px',
    maxWidth: 1280,
    margin: '0 auto',
    width: '100%',
  }}>
    {/* Eyebrow */}
    <div style={{
      fontFamily: "'Inter',sans-serif",
      fontSize: 12, fontWeight: 600,
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      color: '#9297a0',
      marginBottom: 24,
      display: 'block',
    }}>
      Health optimization platform
    </div>

    {/* H1 */}
    <h1 style={{
      fontFamily: "'Inter',sans-serif",
      fontSize: 44, fontWeight: 400,
      lineHeight: 1.15,
      color: '#181d26',
      letterSpacing: '-0.5px',
      maxWidth: 580,
      marginBottom: 28,
      display: 'block',
    }}>
      Reset your biology.<br />Reclaim your potential.
    </h1>

    {/* Sub-head */}
    <p style={{
      fontFamily: "'Inter',sans-serif",
      fontSize: 17, fontWeight: 400,
      lineHeight: 1.6,
      color: '#333840',
      maxWidth: 480,
      marginBottom: 40,
      display: 'block',
    }}>
      Science-backed health optimization protocols, personalized to your biomarkers. Measurable results in 90 days.
    </p>

    {/* CTA pair */}
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
      <a href="#" style={{
        fontFamily: "'Inter',sans-serif",
        fontSize: 16, fontWeight: 500,
        color: '#fff',
        textDecoration: 'none',
        padding: '16px 28px',
        borderRadius: 12,
        background: '#181d26',
        boxShadow: '0 1px 4px rgba(27,97,201,0.12)',
        display: 'inline-flex', alignItems: 'center',
      }}>
        Get started for free
      </a>
      <a href="#" style={{
        fontFamily: "'Inter',sans-serif",
        fontSize: 16, fontWeight: 500,
        color: '#181d26',
        textDecoration: 'none',
        padding: '16px 24px',
        borderRadius: 12,
        background: '#fff',
        border: '1px solid #dddddd',
        display: 'inline-flex', alignItems: 'center',
      }}>
        Book a demo
      </a>
    </div>

    {/* Social proof */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
    }}>
      {/* Avatar stack */}
      <div style={{ display: 'flex' }}>
        {['#a8d8c4','#fcab79','#f4d35e','#aa2d00','#0a2e0e'].map((c, i) => (
          <div key={i} style={{
            width: 32, height: 32,
            borderRadius: '50%',
            background: c,
            border: '2px solid #fff',
            marginLeft: i === 0 ? 0 : -8,
          }} />
        ))}
      </div>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: '#41454d', lineHeight: 1.4 }}>
        <strong style={{ color: '#181d26', fontWeight: 500 }}>50,000+</strong> optimizers on BioReset360
      </div>
    </div>
  </section>
);

// Logo strip
const LogoStrip = () => {
  const logos = ['LabCorp', 'Thorne', 'Oura', 'Whoop', 'Levels', 'Function'];
  return (
    <section style={{
      background: '#fff',
      borderTop: '1px solid #eeeeee',
      borderBottom: '1px solid #eeeeee',
      padding: '32px 48px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 11, fontWeight: 500,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: '#9297a0',
          textAlign: 'center',
          marginBottom: 24,
        }}>
          Trusted by leading health organizations
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
          {logos.map(logo => (
            <div key={logo} style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 16, fontWeight: 500,
              color: '#9297a0',
              letterSpacing: '-0.2px',
            }}>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero, LogoStrip });
