// BioReset360 — Marketing UI Kit
// FeatureCard.jsx — Tabbed feature card (surface-soft)

const FeatureCard = () => {
  const [active, setActive] = React.useState(0);

  const tabs = [
    {
      label: 'Biomarker Tracking',
      title: 'Real-time biomarker tracking from lab to dashboard',
      body: 'Connect your lab results, continuous glucose monitor, and wearable data into a single longitudinal view. Flag outliers automatically.',
      cta: 'See what we track',
    },
    {
      label: 'Protocol Library',
      title: '200+ evidence-based protocols, personalized to your labs',
      body: 'Every protocol cites primary literature. Dosing, timing, and sequencing adapt to your current biomarker baseline — not a generic template.',
      cta: 'Browse protocols',
    },
    {
      label: 'Recovery Analytics',
      title: 'Know when to push and when to recover',
      body: 'HRV, sleep quality, and resting heart rate are synthesized into a daily readiness score that adjusts your protocol intensity automatically.',
      cta: 'How readiness works',
    },
    {
      label: 'Team Coaching',
      title: 'Expert health coaches available on-demand',
      body: 'Board-certified functional medicine practitioners review your labs, answer questions, and co-author protocol adjustments with you.',
      cta: 'Meet the team',
    },
  ];

  return (
    <section style={{ padding: '96px 48px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          background: '#f8fafc',
          borderRadius: 12,
          padding: 32,
          display: 'flex',
          gap: 32,
          minHeight: 280,
        }}>
          {/* Tab rail */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: 200,
            flexShrink: 0,
          }}>
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 14,
                  fontWeight: active === i ? 500 : 400,
                  color: active === i ? '#181d26' : '#41454d',
                  textAlign: 'left',
                  padding: '10px 14px',
                  borderRadius: 8,
                  border: 'none',
                  background: active === i ? '#fff' : 'transparent',
                  boxShadow: active === i ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                  cursor: 'pointer',
                  lineHeight: 1.35,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab pane */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8px 0' }}>
            <h3 style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 22, fontWeight: 400,
              lineHeight: 1.35,
              color: '#181d26',
              maxWidth: 480,
              marginBottom: 12,
            }}>
              {tabs[active].title}
            </h3>
            <p style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 14, fontWeight: 400,
              lineHeight: 1.6,
              color: '#333840',
              maxWidth: 440,
              marginBottom: 20,
            }}>
              {tabs[active].body}
            </p>
            <a href="#" style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: 14, fontWeight: 500,
              color: '#181d26',
              textDecoration: 'none',
              borderBottom: '1px solid #181d26',
              display: 'inline-flex',
              paddingBottom: 1,
            }}>
              {tabs[active].cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { FeatureCard });
