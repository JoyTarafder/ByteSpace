"use client";

// SearchHero component on the Search page.
// Sits on the BlueGrid background with "Find Your Next Course" heading and search bar.

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import BlueGrid from "@/components/layout/BlueGrid";
import Container from "@/components/layout/Container";

export default function SearchHero() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) {
      params.set("q", query.trim());
    } else {
      params.delete("q");
    }
    params.set("page", "1");
    router.push(`/search?${params.toString()}`);
  };

  return (
    <BlueGrid className="pt-28 sm:pt-36 lg:pt-[140px] pb-12 sm:pb-16 text-white text-center">
      <Container className="flex flex-col items-center">
        <h1 className="text-[36px] sm:text-[44px] font-semibold text-white tracking-tight">
          Find Your Next Course
        </h1>

        {/* Search Input Bar & Course Type Selector */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[580px]"
        >
          {/* Search Input Pill */}
          <div className="relative w-full flex-1">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#949696]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 h-5 text-[#82868E]"
              >
                <path
                  d="M15.7549 14.2549H14.9649L14.6849 13.9849C15.6649 12.8449 16.2549 11.3649 16.2549 9.75488C16.2549 6.16488 13.3449 3.25488 9.75488 3.25488C6.16488 3.25488 3.25488 6.16488 3.25488 9.75488C3.25488 13.3449 6.16488 16.2549 9.75488 16.2549C11.3649 16.2549 12.8449 15.6649 13.9849 14.6849L14.2549 14.9649V15.7549L19.2549 20.7449L20.7449 19.2549L15.7549 14.2549ZM9.75488 14.2549C7.26488 14.2549 5.25488 12.2449 5.25488 9.75488C5.25488 7.26488 7.26488 5.25488 9.75488 5.25488C12.2449 5.25488 14.2549 7.26488 14.2549 9.75488C14.2549 12.2449 12.2449 14.2549 9.75488 14.2549Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              aria-label="Search courses"
              className="w-full h-[52px] rounded-full bg-white pl-13 pr-6 text-[15px] text-[#242528] placeholder-[#949696] focus:outline-none focus:ring-2 focus:ring-[#D4FB20] shadow-sm transition-all"
            />
          </div>

          {/* Courses Type Dropdown Pill */}
          <div className="relative shrink-0">
            <button
              type="button"
              className="h-[52px] px-6 rounded-full bg-[#D4FB20] text-[#242528] font-medium text-[15px] flex items-center gap-2 hover:bg-[#CBFC01] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-sm"
              aria-label="Course type filter"
            >
              <span>Courses</span>
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
                className="w-4 h-4 text-[#242528]"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </form>
      </Container>
    </BlueGrid>
  );
}
