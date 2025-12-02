import Image from "next/image";
import ScrollToGalleryButton from "../ScrollToGalleryButton";

interface EventDetailsProps {
  params: { documentId: string };
}

export default async function EventDetails({ params }: EventDetailsProps) {
  const { documentId } = params;

  const API_URL = `http://172.30.0.200:1334/api/events/${documentId}?populate=*`;
  const res = await fetch(API_URL, { cache: "no-store" });

  if (!res.ok)
    return <div className="p-10">⚠ Failed to load event</div>;

  const response = await res.json();
  const event = response?.data;

  if (!event)
    return <div className="p-10 text-red-600">❌ Event not found</div>;

  const data = event.attributes;

  // Resolve image URLs
  const resolveUrl = (img: any) => {
    if (!img?.data) return "/default-image.jpg";

    const file = img.data.attributes;
    const url =
      file.formats?.large?.url ||
      file.formats?.medium?.url ||
      file.formats?.small?.url ||
      file.url;

    return url.startsWith("http")
      ? url
      : `http://172.30.0.200:1334${url}`;
  };

  return (
    <div className="w-full mt-0.4">
      {/* Hero Banner */}
      <div className="relative w-full h-[70vh] rounded-b-3xl overflow-hidden shadow-lg m-10">
        <Image
          src={resolveUrl(data.mainImage)}
          alt={data.eventTitle}
          fill
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute bottom-6 left-6 text-white max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold">
            {data.eventTitle}
          </h1>

          <p className="text-sm mt-2">
            📅{" "}
            {new Date(data.eventDate).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}{" "}
            | {data.eventType}
          </p>

          <ScrollToGalleryButton />
        </div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          {data.eventDescription}
        </p>
      </div>

      {/* Gallery */}
      {data.eventGallery?.data?.length > 0 && (
        <div id="gallery" className="max-w-6xl mx-auto px-6 md:px-10 mt-14">
          <h2 className="text-3xl font-bold text-[#07518a] mb-6">
            📸 Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {data.eventGallery.data.map((img: any) => {
              const file = img.attributes;
              const url =
                file.formats?.medium?.url ||
                file.formats?.small?.url ||
                file.url;

              const finalUrl = url.startsWith("http")
                ? url
                : `http://172.30.0.200:1334${url}`;

              return (
                <Image
                  key={img.id}
                  src={finalUrl}
                  alt="Gallery Image"
                  width={500}
                  height={350}
                  unoptimized
                  className="object-cover w-full h-56 rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
