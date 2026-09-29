// ByteSpace Brand Logo component.
// Supports light (white text on dark/blue surfaces) and dark (dark text on light surfaces) variants.

import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({
  variant = "light",
  showText = true,
  size = "md",
  className,
}: LogoProps) {
  const iconSizes = {
    sm: "w-[22px] h-[24px]",
    md: "w-[29px] h-[32px]",
    lg: "w-[36px] h-[40px]",
  };

  const textSizes = {
    sm: "text-[20px]",
    md: "text-[24px]",
    lg: "text-[28px]",
  };

  const textColor = variant === "light" ? "text-[#F5F5F6]" : "text-[#242528]";

  return (
    <Link
      href={ROUTES.home}
      aria-label="ByteSpace Home"
      className={cn(
        "inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20] rounded-md transition-opacity hover:opacity-90",
        className
      )}
    >
      {/* Three-segment lime leaf mark from Figma */}
      <svg
        viewBox="0 0 29 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={cn(iconSizes[size], "shrink-0")}
      >
        <path
          d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
          fill="#D4FB20"
        />
        <path
          d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
          fill="#D4FB20"
        />
        <path
          d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
          fill="#D4FB20"
        />
      </svg>

      {showText && (
        <span
          className={cn(
            "font-bold font-brand leading-normal select-none tracking-normal",
            textSizes[size],
            textColor
          )}
          style={{
            fontFamily: '"Clash Display", sans-serif',
            color: variant === "light" ? "var(--Shuttle-Gray-50, #F5F5F6)" : undefined,
          }}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
