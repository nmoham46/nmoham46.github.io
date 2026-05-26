"use client";

import { Brain, Code2, Cloud, Award } from "lucide-react";

const highlights = [
  {
    icon: <Brain size={22} className="text-indigo-400" />,
    title: "AI Engineering",
    desc: "Built AI-powered code review tools, RAG pipelines, and LLM-integrated apps with ChromaDB & Google Gemini.",
  },
  {
    icon: <Code2 size={22} className="text-violet-400" />,
    title: "Full-Stack Dev",
    desc: "3+ years crafting production-grade apps using React, Next.js, TypeScript, Python, FastAPI, and Django.",
  },
  {
    icon: <Cloud size={22} className="text-indigo-400" />,
    title: "Cloud & DevOps",
    desc: "Hands-on with AWS (EC2, Lambda, SQS), Azure, Docker, GitHub Actions, and CI/CD pipelines.",
  },
  {
    icon: <Award size={22} className="text-violet-400" />,
    title: "Recognized Excellence",
    desc: "Sparkling Star Award winner at Accenture for 3 consecutive years across AI, mentoring, and delivery.",
  },
];

const stats = [
  { value: "3+",  label: "Years at Accenture" },
  { value: "4.0", label: "GPA at ASU" },
  { value: "10+", label: "Microsoft Certs" },
  { value: "3×",  label: "Sparkling Star" },
];

export default function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-shell">

        {/* Section header */}
        <div className="section-header">
          <p className="section-kicker">
            About Me
          </p>
          <h2 className="section-title">
            Building the Future with{" "}
            <span className="gradient-text">Code & AI</span>
          </h2>
          <div className="section-divider max-w-[200px] mx-auto" />
        </div>

        <div className="about-stack">
          {/* Main grid */}
          <div className="about-main">

            {/* Text */}
            <div className="about-copy">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I&apos;m a{" "}
                <span className="text-indigo-400 font-semibold">results-driven Software Engineer</span>{" "}
                with nearly 3 years of industry experience at{" "}
                <span className="text-white font-semibold">Accenture</span>, where I architected
                AI-powered tools, engineered headless commerce APIs, and led cross-functional delivery teams.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Currently pursuing my{" "}
                <span className="text-white font-semibold">Master&apos;s in Software Engineering</span>{" "}
                at Arizona State University with a perfect 4.0 GPA — deepening expertise in AI systems,
                distributed architecture, and scalable software design.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                My work spans building RAG pipelines and LLM integrations to optimising SQL Server
                databases handling millions of transactions. Passionate about using AI as a practical
                engineering tool to solve real problems at scale.
              </p>

              <div className="about-tags">
                {["ASU Tempe, AZ", "Open to Internships", "Full-time 2027"].map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>

            {/* Cards */}
            <div className="about-highlights">
              {highlights.map((item) => (
                <div key={item.title} className="card card-pad about-highlight-card">
                  <div className="mb-3 w-11 h-11 rounded-lg bg-white/[0.04] flex items-center justify-center border border-white/[0.08]">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="card text-center card-pad about-stat-card">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
