// app/solutions/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import {
  getSolution,
  getAllSolutionSlugs,
  Section,
  SubPoint,
  Component,
  FeatureList,
} from "../data";

/* ================= STATIC PARAMS ================= */
/* 🔧 Adapt { params: { slug } } → { slug } */

export function generateStaticParams() {
  return getAllSolutionSlugs().map((item) => ({
    slug: item.params.slug,
  }));
}

/* ================= METADATA ================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return { title: "Solution Not Found" };
  }

  return {
    title: `${solution.title} | Solutions`,
    description:
      solution.description ??
      `Explore features and benefits of ${solution.title}.`,
  };
}

/* ================= RENDER HELPERS ================= */

function renderSubPoints(subPoints?: SubPoint[]) {
  if (!subPoints) return null;

  return (
    <ul className="space-y-3 mt-4">
      {subPoints.map((point, idx) => (
        <li key={idx} className="flex gap-3">
          <span className="text-blue-600 font-bold">•</span>
          <div>
            <h4 className="font-semibold text-gray-900">{point.title}</h4>
            <p className="text-gray-600">{point.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function renderComponents(components?: Component[]) {
  if (!components) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {components.map((comp, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-md border border-gray-200"
        >
          <h4 className="font-semibold text-gray-900">{comp.name}</h4>
          <p className="text-gray-600 mt-1">{comp.description}</p>
        </div>
      ))}
    </div>
  );
}

function renderFeatureLists(featureLists?: FeatureList[]) {
  if (!featureLists) return null;

  return (
    <div className="mt-4">
      {featureLists.map((list, idx) => (
        <div key={idx} className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">
            {list.title}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {list.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ================= SECTION RENDER ================= */

function RenderSection({ section }: { section: Section }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {section.title}
      </h2>

      {section.description && (
        <p className="text-gray-700 mb-4 leading-relaxed">
          {section.description}
        </p>
      )}

      {renderSubPoints(section.subPoints)}
      {renderComponents(section.components)}
      {renderFeatureLists(section.featureLists)}

      {section.subsections?.map((sub, idx) => (
        <div
          key={idx}
          className="mt-8 pl-5 border-l-2 border-gray-200"
        >
          <RenderSection section={sub} />
        </div>
      ))}
    </section>
  );
}

/* ================= PAGE ================= */

export default async function SolutionDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {solution.title}
          </h1>
          {solution.description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {solution.description}
            </p>
          )}
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto">
          {solution.subsections?.map((section, idx) => (
            <RenderSection key={idx} section={section} />
          ))}
        </div>

        {/* BACK LINK */}
        <div className="text-center mt-16">
          <Link
            href="/solutions"
            className="inline-block bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            ← Back to All Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
