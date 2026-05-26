"use client";

import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

const projects = [
  {
    title: "AI Travel Planning Platform",
    desc: "Designed and deployed a full-stack AI travel planner using React, FastAPI, PostgreSQL, ChromaDB, and Google Gemini. Implemented RAG pipelines with ChromaDB vector storage for live knowledge ingestion and AI-driven itinerary generation. Built within a 5-engineer Agile team with CI/CD, Docker, and AWS deployment.",
    tags: ["React", "FastAPI", "PostgreSQL", "ChromaDB", "Google Gemini", "RAG", "Docker", "AWS"],
    category: "AI Engineering",
    categoryColor: "from-indigo-500 to-violet-500",
    github: "https://github.com/nmoham46/SER594-Team2-WayPoint",
    featured: true,
    org: "Arizona State University",
    period: "Apr – May 2026",
  },
  {
    title: "Customer Segmentation with ML",
    desc: "Customer segmentation using RFM and behavioural features with KMeans, Hierarchical, and DBSCAN clustering. Includes a full data mining pipeline, evaluation metrics, and an ACM-style research report.",
    tags: ["Python", "Jupyter", "KMeans", "DBSCAN", "Hierarchical Clustering", "RFM", "Data Mining"],
    category: "ML / Data Science",
    categoryColor: "from-emerald-500 to-teal-500",
    github: "https://github.com/nmoham46/CSE572-Group-20-Customer_segmantation",
    featured: true,
    org: "ASU – CSE 572",
    period: "2025",
  },
  {
    title: "SleekBoard",
    desc: "Collaborative project management web app built for SER 515 coursework. Applies SOLID, clean architecture, and agile methodologies.",
    tags: ["JavaScript", "SOLID Principles", "Agile", "Software Engineering"],
    category: "Web App",
    categoryColor: "from-sky-500 to-blue-500",
    github: "https://github.com/nmoham46/SleekBoard",
    featured: false,
    org: "ASU – SER 515",
    period: "2025",
  },
  {
    title: "WayPoint – AI Navigation",
    desc: "AI and data-driven wayfinding application developed in SER 594. Leverages data modelling and AI techniques for intelligent routing.",
    tags: ["Python", "AI/ML", "Data Engineering"],
    category: "AI Engineering",
    categoryColor: "from-indigo-500 to-violet-500",
    github: "https://github.com/nmoham46/SER594-Team2-WayPoint",
    featured: false,
    org: "ASU – SER 594",
    period: "2025",
  },
  {
    title: "Multivendor Django E-Commerce",
    desc: "Full-featured multivendor e-commerce platform in Django — multiple vendors, cart, orders, and payments with MVC architecture.",
    tags: ["Python", "Django", "REST API", "MVC", "SQL"],
    category: "Full-Stack",
    categoryColor: "from-violet-500 to-purple-500",
    github: "https://github.com/Heynafeezhere/MVDjangoEcom",
    featured: false,
    org: "Personal",
    period: "2024",
  },
  {
    title: "Email Generator",
    desc: "Python tool that automates email drafting with dynamic content injection via templates, reducing manual drafting time.",
    tags: ["Python", "Automation", "Templates"],
    category: "Automation",
    categoryColor: "from-amber-500 to-orange-500",
    github: "https://github.com/Heynafeezhere/EmailGenearator",
    featured: false,
    org: "Personal",
    period: "2025",
  },
  {
    title: "React Frontend",
    desc: "Modern React app demonstrating component-based architecture, hooks, state management, and responsive UI design.",
    tags: ["React", "JavaScript", "TypeScript", "CSS"],
    category: "Frontend",
    categoryColor: "from-sky-500 to-blue-500",
    github: "https://github.com/Heynafeezhere/ReactFrontend",
    featured: false,
    org: "Personal",
    period: "2024",
  },
  {
    title: "Node.js Backend",
    desc: "RESTful Node.js backend with Express, middleware, authentication, and OWASP security practices from Zoho training.",
    tags: ["Node.js", "Express", "REST API", "Security"],
    category: "Backend",
    categoryColor: "from-green-500 to-emerald-500",
    github: "https://github.com/Heynafeezhere/NodeJs-Project",
    featured: false,
    org: "Personal",
    period: "2024",
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest     = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-block">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/[0.04] to-transparent pointer-events-none" />

      <div className="section-shell">

        {/* Header */}
        <div className="section-header">
          <p className="section-kicker">
            What I&apos;ve Built
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider max-w-[200px] mx-auto" />
        </div>

        <div className="projects-stack">
          {/* Featured cards */}
          <div className="featured-projects">
            {featured.map((project) => (
              <article
                key={project.title}
                className="card group project-card project-card-featured"
              >
                <div className={`h-1 bg-gradient-to-r ${project.categoryColor} shrink-0 rounded-t-lg`} />
                <div className="card-pad project-card-body">
                  {/* Meta row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`card-label-pill bg-gradient-to-r ${project.categoryColor}`}>
                          {project.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Star size={11} className="text-amber-400 fill-amber-400" /> Featured
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">{project.org} · {project.period}</p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="icon-button w-9 h-9 shrink-0"
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Other projects grid */}
          <div className="project-grid">
            {rest.map((project) => (
              <article
                key={project.title}
                className="card group project-card project-card-compact"
              >
                <div className={`h-0.5 bg-gradient-to-r ${project.categoryColor} shrink-0 rounded-t-lg`} />
                <div className="card-pad project-card-body">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className={`card-label-pill bg-gradient-to-r ${project.categoryColor}`}>
                      {project.category}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="icon-button w-8 h-8 shrink-0"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors mb-0.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mb-4">{project.org} · {project.period}</p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1 mb-5">{project.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="chip text-slate-500">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="projects-cta">
            <a
              href="https://github.com/Heynafeezhere"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex"
            >
              <GithubIcon size={16} />
              View All Repositories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
