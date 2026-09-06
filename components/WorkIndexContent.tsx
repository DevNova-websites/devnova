"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";
import { projects } from "@/data/projects";

export default function WorkIndexContent() {
  const { t, lang } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".index-row", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        ".index-row",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 85%" },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <div ref={rootRef} className="max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-deepspace/60 hover:text-nebula transition-colors mb-12 md:mb-16"
      >
        ← {t.work.allWork.back}
      </Link>

      <p className="section-label block mb-16">{t.work.allWork.eyebrow}</p>
      <h1 className="font-heading font-bold text-4xl md:text-6xl tracking-[-0.02em] text-deepspace mb-16 md:mb-20">
        {t.work.allWork.title}
      </h1>

      <div className="hairline">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="index-row opacity-0 group hairline-b flex items-center justify-between gap-6 py-9 md:py-12 px-4 -mx-4 transition-all duration-300 ease-out hover:translate-x-3 hover:bg-nebula/5"
          >
            <div className="flex items-baseline gap-4 md:gap-8 flex-1">
              <span className="text-xs md:text-sm text-deepspace/40 font-mono w-8 shrink-0 group-hover:text-nebula transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-heading font-bold text-xl md:text-3xl tracking-[-0.02em] text-deepspace group-hover:text-nebula transition-colors duration-300">
                  {project.client}
                </h2>
                <p className="text-sm md:text-base text-deepspace/60 mt-3 max-w-xl font-light leading-relaxed hidden md:block">
                  {project[lang].description}
                </p>
              </div>
            </div>
            <span className="shrink-0 text-sm text-deepspace/50 group-hover:text-nebula transition-colors duration-300 whitespace-nowrap">
              {t.work.viewCase} ↗
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
