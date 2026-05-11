'use cache';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidad · BioReset360®',
  description: 'Política de Tratamiento de Datos Personales de BioReset360® y la Dra. Patricia Rozo.',
};

export default async function PoliticaPrivacidadPage() {
  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '100vh', padding: '96px 48px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', textDecoration: 'none' }}>← Volver al inicio</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.15, marginTop: 24, marginBottom: 16 }}>Política de Tratamiento de Datos Personales</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)' }}>Última actualización: Mayo 2026</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--color-body)' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>1. Introducción</h2>
            <p>El presente documento establece las Políticas de Tratamiento de Datos Personales de BioReset360® y la Dra. Patricia Rozo, en estricto cumplimiento de la <strong>Ley Estatutaria 1581 de 2012</strong>, el Decreto Reglamentario 1377 de 2013 y demás normativas vigentes en Colombia sobre protección de datos personales (Habeas Data). Nuestro compromiso es garantizar la privacidad, seguridad y transparencia en el manejo de la información sensible de nuestros pacientes y usuarios.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>2. Recopilación de Datos Sensibles</h2>
            <p>Al utilizar nuestros servicios de agendamiento o responder al Cuestionario de Triaje Emocional, recolectamos datos personales e información relacionada con su estado emocional y de salud. Estos son considerados <strong>Datos Sensibles</strong>.</p>
            <p style={{ marginTop: 12 }}>La información recopilada incluye, pero no se limita a:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>Nombres, apellidos y datos de contacto (correo electrónico, número de teléfono).</li>
              <li>Respuestas relacionadas con bienestar emocional, historial clínico y motivos de consulta.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>3. Finalidad del Tratamiento</h2>
            <p>Los datos recopilados serán utilizados de manera estrictamente confidencial y exclusiva para las siguientes finalidades:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>Evaluación clínica, triaje y diseño del plan terapéutico.</li>
              <li>Gestión de agendamiento de citas y recordatorios.</li>
              <li>Envío de información relevante relacionada con su proceso terapéutico.</li>
            </ul>
            <p style={{ marginTop: 12 }}>En ningún caso, BioReset360® compartirá, venderá o alquilará su información médica o personal a terceros para fines de marketing.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>4. Seguridad de la Información</h2>
            <p>Utilizamos plataformas de terceros (como Google Workspace, herramientas de agendamiento y pasarelas de pago) que cumplen con los más altos estándares de seguridad internacional y encriptación de datos para proteger su información contra accesos no autorizados, pérdida o alteración.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>5. Derechos del Titular (Habeas Data - Ley 1581)</h2>
            <p>De conformidad con el artículo 8 de la Ley 1581 de 2012, usted como titular de los datos personales tiene derecho en cualquier momento a:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente a BioReset360®.</li>
              <li><strong>Solicitar prueba de la autorización</strong> otorgada para el tratamiento de sus datos.</li>
              <li>Ser informado sobre el uso que se le ha dado a sus datos personales.</li>
              <li><strong>Revocar la autorización y/o solicitar la supresión</strong> total de sus datos de nuestras bases de datos cuando lo considere pertinente.</li>
            </ul>
            <p style={{ marginTop: 12 }}>Para ejercer estos derechos, puede comunicarse directamente a través de nuestros canales oficiales de WhatsApp o al correo dispuesto por la administración clínica de BioReset360®.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
