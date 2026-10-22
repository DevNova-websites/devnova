import Image from "next/image";

// logo-dn.png es el isotipo recortado a 120px de alto (cubre 2x–3x de su
// tamaño en pantalla). Carga eager porque está siempre visible arriba.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/imagenes/logo-dn.png"
        alt="DevNova"
        width={98}
        height={120}
        loading="eager"
        className="h-[1.5em] w-auto shrink-0"
      />
      <span className="font-heading font-bold tracking-tight text-deepspace">
        DevNova
      </span>
    </span>
  );
}
