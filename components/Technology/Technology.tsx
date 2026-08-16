"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    id: "frontend",
    label: "FRONTEND",
    items: ["React", "Next.js", "TypeScript"],
    position: { x: "20%", y: "20%" }, // Top Left
  },
  {
    id: "backend",
    label: "BACKEND",
    items: ["Node.js", "Express", "Spring Boot", "PHP"],
    position: { x: "80%", y: "20%" }, // Top Right
  },
  {
    id: "mobile",
    label: "MOBILE",
    items: ["React Native", "Flutter", "Kotlin", "Swift"],
    position: { x: "10%", y: "50%" }, // Center Left
  },
  {
    id: "cloud",
    label: "CLOUD",
    items: ["AWS", "Azure", "GCP", "Docker", "Vercel"],
    position: { x: "90%", y: "50%" }, // Center Right
  },
  {
    id: "database",
    label: "DATABASE",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
    position: { x: "25%", y: "80%" }, // Bottom Left
  },
  {
    id: "ai",
    label: "AI",
    items: ["OpenAI", "Ollama", "RAG", "AI Agents", "n8n"],
    position: { x: "75%", y: "80%" }, // Bottom Right
  },
];

export default function Technology() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="technologies" className="w-full bg-[#050505] py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Tech Stack</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">modern technology.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mx-auto">
            We leverage state-of-the-art frameworks, cloud infrastructure, and AI tooling to deliver scalable, high-performance, and future-proof digital solutions.
          </p>
        </motion.div>

        {/* Mobile View: Stacked Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {technologies.map((tech) => (
            <div 
              key={tech.id} 
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-accent font-bold tracking-widest text-sm mb-4">
                {tech.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-white/80 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Interactive Hub & Spoke */}
        <div className="hidden lg:block relative h-[600px] w-full max-w-5xl mx-auto border border-white/5 rounded-[3rem] bg-white/[0.02]">
          
          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
            
            {/* Draw lines from center to each node */}
            {technologies.map((tech) => (
              <motion.line
                key={`line-${tech.id}`}
                x1="50%"
                y1="50%"
                x2={tech.position.x}
                y2={tech.position.y}
                stroke={activeNode === tech.id || activeNode === null ? "url(#line-gradient)" : "rgba(255,255,255,0.05)"}
                strokeWidth={activeNode === tech.id ? 2 : 1}
                className="transition-all duration-300"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: activeNode === tech.id ? 1 : 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            ))}
          </svg>

          {/* Center Hub */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center w-32 h-32 bg-black border border-white/20 rounded-full drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <span className="font-bold tracking-widest text-white text-sm">ECOSYSTEM</span>
          </motion.div>

          {/* Technology Nodes */}
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: tech.position.x, top: tech.position.y }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              onMouseEnter={() => setActiveNode(tech.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div 
                className={`relative flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${
                  activeNode === tech.id ? "bg-white/10 scale-110 drop-shadow-[0_0_20px_rgba(139,92,246,0.2)]" : "bg-black/50 hover:bg-white/5"
                } border border-white/10 backdrop-blur-md`}
              >
                <h3 className={`font-bold tracking-widest mb-4 transition-colors ${
                  activeNode === tech.id ? "text-accent" : "text-white/80"
                }`}>
                  {tech.label}
                </h3>
                
                <div className="flex flex-col gap-2 items-center">
                  {tech.items.map((item, i) => (
                    <motion.span 
                      key={i}
                      className={`text-sm whitespace-nowrap transition-colors ${
                        activeNode === tech.id ? "text-white font-medium" : "text-white/40"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
