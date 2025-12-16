'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

/* ---------------- SLIDE DATA ---------------- */
import Bussolution from '@/components/Sollutionimages/image.png';

const slidesData = [
  {
    title: 'Generate Code with AI',
    description:
      'Describe your logic in plain English and watch as the AI generates clean, efficient code in seconds.',
    image: Bussolution,
    bgColor: '#07518a',
    textColor: '#ffffff',
  },
  {
    title: 'Debug and Refactor Smarter',
    description:
      'Paste your buggy code and let the AI identify errors, suggest improvements, and refactor it.',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop',
    bgColor: '#ffffff',
    textColor: '#07518a',
  },
  {
    title: 'Learn New Languages, Instantly',
    description:
      'Translate code snippets between languages and understand new paradigms instantly.',
    image:
      'https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1974&auto=format&fit=crop',
    bgColor: '#07518a',
    textColor: '#ffffff',
  },
  {
    title: 'Automate Your Workflow',
    description:
      'From documentation to unit tests, let AI handle repetitive tasks.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    bgColor: '#ffffff',
    textColor: '#07518a',
  },
];

/* ---------------- COMPONENT ---------------- */

export function ScrollingFeatureShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  const totalSlides = slidesData.length;

  /* ---------- SCROLL HANDLER ---------- */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      setIsUserScrolling(true);

      const index = Math.round(container.scrollTop / window.innerHeight);
      setActiveIndex(Math.min(index, totalSlides - 1));

      if (autoScrollTimer.current) {
        clearTimeout(autoScrollTimer.current);
      }

      autoScrollTimer.current = setTimeout(() => {
        setIsUserScrolling(false);
      }, 1200);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, [totalSlides]);

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    if (isUserScrolling) return;
    if (activeIndex >= totalSlides - 1) return;

    const container = containerRef.current;
    if (!container) return;

    const timer = setTimeout(() => {
      container.scrollTo({
        top: (activeIndex + 1) * window.innerHeight,
        behavior: 'smooth',
      });
    }, 3500);

    return () => clearTimeout(timer);
  }, [activeIndex, isUserScrolling, totalSlides]);

  /* ---------- DYNAMIC STYLE ---------- */
  const dynamicStyles = {
    backgroundColor: slidesData[activeIndex].bgColor,
    color: slidesData[activeIndex].textColor,
    transition: 'background-color 0.6s ease, color 0.6s ease',
  };

  /* ---------------- RENDER ---------------- */
  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-auto"
      style={{ scrollbarWidth: 'none' }}
    >
      <div style={{ height: `${totalSlides * 100}vh` }}>
        <div
          className="sticky top-0 h-screen flex items-center justify-center"
          style={dynamicStyles}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl h-full">
            {/* LEFT CONTENT */}
            <div className="relative flex flex-col justify-center px-8 md:px-16 border-r border-black/10">
              {/* Pagination */}
              <div className="absolute top-16 left-16 flex gap-2">
                {slidesData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      containerRef.current?.scrollTo({
                        top: i * window.innerHeight,
                        behavior: 'smooth',
                      })
                    }
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === activeIndex
                        ? 'w-12 bg-black'
                        : 'w-6 bg-black/30'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <div className="relative h-64">
                {slidesData.map((slide, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-700 ${
                      i === activeIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h2 className="text-5xl md:text-6xl font-bold">
                      {slide.title}
                    </h2>
                    <p className="mt-6 max-w-md text-lg">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="absolute bottom-16 left-16">
                <a
                  href="#get-started"
                  className="px-10 py-4 bg-black text-white rounded-full font-semibold uppercase tracking-wide hover:bg-gray-800 transition"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden md:flex items-center justify-center">
              <Card className="w-[100%] h-[100vh] overflow-hidden shadow-2xl">
                <CardContent className="p-0 h-full">
                  <div
                    className="h-full w-full transition-transform duration-700"
                    style={{
                      transform: `translateY(-${activeIndex * 100}%)`,
                    }}
                  >
                    {slidesData.map((slide, i) => (
                      <div key={i} className="relative h-full w-full">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-contain"
                          priority={i === 0}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
