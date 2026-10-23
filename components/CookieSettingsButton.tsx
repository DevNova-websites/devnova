"use client";

import { useLang } from "@/lib/i18n";
import { openCookieSettings } from "@/lib/consent";

export default function CookieSettingsButton({ className = "" }: { className?: string }) {
  const { t } = useLang();
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {t.cookies.settings}
    </button>
  );
}
