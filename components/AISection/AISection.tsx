"use client";

import { motion } from "framer-motion";

const aiServices = [
  "AI Chatbots",
  "AI Tools",
  "Document Analysis",
  "RAG Applications",
  "AI Agents",
  "n8n Automation",
  "Local AI Deployment",
  "AI API Integration",
];

export default function AISection() {
  return (
    <section className="relative w-full bg-[#050505] py-32 overflow-hidden border-t border-white/5">
      {/* Abstract Background Particles (CSS based) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-accent blur-[1px] animate-pulse" />
        <div className="absolute top-[50%] left-[80%] w-3 h-3 rounded-full bg-accent blur-[2px] animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[80%] left-[30%] w-1.5 h-1.5 rounded-full bg-white blur-[1px] animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[10%] left-[70%] w-2 h-2 rounded-full bg-white blur-[1px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[60%] left-[20%] w-2.5 h-2.5 rounded-full bg-accent blur-[2px] animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Large faint glowing orbs */}
        <div className="absolute top-[30%] left-[50%] w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Pipeline Visualization */}
        <div className="flex-1 w-full max-w-md mx-auto">
          <div className="flex flex-col items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-white/60 font-medium tracking-widest uppercase mb-4"
            >
              Your Data
            </motion.div>

            {/* Down Arrow SVG with Framer Motion path length animation */}
            <svg width="40" height="60" viewBox="0 0 40 60" className="my-2">
              <motion.path
                d="M 20 0 L 20 50 M 10 40 L 20 50 L 30 40"
                fill="transparent"
                stroke="#8b5cf6" // accent color
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </svg>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-xl px-12 py-6 text-2xl font-bold text-white drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] backdrop-blur-sm"
            >
              AI Engine
            </motion.div>

            <svg width="40" height="60" viewBox="0 0 40 60" className="my-2">
              <motion.path
                d="M 20 0 L 20 50 M 10 40 L 20 50 L 30 40"
                fill="transparent"
                stroke="#8b5cf6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              />
            </svg>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 1.5 }}
              className="bg-white/5 border border-white/10 rounded-xl px-8 py-6 text-xl font-bold text-white text-center backdrop-blur-sm"
            >
              RAG / AI AGENTS
            </motion.div>

            <svg width="40" height="60" viewBox="0 0 40 60" className="my-2">
              <motion.path
                d="M 20 0 L 20 50 M 10 40 L 20 50 L 30 40"
                fill="transparent"
                stroke="#8b5cf6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
              />
            </svg>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 2.5 }}
              className="bg-white/5 border border-white/10 rounded-xl px-8 py-6 text-xl font-bold text-white text-center backdrop-blur-sm"
            >
              AUTOMATION
            </motion.div>

            <svg width="40" height="60" viewBox="0 0 40 60" className="my-2">
              <motion.path
                d="M 20 0 L 20 50 M 10 40 L 20 50 L 30 40"
                fill="transparent"
                stroke="#8b5cf6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 3, ease: "easeInOut" }}
              />
            </svg>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 3.5 }}
              className="text-accent font-bold tracking-widest uppercase mt-4 text-xl"
            >
              Business Results
            </motion.div>
          </div>
        </div>

        {/* Right Side: Text & Features */}
        <div className="flex-1 w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Intelligence, built into your business.
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-medium mb-12 max-w-lg">
            We don&apos;t just build websites. We integrate modern AI capabilities directly into your workflows to reduce repetitive tasks and unlock your business data.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-white font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
