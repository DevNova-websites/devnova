"use client";

import { useLang } from "@/lib/i18n";
import Logo from "@/components/Logo";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="px-6 md:px-8 pt-16 pb-10 hairline">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <div className="mb-2">
            <Logo className="text-xl" />
          </div>
          <p className="text-sm text-deepspace/60">{t.footer.tagline}</p>
          <p className="text-sm text-deepspace/60">{t.footer.location}</p>
        </div>

        <div className="flex gap-10 md:gap-16">
          <div>
            <div className="text-xs uppercase tracking-wide text-deepspace/40 mb-3">
              {t.footer.linksTitle}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#work" className="text-deepspace/70 hover:text-nebula transition-colors">
                {t.footer.work}
              </a>
              <a
                href="mailto:info@devnova.com"
                className="text-deepspace/70 hover:text-nebula transition-colors"
              >
                {t.footer.contact}
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deepspace/70 hover:text-nebula transition-colors"
              >
                {t.footer.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 hairline text-xs text-deepspace/40">
        © {new Date().getFullYear()} {t.footer.copyright}
      </div>
    </footer>
  );
}
