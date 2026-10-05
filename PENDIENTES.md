# Pendientes — lista consolidada (a cargo del equipo DevNova)

Todo lo de acá está marcado en el código con `// TODO-DEVNOVA` (o, para textos de copy, con el comentario correspondiente en `lib/i18n.tsx` / `data/projects.ts`) para que sea fácil de encontrar y reemplazar.

_Última revisión: 5/10/2026._

## Resuelto

- [x] **Tipografías**: Syne (títulos) + Inter (cuerpo), cargadas con `next/font/google` en `app/layout.tsx`. Ya no se usa "Cine".
- [x] **Logo**: `<Logo />` usa `public/imagenes/logo-dn-test.png` + wordmark (falta commitear).
- [x] **Screenshots** reales de web y mobile de los 5 casos cargados en `public/imagenes/<cliente>/` y conectados en `data/projects.ts`.
- [x] **Deck de Mauro Crema**: `deckImages` con 2 slides reales.
- [x] **URLs de sitio real**: Norfalk (`nor-falk.com`), Gisela (`dragiselarodriguez.com.ar`), Samuray (`samuraybjj.com`), Mauro Crema (`maurocrema.com`).

## Métricas a confirmar (sacar de Google Analytics o del cliente)

- [ ] **Hero** (`lib/i18n.tsx`): "2+ clientes internacionales" — confirmar número real y países.
- [ ] **Norfalk**: número real de seguidores de LinkedIn "antes" del +600% (hoy se muestra una frase cualitativa).
- [ ] **Gisela Rodríguez Estética**: "+35% de nuevas consultas de reserva vía la web" es **inventado** — reemplazar o quitar.
- [ ] **Samuray BJJ**: "+40% de solicitudes de membresía vía mail" es **inventado** — reemplazar o quitar.
- [ ] **Mercedes Chanquia Aguirre**: "6 consultas por el formulario de contacto" es **inventado** — reemplazar o quitar.
- [ ] **Mauro Crema**: +50% seguidores en Instagram, +70% correos/WhatsApp (estimado), 1 colaboración internacional — confirmar cifras exactas.

## URLs

- [ ] **Mercedes Chanquia Aguirre**: usa `https://mercedeschanquia.netlify.app/#home` — confirmar si tiene dominio propio.

## Contacto

- [x] **Email**: `info@devnova.com.ar` (`lib/contact.ts`).
- [x] **WhatsApp**: `5491166046030` confirmado.
- [x] **LinkedIn de DevNova**: activado en `Contact.tsx` y `Footer.tsx` (`LINKEDIN_URL` en `lib/contact.ts`).
- [ ] **Formulario de contacto**: hoy depende de Resend (`RESEND_API_KEY` + dominio verificado). Decidir: configurar Resend, o cambiar el formulario para que abra WhatsApp con el mensaje precargado.
