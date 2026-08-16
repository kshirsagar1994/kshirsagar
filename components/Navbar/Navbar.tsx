"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/") {
      e.preventDefault();
      lenis?.scrollTo(0);
      setMobileMenuOpen(false);
    } else if (href.startsWith("/#")) {
      e.preventDefault();
      const target = href.replace("/", ""); // becomes "#services"
      lenis?.scrollTo(target);
      setMobileMenuOpen(false);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#work" },
    { name: "Process", href: "/#process" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-16" : "h-24"
            }`}
          >
            {/* Logo */}
            <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="text-xl font-bold tracking-widest text-white">
              KSHIRSAGAR
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Contact CTA */}
            <div className="hidden md:block">
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="group flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
              >
                Contacts
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-[60] bg-black flex flex-col justify-center px-6"
        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          clipPath: mobileMenuOpen ? "circle(150% at 100% 0)" : "circle(0% at 100% 0)",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close mobile menu"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: mobileMenuOpen ? 0.2 + i * 0.1 : 0 }}
            >
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-4xl font-bold tracking-tight text-white hover:text-accent transition-colors block"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: mobileMenuOpen ? 0.2 + navLinks.length * 0.1 : 0 }}
            className="pt-8 border-t border-white/10 mt-4"
          >
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="text-2xl font-medium text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              Contacts <ArrowUpRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
