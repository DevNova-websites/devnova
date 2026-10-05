"use client";

import { KeyboardEvent } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { imageDimensions, isTallScreenshot } from "@/data/imageDimensions";

const FALLBACK_DIMENSIONS = { width: 1600, height: 1000 };

// Ventana con scroll propio para capturas de página completa: nada se
// recorta, pero tampoco estira el largo de la página del caso de estudio.
function BrowserChrome() {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-deepspace/10 bg-stardust shrink-0">
      <span className="w-2 h-2 rounded-full bg-deepspace/15" />
      <span className="w-2 h-2 rounded-full bg-deepspace/15" />
      <span className="w-2 h-2 rounded-full bg-deepspace/15" />
    </div>
  );
}

export function ProjectImage({
  src,
  alt,
  onClick,
  preload = false,
  sizes = "(max-width: 768px) 100vw, 780px",
  className = "",
  tallFrameHeight = "h-[360px] md:h-[520px]",
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  preload?: boolean;
  sizes?: string;
  className?: string;
  tallFrameHeight?: string;
}) {
  const dims = imageDimensions[src] ?? FALLBACK_DIMENSIONS;
  const tall = isTallScreenshot(src);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`group relative w-full self-start rounded-card overflow-hidden border border-deepspace/12 bg-orbit flex flex-col ${
        onClick ? "cursor-zoom-in" : ""
      } ${className}`}
    >
      {tall && <BrowserChrome />}
      <div className={tall ? `relative w-full overflow-y-auto ${tallFrameHeight}` : "relative w-full"}>
        <Image
          src={src}
          alt={alt}
          width={dims.width}
          height={dims.height}
          sizes={sizes}
          preload={preload}
          className="w-full h-auto block"
        />
      </div>
      {onClick && (
        <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[rgba(28,27,46,0.72)] text-stardust flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <Maximize2 size={14} />
        </span>
      )}
    </div>
  );
}
