// MediaPreview component for course detail routes.
// Displays the course video preview with a stylized play overlay.

import Image from "next/image";

interface MediaPreviewProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export default function MediaPreview({
  imageSrc,
  alt,
  className,
}: MediaPreviewProps) {
  return (
    <div
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[24px] lg:rounded-[30px] overflow-hidden bg-[#242528] shadow-lg group ${
        className ?? ""
      }`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 760px"
      />

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />

      {/* Glassmorphic Play Button */}
      <button
        type="button"
        aria-label="Play course preview video"
        className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D4FB20]"
      >
        <svg
          width="28"
          height="32"
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="ml-1 w-6 h-7 sm:w-7 sm:h-8 text-white fill-white"
        >
          <path
            d="M26.25 13.8397C27.9167 14.802 27.9167 17.198 26.25 18.1603L3.75 31.1506C2.08333 32.1129 0 30.9149 0 28.9904L0 3.00962C0 1.08512 2.08333 -0.112879 3.75 0.849372L26.25 13.8397Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}
