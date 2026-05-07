"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import FormModal from "./FormModal";

export default function FloatingCTA() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          >
            {/* Dismiss button */}
            <button
              onClick={() => setDismissed(true)}
              className="w-6 h-6 rounded-full flex items-center justify-center text-white/40 hover:text-white/70 transition-colors"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <X size={11} />
            </button>

            {/* Main CTA button */}
            <motion.button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-semibold text-sm text-white shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 8px 32px rgba(99,102,241,0.4), 0 0 0 1px rgba(99,102,241,0.3)",
              }}
              whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(99,102,241,0.55)" }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  "0 8px 32px rgba(99,102,241,0.4)",
                  "0 8px 40px rgba(99,102,241,0.6)",
                  "0 8px 32px rgba(99,102,241,0.4)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <MessageCircle size={18} />
              {t.floating}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
