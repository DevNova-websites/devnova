"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star, CheckCircle2, Zap } from "lucide-react";
import { useLang } from "@/lib/i18n";
import FormModal from "./FormModal";
import NovaMascot from "./NovaMascot";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  };
}

function FloatingCard({
  children,
  delay = 0,
  className = "",
  floatDuration = 5,
  floatOffset = 10,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  floatDuration?: number;
  floatOffset?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -floatOffset, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay, ease: EASE },
        scale: { duration: 0.6, delay, ease: EASE },
        y: {
          delay: delay + 0.6,
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute z-20 rounded-2xl px-4 py-3 shadow-2xl ${className}`}
      style={{
        background: "rgba(13,13,13,0.92)",
        border: "1px solid rgba(245,196,0,0.22)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
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
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {/* Gold ambient glow — right side (behind mascot) */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: "10%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(245,196,0,0.07) 0%, transparent 65%)",
            filter: "blur(20px)",
          }}
        />
        {/* Subtle left glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "-5%",
            top: "40%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(245,196,0,0.04) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16 lg:py-0">
          <div className="grid lg:grid-cols-[1fr_460px] gap-10 xl:gap-16 items-center min-h-[calc(100vh-80px)]">

            {/* ── LEFT: Content ─────────────────────────────── */}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <motion.div {...fadeUp(0)} className="mb-8">
                <span className="badge">
                  <Star size={10} className="fill-current" />
                  {t.hero.badge}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp(0.1)}
                className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-black tracking-tight leading-[1.04] text-white mb-7"
              >
                {lang === "es" ? (
                  <>
                    Websites que{" "}
                    <span className="gradient-text">impulsan tu negocio</span>
                  </>
                ) : (
                  <>
                    Websites that{" "}
                    <span className="gradient-text">drive your business</span>
                  </>
                )}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                {...fadeUp(0.2)}
                className="text-xl text-white/50 max-w-xl leading-relaxed mb-10"
              >
                {t.hero.sub}
              </motion.p>

              {/* CTAs */}
              <motion.div
                {...fadeUp(0.3)}
                className="flex flex-col sm:flex-row gap-4 mb-14"
              >
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base rounded-2xl group pulse-ring"
                >
                  <span>{t.hero.cta1}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <a
                  href="#portfolio"
                  className="btn-secondary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base rounded-2xl"
                >
                  {t.hero.cta2}
                </a>
              </motion.div>


              {/* Mobile mascot */}
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                  className="flex lg:hidden justify-center mt-14"
                >
                  <NovaMascot size={200} className="float" />
                </motion.div>
              )}
            </div>

            {/* ── RIGHT: Mascot + Floating Cards ─────────────── */}
            {mounted && (
              <div className="relative hidden lg:flex items-center justify-center" style={{ height: "520px" }}>
                {/* Card 1 — Proyecto entregado (top-left) */}
                <FloatingCard
                  delay={0.75}
                  floatDuration={6}
                  floatOffset={9}
                  className="-top-4 left-0"
                  style={{ transform: "rotate(-4deg)" } as React.CSSProperties}
                >
                  <div className="flex items-start gap-3" style={{ minWidth: "190px" }}>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(245,196,0,0.15)" }}
                    >
                      <CheckCircle2 size={17} style={{ color: "#F5C400" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Proyecto entregado</p>
                      <p className="text-xs text-white/50 mt-0.5">Luna Boutique Online</p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] text-white/40">Entregado en 8 días</span>
                      </div>
                    </div>
                  </div>
                </FloatingCard>

                {/* Card 2 — Performance (bottom-right) */}
                <FloatingCard
                  delay={0.9}
                  floatDuration={7.5}
                  floatOffset={11}
                  className="-bottom-2 right-0"
                  style={{ transform: "rotate(4deg)" } as React.CSSProperties}
                >
                  <div className="flex items-center gap-4" style={{ minWidth: "170px" }}>
                    <div>
                      <div className="text-3xl font-black gradient-text leading-none">99</div>
                      <div className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">Performance</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-1">
                        <Zap size={11} style={{ color: "#F5C400" }} />
                        <span className="text-[10px] text-white/50">Lighthouse</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: "99%", background: "linear-gradient(90deg, #F5C400, #FF9F0A)" }}
                        />
                      </div>
                    </div>
                  </div>
                </FloatingCard>

                {/* Card 3 — Rating (top-right) */}
                <FloatingCard
                  delay={0.82}
                  floatDuration={5.5}
                  floatOffset={8}
                  className="top-8 -right-4"
                  style={{ transform: "rotate(3deg)" } as React.CSSProperties}
                >
                  <div style={{ minWidth: "148px" }}>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs font-bold text-white ml-1">5.0</span>
                    </div>
                    <p className="text-[10px] text-white/45">Clientes satisfechos</p>
                  </div>
                </FloatingCard>

                {/* Nova mascot */}
                <NovaMascot size={310} className="float" animated />
              </div>
            )}
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors"
        >
          <a href="#about" className="flex flex-col items-center gap-1.5 group">
            <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
            <ChevronDown size={14} className="animate-bounce" />
          </a>
        </motion.div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #080808)" }}
        />
      </section>

      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
