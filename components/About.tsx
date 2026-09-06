"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";

export default function About() {
  const { t } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".about-fade", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        ".about-fade",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  return (
    <section
      id="about"
      ref={rootRef}
      className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
        <div className="about-fade opacity-0">
          <p className="section-label block mb-16">{t.about.eyebrow}</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace">
            {t.about.title}
          </h2>
        </div>
        <div className="about-fade opacity-0 space-y-6">
          <p className="text-base md:text-lg text-deepspace/70 font-light leading-relaxed">{t.about.p1}</p>
          <p className="text-base md:text-lg text-deepspace/70 font-light leading-relaxed">{t.about.p2}</p>
          <p className="text-base md:text-lg text-deepspace/70 font-light leading-relaxed">{t.about.p3}</p>
        </div>
      </div>
    </section>
  );
}
