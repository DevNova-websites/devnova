"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "@/lib/i18n";

export default function Marquee() {
  const { t } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !trackRef.current) return;

    const track = trackRef.current;
    const halfWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -halfWidth,
      duration: 22,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [t.marquee]);

  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="hairline hairline-b py-6 md:py-8 overflow-hidden bg-orbit">
      <div ref={trackRef} className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center shrink-0 gap-8 md:gap-14 px-4 md:px-7">
            <span className="font-heading font-bold text-2xl md:text-4xl text-deepspace/80 tracking-tight whitespace-nowrap">
              {item}
            </span>
            <span className="text-nebula text-2xl md:text-4xl">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
