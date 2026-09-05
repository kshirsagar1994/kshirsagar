"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, MessageSquare, Mail, Phone, Loader2, Sparkles } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const SERVICES = [
  "Web Development",
  "Mobile App",
  "AI & Cloud Solutions",
  "Digital Marketing",
  "Enterprise Software",
  "UI/UX Design",
];

const BUDGETS = [
  "< ₹50,000",
  "₹50k - ₹2 Lakh",
  "₹2 Lakh - ₹5 Lakh",
  "₹5 Lakh+",
  "Flexible",
];

const TIMELINES = [
  "Urgent (< 1 mo)",
  "1 - 3 months",
  "3+ months",
  "Flexible",
];

export default function ContactModal() {
  const { isOpen, selectedService, closeContactModal } = useContactModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Sync selected service when modal opens
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Lock body scroll and listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeContactModal();
      }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill out your Name, Email, and Project Details.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with heavy blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeContactModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-2xl bg-[#09090d] border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(139,92,246,0.18)] overflow-hidden my-8 z-10"
          >
            {/* Ambient Background Gradient Glows */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-center justify-between p-6 sm:p-8 border-b border-white/10 bg-white/[0.02]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Start a Project
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Let&apos;s build your vision
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  Tell us about your project. We typically respond within 2-4 hours.
                </p>
              </div>

              <button
                onClick={closeContactModal}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 relative">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <h4 className="text-2xl font-bold text-white">Inquiry Received!</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our engineering & design leads have received your details and will get back to you shortly at <span className="text-accent font-semibold">{formData.email}</span>.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <a
                      href={`https://wa.me/919595749597?text=Hi%20Kshirsagar%20Team%2C%20I%20just%20submitted%20a%20project%20inquiry%20for%20${encodeURIComponent(formData.service || "a project")}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" /> Quick WhatsApp Chat
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/10"
                    >
                      Submit Another Request
                    </button>
                    <button
                      onClick={closeContactModal}
                      className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 text-sm font-semibold transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2.5">
                      I&apos;m interested in
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((srv) => {
                        const isSelected = formData.service === srv;
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: isSelected ? "" : srv })}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                              isSelected
                                ? "bg-accent text-white border-accent shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                                : "bg-white/5 text-white/70 border-white/10 hover:border-white/25 hover:text-white"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2.5">
                      Estimated Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: isSelected ? "" : b })}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                              isSelected
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                                : "bg-white/5 text-white/70 border-white/10 hover:border-white/25 hover:text-white"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2.5">
                      Expected Timeline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TIMELINES.map((t) => {
                        const isSelected = formData.timeline === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: isSelected ? "" : t })}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                              isSelected
                                ? "bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                                : "bg-white/5 text-white/70 border-white/10 hover:border-white/25 hover:text-white"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:bg-white/[0.08] focus:outline-none text-white text-sm transition-all placeholder:text-white/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:bg-white/[0.08] focus:outline-none text-white text-sm transition-all placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                      Phone / WhatsApp <span className="text-white/40 lowercase">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 95957 49597"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:bg-white/[0.08] focus:outline-none text-white text-sm transition-all placeholder:text-white/30"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                      Project Details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe what you want to build, key goals, features, or references..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:bg-white/[0.08] focus:outline-none text-white text-sm transition-all placeholder:text-white/30 resize-none"
                    />
                  </div>

                  {/* Error Alert */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3 text-xs text-white/50 order-2 sm:order-1">
                      <span>Or directly:</span>
                      <a
                        href="https://wa.me/919595749597"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline inline-flex items-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                      </a>
                      <span>•</span>
                      <a
                        href="mailto:ajaykshirsagar1208@gmail.com"
                        className="text-accent hover:underline inline-flex items-center gap-1"
                      >
                        <Mail className="w-3.5 h-3.5" /> Email
                      </a>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-accent text-black hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Project Inquiry <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
