"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { servicesData } from "./servicesdata";

export default function ServicesGrid() {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      {/* Header */}
      <div className="mb-12 max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-[#0518a7]">
          Services
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
          Our Services
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Comprehensive technology solutions designed to secure, connect, and
          empower institutions, enterprises, and governments at scale.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <button
            key={service.slug}
            onClick={() => router.push(`/our-services/${service.slug}`)}
            className="group text-left rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative h-48 bg-slate-100">
              {service.mainimage ? (
                <Image
                  src={service.mainimage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-400 text-sm">
                  Image Coming Soon
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-[#0518a7]">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-[#0518a7]">
                View Service →
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
