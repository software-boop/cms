



import Image from "next/image";
import ScrollToGalleryButton from "../ScrollToGalleryButton";

interface EventDetailsProps {
  params: Promise<{ documentId: string }>;
}

export default async function EventDetails({ params }: EventDetailsProps) {
  const { documentId } = await params;

  const API_URL = `http://172.30.0.200:1334/api/events/${documentId}?populate=*`;
  const res = await fetch(API_URL, { cache: "no-store" });

  if (!res.ok) return <div className="p-10">⚠ Failed to load event</div>;

  const eventResponse = await res.json();
  const event = eventResponse?.data;

  if (!event) return <div className="p-10 text-red-600">❌ Event not found</div>;

  // 🔹 Image URL resolver
  const resolveUrl = (img?: any) => {
    const url =
      img?.formats?.large?.url ||
      img?.formats?.medium?.url ||
      img?.formats?.small?.url ||
      img?.url ||
      "/default-image.jpg";

    return url.startsWith("http") ? url : `http://172.30.0.200:1334${url}`;
  };

  return (
    <div className="w-full mt-0.4">
      {/* 🔥 Hero Banner */}
      <div className="relative w-full h-[70vh] rounded-b-3xl overflow-hidden shadow-lg m-10">
        <Image
          src={resolveUrl(event.mainImage)}
          alt={event.eventTitle}
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Overlay Text */}
        <div className="absolute bottom-6 left-6 text-white max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold">{event.eventTitle}</h1>
          <p className="text-sm mt-2">
            📅{" "}
            {new Date(event.eventDate).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}{" "}
            | {event.eventType}
          </p>

          {/* 🔹 Client component button */}
          <ScrollToGalleryButton />
        </div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          {event.eventDescription}
        </p>
      </div>

      {/* Gallery Section */}
      {event.eventGallery?.length > 0 && (
        <div id="gallery" className="max-w-6xl mx-auto px-6 md:px-10 mt-14">
          <h2 className="text-3xl font-bold text-[#07518a] mb-6">📸 Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {event.eventGallery.map((img: any) => (
              <Image
                key={img.documentId}
                src={resolveUrl(img)}
                alt="Event"
                width={500}
                height={350}
                unoptimized
                className="object-cover w-full h-56 rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
