"use client";

import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";

const education = [
  {
    degree: "Master of Science – Software Engineering",
    school: "Arizona State University",
    location: "Tempe, Arizona, USA",
    period: "Aug 2025 – Jun 2027",
    gpa: "4.0 / 4.0",
    icon: "🌵",
    color: "from-amber-500 to-orange-500",
    highlights: [
      "Coursework: SE + AI (SER 594), Software Agility (SER 515/516), Data Mining (CSE 572)",
      "Built an AI Travel Planning Platform using RAG pipelines, FastAPI, and Google Gemini",
      "Volunteer at International Students and Scholars Center – ASU",
      "Attended the ASU AI Summit in collaboration with the Consulate General of India, LA",
    ],
    activities: ["AI Research", "Agile Engineering", "International Student Volunteer", "Event Volunteer"],
  },
  {
    degree: "Bachelor of Engineering – Electronics & Communication",
    school: "Easwari Engineering College (SRM Group) – Anna University",
    location: "Chennai, Tamil Nadu, India",
    period: "Aug 2018 – Apr 2022",
    gpa: "8.5 / 10 — First Class with Distinction",
    icon: "🎓",
    color: "from-indigo-500 to-violet-500",
    highlights: [
      "Graduated First Class with Distinction in Electronics and Communication Engineering",
      "Quarter-finalist in India Innovation Challenge Design Contest by Texas Instruments (2020)",
      "Head of Operations at Campus Life — organised events for 5,000+ attendees",
      "Strong foundation in hardware, software systems, and data structures",
    ],
    activities: ["Head of Operations", "Cultural Event Lead", "TI Design Contest Finalist", "Technical Projects"],
  },
];

export default function Education() {
  return (
    <section id="education" className="section-block">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/[0.04] to-transparent pointer-events-none" />

      <div className="section-shell-narrow">

        {/* Header */}
        <div className="section-header">
          <p className="section-kicker">
            Academic Background
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider max-w-[200px] mx-auto" />
        </div>

        <div className="card-stack">
          {education.map((edu, i) => (
            <div key={i} className="card">
              <div className={`h-1 bg-gradient-to-r ${edu.color} rounded-t-lg`} />
              <div className="card-pad">

                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6">
                  <div className="flex items-start gap-4 min-w-0">
                    <span className="text-3xl sm:text-4xl mt-0.5 shrink-0">{edu.icon}</span>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-xl font-bold text-white leading-snug mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-indigo-400 font-semibold text-sm mb-2">{edu.school}</p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-4 gap-y-1 text-slate-400 text-xs sm:text-sm">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {edu.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* GPA badge */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg self-start shrink-0
                                  bg-amber-500/10 border border-amber-500/20">
                    <Star size={13} className="text-amber-400 fill-amber-400" />
                    <div>
                      <p className="text-[10px] text-slate-400">GPA</p>
                      <p className="text-xs sm:text-sm font-bold text-amber-400 leading-tight">{edu.gpa}</p>
                    </div>
                  </div>
                </div>

                {/* Details grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-300 mb-2.5 flex items-center gap-1.5">
                      <GraduationCap size={13} className="text-indigo-400" /> Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-slate-400 text-xs sm:text-sm leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-300 mb-2.5">
                      Activities & Involvement
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.activities.map((act) => (
                        <span key={act} className="chip">{act}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
