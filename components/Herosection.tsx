"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useInView } from "framer-motion";
import { Button } from "../components/Button";
import { ArrowRight } from "lucide-react";

const BRAND = "#07518a";
const BRAND_TINT = "#0a6ab8";
const mainimage = "/Mani.jpg";
const BANNER = "/background.jpg";

const withAlpha = (hex: string, alpha: number) => {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/* =============================
   Animated Counter
============================= */
const Counter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(counter);
        setCount(value);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

/* =============================
   Motion Variants (Fixed)
============================= */
const easing = [0.16, 1, 0.3, 1];

const leftCol = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing,
      staggerChildren: 0.08,
    },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

const rightCol = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easing },
  },
};

export default function HeroSection() {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const visualRef = useRef<HTMLDivElement | null>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = visualRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const maxTilt = 8;
    tiltY.set((px - 0.5) * maxTilt);
    tiltX.set(-(py - 0.5) * maxTilt);
  };
  const onPointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${BANNER})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlays */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background: `linear-gradient(135deg, ${BRAND}15, ${BRAND_TINT}15)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,.06) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* CONTAINER */}
      <div className="relative z-10 w-full flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 h-full">

            {/* LEFT TEXT SIDE */}
            <motion.div
              variants={leftCol}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center lg:text-left flex flex-col justify-center h-full"
            >
              {/* Badge */}
              <motion.div
                variants={leftItem}
                className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md border shadow-sm self-center lg:self-start"
                style={{
                  color: BRAND,
                  backgroundColor: withAlpha(BRAND, 0.1),
                  borderColor: withAlpha(BRAND, 0.25),
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: BRAND }} />
                India’s Most Trusted System Integrator
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={leftItem}
                className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
              >
                Where Innovation Meets
                <span className="block" style={{ color: BRAND }}>
                  Secure Intelligence.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={leftItem}
                className="mt-5 text-sm sm:text-base lg:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Powering future-ready businesses with AI-driven surveillance,
                ELV systems, IoT automation, and enterprise technology solutions.
              </motion.p>

              {/* CTA */}
              <motion.div variants={leftItem} className="mt-7 flex justify-center lg:justify-start">
                <Button
                  className="px-7 py-4 rounded-full text-white text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  style={{ backgroundColor: BRAND }}
                >
                  Explore Solutions <ArrowRight className="ml-2 h-5" />
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={leftItem}
                className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl mx-auto lg:mx-0"
              >
                {[ 
                  { num: 300, label: "Workforce" },
                  { num: 12000, label: "Global Clients" },
                  { num: 99, label: "Success Rate (%)" },
                  { num: 18, label: "Years Experience" },
                ].map((s, i) => (
                  <div key={i} className="text-center group">
                    <div
                      className="text-3xl sm:text-4xl font-bold transition-all group-hover:scale-110"
                      style={{ color: BRAND }}
                    >
                      <Counter value={s.num} />+
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT VISUAL SIDE */}
            <motion.div
              variants={rightCol}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center items-center h-full"
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
                className="relative w-full max-w-[520px] h-[320px] sm:h-[400px] lg:h-[480px]"
              >
                {/* Glow */}
                <motion.div
                  className="absolute inset-0 rounded-[2rem]"
                  style={{
                    transform: "translateZ(-40px)",
                    background: `linear-gradient(135deg,
                      ${withAlpha(BRAND_TINT, 0.18)} 0%,
                      ${withAlpha(BRAND, 0.12)} 45%,
                      ${withAlpha(BRAND_TINT, 0.18)} 100%)`,
                  }}
                  animate={{ opacity: [0.3, 0.55, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: easing }}
                />

                {/* Frame */}
                <div
                  className="absolute inset-0 rounded-[2rem] bg-white/30 backdrop-blur-xl border shadow-2xl"
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
                  <Image src={mainimage} alt="Hero Visual" fill priority className="object-cover" />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
