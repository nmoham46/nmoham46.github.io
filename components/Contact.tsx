"use client";

import { Mail, MapPin, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    void navigator.clipboard.writeText("nmoham46@asu.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      href: "https://www.linkedin.com/in/nafeez-ahamed/",
      icon: <LinkedinIcon size={17} />,
      label: "LinkedIn",
      sub: "linkedin.com/in/nafeez-ahamed",
      hover: "hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10",
    },
    {
      href: "https://github.com/Heynafeezhere",
      icon: <GithubIcon size={17} />,
      label: "Personal GitHub",
      sub: "Heynafeezhere",
      hover: "hover:text-white hover:border-white/30 hover:bg-white/10",
    },
    {
      href: "https://github.com/nmoham46",
      icon: <GithubIcon size={17} />,
      label: "ASU GitHub",
      sub: "nmoham46",
      hover: "hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10",
    },
  ];

  return (
    <section id="contact" className="section-block">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/[0.04] to-transparent pointer-events-none" />

      <div className="section-shell">

        {/* Header */}
        <div className="section-header">
          <p className="section-kicker">
            Get in Touch
          </p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Open to internships and full-time opportunities starting 2027.
            Whether you have a project in mind or just want to talk tech — my inbox is open.
          </p>
          <div className="section-divider max-w-[200px] mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-12 items-start">

          {/* ── Info panel ── */}
          <div className="card-stack">
            <div className="card card-pad">
              <h3 className="text-base font-bold text-white mb-6">Contact Information</h3>

              <div className="grid gap-6">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0
                                  bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-slate-500 mb-1">Email</p>
                    <p className="text-slate-200 text-sm font-medium truncate">nmoham46@asu.edu</p>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="icon-button w-9 h-9 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                    aria-label="Copy email"
                  >
                    {copied
                      ? <Check size={14} className="text-green-400" />
                      : <Copy size={14} />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0
                                  bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 mb-1">Location</p>
                    <p className="text-slate-200 text-sm font-medium">Tempe, Arizona, USA</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-10 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <p className="text-xs font-semibold text-slate-400 mb-5">Social</p>
                <div className="grid gap-4">
                  {socials.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg border border-white/[0.07]
                                  bg-white/[0.02] text-slate-400 transition-all duration-200 ${s.hover}`}
                    >
                      {s.icon}
                      <div className="min-w-0">
                        <p className="text-xs font-semibold leading-none mb-0.5">{s.label}</p>
                        <p className="text-[11px] text-slate-500 truncate">{s.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability chip */}
            <div className="card card-pad border-indigo-500/20" style={{ borderColor: "rgba(99,102,241,0.2)", background: "rgba(99,102,241,0.05)" }}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs sm:text-sm font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Open to Summer 2026 internships and full-time roles from mid-2027.
                Interested in AI/ML Engineering, Full-Stack, and Cloud Architecture.
              </p>
            </div>
          </div>

          {/* ── Form panel ── */}
          <div className="card card-pad">
            <h3 className="text-base font-bold text-white mb-6">Send a Message</h3>
            <form action="mailto:nmoham46@asu.edu" method="get" className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-3 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="field-control"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-3 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="field-control"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-3 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className="field-control"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-3 font-medium">Message</label>
                <textarea
                  name="body"
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                  className="field-control resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Mail size={15} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
