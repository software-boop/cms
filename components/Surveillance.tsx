"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ClientsCarousel from "./ui/ClientsCarousel";

/* BRAND */
const BRAND = "#07518a";

/* Counter Props */
interface CounterProps {
  value: number;
  duration?: number;
}

/* Counter Component */
function Counter({ value, duration = 1200 }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
}

export default function AIVMSHeroLeft() {
  const titleWords: string[] = [
    "AI",
    "Surveillance,",
    "Smart",
    "Energy",
    "&",
    "Enterprise",
    "Systems",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        w-full lg:w-1/2
        pt-20 sm:pt-24 lg:pt-0
        flex flex-col justify-center
        text-center lg:text-left
        group
        px-4 sm:px-6 lg:px-0 
      "
    >
      {/* Company Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="
          inline-flex items-center gap-2
          px-4 py-1.5 rounded-full
          text-xs sm:text-sm font-semibold
          border
          self-center lg:self-start
        "
        style={{
          color: BRAND,
          borderColor: BRAND,
          backgroundColor: "rgba(7,81,138,0.08)",
        }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: BRAND }} />
        Brihaspathi Technologies Limited
      </motion.div>

      {/* MAIN TITLE – Typing Reveal */}
      <h1
        className="
          mt-4
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-bold leading-tight
          text-gray-900
        "
      >
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15 + i * 0.08,
              duration: 0.35,
            }}
            className={`
              inline-block mr-2
              ${word === "AI" || word === "Enterprise" ? "text-[#07518a]" : ""}
              transition-colors duration-300
              group-hover:text-black
            `}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* STATS – 2 × 2 GRID */}
     <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.8, duration: 0.5 }}
  className="
    grid grid-cols-4
    gap-x-8 gap-y-0
    max-w-4xl
    mx-auto lg:mx-0
  "
>
  <div>
    <div className="text-2xl sm:text-3xl font-bold" style={{ color: BRAND }}>
      <Counter value={300} />+
    </div>
    <p className="text-xs sm:text-sm text-gray-600">Workforce</p>
  </div>

  <div>
    <div className="text-2xl sm:text-3xl font-bold" style={{ color: BRAND }}>
      <Counter value={12000} />+
    </div>
    <p className="text-xs sm:text-sm text-gray-600">Global Clients</p>
  </div>

  <div>
    <div className="text-2xl sm:text-3xl font-bold" style={{ color: BRAND }}>
      <Counter value={99} />%
    </div>
    <p className="text-xs sm:text-sm text-gray-600">Success Rate</p>
  </div>

  <div>
    <div className="text-2xl sm:text-3xl font-bold" style={{ color: BRAND }}>
      <Counter value={20} />+
    </div>
    <p className="text-xs sm:text-sm text-gray-600">Years Experience</p>
  </div>
</motion.div>
<ClientsCarousel/>
    </motion.div>
  );
}
