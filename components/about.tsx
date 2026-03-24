"use client";

import { useInView } from "@/hooks/use-in-view";

const stats = [
  { value: "2+", label: "Years Industry\nExperience" },
  { value: "30%", label: "MTTR Reduction\nat AWS" },
  { value: "72%", label: "Memory Cut\nat LodgeLink" },
  { value: "∞",  label: "Things Left\nto Build" },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 md:py-36 border-t border-black/6">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className={`flex items-center gap-4 mb-16 reveal ${inView ? "visible" : ""}`} ref={ref}>
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#C8956C] tracking-[0.3em] uppercase">01</span>
          <div className="w-6 h-px bg-[#C8956C]/40" />
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.3em] uppercase">About</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AboutLeft inView={inView} />
          <AboutRight inView={inView} />
        </div>

        <StatsRow inView={inView} />
      </div>
    </section>
  );
}

function AboutLeft({ inView }: { inView: boolean }) {
  return (
    <div>
      <h2
        className={`font-[family-name:var(--font-syne)] font-bold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-[#1C1A17] mb-7 reveal ${inView ? "visible" : ""}`}
        style={{ transitionDelay: "100ms" }}
      >
        Building systems{" "}
        <span className="font-[family-name:var(--font-instrument-serif)] italic font-normal text-[#C8956C]">
          that matter
        </span>
      </h2>

      <p
        className={`font-[family-name:var(--font-syne)] text-[#6B6560] text-base leading-[1.75] mb-5 reveal ${inView ? "visible" : ""}`}
        style={{ transitionDelay: "200ms" }}
      >
        I&apos;m a software engineer with hands-on experience across the full
        stack, from distributed cloud infrastructure at AWS to microservices
        and frontend modernization at LodgeLink. I&apos;ve shipped production
        code that serves millions of users.
      </p>

      <p
        className={`font-[family-name:var(--font-syne)] text-[#6B6560] text-base leading-[1.75] reveal ${inView ? "visible" : ""}`}
        style={{ transitionDelay: "280ms" }}
      >
        I care most about end-to-end ownership: taking a problem from
        architecture through deployment and keeping it running in production.
        I&apos;m finishing my Computer Science degree at the University of
        Calgary and actively looking for new grad roles in 2026.
      </p>
    </div>
  );
}

function AboutRight({ inView }: { inView: boolean }) {
  const details = [
    { label: "Education", value: "BSc Computer Science",   sub: "University of Calgary · Expected May 2026" },
    { label: "Location",  value: "Calgary, AB",            sub: "51.0447° N, 114.0719° W" },
    { label: "Focus",     value: "Backend & Full Stack",   sub: "Distributed systems, cloud infrastructure, AI" },
    { label: "Status",    value: "Open to Opportunities",  sub: "New grad roles, Summer 2026", accent: true },
  ];

  return (
    <div>
      {details.map((item, i) => (
        <div
          key={item.label}
          className={`border-b border-black/6 py-5 reveal ${inView ? "visible" : ""}`}
          style={{ transitionDelay: `${(i + 2) * 80}ms` }}
        >
          <div className="flex items-start justify-between gap-6">
            <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.2em] uppercase mt-0.5 flex-shrink-0">
              {item.label}
            </span>
            <div className="text-right">
              <p className={`font-[family-name:var(--font-syne)] font-semibold text-sm ${item.accent ? "text-[#C8956C]" : "text-[#1C1A17]"}`}>
                {item.value}
              </p>
              <p className="font-[family-name:var(--font-jetbrains)] text-[11px] text-[#A09890] mt-0.5 leading-relaxed">
                {item.sub}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatsRow({ inView }: { inView: boolean }) {
  return (
    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-b border-black/6">
      {stats.map((stat, i) => (
        <div
          key={stat.value}
          className={`py-8 px-5 min-w-0 border-r border-black/6 last:border-r-0 reveal ${inView ? "visible" : ""}`}
          style={{ transitionDelay: `${380 + i * 70}ms` }}
        >
          <div className="font-[family-name:var(--font-syne)] font-black text-4xl text-[#C8956C] mb-2 leading-none">
            {stat.value}
          </div>
          <div className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-wider uppercase whitespace-pre-line leading-relaxed">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
