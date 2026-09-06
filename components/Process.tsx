"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";
import { OrbitDots } from "@/components/graphics/SpaceElements";
import { DoubleDiamond } from "@/components/graphics/DoubleDiamond";

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
        gsap.set([".process-diagram", ".process-step", ".process-agile"], {
          opacity: 1,
          y: 0,
        });
        return;
      }
      gsap.fromTo(
        ".process-diagram",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
        }
      );
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
      gsap.fromTo(
        ".process-agile",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 60%" },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [t.process.steps]);

  const stepTitles = t.process.steps.map((s) => s.title) as [
    string,
    string,
    string,
    string,
  ];

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
        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace mb-4">
          {t.process.title}
        </h2>
        <p className="text-deepspace/60 font-light max-w-lg mb-14 md:mb-20">
          {t.process.subtitle}
        </p>

        <div className="process-diagram opacity-0 max-w-2xl mx-auto mb-16 md:mb-20">
          <DoubleDiamond labels={stepTitles} className="text-deepspace" />
        </div>

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

        <div className="process-agile opacity-0 mt-16 md:mt-20 rounded-card border border-deepspace/12 bg-orbit/50 px-8 py-10 md:px-12 md:py-12">
          <h3 className="font-heading font-bold text-xl md:text-2xl tracking-[-0.02em] text-deepspace mb-4">
            {t.process.agile.title}
          </h3>
          <p className="text-sm md:text-base text-deepspace/70 font-light leading-relaxed max-w-2xl">
            {t.process.agile.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
