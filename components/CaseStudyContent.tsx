"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

export default function CaseStudyContent({ project }: { project: Project }) {
  const { t, lang } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);
  const content = project[lang];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const heroSrc = project.webImage ?? project.images[0];
  const afterSrc = project.images[0];

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

    push(heroSrc, `${project.client} — ${content.category}`);
    content.sections.forEach((section) => {
      section.images?.forEach((src) => push(src, `${project.client} — ${section.title}`));
    });
    project.phoneImages?.forEach((src) => push(src, `${project.client} — ${t.caseStudy.mobilePreview}`));
    project.deckImages?.forEach((src) => push(src, `${project.client} — ${t.caseStudy.deckPreview}`));
    push(project.beforeImage, `${project.client} — ${t.caseStudy.before}`);
    push(afterSrc, `${project.client} — ${t.caseStudy.after}`);

    return items;
  }, [project, content, heroSrc, afterSrc, t.caseStudy]);

  const openLightbox = (src: string) => {
    const i = gallery.findIndex((g) => g.src === src);
    if (i >= 0) setLightboxIndex(i);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(".case-fade");

      if (prefersReducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [project.slug, lang]);

  const metadataItems = [
    { label: t.caseStudy.client, value: project.client },
    { label: t.caseStudy.industry, value: content.industry },
    { label: t.caseStudy.services, value: content.services.join(", ") },
    { label: t.caseStudy.year, value: project.year },
  ];

  return (
    <div
      ref={rootRef}
      className="max-w-[780px] mx-auto px-6 md:px-8 pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <Link
        href="/#work"
        className="case-fade opacity-0 inline-flex items-center gap-2 text-sm text-deepspace/60 hover:text-nebula transition-colors mb-16 md:mb-20"
      >
        ← {t.caseStudy.back}
      </Link>

      {/* 1. Encabezado */}
      <section className="case-fade opacity-0 mb-16 md:mb-20">
        <p className="section-label mb-4">
          {content.category} · {project.year}
        </p>
        <h1 className="font-heading font-bold text-4xl md:text-6xl tracking-[-0.02em] text-deepspace mb-6">
          {project.client}
        </h1>
        <p className="text-base md:text-lg text-deepspace/70 font-light leading-relaxed max-w-xl">
          {content.description}
        </p>
      </section>

      {/* 2. Hero: primer vistazo grande al trabajo, sin recortar */}
      {heroSrc && (
        <section className="case-fade opacity-0 mb-16 md:mb-20">
          <ProjectImage
            src={heroSrc}
            alt={`${project.client} — ${content.category}`}
            preload
            onClick={() => openLightbox(heroSrc)}
          />
        </section>
      )}

      <div className="case-fade opacity-0 grid grid-cols-2 md:grid-cols-[0.8fr_1.2fr_1.6fr_0.6fr] gap-x-8 gap-y-6 py-8 mb-20 md:mb-28 hairline hairline-b">
        {metadataItems.map((item, i) => (
          <div
            key={item.label}
            className={i > 0 ? "md:pl-8 md:border-l md:border-deepspace/10" : ""}
          >
            <div className="section-label mb-2">{item.label}</div>
            <div className="text-sm text-deepspace/80">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* 3. El desafío (Discovery) */}
      <section className="case-fade opacity-0 mb-20 md:mb-28">
        <p className="section-label mb-6">{t.caseStudy.challenge}</p>
        <p className="text-lg md:text-xl text-deepspace/80 font-light leading-relaxed">
          {content.challenge}
        </p>
      </section>

      {/* 4. Relato por servicio: texto y foto siempre juntos, sin acordeón */}
      <section className="case-fade opacity-0 mb-20 md:mb-28">
        <p className="section-label mb-10 md:mb-14">{t.caseStudy.whatWeDid}</p>
        <div className="space-y-16 md:space-y-24">
          {content.sections.map((section) => (
            <div key={section.title}>
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
                  {section.images.map((src) => (
                    <ProjectImage
                      key={src}
                      src={src}
                      alt={`${project.client} — ${section.title}`}
                      onClick={() => openLightbox(src)}
                    />
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
            </div>
          ))}
        </div>
      </section>

      {/* 5. Mobile */}
      {project.phoneImages && project.phoneImages.length > 0 && (
        <section className="case-fade opacity-0 mb-20 md:mb-28">
          <p className="section-label mb-6">{t.caseStudy.mobilePreview}</p>
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md">
            {project.phoneImages.map((src) => (
              <ProjectImage
                key={src}
                src={src}
                alt={`${project.client} — ${t.caseStudy.mobilePreview}`}
                onClick={() => openLightbox(src)}
              />
            ))}
          </div>
        </section>
      )}

      {/* 6. Sitio en vivo: embed interactivo si el proyecto tiene URL real */}
      {project.siteUrl ? (
        <section className="case-fade opacity-0 mb-20 md:mb-28">
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
        <section className="case-fade opacity-0 mb-16 md:mb-20">
          <span className="text-sm text-deepspace/40">{t.caseStudy.noSite}</span>
        </section>
      )}

      {/* 7. Deck de ventas */}
      {project.deckImages && project.deckImages.length > 0 && (
        <section className="case-fade opacity-0 mb-20 md:mb-28">
          <p className="section-label mb-6">{t.caseStudy.deckPreview}</p>
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0">
            {project.deckImages.map((src) => (
              <div key={src} className="shrink-0 w-[280px] md:w-[360px]">
                <ProjectImage
                  src={src}
                  alt={`${project.client} — ${t.caseStudy.deckPreview}`}
                  onClick={() => openLightbox(src)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. La transformación: antes/después lado a lado, mismo tamaño */}
      {project.beforeImage && afterSrc && (
        <section className="case-fade opacity-0 mb-20 md:mb-28">
          <p className="section-label mb-6">{t.caseStudy.transformation}</p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-4 md:gap-6">
            <div>
              <ProjectImage
                src={project.beforeImage}
                alt={`${project.client} — ${t.caseStudy.before}`}
                onClick={() => openLightbox(project.beforeImage!)}
                tallFrameHeight="h-[320px] md:h-[440px]"
              />
              <p className="section-label mt-3">{t.caseStudy.before}</p>
            </div>
            <div>
              <ProjectImage
                src={afterSrc}
                alt={`${project.client} — ${t.caseStudy.after}`}
                onClick={() => openLightbox(afterSrc)}
                tallFrameHeight="h-[320px] md:h-[440px]"
              />
              <p className="section-label mt-3">{t.caseStudy.after}</p>
            </div>
          </div>
        </section>
      )}

      {/* 9. Resultados y métricas */}
      {content.metrics && content.metrics.length > 0 && (
        <section className="case-fade opacity-0 mb-20 md:mb-28">
          <p className="section-label mb-6">{t.caseStudy.results}</p>
          <div className="grid grid-cols-2 gap-4">
            {content.metrics.map((m) => (
              <div
                key={m.label}
                className={
                  m.positive
                    ? "rounded-card border-2 border-positive/30 bg-positive/5 p-6 md:p-8 col-span-2 sm:col-span-1"
                    : "rounded-card border border-deepspace/12 p-6"
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

      {/* 10. Navegación al proyecto siguiente */}
      <section className="case-fade opacity-0 pt-10 hairline">
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
