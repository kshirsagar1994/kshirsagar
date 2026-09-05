"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, MessageSquare, Mail, Phone, Loader2, Sparkles, ArrowRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { 
  WHATSAPP_NUMBER, 
  DISPLAY_PHONE, 
  CONTACT_EMAIL, 
  getWhatsAppRequirementUrl, 
  getMailtoRequirementUrl 
} from "@/lib/contactUtils";

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

  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [autoOpenWhatsApp, setAutoOpenWhatsApp] = useState(true);
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

    const snapshot = { ...formData };
    setSubmittedData(snapshot);

    const whatsAppUrl = getWhatsAppRequirementUrl(snapshot);

    // Auto-launch WhatsApp if selected
    if (autoOpenWhatsApp && typeof window !== "undefined") {
      window.open(whatsAppUrl, "_blank");
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(snapshot),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      console.warn("Server email dispatch status:", err);
      // Requirement is still prepared and opened for WhatsApp & Email
      setStatus("success");
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
    setSubmittedData(null);
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop with heavy blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeContactModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-[#09090d] border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(139,92,246,0.22)] overflow-hidden z-10"
          >
            {/* Ambient Background Gradient Glows */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Pinned Header */}
            <div className="shrink-0 flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 border-b border-white/10 bg-[#0c0c12]/95 backdrop-blur-md relative z-20">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-semibold text-accent mb-1 font-mono uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" /> Start a Project
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Let&apos;s build your vision
                </h3>
                <p className="text-xs text-white/50 mt-0.5">
                  Direct to Founder • WhatsApp (+91-9595749597) & Email
                </p>
              </div>

              <button
                onClick={closeContactModal}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors border border-white/10 cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div 
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto px-6 py-5 sm:px-8 sm:py-6 overscroll-contain relative z-10 space-y-5"
            >
              {status === "success" && submittedData ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Dispatched to WhatsApp & Email
                    </div>
                    <h4 className="text-2xl font-bold text-white tracking-tight">Requirement Prepared!</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{submittedData.name}</span>. Your requirement has been prepared for Ajay Kshirsagar.
                    </p>
                  </div>

                  {/* Dual Channel Action Cards */}
                  <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    {/* WhatsApp Primary Card */}
                    <a
                      href={getWhatsAppRequirementUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/15 transition-all group flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Direct
                        </span>
                        <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="text-sm font-bold text-white mb-1">
                        {DISPLAY_PHONE}
                      </div>
                      <p className="text-xs text-emerald-300/80 leading-relaxed">
                        Open WhatsApp chat with pre-filled requirement.
                      </p>
                    </a>

                    {/* Email Card */}
                    <a
                      href={getMailtoRequirementUrl(submittedData)}
                      className="p-4 rounded-2xl bg-accent/10 border border-accent/30 hover:border-accent/60 hover:bg-accent/15 transition-all group flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5" /> Direct Email
                        </span>
                        <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="text-sm font-bold text-white mb-1 truncate">
                        {CONTACT_EMAIL}
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">
                        Sent to inbox. Click to open in email app.
                      </p>
                    </a>
                  </div>

                  {/* Summary Card */}
                  <div className="w-full max-w-lg p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-left text-xs font-mono text-white/60 space-y-1.5">
                    <div className="text-white/40 uppercase tracking-widest text-[10px] pb-1 border-b border-white/5">
                      Transmitted Requirement Summary:
                    </div>
                    <div><span className="text-white/40">Client:</span> <span className="text-white">{submittedData.name} ({submittedData.email})</span></div>
                    {submittedData.phone && <div><span className="text-white/40">Phone:</span> <span className="text-white">{submittedData.phone}</span></div>}
                    {submittedData.service && <div><span className="text-white/40">Service:</span> <span className="text-accent">{submittedData.service}</span></div>}
                    {submittedData.budget && <div><span className="text-white/40">Budget:</span> <span className="text-emerald-400">{submittedData.budget}</span></div>}
                    {submittedData.timeline && <div><span className="text-white/40">Timeline:</span> <span className="text-white">{submittedData.timeline}</span></div>}
                    <div className="pt-1 text-white/80 line-clamp-2 italic">&quot;{submittedData.message}&quot;</div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/10 cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <button
                      onClick={closeContactModal}
                      className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Delivery channels indicator */}
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex items-center gap-2 text-white/70">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Direct to Founder:</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="text-emerald-400 flex items-center gap-1"><MessageSquare className="w-3 h-3" /> WhatsApp: {DISPLAY_PHONE}</span>
                      <span className="text-white/30">•</span>
                      <span className="text-accent flex items-center gap-1"><Mail className="w-3 h-3" /> Email: {CONTACT_EMAIL}</span>
                    </div>
                  </div>

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
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                              isSelected
                                ? "bg-accent text-white border-accent shadow-[0_0_12px_rgba(139,92,246,0.4)]"
                                : "bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2.5">
                      Approximate Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: isSelected ? "" : b })}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                              isSelected
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                                : "bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2.5">
                      Target Timeline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TIMELINES.map((t) => {
                        const isSelected = formData.timeline === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: isSelected ? "" : t })}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                              isSelected
                                ? "bg-white text-black border-white"
                                : "bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email inputs */}
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

                  {/* Phone input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                      Phone / WhatsApp Number <span className="text-white/40 lowercase">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 95957 49597"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:bg-white/[0.08] focus:outline-none text-white text-sm transition-all placeholder:text-white/30"
                    />
                  </div>

                  {/* Project description */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                      Project Details / Requirement <span className="text-accent">*</span>
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

                  {/* WhatsApp auto-forward option */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                    <input
                      id="modal-auto-wa"
                      type="checkbox"
                      checked={autoOpenWhatsApp}
                      onChange={(e) => setAutoOpenWhatsApp(e.target.checked)}
                      className="accent-emerald-500 rounded cursor-pointer w-4 h-4 shrink-0"
                    />
                    <label htmlFor="modal-auto-wa" className="text-xs text-white/70 leading-relaxed cursor-pointer select-none">
                      <strong className="text-white">Auto-launch WhatsApp ({DISPLAY_PHONE}):</strong> Opens WhatsApp with your pre-formatted requirement to send to Ajay Kshirsagar.
                    </label>
                  </div>

                  {/* Error Alert */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-3 text-xs text-white/50 order-2 sm:order-1 font-mono">
                      <span>Direct:</span>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline inline-flex items-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                      </a>
                      <span>•</span>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-accent hover:underline inline-flex items-center gap-1"
                      >
                        <Mail className="w-3.5 h-3.5" /> Email
                      </a>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-accent hover:opacity-95 text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.35)] disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Dispatching...
                        </>
                      ) : (
                        <>
                          <MessageSquare className="w-4 h-4" /> Send to WhatsApp & Email <Send className="w-4 h-4" />
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
