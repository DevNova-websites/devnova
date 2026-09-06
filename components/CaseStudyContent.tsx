"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";
import { projects, type Project } from "@/data/projects";

function ImageSlot({
  src,
  ratio,
  label,
}: {
  src?: string;
  ratio: string;
  label: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-card bg-orbit"
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image src={src} alt="" fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs uppercase tracking-wide text-deepspace/40">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export default function CaseStudyContent({ project }: { project: Project }) {
  const { t, lang } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);
  const content = project[lang];

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const lighthouseMetrics =
    content.metrics?.filter((m) => m.label.toLowerCase().includes("lighthouse")) ?? [];

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

      <div className="case-fade opacity-0 flex flex-wrap gap-x-8 gap-y-6 py-8 mb-20 md:mb-28 hairline hairline-b">
        {metadataItems.map((item, i) => (
          <div
            key={item.label}
            className={i > 0 ? "pl-8 border-l border-deepspace/10" : ""}
          >
            <div className="section-label mb-2">{item.label}</div>
            <div className="text-sm text-deepspace/80 max-w-[220px]">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <section className="case-fade opacity-0 mb-20 md:mb-28">
        <p className="section-label mb-6">{t.caseStudy.challenge}</p>
        <p className="text-lg md:text-xl text-deepspace/80 font-light leading-relaxed">
          {content.challenge}
        </p>
      </section>

      {project.beforeImage && (
        <section className="case-fade opacity-0 mb-20 md:mb-28">
          <p className="section-label mb-6">{t.caseStudy.transformation}</p>
          <div className="space-y-4">
            <div className="relative w-full overflow-hidden rounded-card bg-orbit" style={{ aspectRatio: "16/9" }}>
              <Image
                src={project.beforeImage}
                alt={t.caseStudy.before}
                fill
                className="object-cover grayscale"
              />
              <span className="absolute top-4 left-4 rounded-full bg-deepspace/85 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-white">
                {t.caseStudy.before}
              </span>
            </div>

            <div className="relative w-full overflow-hidden rounded-card bg-orbit" style={{ aspectRatio: "16/9" }}>
              {project.images[0] ? (
                <Image
                  src={project.images[0]}
                  alt={t.caseStudy.after}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-wide text-deepspace/40">
                    {t.caseStudy.imagePlaceholder}
                  </span>
                </div>
              )}
              <span className="absolute top-4 left-4 rounded-full bg-nebula px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-white">
                {t.caseStudy.after}
              </span>
            </div>

            {lighthouseMetrics.length > 0 && (
              <div className="grid grid-cols-2 gap-4 pt-2">
                {lighthouseMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-card border border-deepspace/12 p-6"
                  >
                    <div className="font-heading font-bold text-2xl md:text-3xl text-deepspace mb-2">
                      {m.value}
                    </div>
                    <div className="text-sm text-deepspace/60">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="case-fade opacity-0 mb-20 md:mb-28">
        <p className="section-label mb-6">{t.caseStudy.whatWeDid}</p>
        <div className="space-y-8">
          {content.deliverables.map((d) => (
            <div key={d.title} className="hairline pt-6">
              <h3 className="font-heading font-bold text-xl text-deepspace mb-2">
                {d.title}
              </h3>
              <p className="text-sm md:text-base text-deepspace/60 font-light leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-fade opacity-0 mb-20 md:mb-28 space-y-4">
        <ImageSlot
          src={project.images[0]}
          ratio="16/9"
          label={t.caseStudy.imagePlaceholder}
        />
        <div className="grid grid-cols-2 gap-4">
          <ImageSlot
            src={project.images[1]}
            ratio="4/3"
            label={t.caseStudy.imagePlaceholder}
          />
          <ImageSlot
            src={project.images[2]}
            ratio="4/3"
            label={t.caseStudy.imagePlaceholder}
          />
        </div>
      </section>

      {content.metrics && content.metrics.length > 0 && (
        <section className="case-fade opacity-0 mb-20 md:mb-28">
          <p className="section-label mb-6">{t.caseStudy.results}</p>
          <div className="grid grid-cols-2 gap-4">
            {content.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-card border border-deepspace/12 p-6"
              >
                <div className="font-heading font-bold text-2xl md:text-3xl text-deepspace mb-2">
                  {m.value}
                </div>
                <div className="text-sm text-deepspace/60">{m.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

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
    </div>
  );
}
