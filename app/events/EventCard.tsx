"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
const BRAND = "#07518a";
// Types
interface ImageFormat {
  url: string;
}

interface EventImage {
  url: string;
  formats?: {
    large?: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
    thumbnail?: ImageFormat;
  };
}

interface EventData {
  documentId: string;
  eventTitle: string;
  eventType: string;
  eventDate: string;
  eventDescription: string;
  mainImage: EventImage;
  eventGallery?: EventImage[];
}

interface Props {
  event: EventData;
}

export default function EventCard({ event }: Props) {
  // Combine safely
  const galleryImages = useMemo(
    () =>
      [event.mainImage, ...(event?.eventGallery || [])].filter(Boolean),
    [event.mainImage, event.eventGallery]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Image resolver
  const resolveUrl = (img?: EventImage) => {
    if (!img) return "/default-image.jpg";

    const url =
      img?.formats?.large?.url ||
      img?.formats?.medium?.url ||
      img?.formats?.small?.url ||
      img?.formats?.thumbnail?.url ||
      img?.url ||
      "/default-image.jpg";

    return url.startsWith("http")
      ? url
      : `http://172.30.0.200:1334${url}`;
  };

  const currentImage = galleryImages[selectedIndex] || galleryImages[0];

  return (
    <div className="group bg-white flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative lg:w-[60%] bg-gradient-to-br from-gray-50 to-gray-100">
        <Link href={`/events/${event.documentId}`} className="block">
          <div className="relative w-full h-[260px] md:h-[330px] lg:h-[400px] overflow-hidden">
            <Image
              src={resolveUrl(currentImage)}
              alt={event.eventTitle}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Thumbnail Strip */}
        {galleryImages.length > 1 && (
          <div className="flex lg:flex-col gap-2 absolute bottom-4 left-4 lg:left-auto lg:bottom-auto lg:top-4 lg:right-4 bg-white/60 backdrop-blur-md p-3 rounded-xl max-h-[300px] overflow-auto no-scrollbar border border-gray-200">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedIndex(idx);
                }}
                className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                  idx === selectedIndex
                    ? "ring-4 ring-blue-600 shadow-lg"
                    : "opacity-80 hover:opacity-100 hover:scale-105"
                }`}
              >
                <Image
                  src={resolveUrl(img)}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="w-full lg:w-[40%] p-6 md:p-8 flex flex-col justify-between text-white" style={{backgroundColor:BRAND}}>
        <div>
          {/* Badge and Date */}
          <div className="flex items-center justify-between mb-4 text-white">
          
            {/* <span className="text-sm text-gray-500 flex items-center">
              📅&nbsp;
              {new Date(event.eventDate).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span> */}
          </div>

          {/* Title */}
          <Link href={`/events/${event.documentId}`}>
            <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-white capitalize transition line-clamp-2">
              {event.eventTitle}
            </h2>
          </Link>

          {/* Description */}
          <p className="mt-3 text-white text-sm md:text-base line-clamp-4 leading-relaxed">
            {event.eventDescription}
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 pt-4 flex items-center justify-between border-t border-gray-100">
         
          <Link
            href={`/events/${event.documentId}`}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition shadow-md hover:shadow-lg active:scale-95"
          >
            View Details
            <span className="ml-2 text-lg">➜</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
