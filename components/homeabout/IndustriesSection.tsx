"use client";

import React from "react";
import { motion, cubicBezier, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Landmark,
  Globe,
  Shield,
  Factory,
  Zap,
  Banknote,
  ArrowRight,
  MapPin,
} from "lucide-react";

/* ================= BRAND ================= */
const BRAND = "#07518a";

/* ================= TYPES ================= */
type Industry = {
  slug: string;
  title: string;
  description: string;
  icon: React.ElementType;
  domains: string[];
};

/* ================= INDUSTRIES DATA ================= */
const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    description:
      "Industry 4.0 driven manufacturing ecosystems leveraging AI, automation, analytics, and cloud technologies to improve productivity, quality, and sustainability.",
    domains: ["Process Safety", "Asset Protection", "Automation"],
  },
  {
    slug: "smart-city",
    title: "Smart City",
    icon: Globe,
    description:
      "Integrated urban intelligence platforms combining IoT, AI video analytics, and command centers to enhance public safety and city-wide governance.",
    domains: ["Traffic Analytics", "Crowd Monitoring", "Command Control"],
  },
  {
    slug: "defence",
    title: "Defence",
    icon: Shield,
    description:
      "Advanced AR/VR, simulation, and AI-powered situational awareness solutions for training, surveillance, and mission-critical operations.",
    domains: ["Simulation", "Surveillance", "Mission Readiness"],
  },
  {
    slug: "banking",
    title: "Banking & BFSI",
    icon: Banknote,
    description:
      "Secure, compliant, and scalable surveillance and analytics systems for branches, ATMs, vaults, and fraud prevention.",
    domains: ["ATM Security", "Compliance", "Fraud Detection"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: Zap,
    description:
      "AI-powered monitoring, patient safety, and operational intelligence solutions for hospitals and public health infrastructure.",
    domains: ["Patient Safety", "Public Health", "Automation"],
  },
  {
    slug: "government",
    title: "Government & Public Sector",
    icon: Landmark,
    description:
      "Nationwide, mission-critical deployments supporting governance, elections, judiciary, and public safety initiatives.",
    domains: ["Public Safety", "Elections", "Judiciary"],
  },
];

/* ================= MOTION ================= */
const containerMotion: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

/* ================= UTIL ================= */
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const softMonoGradient = (color: string, alpha: number): string =>
  `linear-gradient(135deg, ${hexToRgba(color, alpha)}, transparent)`;

/* ================= COMPONENT ================= */
export default function IndustriesWeServeSection() {
  const router = useRouter();

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={containerMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mx-auto mb-20 sm:mb-24 max-w-4xl text-center flex flex-col items-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 text-sm font-medium uppercase tracking-wide"
            style={{ color: BRAND }}
          >
            Our Expertise
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900"
          >
            Industries We Serve
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl"
          >
            Delivering AI-driven, scalable, and mission-critical technology
            solutions across diverse industries and complex operating
            environments.
          </motion.p>
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          variants={containerMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16"
        >
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.div key={industry.slug} variants={fadeUp}>
                <div
                  onClick={() => router.push(`/industries/${industry.slug}`)}
                  className="relative group cursor-pointer"
                >
                  <div
                    className="absolute inset-0 rounded-[2.25rem] rotate-6 group-hover:rotate-3 transition-transform duration-500"
                    style={{ background: softMonoGradient(BRAND, 0.14) }}
                  />
                  <div
                    className="absolute inset-0 rounded-[2.25rem] -rotate-6 group-hover:-rotate-3 transition-transform duration-500"
                    style={{ background: softMonoGradient(BRAND, 0.06) }}
                  />

                  <div className="relative rounded-[2.25rem] bg-white border border-slate-200 p-8 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 group-hover:shadow-[0_30px_70px_rgba(7,81,138,0.22)] overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: BRAND }}
                    />

                    <div className="relative z-10">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(7,81,138,0.12)] group-hover:bg-white/20 transition-colors">
                        <Icon className="h-6 w-6 text-[#07518a] group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white transition-colors">
                        {industry.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-slate-600 group-hover:text-white/90 transition-colors">
                        {industry.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {industry.domains.map((d) => (
                          <span
                            key={d}
                            className="rounded-full px-3 py-1 text-xs bg-slate-100 text-slate-700 group-hover:bg-white/15 group-hover:text-white transition-colors"
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-xs text-slate-600 group-hover:text-white/80 transition-colors">
                        <MapPin className="h-4 w-4" />
                        Pan-India & enterprise-scale deployments
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-800 group-hover:text-white transition-colors">
                        Explore solutions
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
