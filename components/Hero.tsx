"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "@/lib/i18n";
import { scrollToSection } from "@/components/SmoothScroll";
import { OrbitRing } from "@/components/graphics/SpaceElements";

export default function Hero() {
  const { t } = useLang();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set([".hero-word", ".hero-fade"], { opacity: 1, y: 0 });
        return;
      }

      const words = headlineRef.current?.querySelectorAll(".hero-word");
      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.04, ease: "power3.out", delay: 0.1 }
        );
      }
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power2.out", delay: 0.5 }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = t.hero.headline.split(" ");

  return (
    <section
      ref={rootRef}
      className="relative pt-[var(--space-hero-top)] pb-[var(--space-hero-bottom)] md:pt-[var(--space-hero-top-lg)] md:pb-[var(--space-hero-bottom-lg)] px-6 md:px-8 overflow-hidden"
    >
      <OrbitRing className="hidden md:block absolute top-10 right-0 w-40 h-40 text-nebula/60" />

      <div className="max-w-6xl mx-auto">
        <p className="hero-fade pill mb-8 opacity-0">{t.hero.eyebrow}</p>

        <h1
          ref={headlineRef}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-[-0.02em] md:tracking-[-0.03em] text-deepspace max-w-3xl"
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="hero-word inline-block opacity-0 mr-[0.25em]">
              {word}
            </span>
          ))}
        </h1>

        <p className="hero-fade opacity-0 mt-8 text-base md:text-lg text-deepspace/70 max-w-xl font-light leading-relaxed">
          {t.hero.sub}
        </p>

        <div className="hero-fade opacity-0 mt-10">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#work");
            }}
            className="btn-primary inline-block px-8 py-3.5 text-sm"
          >
            {t.hero.cta2}
          </a>
        </div>

        <div className="hero-fade opacity-0 mt-16 md:mt-24 grid grid-cols-3 gap-4 md:gap-6 max-w-xl">
          {t.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-card border border-deepspace/10 bg-orbit/60 px-4 py-5 md:px-6 md:py-7"
            >
              <div className="font-heading font-bold text-2xl md:text-4xl text-nebula tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-deepspace/60 mt-2 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
