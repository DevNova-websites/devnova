"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Contact() {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const inputStyle = {
    background: "#0E0E0E",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(245,196,0,0.5)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,196,0,0.07)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section id="contact" className="relative py-36 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,196,0,0.2), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(245,196,0,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
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
              <Mail size={10} />
              {t.contact.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl font-black text-white leading-[1.06] tracking-tight"
          >
            {t.contact.title}{" "}
            <span className="gradient-text">{t.contact.titleAccent}</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-5 gap-7">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <a
              href="https://wa.me/5491166046030?text=Hola%20DevNova%2C%20quiero%20consultar%20sobre%20mi%20proyecto%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-[18px] transition-all duration-300 hover:border-green-500/30"
              style={{ background: "rgba(37,211,102,0.05)", border: "1px solid rgba(37,211,102,0.15)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: "rgba(37,211,102,0.14)" }}
              >
                <MessageCircle size={20} style={{ color: "#4ade80" }} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">WhatsApp</p>
                <p className="text-sm text-white/45">+54 11 6604-6030</p>
                <p className="text-xs text-green-400/60 mt-0.5">Respuesta rápida</p>
              </div>
            </a>

            <a
              href="mailto:info@devnova.com"
              className="group flex items-center gap-4 p-5 rounded-[18px] transition-all duration-300"
              style={{ background: "rgba(245,196,0,0.05)", border: "1px solid rgba(245,196,0,0.15)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: "rgba(245,196,0,0.12)" }}
              >
                <Mail size={20} style={{ color: "#F5C400" }} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Email</p>
                <p className="text-sm text-white/45">info@devnova.com</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(245,196,0,0.55)" }}>{t.contact.or}</p>
              </div>
            </a>

            <div className="p-5 rounded-[18px]" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-white/55 text-sm leading-relaxed">
                {lang === "es"
                  ? "Respondemos en menos de 24 horas hábiles. Podés escribirnos en español o inglés."
                  : "We respond within 24 business hours. You can write to us in Spanish or English."}
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3"
          >
            <div className="rounded-[20px] p-7" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}>
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-14 text-center gap-5"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(245,196,0,0.12)" }}>
                      <CheckCircle2 size={30} style={{ color: "#F5C400" }} />
                    </div>
                    <h3 className="text-xl font-black text-white">{t.contact.successTitle}</h3>
                    <p className="text-white/45 text-sm">{t.contact.successDesc}</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { label: t.contact.name, key: "name", type: "text", ph: "Tu nombre", req: true },
                        { label: t.contact.email, key: "email", type: "email", ph: "tu@email.com", req: true },
                      ].map(({ label, key, type, ph, req }) => (
                        <div key={key}>
                          <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">
                            {label} {req && "*"}
                          </label>
                          <input
                            type={type}
                            required={req}
                            value={form[key as keyof typeof form]}
                            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                            placeholder={ph}
                            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                            style={inputStyle}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">
                        {t.contact.company}
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Tu empresa"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">
                        {t.contact.message} *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder={t.contact.message}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200 resize-none"
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2.5 py-4 text-sm rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black/80 rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          {t.contact.send}
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
