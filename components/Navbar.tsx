"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",          href: "#about" },
  { label: "Experience",     href: "#experience" },
  { label: "Projects",       href: "#projects" },
  { label: "Skills",         href: "#skills" },
  { label: "Education",      href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on resize ≥ lg */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 nav-blur ${
        scrolled
          ? "bg-[#0a0a0f]/85 border-b border-white/[0.06] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="section-shell flex items-center justify-between h-14 sm:h-16">
        {/* Logo */}
        <a href="#" className="text-base sm:text-lg font-bold gradient-text tracking-tight shrink-0">
          Nafeez Ahamed
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="btn-primary !hidden lg:!inline-flex min-h-0 h-9 px-4 text-sm shrink-0"
        >
          <Mail size={14} />
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="icon-button h-9 w-9 lg:!hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d0d1a]/97 border-t border-white/[0.06]">
          <div className="section-shell py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2.5 px-3 rounded-lg text-slate-300 hover:text-indigo-400
                         hover:bg-indigo-500/10 transition-all text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-3 w-full"
            onClick={() => setMobileOpen(false)}
          >
            <Mail size={14} />
            Hire Me
          </a>
          </div>
        </div>
      )}
    </nav>
  );
}
