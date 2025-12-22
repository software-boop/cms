import React, { ReactNode, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* IMAGE IMPORTS */
/* ------------------------------------------------------------------ */

import india_image from "./scroll/125521.jpg";
import scrollsecond from './scroll/home1.jpg'
import scrollthird from './scroll/home2.jpg'

// icons
import strength from "./scroll/check.png";
import trust from "./scroll/trust.png";
import future from "./scroll/think_12430364.png";

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */

interface TextParallaxContentProps {
  imgUrl: StaticImageData;
  subheading: string;
  heading: string;
  children: ReactNode;
}

interface ExampleContentProps {
  title: string;
  paragraphOne: string;
  paragraphTwo: string;
  icon: StaticImageData;
}

/* ------------------------------------------------------------------ */
/* MAIN EXPORT */
/* ------------------------------------------------------------------ */

const TextParallaxContentExample: React.FC = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={india_image}
        subheading="AI • IoT • Surveillance Intelligence"
        heading="Intelligence at National Scale"
      >
        <ExampleContent
          icon={strength}
          title="Our Core Strength"
          paragraphOne="We don’t just deploy cameras — we deploy intelligence across India. Brihaspathi Technologies is nationally recognized for delivering AI-powered video analytics and AI-based security solutions that operate reliably at massive scale."
          paragraphTwo="From smart city surveillance and integrated command control centers to advanced AI analytics such as ANPR, facial recognition, intrusion detection, and real-time monitoring, our systems convert raw video into actionable intelligence that improves safety and decision-making."
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={scrollsecond}
        subheading="Elections • Borders • National Infrastructure"
        heading="Trusted When Failure Is Not an Option"
      >
        <ExampleContent
          icon={trust}
          title="Scale, Proof & Trust"
          paragraphOne="When the nation needs absolute reliability, governments and enterprises choose Brihaspathi."
          paragraphTwo="From General Elections to border security and national examinations, our systems operate where zero downtime and zero error are mandatory."
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={scrollthird}
        subheading="AI Security • Solar EPC • Make in India"
        heading="Engineering the Future — Secure, Smart, Sustainable"
      >
        <ExampleContent
          icon={future}
          title="Future-Ready Vision"
          paragraphOne="The future of infrastructure must be intelligent and sustainable — and we are building both."
          paragraphTwo="Backed by Make-in-India manufacturing, we are technology builders committed for the next 10–20 years."
        />
      </TextParallaxContent>
    </div>
  );
};

export default TextParallaxContentExample;

/* ------------------------------------------------------------------ */
/* CONSTANTS */
/* ------------------------------------------------------------------ */

const IMG_PADDING = 12;

/* ------------------------------------------------------------------ */
/* PARALLAX WRAPPER */
/* ------------------------------------------------------------------ */

const TextParallaxContent: React.FC<TextParallaxContentProps> = ({
  imgUrl,
  subheading,
  heading,
  children,
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy subheading={subheading} heading={heading} />
      </div>
      {children}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* STICKY IMAGE (FRAMER MOTION) */
/* ------------------------------------------------------------------ */

const StickyImage: React.FC<{ imgUrl: StaticImageData }> = ({ imgUrl }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-black/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/* OVERLAY COPY */
/* ------------------------------------------------------------------ */

const OverlayCopy: React.FC<{ subheading: string; heading: string }> = ({
  subheading,
  heading,
}) => {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white">
      <p className="mb-3 text-center text-lg md:text-3xl">{subheading}</p>
      <h1 className="text-center text-4xl font-bold md:text-7xl">
        {heading}
      </h1>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* CONTENT SECTION (GSAP ANIMATED) */
/* ------------------------------------------------------------------ */

const ExampleContent: React.FC<ExampleContentProps> = ({
  title,
  paragraphOne,
  paragraphTwo,
  icon,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(titleRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          imageRef.current,
          {
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          rightRef.current,
          {
            x: 120,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12"
    >
      {/* LEFT */}
      <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
        <h2 ref={titleRef} className="text-3xl font-bold">
          {title}
        </h2>
        <div ref={imageRef}>
          <Image
            src={icon}
            alt={title}
            width={200}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div ref={rightRef} className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          {paragraphOne}
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          {paragraphTwo}
        </p>
      </div>
    </div>
  );
};
