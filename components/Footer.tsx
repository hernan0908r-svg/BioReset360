'use client';
import Link from 'next/link';
import { WHATSAPP_URL, CONTACT_EMAIL, CRISIS_NOTICE } from '@/lib/site';

const FOOTER_BG = '#1F302E';

const navColumns = [
  {
    heading: 'Nuestro Enfoque',
    links: [
      { label: 'El Método 360', href: '/servicios' },
      { label: 'La Dra. Patricia Rozo', href: '/el-terapeuta' },
    ],
  },
  {
    heading: 'Programas',
    links: [
      { label: 'Planes y Precios', href: '/precios' },
      { label: 'Detalle de Planes', href: '/planes' },
      { label: 'Encuentra tu plan', href: '/triaje' },
    ],
  },
  {
    heading: 'Contacto',
    links: [
      { label: 'Página de contacto', href: '/contacto' },
      { label: 'Escribir por WhatsApp', href: WHATSAPP_URL },
      { label: `Correo: ${CONTACT_EMAIL}`, href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: FOOTER_BG, color: 'rgba(246,242,234,0.75)', fontFamily: 'var(--font-body)' }}>
      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(246,242,234,0.1);
          margin-bottom: 28px;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-link {
          font-size: 13px;
          color: rgba(246,242,234,0.6);
          text-decoration: none;
          display: block;
          margin-bottom: 10px;
          transition: color 0.15s ease;
        }
        .footer-link:hover { color: rgba(246,242,234,0.95); }
        .footer-col-heading {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(246,242,234,0.35);
          margin-bottom: 14px;
        }
        .crisis-note {
          background: rgba(246,242,234,0.06);
          border: 1px solid rgba(246,242,234,0.12);
          border-radius: 8px;
          padding: 14px 18px;
          font-size: 12px;
          line-height: 1.65;
          color: rgba(246,242,234,0.55);
          margin-bottom: 28px;
        }
      `}</style>

      <div className="container-padding" style={{ maxWidth: 1240, margin: '0 auto', paddingTop: 64 }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'rgba(246,242,234,0.95)', marginBottom: 6 }}>
              BioReset360®
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(246,242,234,0.35)', marginBottom: 16 }}>
              Enfoque 360 · Bogotá
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(246,242,234,0.55)', maxWidth: 240, marginBottom: 20 }}>
              Plataforma de bienestar integral creada y dirigida personalmente por la Dra. Patricia Rozo.
            </p>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(246,242,234,0.4)', maxWidth: 240 }}>
              Psicología integrativa · Bogotá, Colombia
              <br />
              Atención presencial y virtual
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map(col => (
            <div key={col.heading}>
              <div className="footer-col-heading">{col.heading}</div>
              {col.links.map(link => (
                link.href.startsWith('http') || link.href.startsWith('mailto:') ? (
                  <a key={link.label} href={link.href} className="footer-link" target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className="footer-link">{link.label}</Link>
                )
              ))}
            </div>
          ))}
        </div>

        {/* Aviso de crisis */}
        <div className="crisis-note">
          {CRISIS_NOTICE}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ paddingBottom: 32 }}>
          <div style={{ fontSize: 12, color: 'rgba(246,242,234,0.35)' }}>
            © 2026 BioReset360®. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/politica-de-privacidad" style={{ fontSize: 12, color: 'rgba(246,242,234,0.35)', textDecoration: 'none' }}>Privacidad</Link>
            <Link href="/terminos" style={{ fontSize: 12, color: 'rgba(246,242,234,0.35)', textDecoration: 'none' }}>Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
