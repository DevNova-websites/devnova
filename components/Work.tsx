"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";

const otherSlugs = ["gisela-estetica", "teatro-abasto", "samuray-bjj"];

export default function Work() {
  const { t } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".work-card", { opacity: 1, scale: 1 });
        return;
      }
      gsap.fromTo(
        ".work-card",
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [t.work.others]);

  return (
    <section
      id="work"
      ref={rootRef}
      className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8 bg-orbit"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label block mb-16">{t.work.eyebrow}</p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace mb-12 md:mb-16">
          {t.work.title}
        </h2>

        <Link
          href="/work/norfalk"
          className="work-card opacity-0 cursor-pointer rounded-card bg-deepspace text-stardust p-10 md:p-16 min-h-[420px] flex flex-col justify-center mb-10 md:mb-12 transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="pill border-nebula/40 text-nebula">{t.work.featured.tag}</span>
            <span className="text-sm text-stardust/50">{t.work.featured.location}</span>
          </div>
          <h3 className="font-heading font-bold text-3xl md:text-5xl tracking-[-0.02em] mb-6">
            {t.work.featured.client}
          </h3>
          <p className="text-stardust/70 max-w-2xl font-light leading-relaxed mb-8">
            {t.work.featured.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {t.work.featured.scope.map((s) => (
              <span
                key={s}
                className="text-xs uppercase tracking-wide px-3 py-1.5 rounded-pill border border-nebula/30 text-nebula bg-nebula/10"
              >
                {s}
              </span>
            ))}
          </div>
        </Link>

        <div className="grid md:grid-cols-3 gap-6">
          {t.work.others.map((project, i) => (
            <Link
              key={project.client}
              href={`/work/${otherSlugs[i]}`}
              className="work-card opacity-0 cursor-pointer rounded-card border border-deepspace/12 bg-stardust p-7 md:p-8 min-h-[200px] flex flex-col justify-center hover:border-nebula/40 transition-colors duration-300"
            >
              <h3 className="font-heading font-bold text-xl tracking-[-0.02em] text-deepspace mb-3">
                {project.client}
              </h3>
              <p className="text-sm text-deepspace/60 font-light leading-relaxed mb-5">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.scope.map((s) => (
                  <span
                    key={s}
                    className="text-xs uppercase tracking-wide px-3 py-1 rounded-pill border border-nebula/30 text-nebula bg-nebula/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
