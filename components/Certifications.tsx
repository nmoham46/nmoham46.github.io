"use client";

import { ShieldCheck, ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "Dynamics 365 F&O – Solution Architect Expert",
    issuer: "Microsoft", date: "Nov 2024", level: "Expert",
    color: "from-amber-500 to-orange-500", icon: "🏆",
    link: "https://learn.microsoft.com/en-us/users/nafeezahamed-5086/transcript/vjz1qhwo3lkr051",
  },
  {
    title: "Power Platform Developer Associate",
    issuer: "Microsoft", date: "Dec 2022", level: "Associate",
    color: "from-indigo-500 to-violet-500", icon: "⚡",
    link: "https://learn.microsoft.com/en-us/users/nafeezahamed-5086/transcript/vjz1qhwo3lkr051",
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft", date: "Dec 2022", level: "Fundamental",
    color: "from-sky-500 to-blue-500", icon: "☁️",
    link: "https://learn.microsoft.com/en-us/users/nafeezahamed-5086/transcript/vjz1qhwo3lkr051",
  },
  {
    title: "Security, Compliance & Identity Fundamentals",
    issuer: "Microsoft", date: "Dec 2022", level: "Fundamental",
    color: "from-emerald-500 to-teal-500", icon: "🔐",
    link: "https://learn.microsoft.com/en-us/users/nafeezahamed-5086/transcript/vjz1qhwo3lkr051",
  },
  {
    title: "Dynamics 365 Fundamentals (ERP)",
    issuer: "Microsoft", date: "Nov 2022", level: "Fundamental",
    color: "from-violet-500 to-purple-500", icon: "🏢",
    link: "https://learn.microsoft.com/en-us/users/nafeezahamed-5086/transcript/vjz1qhwo3lkr051",
  },
  {
    title: "Dynamics 365 Fundamentals (CRM)",
    issuer: "Microsoft", date: "Feb 2023", level: "Fundamental",
    color: "from-violet-500 to-purple-500", icon: "📊",
    link: "https://learn.microsoft.com/en-us/users/nafeezahamed-5086/transcript/vjz1qhwo3lkr051",
  },
  {
    title: "Power Platform Fundamentals",
    issuer: "Microsoft", date: "Nov 2022", level: "Fundamental",
    color: "from-rose-500 to-pink-500", icon: "💡",
    link: "https://learn.microsoft.com/en-us/users/nafeezahamed-5086/transcript/vjz1qhwo3lkr051",
  },
  {
    title: "Front-End Web UI Frameworks: Bootstrap",
    issuer: "Coursera", date: "Dec 2022", level: "Course",
    color: "from-sky-500 to-blue-500", icon: "🎨",
    link: "https://coursera.org/account/accomplishments/verify/EZQA235829FE",
  },
  {
    title: "Databases & SQL for Data Science with Python",
    issuer: "IBM / Coursera", date: "Sep 2021", level: "Course",
    color: "from-emerald-500 to-teal-500", icon: "🗄️",
    link: "https://coursera.org/account/accomplishments/verify/HRV8QEAZ75QT",
  },
  {
    title: "Introduction to Programming Using Python",
    issuer: "Udemy", date: "Jul 2021", level: "Course",
    color: "from-amber-500 to-yellow-500", icon: "🐍",
    link: "https://udemy.com/certificate/UC-43a9b711-86b9-46ad-9980-1dbb2fb28f44/",
  },
];

const awards = [
  {
    title: "Sparkling Star Award 2024–2025", org: "Accenture",
    desc: "Enhanced the AI-driven Code Review Tool, led Power Apps & Power Pages POC, trained junior team members in D365 Commerce, and ensured client alignment on deliverables.",
    icon: "⭐", color: "from-amber-500 to-orange-500",
  },
  {
    title: "Sparkling Star Award 2023–2024", org: "Accenture",
    desc: "Exceptional performance on the e-commerce platform — delivered quality code on time through quick learning, problem-solving, and strong comprehension of complex requirements.",
    icon: "⭐", color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Sparkling Star Award 2022–2023", org: "Accenture",
    desc: "Recognised for completing multiple Microsoft Certification exams and demonstrating commitment to continuous learning, growth, and professional development.",
    icon: "⭐", color: "from-violet-500 to-purple-500",
  },
  {
    title: "Quarter-Finalist – India Innovation Challenge Design Contest", org: "Texas Instruments",
    desc: "Advanced to the quarter-finals of a nationally competitive engineering design challenge at the undergraduate level.",
    icon: "🏅", color: "from-emerald-500 to-teal-500",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-block">
      <div className="section-shell">

        {/* Header */}
        <div className="section-header">
          <p className="section-kicker">
            Credentials
          </p>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Awards</span>
          </h2>
          <div className="section-divider max-w-[200px] mx-auto" />
        </div>

        {/* Certifications */}
        <div className="mb-10">
          <h3 className="text-base sm:text-lg font-bold text-white mb-5 flex items-center gap-2.5">
            <ShieldCheck size={19} className="text-indigo-400" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="card card-pad group">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.color} rounded-t-lg`} />
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{cert.icon}</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View certificate"
                    className="icon-button w-8 h-8 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
                <span className={`card-label-pill bg-gradient-to-r ${cert.color} mb-3`}>
                  {cert.level}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug mb-1">
                  {cert.title}
                </h4>
                <p className="text-[11px] text-slate-500">{cert.issuer} · {cert.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-bold text-white mb-5 flex items-center gap-2.5">
            <Award size={19} className="text-amber-400" />
            Honors & Awards
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {awards.map((award, i) => (
              <div key={i} className="card">
                <div className={`h-1 bg-gradient-to-r ${award.color} rounded-t-lg`} />
                <div className="card-pad flex items-start gap-4">
                  <span className="text-2xl sm:text-3xl mt-0.5 shrink-0">{award.icon}</span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">{award.title}</h4>
                    <p className="text-xs sm:text-sm text-indigo-400 font-medium mb-2">{award.org}</p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{award.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className="recommendation-spacer">
          <div className="card card-pad border-indigo-500/20">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-t-lg" />
            <div
              className="text-6xl sm:text-7xl font-serif absolute top-2 left-4 leading-none select-none"
              style={{ color: "rgba(99,102,241,0.12)" }}
            >
              &ldquo;
            </div>
            <blockquote className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-4 mt-3 relative z-10">
              Nafeez Ahamed is a highly skilled and proactive professional with strong technical expertise
              and leadership qualities. During his three years at Accenture, he excelled in complex
              development tasks, resolved critical issues efficiently, and led knowledge-sharing and R&D
              initiatives. Recognised with Sparkling Star Awards, he contributed to diversity efforts and
              internal communications. His certifications in Azure, D365, and Power Apps reflect his
              commitment to growth. He&apos;s a standout candidate for any challenging role.
            </blockquote>
            <p className="text-indigo-400 font-semibold text-sm">— Karthick Jayachandran</p>
            <p className="text-slate-500 text-xs mt-0.5">Former Manager, Accenture</p>
            <a
              href="https://www.linkedin.com/in/nafeez-ahamed/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-6 w-full sm:w-auto"
            >
              <ExternalLink size={15} />
              View LinkedIn Recommendation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
