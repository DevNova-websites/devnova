"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.2), transparent)" }}
      />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="badge">
              <HelpCircle size={10} />
              {t.faq.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-black text-white leading-[1.06] tracking-tight"
          >
            {t.faq.title}{" "}
            <span className="gradient-text">{t.faq.titleAccent}</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {t.faq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[18px] overflow-hidden"
              style={{
                background: open === i ? "rgba(245,196,0,0.06)" : "#111111",
                border: open === i ? "1px solid rgba(245,196,0,0.3)" : "1px solid rgba(255,255,255,0.07)",
                transition: "all 0.3s ease",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left gap-4"
              >
                <span
                  className="font-bold text-sm md:text-base transition-colors duration-200"
                  style={{ color: open === i ? "#F5C400" : "rgba(255,255,255,0.85)" }}
                >
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: open === i ? "#F5C400" : "rgba(255,255,255,0.25)",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6">
                      <div
                        className="pt-4 text-sm text-white/50 leading-relaxed"
                        style={{ borderTop: "1px solid rgba(245,196,0,0.12)" }}
                      >
                        {item.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
