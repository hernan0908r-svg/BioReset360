// BioReset360 — Marketing UI Kit
// Footer.jsx — Light canvas footer

const Footer = () => {
  const cols = [
    {
      heading: 'Platform',
      links: ['Biomarker Tracking', 'Protocol Library', 'Recovery Analytics', 'Team Coaching', 'Integrations'],
    },
    {
      heading: 'Protocols',
      links: ['Metabolic Health', 'Hormonal Balance', 'Gut & Microbiome', 'Sleep Optimization', 'Cognitive Performance'],
    },
    {
      heading: 'Resources',
      links: ['Research Library', 'Blog', 'Podcast', 'Case Studies', 'Glossary'],
    },
    {
      heading: 'Learn',
      links: ['Getting Started', 'How it Works', 'FAQ', 'Webinars', 'Community'],
    },
    {
      heading: 'Company',
      links: ['About', 'Careers', 'Press', 'Partners', 'Contact'],
    },
  ];

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #eeeeee', padding: '64px 48px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Top: wordmark + tagline */}
        <div style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 20, fontWeight: 400, color: '#181d26' }}>Bio</span>
              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 20, fontWeight: 500, color: '#181d26' }}>Reset360</span>
            </div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: '#9297a0', lineHeight: 1.5, maxWidth: 240 }}>
              Science-backed health optimization for every system in your body.
            </div>
          </div>
          <a href="#" style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 14, fontWeight: 500,
            color: '#fff',
            textDecoration: 'none',
            padding: '12px 20px',
            borderRadius: 12,
            background: '#181d26',
          }}>
            Get started free
          </a>
        </div>

        {/* Link columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 48 }}>
          {cols.map(col => (
            <div key={col.heading}>
              <div style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 12, fontWeight: 600,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                color: '#181d26',
                marginBottom: 12,
              }}>
                {col.heading}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map(link => (
                  <a key={link} href="#" style={{
                    fontFamily: "'Inter',sans-serif",
                    fontSize: 13, fontWeight: 400,
                    color: '#41454d',
                    textDecoration: 'none',
                    lineHeight: 1.4,
                  }}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legal row */}
        <div style={{
          borderTop: '1px solid #eeeeee',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: '#9297a0' }}>
            © 2025 BioReset360, Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(item => (
              <a key={item} href="#" style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 12,
                color: '#9297a0',
                textDecoration: 'none',
              }}>
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
