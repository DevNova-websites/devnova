"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { LEGAL } from "@/lib/legal";
import { CONSENT_STORAGE_KEY, GA_MEASUREMENT_ID } from "@/lib/consent";
import LegalPage from "@/components/LegalPage";
import CookieSettingsButton from "@/components/CookieSettingsButton";

type CookieRow = { name: string; provider: string; purpose: string; duration: string; type: string };

const gaCookie = `_ga_${GA_MEASUREMENT_ID.replace(/^G-/, "")}`;

const cookies: Record<"en" | "es", CookieRow[]> = {
  en: [
    {
      name: CONSENT_STORAGE_KEY,
      provider: "DevNova",
      purpose: "Remembers your cookie choice so we do not ask again on every visit (stored in your browser's local storage).",
      duration: "12 months",
      type: "Necessary",
    },
    {
      name: "_ga",
      provider: "Google",
      purpose: "Google Analytics: distinguishes unique visitors to produce aggregated usage statistics.",
      duration: "2 years",
      type: "Statistics (consent)",
    },
    {
      name: gaCookie,
      provider: "Google",
      purpose: "Google Analytics: keeps track of the session state.",
      duration: "2 years",
      type: "Statistics (consent)",
    },
  ],
  es: [
    {
      name: CONSENT_STORAGE_KEY,
      provider: "DevNova",
      purpose: "Recuerda tu elección de cookies para no volver a preguntarte en cada visita (se guarda en el almacenamiento local del navegador).",
      duration: "12 meses",
      type: "Necesaria",
    },
    {
      name: "_ga",
      provider: "Google",
      purpose: "Google Analytics: distingue visitantes únicos para generar estadísticas de uso agregadas.",
      duration: "2 años",
      type: "Estadísticas (con consentimiento)",
    },
    {
      name: gaCookie,
      provider: "Google",
      purpose: "Google Analytics: mantiene el estado de la sesión.",
      duration: "2 años",
      type: "Estadísticas (con consentimiento)",
    },
  ],
};

const settingsButtonClass = "btn-primary inline-block px-6 py-3 text-sm";

function CookieTable({ rows, headers }: { rows: CookieRow[]; headers: string[] }) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.name}>
              <td className="font-mono text-xs whitespace-nowrap">{c.name}</td>
              <td>{c.provider}</td>
              <td>{c.purpose}</td>
              <td className="whitespace-nowrap">{c.duration}</td>
              <td>{c.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CookiePolicyContent() {
  const { lang } = useLang();
  return lang === "es" ? <CookiesEs /> : <CookiesEn />;
}

function CookiesEn() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="Cookies are small text files stored on your device when you visit a website. This page explains which cookies and similar technologies we use, and how you can change your choice."
    >
      <h2>Your choice</h2>
      <p>
        When you first visit the website, we ask whether you accept optional cookies. They are only
        set if you click &ldquo;Accept&rdquo;. Choosing &ldquo;Reject&rdquo; has no effect on how the
        website works. You can change or withdraw your consent at any time:
      </p>
      <p>
        <CookieSettingsButton className={settingsButtonClass} />
      </p>

      <h2>Cookies we use</h2>
      <CookieTable rows={cookies.en} headers={["Name", "Provider", "Purpose", "Duration", "Category"]} />

      <h3>Necessary</h3>
      <p>
        Necessary storage is required for the website to function and cannot be switched off. It
        does not require consent.
      </p>

      <h3>Statistics</h3>
      <p>
        Statistics cookies from Google Analytics help us understand how the website is used so we
        can improve it. Google may process this data outside Argentina and the EU/EEA. If you
        withdraw your consent, we stop Google Analytics and delete its cookies from your browser.
        Read more in our <Link href="/privacy-policy">Privacy Policy</Link> and in{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Google&apos;s privacy policy
        </a>
        .
      </p>

      <h3>Client websites shown in our case studies</h3>
      <p>
        Some case study pages show a live preview of a client&apos;s website, loaded directly from
        that client&apos;s domain. DevNova does not set cookies through those previews; any cookies
        they use are governed by that website&apos;s own cookie policy and consent banner.
      </p>

      <h2>Managing cookies in your browser</h2>
      <p>
        You can also delete or block cookies in your browser settings. Blocking necessary storage may
        mean we ask for your cookie choice again on each visit.
      </p>

      <h2>Contact</h2>
      <p>Questions about our use of cookies can be sent to {LEGAL.email}.</p>
    </LegalPage>
  );
}

function CookiesEs() {
  return (
    <LegalPage
      title="Política de Cookies"
      intro="Las cookies son pequeños archivos de texto que se guardan en tu dispositivo cuando visitás un sitio. Esta página explica qué cookies y tecnologías similares usamos y cómo podés cambiar tu elección."
    >
      <h2>Tu elección</h2>
      <p>
        La primera vez que visitás el sitio te preguntamos si aceptás las cookies opcionales. Solo se
        instalan si tocás &ldquo;Aceptar&rdquo;. Elegir &ldquo;Rechazar&rdquo; no cambia en nada el
        funcionamiento del sitio. Podés cambiar o retirar tu consentimiento en cualquier momento:
      </p>
      <p>
        <CookieSettingsButton className={settingsButtonClass} />
      </p>

      <h2>Cookies que usamos</h2>
      <CookieTable rows={cookies.es} headers={["Nombre", "Proveedor", "Finalidad", "Duración", "Categoría"]} />

      <h3>Necesarias</h3>
      <p>
        El almacenamiento necesario hace falta para que el sitio funcione y no se puede desactivar.
        No requiere consentimiento.
      </p>

      <h3>Estadísticas</h3>
      <p>
        Las cookies de estadísticas de Google Analytics nos ayudan a entender cómo se usa el sitio
        para mejorarlo. Google puede tratar estos datos fuera de Argentina y de la UE/EEE. Si retirás
        tu consentimiento, desactivamos Google Analytics y borramos sus cookies de tu navegador. Más
        info en nuestra <Link href="/privacy-policy">Política de Privacidad</Link> y en la{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          política de privacidad de Google
        </a>
        .
      </p>

      <h3>Sitios de clientes en los casos de estudio</h3>
      <p>
        Algunas páginas de casos de estudio muestran una vista previa en vivo del sitio de un
        cliente, cargada directamente desde su dominio. DevNova no instala cookies a través de esas
        vistas previas; las cookies que usen se rigen por la política de cookies y el banner de
        consentimiento de ese sitio.
      </p>

      <h2>Gestionar las cookies desde el navegador</h2>
      <p>
        También podés borrar o bloquear cookies desde la configuración del navegador. Si bloqueás el
        almacenamiento necesario, es posible que te volvamos a preguntar en cada visita.
      </p>

      <h2>Contacto</h2>
      <p>Las consultas sobre el uso de cookies se pueden enviar a {LEGAL.email}.</p>
    </LegalPage>
  );
}
