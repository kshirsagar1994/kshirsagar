"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, 
  Server, 
  Smartphone, 
  Cloud, 
  Database, 
  BrainCircuit, 
  Sparkles, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Terminal,
  Compass,
  LayoutGrid
} from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

interface TechCategory {
  id: string;
  label: string;
  title: string;
  color: string;
  accentRgb: string;
  icon: React.ReactNode;
  position: { x: string; y: string };
  badge: string;
  description: string;
  metric: string;
  items: string[];
}

const techCategories: TechCategory[] = [
  {
    id: "frontend",
    label: "FRONTEND",
    title: "Web & UI Architecture",
    color: "#8b5cf6",
    accentRgb: "139, 92, 246",
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    position: { x: "20%", y: "18%" }, // Top Left
    badge: "Interactive & 3D",
    description: "Ultra-responsive client interfaces with GPU-accelerated micro-interactions and sub-second paint times.",
    metric: "60-120 FPS Rendering",
    items: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "Three.js / WebGL", "Framer Motion"],
  },
  {
    id: "backend",
    label: "BACKEND",
    title: "Server & Microservices",
    color: "#3b82f6",
    accentRgb: "59, 130, 246",
    icon: <Server className="w-5 h-5 text-blue-400" />,
    position: { x: "80%", y: "18%" }, // Top Right
    badge: "Distributed Systems",
    description: "High-throughput API backends, event-driven architectures, and resilient enterprise web services.",
    metric: "< 25ms Response",
    items: ["Node.js", "Express", "Spring Boot", "REST & GraphQL", "Python", "WebSockets"],
  },
  {
    id: "mobile",
    label: "MOBILE",
    title: "Cross-Platform & Native",
    color: "#ec4899",
    accentRgb: "236, 72, 153",
    icon: <Smartphone className="w-5 h-5 text-pink-400" />,
    position: { x: "13%", y: "45%" }, // Center Left
    badge: "iOS & Android",
    description: "Fluid cross-platform mobile apps with native capabilities, offline sync, and automated store deployments.",
    metric: "99.9% Crash-Free",
    items: ["React Native", "Flutter", "Kotlin", "Swift", "Expo", "App Store / Play Store"],
  },
  {
    id: "cloud",
    label: "CLOUD & DEVOPS",
    title: "Edge & Container Infra",
    color: "#06b6d4",
    accentRgb: "6, 182, 212",
    icon: <Cloud className="w-5 h-5 text-cyan-400" />,
    position: { x: "87%", y: "45%" }, // Center Right
    badge: "Zero Downtime",
    description: "Automated CI/CD pipelines, containerized clusters, multi-region CDN routing, and self-healing environments.",
    metric: "Multi-Region Redundancy",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel Edge", "Terraform"],
  },
  {
    id: "database",
    label: "DATABASE",
    title: "Storage & In-Memory Cache",
    color: "#10b981",
    accentRgb: "16, 185, 129",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    position: { x: "24%", y: "71%" }, // Bottom Left - elevated to avoid ticker overlap
    badge: "ACID & Real-time",
    description: "Relational persistence, vector similarity indices, low-latency caches, and real-time pub/sub streams.",
    metric: "Zero-Loss Replication",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma ORM", "Supabase"],
  },
  {
    id: "ai",
    label: "AI & AGENTS",
    title: "Autonomous Intelligence",
    color: "#f59e0b",
    accentRgb: "245, 158, 11",
    icon: <BrainCircuit className="w-5 h-5 text-amber-400" />,
    position: { x: "76%", y: "71%" }, // Bottom Right - elevated to avoid ticker overlap
    badge: "Agentic Workflows",
    description: "Contextual RAG systems, local & cloud LLMs, self-refining agentic pipelines, and business workflow automations.",
    metric: "Self-Healing AI Logic",
    items: ["OpenAI API", "Ollama Local LLMs", "RAG Pipelines", "Autonomous Agents", "n8n Automation", "Vector Embeddings"],
  },
];

export default function Technology() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"orbital" | "grid">("orbital");
  const { openContactModal } = useContactModal();

  const selectedCategory = techCategories.find((c) => c.id === activeNode);

  return (
    <section id="technologies" className="w-full bg-[#050505] py-14 md:py-18 px-6 md:px-12 relative overflow-hidden z-20">
      
      {/* Background Animated Ambient Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-accent/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-purple-700/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Cyber Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" /> Full-Stack Ecosystem
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Architected for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400">Scale & Resilience.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base md:text-xl text-white/60 font-medium max-w-3xl leading-relaxed"
          >
            Our core technological nexus bridges frontend perfection, distributed microservices, edge cloud networks, and autonomous AI systems into a cohesive, high-velocity engine.
          </motion.p>

          {/* Desktop View Switcher */}
          <div className="hidden lg:flex items-center gap-2 mt-8 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setViewMode("orbital")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                viewMode === "orbital"
                  ? "bg-accent text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Compass className="w-3.5 h-3.5" /> Interactive Orbital Nexus
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                viewMode === "grid"
                  ? "bg-accent text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Cyber Matrix Grid
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* VIEW 1: INTERACTIVE ORBITAL NEXUS (Desktop & Large Screens) */}
        {/* ============================================================ */}
        {viewMode === "orbital" && (
          <div className="hidden lg:block relative h-[800px] w-full max-w-6xl mx-auto border border-white/10 rounded-[3rem] bg-gradient-to-b from-white/[0.04] via-black/40 to-black/80 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]">
            
            {/* Ambient Orbital Rings */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-dashed border-white/10 pointer-events-none animate-[spin_120s_linear_infinite]" />
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-white/5 pointer-events-none" />

            {/* SVG Connecting Synapses / Laser Data Beams */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                {techCategories.map((tech) => (
                  <linearGradient key={`grad-${tech.id}`} id={`beam-${tech.id}`} x1="50%" y1="45%" x2={tech.position.x} y2={tech.position.y}>
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="60%" stopColor={tech.color} stopOpacity="0.6" />
                    <stop offset="100%" stopColor={tech.color} stopOpacity="0.2" />
                  </linearGradient>
                ))}
              </defs>

              {/* Connecting Curved or Straight Synapses */}
              {techCategories.map((tech) => {
                const isActive = activeNode === tech.id;
                const isAnyActive = activeNode !== null;

                return (
                  <g key={`synapse-${tech.id}`}>
                    {/* Background Static Line */}
                    <line
                      x1="50%"
                      y1="45%"
                      x2={tech.position.x}
                      y2={tech.position.y}
                      stroke={isActive ? tech.color : "rgba(255,255,255,0.08)"}
                      strokeWidth={isActive ? 2.5 : 1}
                      className="transition-all duration-300"
                    />

                    {/* Animated Pulsing Data Packet Laser */}
                    <line
                      x1="50%"
                      y1="45%"
                      x2={tech.position.x}
                      y2={tech.position.y}
                      stroke={`url(#beam-${tech.id})`}
                      strokeWidth={isActive ? 3 : 1.5}
                      strokeDasharray="8, 16"
                      className="animate-synapse-dash"
                      opacity={isActive ? 1 : isAnyActive ? 0.15 : 0.6}
                    />
                  </g>
                );
              })}
            </svg>

            {/* ========================================= */}
            {/* CENTER CORE: THE KSHIRSAGAR ECOSYSTEM HUB */}
            {/* ========================================= */}
            <motion.div 
              className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveNode(null)}
            >
              {/* Concentric Pulses */}
              <div className="absolute w-44 h-44 rounded-full bg-accent/20 animate-ping pointer-events-none opacity-40" />
              <div className="absolute w-56 h-56 rounded-full border border-accent/20 pointer-events-none animate-pulse" />

              {/* Core Nucleus Container */}
              <div className="relative w-36 h-36 rounded-full bg-[#0a0a14] border-2 border-accent/60 flex flex-col items-center justify-center p-3 text-center shadow-[0_0_50px_rgba(139,92,246,0.35)] backdrop-blur-xl group">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mb-1 text-accent group-hover:rotate-180 transition-transform duration-700">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold tracking-widest text-white uppercase leading-tight">
                  KSHIRSAGAR
                </span>
                <span className="text-[9px] font-extrabold tracking-widest text-accent uppercase">
                  ECOSYSTEM
                </span>
                <div className="mt-1 flex items-center gap-1 text-[8px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-mono">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" /> 100% ONLINE
                </div>
              </div>
            </motion.div>

            {/* ========================================= */}
            {/* ORBITING NODES / SATELLITES */}
            {/* ========================================= */}
            {techCategories.map((tech) => {
              const isHovered = activeNode === tech.id;

              return (
                <div
                  key={tech.id}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: tech.position.x, top: tech.position.y }}
                  onMouseEnter={() => setActiveNode(tech.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <motion.div
                    animate={{ 
                      scale: isHovered ? 1.08 : 1,
                      y: isHovered ? -4 : 0
                    }}
                    transition={{ duration: 0.25 }}
                    className={`relative w-64 p-5 rounded-2xl transition-all duration-300 backdrop-blur-xl border ${
                      isHovered
                        ? "bg-[#0d0d1a]/95 border-accent shadow-[0_0_35px_rgba(139,92,246,0.3)] z-30"
                        : "bg-[#0a0c14]/80 border-white/10 hover:border-white/20"
                    }`}
                  >
                    {/* Node Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center border shadow-md shrink-0"
                          style={{ 
                            backgroundColor: `rgba(${tech.accentRgb}, 0.15)`, 
                            borderColor: `rgba(${tech.accentRgb}, 0.35)` 
                          }}
                        >
                          {tech.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold tracking-wider text-white">
                            {tech.label}
                          </div>
                          <div className="text-[10px] text-white/50 truncate max-w-[120px]">
                            {tech.title}
                          </div>
                        </div>
                      </div>

                      <span 
                        className="text-[9px] px-2 py-0.5 rounded-full font-mono font-semibold"
                        style={{ 
                          backgroundColor: `rgba(${tech.accentRgb}, 0.1)`, 
                          color: tech.color,
                          border: `1px solid rgba(${tech.accentRgb}, 0.25)`
                        }}
                      >
                        {tech.badge}
                      </span>
                    </div>

                    {/* Tech List Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {tech.items.slice(0, 4).map((item) => (
                        <span 
                          key={item}
                          className={`text-[10px] px-2 py-0.5 rounded-md border font-mono transition-colors ${
                            isHovered 
                              ? "bg-white/10 text-white border-white/25" 
                              : "bg-white/5 text-white/70 border-white/5"
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                      {tech.items.length > 4 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/5 text-white/40 border border-white/5 font-mono">
                          +{tech.items.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Metric indicator on hover */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
                      <span className="flex items-center gap-1 font-mono">
                        <Activity className="w-3 h-3 text-emerald-400" /> {tech.metric}
                      </span>
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isHovered ? "translate-x-0.5 -translate-y-0.5 text-accent" : "text-white/30"}`} />
                    </div>
                  </motion.div>
                </div>
              );
            })}

            {/* Bottom Floating Telemetry Ticker */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-7 py-2.5 rounded-full bg-[#080a14]/90 border border-white/15 backdrop-blur-xl flex items-center gap-4 text-xs font-mono text-white/70 shadow-2xl z-20">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                SYSTEM LATENCY: 14ms
              </span>
              <span>•</span>
              <span>ACTIVE ARCHITECTURES: 6 CORE NODES</span>
              <span>•</span>
              <span className="text-accent">28 ENTERPRISE TECHNOLOGIES</span>
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW 2: CYBER MATRIX GRID (Mobile, Tablet, and Grid Mode) */}
        {/* ============================================================ */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${viewMode === "orbital" ? "lg:hidden" : "grid"}`}>
          {techCategories.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-3xl p-6 sm:p-8 bg-[#090b14]/90 border border-white/10 hover:border-accent/50 backdrop-blur-xl transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle background card glow */}
              <div 
                className="absolute top-0 right-0 w-44 h-44 rounded-full blur-[70px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: tech.color }}
              />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-lg shrink-0"
                    style={{ 
                      backgroundColor: `rgba(${tech.accentRgb}, 0.15)`, 
                      borderColor: `rgba(${tech.accentRgb}, 0.35)` 
                    }}
                  >
                    {tech.icon}
                  </div>

                  <span 
                    className="text-[10px] px-2.5 py-1 rounded-full font-mono font-bold tracking-wider uppercase"
                    style={{ 
                      backgroundColor: `rgba(${tech.accentRgb}, 0.1)`, 
                      color: tech.color,
                      border: `1px solid rgba(${tech.accentRgb}, 0.25)`
                    }}
                  >
                    {tech.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                  {tech.title}
                </h3>
                <div className="text-xs font-semibold tracking-widest text-accent uppercase mt-0.5 mb-3 font-mono">
                  {tech.label}
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-6 font-normal">
                  {tech.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tech.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white/80 font-mono text-xs hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Metric */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span className="flex items-center gap-1.5 font-mono text-emerald-400">
                  <Activity className="w-3.5 h-3.5" /> {tech.metric}
                </span>

                <button
                  type="button"
                  onClick={() => openContactModal(tech.title)}
                  className="flex items-center gap-1 text-accent hover:text-white font-semibold transition-colors cursor-pointer"
                >
                  Build with {tech.label} <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
