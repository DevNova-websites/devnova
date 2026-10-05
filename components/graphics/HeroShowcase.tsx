"use client";

import Image from "next/image";
import Link from "next/link";

// Collage de trabajos reales para el hero: muestra en un vistazo que DevNova
// hace webs, mobile y piezas de marca. Cada pieza linkea a su caso de estudio.
// Para cambiar qué se muestra, editá SHOWCASE (rutas en /public/imagenes).
const SHOWCASE = {
  main: { src: "/imagenes/norfalk/web-2.png", slug: "norfalk", label: "Norfalk" },
  second: { src: "/imagenes/gisela/web-1.png", slug: "gisela-estetica", label: "Gisela Rodríguez Estética" },
  phone: { src: "/imagenes/mauro-crema/celu-2.jpg", slug: "mauro-crema", label: "Mauro Crema" },
};

function BrowserFrame({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  return (
    <div className="rounded-card overflow-hidden border border-deepspace/12 bg-stardust shadow-[0_24px_60px_-20px_rgba(28,27,46,0.35)]">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-deepspace/10 bg-stardust">
        <span className="w-2 h-2 rounded-full bg-deepspace/15" />
        <span className="w-2 h-2 rounded-full bg-deepspace/15" />
        <span className="w-2 h-2 rounded-full bg-deepspace/15" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" preload />
      </div>
    </div>
  );
}

export default function HeroShowcase({ caption }: { caption: string }) {
  const { main, second, phone } = SHOWCASE;
  return (
    <div className="relative w-full aspect-[5/4] max-w-xl mx-auto md:mx-0">
      <Link
        href={`/work/${main.slug}`}
        aria-label={main.label}
        className="absolute top-0 right-0 w-[86%] transition-transform duration-500 hover:-translate-y-1"
      >
        <BrowserFrame src={main.src} alt={main.label} sizes="(max-width: 768px) 86vw, 480px" />
      </Link>

      <Link
        href={`/work/${second.slug}`}
        aria-label={second.label}
        className="absolute bottom-[4%] left-0 w-[58%] transition-transform duration-500 hover:-translate-y-1"
      >
        <BrowserFrame src={second.src} alt={second.label} sizes="(max-width: 768px) 58vw, 330px" />
      </Link>

      <Link
        href={`/work/${phone.slug}`}
        aria-label={phone.label}
        className="absolute bottom-0 right-[6%] w-[24%] transition-transform duration-500 hover:-translate-y-1"
      >
        <div className="relative aspect-[9/19] rounded-[1.25rem] overflow-hidden border-4 border-deepspace bg-deepspace shadow-[0_24px_60px_-20px_rgba(28,27,46,0.45)]">
          <Image src={phone.src} alt={phone.label} fill sizes="140px" className="object-cover object-top" />
        </div>
      </Link>

      <span className="absolute -bottom-8 left-0 text-xs text-deepspace/45">{caption}</span>
    </div>
  );
}
