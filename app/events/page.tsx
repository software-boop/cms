"use client";

import React, { useEffect } from "react";
import useSWR from "swr";
import EventCard from "./EventCard";
import { motion, AnimatePresence } from "framer-motion";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function EventsPage() {
  const { data, error } = useSWR(
    "http://172.30.0.200:1334/api/events?populate=*",
    fetcher
  );

  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (error)
    return <div className="p-10 text-red-600">❌ Failed to load events.</div>;

  if (!data?.data)
    return <div className="p-10 text-gray-500 animate-pulse">⏳ Loading events...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <motion.h1
        className="text-3xl font-bold text-[#07518a] mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Events
      </motion.h1>

      {/* Cards with animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {data.data.map((event: any, idx: number) => (
            <motion.div
              key={event.documentId}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1, // Stagger animation
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="w-full"
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
