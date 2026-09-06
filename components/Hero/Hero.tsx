"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLenis } from "lenis/react";
import Scene from "@/three/Scene";
import { animateHeroText } from "@/animations/hero";
import { useContactModal } from "@/context/ContactModalContext";

const heroServices = [
  {
    label: "Website",
    target: "#service-web",
    highlightSelectors: ["#service-web"],
  },
  {
    label: "Application",
    target: "#service-mobile",
    highlightSelectors: ["#service-mobile", "#service-desktop"],
  },
  {
    label: "Digital Marketing",
    target: "#service-marketing",
    highlightSelectors: ["#service-marketing"],
  },
  {
    label: "IT Services",
    target: "#service-it",
    highlightSelectors: ["#service-it"],
  },
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { openContactModal } = useContactModal();
  
  const lenis = useLenis();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.2 });
    } else {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
    highlightSelectors: string[]
  ) => {
    e.preventDefault();

    // Smooth scroll directly to the service item
    if (lenis) {
      lenis.scrollTo(target, { offset: -90, duration: 1.2 });
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    // Temporarily apply highlight ring & glow to the matching card(s)
    highlightSelectors.forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) {
        el.classList.add("ring-2", "ring-accent", "shadow-[0_0_35px_rgba(139,92,246,0.5)]");
        setTimeout(() => {
          el.classList.remove("ring-2", "ring-accent", "shadow-[0_0_35px_rgba(139,92,246,0.5)]");
        }, 2500);
      }
    });
  };

  useEffect(() => {
    // Small delay to ensure styles and canvas are ready
    const timer = setTimeout(() => {
      animateHeroText(titleRef, subtitleRef as any, ctaRef);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-16 pointer-events-none">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9]"
          style={{ perspective: "1000px" }}
        >
          {/* We wrap lines in spans for GSAP to animate them individually */}
          <span className="block origin-bottom">WE BUILD</span>
          <span className="block origin-bottom text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
            DIGITAL
          </span>
          <span className="block origin-bottom text-accent">FUTURES.</span>
        </h1>

        <div 
          ref={subtitleRef}
          className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl pointer-events-auto"
        >
          {heroServices.map((service, i) => (
            <motion.a
              key={service.label}
              href={service.target}
              onClick={(e) => handleServiceClick(e, service.target, service.highlightSelectors)}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.6, type: "spring", bounce: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(139, 92, 246, 0.2)", 
                borderColor: "rgba(139, 92, 246, 0.5)", 
                color: "#fff",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.96 }}
              className="group px-4 py-2 md:px-6 md:py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm md:text-base font-medium text-white/75 hover:text-white cursor-pointer transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)] flex items-center gap-1.5"
            >
              <span>{service.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-accent" />
            </motion.a>
          ))}
        </div>

        <div 
          ref={ctaRef}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6 pointer-events-auto"
        >
          <button
            type="button"
            onClick={() => openContactModal()}
            className="group relative flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
          
          <a
            href="#work"
            onClick={(e) => handleScroll(e, '#work')}
            className="group text-white/80 hover:text-white font-medium text-lg transition-colors flex items-center gap-2"
          >
            Explore Our Work
            <div className="w-0 h-px bg-white group-hover:w-8 transition-all duration-300"></div>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10 pointer-events-none">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}
