"use client";

import { motion } from "framer-motion";
import { Download, LayoutTemplate, Layers, Code2, Server, Workflow } from "lucide-react";

export const NetworkAnimation = () => {
  return (
    <div className="absolute inset-0 bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Nodes and connecting lines */}
        <svg className="absolute w-full h-full">
          <motion.line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" 
            initial={{ strokeDashoffset: 100, opacity: 0 }}
            animate={{ strokeDashoffset: 0, opacity: 0.6 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5"
            initial={{ strokeDashoffset: 100, opacity: 0 }}
            animate={{ strokeDashoffset: 0, opacity: 0.6 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <motion.line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5"
            initial={{ strokeDashoffset: 100, opacity: 0 }}
            animate={{ strokeDashoffset: 0, opacity: 0.6 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </svg>

        {/* Central Router Node */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px #3b82f6", "0 0 20px #3b82f6", "0 0 0px #3b82f6"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute z-10 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50"
        >
          <Workflow className="w-8 h-8 text-white" />
        </motion.div>

        {/* Outer Nodes */}
        <motion.div className="absolute top-[20%] left-[20%] w-12 h-12 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center"
           animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
          <span className="text-xs text-slate-400 font-mono">GPT</span>
        </motion.div>
        
        <motion.div className="absolute top-[20%] right-[20%] w-12 h-12 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center"
           animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <span className="text-xs text-slate-400 font-mono">Claude</span>
        </motion.div>

        <motion.div className="absolute bottom-[15%] left-[50%] -translate-x-1/2 w-12 h-12 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center"
           animate={{ x: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
          <span className="text-xs text-slate-400 font-mono">Gemini</span>
        </motion.div>
      </div>
    </div>
  );
};

export const DownloadAnimation = () => {
  return (
    <div className="absolute inset-0 bg-emerald-950 flex flex-col items-center justify-center overflow-hidden gap-8">
      {/* Background circles */}
      <motion.div 
        animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute w-32 h-32 rounded-full border-2 border-emerald-500"
      />
      
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="z-10 w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/50 text-white"
      >
        <Download className="w-8 h-8" />
      </motion.div>

      <div className="z-10 w-48 h-2 bg-emerald-900 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "circInOut" }}
          className="h-full bg-emerald-400"
        />
      </div>
    </div>
  );
};

export const WireframeAnimation = () => {
  return (
    <div className="absolute inset-0 bg-blue-950 flex flex-col items-center justify-center overflow-hidden p-8">
      <div className="w-full max-w-sm h-full bg-slate-900/50 rounded-xl border border-slate-800 p-4 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            className="w-10 h-10 rounded-full bg-blue-500/30" 
          />
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "60%" }}
            transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            className="h-4 rounded bg-slate-700" 
          />
        </div>
        
        {/* Content Blocks */}
        <div className="flex gap-4 h-full">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            className="w-1/3 h-full rounded bg-slate-800 flex flex-col gap-2 p-2"
          >
            <div className="h-2 w-full bg-slate-700 rounded" />
            <div className="h-2 w-3/4 bg-slate-700 rounded" />
            <div className="h-2 w-5/6 bg-slate-700 rounded" />
          </motion.div>

          {/* Main Content */}
          <div className="w-2/3 h-full flex flex-col gap-4">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
              className="h-1/2 w-full rounded bg-blue-600/20 border border-blue-500/30 flex items-center justify-center"
            >
              <LayoutTemplate className="w-8 h-8 text-blue-400/50" />
            </motion.div>
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
              className="h-1/2 w-full rounded bg-slate-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardsAnimation = () => {
  return (
    <div className="absolute inset-0 bg-purple-950 flex items-center justify-center overflow-hidden perspective-1000">
      <div className="relative w-48 h-64">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              rotateZ: [i * 5, -i * 5, i * 5],
              rotateY: [0, 20, 0],
              y: [0, -20, 0],
              zIndex: [3-i, i, 3-i]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute inset-0 rounded-2xl shadow-xl shadow-black/50 border flex items-center justify-center bg-gradient-to-br ${
              i === 0 ? "from-purple-600 to-indigo-600 border-purple-400" :
              i === 1 ? "from-pink-600 to-rose-600 border-pink-400" :
              "from-amber-500 to-orange-600 border-amber-300"
            }`}
            style={{ originX: 0.5, originY: 1 }}
          >
            <Layers className="w-12 h-12 text-white/50" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const CodeAnimation = () => {
  return (
    <div className="absolute inset-0 bg-zinc-950 flex flex-col p-6 overflow-hidden">
      {/* Mac OS Window frame */}
      <div className="w-full h-6 flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      
      {/* Code lines */}
      <div className="flex flex-col gap-3 font-mono">
        <motion.div 
          initial={{ width: 0, opacity: 0 }} animate={{ width: "40%", opacity: 1 }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
          className="h-3 bg-pink-500/80 rounded"
        />
        <div className="pl-4 flex flex-col gap-3">
          <motion.div 
            initial={{ width: 0, opacity: 0 }} animate={{ width: "60%", opacity: 1 }} transition={{ duration: 0.5, delay: 0.3, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
            className="h-3 bg-blue-400/80 rounded"
          />
          <motion.div 
            initial={{ width: 0, opacity: 0 }} animate={{ width: "70%", opacity: 1 }} transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
            className="h-3 bg-yellow-400/80 rounded"
          />
          <div className="pl-4 flex flex-col gap-3">
            <motion.div 
              initial={{ width: 0, opacity: 0 }} animate={{ width: "50%", opacity: 1 }} transition={{ duration: 0.5, delay: 0.9, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
              className="h-3 bg-green-400/80 rounded"
            />
            <motion.div 
              initial={{ width: 0, opacity: 0 }} animate={{ width: "80%", opacity: 1 }} transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
              className="h-3 bg-emerald-400/80 rounded"
            />
          </div>
          <motion.div 
            initial={{ width: 0, opacity: 0 }} animate={{ width: "30%", opacity: 1 }} transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
            className="h-3 bg-blue-400/80 rounded"
          />
        </div>
        <motion.div 
          initial={{ width: 0, opacity: 0 }} animate={{ width: "20%", opacity: 1 }} transition={{ duration: 0.5, delay: 1.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
          className="h-3 bg-pink-500/80 rounded"
        />
      </div>

      <div className="absolute bottom-6 right-6">
        <Code2 className="w-16 h-16 text-white/10" />
      </div>
    </div>
  );
};

export const ServerAnimation = () => {
  return (
    <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center gap-4 overflow-hidden">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-64 h-16 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg flex items-center px-6 gap-6 relative overflow-hidden">
          
          {/* Data scanning effect */}
          <motion.div 
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "200%", opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
          />

          <Server className="w-6 h-6 text-neutral-500" />
          
          <div className="flex-1 flex gap-2">
            {[1, 2, 3, 4, 5, 6].map((j) => (
              <div key={j} className="w-2 h-6 bg-neutral-800 rounded-sm" />
            ))}
          </div>

          <div className="flex gap-2">
            <motion.div 
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.5 + (i * 0.15), repeat: Infinity, repeatType: "reverse" }}
              className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" 
            />
            <motion.div 
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.5 + (i * 0.15), repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
              className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};
