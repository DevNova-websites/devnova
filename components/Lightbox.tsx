"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const SWIPE_THRESHOLD_PX = 50;

export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
  closeLabel,
  prevLabel,
  nextLabel,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  closeLabel: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const touchStartX = useRef<number | null>(null);
  const current = images[index];
  const hasMultiple = images.length > 1;

  const goPrev = () => onIndexChange((index - 1 + images.length) % images.length);
  const goNext = () => onIndexChange((index + 1) % images.length);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowLeft") goPrev();
      if (hasMultiple && e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, images.length]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-[rgba(28,27,46,0.92)] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (hasMultiple && Math.abs(delta) > SWIPE_THRESHOLD_PX) {
          if (delta > 0) goPrev();
          else goNext();
        }
        touchStartX.current = null;
      }}
    >
      <button
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-[rgba(245,243,239,0.14)] text-stardust flex items-center justify-center hover:bg-nebula transition-colors z-10"
      >
        <X size={20} />
      </button>

      {hasMultiple && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label={prevLabel}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[rgba(245,243,239,0.14)] text-stardust flex items-center justify-center hover:bg-nebula transition-colors z-10"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label={nextLabel}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[rgba(245,243,239,0.14)] text-stardust flex items-center justify-center hover:bg-nebula transition-colors z-10"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      <div
        className="relative w-full h-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
