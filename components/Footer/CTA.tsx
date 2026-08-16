"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="w-full bg-[#050505] py-32 md:py-48 px-6 md:px-12 relative z-20 overflow-hidden flex items-center justify-center">
      
      {/* Subtle Pulsing Background Glow */}
      <motion.div 
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-8"
        >
          Let&apos;s build something <span className="text-accent">extraordinary.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-xl text-white/60 font-medium mb-12 max-w-2xl"
        >
          Partner with Kshirsagar to architect, develop, and scale your next big technology initiative.
        </motion.p>

        <motion.a
          href="mailto:ajay.avnk@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-3 bg-white text-black px-8 py-5 rounded-full font-bold text-lg overflow-hidden"
        >
          {/* Button internal glow effect */}
          <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          
          Start a Project
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}
