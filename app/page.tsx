import Image from "next/image";



import HeroSection from "@/components/Herosection";
import SolutionsSection from "@/components/SolutionsSection";


export default function Home() {
  return (
    <div className="">
   
<HeroSection />
<div className="bg-black"><SolutionsSection/></div>
   
  
    </div>
  );
}
