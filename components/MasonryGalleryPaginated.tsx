"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  FC
} from "react";

import { useTransition, animated, useSpring } from "@react-spring/web";
import { Pagination } from "antd";

import {
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";

import "antd/dist/reset.css";

/* ----------------------------------------------------------
   TYPES
---------------------------------------------------------- */
interface ImageItem {
  id: number;
  image: string;
  height: number;
}

interface GridItem extends ImageItem {
  x: number;
  y: number;
  width: number;
}

interface SmartImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  onLoadFail?: () => void;
}

interface PreviewModalProps {
  images: ImageItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: "next" | "prev" | number) => void;
}

/* ----------------------------------------------------------
   CONSTANTS
---------------------------------------------------------- */
const HEIGHTS = [220, 260, 300, 340, 380, 420];

/* ----------------------------------------------------------
   IMAGE DATA BUILDERS
---------------------------------------------------------- */
const latestNewsImages: string[] = [
  "https://ik.imagekit.io/tsuss6ulm/Samarth%20Rashtra,%20P-8,%20Nov%2021.jpg",
  "https://ik.imagekit.io/tsuss6ulm/Nai%20Soch%20Express,%20P-2,%20Nov%2024.jpg",
  "https://ik.imagekit.io/tsuss6ulm/Taasir,%20P-3,%20Nov%2022.jpg",
  "https://ik.imagekit.io/tsuss6ulm/Hamara%20Samaj,%20P-3,%20Nov%2022.jpg",
  "https://ik.imagekit.io/tsuss6ulm/Sanmarg,%20P-2,%20Nov%2024.jpg",
  "https://ik.imagekit.io/tsuss6ulm/Jagriti%20Times,%20P-3,%20Nov%2024.jpg",
  "https://ik.imagekit.io/tsuss6ulm/Sampurn%20Bharat,%20P-2,%20Nov%2024.jpg",
  "https://ik.imagekit.io/tsuss6ulm/Satta%20Ki%20Khoj,%20P-2,%20Nov%2024.jpg",
  "https://ik.imagekit.io/tsuss6ulm/Mithila%20Gaurav,%20P-3,%20Nov%2022.jpg",
  "https://ik.imagekit.io/tsuss6ulm/Bihar%20Din%20Raat,%20P-8,%20Nov%2021.jpg",
];

function buildLatestImages(): ImageItem[] {
  return latestNewsImages.map((url, index) => ({
    id: 1000 + index,
    image: url,
    height: HEIGHTS[index % HEIGHTS.length],
  }));
}

function buildBaseImages(count = 96): ImageItem[] {
  const baseURL = "https://ik.imagekit.io/waxuvuasch/news";

  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    const ext = id <= 82 ? "jpeg" : "jpg";

    return {
      id,
      image: `${baseURL}/${id}.${ext}`,
      height: HEIGHTS[i % HEIGHTS.length],
    };
  });
}

function buildMasonryData(): ImageItem[] {
  return [...buildLatestImages(), ...buildBaseImages()];
}

/* ----------------------------------------------------------
   SMART IMAGE
---------------------------------------------------------- */
const SmartImage: FC<SmartImageProps> = ({
  src,
  alt,
  onLoadFail,
  onClick,
  ...props
}) => {
  const [current, setCurrent] = useState(src || "");
  const [visible, setVisible] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const triedJpg = useRef(false);

  if (!visible) return null;

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}

      <img
        {...props}
        src={current}
        alt={alt}
        onClick={onClick}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        // onError={() => {
        //   if (!triedJpg.current && /\.jpeg$/i.test(current)) {
        //     triedJpg.current = true;
        //     setCurrent(current.replace(/\.jpeg$/i, ".jpg"));
        //   } else {
        //     setVisible(false);
        //     onLoadFail?.();
        //   }
        // }}

  

        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 cursor-pointer 
        ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      />
    </div>
  );
};

/* ----------------------------------------------------------
   PREVIEW MODAL
---------------------------------------------------------- */
const ImagePreviewModal: FC<PreviewModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentImage = images[currentIndex];

  const modalAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });
  const imageAnimation = useSpring({
    opacity: 1,
    transform: `scale(${zoom})`,
    from: { opacity: 0, transform: "scale(0.95)" },
  });

  /* ---- FIXED Keyboard Handler (No TypeScript errors) ---- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate("prev");
      if (e.key === "ArrowRight") onNavigate("next");
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNavigate]);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = currentImage.image;
    a.download = `news-${currentImage.id}.jpg`;
    a.click();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <animated.div
      style={modalAnimation}
      className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-[9999]"
      onClick={onClose}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-center">
        <h2 className="text-white text-lg font-semibold">
          Preview {currentIndex + 1} / {images.length}
        </h2>

        <button
          className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X />
        </button>
      </div>

      {/* Image */}
      <div
        className="flex-1 flex items-center justify-center px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <animated.img
          src={currentImage.image}
          alt="preview-img"
          style={imageAnimation}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 flex items-center gap-4">
        <button
          className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            setZoom((p) => Math.max(0.5, p - 0.3));
          }}
        >
          <ZoomOut />
        </button>

        <button
          className="px-4 py-3 bg-white/20 hover:bg-white/40 text-white rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            setZoom(1);
          }}
        >
          {Math.round(zoom * 100)}%
        </button>

        <button
          className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            setZoom((p) => Math.min(3, p + 0.3));
          }}
        >
          <ZoomIn />
        </button>

        <button
          className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            toggleFullscreen();
          }}
        >
          <Maximize2 />
        </button>

        <button
          className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            handleDownload();
          }}
        >
          <Download />
        </button>
      </div>

      {/* Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate("prev");
          setZoom(1);
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/40 rounded-full text-white"
      >
        <ChevronLeft size={34} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate("next");
          setZoom(1);
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/40 rounded-full text-white"
      >
        <ChevronRight size={34} />
      </button>
    </animated.div>
  );
};

/* ----------------------------------------------------------
   MASONRY GALLERY
---------------------------------------------------------- */
const MasonryGalleryPaginated: FC = () => {
  const allImages = useMemo(() => buildMasonryData(), []);
  const [validData, setValidData] = useState<ImageItem[]>(allImages);

  const [columns, setColumns] = useState(4);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);
  const pageSize = 15;

  const handleNavigate = (direction: "next" | "prev" | number) => {
    if (typeof direction === "number") {
      setPreviewIndex(direction);
      return;
    }

    setPreviewIndex((prev) => {
      if (prev === null) return 0;
      const max = pagedData.length - 1;

      if (direction === "prev") return prev > 0 ? prev - 1 : max;
      return prev < max ? prev + 1 : 0;
    });
  };

  const handleImageFail = (id: number) => {
    setValidData((prev) => prev.filter((img) => img.id !== id));
  };

  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      if (w >= 1600) setColumns(6);
      else if (w >= 1200) setColumns(5);
      else if (w >= 900) setColumns(4);
      else if (w >= 600) setColumns(3);
      else setColumns(2);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (ref.current) setContainerWidth(ref.current.offsetWidth);
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const pagedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return validData.slice(start, start + pageSize);
  }, [currentPage, validData]);

  const [columnHeights, gridItems] = useMemo(() => {
    if (!pagedData.length) return [[0], []] as [number[], GridItem[]];

    const heights = new Array(columns).fill(0);
    const items: GridItem[] = [];
    const colWidth = containerWidth / columns || 1;

    pagedData.forEach((item) => {
      const col = heights.indexOf(Math.min(...heights));
      const x = colWidth * col;
      const y = heights[col];

      heights[col] += item.height;

      items.push({ ...item, x, y, width: colWidth });
    });

    return [heights, items];
  }, [pagedData, columns, containerWidth]);

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: { opacity: 0, y: 60, scale: 0.9 },
    enter: { opacity: 1, y: 0, scale: 1 },
    leave: { opacity: 0, y: -30, scale: 0.9 },
    config: { tension: 280, friction: 30 },
    trail: 25,
  });

  return (
    <>
      <div
        className="relative w-full"
        ref={ref}
        style={{ height: Math.max(...columnHeights, 0) }}
      >
        {transitions((style, item, _, index) => (
          <animated.div
            key={item.id}
            style={{
              ...style,
              position: "absolute",
              left: item.x,
              top: item.y,
              width: item.width,
              height: item.height,
            }}
            className="p-3"
          >
            <div className="relative w-full h-full rounded-xl shadow-lg overflow-hidden bg-gray-100 group">
              <SmartImage
                src={item.image}
                alt={`news-${item.id}`}
                onLoadFail={() => handleImageFail(item.id)}
                onClick={() => setPreviewIndex(index)}
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <button
                  onClick={() => setPreviewIndex(index)}
                  className="w-full bg-white/90 text-black py-2 font-semibold text-center"
                >
                  View Full Image
                </button>
              </div>
            </div>
          </animated.div>
        ))}
      </div>

      <div className="my-8">
        <Pagination
          current={currentPage}
          total={validData.length}
          pageSize={pageSize}
          onChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>

      {previewIndex !== null && (
        <ImagePreviewModal
          images={pagedData}
          currentIndex={previewIndex}
          onClose={() => setPreviewIndex(null)}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
};

/* ----------------------------------------------------------
   PAGE WRAPPER
---------------------------------------------------------- */
const MasonryDemo: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1800px] mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-[#07518a] mb-6">
          Brihaspathi News Gallery
        </h1>

        <MasonryGalleryPaginated />
      </div>
    </div>
  );
};

export default MasonryDemo;
