// Shared Avatar component — circular image for users and creators.
// Falls back to an initials placeholder when no image is provided.

import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  /** Absolute or relative URL for the avatar image */
  src?: string;
  /** Accessible alt text — use the person'"'"'s name */
  alt: string;
  size?: AvatarSize;
  className?: string;
}

// Figma spec: small = 32x32, large = 43x43
const sizeMap: Record<AvatarSize, { px: number; className: string }> = {
  sm: { px: 32, className: "w-8 h-8" },
  md: { px: 43, className: "w-[43px] h-[43px]" },
  lg: { px: 64, className: "w-16 h-16" },
};

/** Circular avatar image with fallback initial display. */
export default function Avatar({ src, alt, size = "sm", className }: AvatarProps) {
  const { px, className: sizeClass } = sizeMap[size];
  const initial = alt.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "rounded-full overflow-hidden flex-shrink-0 relative",
        "bg-[#F2F2F2] text-[#4B4C53] flex items-center justify-center",
        sizeClass,
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={px}
          height={px}
          className="object-cover w-full h-full"
        />
      ) : (
        <span className="text-[12px] font-medium font-[family-name:var(--font-satoshi)]">
          {initial}
        </span>
      )}
    </div>
  );
}
