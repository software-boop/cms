"use client";

import { SplineScene } from "@/components/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/spotlight";
import AIVMSHeroLeft from "./Surveillance";

const videoSrc =
  "https://ik.imagekit.io/25nablagi/GettyImages-1134199160.mov";

export function SplineSceneBasic() {
  return (
    <Card className="relative w-full min-h-[100vh] md:min-h-[730px] overflow-hidden border-0 rounded-none">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <Spotlight
        size={320}
        fill="#07518a"
          //  fill="black"
        className="-top-40 left-1/2 -translate-x-1/2 md:left-60 md:translate-x-0 md:-top-20 z-10"
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto h-full px-5 sm:px-8 lg:px-12 pt-[85px] flex flex-col lg:flex-row items-center">
        <AIVMSHeroLeft />

        <div className="w-full lg:w-1/2 h-[320px] sm:h-[380px] md:h-[460px] lg:h-[620px] sm:mt-20 mt-10 lg:mt-20 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}

