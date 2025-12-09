"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useInView, Variants } from "framer-motion";
import { Button } from "../components/Button";
import { ArrowRight } from "lucide-react";

const BRAND = "#07518a";
const BRAND_TINT = "#0a6ab8";

import MAIN_IMAGE from "./heroimages/Mani.jpg";
import Banner from "./heroimages/background.jpg";
import { TextLoop } from "./text-loop";

/* Utility */
const withAlpha = (hex: string, alpha: number) => {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};



/* Counter */
const Counter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = value / (duration / 16);
    const counter = setInterval(() => {
      start += step;
      if (start >= value) {
        clearInterval(counter);
        setCount(value);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

/* Framer Variants */
const ease = "easeOut";
const leftCol: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
};
const leftItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};
const rightCol: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

/* HERO SECTION */
export default function HeroSection() {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const visualRef = useRef<HTMLDivElement | null>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = visualRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    const tilt = 10;
    tiltY.set((px - 0.5) * tilt);
    tiltX.set(-(py - 0.5) * tilt);
  };

  const onPointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden pb-16 sm:pb-20 lg:pb-24"
      style={{
        backgroundImage: `url(${Banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-25"
          style={{ background: `linear-gradient(135deg, ${BRAND}18, ${BRAND_TINT}18)` }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,.08) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT TEXT PANEL */}
          <motion.div
            variants={leftCol}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={leftItem}
              className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md border shadow-sm self-center lg:self-start"
              style={{
                color: BRAND,
                backgroundColor: withAlpha(BRAND, 0.1),
                borderColor: withAlpha(BRAND, 0.25),
              }}
            >
              <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: BRAND }} />
              India’s Most Trusted System Integrator
            </motion.div>

            {/* Heading */}
       <motion.h1
  variants={leftItem}
  className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight flex flex-wrap"
  style={{ color: BRAND }}
>
  {/* "Where" stays static */}
  <span className="mr-2">Where</span>

  {/* "Technology" stays static */}
  <span className="mr-2">Technology</span>

  {/* "Meets" stays static */}
  <span className="mr-2">Meets</span>

  {/* ANIMATED WORD LOOP (this part rotates) */}
  <TextLoop interval={2}>
    {[
      "Innovation.",
      "Possibility.",
      "Intelligence.",
      "The Future."
    ].map((text) => (
      <span key={text} className="text-black">
        {text}
      </span>
    ))}
  </TextLoop>
</motion.h1>


            {/* Description */}
            <motion.p
              variants={leftItem}
              className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Trusted surveillance, ELV, and smart technology partner for forward-thinking
              businesses. AI-powered intelligence for modern enterprises.
              <br />
              <span className="text-black font-semibold">
                From AI-driven surveillance to sustainable solar solutions, we build intelligent
                infrastructure powered by IoT, automation, and next-gen enterprise systems.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div variants={leftItem} className="mt-6 flex justify-center lg:justify-start">
              <Button
                className="px-8 py-4 rounded-full text-white text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
                style={{ backgroundColor: BRAND }}
              >
                Explore Solutions <ArrowRight className="ml-2 h-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={leftItem}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl mx-auto lg:mx-0 "
            >
              {[
                { num: 300, label: "Workforce" },
                { num: 12000, label: "Global Clients" },
                { num: 99, label: "Success Rate" },
                { num: 18, label: "Years Experience" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-2xl sm:text-2xl lg:text-3xl font-bold"
                    style={{ color: BRAND }}
                  >
                    <Counter value={s.num} />+
                  </div>
                  <p className="text-xs sm:text-sm">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL PANEL */}
          <motion.div
            variants={rightCol}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              ref={visualRef}
              onPointerMove={onPointerMove}
              onPointerLeave={onPointerLeave}
              style={{
                transformStyle: "preserve-3d",
                rotateX: tiltX,
                rotateY: tiltY,
              }}
              className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] 
              h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]"
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  transform: "translateZ(-30px)",
                  background: `linear-gradient(135deg,
                    ${withAlpha(BRAND_TINT, 0.2)} 0%,
                    ${withAlpha(BRAND, 0.15)} 45%,
                    ${withAlpha(BRAND_TINT, 0.2)} 100%)`,
                }}
                animate={{ opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease }}
              />

              {/* Frame */}
              <div
                className="absolute inset-0 rounded-[2rem] bg-white/30 backdrop-blur-xl border shadow-2x"
                style={{ borderColor: withAlpha(BRAND, 0.28) }}
              />

              {/* Image */}
              <div
                className="absolute inset-4 rounded-[1.5rem] overflow-hidden bg-white ring-1"
                style={{
                  borderColor: withAlpha(BRAND, 0.2),
                  boxShadow: `0 15px 40px ${withAlpha(BRAND, 0.15)}`,
                }}
              >
                <Image src={MAIN_IMAGE} alt="Hero Visual" fill priority className="object-cover" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
