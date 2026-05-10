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
- `NavBar` — sticky nav con links y CTA
- `Footer` — links, créditos, descripción del programa
- `ArrowRight` — icono flecha

### Lib
- `lib/theme.ts` — tokens de color del tema bosque

---

## Feature: Pasarela de Pago MercadoPago

### Qué hace
Permite al usuario adquirir un plan (Essencial, Vital, Premium) directamente desde el sitio. El flujo reemplaza el botón "Agendar Cita" por "Adquirir Plan" que lleva a `/pago?plan=X`.

### Quién la usa
Visitantes que ya decidieron qué plan quieren (generalmente después de hacer el triaje).

### Flujo
1. Usuario completa triaje → ve plan recomendado → clic "Adquirir Plan"
2. O desde la sección de precios: clic "Adquirir Plan [Nombre]"
3. Llega a `/pago?plan=essencial|vital|premium`
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
| Essencial | 290.000 | essencial |
| Vital | 890.000 | vital |
| Premium | 1.890.000 | premium |

### Variables de entorno requeridas
```
MERCADOPAGO_ACCESS_TOKEN=   # server-side only, nunca NEXT_PUBLIC_
NEXT_PUBLIC_BASE_URL=       # URL base del sitio (para callbacks)
```

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

- [ ] Eliminar todas las menciones de "evaluación gratuita" / "evaluación inicial gratuita"
- [ ] Reemplazar CTAs de planes: "Comenzar / Iniciar / Transformar" → "Adquirir Plan [Nombre]"
- [ ] NavBar: cambiar "Agendar Cita" → "Ver Planes" (link a `/#planes`)
- [ ] Sección de planes: agregar texto invitando al cuestionario antes de elegir
- [ ] Remover página `/agendar` del nav

---

## Pendiente / Roadmap

- [ ] Migración a Tailwind CSS v4 + shadcn/ui (sesión dedicada)
- [ ] Supabase Auth para panel de administración de la Dra. Rozo
- [ ] Dashboard admin: ver pagos, gestionar agenda
- [ ] Webhook de MercadoPago para confirmar pagos server-side
- [ ] Email de confirmación post-pago
