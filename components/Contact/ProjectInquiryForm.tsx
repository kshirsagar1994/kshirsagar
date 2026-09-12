"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  Loader2, 
  Sparkles, 
  Clock,
  Copy,
  Check
} from "lucide-react";
import { 
  CONTACT_EMAIL, 
  getWhatsAppRequirementUrl, 
  getMailtoRequirementUrl,
  RequirementPayload
} from "@/lib/contactUtils";

export const SERVICES = [
  "Web Development",
  "Mobile App",
  "AI & Cloud Solutions",
  "Digital Marketing",
  "Enterprise Software",
  "UI/UX Design",
];

export const BUDGETS = [
  "< ₹50,000",
  "₹50k - ₹2 Lakh",
  "₹2 Lakh - ₹5 Lakh",
  "₹5 Lakh+",
  "Flexible",
];

export const TIMELINES = [
  "Urgent (< 1 mo)",
  "1 - 3 months",
  "3+ months",
  "Flexible",
];

interface ProjectInquiryFormProps {
  initialService?: string;
  variant?: "modal" | "inline";
  onSuccess?: () => void;
}

export default function ProjectInquiryForm({
  initialService = "",
  variant = "modal",
  onSuccess,
}: ProjectInquiryFormProps) {
  const [formData, setFormData] = useState<RequirementPayload>({
    name: "",
    email: "",
    phone: "",
    service: initialService,
    budget: "",
    timeline: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState<RequirementPayload | null>(null);
  const [autoOpenWhatsApp, setAutoOpenWhatsApp] = useState(true);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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

    if (autoOpenWhatsApp && typeof window !== "undefined") {
      window.open(getWhatsAppRequirementUrl(snapshot), "_blank");
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(snapshot),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");

      setStatus("success");
      onSuccess?.();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please try WhatsApp directly.");
    }
  };

  const isModal = variant === "modal";

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {status === "success" && submittedData ? (
          <motion.div
            key="success-state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-emerald-500/30 text-center ${isModal ? "my-auto" : ""}`}
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Requirement Received!</h3>
            <p className="text-sm text-zinc-400 max-w-md mx-auto mb-6">
              Thank you, <span className="text-white font-medium">{submittedData.name}</span>. Our technical leads will review your requirement and connect within 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppRequirementUrl(submittedData)}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                href={getMailtoRequirementUrl(submittedData)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium border border-zinc-700 transition-all"
              >
                <Mail className="w-4 h-4" />
                Open in Email App
              </a>
            </div>
          </motion.div>
        ) : (
          <form key="form-state" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                {errorMessage}
              </div>
            )}

            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-accent/60 transition-colors"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Phone / WhatsApp <span className="text-zinc-500 text-[10px]">(Optional)</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-accent/60 transition-colors"
              />
            </div>

            {/* Service Pills */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Required Service
              </label>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: srv === formData.service ? "" : srv })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                      formData.service === srv
                        ? "bg-accent/20 border-accent text-accent shadow-[0_0_12px_rgba(139,92,246,0.25)]"
                        : "bg-zinc-900/60 border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-accent/60 transition-colors cursor-pointer"
                >
                  <option value="">Select Range</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b} className="bg-zinc-900 text-white">{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-accent/60 transition-colors cursor-pointer"
                >
                  <option value="">Select Timeline</option>
                  {TIMELINES.map((t) => (
                    <option key={t} value={t} className="bg-zinc-900 text-white">{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                Project Scope & Requirements *
              </label>
              <textarea
                required
                rows={isModal ? 3 : 4}
                placeholder="Describe your vision, core features, or problems to solve..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-accent/60 transition-colors resize-none"
              />
            </div>

            {/* Auto WhatsApp Option */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20">
              <label htmlFor="auto-wa" className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  id="auto-wa"
                  type="checkbox"
                  checked={autoOpenWhatsApp}
                  onChange={(e) => setAutoOpenWhatsApp(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-500 bg-zinc-900 border-zinc-700 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-xs text-zinc-300">Auto-dispatch requirement to WhatsApp for instant 15-min reply</span>
              </label>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent via-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Dispatching Requirement...</span>
                </>
              ) : (
                <>
                  <span>Send Project Requirement</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Direct contact shortcuts */}
            <div className="flex items-center justify-center gap-4 text-xs text-zinc-500 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-accent" /> Avg Reply: &lt;15 Mins
              </span>
              <span>•</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="hover:text-zinc-300 transition-colors cursor-pointer flex items-center gap-1"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copiedEmail ? "Copied!" : CONTACT_EMAIL}
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
