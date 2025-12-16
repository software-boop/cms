"use client";

import { SplineScene } from "@/components/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/spotlight";
import AIVMSHeroLeft from "./Surveillance";

const videoSrc =
  "https://ik.imagekit.io/tsuss6ulm/corpo%20video%202%20-.mp4";

export function SplineSceneBasic() {
  return (
    <Card className="relative w-full min-h-[100vh] md:min-h-[730px] overflow-hidden border-0 rounded-none">

      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* ================= OVERLAY GRADING ================= */}
      {/* Base dark overlay */}
      <div className="absolute inset-0 z-[1] bg-white/55" />

      {/* Brand blue cinematic tint */}
      <div className="absolute inset-0 z-[2] bg-white/80 mix-blend-multiply" />

      {/* Gradient depth overlay */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-b fromite via-white/40 to-white/80" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 z-[4] shadow-[inset_0_0_200px_rgba(0,0,0,0.75)]" />

      {/* ================= SPOTLIGHT ================= */}
      <Spotlight
        size={320}
        fill="#07518a"
        className="-top-40 left-1/2 -translate-x-1/2 md:left-60 md:translate-x-0 md:-top-20 z-10"
      />

      {/* ================= CONTENT ================= */}
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
