"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import ProjectInquiryForm from "./ProjectInquiryForm";

export default function ContactModal() {
  const { isOpen, selectedService, closeContactModal } = useContactModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeContactModal();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeContactModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl bg-zinc-950/95 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.15)] z-10 my-auto max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeContactModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/5"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start A Project</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let&apos;s Build Something Extraordinary
              </h2>
              <p className="text-sm text-zinc-400 mt-1.5">
                Share your requirements. We review every brief and reply within 15 minutes.
              </p>
            </div>

            {/* Form */}
            <ProjectInquiryForm
              initialService={selectedService}
              variant="modal"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
