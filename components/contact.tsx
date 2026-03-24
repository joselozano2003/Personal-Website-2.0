"use client";

import { useInView } from "@/hooks/use-in-view";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-28 md:py-40 border-t border-black/6 relative overflow-hidden">
      {/* Soft peach glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#EDD5B9]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className={`flex items-center gap-4 mb-14 reveal ${inView ? "visible" : ""}`} ref={ref}>
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#C8956C] tracking-[0.3em] uppercase">05</span>
          <div className="w-6 h-px bg-[#C8956C]/40" />
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.3em] uppercase">Contact</span>
        </div>

        {/* Heading — full width, stacked */}
        <div className="mb-12">
          <h2
            className={`font-[family-name:var(--font-syne)] font-black text-[clamp(2.8rem,7vw,6rem)] leading-[0.92] tracking-[-0.02em] text-[#1C1A17] reveal ${inView ? "visible" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            LET&apos;S WORK
            <br />
            <span className="font-[family-name:var(--font-instrument-serif)] italic font-normal text-[#C8956C]">
              Together
            </span>
          </h2>

          <p
            className={`font-[family-name:var(--font-syne)] text-base text-[#6B6560] leading-[1.75] max-w-lg mt-6 reveal ${inView ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            I&apos;m actively looking for new grad roles starting Summer 2026.
            If you&apos;re building something where the consequences of getting
            it wrong are real. Let&apos;s talk.
          </p>
        </div>

        {/* Contact links — full width row */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 reveal ${inView ? "visible" : ""}`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Email */}
          <a
            href="mailto:josecamilolozano2003@gmail.com"
            className="group flex items-center justify-between bg-[#F0EBE3] border border-black/5 rounded-sm px-5 py-5 hover:border-[#C8956C]/40 hover:bg-[#EDD5B9]/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-sm bg-[#C8956C]/15 flex items-center justify-center flex-shrink-0">
                <Mail className="w-3.5 h-3.5 text-[#C8956C]" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-syne)] font-semibold text-sm text-[#1C1A17]">
                  Email
                </p>
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] mt-0.5 hidden sm:block">
                  josecamilolozano2003@gmail.com
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#A09890] group-hover:text-[#C8956C] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jose-lozano-007851224/"
            target="_blank" rel="noopener noreferrer"
            className="group flex items-center justify-between bg-[#F0EBE3] border border-black/5 rounded-sm px-5 py-5 hover:border-black/10 hover:bg-white/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-sm bg-black/5 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-[#6B6560]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div>
                <p className="font-[family-name:var(--font-syne)] font-semibold text-sm text-[#1C1A17]">
                  LinkedIn
                </p>
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] mt-0.5">
                  Connect professionally
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#A09890] group-hover:text-[#1C1A17] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/joselozano2003"
            target="_blank" rel="noopener noreferrer"
            className="group flex items-center justify-between bg-[#F0EBE3] border border-black/5 rounded-sm px-5 py-5 hover:border-black/10 hover:bg-white/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-sm bg-black/5 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 text-[#6B6560]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="font-[family-name:var(--font-syne)] font-semibold text-sm text-[#1C1A17]">
                  GitHub
                </p>
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] mt-0.5">
                  See the code
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#A09890] group-hover:text-[#1C1A17] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" />
          </a>
        </div>

        {/* Location */}
        <div
          className={`flex items-center gap-2.5 mt-6 reveal ${inView ? "visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          <MapPin className="w-3 h-3 text-[#A09890]" />
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-wider">
            Calgary, AB · +1 825 365 1552 · Open to relocation
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 mt-20 pt-7 border-t border-black/6 flex items-center justify-between">
        <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-widest uppercase">
          Jose Lozano © 2026
        </span>
        <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-widest uppercase">
          Built with Next.js · Calgary, AB
        </span>
      </div>
    </section>
  );
}
