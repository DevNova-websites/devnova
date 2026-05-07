"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";

const translations = {
  es: {
    nav: {
      services: "Servicios",
      portfolio: "Portfolio",
      pricing: "Precios",
      contact: "Contacto",
      cta: "Solicitar presupuesto",
    },
    hero: {
      badge: "🚀 +100 proyectos lanzados",
      headline: "Desarrollamos páginas web que convierten visitas en clientes",
      sub: "En DevNova ayudamos a marcas, negocios y profesionales a crecer online con sitios web modernos, rápidos y diseñados para vender.",
      cta1: "Comenzar mi proyecto",
      cta2: "Ver portfolio",
      stat1: "+100",
      stat1Label: "Clientes",
      stat2: "4+",
      stat2Label: "Años de experiencia",
      stat3: "100%",
      stat3Label: "Proyectos entregados",
    },
    about: {
      badge: "¿Por qué DevNova?",
      title: "Más que una agencia,",
      titleAccent: "tu equipo de tecnología",
      desc: "Somos una empresa de desarrollo web con más de 4 años transformando ideas en experiencias digitales que generan resultados reales. Trabajamos con marcas, negocios y profesionales de toda Latinoamérica.",
      features: [
        { title: "+100 clientes", desc: "Marcas y negocios confían en nosotros" },
        { title: "4+ años", desc: "De experiencia en desarrollo web" },
        { title: "Soporte real", desc: "Acompañamiento post-lanzamiento" },
        { title: "A medida", desc: "Soluciones personalizadas para cada negocio" },
      ],
    },
    services: {
      badge: "Qué hacemos",
      title: "Servicios",
      titleAccent: "diseñados para crecer",
      items: [
        { title: "Desarrollo Web Corporativo", desc: "Sitios profesionales multipágina que reflejan la identidad de tu marca y convierten visitantes en clientes.", icon: "Globe" },
        { title: "Landing Pages", desc: "Páginas de aterrizaje optimizadas para campañas publicitarias con máxima tasa de conversión.", icon: "Rocket" },
        { title: "E-commerce", desc: "Tiendas online completas con carrito, pagos integrados y gestión de productos.", icon: "ShoppingCart" },
        { title: "Automatizaciones", desc: "Conectamos tus herramientas y automatizamos procesos para que tu negocio crezca solo.", icon: "Zap" },
        { title: "SEO Básico", desc: "Optimización para motores de búsqueda que te posiciona donde tus clientes te buscan.", icon: "Search" },
        { title: "Mantenimiento Web", desc: "Actualizaciones, backups y soporte técnico continuo para que tu sitio siempre funcione perfecto.", icon: "Shield" },
      ],
    },
    pricing: {
      badge: "Planes y precios",
      title: "Elegí el plan",
      titleAccent: "ideal para tu negocio",
      sub: "Sin costos ocultos. Sin sorpresas. Presupuesto personalizado según tu proyecto.",
      popular: "Más elegido",
      cta: "Comenzar con este plan",
      plans: [
        {
          name: "Starter",
          price: "Desde $350",
          desc: "Ideal para emprendedores y profesionales",
          features: ["Landing page completa", "Diseño responsive mobile-first", "1 formulario de contacto", "SEO básico on-page", "1 ronda de revisiones", "Entrega en 7 días"],
          popular: false,
        },
        {
          name: "Business",
          price: "Desde $750",
          desc: "Para empresas que quieren crecer online",
          features: ["Web corporativa multipágina", "Hasta 5 secciones personalizadas", "Sección portfolio / galería", "Blog (opcional)", "Integración WhatsApp", "SEO intermedio", "Analytics integrado", "2 rondas de revisiones"],
          popular: true,
        },
        {
          name: "Premium",
          price: "A medida",
          desc: "Proyectos complejos con integraciones avanzadas",
          features: ["Desarrollo completamente a medida", "E-commerce o plataforma web", "Integraciones con APIs externas", "Automatizaciones de procesos", "Panel de administración", "Soporte prioritario 6 meses", "Analítica avanzada"],
          popular: false,
        },
      ],
    },
    portfolio: {
      badge: "Nuestro trabajo",
      title: "Algunos proyectos",
      titleAccent: "realizados",
      sub: "Diseñamos experiencias digitales para marcas, negocios y profesionales",
      viewProject: "Ver proyecto",
      projects: [
        { name: "Mercedes Chanquia", category: "Portfolio personal / marca personal", desc: "Sitio de portfolio profesional con diseño elegante y secciones de presentación.", url: "https://mercedeschanquia.netlify.app/#home" },
        { name: "Lidera Maps", category: "Plataforma / negocio digital", desc: "Plataforma web para negocio digital con experiencia de usuario optimizada.", url: "https://lideramaps.com.ar/" },
        { name: "Samuray BJJ", category: "Academia / servicios", desc: "Web para academia de artes marciales con información de clases y sistema de contacto.", url: "https://samuray-bjj.netlify.app/" },
      ],
    },
    testimonials: {
      badge: "Lo que dicen nuestros clientes",
      title: "Resultados que",
      titleAccent: "hablan solos",
      items: [
        { name: "Carolina M.", role: "Emprendedora", text: "Excelente servicio desde el primer contacto. Aumentamos nuestras consultas un 60% al mes de lanzar la web.", avatar: "C" },
        { name: "Rodrigo F.", role: "Dueño de restaurante", text: "Gran diseño y atención personalizada. El equipo entendió exactamente lo que necesitábamos y lo entregaron a tiempo.", avatar: "R" },
        { name: "Valentina G.", role: "Consultora independiente", text: "Muy profesionales y rápidos. La web quedó espectacular y el soporte post-lanzamiento fue impecable.", avatar: "V" },
        { name: "Martín S.", role: "CEO, TechStartup", text: "Contratamos DevNova para nuestra landing de captación y superó todas las expectativas. El ROI fue inmediato.", avatar: "M" },
        { name: "Luciana P.", role: "Tienda online", text: "Nuestro e-commerce creció 40% en ventas luego del rediseño. Totalmente recomendados para proyectos serios.", avatar: "L" },
        { name: "Andrés T.", role: "Fotógrafo profesional", text: "Mi portfolio quedó increíble. Recibo consultas de clientes nuevos todos los meses gracias al SEO que implementaron.", avatar: "A" },
      ],
    },
    faq: {
      badge: "Preguntas frecuentes",
      title: "Todo lo que",
      titleAccent: "necesitás saber",
      items: [
        { q: "¿Cuánto tarda en estar lista una página web?", a: "Depende del proyecto. Una landing page puede estar lista en 5-7 días. Una web corporativa o e-commerce puede tomar entre 3 y 6 semanas. Te damos un plazo exacto antes de comenzar." },
        { q: "¿El precio incluye dominio y hosting?", a: "Nuestros precios base no incluyen dominio y hosting (son servicios de terceros con renovación anual). Sin embargo, los gestionamos por vos y te recomendamos las mejores opciones según tu caso." },
        { q: "¿Puedo pedir cambios después de que esté lista?", a: "¡Sí! Cada plan incluye rondas de revisión. Además, ofrecemos planes de mantenimiento mensual para cambios posteriores al lanzamiento." },
        { q: "¿Trabajan con clientes de otros países?", a: "Absolutamente. Trabajamos con clientes en Argentina, Uruguay, Chile, España, México y más. Todo se hace de forma 100% remota con videollamadas y herramientas colaborativas." },
        { q: "¿Qué necesito para comenzar?", a: "Solo completar nuestro formulario de relevamiento con los detalles de tu proyecto. A partir de eso, armamos una propuesta personalizada sin costo." },
        { q: "¿Hacen mantenimiento una vez lanzada la web?", a: "Sí. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, backups, monitoreo y soporte técnico ante cualquier inconveniente." },
      ],
    },
    benefits: {
      badge: "¿Vale la pena?",
      title: "¿Por qué tu negocio",
      titleAccent: "necesita una web?",
      prosTitle: "Con una web profesional",
      consTitle: "Sin presencia digital",
      pros: [
        { title: "Más credibilidad", desc: "El 75% de los usuarios juzga la seriedad de un negocio por su sitio web." },
        { title: "Más ventas", desc: "Una web bien diseñada puede aumentar tus conversiones hasta un 200%." },
        { title: "Presencia 24/7", desc: "Tu negocio trabaja mientras dormís. Captás clientes en cualquier horario." },
        { title: "Captación automática", desc: "Con SEO y formularios estratégicos, los clientes te encuentran a vos." },
      ],
      cons: [
        { title: "Dependencia de redes", desc: "Si Instagram cae o cambia su algoritmo, perdés todo tu alcance." },
        { title: "Menor confianza", desc: "Los clientes dudan de negocios que no tienen presencia web propia." },
        { title: "Menos conversiones", desc: "Sin landing page, tus campañas tienen un techo bajo de resultados." },
        { title: "Oportunidades perdidas", desc: "Cada día sin web es un cliente potencial que fue a la competencia." },
      ],
    },
    formSection: {
      badge: "¿Listo para empezar?",
      title: "Contanos",
      titleAccent: "tu proyecto",
      desc: "Completá nuestro brief de desarrollo web y te enviaremos una propuesta personalizada según tus necesidades.",
      benefits: ["Presupuesto personalizado", "Respuesta en menos de 24hs", "Asesoramiento sin compromiso"],
      cta1: "Completar brief",
      cta2: "Hablar por WhatsApp",
    },
    contact: {
      badge: "Contacto",
      title: "Hablemos de",
      titleAccent: "tu proyecto",
      name: "Nombre",
      email: "Email",
      company: "Empresa (opcional)",
      message: "Contanos tu proyecto...",
      send: "Enviar mensaje",
      whatsapp: "WhatsApp",
      or: "o escribinos directamente",
      successTitle: "¡Mensaje enviado!",
      successDesc: "Te respondemos en menos de 24 horas.",
    },
    footer: {
      desc: "Desarrollamos páginas web que convierten visitas en clientes. Más de 4 años construyendo presencia digital.",
      links: "Enlaces",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos",
      copyright: "Todos los derechos reservados.",
      tagline: "Hecho con ♥ en Argentina",
    },
    floating: "Solicitar presupuesto",
  },
  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      pricing: "Pricing",
      contact: "Contact",
      cta: "Get a quote",
    },
    hero: {
      badge: "🚀 100+ projects launched",
      headline: "We build websites that turn visitors into customers",
      sub: "At DevNova we help brands, businesses and professionals grow online with modern, fast websites designed to sell.",
      cta1: "Start my project",
      cta2: "View portfolio",
      stat1: "+100",
      stat1Label: "Clients",
      stat2: "4+",
      stat2Label: "Years of experience",
      stat3: "100%",
      stat3Label: "Projects delivered",
    },
    about: {
      badge: "Why DevNova?",
      title: "More than an agency,",
      titleAccent: "your tech team",
      desc: "We are a web development company with 4+ years transforming ideas into digital experiences that generate real results. We work with brands and businesses across Latin America and beyond.",
      features: [
        { title: "+100 clients", desc: "Brands and businesses trust us" },
        { title: "4+ years", desc: "Web development experience" },
        { title: "Real support", desc: "Post-launch accompaniment" },
        { title: "Custom", desc: "Personalized solutions for every business" },
      ],
    },
    services: {
      badge: "What we do",
      title: "Services",
      titleAccent: "designed to grow",
      items: [
        { title: "Corporate Web Development", desc: "Professional multi-page sites that reflect your brand identity and convert visitors into clients.", icon: "Globe" },
        { title: "Landing Pages", desc: "Advertising-optimized landing pages with maximum conversion rate.", icon: "Rocket" },
        { title: "E-commerce", desc: "Complete online stores with cart, integrated payments and product management.", icon: "ShoppingCart" },
        { title: "Automations", desc: "We connect your tools and automate processes so your business grows on its own.", icon: "Zap" },
        { title: "Basic SEO", desc: "Search engine optimization that positions you where your customers are looking.", icon: "Search" },
        { title: "Web Maintenance", desc: "Updates, backups and continuous tech support so your site always runs perfectly.", icon: "Shield" },
      ],
    },
    pricing: {
      badge: "Plans & Pricing",
      title: "Choose the plan",
      titleAccent: "ideal for your business",
      sub: "No hidden costs. No surprises. Personalized quote based on your project.",
      popular: "Most popular",
      cta: "Get started",
      plans: [
        {
          name: "Starter",
          price: "From $350",
          desc: "Ideal for entrepreneurs and professionals",
          features: ["Complete landing page", "Mobile-first responsive design", "1 contact form", "Basic on-page SEO", "1 revision round", "Delivery in 7 days"],
          popular: false,
        },
        {
          name: "Business",
          price: "From $750",
          desc: "For companies that want to grow online",
          features: ["Multi-page corporate website", "Up to 5 custom sections", "Portfolio / gallery section", "Blog (optional)", "WhatsApp integration", "Intermediate SEO", "Analytics integrated", "2 revision rounds"],
          popular: true,
        },
        {
          name: "Premium",
          price: "Custom",
          desc: "Complex projects with advanced integrations",
          features: ["Fully custom development", "E-commerce or web platform", "External API integrations", "Process automations", "Admin dashboard", "Priority support 6 months", "Advanced analytics"],
          popular: false,
        },
      ],
    },
    portfolio: {
      badge: "Our work",
      title: "Featured",
      titleAccent: "projects",
      sub: "We design digital experiences for brands, businesses and professionals",
      viewProject: "View project",
      projects: [
        { name: "Mercedes Chanquia", category: "Personal portfolio / personal brand", desc: "Professional portfolio site with elegant design and presentation sections.", url: "https://mercedeschanquia.netlify.app/#home" },
        { name: "Lidera Maps", category: "Platform / digital business", desc: "Web platform for digital business with optimized user experience.", url: "https://lideramaps.com.ar/" },
        { name: "Samuray BJJ", category: "Academy / services", desc: "Website for martial arts academy with class info and contact system.", url: "https://samuray-bjj.netlify.app/" },
      ],
    },
    testimonials: {
      badge: "What our clients say",
      title: "Results that",
      titleAccent: "speak for themselves",
      items: [
        { name: "Carolina M.", role: "Entrepreneur", text: "Excellent service from first contact. We increased inquiries by 60% the month we launched the website.", avatar: "C" },
        { name: "Rodrigo F.", role: "Restaurant owner", text: "Great design and personalized attention. The team understood exactly what we needed and delivered on time.", avatar: "R" },
        { name: "Valentina G.", role: "Independent consultant", text: "Very professional and fast. The site turned out spectacular and post-launch support was impeccable.", avatar: "V" },
        { name: "Martín S.", role: "CEO, TechStartup", text: "We hired DevNova for our acquisition landing and it exceeded all expectations. The ROI was immediate.", avatar: "M" },
        { name: "Luciana P.", role: "Online store", text: "Our e-commerce grew 40% in sales after the redesign. Highly recommended for serious projects.", avatar: "L" },
        { name: "Andrés T.", role: "Professional photographer", text: "My portfolio turned out incredible. I receive inquiries from new clients every month thanks to the SEO they implemented.", avatar: "A" },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Everything you",
      titleAccent: "need to know",
      items: [
        { q: "How long does it take to build a website?", a: "It depends on the project. A landing page can be ready in 5-7 days. A corporate site or e-commerce can take 3-6 weeks. We give you an exact timeline before starting." },
        { q: "Does the price include domain and hosting?", a: "Our base prices don't include domain and hosting (they're third-party services with annual renewal). However, we manage them for you and recommend the best options for your case." },
        { q: "Can I request changes after it's done?", a: "Yes! Each plan includes revision rounds. We also offer monthly maintenance plans for post-launch changes." },
        { q: "Do you work with international clients?", a: "Absolutely. We work with clients in Argentina, Uruguay, Chile, Spain, Mexico and more. Everything is done 100% remotely with video calls and collaborative tools." },
        { q: "What do I need to get started?", a: "Just complete our project brief form with your project details. From there, we put together a personalized proposal at no cost." },
        { q: "Do you maintain the website after launch?", a: "Yes. We offer monthly maintenance plans that include updates, backups, monitoring and technical support." },
      ],
    },
    benefits: {
      badge: "Is it worth it?",
      title: "Why does your business",
      titleAccent: "need a website?",
      prosTitle: "With a professional website",
      consTitle: "Without digital presence",
      pros: [
        { title: "More credibility", desc: "75% of users judge a business's seriousness by its website." },
        { title: "More sales", desc: "A well-designed website can increase your conversions by up to 200%." },
        { title: "24/7 presence", desc: "Your business works while you sleep. You capture clients at any time." },
        { title: "Automatic acquisition", desc: "With SEO and strategic forms, clients find you." },
      ],
      cons: [
        { title: "Social media dependency", desc: "If Instagram goes down or changes its algorithm, you lose all your reach." },
        { title: "Less trust", desc: "Clients doubt businesses that don't have their own web presence." },
        { title: "Fewer conversions", desc: "Without a landing page, your campaigns have a low ceiling of results." },
        { title: "Lost opportunities", desc: "Every day without a website is a potential customer who went to the competition." },
      ],
    },
    formSection: {
      badge: "Ready to start?",
      title: "Tell us about",
      titleAccent: "your project",
      desc: "Complete our web development brief and we'll send you a personalized proposal tailored to your needs.",
      benefits: ["Personalized quote", "Response in less than 24h", "No-commitment consultation"],
      cta1: "Complete brief",
      cta2: "Message on WhatsApp",
    },
    contact: {
      badge: "Contact",
      title: "Let's talk about",
      titleAccent: "your project",
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      message: "Tell us about your project...",
      send: "Send message",
      whatsapp: "WhatsApp",
      or: "or write to us directly",
      successTitle: "Message sent!",
      successDesc: "We'll respond within 24 hours.",
    },
    footer: {
      desc: "We develop websites that convert visitors into clients. 4+ years building digital presence.",
      links: "Links",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      copyright: "All rights reserved.",
      tagline: "Made with ♥ in Argentina",
    },
    floating: "Get a quote",
  },
};

// Derive a structural type from Spanish (serves as schema) then widen to string
type DeepString<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? DeepString<U>[]
  : { [K in keyof T]: DeepString<T[K]> };

type Translations = DeepString<typeof translations.es>;

const LangContext = createContext<{
  lang: Lang;
  t: Translations;
  toggle: () => void;
}>({ lang: "es", t: translations.es as unknown as Translations, toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));
  return (
    <LangContext.Provider value={{ lang, t: translations[lang] as unknown as Translations, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
