"use client";

import { useInView } from "@/hooks/use-in-view";

export function Leadership() {
  const { ref, inView } = useInView();

  return (
    <section className="py-16 border-t border-black/6">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`bg-[#F0EBE3] border border-black/5 rounded-sm overflow-hidden hover:border-black/9 hover:shadow-sm transition-all duration-400 reveal ${inView ? "visible" : ""}`}
        >
          {/* Left accent bar */}
          <div className="flex">
            <div className="w-[3px] bg-[#C8956C]/60 flex-shrink-0" />

            <div className="px-7 py-7 flex-1">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#C8956C] tracking-[0.25em] uppercase">
                      Leadership
                    </span>
                    <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890]">·</span>
                    <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-[#A09890] tracking-[0.2em] uppercase">
                      University of Calgary
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#1C1A17] mb-0.5">
                    Vice President of Events
                  </h3>
                  <p className="font-[family-name:var(--font-syne)] text-sm text-[#6B6560] mb-5">
                    Latin American Student Association (LASA)
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-2.5">
                      <p className="font-[family-name:var(--font-syne)] text-sm text-[#6B6560] leading-[1.75]">
                        Inherited a community drawing 15–20 people per event. Grew regular attendance to 30–40 by
                        overhauling Instagram content strategy, improving in-person promotion, and personally
                        investing time in helping members adapt to university and Canadian life.
                      </p>
                      <p className="font-[family-name:var(--font-syne)] text-sm text-[#6B6560] leading-[1.75]">
                        Organized a Latin American themed party that drew 150+ paid attendees, the association&apos;s
                        largest event to date. Also organizes professional events including career panels.
                      </p>
                    </div>

                    <div className="flex flex-row md:flex-col gap-3">
                      <div className="border border-black/6 bg-white/50 rounded-sm p-4 text-center flex-1 md:flex-none">
                        <div className="font-[family-name:var(--font-syne)] font-black text-3xl text-[#C8956C] leading-none mb-1">
                          150+
                        </div>
                        <div className="font-[family-name:var(--font-jetbrains)] text-[9px] text-[#A09890] tracking-wider uppercase">
                          Paid Attendees
                        </div>
                      </div>
                      <div className="border border-black/6 bg-white/50 rounded-sm p-4 text-center flex-1 md:flex-none">
                        <div className="font-[family-name:var(--font-syne)] font-black text-3xl text-[#C8956C] leading-none mb-1">
                          2x
                        </div>
                        <div className="font-[family-name:var(--font-jetbrains)] text-[9px] text-[#A09890] tracking-wider uppercase">
                          Attendance Growth
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
