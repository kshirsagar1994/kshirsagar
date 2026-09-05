"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  Play, 
  Check, 
  Sparkles, 
  Search, 
  Flame, 
  Heart, 
  Radio, 
  Terminal, 
  Cpu, 
  Wifi, 
  ShieldCheck, 
  Activity, 
  Users, 
  FolderKanban, 
  CheckCircle2, 
  Clock, 
  Volume2,
  ExternalLink,
  Zap,
  Briefcase,
  Building2,
  MapPin,
  GraduationCap,
  FileText,
  TrendingUp,
  Droplets,
  Sprout,
  Sun,
  CloudRain,
  Power,
  ArrowRight,
  Video,
  Music
} from "lucide-react";

// ==========================================
// 1. AIOD (All-In-One Downloader) Product Screen
// ==========================================
export const AIODScreen = () => {
  const [downloadStep, setDownloadStep] = useState(0); // 0: Idle, 1: Fetching, 2: Ready, 3: Downloading, 4: Done
  const [activeTab, setActiveTab] = useState<"video" | "audio" | "reels">("video");

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadStep((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-[#060911] text-white flex flex-col font-sans select-none overflow-hidden">
      {/* Browser Bar */}
      <div className="h-8 bg-[#0b0f1a] border-b border-white/10 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-[#121827] px-3.5 py-0.5 rounded-full text-[10px] text-cyan-200/70 font-mono flex items-center gap-1.5 border border-cyan-500/20">
          <span className="text-cyan-400">🔒</span> https://aiod.media/downloader
        </div>
        <div className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/25 font-mono">
          All-In-One Media Downloader
        </div>
      </div>

      {/* Website Navigation Header */}
      <div className="h-11 bg-[#090d18]/90 border-b border-white/5 px-4 sm:px-6 flex items-center justify-between shrink-0 relative z-20 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Download className="w-3.5 h-3.5 text-black stroke-[2.5]" />
          </div>
          <div>
            <div className="text-xs font-black tracking-tight text-white flex items-center gap-1">
              AIOD <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-normal">v3.2</span>
            </div>
            <div className="text-[8px] text-white/50 tracking-wider uppercase">All-In-One Downloader</div>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="hidden sm:flex items-center gap-1 text-[10px] text-white/70">
          <button 
            onClick={() => setActiveTab("video")} 
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${activeTab === "video" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "hover:text-white"}`}
          >
            Video (4K)
          </button>
          <button 
            onClick={() => setActiveTab("audio")} 
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${activeTab === "audio" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "hover:text-white"}`}
          >
            Audio (MP3)
          </button>
          <button 
            onClick={() => setActiveTab("reels")} 
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${activeTab === "reels" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "hover:text-white"}`}
          >
            Reels & Shorts
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
            ⚡ 100% Free • No Watermark
          </span>
        </div>
      </div>

      {/* Main Hero Screen */}
      <div className="flex-1 p-3 sm:p-5 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#080d1a] via-[#091122] to-[#050811]">
        {/* Ambient Neon Glows */}
        <div className="absolute -top-12 left-1/4 w-80 h-36 bg-cyan-500/15 blur-[70px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 right-1/4 w-80 h-36 bg-emerald-500/10 blur-[70px] rounded-full pointer-events-none" />

        {/* Subtle Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: "radial-gradient(rgba(6,182,212,0.4) 1px, transparent 1px)", 
            backgroundSize: "20px 20px" 
          }} 
        />

        {/* Hero Header */}
        <div className="text-center relative z-10 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-semibold">
            <Sparkles className="w-3 h-3 text-cyan-400" /> Universal All-In-One Media Downloader
          </div>
          <h4 className="text-base sm:text-xl font-extrabold tracking-tight text-white leading-tight">
            Download Any Social Media in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300">
              Highest Quality 4K
            </span>
          </h4>
          <p className="text-[10px] sm:text-[11px] text-white/60 max-w-md mx-auto line-clamp-1">
            Save videos, reels, stories & audio from Instagram, YouTube, TikTok, Facebook & Twitter without watermarks.
          </p>
        </div>

        {/* Central Search & Fetch Bar (Hero Core) */}
        <div className="my-1.5 relative z-10 max-w-md mx-auto w-full space-y-2">
          {/* Format Selector Tabs */}
          <div className="flex items-center justify-center gap-1.5 text-[9px]">
            <button 
              onClick={() => setActiveTab("video")} 
              className={`px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
                activeTab === "video" 
                  ? "bg-cyan-500 text-black font-bold border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]" 
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
              }`}
            >
              🎬 Video (4K/1080p)
            </button>
            <button 
              onClick={() => setActiveTab("audio")} 
              className={`px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
                activeTab === "audio" 
                  ? "bg-cyan-500 text-black font-bold border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]" 
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
              }`}
            >
              🎵 Audio (MP3 320k)
            </button>
            <button 
              onClick={() => setActiveTab("reels")} 
              className={`px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
                activeTab === "reels" 
                  ? "bg-cyan-500 text-black font-bold border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]" 
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
              }`}
            >
              ⚡ Reels & Shorts
            </button>
          </div>

          {/* Interactive URL Input Bar */}
          <div className="flex items-center bg-[#0d1322] border border-cyan-500/30 rounded-xl p-1 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Search className="w-3.5 h-3.5 text-cyan-400 ml-2 shrink-0" />
            <div className="flex-1 px-2 text-[11px] text-white/90 font-mono truncate">
              {downloadStep === 0 && "https://www.instagram.com/reel/C8k_v9P..."}
              {downloadStep >= 1 && "https://www.instagram.com/reel/C8k_v9P [Stream Detected]"}
            </div>
            <button className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-black px-3 py-1.5 rounded-lg text-[10px] font-extrabold flex items-center gap-1 shrink-0 shadow-md">
              {downloadStep >= 1 ? (
                <>
                  <Check className="w-3 h-3" /> Fetched
                </>
              ) : (
                <>
                  <Download className="w-3 h-3" /> Download
                </>
              )}
            </button>
          </div>

          {/* Live Detected Media Card */}
          <div className="bg-[#0b101c]/95 border border-white/10 rounded-xl p-2.5 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              {/* Media Thumbnail */}
              <div className="w-14 h-10 rounded-lg bg-gradient-to-br from-cyan-600/40 via-teal-600/30 to-emerald-600/40 border border-white/10 flex items-center justify-center relative overflow-hidden shrink-0">
                <Play className="w-4 h-4 text-white fill-white/80" />
                <span className="absolute bottom-0.5 right-1 text-[8px] bg-black/80 px-1 rounded font-mono text-white/80">0:45</span>
              </div>

              {/* Media Info */}
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold text-white truncate">
                  Cinematic_Travel_Reel_4K.mp4
                </div>
                <div className="text-[9px] text-white/60 flex items-center gap-1.5 mt-0.5 font-mono">
                  <span className="text-cyan-300 font-semibold">1080p 60fps</span>
                  <span>•</span>
                  <span>48.2 MB</span>
                  <span>•</span>
                  <span className="text-emerald-400">Stereo Audio</span>
                </div>
              </div>
            </div>

            {/* Live Progress Bar & Status */}
            <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px]">
              {downloadStep <= 1 && (
                <span className="text-cyan-300/80 flex items-center gap-1.5 text-[9px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /> Analyzing audio & video streams...
                </span>
              )}
              {downloadStep === 2 && (
                <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[9px]">
                  ✓ Stream Ready: Instant CDN Download
                </span>
              )}
              {downloadStep === 3 && (
                <div className="w-full space-y-1">
                  <div className="flex justify-between text-[9px] text-white/70 font-mono">
                    <span>Downloading to Device...</span>
                    <span className="text-cyan-400 font-bold">84% (40.5 MB)</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-300" style={{ width: "84%" }} />
                  </div>
                </div>
              )}
              {downloadStep === 4 && (
                <div className="flex items-center justify-between w-full">
                  <span className="text-emerald-300 font-bold flex items-center gap-1 text-[10px]">
                    ✓ Download Completed
                  </span>
                  <span className="bg-emerald-500 text-black px-2 py-0.5 rounded text-[9px] font-extrabold shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                    File Saved (.mp4)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hero Footer: Supported Platforms & Impact */}
        <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-white/60">
          <div className="flex items-center gap-1.5">
            <span className="text-white/40">Supported:</span>
            {["Instagram", "YouTube", "TikTok", "X / Twitter", "Facebook"].map((p, idx) => (
              <span key={p} className={`px-1.5 py-0.2 rounded border text-[8px] font-mono ${
                idx === 0 ? "bg-rose-500/10 border-rose-500/30 text-rose-300" :
                idx === 1 ? "bg-red-500/10 border-red-500/30 text-red-300" :
                idx === 2 ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300" :
                idx === 3 ? "bg-sky-500/10 border-sky-500/30 text-sky-300" :
                "bg-blue-500/10 border-blue-500/30 text-blue-300"
              }`}>
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-cyan-300/80">
            <span>⚡ 12M+ Downloads</span>
            <span>•</span>
            <span>50+ Platforms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. Swami Ratna Consultancy (Job & Recruitment Portal)
// ==========================================
export const SwamiRatnaScreen = () => {
  const [applied, setApplied] = useState(false);

  return (
    <div className="absolute inset-0 bg-[#070b14] text-white flex flex-col font-sans select-none overflow-hidden">
      {/* Browser Bar */}
      <div className="h-9 bg-[#0d1424] border-b border-blue-900/30 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-[#141d33] px-4 py-1 rounded-full text-[11px] text-blue-200/80 font-mono flex items-center gap-1.5 border border-blue-500/20">
          <span className="text-blue-400">🔒</span> https://swamiratnaconsultancy.com/jobs
        </div>
        <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
          Verified Placement Agency
        </div>
      </div>

      {/* Hero Body */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#0d1424] to-[#070b14]">
        {/* Blue Ambient Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-36 bg-blue-600/15 blur-[70px] rounded-full pointer-events-none" />

        {/* Website Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-[0_0_12px_rgba(37,99,235,0.5)]">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-white uppercase">Swami Ratna</div>
              <div className="text-[9px] text-blue-400/80">Consultancy & Career Placements</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">4,200+ Jobs Active</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hidden sm:inline-block">350+ MNC Partners</span>
          </div>
        </div>

        {/* Interactive Search Bar */}
        <div className="my-1.5 relative z-10 max-w-md mx-auto w-full">
          <div className="flex items-center bg-[#11192e] border border-blue-500/30 rounded-xl p-1.5 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <Search className="w-4 h-4 text-blue-400 ml-2 shrink-0" />
            <div className="flex-1 px-2 text-xs text-white/90 font-mono truncate">
              Senior Full-Stack Engineer
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[10px] text-white/50 border-l border-white/10 pl-2 pr-2">
              <MapPin className="w-3 h-3 text-emerald-400" /> Pune / Mumbai
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-colors">
              Find Jobs
            </button>
          </div>
        </div>

        {/* Live Job Card (How it works in action) */}
        <div className="relative z-10 max-w-md mx-auto w-full bg-[#10172a]/95 border border-blue-500/25 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-tight">
                  Senior Full-Stack Engineer (React / Node)
                </div>
                <div className="text-[10px] text-blue-300/80 flex items-center gap-1.5 mt-0.5">
                  <span>TechWave Global Services</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">₹12.5 - 18.0 LPA</span>
                </div>
              </div>
            </div>

            <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono shrink-0">
              Verified Hiring
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-2.5 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">Full-Time</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">Hybrid • Pune</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">2-5 Yrs Exp</span>
            <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">Urgent Requirement</span>
          </div>

          {/* Application Action Button */}
          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
            <div className="text-[10px] text-white/50">
              🔥 22 Candidates Applied Today
            </div>

            <button
              onClick={() => setApplied(!applied)}
              className={`px-3.5 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                applied
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"
              }`}
            >
              {applied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Shortlisted for Round 1
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5" /> 1-Click Apply with Resume
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Footer Stats Ticker */}
        <div className="flex items-center justify-between text-[10px] text-white/50 relative z-10 pt-2 border-t border-white/10 font-mono">
          <span>💼 4,850+ Candidates Placed</span>
          <span>•</span>
          <span>🏢 320+ Hiring MNCs</span>
          <span>•</span>
          <span className="text-blue-400 font-semibold hover:underline cursor-pointer flex items-center gap-1">
            Browse All Openings <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. MyPortfolio Product Screen (Developer Hero)
// ==========================================
export const MyPortfolioScreen = () => {
  return (
    <div className="absolute inset-0 bg-[#090a0f] text-white flex flex-col font-sans select-none overflow-hidden">
      {/* Browser Bar */}
      <div className="h-9 bg-[#10121a] border-b border-white/10 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-[#181c28] px-4 py-1 rounded-full text-[11px] text-white/60 font-mono flex items-center gap-1.5 border border-white/5">
          <span className="text-purple-400">⚡</span> https://kshirsagar1994.github.io/MyPortfolio
        </div>
        <div className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 font-mono">
          Interactive Portfolio
        </div>
      </div>

      {/* Main Developer Hero Screen */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden">
        {/* Purple Ambient Background Glow */}
        <div className="absolute -top-16 -right-16 w-72 h-48 bg-purple-600/20 blur-[70px] rounded-full pointer-events-none" />

        {/* Portfolio Nav & Bio */}
        <div className="flex items-center justify-between relative z-10 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-xs text-white border border-white/20 shadow-[0_0_12px_rgba(139,92,246,0.5)]">
              AK
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wide">Ajay Kshirsagar</div>
              <div className="text-[10px] text-accent">Full-Stack & Systems Engineer</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Open for Projects
          </div>
        </div>

        {/* Interactive Terminal / Code Mockup */}
        <div className="relative z-10 my-2 max-w-md mx-auto w-full bg-[#0d0f17] border border-white/10 rounded-xl p-3.5 shadow-2xl font-mono text-[11px] text-white/80">
          <div className="flex items-center gap-1.5 text-white/40 mb-2.5 pb-2 border-b border-white/10 text-[10px]">
            <Terminal className="w-3.5 h-3.5 text-accent" /> developer-environment ~ bash
          </div>

          <div className="space-y-1">
            <div className="text-white/50">
              $ <span className="text-purple-300">curl</span> https://api.kshirsagar.dev/skills
            </div>
            <div className="text-emerald-400">
              ✓ 200 OK • Response payload:
            </div>
            <div className="bg-black/40 p-2.5 rounded-lg border border-white/5 text-[10px] space-y-0.5 text-white/70">
              <div>{"{"}</div>
              <div className="pl-3"><span className="text-purple-400">&quot;frontend&quot;</span>: [&quot;React 19&quot;, &quot;Next.js 16&quot;, &quot;Tailwind&quot;],</div>
              <div className="pl-3"><span className="text-purple-400">&quot;backend&quot;</span>: [&quot;Node.js&quot;, &quot;TypeScript&quot;, &quot;Database&quot;],</div>
              <div className="pl-3"><span className="text-purple-400">&quot;experience&quot;</span>: &quot;Production Web & Apps Architect&quot;</div>
              <div>{"}"}</div>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-white/50">
            <span>Repositories: 25+ Shipped</span>
            <span className="text-accent font-semibold flex items-center gap-1">
              Explore Repos <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Quick Tech Tag Row */}
        <div className="flex items-center justify-between text-[11px] text-white/60 relative z-10 pt-2 border-t border-white/10">
          <div className="flex gap-2 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">HTML5</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">CSS3</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">JavaScript</span>
          </div>
          <span className="text-accent text-[10px] font-bold">Personal Portfolio</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. VVK Smart Tech Product Screen (Official Website Hero Screen)
// ==========================================
export const VVKSmartTechScreen = () => {
  const [motorRunning, setMotorRunning] = useState(true);

  return (
    <div className="absolute inset-0 bg-[#062e1a] text-white flex flex-col font-sans select-none overflow-hidden">
      {/* Browser Bar */}
      <div className="h-8 bg-[#041d11] border-b border-white/10 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-[#0b2b1a] px-3.5 py-0.5 rounded-full text-[10px] text-emerald-200/80 font-mono flex items-center gap-1.5 border border-emerald-500/25">
          <span className="text-emerald-400">🔒</span> https://www.vvksmarttech.com
        </div>
        <div className="text-[10px] text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30 font-mono">
          Official Website
        </div>
      </div>

      {/* Website Navigation Header (from actual vvksmarttech.com) */}
      <div className="h-11 bg-white/5 border-b border-white/10 px-4 sm:px-6 flex items-center justify-between shrink-0 relative z-20 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#0B8F4D] to-[#1A73E8] flex items-center justify-center shadow-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="3" fill="white" />
              <line x1="12" y1="2" x2="12" y2="9" stroke="white" strokeWidth="1.5" />
              <line x1="12" y1="15" x2="12" y2="22" stroke="white" strokeWidth="1.5" />
              <line x1="3" y1="7" x2="9" y2="10.5" stroke="white" strokeWidth="1.5" />
              <line x1="15" y1="13.5" x2="21" y2="17" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold text-white tracking-tight leading-none">VVK Smart Tech</div>
            <div className="text-[8px] tracking-wider uppercase text-emerald-300/80 font-medium mt-0.5">IoT Solutions</div>
          </div>
        </div>

        {/* Real Navigation Links */}
        <div className="hidden sm:flex items-center gap-3 text-[10px] text-white/80 font-medium">
          <span className="text-white font-semibold">Home</span>
          <span className="hover:text-white cursor-pointer transition-colors">Products</span>
          <span className="hover:text-white cursor-pointer transition-colors">Services</span>
          <span className="hover:text-white cursor-pointer transition-colors">About</span>
          <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-gradient-to-r from-[#0B8F4D] to-[#1A73E8] text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-md hover:brightness-110 transition-all cursor-pointer">
            Request Demo
          </button>
        </div>
      </div>

      {/* Main Hero Screen (Exact visual identity of vvksmarttech.com) */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#062e1a] via-[#0B8F4D] to-[#1A73E8]">
        {/* Subtle grid pattern from real site */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", 
            backgroundSize: "32px 32px" 
          }} 
        />

        {/* Ambient Blur spheres */}
        <div className="absolute w-60 h-60 rounded-full bg-[#1A73E8]/25 blur-3xl pointer-events-none -right-10 top-0" />
        <div className="absolute w-72 h-72 rounded-full bg-[#0B8F4D]/30 blur-3xl pointer-events-none -left-10 bottom-0" />

        {/* Floating decorative water droplets & wifi waves */}
        <div className="absolute left-[12%] top-[25%] opacity-20 pointer-events-none">
          <Droplets className="w-5 h-5 text-white" />
        </div>
        <div className="absolute right-[18%] top-[30%] opacity-20 pointer-events-none">
          <Wifi className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-[40%] bottom-[20%] opacity-15 pointer-events-none">
          <Sprout className="w-5 h-5 text-white" />
        </div>

        {/* Hero Copy Content */}
        <div className="relative z-10 max-w-xl space-y-2">
          {/* Badge from website */}
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-3 py-0.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-[10px] font-medium tracking-wide">IoT Powered Agriculture</span>
          </div>

          {/* Headline from website */}
          <h1 className="text-base sm:text-2xl font-black text-white leading-tight tracking-tight">
            Smart Irrigation for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-200 to-blue-200">
              Future of Farming
            </span>
          </h1>

          {/* Subtitle from website */}
          <p className="text-[10px] sm:text-[11px] text-white/90 leading-relaxed max-w-md">
            Affordable IoT technology that enables farmers to remotely control irrigation motors, monitor water supply, and protect equipment.
          </p>

          {/* CTA Buttons from website */}
          <div className="flex items-center gap-2.5 pt-1">
            <button className="bg-white text-[#0B8F4D] hover:bg-emerald-50 text-[10px] sm:text-[11px] font-extrabold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transition-all cursor-pointer">
              Explore Products <ArrowRight className="w-3 h-3" />
            </button>
            <button className="border border-white/40 text-white hover:bg-white/10 text-[10px] sm:text-[11px] font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm transition-all cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

        {/* Live Product Showcase Card (IRRIGO Mobile Auto) & Stats */}
        <div className="relative z-10 pt-2 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {/* Real Metrics from website */}
          <div className="flex items-center gap-4 text-white">
            <div>
              <div className="text-xs sm:text-sm font-black font-mono leading-none">500+</div>
              <div className="text-[8px] text-white/70 uppercase">Farmers Served</div>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div>
              <div className="text-xs sm:text-sm font-black font-mono leading-none">1,000+</div>
              <div className="text-[8px] text-white/70 uppercase">Devices Active</div>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div>
              <div className="text-xs sm:text-sm font-black font-mono leading-none">5+</div>
              <div className="text-[8px] text-white/70 uppercase">States in India</div>
            </div>
          </div>

          {/* Interactive Flagship Product Badge: IRRIGO Mobile Auto */}
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl px-2.5 py-1 text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${motorRunning ? "bg-emerald-400 animate-ping" : "bg-white/40"}`} />
              <span className="font-semibold text-white">IRRIGO Mobile Auto:</span>
              <span className="text-emerald-300 font-mono text-[9px]">
                {motorRunning ? "415V 3-Phase ON (180 L/min)" : "Motor Standby"}
              </span>
            </div>
            <button 
              onClick={() => setMotorRunning(!motorRunning)}
              className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 text-white text-[9px] font-bold transition-colors cursor-pointer"
            >
              {motorRunning ? "STOP" : "START"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. DMS (Department Management System) Product Screen
// ==========================================
export const DMSScreen = () => {
  const [approved, setApproved] = useState(false);

  return (
    <div className="absolute inset-0 bg-[#090a10] text-white flex flex-col font-sans select-none overflow-hidden">
      {/* Browser Bar */}
      <div className="h-9 bg-[#11131c] border-b border-indigo-900/30 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-[#181b28] px-4 py-1 rounded-full text-[11px] text-indigo-200/80 font-mono flex items-center gap-1.5 border border-indigo-500/20">
          <span className="text-indigo-400">🔒</span> https://dms.enterprise.internal/dashboard
        </div>
        <div className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/30">
          Enterprise ERP/DMS
        </div>
      </div>

      {/* Main SaaS Dashboard Screen */}
      <div className="flex-1 p-3 sm:p-5 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#11131c] to-[#090a10]">
        {/* Indigo Ambient Glow */}
        <div className="absolute -top-16 left-1/4 w-80 h-36 bg-indigo-600/15 blur-[70px] rounded-full pointer-events-none" />

        {/* Dashboard Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <FolderKanban className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-tight text-white">Department Management System</div>
              <div className="text-[9px] text-indigo-300/80">Operations & Resource Allocation</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60">Admin Portal</span>
            <div className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-[10px]">
              D
            </div>
          </div>
        </div>

        {/* KPI Metrics Row */}
        <div className="grid grid-cols-3 gap-2 my-2 relative z-10">
          <div className="bg-[#141724]/90 border border-white/10 rounded-xl p-2">
            <div className="flex items-center gap-1.5 text-[9px] text-white/50">
              <Users className="w-3 h-3 text-indigo-400" /> Active Staff
            </div>
            <div className="text-sm font-bold text-white font-mono mt-0.5">142 / 150</div>
            <div className="text-[8px] text-emerald-400">94.6% Present</div>
          </div>

          <div className="bg-[#141724]/90 border border-white/10 rounded-xl p-2">
            <div className="flex items-center gap-1.5 text-[9px] text-white/50">
              <Activity className="w-3 h-3 text-cyan-400" /> Tasks in Sprint
            </div>
            <div className="text-sm font-bold text-white font-mono mt-0.5">38 Active</div>
            <div className="text-[8px] text-cyan-400">12 Pending Review</div>
          </div>

          <div className="bg-[#141724]/90 border border-white/10 rounded-xl p-2">
            <div className="flex items-center gap-1.5 text-[9px] text-white/50">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Compliance
            </div>
            <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">100%</div>
            <div className="text-[8px] text-white/40">Audit Verified</div>
          </div>
        </div>

        {/* Live Kanban / Workflow Approval Card (How it works) */}
        <div className="relative z-10 max-w-md mx-auto w-full bg-[#131624]/90 border border-indigo-500/20 rounded-xl p-3 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px] mb-2 font-semibold">
            <span className="text-white flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-indigo-400" /> Priority Resource Request #849
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Engineering Dept
            </span>
          </div>

          <div className="text-[10px] text-white/70 bg-black/30 p-2 rounded-lg border border-white/5 space-y-1">
            <div className="flex justify-between">
              <span className="text-white/40">Allocated Assets:</span>
              <span className="text-white font-medium">8 High-Performance Dev Nodes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Target Timeline:</span>
              <span className="text-white font-medium">Q3 Infrastructure Sprint</span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-white/5">
            <div className="text-[10px] text-white/50">
              Status: {approved ? <span className="text-emerald-400 font-bold">Approved & Deployed</span> : <span className="text-amber-400 font-semibold">Awaiting Director Sign-off</span>}
            </div>

            <button
              onClick={() => setApproved(!approved)}
              className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all flex items-center gap-1 ${
                approved 
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" 
                  : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]"
              }`}
            >
              {approved ? (
                <>
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Approved
                </>
              ) : (
                <>
                  Approve Request
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[11px] text-white/60 relative z-10 pt-2 border-t border-white/10">
          <span>Enterprise Department Management System</span>
          <span className="text-indigo-400 font-semibold hover:underline cursor-pointer flex items-center gap-1">
            View Internal Demo <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

// Aliases and fallback wrappers so existing calls work seamlessly
export const DownloadAnimation = AIODScreen;
export const CardsAnimation = SwamiRatnaScreen;
export const CodeAnimation = MyPortfolioScreen;
export const WireframeAnimation = VVKSmartTechScreen;
export const ServerAnimation = DMSScreen;
export const NetworkAnimation = AIODScreen;
