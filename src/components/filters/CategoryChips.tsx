"use client";

// Horizontal category chips filter list.
// Displays active lime pill on selected category, surface-chip on inactive pills.

import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { cn } from "@/lib/cn";

interface CategoryChipsProps {
  className?: string;
}

export default function CategoryChips({ className }: CategoryChipsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "Featured";

  const handleSelect = (categoryName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryName && categoryName !== "Featured") {
      params.set("category", categoryName);
    } else {
      params.delete("category");
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  return (
    <div
      role="tablist"
      aria-label="Course categories"
      className={cn(
        "flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none py-6",
        className
      )}
    >
      {CATEGORIES.map((cat) => {
        const isSelected =
          activeCategory.toLowerCase() === cat.name.toLowerCase() ||
          activeCategory.toLowerCase() === cat.slug;

        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isSelected}
            onClick={() => handleSelect(cat.name)}
            type="button"
            className={cn(
              "px-5 py-2.5 rounded-full text-[14px] font-medium whitespace-nowrap transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]",
              isSelected
                ? "bg-[#D4FB20] text-[#242528] shadow-sm"
                : "bg-[#F2F2F2] text-[#242528] hover:bg-[#E5E6E8]"
            )}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
