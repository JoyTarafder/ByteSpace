"use client";

// Accessible pagination component with circular arrows and numbered page buttons.
// Matches Figma Search page pagination reference.

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  className?: string;
}

export default function Pagination({
  currentPage: propPage,
  totalPages = 5,
  className,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page") ?? "1", 10);
  const activePage = propPage ?? (isNaN(pageFromUrl) ? 1 : pageFromUrl);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-3 pt-12 pb-8", className)}
    >
      {/* Previous Page Button */}
      <button
        type="button"
        onClick={() => handlePageChange(activePage - 1)}
        disabled={activePage <= 1}
        aria-label="Previous page"
        className="w-11 h-11 rounded-full border border-[#CED0D3] bg-white flex items-center justify-center text-[#242528] hover:border-[#003BE2] hover:text-[#003BE2] disabled:opacity-40 disabled:hover:border-[#CED0D3] disabled:hover:text-[#242528] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2 px-2">
        {pages.map((p) => {
          const isCurrent = p === activePage;
          return (
            <button
              key={p}
              type="button"
              onClick={() => handlePageChange(p)}
              aria-current={isCurrent ? "page" : undefined}
              aria-label={`Page ${p}`}
              className={cn(
                "w-10 h-10 rounded-full text-[15px] font-semibold transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]",
                isCurrent
                  ? "bg-[#D4FB20] text-[#242528] shadow-sm"
                  : "text-[#242528] hover:bg-[#F2F2F2]"
              )}
            >
              {p}
            </button>
          );
        })}
      </div>

      {/* Next Page Button */}
      <button
        type="button"
        onClick={() => handlePageChange(activePage + 1)}
        disabled={activePage >= totalPages}
        aria-label="Next page"
        className="w-11 h-11 rounded-full border border-[#CED0D3] bg-white flex items-center justify-center text-[#242528] hover:border-[#003BE2] hover:text-[#003BE2] disabled:opacity-40 disabled:hover:border-[#CED0D3] disabled:hover:text-[#242528] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  );
}
