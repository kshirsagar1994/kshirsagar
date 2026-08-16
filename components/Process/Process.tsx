"use client";

import { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Requirement",
    description: "We gather and analyze your business needs to establish clear objectives and technical requirements.",
  },
  {
    id: "02",
    title: "Planning",
    description: "We outline project milestones, resource allocation, and a strategic roadmap for execution.",
  },
  {
    id: "03",
    title: "Design",
    description: "Our team crafts intuitive UI/UX prototypes and solidifies the system architecture, ensuring a flawless user experience and scalable foundation.",
  },
  {
    id: "04",
    title: "Development",
    description: "Executing in agile sprints, we build your solution using modern, reliable technologies with continuous feedback loops.",
  },
  {
    id: "05",
    title: "Testing",
    description: "Rigorous quality assurance ensures bug-free performance, high security, and a seamless user experience.",
  },
  {
    id: "06",
    title: "Deployment",
    description: "We launch your product smoothly with automated CI/CD pipelines and zero downtime.",
  },
  {
    id: "07",
    title: "Maintenance",
    description: "We provide ongoing support, performance monitoring, and iterative updates to keep your product thriving.",
  },
];

import { useLenis } from "lenis/react";

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLenis(() => {
    if (!containerRef.current) return;
    
    const el = containerRef.current;
    const rect = el.getBoundingClientRect();
    
    // The total height of the section is 400vh.
    // The sticky viewport takes 100vh.
    // So the scrollable distance is 300vh (el.scrollHeight - window.innerHeight).
    const scrollDistance = el.scrollHeight - window.innerHeight;
    
    // How far the top of the section is above the top of the viewport
    const scrollIntoSection = -rect.top;
    
    // Progress from 0 to 1
    const p = Math.max(0, Math.min(1, scrollIntoSection / scrollDistance));
    
    // Update progress line
    if (lineRef.current) {
      lineRef.current.style.transform = `scaleY(${p})`;
    }
    
    // Calculate which step should be active
    const activeIndex = Math.min(
      steps.length - 1,
      Math.floor(p * steps.length)
    );
    
    const stepSize = 1 / steps.length;
    const stepLocalProgress = (p - activeIndex * stepSize) / stepSize;
    
    // Update each step
    stepsRef.current.forEach((stepEl, index) => {
      if (!stepEl) return;
      
      let opacity = 0;
      let y = 40;
      
      if (index === activeIndex) {
        // Current step: visible for first 70% of its slot, fades out and moves up in last 30%
        if (stepLocalProgress <= 0.7) {
          opacity = 1;
          y = 0;
        } else {
          const fadeProgress = (stepLocalProgress - 0.7) / 0.3;
          opacity = 1 - fadeProgress;
          y = -40 * fadeProgress;
        }
      } else if (index === activeIndex + 1) {
        // Next step: fades in and moves up from below during the last 30% of current step's slot
        if (stepLocalProgress > 0.7) {
          const fadeProgress = (stepLocalProgress - 0.7) / 0.3;
          opacity = fadeProgress;
          y = 40 * (1 - fadeProgress);
        }
      }
      
      // First step defaults to visible when at the very top
      if (index === 0 && p === 0) {
        opacity = 1;
        y = 0;
      }
      
      // Last step stays visible at the end
      if (index === steps.length - 1 && activeIndex === steps.length - 1) {
        opacity = 1;
        y = 0;
      }
      
      // Apply styles directly to the DOM to avoid React re-renders
      stepEl.style.opacity = opacity.toString();
      stepEl.style.transform = `translateY(${y}px)`;
      stepEl.style.visibility = opacity > 0 ? 'visible' : 'hidden';
      stepEl.style.pointerEvents = opacity > 0 ? 'auto' : 'none';
    });
  });

  return (
    <section 
      id="process"
      ref={containerRef}
      className="w-full bg-[#050505] relative z-20 h-[700vh]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row gap-12 md:gap-24 h-full py-32">
          
          {/* Left Side: Title */}
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white">
              Development Process
            </h2>
            <p className="text-white/60 mt-6 text-lg">
              A proven methodology from concept to delivery.
            </p>
          </div>

          {/* Right Side: Timeline */}
          <div className="w-full md:w-1/2 relative flex flex-col justify-center h-full">
            
            {/* Animated Progress Line Background */}
            <div className="absolute left-0 top-1/4 h-1/2 w-1 bg-white/10 rounded-full hidden md:block" />
            
            {/* Animated Progress Line Foreground */}
            <div 
              ref={lineRef}
              className="absolute left-0 top-1/4 h-1/2 w-1 bg-accent rounded-full origin-top hidden md:block"
              style={{ transform: "scaleY(0)" }}
            />

            <div className="relative h-[300px] md:h-1/2 w-full md:ml-12 mt-12 md:mt-0">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  ref={(el) => {
                    stepsRef.current[index] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    transform: index === 0 ? "translateY(0)" : "translateY(40px)",
                    visibility: index === 0 ? "visible" : "hidden",
                    pointerEvents: index === 0 ? "auto" : "none"
                  }}
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-accent font-bold tracking-widest text-xl md:text-2xl">
                      {step.id}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
