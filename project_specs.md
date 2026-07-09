# project_specs.md — BioReset360

## Descripción

BioReset360 es el sitio web y plataforma de ventas del programa de bienestar integral creado y ejecutado personalmente por la **Dra. Patricia Rozo**. No es una clínica ni un equipo — es una sola experta con un método propio (Enfoque 360).

## Usuarios

- **Visitantes**: personas interesadas en bienestar integral que llegan al sitio
- **Compradores**: visitantes que deciden adquirir un plan tras completar el cuestionario de triaje
- **Admin (futuro)**: la Dra. Rozo, para gestionar citas y pagos

## Estado actual (construido)

### Páginas públicas (Next.js App Router)
- `/` — Home: hero, triaje emocional, terapias, teaser Dra. Rozo, testimonios, planes
- `/el-terapeuta` — Bio completa de la Dra. Patricia Rozo
- `/servicios` — Grid de 7 modalidades terapéuticas
- `/triaje` — Cuestionario de 5 preguntas → resultado con plan recomendado
- `/agendar` — (DEPRECADO, reemplazado por `/pago`)

### Componentes compartidos
- `NavBar` — sticky nav (3 links + CTA único "Encuentra tu plan" → /triaje), se compacta al hacer scroll
- `Footer` — links, contacto real, aviso de crisis (Línea 106/123); sin newsletter (se retiró hasta conectarlo a Resend)
- `MobileCtaBar` — barra CTA fija inferior en mobile (home, el-terapeuta, servicios, precios, planes)
- `WhatsAppFloat` — botón flotante de WhatsApp tras scroll (oculto en /triaje y /pago)
- `ArrowRight` — icono flecha

### Lib
- `lib/theme.ts` — tokens de color del tema bosque
- `lib/site.ts` — SITE_URL + contacto centralizado: `WHATSAPP_NUMBER` (placeholder, pendiente número real), `CONTACT_EMAIL`, `CRISIS_NOTICE`

---

## Rediseño premium (julio 2026)

Rediseño integral de UI/UX basado en patrones de los sitios de psicología más exitosos:

- **Funnel unificado**: un solo CTA principal en todo el sitio ("Encuentra tu plan" → /triaje). Nav reducido a 3 links.
- **Tipografía**: Playfair Display → **Fraunces** (variable, con eje óptico); display serif unificado en weight 500.
- **Sistema de diseño**: clases globales `.btn-primary/.btn-secondary/.btn-ghost`, tokens de sombra (`--shadow-ambient/--shadow-elevated`), focus-visible global, `prefers-reduced-motion` respetado vía CSS determinista (`.anim-reveal` — NO usar `useReducedMotion()` en render: causa hydration mismatch).
- **Home completo**: Hero (texto izq. + prueba social) → Metodología → Triaje (cards clickeables) → Teaser Dra. Rozo → Terapias → Testimonios (estáticos, sin auto-advance) → Precios (derivados de data/planes.ts) → FAQ (id="faq", datos en `data/faqs.ts`) → CTA final oscuro.
- **Precios**: anclaje por sesión (total ÷ sesiones), "Pago en cuotas disponible", trust row MercadoPago.
- **Checkout**: botón en color de marca, bloque "¿Qué pasa después del pago?", trust copy; /pago/exitoso con próximos pasos + WhatsApp.
- **Triaje**: tamaños con clamp (fix mobile), pantalla intermedia "Preparando tu recomendación…" (1.6s), planes alternativos en el resultado.
- **Páginas nuevas**: `/contacto`, `not-found.tsx`, `error.tsx`, `app/opengraph-image.tsx` (OG 1200×630 generada).
- **SEO**: JSON-LD Person + ProfessionalService (layout), FAQPage (home), Product/Offer (precios); /contacto en sitemap.

### Pendientes del rediseño
- [ ] Reemplazar `WHATSAPP_NUMBER` placeholder en `lib/site.ts` con el número real
- [ ] Añadir tarjeta profesional de la Dra. Rozo (footer + el-terapeuta) cuando se confirme
- [ ] Sesión de fotos: consultorio, herramientas, retrato horizontal (solo existe dra-rozo.jpg)
- [ ] Decidir garantía de primera sesión (propuesta de conversión, requiere aprobación de la Dra.)

---

## Feature: Pasarela de Pago MercadoPago

### Qué hace
Permite al usuario adquirir un plan (Essencial, Vital, Quantum) directamente desde el sitio. El flujo reemplaza el botón "Agendar Cita" por "Adquirir Plan" que lleva a `/pago?plan=X`. La fuente de verdad de planes y precios es `data/planes.ts` — el checkout, la validación y el triaje derivan de ahí.

### Quién la usa
Visitantes que ya decidieron qué plan quieren (generalmente después de hacer el triaje).

### Flujo
1. Usuario completa triaje → ve plan recomendado → clic "Adquirir Plan"
2. O desde la sección de precios: clic "Adquirir Plan [Nombre]"
3. Llega a `/pago?plan=essencial|vital|quantum`
4. Ve resumen del plan con precio
5. Clic "Pagar con MercadoPago"
6. Frontend llama a `/api/mercadopago/create-preference` (POST)
7. API crea una preferencia en MercadoPago y devuelve `init_point`
8. Frontend redirige a `init_point` (checkout MercadoPago)
9. Usuario paga → MercadoPago redirige a:
   - `/pago/exitoso?payment_id=X` — pago aprobado
   - `/pago/pendiente?payment_id=X` — pago pendiente
   - `/pago/fallido` — pago rechazado

### Datos del plan
| Plan | Precio COP | ID |
|------|-----------|-----|
| Essencial | 730.000 | essencial |
| Vital | 1.471.000 | vital |
| Quantum | 2.229.000 | quantum |

> Precios y contenido definidos en `data/planes.ts`. No duplicar valores en otros archivos.

### Variables de entorno requeridas
```
MERCADOPAGO_ACCESS_TOKEN=   # server-side only, nunca NEXT_PUBLIC_
NEXT_PUBLIC_BASE_URL=       # URL base del sitio (callbacks, sitemap, OG)
RESEND_API_KEY=             # envío de emails (triaje + aviso de venta)
RESEND_FROM_EMAIL=          # remitente verificado en Resend
SALES_NOTIFICATION_EMAIL=   # correo de la Dra. para el aviso de venta
```

### Confirmación de venta (webhook MercadoPago)
- `app/api/mercadopago/webhook/route.ts` recibe la notificación de MercadoPago.
- La preferencia se crea con `notification_url` y `external_reference: planId`.
- El webhook consulta el pago real (`getPayment`) y, si `status === 'approved'`, envía un aviso por correo a la Dra. (`sendSaleNotification`).
- **Importante:** MercadoPago no puede llamar a `localhost`; el webhook solo funciona con un dominio público (producción/preview de Vercel).
- Pendiente de hardening: validar la firma `x-signature` del webhook; deduplicar avisos (MP puede notificar más de una vez).

### Rutas y componentes
- `app/pago/page.tsx` — página de pago (Client Component para interactividad)
- `app/pago/exitoso/page.tsx` — página de éxito post-pago
- `app/pago/pendiente/page.tsx` — página de pago pendiente
- `app/pago/fallido/page.tsx` — página de pago fallido
- `app/api/mercadopago/create-preference/route.ts` — Route Handler que crea la preferencia
- `lib/services/mercadopago.service.ts` — lógica de creación de preferencia
- `lib/validations/pago.ts` — Zod schema para el input del plan
- `.env.local.example` — template de variables de entorno

### Errores y manejo
- Plan inválido → 400 Bad Request
- `MERCADOPAGO_ACCESS_TOKEN` no configurado → 500 con mensaje claro en consola
- Error al crear preferencia en MP → mostrar error al usuario con botón "Intentar de nuevo"
- Sandbox/test mode cuando `MERCADOPAGO_ACCESS_TOKEN` empieza con `TEST-`

---

## Cambios de contenido pendientes

- [x] Migrar modelo Premium → Quantum (precios reales) en checkout, validación y triaje
- [x] Funnel: tarjetas de `/precios` y `/planes` enlazan a `/pago?plan=X` (antes iban a `/agendar`)
- [x] NavBar/Footer: reemplazar "Agendar Cita" → "Ver Precios" / "Adquirir un Plan"
- [x] Remover `/agendar` del nav (la página sigue existiendo con el Calendly, pero ya no se enlaza desde el nav)
- [ ] Eliminar menciones residuales de "evaluación gratuita" si aparecen en nuevas secciones
- [ ] Sección de planes: texto invitando al cuestionario antes de elegir (ya existe en PricingSection y /precios)

---

## Pendiente / Roadmap

- [ ] Migración a Tailwind CSS v4 + shadcn/ui (sesión dedicada)
- [ ] Supabase Auth para panel de administración de la Dra. Rozo
- [ ] Dashboard admin: ver pagos, gestionar agenda
- [x] Webhook de MercadoPago para confirmar pagos server-side + aviso de venta por email
- [x] Validación de firma `x-signature` del webhook (activa si `MERCADOPAGO_WEBHOOK_SECRET` está definido)
- [x] Email de confirmación post-pago al cliente
- [ ] Deduplicar avisos (MP puede notificar más de una vez) — requiere persistencia
