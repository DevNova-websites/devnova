# Pendientes — lista consolidada (a cargo del equipo DevNova)

Todo lo de acá está marcado en el código con `// TODO-DEVNOVA` (o, para textos de copy, con el comentario correspondiente en `lib/i18n.tsx` / `data/projects.ts`) para que sea fácil de encontrar y reemplazar.

_Última revisión: 5/10/2026._

## Resuelto

- [x] **Tipografías**: Syne (títulos) + Inter (cuerpo), cargadas con `next/font/google` en `app/layout.tsx`. Ya no se usa "Cine".
- [x] **Logo**: `<Logo />` usa `public/imagenes/logo-dn-test.png` + wordmark (falta commitear).
- [x] **Screenshots** reales de web y mobile de los 5 casos cargados en `public/imagenes/<cliente>/` y conectados en `data/projects.ts`.
- [x] **Deck de Mauro Crema**: `deckImages` con 2 slides reales.
- [x] **URLs de sitio real**: Norfalk (`nor-falk.com`), Gisela (`dragiselarodriguez.com.ar`), Samuray (`samuraybjj.com`), Mauro Crema (`maurocrema.com`).

## Métricas

- [x] **Gisela, Samuray y Norfalk**: métricas reales de Google Analytics (relevadas el 5/10/2026) cargadas en `data/projects.ts`.
- [x] **Hero**: clientes internacionales sin número ("AR → DK").
- [ ] **Norfalk**: sumar datos del reporte de LinkedIn cuando aparezca.
- [ ] **Mauro Crema**: +50% seguidores en Instagram y 1 colaboración internacional (dichos por él) — confirmar. No tiene propiedad en Analytics.
- [ ] **Mercedes Chanquia Aguirre**: sin Analytics; hoy muestra resultados cualitativos ("0 → 1").
- [ ] **Medir contactos en Analytics**: no hay eventos de clic a WhatsApp / mail ni de formulario enviado en ningún sitio. Configurarlos para poder mostrar "consultas" reales más adelante.
- [ ] **Actualizar métricas en ~1 mes**: Gisela y Norfalk cumplen 3 meses de datos el 9/10/2026, Samuray el 20/11/2026.

## URLs

- [ ] **Mercedes Chanquia Aguirre**: usa `https://mercedeschanquia.netlify.app/#home` — confirmar si tiene dominio propio.

## Contacto

- [x] **Email**: `info@devnova.com.ar` (`lib/contact.ts`).
- [x] **WhatsApp**: `5491166046030` confirmado.
- [x] **LinkedIn de DevNova**: activado en `Contact.tsx` y `Footer.tsx` (`LINKEDIN_URL` en `lib/contact.ts`).
- [ ] **Formulario de contacto**: hoy depende de Resend (`RESEND_API_KEY` + dominio verificado). Decidir: configurar Resend, o cambiar el formulario para que abra WhatsApp con el mensaje precargado.
