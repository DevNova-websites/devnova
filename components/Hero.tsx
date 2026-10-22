"use client";

import { CSSProperties } from "react";
import { useLang } from "@/lib/i18n";
import HeroShowcase from "@/components/graphics/HeroShowcase";

// Las animaciones de entrada son CSS puro (.hero-in en globals.css): arrancan
// en el primer pintado, sin esperar a que cargue el JS. --d escalona cada bloque.
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export default function Hero() {
  const { t } = useLang();

  const headlineLines = t.hero.headline.split("\n");
  let wordIndex = 0;

  return (
    <section className="relative pt-[var(--space-hero-top)] pb-[var(--space-hero-bottom)] md:pt-[var(--space-hero-top-lg)] md:pb-[var(--space-hero-bottom-lg)] px-6 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.05fr_0.95fr] gap-14 md:gap-12 items-center">
        <div>
        <p className="hero-in pill mb-8" style={delay(0)}>{t.hero.eyebrow}</p>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-[2.6rem] lg:text-[3.4rem] leading-[1.08] tracking-[-0.02em] md:tracking-[-0.03em] text-deepspace max-w-3xl text-balance">
          {headlineLines.map((line, li) => (
            <span key={li} className="block">
              {line.split(" ").map((word, wi) => (
                <span
                  key={wi}
                  className="hero-in inline-block mr-[0.25em]"
                  style={delay(0.1 + 0.04 * wordIndex++)}
                >
                  {word}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p
          className="hero-in mt-8 text-base md:text-lg text-deepspace/70 max-w-xl font-light leading-relaxed"
          style={delay(0.5)}
        >
          {t.hero.sub}
        </p>

        <div className="hero-in mt-10 flex flex-wrap gap-3" style={delay(0.58)}>
          <a href="#work" className="btn-primary inline-block px-8 py-3.5 text-sm">
            {t.hero.cta2}
          </a>
          <a href="#contact" className="btn-secondary inline-block px-8 py-3.5 text-sm">
            {t.hero.cta1}
          </a>
        </div>

        <div className="hero-in mt-10 flex flex-wrap gap-x-10 gap-y-4" style={delay(0.66)}>
          {t.hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading font-bold text-2xl md:text-3xl tracking-[-0.02em] text-deepspace">
                {stat.value}
              </p>
              <p className="text-xs text-deepspace/55 mt-1 max-w-[11rem]">{stat.label}</p>
            </div>
          ))}
        </div>

        </div>

        <div className="hero-in pb-8" style={delay(0.5)}>
          <HeroShowcase caption={t.hero.showcaseCaption} />
        </div>
      </div>
    </section>
  );
}
