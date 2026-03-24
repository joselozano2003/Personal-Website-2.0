"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [progress, setProgress]   = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? (y / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px]">
        <div
          className="h-full bg-[#C8956C] transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          scrolled
            ? "bg-[#F8F5F0]/90 backdrop-blur-md border-b border-black/5 shadow-sm shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-[family-name:var(--font-syne)] font-bold text-lg tracking-tight group">
            <span className="text-[#C8956C]">J</span>
            <span className="text-[#1C1A17]">L</span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#C8956C] ml-0.5 mb-1 group-hover:scale-150 transition-transform duration-300" />
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#6B6560] hover:text-[#1C1A17] transition-colors duration-200 tracking-widest uppercase link-hover"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:josecamilolozano2003@gmail.com"
            className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#F8F5F0] bg-[#1C1A17] px-4 py-2.5 rounded-sm hover:bg-[#3C3A37] transition-colors duration-200 tracking-wider font-medium"
          >
            HIRE ME
          </a>
        </div>
      </nav>
    </>
  );
}
