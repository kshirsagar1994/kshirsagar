"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import the heavy Three.js canvas so it is loaded lazily on desktop
const SceneCanvas = dynamic(() => import("./SceneCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function Scene() {
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only load Three.js 3D WebGL on desktop devices with fine pointers
    // Mobile / touch devices use the lightweight, battery-saving CSS ambient background
    const isMobileOrTouch = 
      window.innerWidth < 768 || 
      window.matchMedia("(pointer: coarse)").matches ||
      (typeof navigator !== "undefined" && navigator.maxTouchPoints > 1);

    if (!isMobileOrTouch) {
      // Defer 3D canvas loading until main thread is completely idle
      const scheduleLoad = () => {
        if ("requestIdleCallback" in window) {
          (window as any).requestIdleCallback(
            () => setShouldRender3D(true),
            { timeout: 1500 }
          );
        } else {
          setTimeout(() => setShouldRender3D(true), 800);
        }
      };

      scheduleLoad();

      // Pause/unmount 3D canvas when scrolled out of view to save GPU/CPU
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.05 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Universal ambient glow layers (GPU composited) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-radial from-accent/15 via-purple-900/10 to-transparent blur-3xl pointer-events-none"
        style={{ willChange: "transform, opacity" }}
      />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Cyber ambient grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} 
      />

      {/* Desktop 3D Canvas (deferred & paused when scrolled out of view) */}
      {shouldRender3D && isVisible && (
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
          <SceneCanvas />
        </div>
      )}
    </div>
  );
}
