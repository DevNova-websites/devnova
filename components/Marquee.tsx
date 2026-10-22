"use client";

import { useLang } from "@/lib/i18n";

export default function Marquee() {
  const { t } = useLang();

  // Loop CSS puro (.marquee-track en globals.css): la lista va duplicada y se
  // desplaza -50%, así el corte es invisible.
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="hairline hairline-b py-5 md:py-6 overflow-hidden bg-orbit">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center shrink-0 gap-8 md:gap-14 px-4 md:px-7">
            <span className="font-heading font-bold text-xl md:text-3xl text-deepspace/70 tracking-tight whitespace-nowrap">
              {item}
            </span>
            <span className="text-nebula text-xl md:text-3xl">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
