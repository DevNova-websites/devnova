"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { projects, type Project } from "@/data/projects";
import { imageDimensions } from "@/data/imageDimensions";
import { ProjectImage } from "@/components/ProjectImage";
import Lightbox, { type LightboxImage } from "@/components/Lightbox";
import LiveEmbed from "@/components/LiveEmbed";

const FALLBACK_DIMENSIONS = { width: 1600, height: 1000 };

function toGalleryImage(src: string, alt: string): LightboxImage {
  return { src, alt, ...(imageDimensions[src] ?? FALLBACK_DIMENSIONS) };
}

// Las capturas de /imagenes/phones/ ya traen el celular dibujado (recortadas
// sin márgenes); el resto son capturas crudas y se enmarcan acá con CSS.
// Todas comparten el mismo alto y proporción para que se vean parejas.
function PhoneShot({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  const framed = src.startsWith("/imagenes/phones/");
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-[250px] sm:h-[460px] aspect-[708/1400] shrink-0 cursor-zoom-in"
    >
      {framed ? (
        <Image src={src} alt={alt} fill sizes="240px" className="object-contain drop-shadow-xl" />
      ) : (
        <div className="absolute inset-[1.5%] rounded-[2rem] overflow-hidden border-[6px] border-deepspace bg-deepspace shadow-xl">
          <Image src={src} alt={alt} fill sizes="240px" className="object-cover object-top" />
        </div>
      )}
      <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[rgba(28,27,46,0.72)] text-stardust flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <Maximize2 size={14} />
      </span>
    </button>
  );
}

type NavItem = { id: string; label: string; sub?: boolean };

export default function CaseStudyContent({ project }: { project: Project }) {
  const { t, lang } = useLang();
  const content = project[lang];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeId, setActiveId] = useState("overview");

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const heroSrc = project.webImage ?? project.images[0];
  const afterSrc = project.images[0];
  const hasPhones = !!project.phoneImages?.length;
  const hasDeck = !!project.deckImages?.length;
  const hasTransformation = !!(project.beforeImage && afterSrc);
  const hasMetrics = !!content.metrics?.length;

  // Índice de la barra lateral: mismo orden que las secciones de la página.
  const navItems = useMemo<NavItem[]>(() => {
    const items: NavItem[] = [
      { id: "overview", label: t.caseStudy.overview },
      { id: "challenge", label: t.caseStudy.challenge },
      ...content.sections.map((s, i) => ({ id: `service-${i}`, label: s.title, sub: true })),
    ];
    if (hasPhones) items.push({ id: "mobile", label: t.caseStudy.mobilePreview });
    if (project.siteUrl) items.push({ id: "live-site", label: t.caseStudy.visitSite });
    if (hasDeck) items.push({ id: "deck", label: t.caseStudy.deckPreview });
    if (hasTransformation) items.push({ id: "transformation", label: t.caseStudy.transformation });
    if (hasMetrics) items.push({ id: "results", label: t.caseStudy.results });
    return items;
  }, [t.caseStudy, content.sections, hasPhones, project.siteUrl, hasDeck, hasTransformation, hasMetrics]);

  // Resalta en la barra lateral la sección que está pasando por el tercio
  // superior de la pantalla, sea que se llegó clickeando o scrolleando.
  useEffect(() => {
    const els = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  // Orden en el que las imágenes aparecen en la página: define el índice
  // que se abre en el lightbox al clickear cada una.
  const gallery = useMemo<LightboxImage[]>(() => {
    const items: LightboxImage[] = [];
    const seen = new Set<string>();
    const push = (src: string | undefined, alt: string) => {
      if (!src || seen.has(src)) return;
      seen.add(src);
      items.push(toGalleryImage(src, alt));
    };

    push(heroSrc, `${project.client}: ${content.category}`);
    content.sections.forEach((section) => {
      section.images?.forEach((src, i) =>
        push(src, `${project.client}: ${section.captions?.[i] ?? section.title}`)
      );
    });
    project.phoneImages?.forEach((src) => push(src, `${project.client}: ${t.caseStudy.mobilePreview}`));
    project.deckImages?.forEach((src) => push(src, `${project.client}: ${t.caseStudy.deckPreview}`));
    push(project.beforeImage, `${project.client}: ${t.caseStudy.before}`);
    push(afterSrc, `${project.client}: ${t.caseStudy.after}`);

    return items;
  }, [project, content, heroSrc, afterSrc, t.caseStudy]);

  const openLightbox = (src: string) => {
    const i = gallery.findIndex((g) => g.src === src);
    if (i >= 0) setLightboxIndex(i);
  };

  const metadataItems = [
    { label: t.caseStudy.client, value: project.client },
    { label: t.caseStudy.industry, value: content.industry },
    { label: t.caseStudy.services, value: content.services.join(", ") },
    { label: t.caseStudy.year, value: project.year },
  ];

  const sectionClass = "scroll-mt-28 mb-20 md:mb-28";

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-deepspace/60 hover:text-nebula transition-colors mb-16 md:mb-20"
      >
        ← {t.caseStudy.back}
      </Link>

      <div className="lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16 xl:gap-20">
        {/* Barra lateral: índice de secciones, fija mientras se scrollea */}
        <aside className="hidden lg:block">
          <nav aria-label={t.caseStudy.onThisPage} className="sticky top-28">
            <p className="section-label mb-5">{t.caseStudy.onThisPage}</p>
            <ul className="border-l border-deepspace/10 space-y-1">
              {navItems.map((item) => {
                const active = item.id === activeId;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={active ? "location" : undefined}
                      className={`block -ml-px border-l-2 py-1.5 text-sm leading-snug transition-colors ${
                        item.sub ? "pl-7" : "pl-4"
                      } ${
                        active
                          ? "border-nebula text-nebula"
                          : "border-transparent text-deepspace/50 hover:text-deepspace"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0 max-w-[820px]">
          {/* 1. Encabezado + hero + ficha */}
          <section id="overview" className="scroll-mt-28">
            <div className="reveal mb-16 md:mb-20">
              <p className="section-label mb-4">
                {content.category} · {project.year}
              </p>
              <h1 className="font-heading font-bold text-4xl md:text-6xl tracking-[-0.02em] text-deepspace mb-6">
                {project.client}
              </h1>
              <p className="text-base md:text-lg text-deepspace/70 font-light leading-relaxed max-w-xl">
                {content.description}
              </p>
            </div>

            {heroSrc && (
              <div className="reveal mb-16 md:mb-20">
                <ProjectImage
                  src={heroSrc}
                  alt={`${project.client}: ${content.category}`}
                  preload
                  onClick={() => openLightbox(heroSrc)}
                />
              </div>
            )}

            <div className="reveal grid grid-cols-2 md:grid-cols-[0.8fr_1.2fr_1.6fr_0.6fr] gap-x-8 gap-y-6 py-8 mb-20 md:mb-28 hairline hairline-b">
              {metadataItems.map((item, i) => (
                <div
                  key={item.label}
                  className={i > 0 ? "md:pl-8 md:border-l md:border-deepspace/10" : ""}
                >
                  <div className="section-label mb-2">{item.label}</div>
                  <div className="text-sm text-deepspace/80">{item.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. El desafío */}
          <section id="challenge" className={`reveal ${sectionClass}`}>
            <p className="section-label mb-6">{t.caseStudy.challenge}</p>
            <p className="text-lg md:text-xl text-deepspace/80 font-light leading-relaxed">
              {content.challenge}
            </p>
          </section>

          {/* 3. Relato por servicio: texto y foto siempre juntos */}
          <div className="mb-20 md:mb-28">
            <p className="reveal section-label mb-10 md:mb-14">{t.caseStudy.whatWeDid}</p>
            <div className="space-y-16 md:space-y-24">
              {content.sections.map((section, si) => (
                <section key={section.title} id={`service-${si}`} className="reveal scroll-mt-28">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl tracking-[-0.02em] text-deepspace mb-6 md:mb-8">
                    {section.title}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6 md:gap-10 mb-8">
                    <div>
                      <p className="section-label mb-2">{t.caseStudy.discover}</p>
                      <p className="text-sm md:text-base text-deepspace/70 font-light leading-relaxed">
                        {section.discover}
                      </p>
                    </div>
                    <div>
                      <p className="section-label mb-2">{t.caseStudy.propose}</p>
                      <p className="text-sm md:text-base text-deepspace/70 font-light leading-relaxed">
                        {section.propose}
                      </p>
                    </div>
                  </div>

                  {section.images && section.images.length > 0 && (
                    <div
                      className={`grid gap-4 md:gap-6 mb-8 ${
                        section.images.length > 1 ? "sm:grid-cols-2" : ""
                      }`}
                    >
                      {section.images.map((src, i) => (
                        <div key={src}>
                          <ProjectImage
                            src={src}
                            alt={`${project.client}: ${section.captions?.[i] ?? section.title}`}
                            onClick={() => openLightbox(src)}
                          />
                          {section.captions?.[i] && (
                            <p className="section-label mt-3">{section.captions[i]}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
                    <div>
                      <p className="section-label mb-2">{t.caseStudy.iterate}</p>
                      <p className="text-sm md:text-base text-deepspace/70 font-light leading-relaxed">
                        {section.iterate}
                      </p>
                    </div>
                    <div>
                      <p className="section-label mb-2">{t.caseStudy.result}</p>
                      <p className="text-sm md:text-base text-deepspace/70 font-light leading-relaxed">
                        {section.result}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* 4. Mobile */}
          {hasPhones && (
            <section id="mobile" className={`reveal ${sectionClass}`}>
              <p className="section-label mb-6">{t.caseStudy.mobilePreview}</p>
              <div className="rounded-card bg-orbit border border-deepspace/10 px-4 sm:px-6 py-10 md:py-14 flex flex-wrap items-end justify-center gap-4 sm:gap-6 md:gap-12">
                {project.phoneImages!.map((src) => (
                  <PhoneShot
                    key={src}
                    src={src}
                    alt={`${project.client}: ${t.caseStudy.mobilePreview}`}
                    onClick={() => openLightbox(src)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* 5. Sitio en vivo: embed interactivo si el proyecto tiene URL real */}
          {project.siteUrl ? (
            <section id="live-site" className={`reveal ${sectionClass}`}>
              <p className="section-label mb-6">{t.caseStudy.visitSite}</p>
              <LiveEmbed
                url={project.siteUrl}
                clientName={project.client}
                fallbackMessage={t.caseStudy.modalFallback}
                openNewTabLabel={t.caseStudy.openNewTab}
              />
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-deepspace/50 hover:text-nebula transition-colors underline underline-offset-4 mt-4"
              >
                {t.caseStudy.openNewTab} ↗
              </a>
            </section>
          ) : (
            <section className="reveal mb-16 md:mb-20">
              <span className="text-sm text-deepspace/40">{t.caseStudy.noSite}</span>
            </section>
          )}

          {/* 6. Deck de ventas: grilla, sin scroll horizontal */}
          {hasDeck && (
            <section id="deck" className={`reveal ${sectionClass}`}>
              <p className="section-label mb-6">{t.caseStudy.deckPreview}</p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {project.deckImages!.map((src) => (
                  <ProjectImage
                    key={src}
                    src={src}
                    alt={`${project.client}: ${t.caseStudy.deckPreview}`}
                    onClick={() => openLightbox(src)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* 7. La transformación: antes/después lado a lado, mismo tamaño */}
          {hasTransformation && (
            <section id="transformation" className={`reveal ${sectionClass}`}>
              <p className="section-label mb-6">{t.caseStudy.transformation}</p>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-4 md:gap-6">
                <div>
                  <ProjectImage
                    src={project.beforeImage!}
                    alt={`${project.client}: ${t.caseStudy.before}`}
                    onClick={() => openLightbox(project.beforeImage!)}
                    tallFrameHeight="h-[320px] md:h-[440px]"
                  />
                  <p className="section-label mt-3">{t.caseStudy.before}</p>
                </div>
                <div>
                  <ProjectImage
                    src={afterSrc}
                    alt={`${project.client}: ${t.caseStudy.after}`}
                    onClick={() => openLightbox(afterSrc)}
                    tallFrameHeight="h-[320px] md:h-[440px]"
                  />
                  <p className="section-label mt-3">{t.caseStudy.after}</p>
                </div>
              </div>
            </section>
          )}

          {/* 8. Resultados y métricas */}
          {hasMetrics && (
            <section id="results" className={`reveal ${sectionClass}`}>
              <p className="section-label mb-6">{t.caseStudy.results}</p>
              <div className="grid grid-cols-2 gap-4">
                {content.metrics!.map((m) => (
                  <div
                    key={m.label}
                    className={
                      m.positive
                        ? "rounded-card border-2 border-positive/30 bg-positive/5 p-6 md:p-8 col-span-2 sm:col-span-1"
                        : "rounded-card border border-deepspace/12 p-6 col-span-2 sm:col-span-1"
                    }
                  >
                    <div
                      className={
                        m.positive
                          ? "font-heading font-bold text-4xl md:text-6xl text-positive mb-2 tracking-tight"
                          : "font-heading font-bold text-2xl md:text-3xl text-deepspace mb-2"
                      }
                    >
                      {m.value}
                    </div>
                    <div className="text-sm text-deepspace/60">{m.label}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 9. Navegación al proyecto siguiente */}
          <section className="reveal pt-10 hairline">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center justify-between gap-6"
            >
              <div>
                <p className="section-label mb-3">{t.caseStudy.nextProject}</p>
                <h3 className="font-heading font-bold text-3xl md:text-4xl text-deepspace group-hover:text-nebula transition-colors duration-300">
                  {nextProject.client}
                </h3>
              </div>
              <span className="shrink-0 text-3xl text-deepspace/40 transition-all duration-300 group-hover:translate-x-2 group-hover:text-nebula">
                →
              </span>
            </Link>
          </section>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
          closeLabel={t.caseStudy.closeModal}
          prevLabel={t.caseStudy.lightboxPrev}
          nextLabel={t.caseStudy.lightboxNext}
        />
      )}
    </div>
  );
}
