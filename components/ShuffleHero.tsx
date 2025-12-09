"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// ------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------
export const ShuffleHero = () => {
  return (
    <section className="w-full px-0 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-56 max-w-6xl mx-auto  ">
      <div>
        <span className="block mb-4 text-xs md:text-sm  font-medium text-[#07518a]">
          Better every day
        </span>

        <h3 className="text-4xl md:text-6xl font-semibold text-[#07518a]">
          Let's change it up a bit
        </h3>

        <p className="text-base md:text-lg text-muted-foreground my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>

        <button
          className={cn(
            "bg-[#07518a] text-white font-medium py-2 px-4 rounded-md",
            "transition-all hover:bg-primary/90 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          News
        </button>
      </div>

      <ShuffleGrid />
    </section>
  );
};

// ------------------------------------------------------------
// SHUFFLE FUNCTION
// ------------------------------------------------------------
const shuffle = <T,>(array: T[]): T[] => {
  const arr = [...array];
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};

// ------------------------------------------------------------
// YOUR IMAGES INSERTED HERE 🔥
// ------------------------------------------------------------
const squareData = [
  { id: 1, src: "https://ik.imagekit.io/tsuss6ulm/Samarth%20Rashtra,%20P-8,%20Nov%2021.jpg" },
  { id: 2, src: "https://ik.imagekit.io/tsuss6ulm/Nai%20Soch%20Express,%20P-2,%20Nov%2024.jpg" },
  { id: 3, src: "https://ik.imagekit.io/tsuss6ulm/Taasir,%20P-3,%20Nov%2022.jpg" },
  { id: 4, src: "https://ik.imagekit.io/tsuss6ulm/Hamara%20Samaj,%20P-3,%20Nov%2022.jpg" },
  { id: 5, src: "https://ik.imagekit.io/tsuss6ulm/Sanmarg,%20P-2,%20Nov%2024.jpg" },
  { id: 6, src: "https://ik.imagekit.io/tsuss6ulm/Jagriti%20Times,%20P-3,%20Nov%2024.jpg" },
  { id: 7, src: "https://ik.imagekit.io/tsuss6ulm/Sampurn%20Bharat,%20P-2,%20Nov%2024.jpg" },
  { id: 8, src: "https://ik.imagekit.io/tsuss6ulm/Satta%20Ki%20Khoj,%20P-2,%20Nov%2024.jpg" },
  { id: 9, src: "https://ik.imagekit.io/tsuss6ulm/Mithila%20Gaurav,%20P-3,%20Nov%2022.jpg" },
  { id: 10, src: "https://ik.imagekit.io/tsuss6ulm/Bihar%20Din%20Raat,%20P-8,%20Nov%2021.jpg" },

  // Additional 6 from your gallery
  { id: 11, src: "https://ik.imagekit.io/waxuvuasch/news/1.jpeg" },
  { id: 12, src: "https://ik.imagekit.io/waxuvuasch/news/2.jpeg" },
  { id: 13, src: "https://ik.imagekit.io/waxuvuasch/news/3.jpeg" },
  { id: 14, src: "https://ik.imagekit.io/waxuvuasch/news/4.jpeg" },
  { id: 15, src: "https://ik.imagekit.io/waxuvuasch/news/5.jpeg" },
  { id: 16, src: "https://ik.imagekit.io/waxuvuasch/news/6.jpeg" },
];

// ------------------------------------------------------------
// GRID BUILDER (16 items, shuffled every time)
// ------------------------------------------------------------
const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md overflow-hidden bg-muted"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));
};

// ------------------------------------------------------------
// SHUFFLE GRID COMPONENT
// ------------------------------------------------------------
const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000); // reshuffle every 3 sec
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2
    ">
      {squares}
    </div>
  );
};
