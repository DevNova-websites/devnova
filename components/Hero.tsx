"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star, Play } from "lucide-react";
import { useLang } from "@/lib/i18n";
import FormModal from "./FormModal";

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

export default function Hero() {
  const { t, lang } = useLang();
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
        style={{ paddingTop: "80px" }}
      >
        {/* Ambient orbs */}
        {mounted && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
                animation: "float 8s ease-in-out infinite",
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
                filter: "blur(40px)",
                animation: "float 10s ease-in-out infinite reverse",
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
                filter: "blur(30px)",
                animation: "float 6s ease-in-out infinite 2s",
              }}
            />
          </>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div {...fadeIn(0)} className="inline-flex items-center gap-2 mb-8">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white/80 border"
              style={{ background: "rgba(99,102,241,0.1)", borderColor: "rgba(99,102,241,0.25)" }}
            >
              <span>{t.hero.badge}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeIn(0.12)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            {lang === "es" ? (
              <>
                Desarrollamos páginas web que{" "}
                <span className="gradient-text">convierten visitas</span>{" "}
                en clientes
              </>
            ) : (
              <>
                We build websites that turn{" "}
                <span className="gradient-text">visitors</span>{" "}
                into customers
              </>
            )}
          </motion.h1>

          {/* Sub */}
          <motion.p
            {...fadeIn(0.24)}
            className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeIn(0.36)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl group pulse-ring"
            >
              <span>{t.hero.cta1}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#portfolio"
              className="btn-secondary flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl group"
            >
              <Play size={16} className="group-hover:scale-110 transition-transform" />
              {t.hero.cta2}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeIn(0.48)}
            className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto"
          >
            {[
              { value: t.hero.stat1, label: t.hero.stat1Label },
              { value: t.hero.stat2, label: t.hero.stat2Label },
              { value: t.hero.stat3, label: t.hero.stat3Label },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-sm text-white/40 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div {...fadeIn(0.6)} className="mt-16 flex justify-center">
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors group"
            >
              <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
              <ChevronDown size={16} className="animate-bounce" />
            </a>
          </motion.div>
        </div>

        {/* Gradient bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #050510)" }}
        />
      </section>

      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
