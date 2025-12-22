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
import DemoOnep from "@/components/homeabout/Demo";


import { ScrollingFeatureShowcase } from "@/components/Intractive";
import { HeroParallax } from "@/components/hero-parallal";
import { HeroParallaxDemo } from "@/components/About-parallel";
import DemoOne from "@/components/homeabout/heroaboutdemo";
import IndustriesSection from "@/components/homeabout/IndustriesSection";
import ProjectCard from "./projects/components/ProjectCard";
import IndiaBranchesMap from "@/components/homeabout/Indiabranch";
import { TestimonialCarousel } from "@/components/homeabout/bard";
import Indiawide from "@/components/homeabout/Indiawide";
import { Achievements, Process, Work } from "@/components/homeabout/Achiementsdemo";
import { Ourcapabilities } from "@/components/homeabout/our-capabilities";
import Clientvideo from "@/components/homeabout/Clientvideo";
import BTPL from "@/components/homeabout/Soline";

// import DemoOne from "@/components/gallareydemo";

export default function Home() {
  return (
    <div className=" bg-white 
    ">
      {/* <HeroSection/> */}
      {/* HERO SECTION */}
  
        <SplineSceneBasic />
          <DemoOne/>
   {/* <div className="">     <HeroParallaxDemo/></div> */}

 
   {/* <div className="h-22"></div> */}

        <ScrollingFeatureShowcase/>|
           
<Ourcapabilities/>
{/* <SolutionsSection/> */}

        <Whybrihaspathi />
<DemoOnep/>
        <Achievements/>
      
           <HoverSliderDemo />
        <IndustriesSection/>


 
       
   {/* HOVER SLIDER */}
      {/* <section className="w-full py-10 md:py-16 ">
      
      </section> */}
      {/* SOLUTIONS SECTION */}
      {/* <section className="w-full bg-black">
        <SolutionsSection />
      </section> */}

  

      {/* INTRO ANIMATION */}
       {/* <div className="w-full h-[800px] border rounded-lg overflow-hidden relative">
            <IntroAnimation />
        </div> */}

<Indiawide/>
{/* <IndiaBranchesMap/> */}
 <div className="min-h-screen flex items-center justify-center">
      <TestimonialCarousel />
    </div>
    <Clientvideo/>
      {/* TESTIMONIALS */}
      <section className="w-full py-10 md:py-16">
        <Testimonials />
      </section>

{/* <BTPL/> */}


      {/* FEATURE STEPS */}
      {/* <section className="w-full py-10 md:py-16">
        <FeatureStepsDemo />
      </section> */}


      {/* SHUFFLE HERO */}
      <section className="w-full px-4 md:px-10 py-10 md:py-16 flex justify-center">
        <ShuffleHero />
      </section>

      {/* WHY BRIHASPATHI */}
    

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

    </div>
  );
}
