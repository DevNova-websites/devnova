"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Star } from "lucide-react";
import { useLang } from "@/lib/i18n";
import FormModal from "./FormModal";

export default function Pricing() {
  const { t } = useLang();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="pricing" className="relative py-36 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.2), transparent)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 90%, rgba(245,196,0,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="badge">
                <Zap size={10} className="fill-current" />
                {t.pricing.badge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-black text-white leading-[1.06] tracking-tight mb-5"
            >
              {t.pricing.title}{" "}
              <span className="gradient-text">{t.pricing.titleAccent}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/45 max-w-lg mx-auto text-lg"
            >
              {t.pricing.sub}
            </motion.p>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-5 items-start">
            {t.pricing.plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[20px] p-8 flex flex-col"
                style={
                  plan.popular
                    ? {
                        background: "linear-gradient(160deg, rgba(245,196,0,0.12), rgba(255,159,10,0.06))",
                        border: "1px solid rgba(245,196,0,0.4)",
                        boxShadow: "0 0 50px rgba(245,196,0,0.1), inset 0 1px 0 rgba(245,196,0,0.15)",
                      }
                    : {
                        background: "#111111",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div
                    className="absolute -top-[18px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider"
                    style={{ background: "linear-gradient(135deg, #F5C400, #FF9F0A)", color: "#080808" }}
                  >
                    <Star size={10} className="fill-current" />
                    {t.pricing.popular}
                  </div>
                )}

                <div className="mb-7">
                  <h3 className="text-xl font-black text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-white/40 mb-5">{plan.desc}</p>
                  {plan.pricePrefix && (
                    <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1">{plan.pricePrefix}</p>
                  )}
                  <div className="text-4xl font-black gradient-text">{plan.price}</div>
                </div>

                <ul className="space-y-3.5 flex-1 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/65">
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: "rgba(245,196,0,0.15)" }}
                      >
                        <Check size={10} style={{ color: "#F5C400" }} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setModalOpen(true)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {t.pricing.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
