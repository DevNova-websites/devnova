"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

// Collage animado del hero, organizado por cliente: las tres piezas (pantalla
// grande, web secundaria y celular) muestran siempre al mismo cliente. Dentro
// de cada cliente, la pantalla grande recorre sus entregables y la etiqueta
// flotante dice cuál es. Después pasa al cliente siguiente.
// Para cambiar qué se muestra, editá SCENES (rutas en /public/imagenes).

type Label = { en: string; es: string };

type Scene = {
  client: string;
  slug: string;
  main: { src: string; label: Label; fit?: "cover" | "contain" }[];
  secondary: string;
  phone: string;
};

const WEB: Label = { en: "Web design", es: "Diseño web" };

const SCENES: Scene[] = [
  {
    client: "Norfalk",
    slug: "norfalk",
    main: [
      { src: "/imagenes/norfalk/web-2.png", label: WEB },
      { src: "/imagenes/norfalk/newsletter-1.png", label: { en: "Newsletter", es: "Newsletter" } },
      { src: "/imagenes/norfalk/canva-1.png", label: { en: "Canva templates", es: "Templates en Canva" } },
      { src: "/imagenes/norfalk/naming-1.png", label: { en: "Naming workshop", es: "Naming workshop" } },
      { src: "/imagenes/norfalk/linkedin-before.png", label: { en: "LinkedIn management", es: "LinkedIn management" } },
    ],
    secondary: "/imagenes/norfalk/canva-2.png",
    phone: "/imagenes/norfalk/celu-1.png",
  },
  {
    client: "Gisela Rodríguez Estética",
    slug: "gisela-estetica",
    main: [
      { src: "/imagenes/gisela/web-1.png", label: WEB },
      { src: "/imagenes/gisela/design-system-1.png", label: { en: "Design system", es: "Design system" }, fit: "contain" },
    ],
    secondary: "/imagenes/gisela/web-3.png",
    phone: "/imagenes/gisela/celu-pantalla.jpg",
  },
  {
    client: "Mauro Crema",
    slug: "mauro-crema",
    main: [
      { src: "/imagenes/mauro-crema/web-1.png", label: { en: "Landing page", es: "Landing page" } },
      { src: "/imagenes/mauro-crema/slide-servicios.png", label: { en: "Sales deck", es: "Deck de ventas" } },
    ],
    secondary: "/imagenes/mauro-crema/slide-internacional.png",
    phone: "/imagenes/mauro-crema/celu-2.jpg",
  },
  {
    client: "Samuray BJJ Academy",
    slug: "samuray-bjj",
    main: [
      { src: "/imagenes/samuray/web-1.png", label: WEB },
      { src: "/imagenes/samuray/web-3.png", label: WEB },
    ],
    secondary: "/imagenes/samuray/web-2.png",
    phone: "/imagenes/samuray/celu-pantalla.jpg",
  },
  {
    client: "Mercedes Chanquia Aguirre",
    slug: "mer-aguirre",
    main: [
      { src: "/imagenes/mercedes-chanquia/web-1.png", label: WEB },
      { src: "/imagenes/mercedes-chanquia/web-3.png", label: WEB },
    ],
    secondary: "/imagenes/mercedes-chanquia/web-2.png",
    phone: "/imagenes/mercedes-chanquia/celu-pantalla.jpg",
  },
];

// Secuencia plana de pasos: (escena, entregable).
const STEPS = SCENES.flatMap((scene, s) => scene.main.map((_, m) => ({ s, m })));

// Palabras de fondo que flotan suavemente detrás del collage.
const DRIFT_WORDS: { word: string; pos: string; delay: string; duration: string }[] = [
  { word: "Branding", pos: "-top-[9%] right-[6%]", delay: "0s", duration: "8s" },
  { word: "Decks", pos: "top-[30%] -left-[3%]", delay: "1.5s", duration: "9s" },
  { word: "LinkedIn", pos: "-bottom-[16%] right-[2%]", delay: "0.8s", duration: "7.5s" },
];

const STEP_MS = 2800;

function Chrome() {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-deepspace/10 bg-stardust">
      <span className="w-2 h-2 rounded-full bg-deepspace/15" />
      <span className="w-2 h-2 rounded-full bg-deepspace/15" />
      <span className="w-2 h-2 rounded-full bg-deepspace/15" />
    </div>
  );
}

function fade(active: boolean) {
  return `transition-opacity duration-700 ease-out ${active ? "opacity-100" : "opacity-0"}`;
}

export default function HeroShowcase({ caption }: { caption: string }) {
  const { lang } = useLang();
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (paused) return;
    const id = window.setInterval(() => setTick((t) => t + 1), STEP_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const { s: sceneIdx, m: mainIdx } = STEPS[tick % STEPS.length];
  const scene = SCENES[sceneIdx];
  const current = scene.main[mainIdx];
  const href = `/work/${scene.slug}`;

  return (
    <div
      className="relative w-full aspect-[5/4] max-w-xl mx-auto md:mx-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {DRIFT_WORDS.map((w) => (
        <span
          key={w.word}
          aria-hidden
          className={`hidden md:block absolute ${w.pos} font-heading font-bold text-base md:text-xl text-nebula opacity-25 select-none pointer-events-none animate-float motion-reduce:animate-none`}
          style={{ animationDelay: w.delay, animationDuration: w.duration }}
        >
          {w.word}
        </span>
      ))}

      {/* Pantalla principal */}
      <Link
        href={href}
        aria-label={`${scene.client}: ${current.label[lang]}`}
        className="absolute top-0 right-0 w-[86%] animate-float motion-reduce:animate-none"
        style={{ animationDuration: "9s" }}
      >
        <div className="rounded-card overflow-hidden border border-deepspace/12 bg-stardust shadow-[0_24px_60px_-20px_rgba(28,27,46,0.35)]">
          <Chrome />
          <div className="relative aspect-[16/10] bg-orbit">
            {SCENES.flatMap((sc, si) =>
              sc.main.map((item, mi) => (
                <Image
                  key={`${si}-${mi}`}
                  src={item.src}
                  alt={`${sc.client}: ${item.label[lang]}`}
                  fill
                  sizes="(max-width: 768px) 86vw, 480px"
                  preload={si === 0 && mi === 0}
                  className={`${item.fit === "contain" ? "object-contain" : "object-cover object-top"} ${fade(
                    si === sceneIdx && mi === mainIdx
                  )}`}
                />
              ))
            )}
          </div>
        </div>

        {/* Etiqueta flotante: cliente + entregable */}
        <span
          key={tick}
          className="absolute -top-4 -left-4 md:-left-6 animate-label-in motion-reduce:animate-none inline-flex items-center gap-2 rounded-pill bg-deepspace text-stardust pl-3 pr-4 py-2 text-xs md:text-sm shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-saturn" />
          <span className="font-medium">{current.label[lang]}</span>
          <span className="text-stardust/50">· {scene.client}</span>
        </span>
      </Link>

      {/* Pieza secundaria */}
      <Link
        href={href}
        aria-label={scene.client}
        className="absolute bottom-[4%] left-0 w-[58%] animate-float motion-reduce:animate-none"
        style={{ animationDuration: "7s", animationDelay: "1.2s" }}
      >
        <div className="rounded-card overflow-hidden border border-deepspace/12 bg-stardust shadow-[0_24px_60px_-20px_rgba(28,27,46,0.35)]">
          <Chrome />
          <div className="relative aspect-[16/10] bg-orbit">
            {SCENES.map((sc, si) => (
              <Image
                key={sc.slug}
                src={sc.secondary}
                alt={sc.client}
                fill
                sizes="(max-width: 768px) 58vw, 330px"
                className={`object-cover object-top ${fade(si === sceneIdx)}`}
              />
            ))}
          </div>
        </div>
      </Link>

      {/* Celular */}
      <Link
        href={href}
        aria-label={`${scene.client} mobile`}
        className="absolute bottom-0 right-[6%] w-[24%] animate-float motion-reduce:animate-none"
        style={{ animationDuration: "8s", animationDelay: "0.6s" }}
      >
        <div className="relative aspect-[9/19] rounded-[1.25rem] overflow-hidden border-4 border-deepspace bg-deepspace shadow-[0_24px_60px_-20px_rgba(28,27,46,0.45)]">
          {SCENES.map((sc, si) => (
            <Image
              key={sc.slug}
              src={sc.phone}
              alt={`${sc.client} mobile`}
              fill
              sizes="140px"
              className={`object-cover object-top ${fade(si === sceneIdx)}`}
            />
          ))}
        </div>
      </Link>

      <span className="absolute -bottom-8 left-0 text-xs text-deepspace/45">{caption}</span>
    </div>
  );
}
