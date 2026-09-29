"use client";

// Accessible interactive reviews list section with star rating filtering.
// Matches Figma Course Reviews.png layout while providing dynamic filtering.

import { useState } from "react";
import Image from "next/image";
import { Review } from "@/types/course";
import { cn } from "@/lib/cn";

interface ReviewListSectionProps {
  reviews: Review[];
}

export default function ReviewListSection({ reviews }: ReviewListSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number | "all">("all");

  const filteredReviews =
    selectedRating === "all"
      ? reviews
      : reviews.filter((r) => r.rating === selectedRating);

  return (
    <div>
      <h3 className="text-[20px] font-semibold text-[#242528] mb-4">
        Individual Reviews:
      </h3>

      {/* Filter Chips */}
      <div
        role="group"
        aria-label="Filter reviews by rating"
        className="flex items-center gap-2.5 flex-wrap mb-6"
      >
        <button
          type="button"
          onClick={() => setSelectedRating("all")}
          aria-pressed={selectedRating === "all"}
          className={cn(
            "px-5 py-2 rounded-full text-[14px] font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]",
            selectedRating === "all"
              ? "bg-[#D4FB20] text-[#242528] shadow-sm"
              : "bg-[#F2F2F2] text-[#242528] hover:bg-[#E5E6E8]"
          )}
        >
          All rating
        </button>

        {[5, 4, 3, 2, 1].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setSelectedRating(star)}
            aria-pressed={selectedRating === star}
            className={cn(
              "px-4 py-2 rounded-full text-[14px] font-medium transition-colors cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]",
              selectedRating === star
                ? "bg-[#D4FB20] text-[#242528] shadow-sm"
                : "bg-[#F2F2F2] text-[#242528] hover:bg-[#E5E6E8]"
            )}
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>{star}</span>
          </button>
        ))}
      </div>

      {/* Review Cards List or Empty Filter Feedback */}
      {filteredReviews.length > 0 ? (
        <div className="flex flex-col gap-4">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-[20px] border border-[#E5E6E8] bg-white flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#F2F2F2] shrink-0">
                    <Image
                      src={review.authorAvatar}
                      alt={review.authorName}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>

                  <div>
                    <h4 className="text-[16px] font-semibold text-[#242528]">
                      {review.authorName}
                    </h4>
                    <p className="text-[13px] text-[#717375]">
                      {review.authorRole}
                    </p>
                  </div>
                </div>

                <span className="text-[13px] text-[#949696] shrink-0">
                  {review.relativeDate}
                </span>
              </div>

              {/* Star Rating Display */}
              <div
                className="flex items-center gap-0.5 text-[#242528]"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className={cn(
                      "w-4 h-4",
                      s <= review.rating ? "fill-current" : "fill-[#CED0D3]"
                    )}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Review Body */}
              <p className="text-[14px] leading-[23px] text-[#4B4C53]">
                {review.body}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 rounded-[20px] border border-[#E5E6E8] bg-[#F5F5F6] text-center flex flex-col items-center gap-3">
          <p className="text-[15px] font-medium text-[#242528]">
            No reviews found with a {selectedRating}-star rating.
          </p>
          <button
            type="button"
            onClick={() => setSelectedRating("all")}
            className="px-5 py-2 rounded-full bg-[#003BE2] text-white text-[13px] font-semibold hover:bg-[#002fba] transition-colors cursor-pointer"
          >
            Show All Reviews
          </button>
        </div>
      )}
    </div>
  );
}
