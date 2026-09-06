"use client";

import { forwardRef } from "react";

// Frames de dispositivo en línea, color plano (sin fotos de stock ni gradientes).
// El contenido interno es siempre un placeholder marcado hasta que el equipo
// cargue el screenshot real — ver TODO-DEVNOVA en Work.tsx.

function WireframeBlocks() {
  return (
    <div className="absolute inset-0 flex flex-col gap-3 p-4">
      <div className="h-3 w-1/3 rounded-full bg-deepspace/15" />
      <div className="h-24 md:h-32 w-full rounded-md bg-deepspace/10" />
      <div className="h-3 w-2/3 rounded-full bg-deepspace/15" />
      <div className="h-3 w-1/2 rounded-full bg-deepspace/10" />
      <div className="grid grid-cols-3 gap-2 mt-1">
        <div className="h-14 rounded-md bg-deepspace/10" />
        <div className="h-14 rounded-md bg-deepspace/10" />
        <div className="h-14 rounded-md bg-deepspace/10" />
      </div>
      <div className="h-3 w-2/5 rounded-full bg-deepspace/15" />
      <div className="h-20 w-full rounded-md bg-deepspace/10" />
    </div>
  );
}

export const LaptopMockup = forwardRef<HTMLDivElement, { label: string }>(
  function LaptopMockup({ label }, contentRef) {
    return (
      <div className="w-full max-w-md">
        <div className="relative rounded-t-xl border-2 border-dashed border-deepspace/30 bg-orbit/60 aspect-[16/10] overflow-hidden">
          <div ref={contentRef} className="absolute inset-0 h-[140%]">
            <WireframeBlocks />
          </div>
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wide text-deepspace/40 bg-stardust/80 px-2.5 py-1 rounded-full">
            {label}
          </span>
        </div>
        <div className="h-2.5 md:h-3 mx-[6%] rounded-b-md bg-deepspace/25" />
      </div>
    );
  }
);

export function PhoneMockup({ label }: { label: string }) {
  return (
    <div className="relative w-24 md:w-28 aspect-[9/19] rounded-[1.25rem] border-2 border-dashed border-deepspace/30 bg-orbit/60 overflow-hidden shrink-0">
      <div className="absolute inset-0 flex flex-col gap-2 p-2.5">
        <div className="h-6 w-6 rounded-full bg-deepspace/15 mx-auto" />
        <div className="h-2 w-3/4 mx-auto rounded-full bg-deepspace/15" />
        <div className="h-16 w-full rounded-md bg-deepspace/10 mt-1" />
        <div className="h-16 w-full rounded-md bg-deepspace/10" />
      </div>
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-wide text-deepspace/40 bg-stardust/80 px-1.5 py-0.5 rounded-full whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
