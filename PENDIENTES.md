# Pendientes — lista consolidada (a cargo del equipo DevNova)

Todo lo de acá está marcado en el código con `// TODO-DEVNOVA` (o, para textos de copy, con el comentario correspondiente en `lib/i18n.tsx` / `data/projects.ts`) para que sea fácil de encontrar y reemplazar.

## Imágenes y screenshots

- [ ] **Fuente "Cine"**: subir `Cine-Regular.woff2` y `Cine-Bold.woff2` a `public/fonts/cine/`. Hasta entonces, todos los títulos del sitio renderizan con el fallback serif (Georgia) declarado en `styles/tokens.css`.
- [ ] **Norfalk** — screenshot real del sitio actual (mockup de laptop en la home y en la página de caso) y capturas reales de LinkedIn antes/después (los dos mockups de teléfono en la home).
- [ ] **Gisela Rodríguez Estética, Samuray BJJ, Mercedes Chanquia Aguirre, Mauro Crema** — screenshots reales de web/mobile para los frames de laptop + teléfono en cada página de caso (`/work/[slug]`).
- [ ] **Mauro Crema** — contenido real del deck de ventas: hoy se muestran 3 recuadros vacíos como preview (`deckPreviewSlides` en `data/projects.ts`).
- [ ] **Logo**: `<Logo />` (`components/Logo.tsx`) sigue mostrando el wordmark de texto "DevNova", a la espera del rediseño. El archivo `public/imagenes/logo-devnova.png` no se usa en ningún lado — decidir si se descarta o se retoma con el nuevo diseño.

## Métricas a confirmar

- [ ] **Hero** (`lib/i18n.tsx`): "2+ clientes internacionales" es un placeholder verificable (Dinamarca + Argentina mencionados en la reunión) — confirmar el número real y, si aplica, cuántos países.
- [ ] **Norfalk**: no tenemos el número real de seguidores de LinkedIn "antes" del crecimiento del +600% — hoy se muestra una frase cualitativa en su lugar.
- [ ] **Gisela Rodríguez Estética**: "+35% de nuevas consultas de reserva vía la web" es un número inventado a modo de placeholder — reemplazar por el dato real o quitar la métrica si no se puede medir.
- [ ] **Samuray BJJ**: "+40% de solicitudes de membresía vía mail" es un número inventado — mismo caso que el anterior.
- [ ] **Mercedes Chanquia Aguirre**: "6 consultas por el formulario de contacto" es un número inventado — mismo caso.
- [ ] **Mauro Crema**: las 3 métricas (+50% seguidores en Instagram, +70% de correos/WhatsApp, 1 colaboración internacional) están cargadas con los datos que se dieron de forma verbal — confirmar las cifras exactas antes de dejarlas como definitivas.

## URLs de sitio real (para el botón "Ver el sitio en vivo")

- [ ] **Norfalk, Gisela Rodríguez Estética, Mauro Crema**: no tienen `siteUrl` cargado todavía — la página de caso muestra "Sitio próximamente" en su lugar. Completar en `data/projects.ts`.
- [ ] **Samuray BJJ**: usa `https://samuray-bjj.netlify.app/`, tomado de la documentación previa del repo — verificar que siga siendo el dominio vigente.
- [ ] **Mercedes Chanquia Aguirre**: usa `https://mercedeschanquia.netlify.app/#home`, asumiendo que es el mismo sitio de la misma persona — confirmarlo o reemplazarlo.

## Contacto

- [ ] **Número de WhatsApp real** de DevNova: reemplazar el placeholder `WHATSAPP_NUMBER` en `lib/contact.ts` (formato internacional, solo dígitos).
- [ ] **RESEND_API_KEY**: crear una cuenta en Resend, generar la API key y cargarla como variable de entorno (ver `.env.example`) para que el formulario de contacto pueda enviar mails.
- [ ] **Dominio verificado en Resend**: hoy `app/api/contact/route.ts` envía los mails desde `onboarding@resend.dev` (el remitente de prueba de Resend) — reemplazar por un remitente en un dominio propio verificado apenas esté configurado.
- [ ] **LinkedIn de DevNova**: hay un slot ya armado y comentado en `components/Footer.tsx` y `components/Contact.tsx` — activarlo (descomentar y poner la URL real) cuando la cuenta esté operativa.
