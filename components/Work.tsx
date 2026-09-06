"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";
import { LaptopMockup, PhoneMockup } from "@/components/graphics/DeviceMockups";

export default function Work() {
  const { t } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);
  const laptopContentRef = useRef<HTMLDivElement>(null);

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
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
          },
        }
      );

      // Efecto de scroll interno sutil dentro del mockup de laptop (parallax).
      if (laptopContentRef.current) {
        gsap.to(laptopContentRef.current, {
          y: "-22%",
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const featured = t.work.featured;

  return (
    <section
      id="work"
      ref={rootRef}
      className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8 bg-orbit"
    >
      <div className="max-w-6xl mx-auto">
        <p className="work-fade opacity-0 section-label block mb-16">{t.work.eyebrow}</p>
        <h2 className="work-fade opacity-0 font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace mb-12 md:mb-16">
          {t.work.title}
        </h2>

        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16 items-start">
          <div className="work-fade opacity-0">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="pill border-nebula/40 text-nebula">{featured.tag}</span>
              <span className="text-sm text-deepspace/50">{featured.location}</span>
            </div>
            <h3 className="font-heading font-bold text-3xl md:text-5xl tracking-[-0.02em] text-deepspace mb-6">
              {featured.client}
            </h3>
            <p className="text-deepspace/70 max-w-xl font-light leading-relaxed mb-8">
              {featured.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {featured.scope.map((s) => (
                <span
                  key={s}
                  className="text-xs uppercase tracking-wide px-3 py-1.5 rounded-pill border border-nebula/30 text-nebula bg-nebula/5"
                >
                  {s}
                </span>
              ))}
            </div>

            <LaptopMockup ref={laptopContentRef} label={t.work.screenshotLabel} />
          </div>

          <div className="work-fade opacity-0 md:pt-24">
            <div className="flex flex-col sm:flex-row gap-8 sm:items-end">
              <div className="flex gap-4">
                <PhoneMockup label={featured.linkedinBeforeLabel} />
                <PhoneMockup label={featured.linkedinAfterLabel} />
              </div>
              <div className="flex sm:flex-col gap-6 sm:gap-4">
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
          </div>
        </div>

        <div className="work-fade opacity-0 mt-16 md:mt-20 text-center">
          <Link href="/work" className="btn-secondary inline-block px-8 py-3.5 text-sm">
            {t.work.viewMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
