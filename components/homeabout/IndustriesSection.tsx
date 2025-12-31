"use client";

import React from "react";
import { motion, Transition } from "framer-motion";
import Image, { StaticImageData } from "next/image";

/* ---------------- BRAND ---------------- */
const BRAND = "#07518a";

/* ---------------- HELPERS ---------------- */
const EASING: Transition["ease"] = [0.22, 1, 0.36, 1];

const MOTION_TIMING: Transition = {
  duration: 0.9,
  ease: EASING,
};

const randomDelay = (index: number, min = 0.1, max = 0.25) =>
  (index * 0.12) % (max - min) + min;

const softMonoGradient = (color: string, opacity: number) =>
  `linear-gradient(
    135deg,
    ${color}${Math.floor(opacity * 255).toString(16)} 0%,
    transparent 100%
  )`;

/* ---------------- IMAGE IMPORTS ---------------- */
import img4 from "./weserver/4.jpg";
import img7192 from "./weserver/7192.jpg";
import img11709 from "./weserver/11709.jpg";
import img20979 from "./weserver/20979.jpg";
import img317011 from "./weserver/317011.jpg";
import img9561348 from "./weserver/9561348.jpg";

/* ---------------- TYPES ---------------- */
type Industry = {
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
};

/* ---------------- DATA ---------------- */
const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    image: img4,
    description:
      "AI-driven automation improves productivity, predicts failures, and reduces downtime in modern manufacturing environments.",
  },
  {
    slug: "smart-city",
    title: "Smart City",
    image: img20979,
    description:
      "Integrated AI systems improve traffic flow, safety, emergency response, and urban efficiency.",
  },
  {
    slug: "defence",
    title: "Defence & Security",
    image: img7192,
    description:
      "Real-time surveillance analytics enable rapid threat detection and mission readiness in high-security zones.",
  },
  {
    slug: "banking",
    title: "Banking & BFSI",
    image: img317011,
    description:
      "AI-powered monitoring protects ATMs, branches, and transactions while reducing fraud.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    image: img11709,
    description:
      "AI assists patient monitoring, anomaly detection, and infection control for better outcomes.",
  },
  {
    slug: "government",
    title: "Government",
    image: img9561348,
    description:
      "Scalable AI intelligence enhances public safety, crisis response, and digital governance.",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function IndustriesWeServeSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Industries We <span className="text-[#07518a]">Serve</span>
        </h2>

        <p className="text-center text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto mb-14 sm:mb-20">
          Premium AI-powered solutions designed to transform every major sector.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {INDUSTRIES.map((item, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <motion.div
                key={item.slug}
                initial={{
                  opacity: 0,
                  x: isOdd ? 40 : -40,
                  y: 40,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  ...MOTION_TIMING,
                  delay: randomDelay(index),
                }}
                viewport={{ once: true, amount: 0.25 }}
              >
                {/* CARD */}
                <div className="relative group">

                  {/* BACKGROUND LAYERS — disabled rotation on mobile */}
                  <div
                    className="
                      absolute inset-0 rounded-3xl
                      hidden sm:block rotate-6
                      group-hover:rotate-3 transition-transform duration-500
                    "
                    style={{ background: softMonoGradient(BRAND, 0.14) }}
                  />
                  <div
                    className="
                      absolute inset-0 rounded-3xl
                      hidden sm:block -rotate-6
                      group-hover:-rotate-3 transition-transform duration-500
                    "
                    style={{ background: softMonoGradient(BRAND, 0.1) }}
                  />

                  {/* MAIN CARD */}
                  <div
                    className="
                      relative rounded-3xl overflow-hidden bg-white
                      shadow-xl transition-all duration-500
                      group-hover:-translate-y-3
                    "
                  >
                    {/* IMAGE */}
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* HOVER OVERLAY (DESKTOP ONLY) */}
                      <div
                        className="
                          absolute inset-0 hidden sm:flex
                          bg-black/70 opacity-0
                          group-hover:opacity-100
                          transition-opacity duration-500
                          items-center justify-center p-6
                        "
                      >
                        <p className="text-white text-sm leading-relaxed text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 sm:p-8 text-center">
                      <h3 className="text-lg sm:text-2xl font-bold text-[#07518a] mb-2">
                        {item.title}
                      </h3>

                      {/* MOBILE DESCRIPTION */}
                      <p className="text-xs sm:hidden text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
