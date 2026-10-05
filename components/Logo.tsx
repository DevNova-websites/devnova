import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/imagenes/logo-dn-test.png"
        alt="DevNova"
        width={1080}
        height={1350}
        className="h-[1.5em] w-auto shrink-0"
      />
      <span className="font-heading font-bold tracking-tight text-deepspace">
        DevNova
      </span>
    </span>
  );
}
