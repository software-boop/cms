"use client";

import React from "react";
import { motion, Transition } from "framer-motion";
import Image, { StaticImageData } from "next/image";

/* ---------------- BRAND ---------------- */
const BRAND = "#07518a";

/* ---------------- HELPERS ---------------- */
const EASING: Transition["ease"] = [0.22, 1, 0.36, 1];

const MOTION_TIMING: Transition = {
  duration: 1,
  ease: EASING,
};

const randomDelay = (index: number, min = 0.1, max = 0.3) =>
  (index * 0.15) % (max - min) + min;

const softMonoGradient = (color: string, opacity: number) =>
  `linear-gradient(135deg, ${color}${Math.floor(opacity * 255).toString(
    16
  )} 0%, transparent 100%)`;

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
      "Modern manufacturing depends on automation, precision, and constant monitoring. Our AI-driven systems improve productivity by identifying inefficiencies and predicting failures early, reducing downtime and enhancing product quality.",
  },
  {
    slug: "smart-city",
    title: "Smart City",
 image: img20979,
    description:
      "Smart cities rely on integrated systems that monitor traffic, safety, and environmental conditions. Our AI platform improves mobility, supports emergency response, and boosts urban efficiency.",
  },
  {
    slug: "defence",
    title: "Defence & Security",
   
      image: img7192,
    description:
      "Defense operations require real-time situational awareness. Our AI analyzes surveillance feeds, detects threats instantly, and enhances mission readiness in high-security environments.",
  },
  {
    slug: "banking",
    title: "Banking & BFSI",
   
     image: img317011,
    description:
      "Banking environments require strict security and compliance. Our AI protects ATMs, branches, and digital transactions, reducing fraud and improving operational efficiency.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    
      image: img11709,
    description:
      "Healthcare systems rely on timely insights. Our AI monitors patient conditions, detects anomalies early, and automates infection control for improved treatment outcomes.",
  },
  {
    slug: "government",
    title: "Government",
    image: img9561348,
    description:
      "Government operations require scalable, secure intelligence. Our AI enhances public safety, speeds crisis response, and supports nationwide digital governance.",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function IndustriesWeServeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-center text-5xl font-bold mb-4 text-gray-900">
          Industries We <span className="text-[#07518a]">Serve</span>
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-20">
          Premium AI-powered solutions designed to transform every major sector.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {INDUSTRIES.map((item, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, x: isOdd ? 80 : -80, y: 80 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  ...MOTION_TIMING,
                  delay: randomDelay(index, 0.15, 0.25),
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* CARD */}
                <div className="relative group">

                  {/* BACKGROUND LAYER 1 */}
                  <div
                    className="absolute inset-0 rounded-[3rem] rotate-6
                    group-hover:rotate-3 transition-transform duration-500"
                    style={{ background: softMonoGradient(BRAND, 0.16) }}
                  />

                  {/* BACKGROUND LAYER 2 */}
                  <div
                    className="absolute inset-0 rounded-[3rem] -rotate-6
                    group-hover:-rotate-3 transition-transform duration-500"
                    style={{ background: softMonoGradient(BRAND, 0.1) }}
                  />

                  {/* MAIN CARD */}
                  <div className="relative rounded-[3rem] overflow-hidden bg-white shadow-2xl backdrop-blur-sm 
                      transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-4">

                    {/* IMAGE */}
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-t-[3rem] relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 
                        group-hover:scale-110"
                      />

                      {/* HOVER OVERLAY */}
                      <div
                        className="
                          absolute inset-0 
                          bg-black/70 
                          opacity-0 
                          group-hover:opacity-100 
                          transition-opacity 
                          duration-500 
                          flex 
                          items-center 
                          justify-center 
                          p-6
                        "
                      >
                        <p className="text-white text-sm leading-relaxed text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* TITLE */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-[#07518a] text-center">
                        {item.title}
                      </h3>
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
