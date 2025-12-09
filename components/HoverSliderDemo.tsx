"use client";

import * as React from "react";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "./animated-slideshow";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ecommunication from './Serviceimages/260.jpg' 

import ssoftware from './Serviceimages/software.jpg'

import it from './Serviceimages/ethernet-switch (1).jpg'

import security from './Serviceimages/security.jpg' 

import home_from from './Serviceimages/Home Automation.jpg'

const SLIDES = [
  { id: "1", title: "E-Communication", imageUrl: ecommunication},
  { id: "2", title: "Software-Services", imageUrl: ssoftware },
  { id: "3", title: "IT & Telecom-Services", imageUrl: it },
  { id: "4", title: "Security-Services", imageUrl: security },
  { id: "5", title: "Home-Automation-&-Iot-services", imageUrl: home_from },
];

export function HoverSliderDemo() {
  // Scroll Reveal trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <HoverSlider className="min-h-svh place-content-center p-6 md:px-12 text-[#07518a] ">
        <h3 className="mb-6 uppercase tracking-wide text-[#07518a] text-center text-4xl font-bold">
          our services
        </h3>

        <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
          {/* LEFT TEXT LIST */}
          <div className="flex flex-col space-y-10">
            {SLIDES.map((slide, index) => (
              <TextStaggerHover
                key={slide.id}
                index={index}
                text={slide.title}
                className="text-4xl md:text-5xl font-bold uppercase tracking-tight"
              />
            ))}
          </div>

          {/* RIGHT IMAGE DISPLAY */}
          <HoverSliderImageWrap className="max-w-md max-h-96 rounded-xl overflow-hidden shadow-lg">
            {SLIDES.map((slide, index) => (
              <HoverSliderImage
                key={slide.id}
                index={index}
                src={slide.imageUrl.src}
                alt={slide.title}
                className="object-cover"
              />
            ))}
          </HoverSliderImageWrap>
        </div>
      </HoverSlider>
    </motion.div>
  );
}
