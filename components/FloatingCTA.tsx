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
    const timer = setTimeout(() => setVisible(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
            initial={{ opacity: 0, y: 20, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={() => setDismissed(true)}
              className="w-6 h-6 rounded-full flex items-center justify-center text-white/35 hover:text-white/60 transition-colors"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <X size={11} />
            </button>

            <motion.button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-black text-sm"
              style={{
                background: "linear-gradient(135deg, #F5C400, #FF9F0A)",
                color: "#080808",
                boxShadow: "0 10px 36px rgba(245,196,0,0.45), 0 0 0 1px rgba(245,196,0,0.3)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  "0 10px 36px rgba(245,196,0,0.4)",
                  "0 10px 44px rgba(245,196,0,0.62)",
                  "0 10px 36px rgba(245,196,0,0.4)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <MessageCircle size={17} />
              {t.floating}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
