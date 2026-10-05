"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "@/lib/i18n";
import { scrollToSection } from "@/components/SmoothScroll";
import HeroShowcase from "@/components/graphics/HeroShowcase";

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

  const headlineLines = t.hero.headline.split("\n");

  return (
    <section
      ref={rootRef}
      className="relative pt-[var(--space-hero-top)] pb-[var(--space-hero-bottom)] md:pt-[var(--space-hero-top-lg)] md:pb-[var(--space-hero-bottom-lg)] px-6 md:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.05fr_0.95fr] gap-14 md:gap-12 items-center">
        <div>
        <p className="hero-fade pill mb-8 opacity-0">{t.hero.eyebrow}</p>

        <h1
          ref={headlineRef}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-[2.6rem] lg:text-[3.4rem] leading-[1.08] tracking-[-0.02em] md:tracking-[-0.03em] text-deepspace max-w-3xl"
        >
          {headlineLines.map((line, li) => (
            <span key={li} className="block">
              {line.split(" ").map((word, wi) => (
                <span key={wi} className="hero-word inline-block opacity-0 mr-[0.25em]">
                  {word}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="hero-fade opacity-0 mt-8 text-base md:text-lg text-deepspace/70 max-w-xl font-light leading-relaxed">
          {t.hero.sub}
        </p>

        <div className="hero-fade opacity-0 mt-10 flex flex-wrap gap-3">
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
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="btn-secondary inline-block px-8 py-3.5 text-sm"
          >
            {t.hero.cta1}
          </a>
        </div>

        </div>

        <div className="hero-fade opacity-0 pb-8">
          <HeroShowcase caption={t.hero.showcaseCaption} />
        </div>
      </div>
    </section>
  );
}
