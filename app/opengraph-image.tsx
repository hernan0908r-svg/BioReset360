import { ImageResponse } from 'next/og';

export const alt = 'BioReset360 · Programa Integral de Bienestar · Dra. Patricia Rozo';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          background: '#F6F2EA',
          position: 'relative',
        }}
      >
        {/* Blob decorativo */}
        <div
          style={{
            position: 'absolute',
            top: -140,
            right: -120,
            width: 560,
            height: 620,
            borderRadius: '62% 38% 65% 35% / 55% 50% 50% 45%',
            background: 'rgba(45,93,90,0.10)',
          }}
        />
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: 'uppercase' as const,
            color: '#857C6E',
            marginBottom: 28,
          }}
        >
          Enfoque 360 · Bogotá
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            color: '#20201C',
            lineHeight: 1.05,
            letterSpacing: -3,
            marginBottom: 32,
          }}
        >
          BioReset360®
        </div>
        <div
          style={{
            fontSize: 34,
            color: '#4A463E',
            lineHeight: 1.4,
            maxWidth: 760,
          }}
        >
          Programa integral de bienestar dirigido personalmente por la Dra. Patricia Rozo.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 16,
            background: '#2D5D5A',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
