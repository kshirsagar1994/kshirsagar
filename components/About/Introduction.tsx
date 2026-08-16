"use client";

import { useEffect, useRef } from "react";
import { animateIntroduction } from "@/animations/introduction";
import { ArrowRight } from "lucide-react";

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Delay slightly to ensure layout is ready before calculating ScrollTrigger
    const timer = setTimeout(() => {
      animateIntroduction(containerRef, headingRef, paragraphRef, wordsRef);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" ref={containerRef} className="w-full bg-[#050505] py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        
        {/* Top Text Content */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <h2 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight flex-1"
          >
            Technology should solve problems, not create them.
          </h2>
          
          <p 
            ref={paragraphRef}
            className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed flex-1 mt-4 md:mt-0"
          >
            Kshirsagar helps startups, businesses and organizations turn ideas into reliable digital products—from websites and mobile applications to AI-powered systems and custom business software.
          </p>
        </div>

        {/* Dynamic Word Sequence */}
        <div 
          ref={wordsRef}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12 text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider py-20"
        >
          <span>Technology</span>
          <ArrowRight className="w-8 h-8 text-white/30" />
          <span>Problem</span>
          <ArrowRight className="w-8 h-8 text-white/30" />
          <span>Solution</span>
          <ArrowRight className="w-8 h-8 text-white/30" />
          <span>Product</span>
          <ArrowRight className="w-8 h-8 text-white/30" />
          <span className="text-accent drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">Growth</span>
        </div>

      </div>
    </section>
  );
}
