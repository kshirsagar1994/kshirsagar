"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Handshake, Layers } from "lucide-react";

const differentiators = [
  {
    id: "engineering",
    title: "Engineering Quality",
    description: "We build to last. Using scalable microservices architecture and rigorous testing, we ensure your software performs flawlessly under load.",
    icon: <Code2 className="w-8 h-8 text-accent" />,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  },
  {
    id: "ai",
    title: "AI Integration",
    description: "Native AI capabilities seamlessly woven into your business software, turning static tools into intelligent agents.",
    icon: <BrainCircuit className="w-8 h-8 text-accent" />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
  {
    id: "partnership",
    title: "Long-Term Partnership",
    description: "We don't just deliver software. We manage, host, maintain, and scale it alongside you as your technology partner.",
    icon: <Handshake className="w-8 h-8 text-accent" />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: "fullstack",
    title: "Under One Roof",
    description: "From UI design and mobile apps to backend architecture and cloud deployment, we handle the entire ecosystem.",
    icon: <Layers className="w-8 h-8 text-accent" />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function WhyKshirsagar() {
  return (
    <section className="w-full bg-black py-32 px-6 md:px-12 relative z-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            The Kshirsagar Difference
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white max-w-3xl">
            Why partner with us?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className={`group relative bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden cursor-default transition-colors hover:bg-white/10 hover:border-accent/50 ${item.colSpan} ${item.rowSpan}`}
            >
              {/* Internal subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8 p-4 bg-black/50 rounded-2xl inline-block w-fit border border-white/5 group-hover:border-accent/30 transition-colors">
                  {item.icon}
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
