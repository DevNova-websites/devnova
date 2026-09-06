"use client";

import { useEffect, useRef, useState } from "react";

// Muchos sitios bloquean el embed en iframe (X-Frame-Options / CSP) sin
// avisarlo vía JS: no hay forma 100% confiable de detectarlo desde afuera.
// Heurística: si el iframe no dispara "load" dentro de este margen, asumimos
// que está bloqueado y mostramos el fallback con link a pestaña nueva.
const LOAD_TIMEOUT_MS = 3500;

// Se monta solo mientras el modal está abierto (ver CaseStudyContent: render
// condicional `{siteModalOpen && <WebsiteModal .../>}`), así cada apertura
// arranca con estado limpio sin necesidad de resetearlo a mano en un efecto.
export default function WebsiteModal({
  url,
  onClose,
  clientName,
  fallbackMessage,
  openNewTabLabel,
  closeLabel,
}: {
  url: string;
  onClose: () => void;
  clientName: string;
  fallbackMessage: string;
  openNewTabLabel: string;
  closeLabel: string;
}) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setStatus((s) => (s === "loading" ? "failed" : s));
    }, LOAD_TIMEOUT_MS);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] bg-deepspace/75 flex items-center justify-center p-4 sm:p-8 md:p-14"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-6xl bg-stardust rounded-card overflow-hidden flex flex-col border border-deepspace/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3 hairline-b bg-stardust shrink-0">
          <span className="text-sm text-deepspace/60 truncate">{clientName}</span>
          <button
            onClick={onClose}
            aria-label={closeLabel}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-deepspace text-stardust flex items-center justify-center text-2xl leading-none hover:bg-nebula hover:text-deepspace transition-colors shrink-0"
          >
            ×
          </button>
        </div>

        <div className="relative flex-1 overflow-auto">
          <iframe
            key={url}
            src={url}
            title={clientName}
            className="w-full h-full border-0"
            onLoad={() => setStatus("loaded")}
          />

          {status === "failed" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-stardust px-6 text-center">
              <p className="text-deepspace/70 max-w-sm">{fallbackMessage}</p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block px-7 py-3.5 text-sm"
              >
                {openNewTabLabel}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
