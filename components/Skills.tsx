"use client";

const skillGroups = [
  {
    category: "Languages",
    color: "indigo",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C", "C++", "SQL"],
  },
  {
    category: "AI & Machine Learning",
    color: "violet",
    skills: ["Google Gemini", "GitHub Copilot", "RAG Pipelines", "ChromaDB", "LLM Integration", "KMeans", "DBSCAN", "Vector DBs", "Prompt Engineering"],
  },
  {
    category: "Frontend",
    color: "sky",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML/CSS", "Power Pages"],
  },
  {
    category: "Backend & APIs",
    color: "emerald",
    skills: ["FastAPI", "Node.js", "Express.js", "Django", "REST APIs", "OpenAPI", "Headless Commerce"],
  },
  {
    category: "Cloud & DevOps",
    color: "amber",
    skills: ["AWS EC2", "AWS Lambda", "AWS SQS", "Azure DevOps", "Docker", "Docker Compose", "GitHub Actions", "CI/CD", "Vercel"],
  },
  {
    category: "Databases",
    color: "rose",
    skills: ["SQL Server", "PostgreSQL", "ChromaDB", "MongoDB"],
  },
  {
    category: "Enterprise & Platforms",
    color: "purple",
    skills: ["Dynamics 365", "D365 Commerce", "D365 F&O", "Power Platform", "Power Apps", "Power Pages"],
  },
  {
    category: "CS Fundamentals",
    color: "teal",
    skills: ["Data Structures", "Algorithms", "SOLID Principles", "MVC", "Design Patterns", "Concurrency", "Memory Mgmt", "OWASP", "Linux"],
  },
];

type ColorKey = "indigo" | "violet" | "sky" | "emerald" | "amber" | "rose" | "purple" | "teal";

const colorMap: Record<ColorKey, { bg: string; border: string; text: string; heading: string }> = {
  indigo:  { bg: "rgba(99,102,241,0.09)",  border: "rgba(99,102,241,0.22)",  text: "#a5b4fc", heading: "#818cf8" },
  violet:  { bg: "rgba(139,92,246,0.09)",  border: "rgba(139,92,246,0.22)",  text: "#c4b5fd", heading: "#a78bfa" },
  sky:     { bg: "rgba(14,165,233,0.09)",  border: "rgba(14,165,233,0.22)",  text: "#7dd3fc", heading: "#38bdf8" },
  emerald: { bg: "rgba(16,185,129,0.09)",  border: "rgba(16,185,129,0.22)",  text: "#6ee7b7", heading: "#34d399" },
  amber:   { bg: "rgba(245,158,11,0.09)",  border: "rgba(245,158,11,0.22)",  text: "#fcd34d", heading: "#fbbf24" },
  rose:    { bg: "rgba(244,63,94,0.09)",   border: "rgba(244,63,94,0.22)",   text: "#fda4af", heading: "#fb7185" },
  purple:  { bg: "rgba(168,85,247,0.09)",  border: "rgba(168,85,247,0.22)",  text: "#d8b4fe", heading: "#c084fc" },
  teal:    { bg: "rgba(20,184,166,0.09)",  border: "rgba(20,184,166,0.22)",  text: "#5eead4", heading: "#2dd4bf" },
};

const proficiency = [
  { label: "Java / Python & AI/ML",     level: 92 },
  { label: "TypeScript / React",        level: 88 },
  { label: "REST API & Backend",        level: 90 },
  { label: "Cloud (AWS, Azure)",        level: 82 },
  { label: "D365 & Power Platform",     level: 85 },
  { label: "CI/CD & DevOps",            level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="section-shell">

        {/* Header */}
        <div className="section-header">
          <p className="section-kicker">
            Technical Arsenal
          </p>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="section-divider max-w-[200px] mx-auto" />
        </div>

        <div className="skills-stack">
          {/* Skill groups grid */}
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const c = colorMap[group.color as ColorKey];
              return (
                <article key={group.category} className="card card-pad skill-card">
                  <h3
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: c.heading }}
                  >
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block max-w-full px-2.5 py-1 text-[11px] rounded-lg font-medium leading-snug transition-all duration-200 cursor-default hover:opacity-90"
                        style={{
                          background: c.bg,
                          border: `1px solid ${c.border}`,
                          color: c.text,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Proficiency bars */}
          <div className="card card-pad proficiency-card">
            <h3 className="text-base sm:text-lg font-bold text-white mb-8 text-center">Core Proficiency</h3>
            <div className="proficiency-grid">
              {proficiency.map((item) => (
                <div key={item.label} className="proficiency-item">
                  <div className="flex justify-between gap-3 text-xs sm:text-sm mb-2">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="text-indigo-400 font-semibold">{item.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
