import Link from 'next/link';
import { THEME } from '@/lib/theme';

const P = THEME.primary;

const footerColumns = [
  { 
    heading: 'Servicios', 
    links: [
      { label: 'Terapias Complementarias', href: '/servicios' },
      { label: 'Agendar Cita', href: '/agendar' },
    ] 
  },
  { 
    heading: 'Planes', 
    links: [
      { label: 'Todos los Planes', href: '/planes' },
      { label: 'Cuestionario de Triaje', href: '/triaje' }
    ] 
  },
  { 
    heading: 'La Dra. Rozo', 
    links: [
      { label: 'Perfil y Formación', href: '/el-terapeuta' },
    ] 
  },
  { 
    heading: 'Contacto', 
    links: [
      { label: 'Escribir por WhatsApp', href: 'https://wa.me/573000000000' }
    ] 
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary)', padding: '64px 48px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 56 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 6 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--color-on-primary)' }}>BioReset</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: 'var(--color-on-primary)' }}>360</span>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, fontWeight: 600, letterSpacing: '1.4px', textTransform: 'uppercase', color: 'var(--color-border-strong)', marginBottom: 12 }}>Enfoque 360</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 220 }}>
              Plataforma de optimización de salud dirigida personalmente por la Dra. Patricia Rozo.
            </p>
          </div>
          <Link href="/planes" style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--color-ink)', padding: '12px 24px', borderRadius: 12, background: 'var(--color-canvas)', textDecoration: 'none' }}>
            Ver Planes
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginBottom: 48 }}>
          {footerColumns.map(column => (
            <div key={column.heading}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '.8px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>{column.heading}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {column.links.map(link => (
                  <Link key={link.label} href={link.href} style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,.5)' }}>© 2026 BioReset360. Todos los derechos reservados.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/politica-de-privacidad" style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Política de Privacidad</Link>
            <Link href="/terminos" style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
