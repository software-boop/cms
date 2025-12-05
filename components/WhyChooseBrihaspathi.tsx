"use client";

import React, { useMemo, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";

/* ================= Types ================= */
export type WhyItem = {
  title: string;
  highlight?: string;
  description: string;
  icon?: string;
  imageSrc: string | StaticImageData;
};

type Props = {
  items?: WhyItem[];
  title?: string;
  brandHex?: string;
};

/* ====== Static Images ====== */
import Nationwide from "./Testimonialimages/nationawide.png";
import Expertise from "./Testimonialimages/expertise (1).png";
import Trusted from "./Testimonialimages/end---end (1).png";
import Innovation from "./Testimonialimages/innovation-1 (1).png";

/* =============== Default Items =============== */
const DEFAULT_ITEMS: WhyItem[] = [
  {
    title: "Nationwide Presence",
    description:
      "with proven success across industries and government verticals",
    imageSrc: Nationwide,
  },
  {
    title: "End-to-End Expertise",
    description: "from design to deployment with full lifecycle support",
    imageSrc: Expertise,
  },
  {
    title: "Trusted by Leading PSUs",
    description: "Preferred partner for mission-critical projects",
    imageSrc: Trusted,
  },
  {
    title: "Innovation",
    highlight: "Built for Tomorrow",
    description:
      "Designed to scale with your business and evolving technology.",
    imageSrc: Innovation,
  },
];

/* =============== Motion Helpers =============== */
/** Fade + slide in helper for any motion component */
const appear = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  // use a string "easeOut" instead of numeric array to satisfy TS
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/* Parallax for vertical lane */
function useLaneParallax(
  ref: React.RefObject<HTMLDivElement | null>,
  travel = -140
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "end 10%"],
  });
  return useTransform(scrollYProgress, [0, 1], [0, travel]);
}

/* Panel follow on scroll */
function usePanelFollow(
  ref: React.RefObject<HTMLDivElement | null>,
  amplitude = 26
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 15%"],
  });

  const raw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [amplitude, 0, -amplitude]
  );

  const velocity = useVelocity(raw); // not used but harmless

  const y = useSpring(raw, {
    stiffness: 140,
    damping: 18,
    mass: 0.4,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.75, 1, 1]);

  return { y, opacity, velocity };
}

/* Floating effect on image */
function useImageFloat(ref: React.RefObject<HTMLDivElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 20%"],
  });

  return useTransform(scrollYProgress, [0, 1], [-8, 8]);
}

/* =============== Panel Component =============== */
function Panel({
  item,
  brandHex,
  priority = false,
}: {
  item: WhyItem;
  brandHex: string;
  priority?: boolean;
}) {
  // IMPORTANT: generic is HTMLDivElement | null
  const panelRef = useRef<HTMLDivElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);

  const follow = usePanelFollow(panelRef, 28);
  const imageFloatY = useImageFloat(imgWrapRef);

  return (
    <motion.div
      ref={panelRef}
      style={{ y: follow.y, opacity: follow.opacity }}
      {...appear(0.05)}
      className="w-full"
    >
      {/* Image */}
      <motion.div
        ref={imgWrapRef}
        style={{ y: imageFloatY }}
        className="relative w-full aspect-[32/10]"
      >
        <Image
          src={item.imageSrc}
          alt={item.title}
          fill
          priority={priority}
          className="object-contain p-4 md:p-6"
        />
      </motion.div>

      {/* Content */}
      <div className="mt-4 md:mt-5 flex items-start gap-4">
        <div
          className="self-stretch w-[2px] rounded-full"
          style={{ backgroundColor: brandHex }}
        />

        <div>
          <h3
            className="text-2xl md:text-3xl font-semibold tracking-tight"
            style={{ color: brandHex }}
          >
            {item.title}
          </h3>

          {item.highlight && (
            <p
              className="mt-1 text-[11px] md:text-xs uppercase tracking-widest font-semibold"
              style={{ color: brandHex }}
            >
              {item.highlight}
            </p>
          )}

          <p className="mt-3 text-gray-700 leading-relaxed text-base md:text-lg">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* =============== Lane Component =============== */
function Lane({
  items,
  brandHex,
  travel,
  offsetTop = 0,
  align = "start",
}: {
  items: WhyItem[];
  brandHex: string;
  travel: number;
  offsetTop?: number;
  align?: "start" | "end";
}) {
  const laneRef = useRef<HTMLDivElement | null>(null);
  const y = useLaneParallax(laneRef, travel);

  return (
    <motion.div
      ref={laneRef}
      style={{ y }}
      className={`flex flex-col gap-16 md:gap-24 ${
        align === "end" ? "items-end" : ""
      }`}
    >
      {offsetTop > 0 && <div style={{ height: offsetTop }} />}

      {items.map((it, i) => (
        <div key={i} className="w-full md:max-w-[560px]">
          <Panel item={it} brandHex={brandHex} priority={i < 2} />
        </div>
      ))}
    </motion.div>
  );
}

/* =============== MAIN EXPORT =============== */
export default function WhyChooseBrihaspathi({
  items,
  title = "Why Brihaspathi?",
  brandHex = "#07518a",
}: Props) {
  const data = useMemo(() => items ?? DEFAULT_ITEMS, [items]);

  const left: WhyItem[] = [];
  const right: WhyItem[] = [];

  data.forEach((it, idx) => (idx % 2 === 0 ? left.push(it) : right.push(it)));

  return (
    <section
      className="relative bg-white"
      style={{
        paddingTop: 100,
        paddingLeft: 100,
        paddingRight: 100,
      }}
    >
      <motion.h2
        {...appear(0)}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-black"
      >
        {title}
      </motion.h2>

      <div className="mx-auto max-w-7xl mt-10 md:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <Lane items={left} brandHex={brandHex} travel={-110} offsetTop={60} />
          <Lane items={right} brandHex={brandHex} travel={-150} align="end" />
        </div>
      </div>
    </section>
  );
}
