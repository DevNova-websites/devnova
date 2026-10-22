"use client";

import { useEffect, useRef, useState } from "react";

// Igual que en WebsiteModal: no hay forma confiable de detectar un bloqueo
// por X-Frame-Options/CSP vía JS, así que usamos un margen de carga y si no
// disparó "load" a tiempo asumimos que está bloqueado.
const LOAD_TIMEOUT_MS = 3500;

export default function LiveEmbed({
  url,
  clientName,
  fallbackMessage,
  openNewTabLabel,
}: {
  url: string;
  clientName: string;
  fallbackMessage: string;
  openNewTabLabel: string;
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");
  const containerRef = useRef<HTMLDivElement>(null);

  // El iframe es loading="lazy": recién empieza a cargar cerca del viewport,
  // así que el margen de carga corre desde que el bloque entra en pantalla,
  // no desde que se montó la página.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timeout = setTimeout(() => {
          setStatus((s) => (s === "loading" ? "failed" : s));
        }, LOAD_TIMEOUT_MS);
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[480px] md:h-[620px] rounded-card overflow-hidden border border-deepspace/12 bg-orbit flex flex-col">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-deepspace/10 bg-stardust shrink-0">
        <span className="w-2 h-2 rounded-full bg-deepspace/15" />
        <span className="w-2 h-2 rounded-full bg-deepspace/15" />
        <span className="w-2 h-2 rounded-full bg-deepspace/15" />
        <span className="ml-2 text-xs text-deepspace/40 truncate">{clientName}</span>
      </div>
      <div className="relative flex-1">
        <iframe
          key={url}
          src={url}
          title={clientName}
          className="w-full h-full border-0"
          loading="lazy"
          onLoad={() => setStatus("loaded")}
        />
        {status === "failed" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-stardust px-6 text-center">
            <p className="text-sm text-deepspace/70 max-w-sm">{fallbackMessage}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block px-6 py-3 text-sm"
            >
              {openNewTabLabel}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
