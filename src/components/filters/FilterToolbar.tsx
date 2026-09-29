"use client";

// FilterToolbar component — Filter, Level, Category pills and Sort menu.
// Matches Figma design tokens and synchronizes with URL parameters.

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";

interface FilterToolbarProps {
  className?: string;
}

export default function FilterToolbar({ className }: FilterToolbarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLevel = searchParams.get("level") ?? "";
  const currentSort = searchParams.get("sort") ?? "relevant";

  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleLevelSelect = (level: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (level && level !== "all") {
      params.set("level", level);
    } else {
      params.delete("level");
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`);
    setIsLevelOpen(false);
  };

  const handleSortSelect = (sort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (sort && sort !== "relevant") {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`);
    setIsSortOpen(false);
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 py-6 border-b border-[#E5E6E8]",
        className
      )}
    >
      {/* Left Filter Actions */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Filter button */}
        <button
          type="button"
          className="flex items-center gap-2 h-11 px-5 rounded-full border border-[#CED0D3] bg-white text-[14px] font-medium text-[#242528] hover:border-[#003BE2] hover:text-[#003BE2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]"
          aria-label="Toggle all filters"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <span>Filter</span>
        </button>

        {/* Level button & dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsLevelOpen((prev) => !prev);
              setIsSortOpen(false);
            }}
            aria-expanded={isLevelOpen}
            aria-haspopup="listbox"
            className={cn(
              "flex items-center gap-2 h-11 px-5 rounded-full border text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]",
              currentLevel
                ? "border-[#003BE2] text-[#003BE2] bg-[#003BE2]/5"
                : "border-[#CED0D3] bg-white text-[#242528] hover:border-[#003BE2]"
            )}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4 text-current"
            >
              <path
                d="M13.75 3.3335H16.25V16.6668H13.75V3.3335ZM3.75 11.6668H6.25V16.6668H3.75V11.6668ZM8.75 7.50016H11.25V16.6668H8.75V7.50016Z"
                fill="currentColor"
              />
            </svg>
            <span>{currentLevel ? currentLevel : "Level"}</span>
          </button>

          {isLevelOpen && (
            <div
              role="listbox"
              className="absolute left-0 top-full mt-2 w-44 rounded-2xl bg-white border border-[#CED0D3] shadow-xl py-2 z-30"
            >
              {["all", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => handleLevelSelect(lvl)}
                  className="w-full text-left px-4 py-2.5 text-[14px] text-[#242528] hover:bg-[#F5F5F6] capitalize"
                >
                  {lvl === "all" ? "All Levels" : lvl}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category button */}
        <button
          type="button"
          className="flex items-center gap-2 h-11 px-5 rounded-full border border-[#CED0D3] bg-white text-[14px] font-medium text-[#242528] hover:border-[#003BE2] hover:text-[#003BE2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span>Category</span>
        </button>
      </div>

      {/* Right Sort Menu */}
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setIsSortOpen((prev) => !prev);
            setIsLevelOpen(false);
          }}
          aria-expanded={isSortOpen}
          aria-haspopup="listbox"
          className="flex items-center gap-2 h-11 px-5 rounded-full border border-[#CED0D3] bg-white text-[14px] font-medium text-[#242528] hover:border-[#003BE2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="17" x2="7" y1="12" y2="12" />
            <line x1="13" x2="11" y1="18" y2="18" />
          </svg>
          <span>
            {currentSort === "price-asc"
              ? "Price: Low to High"
              : currentSort === "rating"
              ? "Highest Rated"
              : "Most relevant"}
          </span>
        </button>

        {isSortOpen && (
          <div
            role="listbox"
            className="absolute right-0 top-full mt-2 w-48 rounded-2xl bg-white border border-[#CED0D3] shadow-xl py-2 z-30"
          >
            {[
              { label: "Most relevant", value: "relevant" },
              { label: "Price: Low to High", value: "price-asc" },
              { label: "Highest Rated", value: "rating" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleSortSelect(opt.value)}
                className="w-full text-left px-4 py-2.5 text-[14px] text-[#242528] hover:bg-[#F5F5F6]"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
