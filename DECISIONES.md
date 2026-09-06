# Decisiones — Prompt 2 (Trabajos seleccionados y Proceso)

- ["El Teatro Abasto" no está en la lista final de trabajos del prompt (Gisela, Mer Aguirre, Samurai, Mauro Crema, Norfalk)] → lo saqué de `data/projects.ts` en vez de dejarlo como caso huérfano sin link, porque el prompt enumera explícitamente qué proyectos van en la página de todos los trabajos.

- [No hay contenido real (industria, servicios, entregables) para "Mer Aguirre" y "Mauro Crema"] → creé sus entradas en `data/projects.ts` con placeholders "Case study details coming soon" / "Detalles próximamente" y comentario TODO-DEVNOVA, siguiendo el mismo patrón que ya existía para Gisela y Samuray.

- [No hay screenshot real del sitio de Norfalk ni de su LinkedIn antes/después] → construí `LaptopMockup` y `PhoneMockup` (`components/graphics/DeviceMockups.tsx`) como frames de borde punteado con un wireframe genérico adentro (no una imagen de stock), con la etiqueta "Screenshot pendiente" visible, tal como pidió el prompt. El wireframe interno también sirve para el efecto de scroll/parallax pedido, sin depender de tener la imagen real todavía.

- [El dato "+600%" antes decía "(7 días)" en el sitio, pero el prompt aclaró que es "en 3 meses"] → corregí la etiqueta de esa métrica en `data/projects.ts` (EN y ES) para reflejar el dato real que dio el cliente.

- ["LinkedIn antes" pide "números" pero no tenemos el conteo real de seguidores previo al crecimiento] → en vez de inventar un número, usé una frase cualitativa en tono apagado ("Poca o ninguna actividad" / "Little to no activity") para el "antes", y reservé el número real y verificado (+600% en 3 meses) para el "hoy", que es el dato duro que sí tenemos. Evita fabricar una cifra que no fue provista.

- [No usar los colores de marca de Norfalk] → todos los elementos de esa sección (mockups, textos, pills) usan exclusivamente los tokens de DevNova (`nebula`, `deepspace`, `positive`, `negative`), nunca un color específico del cliente.

- [Colores "rojo apagado" / "verde positivo" no existían en la paleta de 5 tokens] → agregué dos tokens nuevos, planos y sobrios (`--color-negative`, `--color-positive`), a `styles/tokens.css`, en vez de usar rojo/verde saturados que romperían la estética minimalista.

- [Nombres de las 4 etapas del Double Diamond: mantenerlos en inglés (Discover/Define/Develop/Deliver) en ambos idiomas] → decidí no traducir los títulos de las etapas ni en la versión ES, porque son términos de framework reconocidos internacionalmente (y el prompt menciona explícitamente que "agile" en inglés posiciona bien con clientes internacionales, especialmente Dinamarca) — solo se tradujeron las descripciones de cada etapa.

- [Diagrama Double Diamond: qué tan literal hacerlo] → usé dos rombos en línea (SVG simple, un solo trazo, sin relleno ni ilustración) en vez de reproducir el diagrama oficial con textos "Problem/Solution", porque el prompt pidió explícitamente algo simple y legible para un CEO, no un gráfico de metodología de diseño.

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
