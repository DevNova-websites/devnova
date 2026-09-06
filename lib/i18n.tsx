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
      viewMore: "See all work",
      screenshotLabel: "Screenshot pending",
      featured: {
        client: "Norfalk",
        tag: "Featured case",
        location: "Nordic client",
        desc: "Naming workshop, full design system, Canva setup, sales decks, internal decks, a monthly newsletter, and LinkedIn: one system built and maintained end to end.",
        scope: ["Naming workshop", "Design system", "Canva setup", "Sales decks", "Internal decks", "Newsletter", "LinkedIn"],
        linkedinBeforeLabel: "LinkedIn — before",
        linkedinAfterLabel: "LinkedIn — today",
        linkedinBefore: "LinkedIn before",
        linkedinBeforeStat: "Little to no activity",
        linkedinAfter: "LinkedIn today",
        linkedinAfterStat: "+600% followers in 3 months",
      },
      allWork: {
        eyebrow: "Full portfolio",
        title: "All work",
        back: "Back home",
      },
    },
    process: {
      eyebrow: "How we work",
      title: "Process",
      subtitle: "A Double Diamond process, adapted to how DevNova actually delivers.",
      steps: [
        {
          number: "01",
          title: "Discover",
          desc: "An initial meeting to understand what the business needs, what its challenges are, and how we can help.",
        },
        {
          number: "02",
          title: "Define",
          desc: "We define the scope of the project — web, LinkedIn, design system, decks, whatever it takes — and the budget gets approved.",
        },
        {
          number: "03",
          title: "Develop",
          desc: "We build, show progress, and adjust with you at every stage.",
        },
        {
          number: "04",
          title: "Deliver",
          desc: "We hand everything over, with the system ready for your team to keep using on its own.",
        },
      ],
      agile: {
        title: "Iterative, not open-ended",
        desc: "The process is iterative and agile: we don't wait until the end of the project to ask for feedback, we review progress with you at the close of each phase. That doesn't mean an open stream of changes — each phase has a defined scope, and iteration happens inside it, not around it.",
      },
    },
    about: {
      eyebrow: "About the studio",
      title: "One point of contact. One system behind everything.",
      p1: "DevNova is a design and communication studio based in Buenos Aires, working with growing organizations internationally. You work directly with the people doing the work — no account layer, no handoff between strategy and execution. Whoever plans it is who builds it, and who you talk to.",
      p2: "You can start from wherever you are. If there's already a design system built by someone else, we work on top of it; if there's nothing but a logo, we build the rest from there. The one thing we need from you going in is that logo — DevNova doesn't design logos.",
      ecosystem: {
        title: "The ecosystem is the product.",
        desc: "The real deliverable isn't any single piece — it's the coherence across all of them. Your website, a slide, a LinkedIn post: built so every one of them reads as if it came from the same place. Most companies are missing that. It's what we build first.",
      },
    },
    ongoing: {
      eyebrow: "Beyond the project",
      title: "Ongoing support, not a one-off",
      desc: "Most studios finish a project and disappear until the next one. We offer dedicated, ongoing support instead: a long-term relationship where we stay close to the brand as it grows (new decks, new campaigns, new channels), with regular follow-up instead of renegotiating scope every time something comes up.",
      points: [
        "Dedicated attention as new materials come up",
        "A team that already knows your brand and your system",
        "No re-briefing from scratch each time",
      ],
      cta: "Ask about ongoing support",
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
      whatWeDid: "What we did, service by service",
      discover: "What we found",
      propose: "What we proposed",
      iterate: "How it evolved with the client",
      result: "The result",
      results: "Results",
      nextProject: "Next project",
      imagePlaceholder: "Image coming soon",
      previewLabel: "Preview pending",
      transformation: "The transformation",
      before: "Before DevNova",
      after: "After DevNova",
      visitSite: "Visit the live site",
      noSite: "Site coming soon",
      modalFallback: "This site can't be displayed here.",
      openNewTab: "Open in a new tab",
      closeModal: "Close",
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
      viewMore: "Ver todos los trabajos",
      screenshotLabel: "Screenshot pendiente",
      featured: {
        client: "Norfalk",
        tag: "Caso destacado",
        location: "Cliente nórdico",
        desc: "Naming workshop, design system completo, setup en Canva, sales decks, decks internos, newsletter mensual y LinkedIn: un sistema construido y mantenido de punta a punta.",
        scope: ["Naming workshop", "Design system", "Setup en Canva", "Sales decks", "Decks internos", "Newsletter", "LinkedIn"],
        linkedinBeforeLabel: "LinkedIn — antes",
        linkedinAfterLabel: "LinkedIn — hoy",
        linkedinBefore: "LinkedIn antes",
        linkedinBeforeStat: "Poca o ninguna actividad",
        linkedinAfter: "LinkedIn hoy",
        linkedinAfterStat: "+600% de seguidores en 3 meses",
      },
      allWork: {
        eyebrow: "Portfolio completo",
        title: "Todos los trabajos",
        back: "Volver al inicio",
      },
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Proceso",
      subtitle: "Un proceso Double Diamond, adaptado a cómo DevNova entrega en la práctica.",
      steps: [
        {
          number: "01",
          title: "Discover",
          desc: "Una reunión inicial para entender qué necesita la empresa, cuáles son sus desafíos y cómo podemos ayudar.",
        },
        {
          number: "02",
          title: "Define",
          desc: "Definimos el alcance del proyecto — web, LinkedIn, design system, decks, lo que haga falta — y se aprueba el presupuesto.",
        },
        {
          number: "03",
          title: "Develop",
          desc: "Desarrollamos, mostramos avances y ajustamos con vos en cada etapa.",
        },
        {
          number: "04",
          title: "Deliver",
          desc: "Entregamos todo, con el sistema listo para que tu equipo lo siga usando por su cuenta.",
        },
      ],
      agile: {
        title: "Iterativo, no abierto",
        desc: "El proceso es iterativo y ágil: no esperamos al final del proyecto para pedir feedback, revisamos el avance con vos al cierre de cada etapa. Eso no significa una tanda abierta de cambios — cada etapa tiene un alcance definido, y la iteración ocurre dentro de esa etapa, no alrededor de ella.",
      },
    },
    about: {
      eyebrow: "Sobre el estudio",
      title: "Un solo punto de contacto. Un sistema detrás de todo.",
      p1: "DevNova es un estudio de diseño y comunicación con base en Buenos Aires, que trabaja con organizaciones en crecimiento a nivel internacional. Trabajás directamente con las personas que hacen el trabajo — sin capas de account, sin traspasos entre estrategia y ejecución. Quien lo planea es quien lo construye, y con quien hablás.",
      p2: "Podés empezar desde donde estés. Si ya tenés un design system hecho por otro diseñador, trabajamos sobre eso; si no tenés más que un logo, construimos el resto desde ahí. Lo único que necesitamos de tu lado para arrancar es ese logo — DevNova no diseña logos.",
      ecosystem: {
        title: "El ecosistema es el producto.",
        desc: "Lo que realmente entregamos no es una pieza suelta: es la coherencia entre todas. Tu página web, una slide, un posteo de LinkedIn: construidos para que cada uno se vea como si viniera del mismo lugar. A la mayoría de las empresas les falta eso. Es lo primero que construimos.",
      },
    },
    ongoing: {
      eyebrow: "Más allá del proyecto",
      title: "Acompañamiento continuo, no un proyecto puntual",
      desc: "La mayoría de los estudios terminan un proyecto y desaparecen hasta el próximo. Nosotros ofrecemos acompañamiento y seguimiento continuo: una relación de largo plazo donde nos mantenemos cerca de la marca a medida que crece (nuevos decks, nuevas campañas, nuevos canales), con seguimiento regular en lugar de renegociar el alcance cada vez que surge algo.",
      points: [
        "Atención dedicada a medida que surgen materiales nuevos",
        "Un equipo que ya conoce tu marca y tu sistema",
        "Sin volver a explicar todo desde cero cada vez",
      ],
      cta: "Consultar sobre el acompañamiento continuo",
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
      whatWeDid: "Qué hicimos, servicio por servicio",
      discover: "Qué encontramos",
      propose: "Qué propusimos",
      iterate: "Cómo evolucionó con el cliente",
      result: "El resultado",
      results: "Resultados",
      nextProject: "Próximo proyecto",
      imagePlaceholder: "Imagen próximamente",
      previewLabel: "Vista previa pendiente",
      transformation: "La transformación",
      before: "Antes de DevNova",
      after: "Después de DevNova",
      visitSite: "Ver el sitio en vivo",
      noSite: "Sitio próximamente",
      modalFallback: "Este sitio no se puede mostrar acá.",
      openNewTab: "Abrir en una pestaña nueva",
      closeModal: "Cerrar",
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
