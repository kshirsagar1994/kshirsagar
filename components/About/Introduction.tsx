"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Code2, 
  Target, 
  BrainCircuit, 
  ArrowUpRight, 
  CheckCircle2 
} from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

interface Principle {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  category: string;
  color: string;
  accentRgb: string;
  description: string;
  tag: string;
}

const principles: Principle[] = [
  {
    icon: Code2,
    category: "ENGINEERING RIGOR",
    title: "Architectural Integrity",
    color: "#8b5cf6",
    accentRgb: "139, 92, 246",
    description: "Strict TypeScript, modular domain design, and comprehensive test suites. We engineer resilient systems that scale without accumulating technical debt.",
    tag: "Zero-Debt Code",
  },
  {
    icon: Target,
    category: "COMMERCIAL FOCUS",
    title: "Business-Driven Execution",
    color: "#06b6d4",
    accentRgb: "6, 182, 212",
    description: "Code is an instrument for revenue and operational leverage. We align sprint priorities with customer conversion, unit economics, and retention.",
    tag: "Measurable ROI",
  },
  {
    icon: BrainCircuit,
    category: "INTELLIGENT SYSTEMS",
    title: "Applied AI & Automation",
    color: "#ec4899",
    accentRgb: "236, 72, 153",
    description: "Enterprise LLM workflows, real-time vector retrieval, and deterministic autonomous agents integrated directly into core business operations.",
    tag: "Autonomous Ops",
  },
];

const commitments = [
  "100% Code & IP Ownership from Day 1 — zero proprietary lock-in",
  "Direct Senior Access — transparent bi-weekly sprints and video standups",
  "End-to-End Reliability — from system blueprint to cloud auto-scaling",
];

const stats = [
  { value: "99.99%", label: "Production SLA", detail: "High-availability clusters" },
  { value: "100%", label: "IP Ownership", detail: "Your code and copyright" },
  { value: "2-Week", label: "Agile Sprints", detail: "Predictable continuous delivery" },
  { value: "Sub-Second", label: "Render Velocity", detail: "Lighthouse 95+ performance" },
];

export default function Introduction() {
  const { openContactModal } = useContactModal();

  return (
    <section id="about" className="w-full bg-[#050505] py-16 md:py-20 px-6 md:px-12 relative z-20 overflow-hidden border-t border-white/5">
      
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-accent/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-cyan-600/8 blur-[150px] rounded-full pointer-events-none" />

      {/* Cyber Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main 2-Column Professional Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand Manifesto & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold uppercase tracking-widest mb-4 w-fit shadow-[0_0_15px_rgba(139,92,246,0.12)]"
            >
              <Sparkles className="w-3.5 h-3.5" /> Who We Are & Our Philosophy
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.15]"
            >
              Technology should solve problems,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400">
                not create them.
              </span>
            </motion.h2>

            {/* Editorial Lead Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-white/80 font-medium leading-relaxed mb-4"
            >
              Kshirsagar is an elite technology and software engineering studio. We partner with fast-growing businesses and forward-thinking enterprises to build reliable, high-performance web platforms, mobile ecosystems, and bespoke digital infrastructure.
            </motion.p>

            {/* Supporting Story */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-sm text-white/50 leading-relaxed mb-6"
            >
              We discard bloated agency models and prototype-grade shortcuts. By pairing clean domain architecture with direct engineer-to-client collaboration, we ensure every digital asset is engineered for durability, speed, and real commercial impact.
            </motion.p>

            {/* Key Commitments Checklist */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2.5 mb-8"
            >
              {commitments.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/75 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => openContactModal("About Us Consultation")}
                className="px-6 py-3 rounded-full bg-white hover:bg-accent text-black hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2 cursor-pointer"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 text-xs font-semibold tracking-wide transition-colors"
              >
                Explore Services
              </a>
            </motion.div>

          </div>

          {/* Right Column: 3 Core Engineering Foundations (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {principles.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -2 }}
                  className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-accent/40 backdrop-blur-xl transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Subtle Corner Glow */}
                  <div 
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[40px] opacity-10 group-hover:opacity-25 pointer-events-none transition-opacity duration-300"
                    style={{ backgroundColor: pillar.color }}
                  />

                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-9 h-9 rounded-xl flex items-center justify-center border shadow-sm shrink-0"
                        style={{ 
                          backgroundColor: `rgba(${pillar.accentRgb}, 0.12)`, 
                          borderColor: `rgba(${pillar.accentRgb}, 0.3)`,
                          color: pillar.color
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block">
                          {pillar.category}
                        </span>
                        <h3 className="text-base font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <span 
                      className="text-[10px] px-2.5 py-0.5 rounded-full font-mono font-semibold"
                      style={{
                        backgroundColor: `rgba(${pillar.accentRgb}, 0.08)`,
                        color: pillar.color,
                        border: `1px solid rgba(${pillar.accentRgb}, 0.2)`
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  <p className="text-xs text-white/60 leading-relaxed relative z-10 pl-12">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Credibility Proof Strip - Integrated & Minimal */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-accent">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-white/80 mt-1">{stat.label}</span>
              <span className="text-[11px] font-mono text-white/40">{stat.detail}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
