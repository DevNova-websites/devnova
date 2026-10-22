"use client";

import { useLang } from "@/lib/i18n";
import { ShootingStar } from "@/components/graphics/SpaceElements";

export default function CTA() {
  const { t } = useLang();

  return (
    <section className="px-6 md:px-8 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <div className="reveal relative overflow-hidden rounded-card bg-deepspace text-stardust px-8 py-[var(--space-cta-y)] md:px-16 md:py-[var(--space-cta-y-lg)] text-center">
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
