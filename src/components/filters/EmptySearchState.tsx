import Link from "next/link";
import { ROUTES } from "@/lib/constants";

interface EmptySearchStateProps {
  query?: string;
  category?: string;
  level?: string;
}

export default function EmptySearchState({
  query,
  category,
  level,
}: EmptySearchStateProps) {
  const activeFilters = [
    query ? `"${query}"` : null,
    category && category !== "featured" ? `Category: ${category}` : null,
    level && level !== "all" ? `Level: ${level}` : null,
  ].filter(Boolean);

  return (
    <div className="w-full max-w-[620px] mx-auto py-16 px-6 text-center flex flex-col items-center">
      {/* Search illustration icon with subtle lime background */}
      <div className="w-20 h-20 rounded-full bg-[#F7FDE6] border border-[#D4FB20]/40 flex items-center justify-center mb-6 shadow-sm">
        <svg
          className="w-10 h-10 text-[#003BE2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <h3 className="text-2xl font-bold text-[#242528] mb-3">
        No courses found
      </h3>

      <p className="text-base text-[#6C7278] leading-relaxed mb-6">
        {activeFilters.length > 0 ? (
          <>
            We couldn&apos;t find any courses matching{" "}
            <span className="font-semibold text-[#242528]">
              {activeFilters.join(", ")}
            </span>
            . Try checking your spelling or broadening your filter criteria.
          </>
        ) : (
          "We couldn't find any courses matching your request. Try searching for different keywords or explore our featured courses."
        )}
      </p>

      {/* Action to reset search and filters */}
      <Link href={ROUTES.search}>
        <button className="bg-[#D4FB20] hover:bg-[#c6ec15] active:scale-95 text-[#242528] font-bold text-sm px-7 py-3 rounded-full transition-all cursor-pointer shadow-sm">
          Reset All Filters
        </button>
      </Link>
    </div>
  );
}
