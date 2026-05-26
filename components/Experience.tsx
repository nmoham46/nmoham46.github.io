"use client";

import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Teaching Assistant — SER 316: Software Enterprise: Construction & Transition",
    company: "Arizona State University",
    location: "Remote",
    period: "May 2026 – Present",
    type: "Part-time",
    accent: "#f59e0b",
    highlights: [
      "Assist students in understanding software engineering best practices in enterprise-scale development environments.",
      "Support coursework covering Agile/Scrum workflows, Git/GitHub collaboration, continuous integration, unit testing, refactoring, and design patterns.",
      "Guide student teams through software construction, testing, deployment activities, debugging support, and technical mentorship.",
      "Help facilitate Slack discussions, office hours, grading, feedback, and course engagement in a collaborative learning environment.",
    ],
    tags: ["Assistant Teaching", "Agile Methodologies", "Git/GitHub", "CI/CD", "Unit Testing", "Design Patterns", "Refactoring", "Mentorship"],
  },
  {
    role: "Application Development Analyst",
    company: "Accenture",
    location: "Dublin, Ireland",
    period: "Mar 2025 – Aug 2025",
    type: "Full-time",
    accent: "#6366f1",
    highlights: [
      "Architected an AI-powered code review tool using GitHub Copilot — reduced code errors 30%, improved developer productivity 25%.",
      "Built a Power Pages website for internal activity management supporting 100+ users, integrated with D365 F&O via Virtual Entity.",
      "Engineered a headless commerce API improving back-end flexibility, accelerating project timelines by 20%.",
      "Acted as Team Representative, owning full project streams from requirements to delivery while mentoring 10+ junior developers.",
    ],
    tags: ["GitHub Copilot", "AI Tools", "Power Pages", "D365", "Headless Commerce", "Mentorship"],
  },
  {
    role: "Application Development Associate",
    company: "Accenture",
    location: "Dublin, Ireland",
    period: "Sep 2022 – Mar 2025",
    type: "Full-time",
    accent: "#8b5cf6",
    highlights: [
      "Spearheaded end-to-end development of a large-scale e-commerce platform, meeting 100% of critical deadlines within 6 months.",
      "Managed and optimised a high-traffic SQL Server database, eliminating concurrency bottlenecks and maintaining 99.9% uptime.",
      "Implemented core backend business logic and data processing pipelines, driving a 15% increase in system efficiency.",
      "Developed back-end solutions using D365 Commerce with strict adherence to SOLID principles and MVC architecture.",
    ],
    tags: ["SQL Server", "D365 Commerce", "Backend", "SOLID", "MVC", "E-Commerce"],
  },
  {
    role: "Project Trainee",
    company: "Zoho",
    location: "Chennai, India",
    period: "Jan 2022 – Apr 2022",
    type: "Internship",
    accent: "#10b981",
    highlights: [
      "Integrated REST APIs using ExpressJS, enhancing secure data exchange across distributed client-server modules.",
      "Applied OWASP security principles and OOP design patterns to mitigate runtime vulnerabilities.",
      "Enforced strict separation of concerns and explored modern design patterns in a professional setting.",
    ],
    tags: ["ExpressJS", "REST APIs", "OWASP", "Node.js", "Security"],
  },
  {
    role: "Head of Operations",
    company: "Campus Life – SRM Easwari Engineering College",
    location: "Chennai, India",
    period: "Jun 2020 – Apr 2022",
    type: "Leadership",
    accent: "#f43f5e",
    highlights: [
      "Led planning and execution of a flagship 2-day cultural event for 5,000+ attendees, generating $10,000 in revenue.",
      "Orchestrated cross-functional teams of 15+ members across Marketing, Sponsorship, and Creative.",
      "Grew the official Instagram page from 1,000 to 5,000 followers (400% increase) in 6 months.",
      "Secured 5+ key event sponsorships through targeted proposals and professional negotiations.",
    ],
    tags: ["Event Management", "Team Leadership", "Marketing", "Sponsorships"],
  },
  {
    role: "Market Research Intern",
    company: "Draup",
    location: "Remote (The Woodlands, TX)",
    period: "Sep 2021 – Dec 2021",
    type: "Internship",
    accent: "#0ea5e9",
    highlights: [
      "Conducted market research and competitive analysis for enterprise clients.",
      "Analysed talent and technology trends to generate actionable insights for business strategy.",
    ],
    tags: ["Market Research", "Data Analysis", "Business Intelligence"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="section-shell-narrow">

        {/* Header */}
        <div className="section-header">
          <p className="section-kicker">
            Career Journey
          </p>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider max-w-[200px] mx-auto" />
        </div>

        {/* Cards */}
        <div className="card-stack">
          {experiences.map((exp, i) => (
            <div key={i} className="card flex">
              {/* Left colour stripe */}
              <div
                className="w-1 shrink-0 rounded-l-lg"
                style={{ background: exp.accent }}
              />

              {/* Content */}
              <div className="flex-1 min-w-0 card-pad">

                {/* Type badge */}
                <span
                  className="card-label-pill mb-4"
                  style={{ background: exp.accent }}
                >
                  {exp.type}
                </span>

                {/* Title + meta row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-y-3 gap-x-6 mb-5">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug max-w-2xl">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: exp.accent }}>
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5 shrink-0 sm:items-end sm:text-right">
                    <span className="flex items-center gap-1 text-slate-400 text-xs sm:whitespace-nowrap">
                      <Calendar size={11} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs sm:justify-end sm:whitespace-nowrap">
                      <MapPin size={11} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      <span
                        className="mt-[6px] w-1 h-1 rounded-full shrink-0"
                        style={{ background: exp.accent }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
