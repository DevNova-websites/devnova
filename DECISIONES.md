# Decisiones — Prompt 1 (Fundaciones de diseño, Hero y Servicios)

- [Fuente "Cine" no está en el repo ni es una Google Font estándar] → decidí declararla como `@font-face` local en `styles/tokens.css` apuntando a `/fonts/cine/`, con fallback a Georgia/serif, porque el prompt pedía explícitamente ese comportamiento ante la ausencia de archivos.

- [No existen archivos reales de la fuente Cine] → dejé el `@font-face` como placeholder (no rompe el build, solo cae al fallback) y lo listé en PENDIENTES.md en lugar de bloquear el resto del trabajo.

- ["El logo actual" no es una imagen sino el wordmark de texto "DevNova" en Navbar/Footer] → envolví ese texto en `<Logo />` en vez de usar el PNG existente en `/public/imagenes/logo-devnova.png`, porque ese archivo no está referenciado en ningún componente activo del sitio.

- [Dato duro de "clientes internacionales" no está definido con un número exacto] → usé "2+" como placeholder verificable, apoyado en los dos países mencionados en el brief (Dinamarca y Argentina), con comentario TODO-DEVNOVA en `lib/i18n.tsx` para confirmarlo.

- [3 variantes de copy del hero, había que elegir una] → elegí la variante que nombra explícitamente los canales unificados ("Brand, web, decks, LinkedIn. One agency behind all of it.") porque es más concreta para un interlocutor CEO/fundador que una frase abstracta tipo "un sistema para todo".

- [Cómo reflejar que LinkedIn Management es el servicio de mayor margen/recurrencia] → agregué un pill "Recurring revenue" / "Ingreso recurrente" junto al título y un fondo `bg-nebula/5` permanente (no solo en hover) en esa fila, sin introducir un color fuera de la paleta ni ningún degradado.

- [El componente `BrandPartnership.tsx` (relación continua) no aparece en la lista fija de 6 servicios del prompt] → lo dejé intacto como sección aparte, porque el prompt pidió reordenar específicamente la sección "Servicios" y esa sección de partnership es una oferta complementaria distinta, no uno de los 6 servicios.

- [Cómo centralizar tokens de espaciado sin reescribir cada `py-` a mano en el futuro] → creé `styles/tokens.css` con variables CSS (`--space-section-y`, `--space-hero-top`, etc.) y las secciones usan clases arbitrarias de Tailwind (`py-[var(--space-section-y)]`) en vez de valores fijos, para poder cambiar el ritmo vertical de todo el sitio editando un solo archivo.

- [Dónde ubicar los elementos gráficos espaciales sin sobrecargar el minimalismo pedido] → usé solo 3 puntos: un anillo orbital sutil en el hueco superior derecho del Hero, unos puntos orbitales junto al eyebrow de Process, y una estrella fugaz tenue en la esquina del CTA final — todos en color plano y baja opacidad, sin animación agresiva.
