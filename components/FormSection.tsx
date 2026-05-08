"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import FormModal from "./FormModal";
import NovaMascot from "./NovaMascot";

export default function FormSection() {
  const { t } = useLang();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-36 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.2), transparent)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,196,0,0.05) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] p-10 md:p-16 relative overflow-hidden"
            style={{
              background: "linear-gradient(150deg, rgba(245,196,0,0.09), rgba(255,159,10,0.04))",
              border: "1px solid rgba(245,196,0,0.28)",
              boxShadow: "0 0 80px rgba(245,196,0,0.06), inset 0 1px 0 rgba(245,196,0,0.12)",
            }}
          >
            {/* Corner glow accents */}
            <div
              className="absolute top-0 left-0 w-72 h-72 pointer-events-none rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(245,196,0,0.08) 0%, transparent 70%)",
                transform: "translate(-40%, -40%)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,159,10,0.06) 0%, transparent 70%)",
                transform: "translate(40%, 40%)",
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
              {/* Content */}
              <div>
                <span className="badge mb-7 inline-flex">{t.formSection.badge}</span>

                <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.06] tracking-tight mb-6">
                  {t.formSection.title}{" "}
                  <span className="gradient-text">{t.formSection.titleAccent}</span>
                </h2>

                <p className="text-lg text-white/50 max-w-lg leading-relaxed mb-8">
                  {t.formSection.desc}
                </p>

                {/* Benefit list */}
                <div className="flex flex-wrap gap-4 mb-10">
                  {t.formSection.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/65">
                      <CheckCircle2 size={15} style={{ color: "#F5C400" }} />
                      {b}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base rounded-2xl group pulse-ring"
                  >
                    <span>{t.formSection.cta1}</span>
                    <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <a
                    href="https://wa.me/5491166046030?text=Hola%20DevNova%2C%20quiero%20consultar%20sobre%20mi%20proyecto%20web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base rounded-2xl"
                  >
                    <MessageCircle size={17} />
                    {t.formSection.cta2}
                  </a>
                </div>
              </div>

              {/* Mascot — decorative, desktop only */}
              <div className="hidden lg:flex items-center justify-center">
                <NovaMascot size={200} className="float-slow" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
