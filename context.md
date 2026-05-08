# DevNova — Project Context

## What this project is
Landing page / sitio web corporativo de **DevNova**, agencia de desarrollo web argentina. Objetivo principal: generar leads y ventas de servicios de desarrollo web. El sitio es **bilingüe** (ES/EN) con toggle en el navbar.

---

## Stack

| Tech | Version | Notas |
|---|---|---|
| Next.js | 16.2.6 | App Router, Turbopack en dev |
| React | 19.2.4 | |
| TypeScript | 5.x | strict mode |
| Tailwind CSS | **v3** (3.4.x) | ⚠️ NO usar v4 — incompatible con Turbopack |
| Framer Motion | 12.x | animaciones |
| Lucide React | 1.x | iconos |
| Fuente | Geist Sans / Geist Mono | cargada con `next/font/google` |

**Deploy:** Netlify con `@netlify/plugin-nextjs` v5. También compatible con Vercel.

---

## Estructura de archivos

```
devnova/
├── app/
│   ├── layout.tsx          # Root layout — LangProvider, metadata SEO, fuentes
│   ├── page.tsx            # Ensambla todas las secciones en orden
│   └── globals.css         # Tailwind v3 directives + clases utilitarias custom
├── components/
│   ├── Navbar.tsx          # Sticky nav con glassmorphism, mobile menu
│   ├── Hero.tsx            # Hero full-screen, mascot NovaMascot, floating cards
│   ├── About.tsx           # 4 feature cards con stats
│   ├── Services.tsx        # 6 servicios en grid 3 cols
│   ├── Pricing.tsx         # 3 planes (Starter / Business★ / Premium)
│   ├── Portfolio.tsx       # 3 proyectos reales con screenshots via microlink API
│   ├── Testimonials.tsx    # 6 reviews con avatars y estrellas
│   ├── Benefits.tsx        # Pros/contras (con web vs sin web)
│   ├── FormSection.tsx     # CTA grande antes del FAQ
│   ├── FAQ.tsx             # Accordion 6 preguntas
│   ├── Contact.tsx         # Formulario + WhatsApp + Email cards
│   ├── Footer.tsx          # Links, redes, copyright
│   ├── FloatingCTA.tsx     # Botón flotante (aparece a los 2.8s, dismissible)
│   ├── FormModal.tsx       # Modal con iframe del formulario externo
│   ├── NovaMascot.tsx      # SVG mascota + NovaLogo (usados en Hero y Footer)
│   ├── SpaceBackground.tsx # Canvas starfield animado + nebulae CSS
│   └── ShootingStar.tsx    # Animación de estrella fugaz
├── lib/
│   └── i18n.tsx            # Context bilingüe ES/EN (LangProvider + useLang hook)
├── tailwind.config.ts      # Content paths, colores brand, animaciones custom
├── next.config.ts          # Remote image patterns (microlink, netlify)
├── postcss.config.mjs      # tailwindcss + autoprefixer (v3 setup)
└── netlify.toml            # Build config: Node 20, plugin-nextjs, publish .next
```

---

## Diseño / Paleta

El diseño evolucionó de azul/violeta (original) a **negro espacial + gold/amber**:

```
Background:    #030310 (casi negro con tinte azul)
Brand primary: #F5C400 (oro)
Brand amber:   #FF9F0A
Brand fire:    #FF5722
Brand gold:    #FFD60A
Text primary:  #ffffff
Text muted:    rgba(255,255,255,0.4–0.55)
Card bg:       #111111 con border rgba(255,255,255,0.08)
```

**Clases CSS custom en globals.css** (usar en lugar de reinventarlas):
- `.gradient-text` — texto con gradiente gold
- `.glass` — glassmorphism card
- `.card` — card oscura con hover gold border
- `.badge` — chip uppercase gold
- `.btn-primary` — botón gold gradient (texto oscuro)
- `.btn-secondary` — botón outline blanco
- `.glow` / `.glow-strong` — sombra gold
- `.float` / `.float-slow` — animación flotante CSS
- `.pulse-ring` — ring pulsante gold
- `.content-layer` — `z-index: 1` para estar sobre el canvas background
- `.section-divider` — línea divisoria gold sutil
- `.dot-pattern` / `.grid-bg` — patrones de fondo sutiles

---

## i18n (bilingüe)

```tsx
import { useLang } from "@/lib/i18n";
const { t, lang, toggle } = useLang();
// t.hero.cta1, t.nav.services, etc.
// lang === "es" | "en"
// toggle() cambia el idioma
```

El tipo `Translations` usa `DeepString<typeof translations.es>` para widening — esto es intencional y necesario porque TS infiere literal types con `as const`.

---

## Formulario externo

URL: `https://form-websites.netlify.app/`

Se abre como **iframe dentro de `FormModal`**. Todos los CTAs principales llaman a `setModalOpen(true)`. El modal se usa en: Navbar, Hero, Pricing, FormSection, FloatingCTA.

Contacto directo:
- WhatsApp: `https://wa.me/5491166046030`
- Email: `info@devnova.com`
- Teléfono: `+54 11 6604-6030`

---

## Portfolio (proyectos reales)

Screenshots auto-generados via `api.microlink.io`:
```ts
const screenshotUrl = (url: string) =>
  `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
```

Proyectos:
1. **Mercedes Chanquia** — `https://mercedeschanquia.netlify.app/#home` — portfolio personal
2. **Lidera Maps** — `https://lideramaps.com.ar/` — plataforma/negocio digital
3. **Samuray BJJ** — `https://samuray-bjj.netlify.app/` — academia/servicios

---

## Framer Motion — gotchas conocidos

- **TS en nested functions**: `canvas`/`ctx` de `useRef` no se narrowean dentro de funciones anidadas. Usar aliases tipados: `const cv: HTMLCanvasElement = canvas; const cx: CanvasRenderingContext2D = ctx;`
- **ease arrays**: usar `as [number, number, number, number]` para cubic bezier en props `transition`
- **Variants con `custom`**: no incluir `transition` dentro de la función variant — moverlo al prop `transition` del componente

---

## Issues resueltos (no repetir)

| Problema | Causa | Fix aplicado |
|---|---|---|
| CSS no se generaba, layout roto | Tailwind v4 incompatible con Turbopack | Downgrade a Tailwind v3, `postcss.config.mjs` actualizado |
| TS error en build Netlify | `canvas`/`ctx` possibly null en closures | Aliases `cv`/`cx` con tipos explícitos en SpaceBackground.tsx |
| Framer Motion type errors | `ease: string` no assignable to `Easing` | Cast `as [n,n,n,n]` o mover transition fuera de variant |
| i18n type mismatch | `as const` crea literal types distintos por idioma | `DeepString<>` utility type + `as unknown as Translations` |

---

## Comandos

```bash
npm run dev      # dev server en localhost:3000 (Turbopack)
npm run build    # build de producción (TypeScript strict)
npm run lint     # ESLint

# Deploy Netlify: push a master, Netlify auto-detecta
# netlify.toml ya configurado con Node 20 + @netlify/plugin-nextjs
```

---

## Datos de la empresa

- **Razón social**: DevNova
- **Rubro**: Desarrollo web / agencia tech
- **País**: Argentina
- **Años**: 4+ años, +100 clientes
- **Email**: info@devnova.com
- **WhatsApp/Tel**: +54 11 6604-6030
