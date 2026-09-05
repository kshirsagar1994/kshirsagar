"use client";

import { useRef } from "react";
import { useLenis } from "lenis/react";

const steps = [
  {
    id: "01",
    title: "Requirements",
    tagline: "Discovery & Analysis",
    description: "We gather and analyze your business needs to establish clear objectives, system architecture, and technical requirements.",
    image: "/images/process/requirements.png",
    deliverables: ["Discovery Workshop", "Technical Feasibility", "System Architecture"],
  },
  {
    id: "02",
    title: "Planning",
    tagline: "Strategy & Roadmap",
    description: "We outline project milestones, resource allocation, and a strategic sprint roadmap engineered for predictable execution.",
    image: "/images/process/planning.png",
    deliverables: ["Milestone Roadmaps", "Sprint Backlog", "Architecture Blueprint"],
  },
  {
    id: "03",
    title: "Design",
    tagline: "UI/UX & Prototyping",
    description: "Our team crafts intuitive UI/UX prototypes and solidifies design tokens, ensuring a flawless user experience and scalable foundation.",
    image: "/images/process/design.png",
    deliverables: ["Interactive Prototypes", "Design System", "User Flow Journeys"],
  },
  {
    id: "04",
    title: "Development",
    tagline: "Engineering & Sprints",
    description: "Executing in agile sprints, we build your solution using modern, reliable technologies with continuous feedback loops.",
    image: "/images/process/development.png",
    deliverables: ["Agile Sprints", "Clean Code Architecture", "API Integration"],
  },
  {
    id: "05",
    title: "Testing",
    tagline: "QA & Security",
    description: "Rigorous quality assurance ensures bug-free performance, high security hardening, and a seamless cross-device user experience.",
    image: "/images/process/testing.png",
    deliverables: ["Automated QA", "Security Hardening", "Performance Audits"],
  },
  {
    id: "06",
    title: "Deployment",
    tagline: "Release & CI/CD",
    description: "We launch your product smoothly with automated CI/CD pipelines, container orchestration, and zero downtime.",
    image: "/images/process/deployment.png",
    deliverables: ["CI/CD Automation", "Zero-Downtime Rollout", "Cloud Infrastructure"],
  },
  {
    id: "07",
    title: "Maintenance",
    tagline: "Monitoring & Scaling",
    description: "We provide ongoing support, real-time performance monitoring, and iterative updates to keep your product thriving.",
    image: "/images/process/maintenance.png",
    deliverables: ["24/7 SLA Support", "Real-Time Monitoring", "Iterative Enhancements"],
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorDotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stageCounterRef = useRef<HTMLSpanElement>(null);

  useLenis(() => {
    if (!containerRef.current) return;
    
    const el = containerRef.current;
    const rect = el.getBoundingClientRect();
    
    // The total height of the section is 380vh.
    // The sticky viewport takes 100vh.
    const scrollDistance = el.scrollHeight - window.innerHeight;
    const scrollIntoSection = -rect.top;
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
    
    // Update stage counter
    if (stageCounterRef.current) {
      stageCounterRef.current.textContent = `0${activeIndex + 1} / 0${steps.length}`;
    }

    // Update indicator dots/pills
    indicatorDotsRef.current.forEach((dot, idx) => {
      if (!dot) return;
      if (idx === activeIndex) {
        dot.style.width = "28px";
        dot.style.backgroundColor = "var(--color-accent, #8b5cf6)";
        dot.style.opacity = "1";
      } else {
        dot.style.width = "8px";
        dot.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        dot.style.opacity = "0.5";
      }
    });

    const stepSize = 1 / steps.length;
    const stepLocalProgress = (p - activeIndex * stepSize) / stepSize;
    
    // Update each step
    stepsRef.current.forEach((stepEl, index) => {
      if (!stepEl) return;
      
      let opacity = 0;
      let y = 40;
      
      if (index === activeIndex) {
        if (stepLocalProgress <= 0.7) {
          opacity = 1;
          y = 0;
        } else {
          const fadeProgress = (stepLocalProgress - 0.7) / 0.3;
          opacity = 1 - fadeProgress;
          y = -40 * fadeProgress;
        }
      } else if (index === activeIndex + 1) {
        if (stepLocalProgress > 0.7) {
          const fadeProgress = (stepLocalProgress - 0.7) / 0.3;
          opacity = fadeProgress;
          y = 40 * (1 - fadeProgress);
        }
      }
      
      if (index === 0 && p === 0) {
        opacity = 1;
        y = 0;
      }
      
      if (index === steps.length - 1 && activeIndex === steps.length - 1) {
        opacity = 1;
        y = 0;
      }
      
      stepEl.style.opacity = opacity.toString();
      stepEl.style.transform = `translateY(${y}px)`;
      stepEl.style.visibility = opacity > 0 ? "visible" : "hidden";
      stepEl.style.pointerEvents = opacity > 0 ? "auto" : "none";
    });
  });

  return (
    <section 
      id="process"
      ref={containerRef}
      className="w-full bg-[#050505] relative z-20 h-[380vh]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row gap-12 md:gap-20 h-full py-28 items-center">
          
          {/* Left Side: Title & Live Process Tracker */}
          <div className="w-full md:w-5/12 flex flex-col justify-center">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/[0.08] backdrop-blur-md text-accent text-xs font-mono uppercase tracking-widest mb-6 w-fit shadow-[0_0_15px_rgba(139,92,246,0.15)]">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Engineered Lifecycle</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Development <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
                Process
              </span>
            </h2>

            <p className="text-white/60 mt-6 text-base md:text-lg leading-relaxed max-w-md">
              A battle-tested methodology transforming ambitious visions into production-grade software with absolute transparency.
            </p>

            {/* Live Phase Counter & Indicator Pills */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white/40 uppercase tracking-wider">Current Phase</span>
                <span ref={stageCounterRef} className="text-accent font-semibold tracking-widest">
                  01 / 07
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                {steps.map((s, idx) => (
                  <div
                    key={s.id}
                    ref={(el) => {
                      indicatorDotsRef.current[idx] = el;
                    }}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: idx === 0 ? "28px" : "8px",
                      backgroundColor: idx === 0 ? "var(--color-accent, #8b5cf6)" : "rgba(255, 255, 255, 0.2)",
                      opacity: idx === 0 ? 1 : 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Step Timeline & Enlarged Watermark Illustration */}
          <div className="w-full md:w-7/12 relative flex flex-col justify-center h-full">
            
            {/* Animated Progress Line Background */}
            <div className="absolute left-0 top-1/4 h-1/2 w-1 bg-white/10 rounded-full hidden md:block" />
            
            {/* Animated Progress Line Foreground */}
            <div 
              ref={lineRef}
              className="absolute left-0 top-1/4 h-1/2 w-1 bg-accent rounded-full origin-top hidden md:block shadow-[0_0_12px_rgba(139,92,246,0.6)]"
              style={{ transform: "scaleY(0)" }}
            />

            <div className="relative h-[380px] md:h-3/5 w-full md:ml-12 mt-8 md:mt-0">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  ref={(el) => {
                    stepsRef.current[index] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent backdrop-blur-[6px] shadow-2xl overflow-hidden"
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    transform: index === 0 ? "translateY(0)" : "translateY(40px)",
                    visibility: index === 0 ? "visible" : "hidden",
                    pointerEvents: index === 0 ? "auto" : "none"
                  }}
                >
                  {/* Significantly Enlarged Watermark Artwork Behind Title */}
                  <div 
                    aria-hidden="true" 
                    className="absolute -top-12 -right-8 sm:-top-16 sm:-right-4 md:-top-20 md:-right-8 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] -z-10 pointer-events-none select-none opacity-20 sm:opacity-25 md:opacity-30 filter drop-shadow-[0_0_50px_rgba(139,92,246,0.25)] transition-transform duration-700"
                  >
                    {/* Atmospheric ambient glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/25 via-blue-500/15 to-transparent blur-3xl -z-10 scale-110" />
                    <img 
                      src={step.image} 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Header: Step Number & Title */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-accent/15 border border-accent/30 text-accent font-mono font-bold text-xs tracking-widest">
                        PHASE {step.id}
                      </span>
                      <span className="text-white/40 text-xs font-mono uppercase tracking-wider">
                        {step.tagline}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md mb-4">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
                    {step.description}
                  </p>

                  {/* Deliverables / Capabilities Badges */}
                  <div className="relative z-10 flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.08]">
                    {step.deliverables.map((item) => (
                      <span 
                        key={item} 
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

