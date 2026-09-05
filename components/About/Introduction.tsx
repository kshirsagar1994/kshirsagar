"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Code2, 
  BrainCircuit, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronRight,
  ShieldCheck, 
  Zap, 
  Layers,
  Activity,
  Award,
  Terminal,
  Search,
  Rocket,
  TrendingUp
} from "lucide-react";

interface AboutPillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  color: string;
  accentRgb: string;
  icon: React.ReactNode;
  badge: string;
  metric: string;
  description: string;
  capabilities: string[];
}

const pillars: AboutPillar[] = [
  {
    id: "engineering",
    number: "01",
    title: "Architectural Integrity",
    tagline: "Clean, Scalable & Resilient",
    category: "ENGINEERING DNA",
    color: "#8b5cf6",
    accentRgb: "139, 92, 246",
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
    badge: "Built to Last",
    metric: "Zero-Debt Codebase",
    description: "We don't build disposable prototypes. Using strict TypeScript, modular domain-driven architecture, and comprehensive automated test suites, our systems endure heavy loads with rock-solid stability.",
    capabilities: [
      "Strict TypeScript & Clean Architecture",
      "Domain-Driven Modular Design",
      "Microservices & Serverless Scaling",
      "Automated CI/CD Deployment",
    ],
  },
  {
    id: "business",
    number: "02",
    title: "Business-Driven Innovation",
    tagline: "Outcome-First Execution",
    category: "STRATEGY & VALUE",
    color: "#06b6d4",
    accentRgb: "6, 182, 212",
    icon: <Target className="w-5 h-5 text-cyan-400" />,
    badge: "ROI Focused",
    metric: "100% Client Alignment",
    description: "Code is a vehicle for growth, not vanity. We immerse ourselves in your market dynamics, customer workflows, and unit economics to engineer products that convert users into advocates.",
    capabilities: [
      "Rapid MVP-to-Scale Roadmaps",
      "User Journey & Conversion UX",
      "Enterprise Workflow Optimization",
      "Transparent Milestone Tracking",
    ],
  },
  {
    id: "ai",
    number: "03",
    title: "Applied AI & Intelligence",
    tagline: "Autonomous Modern Systems",
    category: "NEXT-GEN TECH",
    color: "#ec4899",
    accentRgb: "236, 72, 153",
    icon: <BrainCircuit className="w-5 h-5 text-pink-400" />,
    badge: "Smart Automation",
    metric: "Intelligent Workflows",
    description: "We integrate enterprise-grade LLMs, vector search, and deterministic autonomous agents directly into production apps, turning passive software tools into proactive revenue drivers.",
    capabilities: [
      "Autonomous Multi-Agent Systems",
      "Retrieval-Augmented Generation (RAG)",
      "Real-Time Vector Embeddings",
      "Custom Model Orchestration",
    ],
  },
];

interface PipelineStep {
  id: string;
  name: string;
  phase: string;
  desc: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  accentRgb: string;
  highlight?: boolean;
}

const lifecycleSteps: PipelineStep[] = [
  {
    id: "01",
    phase: "PHASE 01",
    name: "Technology",
    desc: "Modern Stack",
    badge: "Next.js 16 • Cloud • AI",
    icon: Terminal,
    color: "#8b5cf6",
    accentRgb: "139, 92, 246",
  },
  {
    id: "02",
    phase: "PHASE 02",
    name: "Problem",
    desc: "Root Discovery",
    badge: "Pain-Point Diagnosis",
    icon: Search,
    color: "#06b6d4",
    accentRgb: "6, 182, 212",
  },
  {
    id: "03",
    phase: "PHASE 03",
    name: "Solution",
    desc: "Tailored Architecture",
    badge: "Zero-Debt Blueprint",
    icon: Layers,
    color: "#3b82f6",
    accentRgb: "59, 130, 246",
  },
  {
    id: "04",
    phase: "PHASE 04",
    name: "Product",
    desc: "Polished Launch",
    badge: "Lighthouse 99+ • 99.99% SLA",
    icon: Rocket,
    color: "#ec4899",
    accentRgb: "236, 72, 153",
  },
  {
    id: "05",
    phase: "PHASE 05",
    name: "Growth",
    desc: "Exponential Scale",
    badge: "Continuous Value Compounding",
    icon: TrendingUp,
    color: "#10b981",
    accentRgb: "16, 185, 129",
    highlight: true,
  },
];

const stats = [
  { label: "Engineering Standard", value: "99.99%", detail: "Production SLA" },
  { label: "Code Ownership", value: "100%", detail: "Your IP from Day 1" },
  { label: "Agile Sprints", value: "2-Week", detail: "Continuous Delivery" },
  { label: "Client Transparency", value: "Direct", detail: "Slack & Video Standups" },
];

export default function Introduction() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="about" className="w-full bg-[#050505] py-12 md:py-16 px-6 md:px-12 relative z-20 overflow-hidden">
      
      {/* Ambient Background Glows matching Services & Projects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-accent/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-purple-700/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Cyber Grid Pattern Background matching Services */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header matching Services style - Compacted */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" /> Who We Are & Our Philosophy
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 max-w-4xl"
          >
            Technology should solve problems,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400">
              not create them.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-white/60 font-medium max-w-2xl leading-relaxed"
          >
            Kshirsagar turns ambitious visions into reliable, high-performance digital engines — engineered for scale, built without compromise.
          </motion.p>
        </div>

        {/* Dynamic Growth Journey Pipeline (High-Tech Futuristic Command Center) - Compacted */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.1] backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Telemetry Header - Compact */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/80 font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-accent" /> Our Execution Pipeline
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
              <span className="text-emerald-400">● 5 STAGES</span>
              <span>•</span>
              <span>100% DETERMINISTIC DELIVERY</span>
            </div>
          </div>

          {/* Connecting Track Line for Desktop */}
          <div className="hidden lg:block absolute top-[60%] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-purple-500/20 via-cyan-500/30 to-emerald-500/40 pointer-events-none z-0">
            {/* Pulsing energy beam moving across the track */}
            <motion.div 
              animate={{ x: ["-100%", "900%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-20 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_10px_rgba(139,92,246,1)]"
            />
          </div>

          {/* 5 High-Tech Pipeline Stage Cards - Compact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 items-stretch relative z-10">
            {lifecycleSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`group relative rounded-xl p-3 sm:p-3.5 border transition-all duration-300 flex flex-col justify-between backdrop-blur-xl ${
                    step.highlight
                      ? "bg-gradient-to-b from-emerald-500/15 via-[#0b1411]/90 to-[#070b0a]/90 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                      : "bg-[#090b14]/80 border-white/10 hover:border-accent/40 hover:bg-[#0e1020]/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                  }`}
                >
                  {/* Subtle Node Radial Glow */}
                  <div 
                    className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-[30px] opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity"
                    style={{ backgroundColor: step.color }}
                  />

                  <div>
                    {/* Top Step Pill & Node Circle */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span 
                        className="text-[9px] font-mono font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-full"
                        style={{
                          color: step.color,
                          backgroundColor: `rgba(${step.accentRgb}, 0.1)`,
                          border: `1px solid rgba(${step.accentRgb}, 0.25)`
                        }}
                      >
                        {step.phase}
                      </span>

                      <div 
                        className="w-5 h-5 rounded-lg flex items-center justify-center font-mono font-bold text-[10px] border transition-transform duration-300 group-hover:scale-110"
                        style={{
                          color: step.highlight ? "#ffffff" : step.color,
                          backgroundColor: step.highlight ? step.color : `rgba(${step.accentRgb}, 0.15)`,
                          borderColor: `rgba(${step.accentRgb}, 0.4)`,
                          boxShadow: step.highlight ? `0 0 10px rgba(${step.accentRgb}, 0.6)` : "none"
                        }}
                      >
                        {step.id}
                      </div>
                    </div>

                    {/* Central Icon Node */}
                    <div className="my-1.5 flex items-center gap-2.5">
                      <div 
                        className="w-8 h-8 rounded-xl flex items-center justify-center border shadow-md transition-transform duration-300 group-hover:scale-110 shrink-0"
                        style={{
                          backgroundColor: `rgba(${step.accentRgb}, 0.12)`,
                          borderColor: `rgba(${step.accentRgb}, 0.35)`,
                          color: step.color
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="min-w-0">
                        <h4 className={`text-sm font-bold tracking-tight transition-colors truncate ${
                          step.highlight ? "text-emerald-300" : "text-white group-hover:text-accent"
                        }`}>
                          {step.name}
                        </h4>
                        <p className="text-[10px] font-mono text-white/50 truncate">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Deliverable Badge */}
                  <div className="pt-2 mt-2 border-t border-white/5">
                    <div 
                      className="text-[9px] font-mono px-2 py-0.5 rounded-md border truncate font-medium"
                      style={{
                        backgroundColor: `rgba(${step.accentRgb}, 0.06)`,
                        borderColor: `rgba(${step.accentRgb}, 0.18)`,
                        color: step.highlight ? "#6ee7b7" : "rgba(255,255,255,0.75)"
                      }}
                      title={step.badge}
                    >
                      {step.badge}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 3 Core Pillars: High-Tech Cyber Cards - Compact & Title Focused */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-start mb-6">
          {pillars.map((pillar) => {
            const isExpanded = hoveredId === pillar.id || activeId === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                layout
                onMouseEnter={() => setHoveredId(pillar.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCardClick(pillar.id)}
                className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-300 backdrop-blur-xl border shadow-lg overflow-hidden cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? "bg-[#0d0d1a]/95 border-accent shadow-[0_0_30px_rgba(139,92,246,0.25)]"
                    : "bg-[#090b14]/90 border-white/10 hover:border-white/25 hover:bg-[#0d0e1a]/90"
                }`}
              >
                {/* Radial Ambient Glow */}
                <div 
                  className="absolute top-0 right-0 w-36 h-36 rounded-full blur-[60px] opacity-15 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: pillar.color }}
                />

                <div>
                  {/* Top Card Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center border shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105"
                        style={{ 
                          backgroundColor: `rgba(${pillar.accentRgb}, 0.15)`, 
                          borderColor: `rgba(${pillar.accentRgb}, 0.35)` 
                        }}
                      >
                        {pillar.icon}
                      </div>

                      <span 
                        className="text-[9px] px-2 py-0.5 rounded-full font-mono font-bold tracking-wider uppercase"
                        style={{ 
                          backgroundColor: `rgba(${pillar.accentRgb}, 0.1)`, 
                          color: pillar.color,
                          border: `1px solid rgba(${pillar.accentRgb}, 0.25)`
                        }}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-widest text-white/40">
                        {pillar.number}
                      </span>
                      <div 
                        className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isExpanded
                            ? "bg-accent text-white border-accent rotate-180 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                            : "bg-white/5 text-white/40 border-white/10 group-hover:text-white group-hover:border-white/20"
                        }`}
                      >
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div className="text-[9px] font-semibold tracking-widest text-accent uppercase font-mono mb-1">
                    {pillar.category}
                  </div>
                  <div className="min-h-[2.5rem] flex items-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Hint indicator when collapsed */}
                  {!isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40 group-hover:text-accent transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-accent" /> Hover to explore
                      </span>
                      <ArrowRight className="w-3 h-3 text-white/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </motion.div>
                  )}

                  {/* Expandable Content revealed on hover */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: "auto",
                          transition: { 
                            height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.2, delay: 0.05 }
                          } 
                        }}
                        exit={{ 
                          opacity: 0, 
                          height: 0,
                          transition: { 
                            height: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.12 }
                          } 
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-white/10 mt-2 space-y-3">
                          <div className="text-[11px] font-mono text-white/50">
                            {pillar.tagline}
                          </div>

                          {/* Description */}
                          <p className="text-xs text-white/70 leading-relaxed">
                            {pillar.description}
                          </p>

                          {/* Metric Pill */}
                          <div 
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold border"
                            style={{
                              backgroundColor: `rgba(${pillar.accentRgb}, 0.08)`,
                              color: pillar.color,
                              borderColor: `rgba(${pillar.accentRgb}, 0.2)`
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.color }} />
                            <span>{pillar.metric}</span>
                          </div>

                          {/* Capabilities List */}
                          <div className="space-y-1.5 pt-3 border-t border-white/10">
                            {pillar.capabilities.map((cap) => (
                              <div key={cap} className="flex items-center gap-1.5 text-[11px] font-mono text-white/80">
                                <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Proof Strip - Compact Inline Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-lg"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col text-center sm:text-left">
              <span className="text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-accent">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-white/80 mt-0.5">{stat.label}</span>
              <span className="text-[10px] font-mono text-white/40">{stat.detail}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

