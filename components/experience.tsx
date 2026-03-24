"use client";

import Image from "next/image";
import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const experiences = [
  {
    company: "Amazon Web Services",
    shortName: "AWS",
    logo: "/logos/aws.png",
    role: "Software Development Engineering Intern",
    period: "May 2025 – Aug 2025",
    location: "Vancouver, BC",
    badgeBg: "#E8E0D6",
    accentColor: "#C8956C",
    bullets: [
      "Built an agentic workflow execution service inside CloudWatch that automated root cause analysis on alarm triggers by orchestrating log, metric, and dashboard insights.",
      "Reduced mean time to resolution (MTTR) by up to 30% across automation-enabled alarms serving millions of global users.",
      "Designed a DynamoDB data architecture for configuration settings across millions of users. Built for a 95% read / 5% write pattern, using eventually consistent reads deliberately.",
      "Integrated third-party diagnostic tools to automate stakeholder sharing of incident findings.",
    ],
    stack: ["Java", "SQS", "DynamoDB", "ECS Fargate", "CloudWatch"],
    arch: "Event-driven · SQS broker · Lease management · Point-in-time recovery",
  },
  {
    company: "LodgeLink",
    shortName: "LL",
    logo: "/logos/lodgelink.png",
    role: "Full Stack Software Developer Intern",
    period: "May 2024 – Apr 2025",
    location: "Calgary, AB",
    badgeBg: "#E8E0D6",
    accentColor: "#C8956C",
    bullets: [
      "Designed and implemented Go-based microservices using gRPC and Docker to decouple a monolithic backend, reducing memory consumption by 72%.",
      "Led front-end modernization of the core customer portal (React, Next.js), cutting build and deployment times by 60% through Webpack optimizations.",
      "Developed GraphQL API endpoints in TypeScript, streamlining data retrieval and reducing query complexity.",
      "Delivered continuous feature development across the full stack with end-to-end ownership.",
    ],
    stack: ["Go", "gRPC", "Docker", "React", "Next.js", "TypeScript", "GraphQL"],
    arch: "Microservices · gRPC · Docker · Event-driven decomposition",
  },
];

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-28 md:py-36 border-t border-black/6">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? "visible" : ""}`} ref={ref}>
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#C8956C] tracking-[0.3em] uppercase">02</span>
          <div className="w-6 h-px bg-[#C8956C]/40" />
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.3em] uppercase">Experience</span>
        </div>

        {/* Heading */}
        <h2
          className={`font-[family-name:var(--font-syne)] font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight tracking-tight text-[#1C1A17] mb-14 reveal ${inView ? "visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          Where I&apos;ve shipped{" "}
          <span className="font-[family-name:var(--font-instrument-serif)] italic font-normal text-[#C8956C]">
            production code
          </span>
        </h2>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
  inView,
}: {
  exp: (typeof experiences)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`group relative bg-[#F0EBE3] border border-black/5 rounded-sm hover:border-black/10 hover:shadow-sm transition-all duration-400 reveal ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${200 + index * 130}ms` }}
    >
      {/* Left accent bar — sits outside overflow so it doesn't clip text */}
      <div
        className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: exp.accentColor }}
      />

      <div className="pl-7 pr-6 md:pr-8 py-7">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Logo slot — drop image file into public/logos/ to replace placeholder */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-sm overflow-hidden flex items-center justify-center"
              style={{ background: exp.badgeBg }}
            >
              <LogoImage src={exp.logo} alt={exp.company} fallback={exp.shortName} />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-base text-[#1C1A17]">
                {exp.company}
              </h3>
              <p className="font-[family-name:var(--font-syne)] text-sm text-[#6B6560]">
                {exp.role}
              </p>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-[family-name:var(--font-jetbrains)] text-xs text-[#3C3A37]">
              {exp.period}
            </p>
            <p className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] mt-0.5">
              {exp.location}
            </p>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2.5 mb-6">
          {exp.bullets.map((bullet, j) => (
            <li key={j} className="flex items-start gap-3">
              <span
                className="mt-[8px] flex-shrink-0 w-1 h-1 rounded-full"
                style={{ background: exp.accentColor }}
              />
              <p className="font-[family-name:var(--font-syne)] text-sm text-[#6B6560] leading-[1.7]">
                {bullet}
              </p>
            </li>
          ))}
        </ul>

        {/* Stack + arch */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 pt-5 border-t border-black/6">
          <div className="flex flex-wrap gap-1.5">
            {exp.stack.map((tech) => (
              <span
                key={tech}
                className="font-[family-name:var(--font-jetbrains)] text-[10px] px-2.5 py-1 rounded-sm text-[#6B6560] bg-white/70 border border-black/6"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="md:ml-auto flex-shrink-0">
            <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890]">
              {exp.arch}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoImage({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  // Once you drop an image into public/logos/, it renders automatically.
  // Until then the onError fires and shows the abbreviated text fallback.
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-[family-name:var(--font-syne)] font-black text-[11px] text-[#1C1A17] px-1 text-center leading-tight">
        {fallback}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className="object-contain w-full h-full p-1.5"
      onError={() => setFailed(true)}
    />
  );
}
