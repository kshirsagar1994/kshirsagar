"use client";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is touch-primary / mobile
    const checkMobile = () => {
      const isTouch = 
        window.innerWidth < 768 || 
        window.matchMedia("(pointer: coarse)").matches ||
        (typeof navigator !== "undefined" && navigator.maxTouchPoints > 1);
      setIsMobile(isTouch);
    };

    checkMobile();

    // On mobile devices, native hardware-accelerated scrolling is already optimal
    if (window.innerWidth < 768) {
      return;
    }

    // Register ScrollTrigger for desktop animations
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
    // Keep healthy lag smoothing to prevent main-thread freezing during heavy tasks
    gsap.ticker.lagSmoothing(500, 33);
  
    return () => {
      gsap.ticker.remove(update);
      if (lenis) {
        lenis.off("scroll", ScrollTrigger.update);
      }
    };
  }, []);

  // For mobile devices, bypass Lenis completely to guarantee native 120Hz GPU scrolling with 0 CPU overhead
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf={false}
      options={{
        lerp: 0.1,
        wheelMultiplier: 1.15,
        touchMultiplier: 0, // Never hijack native touch scrolling
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
