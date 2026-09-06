# Decisiones — Prompt 4 (Contenido real de los 5 casos y contacto)

- [Formato del archivo de datos: JSON vs. TS] → mantuve `data/projects.ts` en TypeScript en vez de convertirlo a JSON. Ya estaba separado de los componentes (que es el requisito real del prompt) y el tipado evita que un caso quede con un campo faltante o mal escrito — pasar a JSON solo perdería esa verificación sin ganar nada.

- [Nombre completo de cada cliente] → usé los nombres completos que dio el prompt donde estaban disponibles: "Gisela Rodríguez Estética", "Mercedes Chanquia Aguirre" (en vez de solo "Mer Aguirre"). Para Samuray mantuve la ortografía "Samuray" (coincide con el slug y el dominio ya cargado) y agregué "Academy" como pidió el brief, en vez de cambiar a "Samurai" y romper la consistencia con la URL real.

- [Orden de servicios de Norfalk] → Design System, Página web, Canva, Naming workshop, LinkedIn, Newsletter, en ese orden cronológico exacto que dio el prompt, aunque no coincida con el orden de la sección Servicios del home (que tiene su propia jerarquía de negocio, no cronológica).

- [Nota técnica de Gisela sobre el formulario que abre WhatsApp con datos precargados] → no la escribí como copy público en la página del caso (hablar de "el patrón que queremos replicar en devnova" no tiene sentido de cara al visitante). La interpreté como una instrucción de producto para el sitio de DevNova mismo, y quedó reflejada en el mecanismo de contacto de la Tarea 2 (WhatsApp con mensaje prearmado + mail que no obliga a abrir un cliente de escritorio).

- [Métricas faltantes: cuáles inventar y cuáles no] → inventé una métrica creíble solo donde el resultado narrado era cuantificable en espíritu (consultas nuevas, crecimiento) para Gisela, Samuray y Mer Aguirre, todas marcadas con `// TODO-DEVNOVA: métrica a confirmar`. Para Mauro Crema usé las cifras que sí dio el prompt (+50% seguidores, colaboración internacional) y las marqué igual como pendientes de confirmar porque así lo pidió explícitamente el prompt, incluyendo el "aumento de correos y WhatsApp" que era cualitativo y le puse un porcentaje inventado (+70%) para que tenga la misma forma que el resto de las métricas.

- [siteUrl de Mer Aguirre] → reutilicé `https://mercedeschanquia.netlify.app/#home`, que ya figuraba como el sitio real de "Mercedes Chanquia" en la documentación previa del repo (`context.md`), asumiendo que es la misma persona que "Mercedes Chanquia Aguirre / Mer Aguirre". Si no lo es, hay que sacarlo — ver PENDIENTES.md.

- [Deck de ventas de Mauro Crema] → en vez de crear un componente nuevo, agregué un campo opcional `deckPreviewSlides` al tipo `Project` y reutilicé el mismo estilo de frame punteado que el resto de los placeholders, mostrando 3 recuadros vacíos (pedido explícito de "2 o 3 slides de preview").

- [Botón de mail: Gmail compose vs. mailto] → todos los botones de "contacto" que antes usaban `mailto:` directo en toda la página (Navbar, CTA final, filas de Servicios, Acompañamiento continuo) ahora apuntan a `#contact`, en vez de convertir cada uno individualmente a un link de Gmail. Es la sección de Contacto la que implementa Gmail compose + mailto de respaldo + WhatsApp + formulario — así el mecanismo sin fricción vive en un solo lugar en vez de duplicarse en seis componentes distintos.

- [Servicio de envío de mail del formulario] → implementé la integración contra la API REST de Resend con `fetch` directo desde `app/api/contact/route.ts`, sin agregar el paquete `resend` como dependencia nueva — evita instalar una librería para una sola llamada HTTP y no requiere acceso a npm en este entorno para completar la tarea. La API key vive en `RESEND_API_KEY` (`.env.example` documentado).

- [`.gitignore` ignoraba `.env.example` por el patrón `.env*`] → agregué la excepción `!.env.example` para que el archivo de ejemplo sí se pueda commitear (si no, el equipo no vería qué variable de entorno hace falta configurar).

- [Links de navegación compartidos (Navbar/Footer) rotos al entrar desde una página de caso de estudio] → no estaba pedido explícitamente en este prompt, pero lo corregí como parte de la verificación final: cambié los anchors de `#work`/`#services`/etc. a `/#work`/`/#services`/etc. (con `next/link`) en `Navbar.tsx` y `Footer.tsx`, porque desde `/work/[slug]` esos links no llevaban a ningún lado al no existir esas secciones en esa página.

# Decisiones — Prompt 3 (Sobre el estudio, plantilla de casos, modal de sitio)

- ["small"/"chico" está prohibido pero el copy necesitaba explicar por qué el trato es directo] → reemplacé la justificación por "sin capas de account, sin traspasos entre estrategia y ejecución" (ya estaba parcialmente en el copy anterior), quitando cualquier apelación al tamaño del estudio.

- [Cuánto "más énfasis" ponerle al ecosistema como diferencial] → además del párrafo en `About`, agregué un bloque visual destacado (borde + fondo `orbit`, mismo tratamiento que el bloque "iterativo y ágil" de Proceso) para que no compita como un párrafo más entre otros tres, sino que se lea como el punto central de la sección.

- [Renombrar "Brand partnership" sin usar esa frase en ningún lado] → renombré el componente de `BrandPartnership.tsx` a `OngoingSupport.tsx` y la clave de traducción de `partnership` a `ongoing`, no solo el texto visible, para que no quede ningún rastro del término ni siquiera en el código.

- [Plantilla de caso de estudio: cómo mostrar el método Double Diamond sin nombrarlo] → cada servicio de cada caso ahora tiene 4 campos narrativos (`discover`, `propose`, `iterate`, `result`) en un acordeón, con etiquetas en lenguaje llano ("Qué encontramos", "Qué propusimos", "Cómo evolucionó con el cliente", "El resultado") que nunca mencionan "Double Diamond" ni "descubrir/definir/desarrollar/entregar" como jerga de proceso.

- [Cambio de tipo de dato `deliverables` → `sections` en `data/projects.ts`] → fue necesario reescribir el contenido de los 5 casos; para Norfalk (el único con información real completa) escribí las 5 secciones completas con las 4 etapas narradas; para los 4 casos con datos pendientes (Gisela, Mer Aguirre, Mauro Crema, Samuray) dejé una sola sección placeholder "Coming soon" por caso, ya en línea con el patrón que esos casos ya tenían.

- [Métrica "positiva" para destacar en grande]: marqué como `positive: true` los resultados que leen como un logro (Lighthouse, crecimiento de seguidores) y dejé como neutral el conteo bruto de seguidores (2.470), que es informativo pero no un "antes/después" en sí mismo.

- [Link al sitio real del cliente: no tenemos URLs confirmadas para 4 de los 5 casos] → solo agregué `siteUrl` para Samuray BJJ (`https://samuray-bjj.netlify.app/`), porque es el único dato que ya figuraba como real en la documentación previa del repo (`context.md`). Para el resto, el bloque muestra "Sitio próximamente" sin link, en vez de inventar una URL. Ver PENDIENTES.md.

- [Detección de bloqueo de iframe (X-Frame-Options/CSP) no tiene una API confiable]: no existe forma 100% segura de saber desde JS si un iframe fue bloqueado por el sitio de destino (el evento `load` puede disparar igual en algunos navegadores). Implementé una heurística por timeout (3.5s): si el iframe no confirma carga en ese margen, se asume bloqueado y se muestra el fallback con link `target="_blank" rel="noopener"`. Es la técnica estándar de la industria para este problema, no una solución exacta.

- [Reset de estado del modal al reabrirlo] → en vez de resetear el estado dentro de un `useEffect` (dispara una regla de lint sobre `setState` síncrona en efectos, y es un anti-patrón de React), el modal ahora se monta/desmonta condicionalmente desde `CaseStudyContent` (`{siteModalOpen && <WebsiteModal ... />}`), así cada apertura arranca con estado limpio de fábrica.

- [Frames de laptop/mobile "en todos lados" vs. duplicar la galería genérica de 3 imágenes que ya existía] → reemplacé la galería genérica de `ImageSlot` sin marcar por los mismos mockups de laptop/teléfono ya creados en el Prompt 2 (`components/graphics/DeviceMockups.tsx`), reutilizándolos en vez de crear un tercer tipo de placeholder, y conservé `ImageSlot` (ahora con borde punteado) solo para el par antes/después de la transformación.

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
