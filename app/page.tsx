import Image from "next/image";



import HeroSection from "@/components/Herosection";
import SolutionsSection from "@/components/SolutionsSection";
import Testimonials from "@/components/Testimonials";
import Whybrihaspathi from '@/components/WhyChooseBrihaspathi'
import Weserve from "@/components/Weserve";
import ClientsMarqueeHero from "@/components/ClientsMarqueeHero";
import CertificationsGrid5 from "@/components/Certificatiions";
import { HoverSliderDemo } from "@/components/HoverSliderDemo";
// import SketchfabEmbed from "@/components/SketchfabEmbed";
import { FeatureStepsDemo } from "@/components/Demo";
import { ShuffleHero } from "@/components/ShuffleHero";

export default function Home() {
  return (
    <div className="overflow-x-hidden px-0 m-0 ">
   
<HeroSection />
<div className="bg-black"><SolutionsSection/></div>
   
   <HoverSliderDemo/>
  <Testimonials/>
 {/* <div className="p-6">
      <SketchfabEmbed
        modelId="571baf9cfcd74cc69eaa22d423678b25"
        title="Tour IA"
        height="600px"
      />
    </div> */}
    <FeatureStepsDemo/>
   <div className="flex px-10 w-full h-full space-x-10 ">
      <ShuffleHero />
    </div>
<Whybrihaspathi/>
<Weserve/>
<ClientsMarqueeHero/>

<CertificationsGrid5/>
    </div>
  );
}
