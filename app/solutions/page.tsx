// app/solutions/page.tsx

import Link from "next/link";
import { allSolutions } from "./data";

export const metadata = {
  title: "Solutions - Our Innovative Offerings",
  description:
    "Explore our range of smart solutions for transportation, security, energy, biometrics, and enterprise management.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover cutting-edge solutions designed to transform industries
            with AI, IoT, and sustainable technologies.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSolutions.map((solution) => (
            <div
              key={solution.slug}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h2>

                {solution.description && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {solution.description}
                  </p>
                )}

                <Link
                  href={`/solutions/${solution.slug}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
