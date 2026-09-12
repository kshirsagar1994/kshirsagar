"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Sparkles,
  Copy, 
  Check
} from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { DISPLAY_PHONE, CONTACT_EMAIL } from "@/lib/contactUtils";
import ProjectInquiryForm from "@/components/Contact/ProjectInquiryForm";

export default function CTA() {
  const { openContactModal } = useContactModal();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="w-full bg-[#050505] py-14 md:py-20 px-6 md:px-12 relative z-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <motion.div 
        className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[160px] pointer-events-none"
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute -bottom-24 right-1/4 w-[400px] h-[400px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Q2/Q3 Projects
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
              >
                Let&apos;s build something <span className="text-accent">extraordinary.</span>
              </motion.h2>

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
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3.5 group min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-white/50 font-medium">Direct Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-accent transition-colors truncate">
                      {CONTACT_EMAIL}
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

              {/* WhatsApp */}
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
                      {DISPLAY_PHONE}
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

              {/* Location & Speed */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white/40 shrink-0" />
                  <span className="text-xs text-white/70">Solapur, MH, India</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs text-white/70">Replies in &lt; 15 mins</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Reusable Interactive Contact Form */}
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

              <ProjectInquiryForm variant="inline" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
