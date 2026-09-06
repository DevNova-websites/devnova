"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";
import { OrbitDots } from "@/components/graphics/SpaceElements";

export default function Process() {
  const { t } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".process-step", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        ".process-step",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [t.process.steps]);

  return (
    <section
      id="process"
      ref={rootRef}
      className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <p className="section-label block">{t.process.eyebrow}</p>
          <OrbitDots className="text-nebula/50" />
        </div>
        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace mb-12 md:mb-16">
          {t.process.title}
        </h2>

        <div className="grid md:grid-cols-4 gap-12 md:gap-10">
          {t.process.steps.map((step) => (
            <div key={step.number} className="process-step opacity-0 hairline pt-6">
              <span className="text-sm text-saturn font-heading font-bold">{step.number}</span>
              <h3 className="font-heading font-bold text-2xl tracking-[-0.02em] text-deepspace mt-3 mb-4">
                {step.title}
              </h3>
              <p className="text-sm text-deepspace/60 font-light leading-[1.6]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
