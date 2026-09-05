"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { 
  NetworkAnimation, 
  DownloadAnimation, 
  WireframeAnimation, 
  CardsAnimation, 
  CodeAnimation, 
  ServerAnimation 
} from "./ProjectAnimations";

const allProjects = [
  {
    id: 1,
    title: "AIOD",
    category: "Apps",
    description: "An all-in-one media downloader web application enabling users to download 4K videos, reels, stories, and 320kbps MP3 audio from Instagram, YouTube, TikTok, and Twitter without watermarks.",
    technologies: ["React", "JavaScript", "Social Media APIs", "Media Processing"],
    repoUrl: "https://github.com/kshirsagar1994/AIOD",
    animationType: "download"
  },
  {
    id: 2,
    title: "Swami Ratna Consultancy",
    category: "Website",
    description: "A specialized job placement and corporate HR consultancy platform connecting job seekers with leading employers across IT, banking, and industrial sectors.",
    technologies: ["JavaScript", "Frontend", "Career Portal", "Job Search API"],
    repoUrl: "https://github.com/kshirsagar1994/swamiratna",
    animationType: "cards"
  },
  {
    id: 3,
    title: "MyPortfolio",
    category: "Website",
    description: "Your personal HTML-based portfolio showcasing frontend web development skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/kshirsagar1994/MyPortfolio",
    animationType: "code"
  },
  {
    id: 4,
    title: "VVK Smart Tech",
    category: "Website",
    description: "Official website for VVK Smart Tech, showcasing smart irrigation IoT solutions like IRRIGO Mobile Auto that help farmers remotely control motors and improve water management.",
    technologies: ["Next.js", "React", "IoT & Telemetry", "AgTech Hardware"],
    repoUrl: "https://www.vvksmarttech.com",
    animationType: "wireframe"
  },
  {
    id: 5,
    title: "DMS",
    category: "Apps",
    description: "A comprehensive Department Management System designed to streamline operations, resource allocation, and internal communication.",
    technologies: ["React", "Node.js", "Database"],
    repoUrl: "https://github.com/kshirsagar1994/DMS",
    animationType: "server"
  }
];

const filters = ["All", "Website", "Apps", "UI/UX Design", "Cloud"];

export default function Portfolio() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = allProjects.filter(p => activeFilter === "All" || p.category === activeFilter);
  const displayProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 3);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setActiveFilter("All");
    }
  };

  const renderAnimation = (type: string) => {
    switch (type) {
      case "network": return <NetworkAnimation />;
      case "download": return <DownloadAnimation />;
      case "wireframe": return <WireframeAnimation />;
      case "cards": return <CardsAnimation />;
      case "code": return <CodeAnimation />;
      case "server": return <ServerAnimation />;
      default: return null;
    }
  };

  return (
    <section id="work" className="w-full bg-black py-14 md:py-18 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
              Selected Work.
            </h2>
            <p className="text-base md:text-lg text-white/60 font-medium max-w-xl">
              A showcase of our recent projects, demonstrating how we solve complex problems with modern technology.
            </p>
          </div>
          
          <button 
            onClick={toggleExpand}
            className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest hover:text-white transition-colors"
          >
            {isExpanded ? "Show Less" : "View All Projects"} 
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </button>
        </div>

        {/* Filter Row - Only visible when expanded */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: 48 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="flex flex-wrap gap-4 overflow-hidden"
            >
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter 
                      ? 'bg-accent border-accent text-black shadow-[0_0_15px_rgba(139,92,246,0.5)]' 
                      : 'border-white/20 text-white/60 hover:text-white hover:border-white/40 bg-white/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          layout 
          className={
            isExpanded 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "flex flex-col gap-12 lg:gap-24"
          }
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                key={project.id}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`group relative flex flex-col ${
                  !isExpanded && index % 2 !== 0 ? "lg:flex-row-reverse" : (!isExpanded ? "lg:flex-row" : "")
                } ${isExpanded ? "gap-6" : "gap-8 lg:gap-16"} items-center`}
              >
                
                {/* Product Screen Mockup Container */}
                <motion.div 
                  layout
                  className={`w-full ${!isExpanded ? "lg:w-2/3" : ""} aspect-[4/3] ${!isExpanded ? "lg:aspect-[16/9]" : ""} rounded-3xl overflow-hidden relative border border-white/10 hover:border-accent/40 bg-[#07090e] shadow-2xl transition-all duration-500`}
                >
                  {/* Actual Product Hero Screen Mockup */}
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.01]">
                    {renderAnimation(project.animationType)}
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div layout className={`w-full ${!isExpanded ? "lg:w-1/3" : ""} flex flex-col`}>
                  <motion.span layout className="text-accent font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    0{project.id} — {project.category}
                  </motion.span>
                  <motion.h3 layout className={`${isExpanded ? "text-2xl" : "text-3xl md:text-4xl lg:text-5xl"} font-bold text-white tracking-tight mb-4 group-hover:text-accent transition-colors duration-300 cursor-pointer`}>
                    {project.title}
                  </motion.h3>
                  <motion.p layout className={`text-white/60 mb-5 leading-relaxed ${isExpanded ? "text-base" : "text-lg"}`}>
                    {project.description}
                  </motion.p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80 font-medium text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="self-start mt-auto">
                    <motion.button layout className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white hover:text-black border border-white/10 text-white font-semibold text-sm transition-all duration-300 group/btn cursor-pointer">
                      Explore Product
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </motion.button>
                  </a>
                </motion.div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
