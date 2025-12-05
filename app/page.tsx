import Image from "next/image";



import HeroSection from "@/components/Herosection";
import SolutionsSection from "@/components/SolutionsSection";
import Testimonials from "@/components/Testimonials";
import Whybrihaspathi from '@/components/WhyChooseBrihaspathi'

export default function Home() {
  return (
    <div className="">
   
<HeroSection />
<div className="bg-black"><SolutionsSection/></div>
   
  <Testimonials/>

<Whybrihaspathi/>
    </div>
  );
}
