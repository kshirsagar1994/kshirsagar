"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

const services = [
  {
    id: "01",
    title: "Web Development",
    subtitle: "Scalable & Performant",
    items: [
      "Custom Websites",
      "Web Applications",
      "SaaS Platforms",
      "E-commerce Solutions",
      "Landing Pages",
      "CMS Development",
    ],
  },
  {
    id: "02",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform",
    items: [
      "iOS Apps",
      "Android Apps",
      "React Native",
      "Flutter",
      "App Prototyping",
      "Store Optimization",
    ],
  },
  {
    id: "03",
    title: "Desktop App Development",
    subtitle: "Robust & Secure",
    items: [
      "Windows Applications",
      "macOS Applications",
      "Cross-Platform Desktop",
      "Enterprise Software",
      "Legacy Modernization",
      "System Utilities",
    ],
  },
  {
    id: "04",
    title: "Digital Marketing",
    subtitle: "Growth & Visibility",
    items: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Pay-Per-Click (PPC)",
      "Content Strategy",
      "Email Marketing",
      "Analytics & Reporting",
    ],
  },
  {
    id: "05",
    title: "Business Softwares",
    subtitle: "Custom & Scalable",
    items: [
      "GST Billing",
      "CRM Systems",
      "ERP Solutions",
      "Inventory Management",
      "POS Systems",
      "HR & Payroll",
    ],
  },
  {
    id: "06",
    title: "IT Services",
    subtitle: "Support & Infrastructure",
    items: [
      "Cloud Hosting",
      "Server Management",
      "Network Security",
      "Data Backup",
      "Technical Support",
      "IT Consulting",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { openContactModal } = useContactModal();

  const handleCardClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="w-full bg-[#050505] py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-3">
              Capabilities & Offerings
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl">
              Everything you need to build, launch and scale.
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-xs md:text-right">
            Hover or tap any service to explore deliverables and specialized capabilities.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {services.map((service) => {
            const isExpanded = hoveredId === service.id || activeId === service.id;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                layout
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCardClick(service.id)}
                className={`group border rounded-3xl p-8 lg:p-10 transition-all duration-500 relative overflow-hidden cursor-pointer ${
                  isExpanded
                    ? "bg-white/[0.08] border-accent/60 shadow-[0_0_40px_rgba(139,92,246,0.18)]"
                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                {/* Subtle hover gradient background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-purple-600/10 transition-opacity duration-500 pointer-events-none ${
                    isExpanded ? "opacity-100" : "opacity-0"
                  }`} 
                />

                <div className="relative z-10 flex flex-col">
                  {/* Top Bar: Service ID and Indicator Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold tracking-widest text-accent">
                      {service.id} —
                    </span>
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isExpanded
                          ? "bg-accent text-white border-accent rotate-180"
                          : "bg-white/5 text-white/50 border-white/10 group-hover:text-white group-hover:border-white/20"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-base text-white/60 mt-1.5 font-medium">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Hidden Content: Appears on hover or click */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: "auto",
                          transition: { 
                            height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.25, delay: 0.08 }
                          } 
                        }}
                        exit={{ 
                          opacity: 0, 
                          height: 0,
                          transition: { 
                            height: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.15 }
                          } 
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-white/10">
                          <motion.ul className="flex flex-col gap-y-2.5">
                            {service.items.map((item, i) => (
                              <motion.li
                                key={item}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </motion.ul>

                          {/* Quick Project Inquiry Trigger */}
                          <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                openContactModal(service.title);
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-white transition-colors cursor-pointer group/cta"
                            >
                              <span>Start a project with {service.title}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
