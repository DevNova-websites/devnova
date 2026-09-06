"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Logo from "@/components/Logo";

const links = [
  { key: "work", href: "#work" },
  { key: "services", href: "#services" },
  { key: "process", href: "#process" },
  { key: "about", href: "#about" },
] as const;

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stardust/90 backdrop-blur-sm hairline-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 h-16 md:h-20">
        <a href="#">
          <Logo className="text-lg" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-deepspace/70 hover:text-deepspace transition-colors"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggle}
            className="pill hover:bg-nebula/15 hover:border-nebula hover:text-nebula transition-colors"
            aria-label="Toggle language"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a href="mailto:info@devnova.com" className="btn-primary px-5 py-2.5 text-sm">
            {t.nav.cta}
          </a>
        </div>

        <button
          className="md:hidden text-deepspace"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden hairline-b bg-stardust px-6 pb-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-deepspace/70"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button onClick={toggle} className="pill">
              {lang === "en" ? "ES" : "EN"}
            </button>
            <a href="mailto:info@devnova.com" className="btn-primary px-5 py-2.5 text-sm">
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
