import Link from "next/link";
import { getAllSectors } from "./data";

export const metadata = {
  title: "Case Studies",
};

export default function CaseStudyHome() {
  const sectors = getAllSectors();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {sectors.map((sector) => (
          <Link
            key={sector.slug}
            href={`/casestudy/${sector.slug}`}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold capitalize">
              {sector.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
