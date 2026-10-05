"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";
import { projects } from "@/data/projects";

// Home: Norfalk como caso destacado + grilla con el resto de los casos, todos
// con su screenshot real (sale de webImage en data/projects.ts).
export default function Work() {
  const { t, lang } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".work-fade", { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".work-fade",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const featured = t.work.featured;
  const norfalk = projects.find((p) => p.slug === "norfalk");
  const others = projects.filter((p) => p.slug !== "norfalk");

  return (
    <section
      id="work"
      ref={rootRef}
      className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8 bg-orbit"
    >
      <div className="max-w-6xl mx-auto">
        <p className="work-fade opacity-0 section-label block mb-4">{t.work.eyebrow}</p>
        <h2 className="work-fade opacity-0 font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace mb-12 md:mb-16">
          {t.work.title}
        </h2>

        {/* Caso destacado */}
        {norfalk && (
          <Link
            href="/work/norfalk"
            className="work-fade opacity-0 group grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-center rounded-card border border-deepspace/10 bg-stardust p-6 md:p-10 transition-colors hover:border-nebula/40"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="pill border-nebula/40 text-nebula">{featured.tag}</span>
                <span className="text-sm text-deepspace/50">{featured.location}</span>
              </div>
              <h3 className="font-heading font-bold text-3xl md:text-4xl tracking-[-0.02em] text-deepspace mb-4 group-hover:text-nebula transition-colors">
                {featured.client}
              </h3>
              <p className="text-deepspace/70 font-light leading-relaxed mb-6">{featured.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.scope.map((s) => (
                  <span
                    key={s}
                    className="text-xs uppercase tracking-wide px-3 py-1.5 rounded-pill border border-nebula/30 text-nebula bg-nebula/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-8">
                <div>
                  <div className="section-label mb-1">{featured.linkedinBefore}</div>
                  <div className="text-negative font-heading font-bold text-base leading-snug">
                    {featured.linkedinBeforeStat}
                  </div>
                </div>
                <div>
                  <div className="section-label mb-1">{featured.linkedinAfter}</div>
                  <div className="text-positive font-heading font-bold text-base leading-snug">
                    {featured.linkedinAfterStat}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[16/10] rounded-card overflow-hidden border border-deepspace/12">
                <Image
                  src={norfalk.webImage ?? norfalk.images[0]}
                  alt={norfalk.client}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              {norfalk.phoneImages?.[0] && (
                <div className="absolute -bottom-6 -right-3 md:-right-6 w-[20%] aspect-[9/19] rounded-[1rem] overflow-hidden border-4 border-deepspace bg-deepspace shadow-xl">
                  <Image
                    src={norfalk.phoneImages[0]}
                    alt={`${norfalk.client} mobile`}
                    fill
                    sizes="120px"
                    className="object-cover object-top"
                  />
                </div>
              )}
            </div>
          </Link>
        )}

        {/* Resto de los casos */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
          {others.map((project) => {
            const content = project[lang];
            const img = project.webImage ?? project.images[0];
            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="work-fade opacity-0 group block rounded-card border border-deepspace/10 bg-stardust overflow-hidden transition-colors hover:border-nebula/40"
              >
                {img && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-deepspace/10">
                    <Image
                      src={img}
                      alt={project.client}
                      fill
                      sizes="(max-width: 640px) 100vw, 560px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="p-6 md:p-7">
                  <p className="section-label mb-2">{content.category}</p>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading font-bold text-xl md:text-2xl tracking-[-0.02em] text-deepspace group-hover:text-nebula transition-colors">
                      {project.client}
                    </h3>
                    <span className="shrink-0 text-sm text-deepspace/50 group-hover:text-nebula transition-colors">
                      {t.work.viewCase} ↗
                    </span>
                  </div>
                  <p className="text-sm text-deepspace/60 mt-3 font-light leading-relaxed">
                    {content.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="work-fade opacity-0 mt-12 md:mt-16 text-center">
          <Link href="/work" className="btn-secondary inline-block px-8 py-3.5 text-sm">
            {t.work.viewMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
