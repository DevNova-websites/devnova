// Double Diamond (Design Council / Nielsen Norman) simplificado: 2 rombos
// planos, sin ilustración, pensado para que un CEO lo lea de un vistazo.

export function DoubleDiamond({
  labels,
  className = "",
}: {
  labels: [string, string, string, string];
  className?: string;
}) {
  return (
    <div className={className}>
      <svg viewBox="0 0 400 150" className="w-full h-auto" aria-hidden="true">
        <polygon
          points="0,75 100,15 200,75 100,135"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-deepspace/70"
        />
        <polygon
          points="200,75 300,15 400,75 300,135"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-deepspace/70"
        />
        <circle cx="0" cy="75" r="4" className="fill-nebula" />
        <circle cx="200" cy="75" r="4" className="fill-nebula" />
        <circle cx="400" cy="75" r="4" className="fill-nebula" />
      </svg>
      <div className="grid grid-cols-4 gap-2 mt-4 text-center">
        {labels.map((label, i) => (
          <div key={label}>
            <span className="text-[10px] md:text-xs font-mono text-deepspace/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="font-heading font-bold text-xs md:text-base tracking-tight text-deepspace mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
