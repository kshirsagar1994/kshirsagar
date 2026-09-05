"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    lenis?.scrollTo(target);
  };

  return (
    <footer className="w-full bg-black border-t border-white/10 pt-20 pb-10 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="flex flex-col pr-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-4">
              KSHIRSAGAR
            </Link>
            <p className="text-white/60 mb-6">
              We build technology that moves businesses forward. Web, mobile, AI, cloud, and business software solutions.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-white/60">
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-accent transition-colors cursor-pointer">Web Development</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-accent transition-colors cursor-pointer">Mobile Applications</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-accent transition-colors cursor-pointer">Desktop Applications</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-accent transition-colors cursor-pointer">Digital Marketing</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-accent transition-colors cursor-pointer">Business Softwares</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-white/60">
              <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-accent transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#work" onClick={(e) => handleScroll(e, '#work')} className="hover:text-accent transition-colors cursor-pointer">Selected Work</a></li>
              <li><a href="#process" onClick={(e) => handleScroll(e, '#process')} className="hover:text-accent transition-colors cursor-pointer">Our Process</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-accent transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-6">Connect</h4>
            <ul className="flex flex-col gap-4 text-white/60">
              <li>
                <a href="mailto:ajaykshirsagar1208@gmail.com" className="hover:text-accent transition-colors">
                  ajaykshirsagar1208@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919595749597" className="hover:text-accent transition-colors">
                  +91-9595749597
                </a>
              </li>
              <li>Solapur, MH, India</li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© {currentYear} Kshirsagar Technology. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
