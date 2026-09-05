"use client";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Ensure GSAP and ScrollTrigger are synchronized with Lenis
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
    }
    
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
  
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
  
    return () => {
      gsap.ticker.remove(update);
      if (lenis) {
        lenis.off("scroll", ScrollTrigger.update);
      }
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf={false}
      options={{
        lerp: 0.1, // Fast, responsive agency-grade smoothing (removes the 0.05 lag feeling)
        wheelMultiplier: 1.15, // Enhanced scroll velocity per wheel rotation
        touchMultiplier: 1.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
