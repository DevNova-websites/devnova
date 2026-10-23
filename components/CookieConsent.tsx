"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { useLang } from "@/lib/i18n";
import {
  GA_MEASUREMENT_ID,
  OPEN_SETTINGS_EVENT,
  clearAnalyticsCookies,
  readConsent,
  writeConsent,
} from "@/lib/consent";

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
} & Record<string, unknown>;

/**
 * Banner de cookies + Google Analytics condicionado al consentimiento.
 * Nada opcional carga hasta que el visitante toca "Aceptar". "Rechazar" tiene
 * el mismo tamaño, estilo y visibilidad que "Aceptar" (requisito UE / RGPD).
 */
export default function CookieConsent() {
  const { t } = useLang();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // Se lee localStorage recién en el cliente; el estado inicial tiene que
    // coincidir con el HTML del servidor.
    const stored = readConsent();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAccepted(stored?.accepted ?? false);
    setOpen(stored === null);
    setReady(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  const save = (accept: boolean) => {
    writeConsent(accept);
    setAccepted(accept);
    setOpen(false);

    const w = window as unknown as GtagWindow;
    if (!accept) {
      w[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
      w.gtag?.("consent", "update", { analytics_storage: "denied" });
      clearAnalyticsCookies();
    } else if (w.gtag) {
      // Volvió a aceptar en la misma visita: el script ya está cargado y
      // <Script> no lo vuelve a ejecutar, así que se reactiva a mano.
      w[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
      w.gtag("consent", "update", { analytics_storage: "granted" });
    }
  };

  const buttonClass = "btn-light px-5 py-3 text-sm";

  return (
    <>
      {ready && accepted && (
        <>
          <Script id="ga-consent" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              window['ga-disable-${GA_MEASUREMENT_ID}'] = false;
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'granted'
              });
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
            `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {ready && open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t.cookies.title}
          className="hero-in fixed inset-x-4 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[60] bg-deepspace text-stardust rounded-card shadow-2xl shadow-deepspace/30 p-6"
        >
          <p className="font-heading font-bold text-lg mb-2">{t.cookies.title}</p>
          <p className="text-sm text-stardust/70 leading-relaxed mb-5">
            {t.cookies.text}{" "}
            <Link
              href="/cookie-policy"
              className="underline underline-offset-2 hover:text-stardust transition-colors"
            >
              {t.cookies.policyLink}
            </Link>
            .
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => save(false)} className={buttonClass}>
              {t.cookies.reject}
            </button>
            <button type="button" onClick={() => save(true)} className={buttonClass}>
              {t.cookies.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
