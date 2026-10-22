"use client";

import { useLang } from "@/lib/i18n";

export default function Services() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="py-[var(--space-section-y)] md:py-[var(--space-section-y-lg)] px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="section-label block mb-4">{t.services.eyebrow}</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-[-0.02em] text-deepspace">
            {t.services.title}
          </h2>
        </div>

        <div className="hairline">
          {t.services.items.map((item, i) => {
            const isRecurring = i === 1; // LinkedIn Management: único servicio mensual, se destaca con el badge.
            return (
              <a
                key={item.title}
                href="#contact"
                className={`reveal group hairline-b flex items-center justify-between gap-6 py-8 md:py-10 px-3 md:px-4 transition-all duration-300 ease-out hover:translate-x-3 hover:bg-nebula/5 ${
                  isRecurring ? "bg-nebula/5" : ""
                }`}
              >
                <div className="flex items-baseline gap-4 md:gap-8 flex-1">
                  <span className="text-xs md:text-sm text-deepspace/40 font-mono w-8 shrink-0 group-hover:text-nebula transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading font-bold text-xl md:text-3xl tracking-[-0.02em] text-deepspace group-hover:text-nebula transition-colors duration-300">
                        {item.title}
                      </h3>
                      {isRecurring && (
                        <span className="pill border-nebula/40 text-nebula py-1 px-3 text-[10px]">
                          {t.services.recurringBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm md:text-base text-deepspace/60 mt-4 max-w-xl font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-2xl md:text-3xl text-deepspace/40 transition-transform duration-300 group-hover:rotate-45 group-hover:text-nebula">
                  ↗
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
