"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { cover } from "@/data/covers";

// Collage animado del hero, organizado por cliente: las tres piezas (pantalla
// grande, web secundaria y celular) muestran siempre al mismo cliente. Dentro
// de cada cliente, la pantalla grande recorre sus entregables y la etiqueta
// flotante dice cuál es. El celular acompaña a cada entregable: muestra su
// versión mobile, o se oculta si ese entregable no tiene una (phone: null).
// Después pasa al cliente siguiente.
// Para cambiar qué se muestra, editá SCENES (rutas en /public/imagenes).

type Label = { en: string; es: string };

type Scene = {
  client: string;
  slug: string;
  main: { src: string; label: Label; phone: string | null; fit?: "cover" | "contain" }[];
  secondary: string;
};

const WEB: Label = { en: "Web design", es: "Diseño web" };

const SCENES: Scene[] = [
  {
    client: "Norfalk",
    slug: "norfalk",
    main: [
      { src: "/imagenes/norfalk/web-2.png", label: WEB, phone: "/imagenes/covers/norfalk-celu-web.jpg" },
      {
        src: "/imagenes/norfalk/newsletter-1.png",
        label: { en: "Newsletter", es: "Newsletter" },
        phone: "/imagenes/covers/norfalk-celu-newsletter.jpg",
      },
      { src: "/imagenes/norfalk/canva-1.png", label: { en: "Canva templates", es: "Templates en Canva" }, phone: null },
      { src: "/imagenes/norfalk/naming-1.png", label: { en: "Naming workshop", es: "Taller de naming" }, phone: null },
      // Siempre la vista pública ("Ver como miembro"), nunca el panel de admin.
      {
        src: "/imagenes/covers/norfalk-linkedin-post.png",
        label: { en: "LinkedIn management", es: "Gestión de LinkedIn" },
        phone: "/imagenes/norfalk/linkedin-mobile-view-user.png",
        fit: "contain",
      },
    ],
    secondary: "/imagenes/norfalk/canva-2.png",
  },
  {
    client: "Gisela Rodríguez Estética",
    slug: "gisela-estetica",
    main: [
      { src: "/imagenes/gisela/web-1.png", label: WEB, phone: "/imagenes/gisela/celu-pantalla.jpg" },
      {
        src: "/imagenes/gisela/design-system-1.png",
        label: { en: "Design system", es: "Design system" },
        phone: null,
        fit: "contain",
      },
    ],
    secondary: "/imagenes/gisela/web-3.png",
  },
  {
    client: "Mauro Crema",
    slug: "mauro-crema",
    main: [
      {
        src: "/imagenes/mauro-crema/web-1.png",
        label: { en: "Landing page", es: "Landing page" },
        phone: "/imagenes/mauro-crema/celu-2.jpg",
      },
      { src: "/imagenes/mauro-crema/slide-servicios.png", label: { en: "Sales deck", es: "Deck de ventas" }, phone: null },
    ],
    secondary: "/imagenes/mauro-crema/slide-internacional.png",
  },
  {
    client: "Samuray BJJ Academy",
    slug: "samuray-bjj",
    main: [
      { src: "/imagenes/samuray/web-1.png", label: WEB, phone: "/imagenes/samuray/celu-pantalla.jpg" },
      { src: "/imagenes/samuray/web-3.png", label: WEB, phone: "/imagenes/samuray/celu-pantalla.jpg" },
    ],
    secondary: "/imagenes/samuray/web-2.png",
  },
  {
    client: "Mercedes Chanquia Aguirre",
    slug: "mer-aguirre",
    main: [
      { src: "/imagenes/mercedes-chanquia/web-1.png", label: WEB, phone: "/imagenes/mercedes-chanquia/celu-pantalla.jpg" },
      { src: "/imagenes/mercedes-chanquia/web-3.png", label: WEB, phone: "/imagenes/mercedes-chanquia/celu-pantalla.jpg" },
    ],
    secondary: "/imagenes/mercedes-chanquia/web-2.png",
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
  const [ready, setReady] = useState(false);

  // La rotación arranca recién cuando terminó de cargar la página, y solo en
  // desktop: en mobile el collage queda debajo del pliegue y se muestra fijo.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    const start = () => setReady(true);
    if (document.readyState === "complete") {
      const id = window.setTimeout(start, 0);
      return () => window.clearTimeout(id);
    }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  useEffect(() => {
    if (!ready || paused) return;
    const id = window.setInterval(() => setTick((t) => t + 1), STEP_MS);
    return () => window.clearInterval(id);
  }, [ready, paused]);

  const step = tick % STEPS.length;
  const { s: sceneIdx, m: mainIdx } = STEPS[step];
  const scene = SCENES[sceneIdx];
  const current = scene.main[mainIdx];
  const href = `/work/${scene.slug}`;

  // Solo se montan el paso anterior (para el fundido de salida), el actual y
  // el siguiente (para que ya esté descargado cuando le toque).
  const stepMounted = (i: number) =>
    i === step ||
    (ready && i === (step + 1) % STEPS.length) ||
    (tick > 0 && i === (step - 1 + STEPS.length) % STEPS.length);
  const nextScene = STEPS[(step + 1) % STEPS.length].s;
  const prevScene = STEPS[(step - 1 + STEPS.length) % STEPS.length].s;
  const sceneMounted = (si: number) =>
    si === sceneIdx || (ready && si === nextScene) || (tick > 0 && si === prevScene);

  // Celular: una capa por imagen distinta (dos pasos seguidos con la misma
  // captura no parpadean). Se montan las de los pasos anterior, actual y siguiente.
  const phoneSrc = current.phone;
  const phoneLayers = Array.from(
    new Set(
      STEPS.filter((_, i) => stepMounted(i))
        .map(({ s: si, m: mi }) => SCENES[si].main[mi].phone)
        .filter((src): src is string => !!src)
    )
  );

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
            {STEPS.map(({ s: si, m: mi }, i) => {
              if (!stepMounted(i)) return null;
              const sc = SCENES[si];
              const item = sc.main[mi];
              return (
                <Image
                  key={`${si}-${mi}`}
                  src={cover(item.src)}
                  alt={`${sc.client}: ${item.label[lang]}`}
                  fill
                  sizes="(max-width: 768px) 86vw, 480px"
                  preload={i === 0}
                  className={`${item.fit === "contain" ? "object-contain" : "object-cover object-top"} ${fade(
                    i === step
                  )}`}
                />
              );
            })}
          </div>
        </div>

        {/* Etiqueta flotante: cliente + entregable */}
        <span
          key={tick}
          className="absolute -top-4 -left-4 md:-left-6 animate-label-in motion-reduce:animate-none inline-flex items-center gap-2 rounded-pill bg-deepspace text-stardust pl-3 pr-4 py-2 text-xs md:text-sm shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-saturn" />
          <span className="font-normal">{current.label[lang]}</span>
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
            {SCENES.map((sc, si) => sceneMounted(si) && (
              <Image
                key={sc.slug}
                src={cover(sc.secondary)}
                alt={sc.client}
                fill
                sizes="(max-width: 768px) 58vw, 330px"
                className={`object-cover object-top ${fade(si === sceneIdx)}`}
              />
            ))}
          </div>
        </div>
      </Link>

      {/* Celular: solo aparece si el entregable actual tiene versión mobile */}
      <Link
        href={href}
        aria-label={`${scene.client} mobile`}
        aria-hidden={!phoneSrc}
        tabIndex={phoneSrc ? undefined : -1}
        className={`absolute bottom-0 right-[6%] w-[24%] ${fade(!!phoneSrc)} ${phoneSrc ? "" : "pointer-events-none"}`}
      >
        <div
          className="relative aspect-[9/19] rounded-[1.25rem] overflow-hidden border-4 border-deepspace bg-deepspace shadow-[0_24px_60px_-20px_rgba(28,27,46,0.45)] animate-float motion-reduce:animate-none"
          style={{ animationDuration: "8s", animationDelay: "0.6s" }}
        >
          {phoneLayers.map((src) => (
            <Image
              key={src}
              src={cover(src)}
              alt={`${scene.client} mobile`}
              fill
              sizes="140px"
              className={`object-cover object-top ${fade(src === phoneSrc)}`}
            />
          ))}
        </div>
      </Link>

      <span className="absolute -bottom-8 left-0 text-xs text-deepspace/45">{caption}</span>
    </div>
  );
}
