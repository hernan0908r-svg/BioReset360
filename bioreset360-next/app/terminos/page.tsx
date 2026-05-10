'use cache';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos y Condiciones · BioReset360®',
  description: 'Términos y condiciones de uso de la plataforma BioReset360®.',
};

export default async function TerminosPage() {
  return (
    <div style={{ background: 'var(--color-canvas)', minHeight: '100vh', padding: '96px 48px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)', textDecoration: 'none' }}>← Volver al inicio</Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.15, marginTop: 24, marginBottom: 16 }}>Términos y Condiciones de Uso</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-muted)' }}>Última actualización: Mayo 2026</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--color-body)' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar el sitio web y los servicios de BioReset360® (en adelante, "la Plataforma"), usted acepta estar sujeto a los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar la Plataforma.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>2. Descripción del Servicio</h2>
            <p>BioReset360® es una plataforma de optimización de bienestar emocional y salud integrativa dirigida por la Dra. Patricia Rozo. Los servicios incluyen, pero no se limitan a, psicoterapia clínica, evaluación emocional, terapias complementarias y recursos educativos.</p>
            <p style={{ marginTop: 12 }}><strong>Aviso Médico:</strong> La información proporcionada en la Plataforma no reemplaza el consejo médico profesional, diagnóstico o tratamiento en situaciones de emergencia vital. En caso de una emergencia médica o psiquiátrica, contacte inmediatamente a los servicios de urgencias de su localidad.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>3. Citas y Agendamiento</h2>
            <ul style={{ paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>El usuario se compromete a proporcionar información veraz y precisa al momento de agendar una cita.</li>
              <li><strong>Cancelaciones y Reprogramaciones:</strong> Las citas deben ser canceladas o reprogramadas con al menos 24 horas de antelación. Las cancelaciones tardías o inasistencias pueden estar sujetas a cobros según lo acordado.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>4. Pagos y Reembolsos</h2>
            <p>Los pagos se realizan a través de plataformas seguras de terceros (como MercadoPago o Stripe). El acceso a planes o sesiones individuales requiere el pago previo o en las condiciones estipuladas al momento de la reserva. Los reembolsos por planes no utilizados estarán sujetos a evaluación caso a caso bajo criterio clínico.</p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, color: 'var(--color-ink)', marginBottom: 12 }}>5. Propiedad Intelectual</h2>
            <p>Todo el contenido de la Plataforma (textos, gráficos, logotipos, imágenes, metodologías) es propiedad exclusiva de BioReset360® y está protegido por las leyes de propiedad intelectual. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
