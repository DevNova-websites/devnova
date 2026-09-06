# Pendientes — Prompt 1

- [ ] **Fuente "Cine"**: subir los archivos reales (`Cine-Regular.woff2`, `Cine-Bold.woff2`) a `public/fonts/cine/`. Hoy `styles/tokens.css` declara el `@font-face` apuntando ahí, pero como los archivos no existen, todos los títulos están renderizando con el fallback (Georgia/serif).
- [ ] **Métrica de clientes internacionales**: el hero muestra "2+ international clients" como placeholder (basado en Dinamarca + Argentina mencionados en la reunión). Confirmar el número real y, si aplica, cuántos países.
- [ ] **Logo**: `<Logo />` (`components/Logo.tsx`) sigue mostrando el wordmark de texto "DevNova" — está aislado para que el rediseño del logo se pueda insertar ahí sin tocar Navbar/Footer. El archivo `public/imagenes/logo-devnova.png` existe en el repo pero no se usa en ningún lado; evaluar si se descarta o se retoma con el nuevo diseño.
