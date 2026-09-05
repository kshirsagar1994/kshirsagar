"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Handshake, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Sparkles, 
  Terminal,
  Clock,
  Check
} from "lucide-react";

const trustMetrics = [
  { label: "Production SLA Uptime", value: "99.99%", detail: "HA Cluster" },
  { label: "API Global Latency", value: "< 60ms", detail: "Edge CDN" },
  { label: "Codebase Ownership", value: "100%", detail: "Zero Lock-in" },
  { label: "QA Automated Coverage", value: "98%+", detail: "E2E Verified" },
];

const pillars = [
  {
    id: "architecture",
    icon: Code2,
    color: "#8b5cf6",
    accentRgb: "139, 92, 246",
    badge: "ZERO DEBT",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    title: "Architectural Rigor",
    description: "Strict TypeScript, modular domain clean architecture, and automated test pipelines ensuring your systems endure heavy production scale.",
    pillIcon: Terminal,
    pillText: "Modular Clean Arch • Lighthouse 98+",
  },
  {
    id: "ai",
    icon: BrainCircuit,
    color: "#ec4899",
    accentRgb: "236, 72, 153",
    badge: "NEXT-GEN AI",
    badgeColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    title: "Native AI Systems",
    description: "Production LLM workflows, real-time vector embeddings, and deterministic autonomous agents built directly into core business logic.",
    pillIcon: Sparkles,
    pillText: "Multi-Agent • Vector RAG",
  },
  {
    id: "execution",
    icon: Layers,
    color: "#3b82f6",
    accentRgb: "59, 130, 246",
    badge: "END-TO-END",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "Unified Execution",
    description: "From product wireframes and design systems to distributed backend microservices and cloud deployment — all under one cohesive roof.",
    pillIcon: Zap,
    pillText: "Full-Stack • Zero Handoff Gap",
  },
  {
    id: "partnership",
    icon: Handshake,
    color: "#10b981",
    accentRgb: "16, 185, 129",
    badge: "FRACTIONAL CTO",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "Dedicated Partnership",
    description: "We don't abandon you at launch. We embed alongside your leadership with direct Slack channels and 15-minute response SLAs.",
    pillIcon: Clock,
    pillText: "15-Min Critical SLA • Direct Slack",
  },
];

export default function WhyKshirsagar() {
  return (
    <section id="difference" className="w-full bg-[#050505] py-8 md:py-10 px-6 md:px-12 relative z-20 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section: Compact 1-Screen Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-accent/30 bg-accent/[0.08] backdrop-blur-md text-accent text-[11px] font-mono uppercase tracking-widest mb-2 w-fit shadow-[0_0_12px_rgba(139,92,246,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>The Kshirsagar Difference</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Why partner{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400">
                with us?
              </span>
            </h2>

            <p className="text-white/60 text-xs sm:text-sm mt-1.5 leading-relaxed">
              We merge architectural precision with business empathy — zero debt, 100% IP ownership, engineered to scale.
            </p>
          </motion.div>

          {/* SLA & Reliability Proof Pills: Compact Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 lg:min-w-[420px]"
          >
            {trustMetrics.map((stat, i) => (
              <div 
                key={i}
                className="px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-accent/40 transition-colors"
              >
                <div className="text-base sm:text-lg font-bold text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
                  {stat.value}
                </div>
                <div className="text-[10px] font-medium text-white/80 leading-tight">{stat.label}</div>
                <div className="text-[9px] text-white/40 font-mono">{stat.detail}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 4 Core Pillars in a Single-Row Grid on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-3.5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const PillIcon = pillar.pillIcon;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="group relative bg-[#090b14]/90 border border-white/10 hover:border-accent/40 rounded-2xl p-4 transition-all duration-300 backdrop-blur-xl shadow-lg flex flex-col justify-between overflow-hidden"
              >
                {/* Radial ambient glow */}
                <div 
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none"
                  style={{ backgroundColor: pillar.color }}
                />

                <div className="relative z-10">
                  {/* Top card icon & badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center border shadow-md transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: `rgba(${pillar.accentRgb}, 0.12)`,
                        borderColor: `rgba(${pillar.accentRgb}, 0.3)`,
                        color: pillar.color
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${pillar.badgeColor}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-accent transition-colors mb-1.5">
                    {pillar.title}
                  </h3>

                  <p className="text-white/60 text-xs leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom telemetry micro-badge */}
                <div className="pt-2.5 mt-3 border-t border-white/5 relative z-10">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/70">
                    <PillIcon className="w-3 h-3 text-accent shrink-0" />
                    <span className="truncate">{pillar.pillText}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full-Width IP Ownership & Enterprise Security Banner: Compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/[0.08] via-white/[0.02] to-accent/[0.05] border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span>100% IP Ownership & Enterprise Security</span>
              </h4>
              <p className="text-[11px] text-white/60 mt-0.5">
                You own every line of code, design asset, Git repository, and database schema from day zero. Zero royalties.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            {["SOC2 Ready", "GDPR Compliant", "Git Full Transfer", "Zero Royalties"].map((badge) => (
              <span 
                key={badge}
                className="px-2.5 py-0.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 font-mono text-[10px] flex items-center gap-1"
              >
                <Check className="w-2.5 h-2.5" /> {badge}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
