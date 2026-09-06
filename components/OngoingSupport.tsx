"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";

export default function OngoingSupport() {
  const { t } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".ongoing-fade", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        ".ongoing-fade",
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
    <section ref={rootRef} className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8 bg-orbit">
      <div className="max-w-6xl mx-auto ongoing-fade opacity-0 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
        <div>
          <p className="section-label block mb-16">{t.ongoing.eyebrow}</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace">
            {t.ongoing.title}
          </h2>
        </div>
        <div>
          <p className="text-base md:text-lg text-deepspace/70 font-light leading-relaxed mb-8">
            {t.ongoing.desc}
          </p>
          <ul className="space-y-3 mb-8">
            {t.ongoing.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm md:text-base text-deepspace/70">
                <span className="text-nebula mt-0.5">•</span>
                {point}
              </li>
            ))}
          </ul>
          <a href="mailto:info@devnova.com" className="btn-primary inline-block px-7 py-3.5 text-sm">
            {t.ongoing.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
