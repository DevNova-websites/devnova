"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

// Collage animado del hero: la pantalla grande va rotando por los distintos
// entregables reales (web, newsletter, deck, Canva, naming, design system,
// LinkedIn) y una etiqueta flotante dice qué es cada uno. Las otras dos piezas
// (web secundaria y celular) también rotan, más lento.
// Para cambiar qué se muestra, editá SLIDES / SITES / PHONES (rutas en /public/imagenes).

type Label = { en: string; es: string };

const SLIDES: { src: string; slug: string; label: Label; fit?: "cover" | "contain" }[] = [
  { src: "/imagenes/norfalk/web-2.png", slug: "norfalk", label: { en: "Web design", es: "Diseño web" } },
  { src: "/imagenes/norfalk/newsletter-1.png", slug: "norfalk", label: { en: "Newsletter", es: "Newsletter" } },
  { src: "/imagenes/mauro-crema/slide-servicios.png", slug: "mauro-crema", label: { en: "Sales deck", es: "Deck de ventas" } },
  { src: "/imagenes/norfalk/canva-1.png", slug: "norfalk", label: { en: "Canva templates", es: "Templates en Canva" } },
  { src: "/imagenes/gisela/design-system-1.png", slug: "gisela-estetica", label: { en: "Design system", es: "Design system" }, fit: "contain" },
  { src: "/imagenes/norfalk/naming-1.png", slug: "norfalk", label: { en: "Naming workshop", es: "Naming workshop" } },
  { src: "/imagenes/norfalk/linkedin-before.png", slug: "norfalk", label: { en: "LinkedIn management", es: "LinkedIn management" } },
];

const SITES = [
  { src: "/imagenes/gisela/web-1.png", slug: "gisela-estetica", alt: "Gisela Rodríguez Estética" },
  { src: "/imagenes/samuray/web-1.png", slug: "samuray-bjj", alt: "Samuray BJJ Academy" },
  { src: "/imagenes/mercedes-chanquia/web-1.png", slug: "mer-aguirre", alt: "Mercedes Chanquia Aguirre" },
];

const PHONES = [
  { src: "/imagenes/mauro-crema/celu-2.jpg", slug: "mauro-crema", alt: "Mauro Crema" },
  { src: "/imagenes/norfalk/celu-1.png", slug: "norfalk", alt: "Norfalk" },
];

// Palabras de fondo que flotan suavemente detrás del collage.
const DRIFT_WORDS: { word: Label; pos: string; delay: string; duration: string }[] = [
  { word: { en: "Branding", es: "Branding" }, pos: "-top-[9%] left-[4%]", delay: "0s", duration: "8s" },
  { word: { en: "Decks", es: "Decks" }, pos: "top-[30%] -left-[3%]", delay: "1.5s", duration: "9s" },
  { word: { en: "LinkedIn", es: "LinkedIn" }, pos: "-bottom-[16%] right-[2%]", delay: "0.8s", duration: "7.5s" },
];

const SLIDE_MS = 2800;

function Chrome() {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-deepspace/10 bg-stardust">
      <span className="w-2 h-2 rounded-full bg-deepspace/15" />
      <span className="w-2 h-2 rounded-full bg-deepspace/15" />
      <span className="w-2 h-2 rounded-full bg-deepspace/15" />
    </div>
  );
}

export default function HeroShowcase({ caption }: { caption: string }) {
  const { lang } = useLang();
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (paused) return;
    const id = window.setInterval(() => setTick((t) => t + 1), SLIDE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const slideIdx = tick % SLIDES.length;
  const siteIdx = Math.floor(tick / 2) % SITES.length; // rota cada 2 slides
  const phoneIdx = Math.floor(tick / 3) % PHONES.length; // rota cada 3 slides
  const slide = SLIDES[slideIdx];

  return (
    <div
      className="relative w-full aspect-[5/4] max-w-xl mx-auto md:mx-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Palabras flotando de fondo */}
      {DRIFT_WORDS.map((w) => (
        <span
          key={w.word.en}
          aria-hidden
          className={`absolute ${w.pos} font-heading font-bold text-base md:text-xl text-nebula opacity-25 select-none pointer-events-none animate-float motion-reduce:animate-none`}
          style={{ animationDelay: w.delay, animationDuration: w.duration }}
        >
          {w.word[lang]}
        </span>
      ))}

      {/* Pantalla principal: rota por los entregables */}
      <Link
        href={`/work/${slide.slug}`}
        aria-label={slide.label[lang]}
        className="absolute top-0 right-0 w-[86%] animate-float motion-reduce:animate-none"
        style={{ animationDuration: "9s" }}
      >
        <div className="rounded-card overflow-hidden border border-deepspace/12 bg-stardust shadow-[0_24px_60px_-20px_rgba(28,27,46,0.35)]">
          <Chrome />
          <div className="relative aspect-[16/10] bg-orbit">
            {SLIDES.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.label[lang]}
                fill
                sizes="(max-width: 768px) 86vw, 480px"
                preload={i === 0}
                className={`${s.fit === "contain" ? "object-contain" : "object-cover object-top"} transition-opacity duration-700 ease-out ${
                  i === slideIdx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Etiqueta flotante: dice qué entregable se está viendo */}
        <span
          key={slideIdx}
          className="absolute -top-4 -left-4 md:-left-6 animate-label-in motion-reduce:animate-none inline-flex items-center gap-2 rounded-pill bg-deepspace text-stardust px-4 py-2 text-xs md:text-sm font-medium shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-saturn" />
          {slide.label[lang]}
        </span>
      </Link>

      {/* Web secundaria */}
      <Link
        href={`/work/${SITES[siteIdx].slug}`}
        aria-label={SITES[siteIdx].alt}
        className="absolute bottom-[4%] left-0 w-[58%] animate-float motion-reduce:animate-none"
        style={{ animationDuration: "7s", animationDelay: "1.2s" }}
      >
        <div className="rounded-card overflow-hidden border border-deepspace/12 bg-stardust shadow-[0_24px_60px_-20px_rgba(28,27,46,0.35)]">
          <Chrome />
          <div className="relative aspect-[16/10] bg-orbit">
            {SITES.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 768px) 58vw, 330px"
                className={`object-cover object-top transition-opacity duration-700 ${i === siteIdx ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>
      </Link>

      {/* Celular */}
      <Link
        href={`/work/${PHONES[phoneIdx].slug}`}
        aria-label={PHONES[phoneIdx].alt}
        className="absolute bottom-0 right-[6%] w-[24%] animate-float motion-reduce:animate-none"
        style={{ animationDuration: "8s", animationDelay: "0.6s" }}
      >
        <div className="relative aspect-[9/19] rounded-[1.25rem] overflow-hidden border-4 border-deepspace bg-deepspace shadow-[0_24px_60px_-20px_rgba(28,27,46,0.45)]">
          {PHONES.map((p, i) => (
            <Image
              key={p.src}
              src={p.src}
              alt={p.alt}
              fill
              sizes="140px"
              className={`object-cover object-top transition-opacity duration-700 ${i === phoneIdx ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </Link>

      <span className="absolute -bottom-8 left-0 text-xs text-deepspace/45">{caption}</span>
    </div>
  );
}
