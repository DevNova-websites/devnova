# Pendientes — Prompt 3

- [ ] **siteUrl real de Norfalk, Gisela Estética, Mer Aguirre y Mauro Crema**: hoy solo Samuray BJJ tiene URL cargada (`https://samuray-bjj.netlify.app/`, tomada de la documentación previa del repo). El resto muestra "Sitio próximamente" en la página de caso — cargar la URL real en `data/projects.ts` (campo `siteUrl`) apenas esté disponible.
- [ ] **Verificar que `https://samuray-bjj.netlify.app/` siga siendo el dominio vigente de ese cliente** antes de depender de él en producción.
- [ ] **Contenido real de los casos Gisela Estética, Mer Aguirre y Mauro Crema**: las secciones de acordeón (qué encontramos / qué propusimos / cómo evolucionó / resultado) siguen en placeholder "Coming soon" para estos 3 casos.
- [ ] **Screenshots reales para los frames de laptop/mobile** en cada página de caso de estudio (`components/graphics/DeviceMockups.tsx`), igual que en la home.

# Pendientes — Prompt 2

- [ ] **Screenshot del sitio de Norfalk**: reemplazar el wireframe placeholder dentro de `LaptopMockup` (usado en `components/Work.tsx`) por el screenshot real de la web actual del cliente.
- [ ] **Capturas de LinkedIn antes/después de Norfalk**: reemplazar los dos `PhoneMockup` en `components/Work.tsx` por capturas reales del perfil de LinkedIn.
- [ ] **Número real de seguidores "antes"**: hoy el lado "antes" de la comparación de LinkedIn muestra una frase cualitativa ("Poca o ninguna actividad") en vez de un número, porque no se proveyó el conteo exacto previo al crecimiento del +600%. Reemplazar si se consigue el dato.
- [ ] **Caso Mer Aguirre**: completar industria, servicios, desafío, entregables y screenshots reales en `data/projects.ts` (slug `mer-aguirre`).
- [ ] **Caso Mauro Crema**: completar industria, servicios, desafío, entregables y screenshots reales en `data/projects.ts` (slug `mauro-crema`).

# Pendientes — Prompt 1

- [ ] **Fuente "Cine"**: subir los archivos reales (`Cine-Regular.woff2`, `Cine-Bold.woff2`) a `public/fonts/cine/`. Hoy `styles/tokens.css` declara el `@font-face` apuntando ahí, pero como los archivos no existen, todos los títulos están renderizando con el fallback (Georgia/serif).
- [ ] **Métrica de clientes internacionales**: el hero muestra "2+ international clients" como placeholder (basado en Dinamarca + Argentina mencionados en la reunión). Confirmar el número real y, si aplica, cuántos países.
- [ ] **Logo**: `<Logo />` (`components/Logo.tsx`) sigue mostrando el wordmark de texto "DevNova" — está aislado para que el rediseño del logo se pueda insertar ahí sin tocar Navbar/Footer. El archivo `public/imagenes/logo-devnova.png` existe en el repo pero no se usa en ningún lado; evaluar si se descarta o se retoma con el nuevo diseño.
