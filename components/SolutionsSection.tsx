"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Star,
  Shield,
  Users,
  Home,
  Zap,
  Network,
  Volume2,
} from "lucide-react";
import { useRef } from "react";

const BRAND = "#07518a";

const withAlpha = (hex: string, alpha: number) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const clamp = (v: number) => Math.max(0, Math.min(255, v));
const toHex = (n: number) => n.toString(16).padStart(2, "0");

function adjust(hexColor: string, amt: number) {
  const h = hexColor.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const R = clamp(r + (255 - r) * (amt > 0 ? amt : 0) + r * (amt < 0 ? amt : 0));
  const G = clamp(g + (255 - g) * (amt > 0 ? amt : 0) + g * (amt < 0 ? amt : 0));
  const B = clamp(b + (255 - b) * (amt > 0 ? amt : 0) + b * (amt < 0 ? amt : 0));
  return `#${toHex(Math.round(R))}${toHex(Math.round(G))}${toHex(Math.round(B))}`;
}

const lighten = (c: string, p = 0.15) => adjust(c, +p);
const darken = (c: string, p = 0.1) => adjust(c, -p);

const BRAND_LIGHT = lighten(BRAND, 0.18);
const BRAND_DARK = darken(BRAND, 0.08);

const monoGradient = (base = BRAND) =>
  `linear-gradient(90deg, ${base} 0%, ${lighten(base, 0.18)} 100%)`;
const softMonoGradient = (base = BRAND, opacity = 0.12) =>
  `linear-gradient(90deg, ${withAlpha(lighten(base, 0.18), opacity)} 0%, ${withAlpha(base, opacity)} 100%)`;

const THEME = {
  bg: "#FFFFFF",
  text: "#0A0A0A",
  subText: "rgba(10,10,10,0.72)",
  ring: withAlpha(BRAND, 0.22),
  surfaceTint: withAlpha(BRAND, 0.08),
};

const MOTION_TIMING = {
  duration: 0.75,
  ease: [0.16, 1, 0.3, 1],
};

const drift = {
  translateX: [0, 8, -6, 10, 0],
  translateY: [0, -6, 8, -10, 0],
  rotate: [0, 2, -2, 1.5, 0],
};

function seeded(index: number) {
  let t = (index + 1) * 0x6d2b79f5;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function randomDirection(index: number) {
  const rnd = seeded(index);
  const dirs = [
    { x: -120, y: 0 },
    { x: 120, y: 0 },
    { x: 0, y: -120 },
    { x: 0, y: 120 },
  ];
  return dirs[Math.floor(rnd() * dirs.length)];
}

function randomDelay(index: number, base = 0.05, spread = 0.2) {
  const rnd = seeded(index)();
  return base + rnd * spread;
}

const floatForever = {
  animate: { ...drift },
  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  },
};

const solutions = [
  {
    icon: Shield,
    title: "AI Surveillance & Smart CCTV",
    subtitle: "CCTV Surveillance",
    description:
      "AI-powered surveillance systems with 4K resolution, night vision, and intelligent analytics for comprehensive security coverage.",
    features: ["4K Ultra HD", "AI Analytics", "24/7 Monitoring", "Mobile Access"],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
    popular: true,
  },
  {
    icon: Users,
    title: "Extra Low Voltage ELV Systems",
    subtitle: "Biometric Access Control",
    description:
      "Multi-modal biometric systems combining fingerprint, facial recognition, and card-based access for maximum security.",
    features: ["Face Recognition", "Fingerprint", "Card Access", "Time Tracking"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    icon: Home,
    title: "Smart Home Automation",
    subtitle: "Intelligent Living Solutions",
    description:
      "Complete home automation with voice control, mobile apps, and energy-efficient smart devices for modern living.",
    features: ["Voice Control", "Smart Lighting", "Climate Control", "Energy Saving"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    icon: Zap,
    title: "Solar & Renewable Energy",
    subtitle: "Sustainable Energy Solutions",
    description:
      "High-efficiency solar installations with smart grid integration and battery storage for sustainable energy independence.",
    features: ["Grid Integration", "Battery Storage", "Smart Monitoring", "ROI Tracking"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    icon: Network,
    subtitle: "Robust Networking & IT Infrastructure",
    title: "Data Center Setup",
    description:
      "Secure, scalable communication and networking solutions to support enterprise operations.",
    features: ["Fiber Optic", "WiFi 6", "Cloud Integration", "24/7 Support"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    icon: Volume2,
    title: "Software Development",
    subtitle: "Custom Solutions",
    description:
      "Tailored technology solutions crafted to meet unique business and government requirements",
    features: ["ERP Solution", "HRMS", "Software Development"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
];

const featureItem = (i: number): Variants => ({
  hidden: { opacity: 0, x: 12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { ...MOTION_TIMING, delay: 0.05 * i },
  },
});

function Badge({ children, className, style }: any) {
  return (
    <div className={`inline-flex items-center px-3 py-1 text-sm ${className}`} style={style}>
      {children}
    </div>
  );
}

function Button({ children, className, style, size }: any) {
  return (
    <button className={`px-6 py-3 font-semibold ${className}`} style={style}>
      {children}
    </button>
  );
}

function Card({ children, className }: any) {
  return <div className={className}>{children}</div>;
}

export default function SolutionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effects for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section
      ref={containerRef}
      id="solutions"
      className="relative min-h-screen scroll-mt-28 "
      style={{ backgroundColor: THEME.bg }}
    >
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Animated gradient orbs with parallax */}
        <motion.div
          style={{
            y: backgroundY,
            opacity: backgroundOpacity,
          }}
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ background: withAlpha(BRAND, 0.15) }}
        />
        <motion.div
          style={{
            y: backgroundY,
            opacity: backgroundOpacity,
          }}
          className="absolute top-60 right-20 w-80 h-80 rounded-full blur-3xl bg-black"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ background: withAlpha(BRAND_LIGHT, 0.2) }}
        />
        <motion.div
          style={{
            y: backgroundY,
            opacity: backgroundOpacity,
          }}
          className="absolute bottom-40 left-1/3 w-72 h-72 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{ background: withAlpha(BRAND_DARK, 0.12) }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${BRAND} 1px, transparent 1px), linear-gradient(90deg, ${BRAND} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Scrollable Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          {/* Heading */}
          <div className="text-center space-y-6 mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0, transition: MOTION_TIMING }}
              viewport={{ once: true, amount: 0.5 }}
              className="inline-block"
            >
              <Badge
                className="rounded-full border"
                style={{
                  color: BRAND,
                  borderColor: THEME.ring,
                  background: softMonoGradient(BRAND, 0.08),
                  backdropFilter: "blur(6px)",
                }}
              >
                <Star className="w-3 h-3 mr-1" style={{ color: BRAND }} /> Our Expertise
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { ...MOTION_TIMING, delay: 0.05 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-xl md:text-3xl font-bold"
              style={{ color: THEME.text }}
            >
              Comprehensive Technology Solutions Tailored for You
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { ...MOTION_TIMING, delay: 0.1 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-lg md:text-xl max-w-xl mx-auto"
              style={{ color: THEME.subText }}
            >
              Discover our comprehensive range designed to secure, automate, and optimize your
              operations.
            </motion.p>
          </div>

          {/* Solutions */}
          <div className="space-y-28 md:space-y-32">
            {solutions.map((solution, index) => {
              const contentFrom = randomDirection(index);
              const imageFrom = { x: -contentFrom.x, y: -contentFrom.y };
              const contentDelay = randomDelay(index, 0.05, 0.25);
              const imageDelay = randomDelay(index, 0.12, 0.25);
              const isOdd = index % 2 === 1;

              return (
                <div key={index} className="space-y-10">
                  <div
                    className={`grid lg:grid-cols-2 gap-14 items-center ${
                      isOdd ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: contentFrom.x, y: contentFrom.y }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: { ...MOTION_TIMING, delay: contentDelay },
                      }}
                      viewport={{ once: false, amount: 0.35 }}
                      className={`${isOdd ? "lg:col-start-2" : ""}`}
                    >
                      <div className="space-y-6">
                        {solution.popular && (
                          <Badge
                            className="rounded-full border-0"
                            style={{
                              color: "#fff",
                              background: monoGradient(BRAND),
                            }}
                          >
                            <Star className="w-3 h-3 mr-1" /> Most Popular
                          </Badge>
                        )}

                        <motion.div
                          animate={{
                            translateX: [0, 8, -6, 10, 0],
                            translateY: [0, -6, 8, -10, 0],
                            rotate: [0, 2, -2, 1.5, 0],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                          }}
                          className="inline-flex p-4 rounded-3xl"
                          style={{ background: softMonoGradient(BRAND, 0.12) }}
                        >
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                            style={{ background: monoGradient(BRAND_DARK) }}
                          >
                            <solution.icon className="h-8 w-8" style={{ color: "#fff" }} />
                          </div>
                        </motion.div>

                        <div className="space-y-3">
                          <p
                            className="text-sm font-medium bg-clip-text text-transparent"
                            style={{ backgroundImage: monoGradient(BRAND) }}
                          >
                            {solution.subtitle}
                          </p>
                          <h3 className="text-3xl lg:text-4xl font-bold" style={{ color: THEME.text }}>
                            {solution.title}
                          </h3>
                          <p className="text-lg" style={{ color: THEME.subText }}>
                            {solution.description}
                          </p>
                        </div>

                        <motion.div
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0.35 }}
                          className="grid grid-cols-2 gap-4"
                        >
                          {solution.features.map((f, i) => (
                            <motion.div
                              key={`${f}-${i}`}
                              variants={featureItem(i)}
                              className="flex items-center space-x-3"
                            >
                              <span
                                className="w-2 h-2 rounded-full block"
                                style={{ background: BRAND }}
                              />
                              <span className="font-medium" style={{ color: THEME.text }}>
                                {f}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button
                            className="border-0 rounded-full hover:shadow-xl hover:scale-[1.02] transition"
                            style={{
                              color: "#fff",
                              background: monoGradient(BRAND),
                            }}
                          >
                            Learn More <ArrowRight className="ml-2 h-4 w-4 inline" />
                          </Button>

                          <Button
                            className="rounded-full transition border"
                            style={{
                              borderColor: THEME.ring,
                              background: softMonoGradient(BRAND, 0.08),
                              color: THEME.text,
                            }}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, x: imageFrom.x, y: imageFrom.y }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: { ...MOTION_TIMING, delay: imageDelay },
                      }}
                      viewport={{ once: false, amount: 0.35 }}
                      className={`${isOdd ? "lg:col-start-1" : ""}`}
                    >
                      <div className="relative group">
                        <div
                          className="absolute inset-0 rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-500"
                          style={{ background: softMonoGradient(BRAND, 0.16) }}
                        />
                        <div
                          className="absolute inset-0 rounded-[3rem] -rotate-6 group-hover:-rotate-3 transition-transform duration-500"
                          style={{ background: softMonoGradient(BRAND, 0.08) }}
                        />

                        <Card className="relative border-0 shadow-2xl bg-white/90 backdrop-blur-sm rounded-[3rem] overflow-hidden group-hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                          <div className="aspect-[4/3] relative">
                            <img
                              src={solution.image}
                              alt={solution.title || solution.subtitle}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  </div>

                  {/* Separator */}
                  {index < solutions.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0.8 }}
                      whileInView={{
                        opacity: 1,
                        scaleX: 1,
                        transition: { ...MOTION_TIMING, delay: 0.1 },
                      }}
                      viewport={{ once: true, amount: 0.6 }}
                      className="h-px w-full"
                      style={{ backgroundColor: THEME.ring }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}