"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Loader2, 
  Clock, 
  Sparkles,
  Copy,
  Check
} from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const SERVICES = [
  "Web Development",
  "Mobile App",
  "AI & Cloud Solutions",
  "Digital Marketing",
  "Business Softwares",
];

const BUDGETS = [
  "< ₹50,000",
  "₹50k - ₹2 Lakh",
  "₹2 Lakh - ₹5 Lakh",
  "₹5 Lakh+",
  "Flexible",
];

export default function CTA() {
  const { openContactModal } = useContactModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ajaykshirsagar1208@gmail.com");
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
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
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section id="contact" className="w-full bg-[#050505] py-24 md:py-36 px-6 md:px-12 relative z-20 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <motion.div 
        className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[160px] pointer-events-none"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="absolute -bottom-24 right-1/4 w-[400px] h-[400px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid: Agency Pitch & Direct Contacts (Left) + Pro Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Availability Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Q2/Q3 Projects
              </motion.div>

              {/* Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
              >
                Let&apos;s build something <span className="text-accent">extraordinary.</span>
              </motion.h2>

              {/* Subtext */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-base md:text-lg text-white/60 font-normal mb-8 leading-relaxed"
              >
                Have an idea, project, or enterprise need? Tell us your requirements or reach out directly. We transform complex challenges into world-class digital products.
              </motion.p>
            </div>

            {/* Direct Channels Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 pt-4 border-t border-white/10"
            >
              {/* Email item with copy button */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                <a 
                  href="mailto:ajaykshirsagar1208@gmail.com"
                  className="flex items-center gap-3.5 group min-w-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-white/50 font-medium">Direct Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-accent transition-colors truncate">
                      ajaykshirsagar1208@gmail.com
                    </div>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors ml-2 shrink-0 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp / Phone item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                <a 
                  href="https://wa.me/919595749597?text=Hi%20Kshirsagar%20Team%2C%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-medium">Phone & WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      +91 95957 49597
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919595749597"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                  title="Call directly"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              {/* Location & Speed item */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white/40 shrink-0" />
                  <span className="text-xs text-white/70">Solapur, MH, India</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs text-white/70">Replies in &lt; 4 hrs</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Pro-Level Interactive Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-10 rounded-3xl bg-[#09090f]/90 border border-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    Start a Project <Sparkles className="w-4 h-4 text-accent" />
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mt-0.5">
                    Fill out the form below or open our dedicated inquiry launcher.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openContactModal()}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Expand Modal <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {status === "success" ? (
                <div className="py-12 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md">
                    <h4 className="text-2xl font-bold text-white">Project Inquiry Received!</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. We will review your project requirements and email you back at <span className="text-accent font-semibold">{formData.email}</span>.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/919595749597?text=Hi%20Kshirsagar%20Team%2C%20I%20just%20submitted%20a%20project%20inquiry%20for%20${encodeURIComponent(formData.service || "a project")}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" /> Message on WhatsApp
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/10 cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Service selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2.5">
                      Service Interested In
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
                                : "bg-white/5 text-white/70 border-white/10 hover:border-white/25 hover:text-white"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2.5">
                      Project Budget
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
                                : "bg-white/5 text-white/70 border-white/10 hover:border-white/25 hover:text-white"
                            }`}
                          >
                            {b}
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

                  {/* Phone */}
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
                      Tell Us About Your Project <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="What are you building? Mention your goals, key features, or expected launch date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:bg-white/[0.08] focus:outline-none text-white text-sm transition-all placeholder:text-white/30 resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button & Alternative Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-white/40 text-center sm:text-left">
                      🔒 No spam. Your project information is strictly confidential.
                    </p>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-accent text-black hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Sending Inquiry...
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

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
