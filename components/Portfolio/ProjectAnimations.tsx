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
  Zap
} from "lucide-react";

// ==========================================
// 1. AIOD (All-In-One Downloader) Product Screen
// ==========================================
export const AIODScreen = () => {
  const [downloadStep, setDownloadStep] = useState(0); // 0: Idle, 1: Fetching, 2: Ready, 3: Downloading, 4: Done

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadStep((prev) => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-[#07090e] text-white flex flex-col font-sans select-none overflow-hidden">
      {/* Browser Bar */}
      <div className="h-9 bg-[#0e121a] border-b border-white/10 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-[#161c28] px-4 py-1 rounded-full text-[11px] text-white/60 font-mono flex items-center gap-1.5 border border-white/5">
          <span className="text-emerald-400">🔒</span> https://aiod.app/downloader
        </div>
        <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
          v2.4 Live
        </div>
      </div>

      {/* Main Product Hero */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden">
        {/* Background gradient ambient glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-32 bg-emerald-500/15 blur-[60px] rounded-full pointer-events-none" />

        {/* Product Header */}
        <div className="text-center relative z-10 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
            <Sparkles className="w-3 h-3" /> Universal Video & Audio Downloader
          </div>
          <h4 className="text-base sm:text-xl font-bold tracking-tight text-white">
            Download Any Media in <span className="text-emerald-400">1-Click</span>
          </h4>
          <p className="text-[11px] sm:text-xs text-white/50">
            Supports Instagram Reels, YouTube 4K, TikTok No-Watermark, Twitter/X
          </p>
        </div>

        {/* Interactive URL Input Bar */}
        <div className="my-2 relative z-10 max-w-md mx-auto w-full">
          <div className="flex items-center bg-[#131924] border border-emerald-500/30 rounded-xl p-1.5 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <Search className="w-4 h-4 text-emerald-400 ml-2.5 shrink-0" />
            <div className="flex-1 px-2.5 text-xs text-white/90 font-mono truncate">
              {downloadStep === 0 && "https://instagram.com/reel/C8k_v9P..."}
              {downloadStep >= 1 && "https://instagram.com/reel/C8k_v9P [Detected]"}
            </div>
            <button className="bg-emerald-500 text-black px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shrink-0 hover:bg-emerald-400 transition-colors">
              {downloadStep >= 1 ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Fetched
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" /> Fetch
                </>
              )}
            </button>
          </div>

          {/* Supported platform chips */}
          <div className="flex items-center justify-center gap-2 mt-2">
            {["Instagram", "YouTube", "TikTok", "X / Twitter"].map((p, i) => (
              <span key={p} className={`text-[10px] px-2 py-0.5 rounded-full border transition-colors ${
                i === 0 ? "bg-rose-500/15 border-rose-500/30 text-rose-300" :
                i === 1 ? "bg-red-500/15 border-red-500/30 text-red-300" :
                i === 2 ? "bg-cyan-500/15 border-cyan-500/30 text-cyan-300" :
                "bg-blue-500/15 border-blue-500/30 text-blue-300"
              }`}>
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Live Detected Media Card (How it works in action) */}
        <div className="relative z-10 max-w-md mx-auto w-full bg-[#111622]/90 border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            {/* Thumbnail with play button */}
            <div className="w-16 h-12 rounded-lg bg-gradient-to-br from-emerald-600/40 to-cyan-700/40 border border-white/10 flex items-center justify-center relative overflow-hidden shrink-0">
              <Play className="w-5 h-5 text-white fill-white/80" />
              <span className="absolute bottom-1 right-1 text-[9px] bg-black/80 px-1 rounded font-mono text-white/80">0:45</span>
            </div>

            {/* Media metadata */}
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">
                Cinematic_Architecture_Reel_HD.mp4
              </div>
              <div className="text-[10px] text-white/50 flex items-center gap-2 mt-0.5">
                <span>1080p Full HD</span>
                <span>•</span>
                <span>48.2 MB</span>
                <span>•</span>
                <span className="text-emerald-400">Audio Included</span>
              </div>
            </div>
          </div>

          {/* Live Progress Bar & Status */}
          <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
            {downloadStep <= 1 && (
              <span className="text-white/60 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Analyzing audio/video streams...
              </span>
            )}
            {downloadStep === 2 && (
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                ✓ Ready for high-speed download
              </span>
            )}
            {downloadStep === 3 && (
              <div className="w-full space-y-1">
                <div className="flex justify-between text-[10px] text-white/70">
                  <span>Downloading...</span>
                  <span className="text-emerald-400 font-mono">78% (37.6 MB)</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full transition-all duration-300" style={{ width: "78%" }} />
                </div>
              </div>
            )}
            {downloadStep === 4 && (
              <span className="text-emerald-300 font-bold flex items-center gap-1 w-full justify-between">
                <span>✓ Download Complete</span>
                <span className="bg-emerald-500 text-black px-2 py-0.5 rounded text-[10px] font-bold">Saved</span>
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 2. Swami Ratna Product Screen
// ==========================================
export const SwamiRatnaScreen = () => {
  const [activeTab, setActiveTab] = useState("darshan");

  return (
    <div className="absolute inset-0 bg-[#0a0705] text-white flex flex-col font-sans select-none overflow-hidden">
      {/* Browser Bar */}
      <div className="h-9 bg-[#140e09] border-b border-amber-900/30 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-[#1f1610] px-4 py-1 rounded-full text-[11px] text-amber-200/80 font-mono flex items-center gap-1.5 border border-amber-500/20">
          <span className="text-amber-400">🔒</span> https://swamiratna.com
        </div>
        <div className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
          ॥ श्री स्वामी समर्थ ॥
        </div>
      </div>

      {/* Hero Body */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#140e09] to-[#0a0705]">
        {/* Divine Golden Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-40 bg-amber-500/20 blur-[70px] rounded-full pointer-events-none" />

        {/* Website Header */}
        <div className="flex items-center justify-between border-b border-amber-500/15 pb-2.5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-xs font-bold text-black shadow-[0_0_12px_rgba(245,158,11,0.5)]">
              ॐ
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-amber-100 uppercase">Swami Ratna</div>
              <div className="text-[9px] text-amber-400/80">Devotional Community Portal</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px]">
            <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">Live Aarti</span>
            <span className="px-2 py-1 rounded bg-white/5 text-white/70 border border-white/10 hidden sm:inline-block">Seva Booking</span>
            <span className="px-2 py-1 rounded bg-white/5 text-white/70 border border-white/10 hidden sm:inline-block">Audio & Bhajan</span>
          </div>
        </div>

        {/* Center Live Darshan & Community Card */}
        <div className="relative z-10 my-2 max-w-md mx-auto w-full">
          <div className="bg-[#17100b]/90 border border-amber-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-md relative overflow-hidden">
            {/* Live Indicator Badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-[10px] font-bold">
                <Radio className="w-3 h-3 animate-pulse" /> LIVE BROADCAST
              </div>
              <span className="text-[10px] text-amber-400/80 font-mono">1,840 Devotees Online</span>
            </div>

            {/* Sacred Banner Preview */}
            <div className="h-28 rounded-xl bg-gradient-to-r from-amber-900/60 via-orange-950/80 to-amber-950/60 border border-amber-500/20 flex flex-col items-center justify-center text-center p-3 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
              <Flame className="w-7 h-7 text-amber-400 mb-1 animate-bounce" />
              <div className="text-sm font-bold text-amber-100 tracking-wide">
                अशक्य ही शक्य करतील स्वामी
              </div>
              <div className="text-[10px] text-amber-300/70 mt-0.5">
                Daily Sandhya Aarti & Virtual Darshan
              </div>
            </div>

            {/* Live Audio & Interaction Bar */}
            <div className="mt-3 flex items-center justify-between bg-black/40 px-3 py-2 rounded-xl border border-white/5">
              <div className="flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div className="text-[10px] text-white/80 font-medium">Swami Aarti Audio</div>
                {/* Audio Waveform Animation */}
                <div className="flex items-center gap-0.5 h-3">
                  {[40, 80, 50, 100, 60, 90, 45].map((h, idx) => (
                    <motion.div
                      key={idx}
                      animate={{ height: ["30%", `${h}%`, "30%"] }}
                      transition={{ duration: 1, repeat: Infinity, delay: idx * 0.15 }}
                      className="w-1 bg-amber-400 rounded-full"
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                <Heart className="w-3 h-3 fill-rose-400 text-rose-400" /> 842 Blessings
              </div>
            </div>
          </div>
        </div>

        {/* Quick Footer Action Pills */}
        <div className="flex items-center justify-between text-[11px] text-white/60 relative z-10 pt-2 border-t border-amber-500/15">
          <span>Daily Darshan • 06:00 AM - 09:30 PM</span>
          <span className="text-amber-400 font-semibold hover:underline cursor-pointer flex items-center gap-1">
            Book Online Seva <ExternalLink className="w-3 h-3" />
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
// 4. VVK Smart Tech Product Screen (IoT Dashboard)
// ==========================================
export const VVKSmartTechScreen = () => {
  const [hvacOn, setHvacOn] = useState(true);
  const [lightsOn, setLightsOn] = useState(true);

  return (
    <div className="absolute inset-0 bg-[#060a10] text-white flex flex-col font-sans select-none overflow-hidden">
      {/* Browser Bar */}
      <div className="h-9 bg-[#0c121c] border-b border-cyan-900/30 px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-[#141d2c] px-4 py-1 rounded-full text-[11px] text-cyan-200/80 font-mono flex items-center gap-1.5 border border-cyan-500/20">
          <span className="text-cyan-400">🔒</span> https://www.vvksmarttech.com
        </div>
        <div className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
          Smart IoT Platform
        </div>
      </div>

      {/* Main Hero / Dashboard */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#0c121c] to-[#060a10]">
        {/* Cyan Ambient Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-36 bg-cyan-500/15 blur-[70px] rounded-full pointer-events-none" />

        {/* Website Header */}
        <div className="flex items-center justify-between border-b border-cyan-500/15 pb-2.5 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider text-cyan-100">VVK SMART TECH</div>
              <div className="text-[9px] text-cyan-400/80">Intelligent Automation Systems</div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-mono">
            <Wifi className="w-3 h-3 animate-pulse" /> 64 Nodes Online
          </div>
        </div>

        {/* Live IoT Telemetry Grid (How it works) */}
        <div className="relative z-10 my-2 max-w-md mx-auto w-full space-y-2.5">
          {/* Telemetry Metric Cards */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#0f1724]/90 border border-cyan-500/20 rounded-xl p-2.5 text-center">
              <div className="text-[9px] text-white/50 uppercase tracking-wider">Power Grid</div>
              <div className="text-sm font-bold text-cyan-300 font-mono mt-0.5">234 V</div>
              <div className="text-[9px] text-emerald-400">Stable 50Hz</div>
            </div>

            <div className="bg-[#0f1724]/90 border border-cyan-500/20 rounded-xl p-2.5 text-center">
              <div className="text-[9px] text-white/50 uppercase tracking-wider">Ambient Temp</div>
              <div className="text-sm font-bold text-amber-300 font-mono mt-0.5">22.4°C</div>
              <div className="text-[9px] text-white/40">HVAC Active</div>
            </div>

            <div className="bg-[#0f1724]/90 border border-cyan-500/20 rounded-xl p-2.5 text-center">
              <div className="text-[9px] text-white/50 uppercase tracking-wider">Perimeter</div>
              <div className="text-sm font-bold text-emerald-300 font-mono mt-0.5">ARMED</div>
              <div className="text-[9px] text-emerald-400">0 Alerts</div>
            </div>
          </div>

          {/* Interactive Device Switches */}
          <div className="bg-[#0e1622]/90 border border-white/10 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Zap className={`w-4 h-4 ${hvacOn ? "text-cyan-400" : "text-white/40"}`} />
              <div>
                <div className="text-xs font-semibold text-white">Smart Building HVAC</div>
                <div className="text-[10px] text-white/50">Auto temperature regulation</div>
              </div>
            </div>

            <button 
              onClick={() => setHvacOn(!hvacOn)}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${
                hvacOn ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "bg-white/10 text-white/60"
              }`}
            >
              {hvacOn ? "RUNNING" : "STANDBY"}
            </button>
          </div>

          <div className="bg-[#0e1622]/90 border border-white/10 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Activity className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-xs font-semibold text-white">Real-time Telemetry Stream</div>
                <div className="text-[10px] text-emerald-400/80 font-mono">12ms ultra-low latency</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[30, 70, 45, 90, 60, 100, 40].map((val, idx) => (
                <div key={idx} className="w-1 bg-cyan-400/60 rounded-full" style={{ height: `${val / 5}px` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[11px] text-white/60 relative z-10 pt-2 border-t border-cyan-500/15">
          <span>Smart Tech & Automation Services</span>
          <span className="text-cyan-400 font-semibold hover:underline cursor-pointer flex items-center gap-1">
            Explore IoT Solutions <ExternalLink className="w-3 h-3" />
          </span>
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
