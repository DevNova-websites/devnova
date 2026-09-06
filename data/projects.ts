export type ProjectSlug =
  | "norfalk"
  | "gisela-estetica"
  | "teatro-abasto"
  | "samuray-bjj";

export interface ProjectDeliverable {
  title: string;
  desc: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLangContent {
  category: string;
  description: string;
  industry: string;
  services: string[];
  challenge: string;
  deliverables: ProjectDeliverable[];
  metrics?: ProjectMetric[];
}

export interface Project {
  slug: ProjectSlug;
  client: string;
  year: string;
  images: string[];
  beforeImage?: string;
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
      deliverables: [
        {
          title: "Naming workshop",
          desc: "Facilitated a naming workshop that aligned the team on product identity, running exercises to define brand values, personality and positioning before landing on the name.",
        },
        {
          title: "Design system",
          desc: "Built a full design system with color palette, typography scale, and component library.",
        },
        {
          title: "Canva setup",
          desc: "Implemented everything in Canva so the team can produce on-brand materials independently.",
        },
        {
          title: "Sales decks, internal decks & newsletter",
          desc: "Designed sales decks, internal decks, and a monthly newsletter, all under the same visual system.",
        },
        {
          title: "LinkedIn",
          desc: "Manage their LinkedIn presence month to month.",
        },
      ],
      metrics: [
        { label: "Lighthouse Performance (desktop)", value: "95/100" },
        { label: "Lighthouse SEO", value: "100/100" },
        { label: "LinkedIn followers", value: "2,470" },
        { label: "LinkedIn new followers (7 days)", value: "+600%" },
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
      deliverables: [
        {
          title: "Naming workshop",
          desc: "Facilitamos un naming workshop que alineó al equipo sobre la identidad del producto, con ejercicios para definir valores de marca, personalidad y posicionamiento antes de llegar al nombre.",
        },
        {
          title: "Design system",
          desc: "Construimos un design system completo con paleta de colores, escala tipográfica y librería de componentes.",
        },
        {
          title: "Setup en Canva",
          desc: "Implementamos todo en Canva para que el equipo pueda producir materiales on-brand de forma independiente.",
        },
        {
          title: "Sales decks, decks internos y newsletter",
          desc: "Diseñamos sales decks, decks internos y una newsletter mensual, todo bajo el mismo sistema visual.",
        },
        {
          title: "LinkedIn",
          desc: "Gestionamos su presencia en LinkedIn mes a mes.",
        },
      ],
      metrics: [
        { label: "Lighthouse Performance (desktop)", value: "95/100" },
        { label: "Lighthouse SEO", value: "100/100" },
        { label: "Seguidores en LinkedIn", value: "2.470" },
        { label: "Nuevos seguidores en LinkedIn (7 días)", value: "+600%" },
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
      description:
        "A cohesive visual identity and website for a beauty and wellness brand.",
      industry: "Beauty & wellness",
      services: ["Brand manual", "Design system", "Web design"],
      challenge: "Case study details coming soon.",
      deliverables: [
        { title: "Brand manual", desc: "Details coming soon." },
        { title: "Design system", desc: "Details coming soon." },
        { title: "Web design", desc: "Details coming soon." },
      ],
    },
    es: {
      category: "Manual de marca, design system y web",
      description:
        "Una identidad visual coherente y un sitio web para una marca de belleza y bienestar.",
      industry: "Belleza y bienestar",
      services: ["Manual de marca", "Design system", "Diseño web"],
      challenge: "Detalles del caso próximamente.",
      deliverables: [
        { title: "Manual de marca", desc: "Detalles próximamente." },
        { title: "Design system", desc: "Detalles próximamente." },
        { title: "Diseño web", desc: "Detalles próximamente." },
      ],
    },
  },
  {
    slug: "teatro-abasto",
    client: "El Teatro Abasto",
    year: "2023",
    images: [],
    en: {
      category: "Web design",
      description: "A website for a theater venue.",
      industry: "Theater & live performance",
      services: ["Web design"],
      challenge: "Case study details coming soon.",
      deliverables: [{ title: "Web design", desc: "Details coming soon." }],
    },
    es: {
      category: "Diseño web",
      description: "Un sitio web para una sala de teatro.",
      industry: "Teatro y artes escénicas",
      services: ["Diseño web"],
      challenge: "Detalles del caso próximamente.",
      deliverables: [{ title: "Diseño web", desc: "Detalles próximamente." }],
    },
  },
  {
    slug: "samuray-bjj",
    client: "Samuray BJJ",
    year: "2022",
    images: [],
    en: {
      category: "Web design",
      description: "A website for a martial arts academy.",
      industry: "Sports & martial arts",
      services: ["Web design"],
      challenge: "Case study details coming soon.",
      deliverables: [{ title: "Web design", desc: "Details coming soon." }],
    },
    es: {
      category: "Diseño web",
      description: "Un sitio web para una academia de artes marciales.",
      industry: "Deporte y artes marciales",
      services: ["Diseño web"],
      challenge: "Detalles del caso próximamente.",
      deliverables: [{ title: "Diseño web", desc: "Detalles próximamente." }],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
