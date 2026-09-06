export type ProjectSlug =
  | "norfalk"
  | "gisela-estetica"
  | "mer-aguirre"
  | "mauro-crema"
  | "samuray-bjj";

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
  // TODO-DEVNOVA: completar siteUrl real para los clientes que no lo tienen todavía.
  siteUrl?: string;
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
      category: "Naming, brand system & communication",
      description:
        "One system built and maintained end to end for a Nordic bio-based surfactants brand.",
      industry: "Bio-based surfactants, Nordic market",
      services: [
        "Naming workshop",
        "Design system",
        "Canva setup",
        "Sales decks",
        "Internal decks",
        "Newsletter",
        "LinkedIn",
      ],
      challenge:
        "Norfalk was preparing to launch their product to market without a name, a visual identity, or a consistent way to communicate across channels. Each team member presented differently.",
      sections: [
        {
          title: "Naming workshop",
          discover:
            "Norfalk didn't have a name yet — just early conversations about a bio-based surfactants line getting ready to enter the Nordic market.",
          propose:
            "We ran a structured naming workshop with the founding team: positioning exercises, personality mapping, and a shortlist scored against how it would read to distributors and investors.",
          iterate:
            "Two rounds of options, with feedback from the team after each, before converging on \"Norfalk\" — a name that reads as Nordic and industrial without over-explaining the product.",
          result: "A name the team could stand behind everywhere else we built on top of.",
        },
        {
          title: "Design system",
          discover:
            "Without a visual identity, every deck, every LinkedIn post and every internal document looked like it came from a different company.",
          propose:
            "A full design system: color palette, typography scale, and a component library built to hold up across web, print and slides.",
          iterate:
            "Reviewed the system against real use cases — a sales deck, a LinkedIn post, a product label — adjusting contrast and spacing before locking it.",
          result: "One visual language the team can apply to any new material without asking us first.",
        },
        {
          title: "Canva setup",
          discover:
            "The team needed to produce materials daily, but a design system with no templates just sits unused.",
          propose:
            "Implemented the entire system inside Canva: decks, social templates and document formats, ready to duplicate.",
          iterate:
            "Walked the team through the templates and adjusted the ones that weren't intuitive enough for non-designers.",
          result: "The team produces on-brand materials independently, without waiting on an agency for every piece.",
        },
        {
          title: "Sales decks, internal decks & newsletter",
          discover:
            "Sales conversations and internal updates were happening with no consistent format to carry them.",
          propose:
            "Designed a sales deck, an internal deck template, and a monthly newsletter, all under the same system.",
          iterate:
            "Adjusted structure and tone deck by deck as the sales team used them in real meetings.",
          result: "Documents that read as part of the same company, in a room or in an inbox.",
        },
        {
          title: "LinkedIn",
          discover: "Norfalk had a LinkedIn page with almost no activity and no clear content plan.",
          propose:
            "A monthly content plan and management of their LinkedIn presence, built on the same visual system as everything else.",
          iterate: "Adjusted format and posting cadence month over month based on what got engagement.",
          result: "+600% follower growth in 3 months, with a page that finally looks like the rest of the brand.",
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
      category: "Naming, sistema de marca y comunicación",
      description:
        "Un sistema construido y mantenido de punta a punta para una marca nórdica de surfactantes biobasados.",
      industry: "Surfactantes biobasados, mercado nórdico",
      services: [
        "Naming workshop",
        "Design system",
        "Setup en Canva",
        "Sales decks",
        "Decks internos",
        "Newsletter",
        "LinkedIn",
      ],
      challenge:
        "Norfalk se preparaba para lanzar su producto al mercado sin un nombre, sin identidad visual y sin una forma consistente de comunicarse en sus canales. Cada persona del equipo se presentaba de manera distinta.",
      sections: [
        {
          title: "Naming workshop",
          discover:
            "Norfalk todavía no tenía nombre — solo conversaciones iniciales sobre una línea de surfactantes biobasados que se preparaba para entrar al mercado nórdico.",
          propose:
            "Facilitamos un naming workshop estructurado con el equipo fundador: ejercicios de posicionamiento, mapeo de personalidad y una lista corta evaluada según cómo se leería frente a distribuidores e inversores.",
          iterate:
            "Dos rondas de opciones, con feedback del equipo después de cada una, hasta converger en \"Norfalk\" — un nombre que se lee nórdico e industrial sin sobreexplicar el producto.",
          result: "Un nombre que el equipo pudo sostener en todo lo que construimos después.",
        },
        {
          title: "Design system",
          discover:
            "Sin identidad visual, cada deck, cada posteo de LinkedIn y cada documento interno parecía venir de una empresa distinta.",
          propose:
            "Un design system completo: paleta de colores, escala tipográfica y una librería de componentes pensada para sostenerse en web, impresos y slides.",
          iterate:
            "Revisamos el sistema contra casos de uso reales — un sales deck, un posteo de LinkedIn, una etiqueta de producto — ajustando contraste y espaciado antes de cerrarlo.",
          result: "Un solo lenguaje visual que el equipo puede aplicar a cualquier material nuevo sin consultarnos primero.",
        },
        {
          title: "Setup en Canva",
          discover: "El equipo necesitaba producir materiales todos los días, pero un design system sin plantillas queda sin uso.",
          propose:
            "Implementamos todo el sistema dentro de Canva: decks, plantillas para redes y formatos de documentos, listos para duplicar.",
          iterate:
            "Acompañamos al equipo en el uso de las plantillas y ajustamos las que no resultaban lo suficientemente intuitivas para quienes no son diseñadores.",
          result: "El equipo produce materiales on-brand de forma independiente, sin esperar a una agencia para cada pieza.",
        },
        {
          title: "Sales decks, decks internos y newsletter",
          discover:
            "Las conversaciones de venta y las actualizaciones internas pasaban sin un formato consistente que las sostuviera.",
          propose:
            "Diseñamos un sales deck, una plantilla de deck interno y una newsletter mensual, todo bajo el mismo sistema.",
          iterate:
            "Ajustamos estructura y tono deck a deck a medida que el equipo de ventas los usaba en reuniones reales.",
          result: "Documentos que se leen como parte de la misma empresa, en una sala o en una bandeja de entrada.",
        },
        {
          title: "LinkedIn",
          discover: "Norfalk tenía una página de LinkedIn con casi nada de actividad y sin un plan de contenido claro.",
          propose:
            "Un plan de contenido mensual y la gestión de su presencia en LinkedIn, construido sobre el mismo sistema visual que todo lo demás.",
          iterate: "Ajustamos formato y frecuencia de publicación mes a mes según lo que generaba más interacción.",
          result: "+600% de crecimiento de seguidores en 3 meses, con una página que por fin se ve como el resto de la marca.",
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
    client: "Gisela Estética",
    year: "2023",
    images: [],
    en: {
      category: "Brand manual, design system & web",
      description: "A cohesive visual identity and website for a beauty and wellness brand.",
      industry: "Beauty & wellness",
      services: ["Brand manual", "Design system", "Web design"],
      challenge: "Case study details coming soon.",
      sections: [
        {
          title: "Case study",
          discover: "Details coming soon.",
          propose: "Details coming soon.",
          iterate: "Details coming soon.",
          result: "Details coming soon.",
        },
      ],
    },
    es: {
      category: "Manual de marca, design system y web",
      description: "Una identidad visual coherente y un sitio web para una marca de belleza y bienestar.",
      industry: "Belleza y bienestar",
      services: ["Manual de marca", "Design system", "Diseño web"],
      challenge: "Detalles del caso próximamente.",
      sections: [
        {
          title: "Caso de estudio",
          discover: "Detalles próximamente.",
          propose: "Detalles próximamente.",
          iterate: "Detalles próximamente.",
          result: "Detalles próximamente.",
        },
      ],
    },
  },
  {
    // TODO-DEVNOVA: reemplazar categoría, industria, secciones y siteUrl reales del caso Mer Aguirre.
    slug: "mer-aguirre",
    client: "Mer Aguirre",
    year: "2024",
    images: [],
    en: {
      category: "Case study coming soon",
      description: "Case study details coming soon.",
      industry: "Details coming soon",
      services: ["Details coming soon"],
      challenge: "Case study details coming soon.",
      sections: [
        {
          title: "Case study",
          discover: "Details coming soon.",
          propose: "Details coming soon.",
          iterate: "Details coming soon.",
          result: "Details coming soon.",
        },
      ],
    },
    es: {
      category: "Caso próximamente",
      description: "Detalles del caso próximamente.",
      industry: "Detalles próximamente",
      services: ["Detalles próximamente"],
      challenge: "Detalles del caso próximamente.",
      sections: [
        {
          title: "Caso de estudio",
          discover: "Detalles próximamente.",
          propose: "Detalles próximamente.",
          iterate: "Detalles próximamente.",
          result: "Detalles próximamente.",
        },
      ],
    },
  },
  {
    // TODO-DEVNOVA: reemplazar categoría, industria, secciones y siteUrl reales del caso Mauro Crema.
    slug: "mauro-crema",
    client: "Mauro Crema",
    year: "2024",
    images: [],
    en: {
      category: "Case study coming soon",
      description: "Case study details coming soon.",
      industry: "Details coming soon",
      services: ["Details coming soon"],
      challenge: "Case study details coming soon.",
      sections: [
        {
          title: "Case study",
          discover: "Details coming soon.",
          propose: "Details coming soon.",
          iterate: "Details coming soon.",
          result: "Details coming soon.",
        },
      ],
    },
    es: {
      category: "Caso próximamente",
      description: "Detalles del caso próximamente.",
      industry: "Detalles próximamente",
      services: ["Detalles próximamente"],
      challenge: "Detalles del caso próximamente.",
      sections: [
        {
          title: "Caso de estudio",
          discover: "Detalles próximamente.",
          propose: "Detalles próximamente.",
          iterate: "Detalles próximamente.",
          result: "Detalles próximamente.",
        },
      ],
    },
  },
  {
    slug: "samuray-bjj",
    client: "Samuray BJJ",
    year: "2022",
    images: [],
    // Único cliente con URL confirmable en la documentación previa del repo.
    siteUrl: "https://samuray-bjj.netlify.app/",
    en: {
      category: "Web design",
      description: "A website for a martial arts academy.",
      industry: "Sports & martial arts",
      services: ["Web design"],
      challenge: "Case study details coming soon.",
      sections: [
        {
          title: "Web design",
          discover: "Details coming soon.",
          propose: "Details coming soon.",
          iterate: "Details coming soon.",
          result: "Details coming soon.",
        },
      ],
    },
    es: {
      category: "Diseño web",
      description: "Un sitio web para una academia de artes marciales.",
      industry: "Deporte y artes marciales",
      services: ["Diseño web"],
      challenge: "Detalles del caso próximamente.",
      sections: [
        {
          title: "Diseño web",
          discover: "Detalles próximamente.",
          propose: "Detalles próximamente.",
          iterate: "Detalles próximamente.",
          result: "Detalles próximamente.",
        },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
