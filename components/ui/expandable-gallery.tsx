"use client";

import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import React, { useState, useId, useRef } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardItem {
  id: string;
  projectNumber: string;
  title: string;
  category: "Apps" | "Website" | "IoT" | "Engineering";
  description: string;
  technologies: string[];
  linkUrl: string;
  src: string;
  alt: string;
  rotation?: number;
  x?: number;
  y?: number;
  zIndex?: number;
}

export const KSHIRSAGAR_PROJECTS: ProjectCardItem[] = [
  {
    id: "aiod",
    projectNumber: "01",
    title: "AIOD Downloader",
    category: "Apps",
    description:
      "All-in-one media downloader web application enabling users to download 4K videos, reels, stories, and 320kbps MP3 audio across social platforms without watermarks.",
    technologies: ["React", "JavaScript", "Social APIs", "Media Processing"],
    linkUrl: "https://github.com/kshirsagar1994/AIOD",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    alt: "AIOD Media Downloader",
    rotation: -14,
    x: -95,
    y: 12,
    zIndex: 10,
  },
  {
    id: "swamiratna",
    projectNumber: "02",
    title: "Swami Ratna Consultancy",
    category: "Website",
    description:
      "Specialized corporate HR and talent recruitment platform connecting job seekers with leading employers across IT, banking, and industrial sectors.",
    technologies: ["JavaScript", "Frontend", "Career Portal", "Job Search API"],
    linkUrl: "https://github.com/kshirsagar1994/swamiratna",
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    alt: "Swami Ratna Consultancy Portal",
    rotation: -2,
    x: -10,
    y: -18,
    zIndex: 20,
  },
  {
    id: "vvk-smart-tech",
    projectNumber: "03",
    title: "VVK Smart Tech",
    category: "IoT",
    description:
      "Smart irrigation AgTech platform showcasing IRRIGO Mobile Auto solutions for remote telemetry, motor automation, and efficient water management.",
    technologies: ["Next.js", "React", "IoT & Telemetry", "AgTech Hardware"],
    linkUrl: "https://www.vvksmarttech.com",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    alt: "VVK Smart Tech IoT",
    rotation: 12,
    x: 85,
    y: 8,
    zIndex: 30,
  },
  {
    id: "dms",
    projectNumber: "04",
    title: "DMS Platform",
    category: "Apps",
    description:
      "Enterprise Department Management System designed to streamline operations, resource allocation, and internal communication workflows.",
    technologies: ["React", "Node.js", "Enterprise DB", "Express"],
    linkUrl: "https://github.com/kshirsagar1994/DMS",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    alt: "Department Management System",
  },
  {
    id: "my-portfolio",
    projectNumber: "05",
    title: "Kshirsagar Portfolio 3D",
    category: "Website",
    description:
      "Interactive 3D web experience showcasing frontend development with Next.js, Three.js shaders, Lenis smooth scrolling, and GSAP choreography.",
    technologies: ["Next.js", "Three.js", "Tailwind CSS", "GSAP"],
    linkUrl: "https://github.com/kshirsagar1994/MyPortfolio",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    alt: "Kshirsagar Portfolio Experience",
  },
  {
    id: "design-system",
    projectNumber: "06",
    title: "UI/UX & Design Systems",
    category: "Engineering",
    description:
      "Bespoke component architecture, responsive wireframing, and fluid micro-animations engineered for maximum visual engagement and conversion.",
    technologies: ["Figma", "UI/UX Design", "Component Tokens", "Motion"],
    linkUrl: "https://github.com/kshirsagar1994",
    src: "/images/process/design.png",
    alt: "UI/UX & Design Systems",
  },
  {
    id: "fullstack-dev",
    projectNumber: "07",
    title: "Full-Stack Development",
    category: "Engineering",
    description:
      "Production-grade codebases built with strict TypeScript, modular architecture, and high-performance serverless endpoints.",
    technologies: ["TypeScript", "Next.js", "Node.js", "Tailwind CSS"],
    linkUrl: "https://github.com/kshirsagar1994",
    src: "/images/process/development.png",
    alt: "Full-Stack Development Process",
  },
  {
    id: "cloud-devops",
    projectNumber: "08",
    title: "DevOps & Cloud Deployment",
    category: "Engineering",
    description:
      "Automated CI/CD pipelines, containerized deployments, and zero-downtime release cycles across modern cloud infrastructures.",
    technologies: ["Docker", "Vercel", "CI/CD", "Cloud Architecture"],
    linkUrl: "https://github.com/kshirsagar1994",
    src: "/images/process/deployment.png",
    alt: "Cloud & Deployment Architecture",
  },
  {
    id: "testing-qa",
    projectNumber: "09",
    title: "Automated Testing & QA",
    category: "Engineering",
    description:
      "Comprehensive end-to-end testing, accessibility compliance, and performance profiling ensuring rock-solid software reliability.",
    technologies: ["Quality Assurance", "E2E Testing", "Performance", "Security"],
    linkUrl: "https://github.com/kshirsagar1994",
    src: "/images/process/testing.png",
    alt: "Automated Testing & Quality Assurance",
  },
];

const springTransition = {
  type: "spring",
  stiffness: 170,
  damping: 20,
  mass: 0.9,
} as const;

const FILTER_OPTIONS = ["All", "Apps", "Website", "IoT", "Engineering"] as const;

export interface ExpandableGalleryProps {
  projects?: ProjectCardItem[];
  badge?: string;
  title?: React.ReactNode;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}

export function ExpandableGallery({
  projects = KSHIRSAGAR_PROJECTS,
  badge = "Selected Work & Engineering",
  title = (
    <>
      Crafted with Purpose.{" "}
      <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-accent">
        Engineered for Impact.
      </span>
    </>
  ),
  subtitle = "Explore our production platforms, enterprise software, and IoT solutions crafted by Kshirsagar.",
  buttonText = "Explore All Projects",
  className,
}: ExpandableGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const layoutGroupId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  const filteredProjects = projects.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  );

  return (
    <section
      className={cn(
        "relative w-full px-4 sm:px-6 md:px-12 bg-background flex flex-col items-center justify-start min-h-[850px] overflow-hidden py-12 md:py-20",
        className
      )}
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <LayoutGroup id={layoutGroupId}>
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Top Bar for Expanded State */}
          <div className="w-full min-h-12 flex flex-col sm:flex-row items-center justify-between gap-4 px-4 mb-4">
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="expanded-controls"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <motion.button
                    onClick={() => setIsExpanded(false)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all group z-50 cursor-pointer self-start sm:self-auto"
                  >
                    <div className="p-2 rounded-full bg-muted group-hover:bg-accent transition-colors text-foreground shadow-sm">
                      <HugeiconsIcon
                        icon={ArrowLeft01Icon}
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="font-medium text-sm tracking-wide">Go back</span>
                  </motion.button>

                  {/* Filter Tabs */}
                  <div className="flex flex-wrap items-center gap-1.5 bg-muted/70 p-1.5 rounded-full border border-border/40 backdrop-blur-md">
                    {FILTER_OPTIONS.map((filter) => {
                      const isActive = activeFilter === filter;
                      return (
                        <button
                          key={filter}
                          onClick={() => setActiveFilter(filter)}
                          className={cn(
                            "relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                            isActive
                              ? "text-primary-foreground font-bold shadow-[0_0_18px_rgba(139,92,246,0.5)]"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="galleryFilterActive"
                              className="absolute inset-0 bg-accent rounded-full"
                              transition={{ type: "spring", stiffness: 380, damping: 32 }}
                            />
                          )}
                          <span className="relative z-10">{filter}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="badge-banner"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-bold uppercase tracking-widest"
                >
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  {badge}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Morphing Gallery Container */}
          <motion.div
            ref={containerRef}
            layout
            className={cn(
              "relative w-full",
              isExpanded
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
                : "flex flex-col items-center justify-start pt-4"
            )}
            transition={springTransition}
          >
            {/* Cards (Stack vs Grid) */}
            <div
              className={cn(
                "relative",
                isExpanded
                  ? "contents"
                  : "h-[450px] w-full flex items-center justify-center mb-8"
              )}
            >
              {(isExpanded ? filteredProjects : projects).map((project, index) => {
                const isPrimary = index < 3;
                if (!isPrimary && !isExpanded) return null;

                return (
                  <motion.div
                    key={`card-${project.id}`}
                    layoutId={`card-container-${project.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: !isExpanded ? project.rotation || 0 : 0,
                      x: !isExpanded ? project.x || 0 : 0,
                      y: !isExpanded ? project.y || 0 : 0,
                      zIndex: !isExpanded ? project.zIndex || index : 10,
                    }}
                    transition={springTransition}
                    whileHover={
                      !isExpanded
                        ? {
                            scale: 1.05,
                            y: (project.y || 0) - 16,
                            rotate: (project.rotation || 0) * 0.75,
                            zIndex: 50,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            },
                          }
                        : { scale: 1.02 }
                    }
                    className={cn(
                      "group cursor-pointer overflow-hidden bg-card border transition-all duration-300",
                      isExpanded
                        ? "relative flex flex-col rounded-[2rem] md:rounded-[2.5rem] border-border/40 hover:border-accent/50 shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                        : "absolute w-48 h-48 sm:w-60 sm:h-60 rounded-[2.5rem] md:rounded-[3rem] border-[6px] border-background shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)]"
                    )}
                    onClick={() => !isExpanded && setIsExpanded(true)}
                  >
                    {/* Media Thumbnail Container */}
                    <motion.div
                      layoutId={`image-inner-${project.id}`}
                      layout="position"
                      className={cn(
                        "relative w-full overflow-hidden bg-muted",
                        isExpanded ? "aspect-[16/10]" : "w-full h-full"
                      )}
                      transition={springTransition}
                    >
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        className="object-cover select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes={
                          isExpanded
                            ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            : "280px"
                        }
                        priority={isPrimary}
                      />

                      {/* Subtle Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      {/* Pill Badge in Stacked Mode */}
                      {!isExpanded && (
                        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            {project.projectNumber} • {project.category}
                          </span>
                          <h4 className="text-sm font-bold text-white tracking-tight truncate">
                            {project.title}
                          </h4>
                        </div>
                      )}
                    </motion.div>

                    {/* Detailed Card Body in Expanded Mode */}
                    {isExpanded && (
                      <div className="p-6 flex flex-col flex-grow justify-between bg-card">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                              {project.projectNumber} — {project.category}
                            </span>
                            <span className="text-[11px] text-muted-foreground font-mono">
                              KSHIRSAGAR
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                            {project.title}
                          </h3>

                          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                            {project.description}
                          </p>

                          {/* Tech Pill Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-0.5 bg-muted border border-border/50 rounded-full text-foreground/90 font-medium text-[11px]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Direct Link Action */}
                        <a
                          href={project.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full mt-auto"
                        >
                          <Button
                            variant="outline"
                            className="w-full rounded-full py-5 border-border/50 hover:border-accent hover:bg-accent hover:text-primary-foreground font-semibold text-xs tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                          >
                            <span>Explore Project</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Button>
                        </a>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Stack Description Content */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  key="stack-content"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-2xl space-y-6 pt-4"
                >
                  <h2 className="text-2xl md:text-4xl font-normal tracking-tight text-foreground/90 leading-tight">
                    {title}
                  </h2>

                  <p className="text-sm sm:text-base text-muted-foreground font-normal max-w-xl mx-auto leading-relaxed">
                    {subtitle}
                  </p>

                  <div className="flex justify-center pt-2">
                    <Button
                      variant="default"
                      onClick={() => setIsExpanded(true)}
                      className="rounded-full cursor-pointer py-6 px-8 border-border/40 font-semibold text-sm tracking-wide uppercase bg-accent text-primary-foreground hover:bg-accent/90 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] group transition-all duration-300"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      {buttonText}
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="transition-transform group-hover:translate-x-1.5 ml-2"
                        width={20}
                        height={20}
                      />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </LayoutGroup>
    </section>
  );
}

export default ExpandableGallery;
