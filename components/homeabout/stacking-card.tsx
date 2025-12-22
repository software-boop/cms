// component.tsx
'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';

import Image, { StaticImageData } from 'next/image';
interface ProjectData {
  title: string;
  description: string;
  link: StaticImageData|string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
url: StaticImageData|string;
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

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top`}
      >
        <h2 className='text-2xl text-center font-semibold'>{title}</h2>
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`w-[40%] relative top-[10%]`}>
            <p className='text-xl'>{description}</p>
            {/* <span className='flex items-center gap-2 pt-2'>
              <a
                href={'#'}
                target='_blank'
                className='underline cursor-pointer'
              >
                See more
              </a>
              <svg
                width='22'
                height='12'

                viewBox='0 0 22 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                  fill='black'
                />
              </svg>
            </span> */}
          </div>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image
                src={url}
                alt={title}
                fill
                className="object-contain rounded-2xl"
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
      <main className='bg-black' ref={container}>
        <>
       <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-white text-[#07518a] overflow-hidden px-4 sm:px-6 lg:px-12"> {/* Background Grid */} <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_70%,transparent_100%)]"></div> {/* Content */} <div className="relative z-10 max-w-5xl text-center space-y-6 sm:space-y-8"> <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold tracking-tight leading-tight"> Our Capabilities </h1> <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#07518a]/90 max-w-4xl mx-auto"> At <span className="font-semibold">Brihaspathi Technologies</span>, we deliver <span className="font-semibold"> end-to-end technology solutions</span> that secure, connect, automate, and power organizations across India and beyond. Backed by <span className="font-semibold">18+ years of expertise</span>, in-house manufacturing, and large-scale execution capability, we transform complex challenges into <span className="font-semibold">reliable, future-ready solutions</span>. </p> {/* Highlight Line */} <p className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#07518a]/70"> Security • AI • IoT • Software • Manufacturing • Renewable Energy </p> </div> </section>
        </>

        <section className='text-white w-full bg-white '>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        {/* <footer className='group bg-sl'>
          <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            ui-layout
          </h1>
          <div className='bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
        </footer> */}
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;