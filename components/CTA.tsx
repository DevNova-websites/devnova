"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n";
import { ShootingStar } from "@/components/graphics/SpaceElements";

export default function CTA() {
  const { t } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".cta-scale", { opacity: 1, y: 0, scale: 1 });
        return;
      }
      gsap.fromTo(
        ".cta-scale",
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="px-6 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <div className="cta-scale opacity-0 relative overflow-hidden rounded-card bg-deepspace text-stardust px-8 py-[var(--space-cta-y)] md:px-16 md:py-[var(--space-cta-y-lg)] text-center">
          <ShootingStar className="hidden md:block absolute top-8 right-10 w-24 h-10 text-stardust/40" />
          <h2 className="font-heading font-bold text-3xl md:text-6xl tracking-[-0.03em] max-w-3xl mx-auto mb-6">
            {t.finalCta.title}
          </h2>
          <p className="text-stardust/70 font-light text-base md:text-lg max-w-xl mx-auto mb-10">
            {t.finalCta.sub}
          </p>
          <a href="#contact" className="btn-light inline-block px-8 py-4 text-sm">
            {t.finalCta.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
