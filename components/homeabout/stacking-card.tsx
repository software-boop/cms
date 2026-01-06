'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectData {
  title: string;
  description: string;
  link: StaticImageData | string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: StaticImageData | string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(2vh + ${i * 20}px)`, // Adjusted for better stacking overlap
        }}
        className="flex flex-col relative h-[500px] md:h-[550px] w-full max-w-[1000px] rounded-3xl p-6 md:p-12 origin-top shadow-2xl overflow-hidden"
      >
        {/* Card Title - Mobile optimized */}
        <h2 className="text-2xl md:text-4xl text-center font-bold mb-4 md:mb-8 text-white">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row h-full gap-6 md:gap-12 overflow-hidden">
          {/* Text Content */}
          <div className="w-full md:w-[45% ] flex flex-col justify-center order-2 md:order-1">
            <p className="text-base md:text-xl leading-relaxed text-white/90 font-light">
              {description}
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 self-start px-6 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-lg transition-colors hover:bg-opacity-90"
            >
              Explore Solution
            </motion.button>
          </div>

          {/* Image Container - Visual focus */}
          <div className="relative w-full md:w-[55%] h-[200px] md:h-full rounded-2xl overflow-hidden order-1 md:order-2">
            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
            >
              <Image
                src={url}
                alt={title}
                fill
                className="object-cover md:object-contain"
                priority={i === 0}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className="bg-[#f8f9fa]" ref={container}>
        {/* Capability Hero Header */}
        <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-white text-[#07518a] overflow-hidden px-6 lg:px-12">
          {/* Premium Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
          
          <div className="relative z-10 max-w-5xl text-center space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#07518a]/10 text-xs md:text-sm font-bold uppercase tracking-widest"
            >
              Our Expertise
            </motion.span>
            
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-7xl font-bold tracking-tight text-gray-900"
            >
              Our Capabilities
            </motion.h1>
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
            >
              At <span className="font-semibold text-[#07518a]">Brihaspathi Technologies</span>, we deliver end-to-end technology solutions that secure, connect, and power the world’s most mission-critical infrastructures.
            </motion.p>
          </div>
        </section>

        {/* Dynamic Card Section */}
        <section className="pb-[10vh]">
          {projects.map((project, i) => {
            // Adjust the scroll range based on number of projects for smoother transition
            const rangeStart = i * (1 / projects.length);
            const targetScale = 1 - (projects.length - i) * 0.04;
            
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[rangeStart, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        {/* Footer Accent */}
       
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;