"use client";

import Image from "next/image";


import SolutionsSection from "@/components/SolutionsSection";
import Testimonials from "@/components/Testimonials";

import Whybrihaspathi from "@/components/WhyChooseBrihaspathi";
import Weserve from "@/components/Weserve";
import ClientsMarqueeHero from "@/components/ClientsMarqueeHero";
import CertificationsGrid5 from "@/components/Certificatiions";
import { HoverSliderDemo } from "@/components/HoverSliderDemo";
import { FeatureStepsDemo } from "@/components/Demo";
import { ShuffleHero } from "@/components/ShuffleHero";
import IntroAnimation from "@/components/IntroAnimation";
import { SplineSceneBasic } from "@/components/Aidemo";
// import DemoOne from "@/components/gallareydemo";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-white ">
      {/* <HeroSection/> */}
      {/* HERO SECTION */}
      <section className="w-full mb-48">
        <SplineSceneBasic />
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="w-full bg-black">
        <SolutionsSection />
      </section>

      {/* HOVER SLIDER */}
      <section className="w-full py-10 md:py-16">
        <HoverSliderDemo />
      </section>

      {/* INTRO ANIMATION */}
       <div className="w-full h-[800px] border rounded-lg overflow-hidden relative">
            <IntroAnimation />
        </div>

      {/* TESTIMONIALS */}
      <section className="w-full py-10 md:py-16">
        <Testimonials />
      </section>

      {/* FEATURE STEPS */}
      <section className="w-full py-10 md:py-16">
        <FeatureStepsDemo />
      </section>

      {/* SHUFFLE HERO */}
      <section className="w-full px-4 md:px-10 py-10 md:py-16 flex justify-center">
        <ShuffleHero />
      </section>

      {/* WHY BRIHASPATHI */}
      <section className="w-full py-10 md:py-16">
        <Whybrihaspathi />
      </section>

      {/* WE SERVE */}
      <section className="w-full py-10 md:py-16">
        <Weserve />
      </section>

{/* <DemoOne/> */}
      {/* CLIENTS MARQUEE */}
      <section className="w-full py-10 md:py-16">
        <ClientsMarqueeHero />
      </section>

      {/* CERTIFICATIONS */}
      <section className="w-full py-10 md:py-16">
        <CertificationsGrid5 />
      </section>

    </main>
  );
}
