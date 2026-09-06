"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "es";

const translations = {
  en: {
    nav: {
      work: "Work",
      services: "Services",
      process: "Process",
      about: "About",
      cta: "Get in touch",
    },
    // Copy variants considered for the hero headline (unification is the
    // core value prop: one agency for brand system, templates, web, decks
    // and LinkedIn). Variant 2 was used — it names the channels explicitly,
    // which reads more concrete to a CEO than an abstract line.
    // 1. "One agency for everything your brand says."
    // 2. "Brand, web, decks, LinkedIn. One agency behind all of it." ← used
    // 3. "Stop briefing five agencies. Start with one."
    hero: {
      eyebrow: "Design & communication studio, Buenos Aires",
      headline: "Brand, web, decks, LinkedIn. One agency behind all of it.",
      sub: "We build your brand system and put it to work everywhere it needs to show up: web, templates, slide decks, LinkedIn. One team, one standard, nothing off-brand.",
      cta2: "See the work",
      stats: [
        { value: "4+", label: "years in business" },
        { value: "10+", label: "projects shipped" },
        // TODO-DEVNOVA: confirm exact count of international clients — using
        // "2+" as a verifiable placeholder (Denmark and Argentina, both
        // mentioned in the brief).
        { value: "2+", label: "international clients" },
      ],
    },
    marquee: [
      "Brand systems",
      "Web design",
      "Design systems",
      "Sales decks",
      "Investor decks",
      "Naming workshops",
      "Newsletters",
      "Brand partnership",
    ],
    services: {
      eyebrow: "What we do",
      title: "Services",
      recurringBadge: "Recurring revenue",
      items: [
        {
          title: "Web design",
          desc: "A site that turns a visit into a client, built on the same system as everything else you publish.",
        },
        {
          title: "LinkedIn Management",
          desc: "A steady, on-brand presence that keeps generating business opportunities month after month.",
        },
        {
          title: "Brand systems & visual identity",
          desc: "Color, type, tone: a system built to hold up across every format your team actually uses.",
        },
        {
          title: "Communication design",
          desc: "Sales decks, investor decks, internal presentations: the documents that close a meeting instead of filling it with slides.",
        },
        {
          title: "Design systems in Canva",
          desc: "Templates your team can open and use without a design background, so the identity survives without an agency on call.",
        },
        {
          title: "Strategic workshops",
          desc: "Naming, mission, vision: the working sessions that give a brand something real to say before we design a single pixel.",
        },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Work",
      viewCase: "View case",
      featured: {
        client: "Norfalk",
        tag: "Featured case",
        location: "Nordic client",
        desc: "Naming workshop, full design system, Canva setup, sales decks, internal decks, a monthly newsletter, and LinkedIn: one system built and maintained end to end.",
        scope: ["Naming workshop", "Design system", "Canva setup", "Sales decks", "Internal decks", "Newsletter", "LinkedIn"],
      },
      others: [
        {
          client: "Gisela Estética",
          desc: "Brand manual, design system and web.",
          scope: ["Brand manual", "Design system", "Web"],
        },
        {
          client: "El Teatro Abasto",
          desc: "Web design for a theater venue.",
          scope: ["Web"],
        },
        {
          client: "Samuray BJJ",
          desc: "Web design for a martial arts academy.",
          scope: ["Web"],
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "Process",
      steps: [
        {
          number: "01",
          title: "Define",
          desc: "Workshops to get naming, mission and vision straight: the groundwork every design decision after this depends on.",
        },
        {
          number: "02",
          title: "Build",
          desc: "The visual identity and the design system that carries it, built once, meant to hold.",
        },
        {
          number: "03",
          title: "Activate",
          desc: "The system goes live across web, decks, LinkedIn and newsletters: everywhere the brand actually shows up.",
        },
        {
          number: "04",
          title: "Maintain",
          desc: "Templates and tools handed over so your team keeps things consistent without waiting on us for every piece.",
        },
      ],
    },
    about: {
      eyebrow: "About the studio",
      title: "A small studio, on purpose.",
      p1: "DevNova is a design and communication studio based in Buenos Aires, working mostly with growing organizations across Europe.",
      p2: "We stay small so the people who plan the work are the people who do it. No account layer, no handoffs between strategy and execution. You talk to whoever is holding the pen.",
      p3: "What we're after isn't a nice logo. It's every piece you publish looking like it came from the same place, whether it's a website, a slide, or a LinkedIn post.",
    },
    partnership: {
      eyebrow: "An ongoing option",
      title: "Brand partnership",
      desc: "Most studios finish a project and disappear until the next one. We offer another way: a standing relationship where we stay close to the brand as it grows (new decks, new campaigns, new channels) without renegotiating scope every time something comes up.",
      points: [
        "Consistent turnaround on new materials",
        "A team that already knows your brand",
        "No re-briefing from scratch each time",
      ],
      cta: "Ask about partnership",
    },
    finalCta: {
      title: "Let's talk about your brand.",
      sub: "Tell us where things are inconsistent and we'll tell you what it takes to fix it.",
      cta: "Email us",
    },
    footer: {
      tagline: "Design & communication studio",
      location: "Buenos Aires, Argentina",
      linksTitle: "Links",
      work: "Work",
      contact: "Contact",
      linkedin: "LinkedIn",
      copyright: "DevNova Studio. All rights reserved.",
    },
    caseStudy: {
      back: "Back to work",
      client: "Client",
      industry: "Industry",
      services: "Services",
      year: "Year",
      challenge: "The challenge",
      whatWeDid: "What we did",
      results: "Results",
      nextProject: "Next project",
      imagePlaceholder: "Image coming soon",
      transformation: "The transformation",
      before: "Before DevNova",
      after: "After DevNova",
    },
  },
  es: {
    nav: {
      work: "Trabajos",
      services: "Servicios",
      process: "Proceso",
      about: "Nosotros",
      cta: "Escribinos",
    },
    hero: {
      eyebrow: "Estudio de diseño y comunicación, Buenos Aires",
      headline: "Marca, web, decks, LinkedIn. Una sola agencia detrás de todo.",
      sub: "Construimos el sistema de marca y lo ponemos a trabajar en todos lados donde necesita aparecer: web, templates, slides, LinkedIn. Un solo equipo, un solo estándar, nada fuera de marca.",
      cta2: "Ver los trabajos",
      stats: [
        { value: "4+", label: "años de trayectoria" },
        { value: "10+", label: "proyectos entregados" },
        // TODO-DEVNOVA: confirmar el número real de clientes internacionales
        // — se usa "2+" como placeholder verificable (Dinamarca y Argentina,
        // ambos mencionados en el brief).
        { value: "2+", label: "clientes internacionales" },
      ],
    },
    marquee: [
      "Brand systems",
      "Diseño web",
      "Design systems",
      "Sales decks",
      "Investor decks",
      "Naming workshops",
      "Newsletters",
      "Brand partnership",
    ],
    services: {
      eyebrow: "Qué hacemos",
      title: "Servicios",
      recurringBadge: "Ingreso recurrente",
      items: [
        {
          title: "Diseño web",
          desc: "Un sitio que convierte una visita en cliente, construido sobre el mismo sistema que todo lo demás que publicás.",
        },
        {
          title: "LinkedIn Management",
          desc: "Una presencia constante y on-brand que sigue generando oportunidades de negocio mes a mes.",
        },
        {
          title: "Brand systems e identidad visual",
          desc: "Color, tipografía, tono: un sistema construido para sostenerse en cada formato que tu equipo realmente usa.",
        },
        {
          title: "Communication design",
          desc: "Sales decks, investor decks, presentaciones internas: los documentos que cierran una reunión en vez de llenarla de slides.",
        },
        {
          title: "Design systems en Canva",
          desc: "Plantillas que tu equipo puede abrir y usar sin formación en diseño, para que la identidad se sostenga sin depender de una agencia.",
        },
        {
          title: "Workshops estratégicos",
          desc: "Naming, misión, visión: las sesiones de trabajo que le dan a una marca algo real para decir antes de diseñar un solo píxel.",
        },
      ],
    },
    work: {
      eyebrow: "Trabajos seleccionados",
      title: "Trabajos",
      viewCase: "Ver caso",
      featured: {
        client: "Norfalk",
        tag: "Caso destacado",
        location: "Cliente nórdico",
        desc: "Naming workshop, design system completo, setup en Canva, sales decks, decks internos, newsletter mensual y LinkedIn: un sistema construido y mantenido de punta a punta.",
        scope: ["Naming workshop", "Design system", "Setup en Canva", "Sales decks", "Decks internos", "Newsletter", "LinkedIn"],
      },
      others: [
        {
          client: "Gisela Estética",
          desc: "Manual de marca, design system y web.",
          scope: ["Manual de marca", "Design system", "Web"],
        },
        {
          client: "El Teatro Abasto",
          desc: "Diseño web para una sala de teatro.",
          scope: ["Web"],
        },
        {
          client: "Samuray BJJ",
          desc: "Diseño web para una academia de artes marciales.",
          scope: ["Web"],
        },
      ],
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Proceso",
      steps: [
        {
          number: "01",
          title: "Definir",
          desc: "Workshops para dejar en claro naming, misión y visión: la base de la que depende cada decisión de diseño posterior.",
        },
        {
          number: "02",
          title: "Construir",
          desc: "La identidad visual y el design system que la sostiene, construido una vez, pensado para durar.",
        },
        {
          number: "03",
          title: "Activar",
          desc: "El sistema se activa en web, decks, LinkedIn y newsletters: en todos los lugares donde la marca realmente aparece.",
        },
        {
          number: "04",
          title: "Mantener",
          desc: "Plantillas y herramientas entregadas para que tu equipo mantenga la consistencia sin esperar a que resolvamos cada pieza.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre el estudio",
      title: "Un estudio chico, a propósito.",
      p1: "DevNova es un estudio de diseño y comunicación con base en Buenos Aires, que trabaja principalmente con organizaciones en crecimiento en Europa.",
      p2: "Nos mantenemos chicos para que las personas que planean el trabajo sean las mismas que lo hacen. Sin capas de account, sin traspasos entre estrategia y ejecución. Hablás con quien está sosteniendo el lápiz.",
      p3: "Lo que buscamos no es un lindo logo. Es que cada pieza que publiques se vea como si viniera del mismo lugar, sea un sitio web, una slide o un posteo de LinkedIn.",
    },
    partnership: {
      eyebrow: "Una opción continua",
      title: "Brand partnership",
      desc: "La mayoría de los estudios terminan un proyecto y desaparecen hasta el próximo. Nosotros ofrecemos otra forma: una relación estable donde nos mantenemos cerca de la marca a medida que crece (nuevos decks, nuevas campañas, nuevos canales) sin renegociar el alcance cada vez que surge algo.",
      points: [
        "Tiempos de entrega consistentes en materiales nuevos",
        "Un equipo que ya conoce tu marca",
        "Sin volver a explicar todo desde cero cada vez",
      ],
      cta: "Consultar sobre partnership",
    },
    finalCta: {
      title: "Hablemos de tu marca.",
      sub: "Contanos dónde está la inconsistencia y te decimos qué hace falta para resolverla.",
      cta: "Escribinos",
    },
    footer: {
      tagline: "Estudio de diseño y comunicación",
      location: "Buenos Aires, Argentina",
      linksTitle: "Enlaces",
      work: "Trabajos",
      contact: "Contacto",
      linkedin: "LinkedIn",
      copyright: "DevNova Studio. Todos los derechos reservados.",
    },
    caseStudy: {
      back: "Volver a trabajos",
      client: "Cliente",
      industry: "Industria",
      services: "Servicios",
      year: "Año",
      challenge: "El desafío",
      whatWeDid: "Qué hicimos",
      results: "Resultados",
      nextProject: "Próximo proyecto",
      imagePlaceholder: "Imagen próximamente",
      transformation: "La transformación",
      before: "Antes de DevNova",
      after: "Después de DevNova",
    },
  },
};

// Derive a structural type from English (serves as schema) then widen to string
type DeepString<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? DeepString<U>[]
  : { [K in keyof T]: DeepString<T[K]> };

type Translations = DeepString<typeof translations.en>;

const LangContext = createContext<{
  lang: Lang;
  t: Translations;
  toggle: () => void;
}>({ lang: "en", t: translations.en as unknown as Translations, toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  return (
    <LangContext.Provider value={{ lang, t: translations[lang] as unknown as Translations, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
