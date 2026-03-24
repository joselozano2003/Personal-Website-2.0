"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const cities = [
  { name: "CALGARY", coords: "51.0447° N, 114.0719° W" },
];

export function Hero() {
  const [cityIndex, setCityIndex] = useState(0);
  const [visible,   setVisible]   = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCityIndex((i) => (i + 1) % cities.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const city = cities[cityIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Very subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-70 pointer-events-none" />

      {/* Soft peach glow bottom-left */}
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#EDD5B9]/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full">

        {/* Location ticker */}
        <div
          className="mb-10 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="inline-flex items-center gap-3 border border-black/8 rounded-full px-4 py-1.5 bg-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8956C] animate-pulse" />
            <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#6B6560] tracking-widest uppercase">
              Based in
            </span>
            <div className="relative h-4 overflow-hidden">
              <span
                className={`font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest uppercase text-[#1C1A17] font-medium transition-all duration-300 block ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
              >
                {city.name}
              </span>
            </div>
            <span
              className={`font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] transition-opacity duration-300 hidden sm:block ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              {city.coords}
            </span>
          </div>
        </div>

        {/* Name */}
        <h1
          className="font-[family-name:var(--font-syne)] font-black text-[clamp(2.4rem,11vw,8.5rem)] leading-[1.05] tracking-[-0.03em] text-[#1C1A17] animate-fade-up mb-0"
          style={{ animationDelay: "0.2s" }}
        >
          JOSE
        </h1>
        <h1
          className="font-[family-name:var(--font-syne)] font-black text-[clamp(2.4rem,11vw,8.5rem)] leading-[1.05] tracking-[-0.03em] text-[#C8956C] animate-fade-up mb-8"
          style={{ animationDelay: "0.28s" }}
        >
          LOZANO
        </h1>

        {/* Tagline + CTAs */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-fade-up"
          style={{ animationDelay: "0.42s" }}
        >
          <div className="max-w-sm">
            <p className="font-[family-name:var(--font-syne)] text-lg text-[#3C3A37] font-medium mb-1">
              Software Engineer
            </p>
            <p className="font-[family-name:var(--font-jetbrains)] text-xs text-[#6B6560] tracking-wide mb-3">
              AWS · LodgeLink · University of Calgary &apos;26
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest text-[#F8F5F0] bg-[#1C1A17] px-6 py-3 rounded-sm hover:bg-[#3C3A37] transition-colors duration-200 uppercase font-medium group"
            >
              View Work
              <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="mailto:josecamilolozano2003@gmail.com"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains)] text-[10px] tracking-widest text-[#1C1A17] border border-black/12 px-6 py-3 rounded-sm hover:border-black/25 hover:bg-black/[0.03] transition-all duration-200 uppercase"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-16 md:mt-24 flex items-center justify-between animate-fade-in"
          style={{ animationDelay: "0.65s" }}
        >
          <div className="flex items-center gap-5">
            <div className="w-10 h-px bg-[#C8956C]/50" />
            <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-widest uppercase">
              01 / 05
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/joselozano2003"
              target="_blank" rel="noopener noreferrer"
              className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] hover:text-[#1C1A17] transition-colors tracking-widest uppercase link-hover"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jose-lozano-dev"
              target="_blank" rel="noopener noreferrer"
              className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] hover:text-[#1C1A17] transition-colors tracking-widest uppercase link-hover"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
