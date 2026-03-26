"use client";

import { useInView } from "@/hooks/use-in-view";
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    name: "Meta Back-End Developer Certificate",
    issuer: "Meta",
    platform: "Coursera",
    issued: "Jul 2023",
    credentialId: "NG6UGGNL359X",
    link: "https://www.credly.com/badges/5030f6cb-7cfe-486c-ae2e-92ae07731b36/linked_in_profile",
    description:
      "Professional certificate covering back-end development fundamentals: Python, Django REST framework, database design, version control, cloud deployment, and full-stack integration with React.",
    skills: ["Python", "Django", "REST APIs", "MySQL", "Git", "Cloud Deployment"],
    accentColor: "#0082FB",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    platform: "Skilljar",
    issued: "Aug 2025",
    credentialId: "yxnupjazhbpa",
    link: "https://verify.skilljar.com/c/yxnupjazhbpa",
    description:
      "Covers MCP architecture and its three core primitives — tools, resources, and prompts — for building servers and clients that connect Claude with external services using the Python SDK.",
    skills: ["MCP", "Python SDK", "Tools", "Resources", "Prompts", "Claude API"],
    accentColor: "#C8956C",
  },
];

export function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section className="py-16 border-t border-black/6">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className={`flex items-center gap-4 mb-12 reveal ${inView ? "visible" : ""}`} ref={ref}>
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#C8956C] tracking-[0.3em] uppercase">05</span>
          <div className="w-6 h-px bg-[#C8956C]/40" />
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.3em] uppercase">Certifications</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-[#F0EBE3] border border-black/5 rounded-sm overflow-hidden hover:border-black/10 hover:shadow-sm transition-all duration-400 flex flex-col reveal ${inView ? "visible" : ""}`}
              style={{ transitionDelay: `${100 + i * 120}ms` }}
            >
              {/* Top accent line */}
              <div
                className="h-[3px] w-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                style={{ background: cert.accentColor }}
              />

              <div className="p-7 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.2em] uppercase">
                        {cert.issuer}
                      </span>
                      <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890]">·</span>
                      <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890]">
                        {cert.issued}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] font-black text-xl text-[#1C1A17] tracking-tight leading-snug">
                      {cert.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A09890] group-hover:text-[#C8956C] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>

                {/* Description */}
                <p className="font-[family-name:var(--font-syne)] text-sm text-[#6B6560] leading-[1.75] mb-5 flex-1">
                  {cert.description}
                </p>

                {/* Skills + credential */}
                <div className="mt-auto pt-5 border-t border-black/6">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-[family-name:var(--font-jetbrains)] text-[10px] px-2.5 py-1 rounded-sm text-[#6B6560] bg-white/70 border border-black/6"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="font-[family-name:var(--font-jetbrains)] text-[9px] text-[#A09890] tracking-[0.15em] uppercase">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
