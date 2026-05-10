# CLAUDE.md — Next.js + Supabase Fullstack

> Instrucciones permanentes para Claude Code. Se leen al inicio de cada sesión.
> Cada línea justifica su presencia: si no cambia el comportamiento de Claude, no está aquí.

---

## 📋 Regla 1 — Leer Primero, Siempre

**Antes de tomar cualquier acción**, leer:
- `CLAUDE.md` ← este archivo
- `project_specs.md` ← qué hace la app, quién la usa, qué está construido

Si alguno de estos archivos no existe, **crearlo antes de hacer cualquier otra cosa**.

---

## 📐 Regla 2 — Definir Antes de Construir

Antes de escribir cualquier código:
1. Crear o actualizar `project_specs.md` y definir:
   - Qué hace la feature y quién la usa
   - Qué datos necesita (tablas, columnas)
   - Qué rutas o componentes crea
   - Qué errores puede tener y cómo manejarlos
2. Si algo no está claro en los specs, **preguntar antes de empezar**

---

## 🎯 Project Overview

Build a lightweight, production-ready web application con Next.js App Router y Supabase.

**Filosofía:**
- Cada feature hace **una sola cosa** bien
- El código es fácil de seguir para cualquier desarrollador
- La app es fácil de correr localmente y deployar

---

## 🎨 Design

Eres un senior UI designer y frontend developer.

- Interfaces **premium, modernas y elegantes**
- Animaciones sutiles, spacing correcto, jerarquía visual clara
- **Sin emojis en la UI** de la aplicación
- **Sin gradientes genéricos**
- Mobile-first: diseñar desde 375px hacia arriba
- Loading states: skeleton screens, no spinners genéricos
- Error states: mensaje claro + acción de recuperación
- Empty states: útiles, nunca pantalla en blanco

Paleta y tipografía definidas en `tailwind.config.ts` como tokens semánticos.

---

## 🏗️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 15+ App Router (TypeScript estricto)
- **Estilos**: Tailwind CSS v4 + shadcn/ui
- **Estado del servidor**: TanStack Query v5 (en Client Components que lo necesiten)
- **Estado local**: `useState` / `useReducer` — Zustand solo si escala
- **Formularios**: React Hook Form + Zod
- **Animaciones**: Motion (Framer Motion)

### Backend
- **API**: Next.js Route Handlers (`/app/api/`)
- **Server Actions**: para mutaciones desde Server/Client Components
- **Validación**: Zod en TODAS las entradas (API routes + Server Actions)

### Base de Datos y Auth
- **Database + Auth**: Supabase (PostgreSQL)
- **Client**: Supabase JS Client con SSR (`@supabase/ssr`)
- **Auth**: Supabase Auth con cookies SSR

### Infraestructura
- **Deploy**: Vercel
- **DB**: Supabase hosted
- **Env vars**: `.env.local` (nunca versionado)

---

## 📁 Estructura de Archivos

```
project-root/
├── app/
│   ├── (auth)/           # Rutas públicas: login, signup
│   ├── (dashboard)/      # Rutas protegidas
│   │   ├── layout.tsx    # Verifica sesión una sola vez
│   │   └── [feature]/
│   │       ├── page.tsx                  # Server Component (data fetching)
│   │       ├── [feature]-client.tsx      # Client Component si necesita interactividad
│   │       └── components/               # Componentes co-localizados con la página
│   ├── api/
│   │   └── [resource]/
│   │       └── route.ts  # Thin handler → llama a service
│   └── layout.tsx
├── components/
│   ├── ui/               # shadcn/ui primitivos (no modificar)
│   └── common/           # Componentes compartidos del proyecto
├── lib/
│   ├── supabase/
│   │   ├── server.ts     # createServerClient (RSC, Route Handlers, Server Actions)
│   │   └── client.ts     # createBrowserClient (Client Components únicamente)
│   ├── services/         # Lógica de negocio
│   └── validations/      # Schemas Zod compartidos
├── types/                # Tipos TypeScript globales
├── project_specs.md      # ← OBLIGATORIO: specs de la app
├── CLAUDE.md             # ← este archivo
└── .env.local            # NUNCA commitear
```

**Reglas de organización:**
- API routes **thin**: solo validan input, llaman al service, devuelven respuesta
- Un componente por archivo; co-localizar componentes de una página junto a ella
- Supabase **server client** para RSC, Route Handlers y Server Actions
- Supabase **browser client** solo en Client Components (`'use client'`)
- **No crear carpetas top-level nuevas sin preguntar primero**

---

## 🔄 Cómo Funciona la App

La app es una serie de requests y responses:

1. El usuario visita una página o hace click — eso es el **input**
2. Un Route Handler o Server Action recibe el request y llama al service correcto
3. El service hace **una sola cosa** y retorna un resultado
4. La ruta manda el resultado de vuelta al usuario — eso es el **output**
5. Si algo falla, mostrar un error claro — **nunca fallar silenciosamente**

---

## ⚙️ Comandos Esenciales

```bash
npm run dev          # Dev server (puerto 3000)
npm run build        # Build de producción
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run lint:fix     # ESLint con auto-fix
```

---

## 🟢 Reglas de Supabase

- **Siempre usar RLS — nunca desactivarla**
- Usar el **server-side Supabase client** para operaciones sensibles (API routes, Server Components, Server Actions)
- Operaciones sobre datos privados van por API routes para que RLS proteja correctamente
- **Signed URLs** para todo acceso a archivos/videos — nunca hacer el storage bucket público
- **Nunca exponer la `service_role` key en código client-side**
- Políticas RLS definidas en `supabase/migrations/` y versionadas en git

```typescript
// ✅ Server Component / Route Handler / Server Action
import { createServerClient } from '@/lib/supabase/server'
const supabase = await createServerClient()

// ✅ Client Component (solo UI interactiva no sensible)
import { createBrowserClient } from '@/lib/supabase/client'
const supabase = createBrowserClient()

// ❌ NUNCA en client-side
const supabase = createClient(url, process.env.SUPABASE_SERVICE_ROLE_KEY)
```

---

## 🔒 Secrets y Seguridad

- **Nunca** poner API keys, passwords o secrets directamente en el código
- **Nunca** commitear `.env.local` a GitHub
- **Nunca** exponer la `service_role` key de Supabase en frontend
- **Preguntar antes** de eliminar o renombrar archivos importantes
- Validar y sanitizar **toda** entrada del usuario antes de persistir
- Verificar sesión en **cada** route handler y Server Action protegida
- CORS configurado explícitamente en producción

---

## 🖊️ Cómo Escribir Código

- Escribir código simple y legible — **la claridad importa más que la elegancia**
- Hacer **un cambio a la vez**
- No tocar código que no esté relacionado con la tarea actual
- **No sobre-ingenierizar** — construir exactamente lo que se necesita, nada más
- Agregar `console.log` al inicio y fin de cada API route para poder seguir el flujo
- Si se necesita un cambio estructural grande, **explicar por qué antes de hacerlo**

---

## 📐 TypeScript

- **Nunca usar `any`** — si es inevitable, justificar con comentario
- `strict: true` en `tsconfig.json`
- Tipos de Request/Response definidos en `types/` o co-localizados con el feature
- Usar `satisfies` sobre type casting cuando sea posible
- Inferir tipos de Zod schemas: `type Input = z.infer<typeof InputSchema>`

---

## 🌐 Convenciones de API Routes

```typescript
// app/api/users/route.ts — THIN handler
export async function POST(request: Request) {
  console.log('[POST /api/users] start')

  try {
    const body = await request.json()
    const parsed = CreateUserSchema.safeParse(body)

    if (!parsed.success) {
      return Response.json(
        { error: 'Invalid input', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const result = await userService.create(parsed.data)

    console.log('[POST /api/users] success', result.id)
    return Response.json({ data: result }, { status: 201 })

  } catch (error) {
    console.error('[POST /api/users] error', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

### Formato estándar de respuestas
```typescript
// Éxito
{ data: T, meta?: { page: number, limit: number, total: number } }

// Error
{ error: string, code?: string, details?: unknown }
```

---

## 🚫 Anti-patrones — Nunca Hacer

```typescript
// ❌ Lógica de negocio en route handler (va en /lib/services/)
export async function POST(req) {
  const { data } = await supabase.from('users').select()
  const filtered = data.filter(u => u.active) // esto va en el service
}

// ❌ service_role en client-side
const supabase = createClient(url, process.env.SUPABASE_SERVICE_ROLE_KEY)

// ❌ useEffect para fetching de datos del servidor
useEffect(() => { fetch('/api/users').then(...) }, [])
// ✅ Usar Server Component o TanStack Query

// ❌ Catch silencioso
try { ... } catch (e) {} // NUNCA

// ❌ any sin justificación
const data: any = await response.json()

// ❌ Secrets en código
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'

// ❌ Carpetas top-level nuevas sin preguntar
// mkdir app/infrastructure → preguntar primero
```

---

## 🧪 Testing — Criterios de "Done"

### Antes de marcar cualquier tarea como completada:
- [ ] `npm run build` pasa sin errores TypeScript ni de compilación
- [ ] `npm run dev` corre sin errores en consola del servidor ni del browser
- [ ] La feature funciona end-to-end manualmente en el browser
- [ ] Los features existentes no fueron rotos por el cambio

### Al construir una página o API route nueva:
- [ ] Testear el **happy path** (todo funciona como se espera)
- [ ] Testear el **error path** (qué pasa cuando algo falla)
- [ ] Verificar auth: comportamiento logged-in vs logged-out
- [ ] Confirmar que Supabase RLS funciona (datos correctamente scoped por usuario)

### Nunca decir "done" si:
- El build está fallando
- Hay errores en la consola del browser o del servidor
- La feature no fue testeada manualmente en el browser

---

## 🔍 PROTOCOLO DE REVISIÓN EXHAUSTIVA DE CÓDIGO

> Ejecutar este protocolo completo cuando el usuario diga: "revisa el código", "audit", "code review", "encuentra errores" o "prepara para deploy".
> Recorrer TODO el codebase sistemáticamente. No asumir que algo está bien sin haberlo leído.

### FASE 1 — Mapeo del Codebase

Antes de revisar, construir el mapa completo:

```bash
# 1. Ver estructura completa
find . -type f -name "*.ts" -o -name "*.tsx" | grep -v node_modules | grep -v .next | sort

# 2. Contar archivos por categoría
find ./app -name "*.tsx" | wc -l
find ./lib -name "*.ts" | wc -l
find ./components -name "*.tsx" | wc -l

# 3. Detectar imports de supabase client en archivos server y viceversa
grep -r "createBrowserClient" app/ --include="*.tsx" --include="*.ts" -l
grep -r "createServerClient" components/ --include="*.tsx" -l

# 4. Buscar uso de 'any'
grep -rn ": any" app/ lib/ components/ --include="*.ts" --include="*.tsx"

# 5. Buscar console.log olvidados fuera de API routes
grep -rn "console.log" app/ --include="*.tsx" | grep -v "api/"

# 6. Buscar secrets hardcodeados
grep -rn "sk-\|eyJ\|SUPABASE_SERVICE\|password\s*=\s*['\"]" app/ lib/ --include="*.ts" --include="*.tsx"

# 7. Detectar catches vacíos o silenciosos
grep -rn "catch.*{}" app/ lib/ --include="*.ts" --include="*.tsx"
grep -A1 "} catch" app/ lib/ --include="*.ts" --include="*.tsx" | grep -v "console\|throw\|return\|log"
```

### FASE 2 — Revisión por Categorías

Revisar **cada archivo** de las siguientes categorías. Por cada archivo: leerlo completo, identificar problemas, documentarlos.

#### 2A — Seguridad y Auth
- [ ] Cada Route Handler protegido verifica sesión antes de cualquier operación
- [ ] Cada Server Action protegida verifica sesión
- [ ] Ningún endpoint expone datos de otros usuarios (RLS bypass)
- [ ] `service_role` key no aparece en ningún archivo client-side
- [ ] Variables de entorno sensibles usan `NEXT_PUBLIC_` solo si son realmente públicas
- [ ] Inputs de usuario validados con Zod antes de tocar la DB
- [ ] No hay SQL crudo con interpolación de strings
- [ ] Cookies de sesión configuradas con `httpOnly: true` y `secure: true` en producción

#### 2B — TypeScript y Tipos
- [ ] No hay `any` sin justificación comentada
- [ ] No hay `as SomeType` (type casting) que enmascare errores reales
- [ ] Todos los `params` de páginas y layouts tipados correctamente (Next.js 15: `Promise<{...}>`)
- [ ] Tipos de respuesta de Supabase no ignorados con `!` (non-null assertion)
- [ ] Zod schemas definidos para cada input de API y Server Action
- [ ] No hay `@ts-ignore` ni `@ts-nocheck` sin comentario explicativo

#### 2C — Next.js App Router
- [ ] Server Components no usan hooks (`useState`, `useEffect`, etc.)
- [ ] Client Components marcados con `'use client'` cuando usan hooks o eventos
- [ ] No hay `async` en Client Components directamente (usar Server Components o fetching)
- [ ] `generateMetadata` definido en cada `page.tsx` pública (SEO)
- [ ] `loading.tsx` definido para rutas con data fetching pesado
- [ ] `error.tsx` definido para rutas que pueden fallar
- [ ] `not-found.tsx` en rutas con `[id]` dinámico
- [ ] Layouts protegidos redirigen correctamente si no hay sesión
- [ ] No hay fetch waterfall innecesario (usar `Promise.all` para fetches paralelos)

#### 2D — Supabase y Base de Datos
- [ ] Siempre se usa el client correcto (server vs browser) según el contexto
- [ ] Errores de Supabase siempre manejados: `const { data, error } = await supabase...`
- [ ] `error` de Supabase nunca ignorado silenciosamente
- [ ] RLS habilitada en todas las tablas (verificar en Supabase dashboard)
- [ ] Queries no seleccionan `*` cuando solo se necesitan columnas específicas
- [ ] No hay N+1 queries (un query por item de una lista)
- [ ] Realtime subscriptions limpiadas con `unsubscribe()` en `useEffect` cleanup

#### 2E — Manejo de Errores
- [ ] Ningún `catch` vacío o silencioso
- [ ] Errores de red en el cliente muestran mensaje útil al usuario, no el error crudo
- [ ] Route Handlers retornan status codes HTTP correctos (400, 401, 403, 404, 500)
- [ ] Server Actions manejan errores y retornan estado estructurado, no throw crudo
- [ ] Boundaries de error (`error.tsx`) configurados en rutas críticas

#### 2F — Performance
- [ ] Imágenes usan `next/image` con `width`, `height` o `fill` + `sizes`
- [ ] Links usan `next/link` (no `<a href>` para navegación interna)
- [ ] Fuentes usan `next/font` (no `@import` en CSS)
- [ ] Componentes pesados con `dynamic(() => import(...), { ssr: false })` si no necesitan SSR
- [ ] No hay re-renders innecesarios por props que cambian referencia en cada render
- [ ] `key` prop correcto en listas (no índice si la lista puede reordenarse)

#### 2G — Calidad de Código
- [ ] Ninguna función supera 50 líneas — si sí, refactorizar
- [ ] Ningún archivo supera 300 líneas — si sí, dividir
- [ ] No hay código duplicado — extraer a util o service
- [ ] No hay imports no usados
- [ ] No hay variables declaradas y no usadas
- [ ] No hay `TODO` o `FIXME` sin ticket asociado antes de deploy
- [ ] No hay código comentado dejado olvidado

### FASE 3 — Ejecución de Comandos de Verificación

Ejecutar en orden. **No continuar si alguno falla.**

```bash
# 1. TypeScript — cero errores permitidos
npm run typecheck
# Si falla: leer cada error, corregir, volver a ejecutar

# 2. ESLint — cero warnings en archivos modificados
npm run lint
# Si falla: npm run lint:fix primero, luego corregir manualmente lo que quede

# 3. Build de producción — el más importante
npm run build
# Si falla: leer el error completo, identificar el archivo, corregir, rebuild

# 4. Verificar que no hay imports circulares
npx madge --circular --extensions ts,tsx ./app ./lib ./components 2>/dev/null || echo "madge no instalado — skip"

# 5. Buscar dependencias desactualizadas con vulnerabilidades
npm audit --audit-level=high
```

### FASE 4 — Reporte de Revisión

Al terminar la revisión, generar un reporte estructurado con este formato exacto:

```
## REPORTE DE REVISIÓN DE CÓDIGO
Fecha: [fecha]
Archivos revisados: [N]

### 🔴 CRÍTICO (bloquea deploy)
- [archivo:línea] Descripción del problema y fix aplicado/requerido

### 🟡 IMPORTANTE (debe corregirse pronto)
- [archivo:línea] Descripción del problema

### 🔵 MEJORA (nice to have)
- [archivo:línea] Sugerencia

### ✅ ESTADO FINAL
- TypeScript: PASS / FAIL
- ESLint: PASS / FAIL
- Build: PASS / FAIL
- Listo para deploy: SÍ / NO — [razón si es NO]
```

**IMPORTANTE**: Corregir todos los 🔴 CRÍTICO antes de continuar. Los 🟡 IMPORTANTE son obligatorios antes de deploy. Los 🔵 MEJORA son opcionales.

---

## 🚀 PROTOCOLO DE PREPARACIÓN PARA DEPLOY

> Ejecutar cuando el usuario diga: "prepara para deploy", "deploy", "push a producción" o "subir a Vercel".
> Este protocolo es secuencial. Cada paso debe pasar antes de continuar al siguiente.

### PASO 1 — Pre-flight Check (ejecutar primero)

```bash
# Verificar que estamos en la rama correcta
git branch --show-current
# Debe ser: main o la rama de release acordada

# Verificar que no hay cambios sin commitear
git status
# Debe mostrar: "nothing to commit, working tree clean"
# Si hay cambios: commitear o stashear primero

# Verificar que estamos sincronizados con origin
git fetch origin
git status
# Debe mostrar: "Your branch is up to date with 'origin/main'"
```

### PASO 2 — Ejecutar Revisión Exhaustiva

Ejecutar el **Protocolo de Revisión Exhaustiva de Código** completo (sección anterior).
**No continuar si hay items 🔴 CRÍTICO sin resolver.**

### PASO 3 — Verificación de Variables de Entorno

```bash
# Listar todas las variables de entorno usadas en el código
grep -rn "process.env\." app/ lib/ --include="*.ts" --include="*.tsx" | \
  grep -oP "process\.env\.\K[A-Z_]+" | sort -u
```

Para cada variable encontrada, verificar:
- [ ] Está definida en `.env.local` para desarrollo local
- [ ] Está configurada en Vercel Dashboard → Settings → Environment Variables para producción
- [ ] Variables con `NEXT_PUBLIC_` son realmente datos no sensibles
- [ ] Variables sin `NEXT_PUBLIC_` nunca se usan en Client Components

Crear o actualizar `.env.example` con todas las variables (sin valores reales):
```bash
# .env.example — commitear esto, nunca .env.local
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key   # solo server-side
```

### PASO 4 — Verificación de Supabase para Producción

- [ ] RLS habilitada en **todas** las tablas — verificar en Supabase Dashboard → Authentication → Policies
- [ ] Políticas RLS testeadas: un usuario no puede acceder a datos de otro
- [ ] Storage buckets configurados como privados (no públicos)
- [ ] Signed URLs funcionando para archivos/imágenes privadas
- [ ] Índices de base de datos creados en columnas frecuentemente consultadas (foreign keys, campos de búsqueda)
- [ ] Connection pooling habilitado si la app usa muchas conexiones simultáneas (Supabase → Database → Connection Pooling)
- [ ] Email templates de Supabase Auth personalizados (confirmar cuenta, reset password)

### PASO 5 — Build y Análisis Final

```bash
# Build limpio — eliminar cache primero
rm -rf .next
npm run build

# Si el build pasa, analizar el output:
# - Verificar que no hay páginas marcadas como "Dynamic" que deberían ser "Static"
# - Verificar que el bundle size de las páginas principales es razonable (< 200kB first load)
# - Identificar páginas lentas en el build output
```

Señales de alerta en el build output:
- `○ (Static)` → bien, pre-renderizado
- `ƒ (Dynamic)` → revisar si realmente necesita ser dinámico
- Bundle > 500kB en una sola página → investigar qué lo infla (`npm run analyze` si está configurado)

### PASO 6 — Verificación de SEO y Accesibilidad Básica

- [ ] `<title>` y `<meta description>` definidos en cada `page.tsx` (via `generateMetadata`)
- [ ] `og:image` configurado para páginas públicas principales
- [ ] Todas las imágenes tienen `alt` descriptivo (no vacío, no genérico)
- [ ] Contraste de colores cumple WCAG AA (ratio mínimo 4.5:1 para texto normal)
- [ ] Formularios tienen `<label>` asociados a cada input
- [ ] Elementos interactivos accesibles por teclado (Tab + Enter/Space)
- [ ] `robots.txt` y `sitemap.xml` configurados si aplica

### PASO 7 — Configuración de Vercel

Verificar en Vercel Dashboard antes del primer deploy o después de cambios de infra:

- [ ] Framework Preset: **Next.js** (auto-detectado)
- [ ] Build Command: `npm run build` (o el comando correcto del proyecto)
- [ ] Output Directory: `.next` (default)
- [ ] Node.js Version: 20.x (LTS)
- [ ] Environment Variables: todas las del Paso 3 cargadas para Production
- [ ] Domain configurado y SSL activo
- [ ] Vercel Analytics habilitado (opcional pero recomendado)

### PASO 8 — Deploy y Verificación Post-Deploy

```bash
# Opción A: deploy via Vercel CLI
npx vercel --prod

# Opción B: push a main con GitHub integration
git push origin main
```

**Verificaciones post-deploy (en el sitio en producción):**

- [ ] La página principal carga sin errores (F12 → Console: cero errores)
- [ ] Login / Signup funciona end-to-end con Supabase Auth
- [ ] El flujo principal de la app funciona (el happy path del project_specs.md)
- [ ] Las imágenes cargan correctamente (no broken images)
- [ ] Las redirecciones de auth funcionan (login → dashboard, logout → home)
- [ ] En mobile (375px): layout no está roto, texto legible, botones clickeables
- [ ] Verificar en Vercel → Functions: no hay function timeouts ni errores 500
- [ ] Verificar en Supabase → Logs: no hay queries fallidas ni errores de RLS inesperados

### PASO 9 — Reporte de Deploy

Al finalizar, reportar:

```
## REPORTE DE DEPLOY
Fecha: [fecha y hora]
URL de producción: [url]
Commit desplegado: [hash]

### Verificaciones
- Build: ✅ PASS
- Variables de entorno: ✅ Configuradas
- RLS Supabase: ✅ Activa
- Prueba de login: ✅ Funciona
- Prueba de flujo principal: ✅ Funciona
- Mobile: ✅ Sin errores de layout
- Consola del browser: ✅ Sin errores

### Estado
🟢 DEPLOY EXITOSO — App en producción y funcionando
```

Si algo falla:
```
🔴 DEPLOY CON PROBLEMAS
Problema encontrado: [descripción]
Acción tomada: [rollback / hotfix / investigando]
```

---

## 🔭 Alcance

Solo construir lo que está descrito en `project_specs.md`.
Si algo no está claro, **preguntar antes de empezar**.
No agregar features no solicitadas aunque parezcan útiles.