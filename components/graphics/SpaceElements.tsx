// Elementos gráficos geométricos flotantes, alineados al concepto espacial
// de la marca (estrella fugaz, órbitas, puntos). Color plano, sin degradados.

export function ShootingStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 48"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="4"
        y1="42"
        x2="68"
        y2="6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="68" cy="6" r="3.5" fill="currentColor" />
    </svg>
  );
}

export function OrbitRing({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`pointer-events-none select-none animate-spin-slow ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <circle cx="114" cy="60" r="4" fill="currentColor" />
    </svg>
  );
}

export function OrbitDots({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none flex gap-3 ${className}`} aria-hidden="true">
      <span className="block w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      <span className="block w-1.5 h-1.5 rounded-full bg-current opacity-40" />
      <span className="block w-1.5 h-1.5 rounded-full bg-current opacity-20" />
    </div>
  );
}
