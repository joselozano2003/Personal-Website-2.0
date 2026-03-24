"use client";

import { useInView } from "@/hooks/use-in-view";

const skillGroups = [
  {
    category: "Languages",
    dot: "#C8956C",
    skills: ["Java", "Go", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frameworks",
    dot: "#A09890",
    skills: ["React", "Next.js", "gRPC", "GraphQL", "Django", "TensorFlow", "PyTorch", "scikit-learn"],
  },
  {
    category: "Cloud & Infra",
    dot: "#FF9900",
    skills: ["AWS", "Azure", "Docker", "DynamoDB", "RDS PostgreSQL", "S3", "ECS Fargate"],
  },
  {
    category: "Tooling & AI",
    dot: "#6B6560",
    skills: ["Redis", "Firebase", "MongoDB", "GitHub Actions", "LLMs", "RAG", "Vector Databases", "MCP"],
  },
];

const softSkills = [
  "End-to-end ownership",
  "Distributed systems design",
  "Event-driven architecture",
  "System design",
  "User empathy",
  "Cross-cultural communication",
  "Production reliability",
  "Fast learner",
];

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 md:py-36 border-t border-black/6">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? "visible" : ""}`} ref={ref}>
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#C8956C] tracking-[0.3em] uppercase">04</span>
          <div className="w-6 h-px bg-[#C8956C]/40" />
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.3em] uppercase">Skills</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: heading + soft skills */}
          <div className="lg:col-span-1">
            <h2
              className={`font-[family-name:var(--font-syne)] font-bold text-[clamp(1.8rem,3.5vw,3rem)] leading-tight tracking-tight text-[#1C1A17] mb-5 reveal ${inView ? "visible" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              The full{" "}
              <span className="font-[family-name:var(--font-instrument-serif)] italic font-normal text-[#C8956C]">
                stack
              </span>
            </h2>
            <p
              className={`font-[family-name:var(--font-syne)] text-sm text-[#6B6560] leading-[1.75] reveal ${inView ? "visible" : ""}`}
              style={{ transitionDelay: "180ms" }}
            >
              I&apos;ve shipped production code across the stack, from iOS
              mobile to cloud infrastructure. I learn new tools mid-project and
              deliver.
            </p>

            <div
              className={`mt-10 reveal ${inView ? "visible" : ""}`}
              style={{ transitionDelay: "260ms" }}
            >
              <p className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.25em] uppercase mb-3">
                Also bring
              </p>
              <div className="flex flex-wrap gap-1.5">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="font-[family-name:var(--font-syne)] text-xs text-[#6B6560] px-3 py-1.5 border border-black/8 rounded-sm bg-white/50 hover:border-black/15 hover:text-[#1C1A17] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: skill groups */}
          <div className="lg:col-span-2 space-y-7">
            {skillGroups.map((group, i) => (
              <SkillGroup key={group.category} group={group} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  group,
  index,
  inView,
}: {
  group: (typeof skillGroups)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`reveal ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${200 + index * 90}ms` }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: group.dot }} />
        <span
          className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.25em] uppercase"
          style={{ color: group.dot }}
        >
          {group.category}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="font-[family-name:var(--font-syne)] text-sm text-[#3C3A37] px-3.5 py-2 border border-black/7 rounded-sm bg-[#F0EBE3] hover:border-black/14 hover:bg-white/80 hover:text-[#1C1A17] transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
