"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import FormModal from "./FormModal";
import { NovaLogo } from "./NovaMascot";

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,8,8,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <NovaLogo size={34} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="font-black text-white text-lg tracking-tight">DevNova</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white/40 hover:text-white border border-white/08 hover:border-white/20 transition-all"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary px-5 py-2.5 text-sm rounded-xl"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={toggle}
              className="px-2.5 py-1 rounded-lg text-xs font-bold text-white/40 hover:text-white border border-white/08 transition-all"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/08 transition-all"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden overflow-hidden"
              style={{
                background: "rgba(8,8,8,0.97)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="px-6 py-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 text-sm text-white/60 hover:text-white transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => { setMobileOpen(false); setModalOpen(true); }}
                  className="btn-primary mt-3 py-3.5 text-sm rounded-xl text-center w-full"
                >
                  {t.nav.cta}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
