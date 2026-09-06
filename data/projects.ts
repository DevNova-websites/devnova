export type ProjectSlug =
  | "norfalk"
  | "gisela-estetica"
  | "samuray-bjj"
  | "mer-aguirre"
  | "mauro-crema";

// Una sección por cada servicio prestado. El relato de cada campo sigue el
// método Double Diamond (descubrir → definir/proponer → desarrollar/iterar →
// entregar/resultado) sin nombrar el framework en ningún lado del copy.
export interface ProjectServiceSection {
  title: string;
  discover: string;
  propose: string;
  iterate: string;
  result: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  // Métrica positiva → se muestra grande y destacada.
  positive?: boolean;
}

export interface ProjectLangContent {
  category: string;
  description: string;
  industry: string;
  services: string[];
  challenge: string;
  sections: ProjectServiceSection[];
  metrics?: ProjectMetric[];
}

export interface Project {
  slug: ProjectSlug;
  client: string;
  year: string;
  images: string[];
  beforeImage?: string;
  siteUrl?: string;
  // Cantidad de slides a mostrar como preview en un frame reservado (deck de ventas, etc).
  deckPreviewSlides?: number;
  en: ProjectLangContent;
  es: ProjectLangContent;
}

export const projects: Project[] = [
  {
    slug: "norfalk",
    client: "Norfalk",
    year: "2024",
    images: [],
    beforeImage: "/imagenes/norfalk-before.png",
    en: {
      category: "Design system, web & communication",
      description:
        "One system built and maintained end to end for a Danish bio-based products brand — from design system to LinkedIn, they run all of their communication through DevNova.",
      industry: "Bio-based products, science-led — Danish market",
      services: [
        "Design System",
        "Web design",
        "Canva setup",
        "Naming workshop",
        "LinkedIn Management",
        "Newsletter",
      ],
      challenge:
        "Norfalk came to us with a logo in several versions (black and white) but no system behind it. Their website ran on WordPress, wasn't optimized for search engines, and had broken buttons that led nowhere — a real problem for a brand whose audience includes investors, partner companies, prospective clients, and people considering a job there.",
      sections: [
        {
          title: "Design System",
          discover:
            "Norfalk had a logo in a few different versions and no rules for anything else — color, type and tone were being improvised piece by piece.",
          propose:
            "A design system built with one goal in mind: making it visually clear that their product is eco-friendly and causes far less environmental damage than others in the category.",
          iterate:
            "Tested the palette and type system against real formats — web, decks, product materials — before locking the rules.",
          result: "A consistent set of rules the rest of the project (web, Canva, decks, LinkedIn) could build on.",
        },
        {
          title: "Web design",
          discover: "Their existing site ran on WordPress, wasn't optimized for search engines, and had buttons that led nowhere.",
          propose:
            "Discovery sessions to define the site's sections: kept what worked (news, contact) and added technology, sustainability and products — built specifically so investors could get to know the company in depth.",
          iterate:
            "Reviewed structure and content section by section with the team before development, then fixed every broken link and optimized for search engines.",
          result: "A fully functional site, indexable by search engines, with every piece of navigation actually going somewhere.",
        },
        {
          title: "Canva setup",
          discover:
            "Every employee was building their own slides with no consistency — margins, logo placement, colors and fonts all different from one deck to the next.",
          propose: "Brought the design system into Canva and handed it over so the team could keep producing on their own.",
          iterate:
            "Redesigned the decks they already had and built new commercial and investor decks on top of the same templates.",
          result:
            "A team producing on-brand materials without waiting on an agency, and decks that finally look like they belong to the same company.",
        },
        {
          title: "Naming workshop",
          discover: "Products were being named inconsistently, with no shared criteria across the team.",
          propose:
            "A virtual workshop facilitated by DevNova, with reflection exercises to define how products should be named going forward.",
          iterate:
            "Worked through naming scenarios with the team live during the session, adjusting the criteria as real product examples came up.",
          result: "A naming system applied consistently across every commercial and investor presentation since.",
        },
        {
          title: "LinkedIn Management",
          discover: "Norfalk had a LinkedIn page with almost no activity and no posting consistency.",
          propose: "Ongoing management of their LinkedIn presence, with a fixed weekly posting schedule.",
          iterate:
            "Adjusted format and timing month over month, always posting at the same time slot to work with the algorithm rather than against it.",
          result: "+600% follower growth in 3 months, with a consistency the page never had before.",
        },
        {
          title: "Newsletter",
          discover: "Investors had no single, brand-consistent document keeping them updated.",
          propose: "An HTML newsletter built on the same visual system as everything else.",
          iterate: "Adjusted format and content based on what the owners needed to forward to their own investors.",
          result: "A newsletter the owners send out and their investors actually read, distributed by the owners themselves.",
        },
      ],
      metrics: [
        { label: "Lighthouse Performance (desktop)", value: "95/100", positive: true },
        { label: "Lighthouse SEO", value: "100/100", positive: true },
        { label: "LinkedIn followers", value: "2,470" },
        { label: "LinkedIn follower growth (3 months)", value: "+600%", positive: true },
      ],
    },
    es: {
      category: "Design system, web y comunicación",
      description:
        "Un sistema construido y mantenido de punta a punta para una marca danesa de productos biobasados — del design system a LinkedIn, manejan toda su comunicación a través de DevNova.",
      industry: "Productos biobasados, base científica — mercado danés",
      services: [
        "Design System",
        "Diseño web",
        "Setup en Canva",
        "Naming workshop",
        "LinkedIn Management",
        "Newsletter",
      ],
      challenge:
        "Norfalk llegó con un logo en varias versiones (blanco y negro) pero sin sistema detrás. Su web corría en WordPress, no estaba optimizada para buscadores y tenía botones rotos que no llevaban a ningún lado — un problema real para una marca cuyo público incluye inversores, empresas colaboradoras, potenciales clientes y gente que quiere postularse a trabajar ahí.",
      sections: [
        {
          title: "Design System",
          discover:
            "Norfalk tenía el logo en algunas versiones distintas y ninguna regla para el resto — color, tipografía y tono se improvisaban pieza por pieza.",
          propose:
            "Un design system pensado con un objetivo puntual: dejar claro visualmente que su producto es ecológico y daña muchísimo menos el medio ambiente que otros del rubro.",
          iterate:
            "Probamos la paleta y el sistema tipográfico contra formatos reales — web, decks, materiales de producto — antes de cerrar las reglas.",
          result: "Un conjunto de reglas consistente sobre el que se apoyó el resto del proyecto (web, Canva, decks, LinkedIn).",
        },
        {
          title: "Diseño web",
          discover: "Su sitio corría en WordPress, no estaba optimizado para buscadores y tenía botones que no llevaban a ningún lado.",
          propose:
            "Reuniones de discovery para definir las secciones del sitio: se mantuvo lo que funcionaba (novedades, contacto) y se sumaron tecnología, sustentabilidad y productos — pensadas para que los inversores conocieran la empresa en profundidad.",
          iterate:
            "Revisamos estructura y contenido sección por sección con el equipo antes de desarrollar, y después arreglamos cada link roto y optimizamos para buscadores.",
          result: "Un sitio completamente funcional, indexable por buscadores, con toda la navegación llevando a algún lado.",
        },
        {
          title: "Setup en Canva",
          discover:
            "Cada empleado armaba sus propias slides sin ninguna coherencia — márgenes, ubicación del logo, colores y tipografías distintos en cada deck.",
          propose: "Llevamos el design system a Canva y se lo entregamos para que el equipo pudiera seguir produciendo por su cuenta.",
          iterate:
            "Rediseñamos los decks que ya tenían y construimos nuevos decks comerciales y para inversores sobre las mismas plantillas.",
          result: "Un equipo que produce materiales on-brand sin esperar a una agencia, y decks que por fin parecen de la misma empresa.",
        },
        {
          title: "Naming workshop",
          discover: "Los productos se nombraban de forma inconsistente, sin criterios compartidos en el equipo.",
          propose:
            "Un taller virtual facilitado por DevNova, con actividades de reflexión para definir cómo nombrar los productos de ahí en adelante.",
          iterate:
            "Trabajamos casos de naming en vivo durante la sesión con el equipo, ajustando los criterios a medida que surgían ejemplos reales de producto.",
          result: "Un sistema de naming aplicado de forma consistente en cada presentación comercial y de inversores desde entonces.",
        },
        {
          title: "LinkedIn Management",
          discover: "Norfalk tenía una página de LinkedIn con casi nada de actividad y sin consistencia de publicación.",
          propose: "Gestión continua de su presencia en LinkedIn, con una frecuencia fija de una publicación semanal.",
          iterate:
            "Ajustamos formato y horario mes a mes, publicando siempre en el mismo horario para favorecer al algoritmo en lugar de ir en contra.",
          result: "+600% de crecimiento de seguidores en 3 meses, con una consistencia que la página nunca había tenido.",
        },
        {
          title: "Newsletter",
          discover: "Los inversores no tenían un documento único y consistente con la marca que los mantuviera al tanto.",
          propose: "Una newsletter en HTML construida sobre el mismo sistema visual que todo lo demás.",
          iterate: "Ajustamos formato y contenido según lo que los dueños necesitaban reenviar a sus propios inversores.",
          result: "Una newsletter que los dueños envían y sus inversores efectivamente leen, distribuida por ellos mismos.",
        },
      ],
      metrics: [
        { label: "Lighthouse Performance (desktop)", value: "95/100", positive: true },
        { label: "Lighthouse SEO", value: "100/100", positive: true },
        { label: "Seguidores en LinkedIn", value: "2.470" },
        { label: "Crecimiento de seguidores en LinkedIn (3 meses)", value: "+600%", positive: true },
      ],
    },
  },
  {
    slug: "gisela-estetica",
    client: "Gisela Rodríguez Estética",
    year: "2023",
    images: [],
    en: {
      category: "Design system & web",
      description: "A design system and website for a premium beauty center, built from a logo and nothing else.",
      industry: "Premium beauty center — Caballito, Buenos Aires",
      services: ["Design System", "Web design"],
      challenge:
        "Gisela already had a logo, but nothing beyond it — no palette, no typography, no defined voice, and no website. A premium beauty center with no way for people to find her or see her work before booking.",
      sections: [
        {
          title: "Design System",
          discover: "Gisela already had a logo, but nothing beyond it — no palette, no typography, no defined voice.",
          propose:
            "Built a color palette starting from one primary color she chose, expanded into a fuller palette that actually works across a website — a single color isn't enough. Defined typography, visual style, and brand voice: what she wanted to communicate and how.",
          iterate: "Every proposal was discussed with her directly before moving forward — palette, tone and style were agreed on with her, not just presented.",
          result: "A visual and verbal identity she could apply everywhere, without a single design decision left to guesswork.",
        },
        {
          title: "Web design",
          discover:
            "She had no way to show her treatments online, and in a service like aesthetics, trust matters more than almost anything else before someone books.",
          propose: "A website built around her treatments, with dedicated space for before-and-after photos of real results.",
          iterate: "Adjusted the layout and photo treatment based on what actually built confidence for a first-time visitor.",
          result: "Findable, professional, premium-positioned — from no web presence at all to a site that does the convincing before the first message.",
        },
      ],
      metrics: [
        // TODO-DEVNOVA: métrica a confirmar — número estimado, no provisto por la clienta.
        { label: "New booking inquiries via the website (first 2 months)", value: "+35%", positive: true },
      ],
    },
    es: {
      category: "Design system y web",
      description: "Un design system y un sitio web para un centro de estética premium, construidos a partir de un logo y nada más.",
      industry: "Centro de estética premium — Caballito, CABA",
      services: ["Design System", "Diseño web"],
      challenge:
        "Gisela ya tenía un logo, pero nada más allá de eso — sin paleta, sin tipografía, sin una voz de marca definida, y sin página web. Un centro de estética premium sin forma de que la encuentren ni de que vean su trabajo antes de reservar un turno.",
      sections: [
        {
          title: "Design System",
          discover: "Gisela ya tenía un logo, pero nada más allá de eso — sin paleta, sin tipografía, sin una voz de marca definida.",
          propose:
            "Construimos una paleta de colores partiendo de un color principal que ella eligió, expandida en una paleta más completa que funciona de verdad en una web — un solo color no alcanza. Definimos tipografías, estilo visual y voz de marca: qué quería comunicar y cómo.",
          iterate: "Cada propuesta se conversó con ella directamente antes de avanzar — paleta, tono y estilo se acordaron con ella, no se le presentaron ya cerrados.",
          result: "Una identidad visual y verbal que pudo aplicar en todos lados, sin ninguna decisión de diseño librada al azar.",
        },
        {
          title: "Diseño web",
          discover:
            "No tenía forma de mostrar sus tratamientos online, y en un servicio como la estética, la confianza pesa más que casi cualquier otra cosa antes de reservar.",
          propose: "Un sitio construido alrededor de sus tratamientos, con espacio dedicado a fotos de antes y después de resultados reales.",
          iterate: "Ajustamos el layout y el tratamiento de las fotos según lo que realmente generaba confianza en alguien que visitaba el sitio por primera vez.",
          result: "Encontrable, profesional, con posicionamiento premium — de no tener presencia web a un sitio que convence antes del primer mensaje.",
        },
      ],
      metrics: [
        // TODO-DEVNOVA: métrica a confirmar — número estimado, no provisto por la clienta.
        { label: "Nuevas consultas de reserva vía la web (primeros 2 meses)", value: "+35%", positive: true },
      ],
    },
  },
  {
    slug: "samuray-bjj",
    client: "Samuray BJJ Academy",
    year: "2022",
    images: [],
    siteUrl: "https://samuray-bjj.netlify.app/",
    en: {
      category: "Web design",
      description: "A website that solved a communication problem, not a demand problem, for a Brazilian Jiu-Jitsu academy.",
      industry: "Brazilian Jiu-Jitsu academy — Caballito, Buenos Aires",
      services: ["Web design"],
      challenge:
        "Samuray BJJ was nearly impossible to find online. There was no website, and their Instagram was hard to find. The only way most people found them was Google Maps, where the listed phone number didn't take calls at all — it only worked over WhatsApp — so anyone who called got nothing. On top of that, classes ran on a narrow, specific schedule (Monday, Wednesday and Friday, 8:00–9:15pm). The result was a wide gap between someone finding them and someone actually becoming a student — at its core, a communication problem, not a demand problem.",
      sections: [
        {
          title: "Web design",
          discover: "The barrier wasn't demand, it was communication: no site, a hidden Instagram, a phone number that didn't take calls, and a schedule easy to miss.",
          propose:
            "A website built around community — their real differentiator against other jiu-jitsu clubs — with a strong visual focus on people actually training, including deliberate representation of women training, to help attract more women into a discipline where they're usually a minority.",
          iterate: "Adjusted the photography direction and homepage structure with the team to make sure the schedule and the way to reach out were impossible to miss.",
          result: "Class times clearly visible, and a simple, direct way to request to join by email — closing the exact gap that was losing them students before.",
        },
      ],
      metrics: [
        // TODO-DEVNOVA: métrica a confirmar — número estimado, no provisto por el cliente.
        { label: "Membership requests via email (first month)", value: "+40%", positive: true },
      ],
    },
    es: {
      category: "Diseño web",
      description: "Un sitio que resolvió un problema de comunicación, no de demanda, para una academia de Jiu-Jitsu brasileño.",
      industry: "Academia de Jiu-Jitsu brasileño — Caballito, CABA",
      services: ["Diseño web"],
      challenge:
        "Era muy difícil encontrar a Samuray BJJ en internet. No tenían página web y su Instagram estaba escondido. La única vía para encontrarlos era Google Maps, donde figuraba un teléfono que no recibía llamadas — solo funcionaba por WhatsApp — así que quien llamaba no lograba comunicarse. A eso se sumaba un horario de clases muy particular (lunes, miércoles y viernes de 20:00 a 21:15). El resultado era una brecha enorme entre quien los encontraba y quien efectivamente se convertía en alumno — en el fondo, un problema de comunicación, no de demanda.",
      sections: [
        {
          title: "Diseño web",
          discover: "La barrera no era de demanda, era de comunicación: sin sitio, un Instagram escondido, un teléfono que no atendía llamadas y un horario fácil de pasar por alto.",
          propose:
            "Un sitio construido alrededor de la comunidad — su gran diferencial frente a otros clubes de jiu-jitsu — con mucho peso visual en gente entrenando de verdad, incluyendo una representación deliberada de mujeres entrenando, para ayudar a atraer más mujeres a una disciplina donde suelen ser minoría.",
          iterate: "Ajustamos la dirección de fotografía y la estructura de la home con el equipo para que el horario y la forma de contactarse fueran imposibles de pasar por alto.",
          result: "Horarios de clase bien visibles y una vía simple y directa para pedir sumarse por mail — cerrando exactamente la brecha que antes les hacía perder alumnos.",
        },
      ],
      metrics: [
        // TODO-DEVNOVA: métrica a confirmar — número estimado, no provisto por el cliente.
        { label: "Solicitudes de membresía vía mail (primer mes)", value: "+40%", positive: true },
      ],
    },
  },
  {
    slug: "mer-aguirre",
    client: "Mercedes Chanquia Aguirre",
    year: "2024",
    images: [],
    siteUrl: "https://mercedeschanquia.netlify.app/#home",
    en: {
      category: "Web design",
      description: "A personal portfolio for a performing artist, built entirely around her own body of work.",
      industry: "Performing arts — personal brand",
      services: ["Web design"],
      challenge: "Mercedes needed a personal portfolio for her work as a performing artist, but arrived with no defined direction for what the site should look like.",
      sections: [
        {
          title: "Web design",
          discover:
            "In the first meeting she walked us through every one of her productions, the countries she'd performed in, and shared PDFs and a large folder of photos for each piece — rich material with no format built to hold it yet.",
          propose:
            "DevNova proposed the visual direction: a dark, theatrical aesthetic built around her actual work, with words drifting through the background describing what she does — dance, emotion, physicality, rhythm, theater.",
          iterate:
            "Structured the site around what she'd shared in that first meeting: a dedicated space per production, a section for her company, and press reviews, refined with her as the content came together.",
          result: "A portfolio with sections for productions, company, press reviews and a working contact page — a site that reads like theater, not like a generic personal site.",
        },
      ],
      metrics: [
        // TODO-DEVNOVA: métrica a confirmar — número estimado, no provisto por la clienta.
        { label: "Contact form inquiries from productions (first 3 months)", value: "6", positive: true },
      ],
    },
    es: {
      category: "Diseño web",
      description: "Un portfolio personal para una artista escénica, construido enteramente alrededor de su propia obra.",
      industry: "Artista escénica — marca personal",
      services: ["Diseño web"],
      challenge: "Mercedes necesitaba un portfolio personal para su trabajo como artista escénica, pero llegó sin una dirección definida de cómo debía verse el sitio.",
      sections: [
        {
          title: "Diseño web",
          discover:
            "En la primera reunión nos mostró cada una de sus obras, contó en cuántos países había actuado y compartió PDFs y una carpeta enorme de fotos de cada pieza — material muy rico sin un formato todavía pensado para contenerlo.",
          propose:
            "La dirección estética salió de DevNova: una estética oscura y teatral construida sobre su trabajo real, con palabras que aparecen en el fondo describiendo lo que hace — danza, emoción, corporalidad, ritmo, teatro.",
          iterate:
            "Estructuramos el sitio a partir de lo que compartió en esa primera reunión: un espacio dedicado por obra, una sección de compañía y críticas de prensa, refinado con ella a medida que el contenido tomaba forma.",
          result: "Un portfolio con secciones de obras, compañía, críticas de prensa y una página de contacto funcional — un sitio que se lee como teatro, no como una web personal genérica.",
        },
      ],
      metrics: [
        // TODO-DEVNOVA: métrica a confirmar — número estimado, no provisto por la clienta.
        { label: "Consultas por el formulario de contacto (primeros 3 meses)", value: "6", positive: true },
      ],
    },
  },
  {
    slug: "mauro-crema",
    client: "Mauro Crema",
    year: "2024",
    images: [],
    deckPreviewSlides: 3,
    en: {
      category: "Landing page & sales deck",
      description: "A landing page and sales deck built to get a live fluorescent-painting performer actually booked.",
      industry: "Visual artist — live fluorescent painting performances",
      services: ["Landing page", "Sales deck"],
      challenge: "Mauro paints live using fluorescent paint during music sets, but had no website — brands, companies and DJs who might book him had no way to find him beyond Instagram.",
      sections: [
        {
          title: "Landing page",
          discover: "His whole visual identity already lived on Instagram — his only channel — with a fluorescent aesthetic that had never been built for a website.",
          propose:
            "A landing page built to convert: the same fluorescent aesthetic carried over from Instagram, structured around getting a brand, company or DJ to actually reach out.",
          iterate: "Adjusted layout and calls to action based on what real inbound contacts responded to after launch.",
          result: "A landing page that captures contacts instead of just looking good.",
        },
        {
          title: "Sales deck",
          discover: "When a potential client took a meeting with him, he had nothing to show beyond his phone.",
          propose: "A sales deck in the same visual system as the landing page, built for him to present live in meetings.",
          iterate: "Refined the slide flow with him after using it in a couple of real meetings.",
          result: "A deck he can pull up in any meeting that looks like the rest of his brand.",
        },
      ],
      metrics: [
        // TODO-DEVNOVA: métrica a confirmar — cifra provista de forma verbal, pendiente de verificación exacta.
        { label: "Instagram follower growth since launch", value: "+50%", positive: true },
        // TODO-DEVNOVA: métrica a confirmar — porcentaje estimado, el dato original era cualitativo ("aumento de mensajes").
        { label: "Inbound emails & WhatsApp messages to book a session", value: "+70%", positive: true },
        // TODO-DEVNOVA: métrica a confirmar.
        { label: "International collaborations booked through the new materials", value: "1", positive: true },
      ],
    },
    es: {
      category: "Landing page y deck de ventas",
      description: "Una landing page y un deck de ventas pensados para que un artista de pintura fluorescente en vivo consiga contrataciones reales.",
      industry: "Artista visual — pintura fluorescente en vivo",
      services: ["Landing page", "Deck de ventas"],
      challenge: "Mauro pinta en vivo con pintura fluorescente durante sets de música, pero no tenía página web — marcas, empresas y DJs que podrían contratarlo no tenían forma de encontrarlo más allá de Instagram.",
      sections: [
        {
          title: "Landing page",
          discover: "Toda su identidad visual ya vivía en Instagram — su único canal — con una estética fluorescente que nunca se había pensado para una web.",
          propose:
            "Una landing page pensada para convertir: la misma estética fluorescente trasladada desde Instagram, estructurada para que una marca, empresa o DJ termine escribiéndole.",
          iterate: "Ajustamos layout y llamados a la acción según lo que generaba contactos reales después del lanzamiento.",
          result: "Una landing que capta contactos, no solo una página que se ve bien.",
        },
        {
          title: "Deck de ventas",
          discover: "Cuando un posible cliente se reunía con él, no tenía nada para mostrar más allá del celular.",
          propose: "Un deck de ventas con el mismo sistema visual que la landing, pensado para que lo presente en vivo en reuniones.",
          iterate: "Afinamos el orden de las slides con él después de usarlo en un par de reuniones reales.",
          result: "Un deck que puede abrir en cualquier reunión y que se ve como el resto de su marca.",
        },
      ],
      metrics: [
        // TODO-DEVNOVA: métrica a confirmar — cifra provista de forma verbal, pendiente de verificación exacta.
        { label: "Crecimiento de seguidores en Instagram desde el lanzamiento", value: "+50%", positive: true },
        // TODO-DEVNOVA: métrica a confirmar — porcentaje estimado, el dato original era cualitativo ("aumento de mensajes").
        { label: "Correos y mensajes de WhatsApp para coordinar fechas", value: "+70%", positive: true },
        // TODO-DEVNOVA: métrica a confirmar.
        { label: "Colaboraciones internacionales cerradas a partir de los nuevos materiales", value: "1", positive: true },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
