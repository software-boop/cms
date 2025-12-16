import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseStudy } from "../../data";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ sectorSlug: string; caseSlug: string }>;
}) {
  // ✅ unwrap params
  const { sectorSlug, caseSlug } = await params;

  const study = getCaseStudy(sectorSlug, caseSlug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-14">
      <div className="max-w-4xl mx-auto">
        <Link
          href={`/casestudy/${sectorSlug}`}
          className="text-blue-600 mb-6 inline-block"
        >
          ← Back to sector
        </Link>

        <div className="bg-white rounded-xl p-8 shadow">
          <h1 className="text-3xl font-bold mb-2">{study.name}</h1>
          <p className="text-gray-500 mb-6">
            {study.company} • {study.role}
          </p>

          <Section title="Challenges" items={study.challenges} />
          <Section title="Solutions" items={study.solutions} />
          <Section title="Results" items={study.results} />

          {study.pdf && (
            <a
              href={study.pdf}
              target="_blank"
              className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded"
            >
              Download PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items?.length) return null;
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </section>
  );
}
