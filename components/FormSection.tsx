"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import FormModal from "./FormModal";

export default function FormSection() {
  const { t } = useLang();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)" }}
        />
        {/* Big background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(99,102,241,0.12), rgba(139,92,246,0.06))",
              border: "1px solid rgba(99,102,241,0.3)",
              boxShadow: "0 0 60px rgba(99,102,241,0.1)",
            }}
          >
            {/* Corner glows */}
            <div
              className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
                transform: "translate(50%, 50%)",
              }}
            />

            <div className="relative z-10">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{
                  background: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  color: "#a5b4fc",
                }}
              >
                <Sparkles size={12} />
                {t.formSection.badge}
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                {t.formSection.title}{" "}
                <span className="gradient-text">{t.formSection.titleAccent}</span>
              </h2>

              <p className="text-white/55 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                {t.formSection.desc}
              </p>

              {/* Benefits list */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {t.formSection.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 size={15} style={{ color: "#6ee7b7" }} />
                    {b}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl group pulse-ring"
                >
                  <span>{t.formSection.cta1}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="https://wa.me/5491166046030?text=Hola%20DevNova%2C%20quiero%20consultar%20sobre%20mi%20proyecto%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl"
                >
                  <MessageCircle size={18} />
                  {t.formSection.cta2}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
