"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Download, FolderGit2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const roles = ["Software Engineer", "Full-Stack Developer"];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let rafId: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = roles[roleIndex];
      if (roleRef.current) {
        if (!isDeleting) {
          roleRef.current.textContent = current.slice(0, charIndex + 1);
          charIndex++;
          if (charIndex === current.length) {
            isDeleting = true;
            rafId = setTimeout(type, 2000);
            return;
          }
        } else {
          roleRef.current.textContent = current.slice(0, charIndex - 1);
          charIndex--;
          if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
          }
        }
      }
      rafId = setTimeout(type, isDeleting ? 55 : 85);
    };

    rafId = setTimeout(type, 600);
    return () => clearTimeout(rafId);
  }, []);

  const socials = [
    { href: "https://github.com/Heynafeezhere", icon: <GithubIcon size={18} />, label: "Personal GitHub" },
    { href: "https://github.com/nmoham46",       icon: <GithubIcon size={18} />, label: "ASU GitHub" },
    { href: "https://www.linkedin.com/in/nafeez-ahamed/", icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
    { href: "mailto:nmoham46@asu.edu",            icon: <Mail size={18} />,        label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center grid-bg overflow-hidden"
    >
      <div className="section-shell pt-24 pb-20
                      flex flex-col items-center gap-12
                      lg:flex-row lg:items-center lg:gap-14 lg:justify-between">

        {/* ── Text ── */}
        <div className="flex-1 w-full max-w-xl text-center lg:text-left mx-auto lg:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          bg-indigo-500/10 border border-indigo-500/20 text-indigo-400
                          text-xs sm:text-sm font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to new opportunities
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 leading-[1.1]">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Nafeez</span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center justify-center lg:justify-start gap-1 mb-5 min-h-9 sm:min-h-10">
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300" ref={roleRef} />
            <span className="text-xl sm:text-2xl text-indigo-400 animate-pulse font-light">|</span>
          </div>

          {/* Bio */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0">
            Software Engineer with{" "}
            <span className="text-indigo-400 font-semibold">3+ years</span> at Accenture.
            Pursuing{" "}
            <span className="text-indigo-400 font-semibold">MS Software Engineering</span> at
            Arizona State University with a 4.0 GPA. Building AI-powered solutions,
            scalable APIs, and full-stack applications.
          </p>

          {/* Hero actions */}
          <div className="hero-actions">
            <div className="top-buttons">
              <a href="#projects" className="btn-primary">
                <FolderGit2 size={15} />
                View My Work
              </a>
              <a
                href="/assets/resume.pdf"
                download="Nafeez_Ahamed_Resume.pdf"
                className="btn-outline"
              >
                <Download size={15} />
                Resume
              </a>
            </div>

            <div className="social-links">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="icon-button"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Photo ── */}
        <div className="w-full flex-shrink-0 lg:w-auto float-animation">
          <div className="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full glow-pulse pointer-events-none" />

            {/* Gradient border */}
            <div className="absolute inset-1.5 rounded-full p-[3px]
                            bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0f]">
                <Image
                  src="/assets/profile.png"
                  alt="Nafeez Ahamed Mohamed"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-top photo-dark"
                  priority
                />
              </div>
            </div>

            {/* Badge – ASU */}
            <div className="hero-metric-badge absolute bottom-0 left-0 sm:-bottom-5 sm:-left-5">
              <p>Currently at</p>
              <p>ASU | GPA 4.0</p>
            </div>

            {/* Badge – experience */}
            <div className="hero-metric-badge absolute top-0 right-0 sm:-top-5 sm:-right-5">
              <p>Experience</p>
              <p>3+ Years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="hidden md:flex md:flex-col absolute bottom-6 left-1/2 -translate-x-1/2
                   items-center gap-1.5 text-slate-500
                   hover:text-indigo-400 transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
