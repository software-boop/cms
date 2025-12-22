"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PeopleCultureSection from "./PeopleCultureSection";
import CertificationsSection from "./CertificationsSection";



gsap.registerPlugin(ScrollTrigger);

const backgroundImage =
  "/dark-blue-digital-grid-png-technology-background.png";
const logo = "/highbtlogo white- tm.png";

const BRAND = "#07518a";
const ACCENT = "#f59e0b";

export default function Who() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () =>
        `+=${rightRef.current!.offsetHeight - window.innerHeight}`,
      pin: leftRef.current,
      pinSpacing: true,
      scrub: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[#07518a]/85" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* LEFT — PINNED */}
          <div
            ref={leftRef}
            className="lg:col-span-4 pt-24 pb-24"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-1 w-6 rounded-full bg-orange-400" />
              <span className="text-xs uppercase tracking-widest text-orange-300">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
              The Guru of <br />
              <span className="text-orange-300">
                Tomorrow’s Technology
              </span>
            </h2>

            <img
              src={logo}
              alt="Brihaspathi Logo"
              className="mt-6 w-44 opacity-90"
            />
          </div>

          {/* RIGHT — SCROLLING */}
          <div
            ref={rightRef}
            className="lg:col-span-8 pt-24 pb-40 space-y-16"
          >
            <p className="text-lg md:text-xl leading-relaxed text-blue-100">
              <strong className="text-white">
                Brihaspathi Technologies Limited (BTL)
              </strong>{" "}
              is a premier digital transformation and sovereign security partner
              for industry-leading organizations and government entities. Since{" "}
              <span className="text-orange-300 font-semibold">2006</span>, we
              have pioneered the{" "}
              <span className="text-white font-semibold">
                Make in India
              </span>{" "}
              movement in high-tech surveillance and IoT.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-blue-100">
              Rooted in a legacy of trust, we create long-term value for our{" "}
              <span className="text-orange-300 font-semibold">
                300+ specialists
              </span>
              , clients, and communities. Our infrastructure includes a
              state-of-the-art manufacturing facility in{" "}
              <span className="text-white font-semibold">Siddipet</span>, backed
              by operations across{" "}
              <span className="text-white font-semibold">
                India, USA, and Dubai
              </span>
              .
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-blue-100">
              Our partnerships endure across technology cycles — from early web
              engineering in the mid-2000s to today’s{" "}
              <span className="text-orange-300 font-semibold">
                Generative AI
              </span>{" "}
              and{" "}
              <span className="text-orange-300 font-semibold">
                Thermal IoT solutions
              </span>
              — enabling enterprises and nations to remain resilient and
              secure.
            </p>

            {/* CTA */}
       
          </div>
        </div>
  <PeopleCultureSection/>
  <CertificationsSection/>
      </div>
    
    </section>
  );
}
