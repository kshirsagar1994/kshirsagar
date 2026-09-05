"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Rocket, 
  FolderKanban, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ArrowUpRight, 
  Activity, 
  Zap 
} from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  color: string;
  accentRgb: string;
  icon: React.ReactNode;
  badge: string;
  metric: string;
  description: string;
  items: string[];
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Web Development",
    subtitle: "Scalable & Performant",
    category: "FRONTEND & WEB PLATFORMS",
    color: "#8b5cf6",
    accentRgb: "139, 92, 246",
    icon: <Globe className="w-5 h-5 text-purple-400" />,
    badge: "Modern Web",
    metric: "Sub-Second First Paint",
    description: "Architecting high-converting web applications, bespoke business platforms, and enterprise SaaS with cutting-edge speed.",
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
    category: "MOBILE ECOSYSTEM",
    color: "#ec4899",
    accentRgb: "236, 72, 153",
    icon: <Smartphone className="w-5 h-5 text-pink-400" />,
    badge: "iOS & Android",
    metric: "60 FPS Native Touch",
    description: "Building responsive, offline-first mobile applications with unified cross-platform codebases and seamless App Store publishing.",
    items: [
      "iOS Applications",
      "Android Applications",
      "React Native",
      "Flutter Framework",
      "App Prototyping",
      "Store Optimization",
    ],
  },
  {
    id: "03",
    title: "Desktop App Development",
    subtitle: "Robust & Secure",
    category: "DESKTOP SYSTEMS",
    color: "#3b82f6",
    accentRgb: "59, 130, 246",
    icon: <Monitor className="w-5 h-5 text-blue-400" />,
    badge: "Windows & macOS",
    metric: "Offline-First Reliability",
    description: "Engineering heavy-duty workstation applications, utility tools, and localized client-server software tailored for high performance.",
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
    title: "Digital Marketing & SEO",
    subtitle: "Growth & Visibility",
    category: "GROWTH & CONVERSION",
    color: "#f59e0b",
    accentRgb: "245, 158, 11",
    icon: <Rocket className="w-5 h-5 text-amber-400" />,
    badge: "Data-Driven ROI",
    metric: "Targeted Conversion Lift",
    description: "Omnichannel digital strategies, technical SEO audits, and precision PPC funnels that turn search volume into recurring revenue.",
    items: [
      "Technical SEO Audits",
      "Social Media Marketing",
      "Pay-Per-Click (PPC)",
      "Content Strategy",
      "Email Automation",
      "Analytics & Reporting",
    ],
  },
  {
    id: "05",
    title: "Business Software Solutions",
    subtitle: "Custom & Scalable",
    category: "ENTERPRISE ERP & CRM",
    color: "#10b981",
    accentRgb: "16, 185, 129",
    icon: <FolderKanban className="w-5 h-5 text-emerald-400" />,
    badge: "Automated Operations",
    metric: "100% Process Accuracy",
    description: "Streamlining end-to-end business operations with custom GST billing, CRM pipelines, inventory controls, and payroll automation.",
    items: [
      "GST Billing & Invoicing",
      "CRM Pipeline Systems",
      "ERP Business Suites",
      "Inventory Management",
      "POS Solutions",
      "HR & Payroll Suites",
    ],
  },
  {
    id: "06",
    title: "IT Services & Cloud",
    subtitle: "Support & Infrastructure",
    category: "MANAGED INFRASTRUCTURE",
    color: "#06b6d4",
    accentRgb: "6, 182, 212",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    badge: "Zero Downtime",
    metric: "99.99% Availability",
    description: "Managing enterprise cloud hosting, perimeter cybersecurity, scheduled disaster recovery, and 24/7 dedicated IT consultation.",
    items: [
      "Cloud Hosting & CDN",
      "Server Management",
      "Network Security",
      "Disaster Recovery & Backup",
      "24/7 Technical Support",
      "IT Infrastructure Consulting",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
    <section id="services" className="w-full bg-[#050505] py-28 md:py-36 px-6 md:px-12 relative z-20 overflow-hidden">
      
      {/* Ambient Background Glows matching ECOSYSTEM */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-accent/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-purple-700/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Cyber Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header matching ECOSYSTEM style */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" /> Capabilities & Solutions
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-300 to-cyan-400">build, launch and scale.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base md:text-xl text-white/60 font-medium max-w-3xl leading-relaxed"
          >
            From custom high-performance web platforms and mobile apps to automated ERP workflows and cloud infrastructure, we deliver end-to-end technology solutions.
          </motion.p>
        </div>

        {/* Services Cyber Cards Grid */}
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
                layout
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCardClick(service.id)}
                className={`group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-xl border shadow-xl overflow-hidden cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? "bg-[#0d0d1a]/95 border-accent shadow-[0_0_40px_rgba(139,92,246,0.25)]"
                    : "bg-[#090b14]/90 border-white/10 hover:border-white/25 hover:bg-[#0d0e1a]/90"
                }`}
              >
                {/* Radial Card Ambient Glow */}
                <div 
                  className="absolute top-0 right-0 w-44 h-44 rounded-full blur-[70px] opacity-15 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: service.color }}
                />

                <div>
                  {/* Top Card Header: Icon, Badge & Expand Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-lg shrink-0 transition-transform duration-300 group-hover:scale-105"
                        style={{ 
                          backgroundColor: `rgba(${service.accentRgb}, 0.15)`, 
                          borderColor: `rgba(${service.accentRgb}, 0.35)` 
                        }}
                      >
                        {service.icon}
                      </div>

                      <span 
                        className="text-[10px] px-2.5 py-1 rounded-full font-mono font-bold tracking-wider uppercase"
                        style={{ 
                          backgroundColor: `rgba(${service.accentRgb}, 0.1)`, 
                          color: service.color,
                          border: `1px solid rgba(${service.accentRgb}, 0.25)`
                        }}
                      >
                        {service.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-widest text-white/40">
                        {service.id}
                      </span>
                      <div 
                        className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isExpanded
                            ? "bg-accent text-white border-accent rotate-180 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                            : "bg-white/5 text-white/40 border-white/10 group-hover:text-white group-hover:border-white/20"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="text-[10px] font-semibold tracking-widest text-accent uppercase font-mono mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 font-medium mt-1">
                    {service.subtitle}
                  </p>

                  {/* Expandable Deliverables Section */}
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
                        <div className="pt-5 mt-5 border-t border-white/10">
                          <p className="text-xs text-white/60 leading-relaxed mb-4">
                            {service.description}
                          </p>

                          {/* Deliverables Badges matching Ecosystem style */}
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {service.items.map((item, i) => (
                              <motion.span
                                key={item}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.04 + i * 0.03 }}
                                className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-white/80 font-mono text-[11px] hover:bg-white/10 hover:border-white/20 transition-colors"
                              >
                                {item}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Footer Metric & Action matching ECOSYSTEM */}
                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span className="flex items-center gap-1.5 font-mono text-emerald-400">
                    <Activity className="w-3.5 h-3.5" /> {service.metric}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openContactModal(service.title);
                    }}
                    className="flex items-center gap-1 text-accent hover:text-white font-semibold transition-colors cursor-pointer"
                  >
                    Build with {service.title} <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Consultation Banner matching ECOSYSTEM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Have a specialized project or enterprise requirement?
              </h4>
              <p className="text-xs sm:text-sm text-white/60 mt-0.5">
                We provide custom engineering sprints, cross-discipline teams, and dedicated technical leadership.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openContactModal("Custom Service Consultation")}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-accent text-black hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
