"use client";

import { motion } from "framer-motion";

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
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1.0, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  },
};

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#050505] py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mb-24">
          Everything you need to build, launch and scale.
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
              className="group border border-white/10 bg-white/5 rounded-3xl p-8 lg:p-12 hover:bg-white/10 hover:border-accent/50 transition-colors duration-500 relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-xl font-medium text-accent">
                    {service.id} —
                  </span>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-lg text-white/60 mt-1 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <motion.ul className="flex flex-col gap-y-3 mt-auto">
                  {service.items.map((item, i) => (
                    <motion.li 
                      variants={listItemVariants} 
                      key={i} 
                      className="flex items-center gap-3 text-white/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
