// TODO-DEVNOVA: logo pendiente de rediseño — hoy es el wordmark de texto original.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-heading font-bold tracking-tight text-deepspace ${className}`}>
      DevNova
    </span>
  );
}
