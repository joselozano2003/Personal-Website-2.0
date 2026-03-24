"use client";

import { useInView } from "@/hooks/use-in-view";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "MapleQuest",
    tagline: "Social geolocation app for discovering Canada",
    description:
      "Native iOS social media app allowing users to discover and share geolocated points of interest across Canada. Sole architect of the cloud infrastructure: ECS Fargate, RDS PostgreSQL, S3, IAM, load balancers, Secrets Manager. CI/CD pipeline with GitHub Actions for zero-downtime rollouts.",
    type: "Team School Project",
    year: "2024",
    tech: ["Swift", "SwiftUI", "Django", "PostgreSQL", "AWS ECS", "S3", "GitHub Actions"],
    accentColor: "#C8956C",
    highlight:
      "Before writing a line of code, the team interviewed users across different demographics. Initial assumptions were almost entirely wrong; the shipped product looked nothing like the first idea.",
    number: "01",
  },
  {
    name: "CSA GPT",
    tagline: "AI compliance assistant for trades professionals",
    description:
      "AI-powered compliance assistant providing code-compliant guidance across CSA, HVAC, plumbing, and electrical standards. Full RAG pipeline: PDF/text parsing, semantic chunking, embedding generation, and vector-indexed retrieval with optimized prompt engineering.",
    type: "Personal Project",
    year: "2024",
    tech: ["React", "TypeScript", "Node.js", "RAG", "Vector Databases", "LLMs"],
    accentColor: "#A09890",
    highlight:
      "Built a complete RAG pipeline from scratch: document ingestion, semantic chunking, embedding generation, and vector-indexed retrieval with domain-specific compliance prompting.",
    number: "02",
  },
];

export function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-28 md:py-36 border-t border-black/6">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? "visible" : ""}`} ref={ref}>
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#C8956C] tracking-[0.3em] uppercase">03</span>
          <div className="w-6 h-px bg-[#C8956C]/40" />
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.3em] uppercase">Projects</span>
        </div>

        {/* Heading */}
        <h2
          className={`font-[family-name:var(--font-syne)] font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight tracking-tight text-[#1C1A17] mb-14 reveal ${inView ? "visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          Things I&apos;ve{" "}
          <span className="font-[family-name:var(--font-instrument-serif)] italic font-normal text-[#C8956C]">
            built
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`group bg-[#F0EBE3] border border-black/5 rounded-sm overflow-hidden hover:border-black/10 hover:shadow-sm transition-all duration-400 flex flex-col reveal ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${200 + index * 130}ms` }}
    >
      {/* Top accent line */}
      <div
        className="h-[3px] w-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"
        style={{ background: project.accentColor }}
      />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.25em] uppercase text-[#A09890]">
                {project.number}
              </span>
              <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890]">·</span>
              <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.2em] uppercase">
                {project.type}
              </span>
              <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890]">·</span>
              <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890]">
                {project.year}
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-syne)] font-black text-2xl text-[#1C1A17] tracking-tight">
              {project.name}
            </h3>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#A09890] group-hover:text-[#C8956C] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
        </div>

        {/* Tagline */}
        <p className="font-[family-name:var(--font-instrument-serif)] italic text-[#6B6560] text-base mb-4">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="font-[family-name:var(--font-syne)] text-sm text-[#6B6560] leading-[1.75] mb-5">
          {project.description}
        </p>

        {/* Insight callout */}
        <div className="border-l-2 border-[#C8956C]/30 pl-4 py-0.5 mb-6">
          <p className="font-[family-name:var(--font-syne)] text-xs text-[#A09890] italic leading-[1.7]">
            {project.highlight}
          </p>
        </div>

        {/* Tech stack */}
        <div className="mt-auto pt-5 border-t border-black/6">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="font-[family-name:var(--font-jetbrains)] text-[10px] px-2.5 py-1 rounded-sm text-[#6B6560] bg-white/70 border border-black/6 hover:border-black/12 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
