"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ScrollToGalleryButton() {
  const handleScroll = () => {
    const section = document.getElementById("gallery");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleScroll}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-shadow shadow-lg hover:shadow-xl"
    >
      📸 View More Images
    </motion.button>
  );
}
