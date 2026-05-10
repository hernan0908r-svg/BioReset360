// BioReset360 — Marketing UI Kit
// DemoGrid.jsx — Pastel demo-card grid

const DemoGrid = () => {
  const cards = [
    {
      bg: '#fcab79', title: 'Cortisol Protocol',
      sub: 'Stress & HPA axis reset',
      bars: [70, 45, 85, 55, 90],
    },
    {
      bg: '#a8d8c4', title: 'Gut Microbiome Reset',
      sub: '16S rRNA panel · 90-day program',
      bars: [50, 80, 40, 70, 60],
    },
    {
      bg: '#f4d35e', title: 'Testosterone Baseline',
      sub: 'Free + total · SHBG · DHEA',
      bars: [60, 30, 75, 55, 80],
    },
    {
      bg: '#d9a441', title: 'Thyroid Full Panel',
      sub: 'TSH · T3 · T4 · Reverse T3',
      bars: [40, 65, 50, 80, 45],
    },
    {
      bg: '#f5e9d4', title: 'Metabolic Score',
      sub: 'Fasting insulin · HbA1c · ApoB',
      bars: [80, 55, 70, 35, 65],
    },
    {
      bg: '#181d26', title: 'Sleep Optimization',
      sub: 'HRV · Latency · Deep sleep %',
      bars: [55, 75, 60, 85, 40],
      dark: true,
    },
  ];

  return (
    <section style={{ padding: '96px 48px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 11, fontWeight: 600,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            color: '#9297a0',
            marginBottom: 14,
          }}>
            Protocol library
          </div>
          <h2 style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: 36, fontWeight: 400,
            lineHeight: 1.2,
            color: '#181d26',
            maxWidth: 480,
          }}>
            Reset any system. Track every biomarker.
          </h2>
        </div>

        {/* Grid — deliberately uneven heights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
        }}>
          {cards.map((card, i) => (
            <div key={i} style={{
              background: card.bg,
              borderRadius: 10,
              padding: 20,
              minHeight: i % 2 === 0 ? 180 : 150,
            }}>
              <div style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 14, fontWeight: 500,
                color: card.dark ? '#fff' : '#181d26',
                marginBottom: 4,
              }}>
                {card.title}
              </div>
              <div style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: 11,
                color: card.dark ? 'rgba(255,255,255,0.55)' : '#41454d',
                marginBottom: 16,
              }}>
                {card.sub}
              </div>
              {/* Mini bar chart */}
              <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 48 }}>
                {card.bars.map((h, j) => (
                  <div key={j} style={{
                    flex: 1,
                    height: `${h}%`,
                    background: card.dark ? 'rgba(255,255,255,0.25)' : 'rgba(24,29,38,0.18)',
                    borderRadius: '3px 3px 0 0',
                  }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { DemoGrid });
