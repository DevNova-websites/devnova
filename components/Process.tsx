"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";

export default function Process() {
  const { t } = useLang();

  return (
    <section
      id="process"
      className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label block mb-4">{t.process.eyebrow}</p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace mb-4">
          {t.process.title}
        </h2>
        <p className="text-deepspace/60 font-light max-w-lg mb-14 md:mb-20">
          {t.process.subtitle}
        </p>

        <div className="reveal hidden md:block max-w-2xl mx-auto mb-20">
          <Image
            src="/imagenes/double-diamond.png"
            alt="Double Diamond"
            width={1400}
            height={737}
            className="w-full h-auto"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-10">
          {t.process.steps.map((step) => (
            <div key={step.number} className="reveal hairline pt-6">
              <span className="text-sm text-saturn font-heading font-bold">{step.number}</span>
              <h3 className="font-heading font-bold text-2xl tracking-[-0.02em] text-deepspace mt-3 mb-4">
                {step.title}
              </h3>
              <p className="text-sm text-deepspace/60 font-light leading-[1.6]">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 md:mt-20 rounded-card border border-deepspace/12 bg-orbit/50 px-8 py-10 md:px-12 md:py-12">
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
