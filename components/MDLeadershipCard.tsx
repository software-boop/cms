"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  HTMLMotionProps,
} from "framer-motion";

const BRAND = "#07518a";

/* ===========================
   Content
=========================== */
const LEFT_COLUMN = `
Our Managing Director is a visionary technology entrepreneur and strategic leader with over 15 years of profound expertise in Information Technology, Artificial Intelligence-driven security solutions, smart governance, and digital transformation...
`;

const RIGHT_COLUMN = `
A recognized leader beyond the corporate sphere, he has been honored with numerous awards reflecting his entrepreneurial leadership and industry contributions...
`;

/* ===========================
   Component
=========================== */
export default function MDLeadershipCard() {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 85%", "end 15%"],
  });

  const xLeft = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ["0%", "0%"] : ["-4%", "4%"]
  );
  const xRight = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ["0%", "0%"] : ["4%", "-4%"]
  );

  /** ✔ FIXED clean fade config (no ease array) */
  const fade: HTMLMotionProps<"article"> = {
    initial: { opacity: 0, y: 12, filter: "blur(3px)" as any },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" as any },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, ease: "easeOut" }, // ✔ FIXED
  };

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <motion.article
        ref={cardRef}
        {...fade}
        className="
          relative mx-auto w-full max-w-6xl
          rounded-2xl border bg-white shadow-sm
          ring-1 ring-black/5
        "
        style={{
          borderColor: "rgba(7,81,138,0.14)",
          background:
            "linear-gradient(180deg, rgba(7,81,138,0.03), rgba(7,81,138,0))",
        }}
        aria-label="Managing Director"
      >
        {/* Header */}
        <header className="border-b">
          <div className="flex items-center gap-2 px-5 py-4 sm:px-7">
            <h2
              className="font-extrabold tracking-tight"
              style={{ color: BRAND, fontSize: "clamp(18px, 2.5vw, 26px)" }}
            >
              Managing Director
            </h2>
          </div>
        </header>

        {/* Body */}
        <div className="grid grid-cols-1 gap-6 px-5 py-6 sm:px-7 sm:py-8 lg:grid-cols-2 lg:gap-10">
          {/* Left column */}
          <motion.div style={{ x: xLeft }} className="leading-relaxed text-slate-800">
            {LEFT_COLUMN.trim()
              .split("\n\n")
              .map((p, i) => (
                <p key={i} className="mb-4 text-[15px] sm:text-[16px]">
                  {p}
                </p>
              ))}
          </motion.div>

          {/* Right column */}
          <motion.div style={{ x: xRight }} className="leading-relaxed text-slate-800">
            {RIGHT_COLUMN.trim()
              .split("\n\n")
              .map((p, i) => (
                <p key={i} className="mb-4 text-[15px] sm:text-[16px]">
                  {p}
                </p>
              ))}
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div
          aria-hidden
          className="pointer-events-none h-2 w-full rounded-b-2xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,81,138,0.15), rgba(7,81,138,0.05) 40%, rgba(7,81,138,0.15))",
          }}
        />
      </motion.article>
    </section>
  );
}
