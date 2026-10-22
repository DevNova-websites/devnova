"use client";

import { useLang } from "@/lib/i18n";

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
        <div className="reveal">
          <p className="section-label block mb-4">{t.about.eyebrow}</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace">
            {t.about.title}
          </h2>
        </div>
        <div className="reveal space-y-6">
          <p className="text-base md:text-lg text-deepspace/70 font-light leading-relaxed">{t.about.p1}</p>
          <p className="text-base md:text-lg text-deepspace/70 font-light leading-relaxed">{t.about.p2}</p>

          <div className="rounded-card border border-deepspace/12 bg-orbit/50 px-6 py-8 md:px-8 md:py-9 mt-8">
            <h3 className="font-heading font-bold text-xl md:text-2xl tracking-[-0.02em] text-deepspace mb-3">
              {t.about.ecosystem.title}
            </h3>
            <p className="text-sm md:text-base text-deepspace/70 font-light leading-relaxed">
              {t.about.ecosystem.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
