// BioReset360 — Marketing UI Kit
// SignatureCards.jsx — Coral, Forest, Dark, Cream signature bands

const SignatureCoralCard = () => (
  <section style={{ padding: '0 48px', background: '#fff' }}>
    <div style={{
      maxWidth: 1280, margin: '0 auto',
      background: '#aa2d00',
      borderRadius: 12,
      padding: 48,
      display: 'flex',
      gap: 48,
      alignItems: 'flex-end',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 11, fontWeight: 600,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
          marginBottom: 16,
        }}>
          Clinical Performance
        </div>
        <h2 style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 36, fontWeight: 400,
          lineHeight: 1.2,
          color: '#fff',
          maxWidth: 480,
          marginBottom: 16,
        }}>
          Evidence-based results at program speed
        </h2>
        <p style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 14, fontWeight: 400,
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.75)',
          maxWidth: 400,
          marginBottom: 28,
        }}>
          Personalized biomarker protocols built from peer-reviewed research — delivered before your next quarterly review.
        </p>
        <a href="#" style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 15, fontWeight: 500,
          color: '#181d26',
          textDecoration: 'none',
          padding: '14px 22px',
          borderRadius: 12,
          background: '#fff',
          display: 'inline-flex', alignItems: 'center',
        }}>
          See how it works
        </a>
      </div>
      {/* Abstract UI fragment placeholder */}
      <div style={{
        width: 280, height: 180,
        borderRadius: 10,
        background: 'rgba(255,255,255,0.08)',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        gap: 12,
      }}>
        {[60, 45, 80, 35].map((w, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
            <div style={{ height: 4, width: `${w}%`, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SignatureForestCard = () => (
  <section style={{ padding: '0 48px', background: '#fff' }}>
    <div style={{
      maxWidth: 1280, margin: '0 auto',
      background: '#0a2e0e',
      borderRadius: 12,
      padding: 48,
      display: 'flex',
      gap: 48,
      alignItems: 'center',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 11, fontWeight: 600,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.45)',
          marginBottom: 16,
        }}>
          Data Integration
        </div>
        <h2 style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 32, fontWeight: 400,
          lineHeight: 1.25,
          color: '#fff',
          maxWidth: 420,
          marginBottom: 14,
        }}>
          Every system. One dashboard.
        </h2>
        <p style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 14,
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.65)',
          maxWidth: 380,
        }}>
          Lab results, wearable data, and protocol adherence — unified into a single longitudinal health view.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        {['#a8d8c4','#f4d35e','#fcab79'].map((c, i) => (
          <div key={i} style={{
            width: 80, height: 120,
            borderRadius: 10,
            background: c,
            opacity: 0.8,
          }} />
        ))}
      </div>
    </div>
  </section>
);

const DarkCtaCard = () => (
  <section style={{ padding: '96px 48px', background: '#fff' }}>
    <div style={{
      maxWidth: 1280, margin: '0 auto',
      background: '#181d26',
      borderRadius: 12,
      padding: 48,
    }}>
      <div style={{
        fontFamily: "'Inter',sans-serif",
        fontSize: 11, fontWeight: 600,
        letterSpacing: '1.2px',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.35)',
        marginBottom: 16,
      }}>
        The Platform
      </div>
      <h2 style={{
        fontFamily: "'Inter',sans-serif",
        fontSize: 38, fontWeight: 400,
        lineHeight: 1.2,
        color: '#fff',
        maxWidth: 560,
        marginBottom: 16,
      }}>
        The path to 10× every system in your body
      </h2>
      <p style={{
        fontFamily: "'Inter',sans-serif",
        fontSize: 14, fontWeight: 400,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.6)',
        maxWidth: 420,
        marginBottom: 28,
      }}>
        Reset metabolic, hormonal, and cognitive health simultaneously — not sequentially. A full 360° view of your biology.
      </p>
      <a href="#" style={{
        fontFamily: "'Inter',sans-serif",
        fontSize: 15, fontWeight: 500,
        color: '#181d26',
        textDecoration: 'none',
        padding: '14px 24px',
        borderRadius: 12,
        background: '#fff',
        display: 'inline-flex', alignItems: 'center',
      }}>
        Get started
      </a>
    </div>
  </section>
);

const CreamCallout = () => (
  <section style={{ padding: '0 48px', background: '#fff' }}>
    <div style={{
      maxWidth: 1280, margin: '0 auto',
      background: '#f5e9d4',
      borderRadius: 10,
      padding: 48,
      display: 'flex',
      gap: 64,
      alignItems: 'center',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 11, fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: '#9297a0',
          marginBottom: 14,
        }}>
          Proof
        </div>
        <h2 style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 30, fontWeight: 400,
          lineHeight: 1.3,
          color: '#181d26',
          maxWidth: 480,
          marginBottom: 12,
        }}>
          Join 50,000+ optimizers rebuilding from the inside out
        </h2>
        <p style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 14,
          lineHeight: 1.6,
          color: '#41454d',
        }}>
          Average participant sees measurable biomarker improvement within 90 days of their first protocol.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 20, flexShrink: 0 }}>
        {[
          { num: '90', label: 'days to results' },
          { num: '3.2×', label: 'avg improvement' },
          { num: '97%', label: 'protocol adherence' },
        ].map(stat => (
          <div key={stat.num} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 36, fontWeight: 500, color: '#181d26', lineHeight: 1 }}>{stat.num}</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: '#9297a0', marginTop: 6 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CtaBandLight = () => (
  <section style={{ padding: '96px 48px 0', background: '#fff' }}>
    <div style={{
      maxWidth: 1280, margin: '0 auto',
      background: '#e0e2e6',
      borderRadius: 12,
      padding: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
    }}>
      <div>
        <h2 style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 30, fontWeight: 400,
          lineHeight: 1.25,
          color: '#181d26',
          maxWidth: 440,
        }}>
          Start building your health baseline today
        </h2>
      </div>
      <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
        <a href="#" style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 15, fontWeight: 500,
          color: '#fff',
          textDecoration: 'none',
          padding: '14px 24px',
          borderRadius: 12,
          background: '#181d26',
          display: 'inline-flex', alignItems: 'center',
        }}>
          Get started for free
        </a>
        <a href="#" style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: 15, fontWeight: 500,
          color: '#181d26',
          textDecoration: 'none',
          padding: '14px 20px',
          borderRadius: 12,
          background: 'transparent',
          border: '1px solid #9297a0',
          display: 'inline-flex', alignItems: 'center',
        }}>
          Book a demo
        </a>
      </div>
    </div>
  </section>
);

Object.assign(window, { SignatureCoralCard, SignatureForestCard, DarkCtaCard, CreamCallout, CtaBandLight });
