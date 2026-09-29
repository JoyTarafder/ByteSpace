// Course Reviews tab body content.
// Displays overall rating breakdown card, rating filter chips, and learner review cards.
// Matches Figma Course Reviews.png 1:1.

import { MOCK_REVIEWS } from "@/data/reviews";
import ReviewListSection from "@/components/course/ReviewListSection";

export default function CourseReviewsPage() {
  const ratingDistribution = [
    { stars: 5, width: "82%", count: 720 },
    { stars: 4, width: "24%", count: 120 },
    { stars: 3, width: "8%", count: 21 },
    { stars: 2, width: "5%", count: 12 },
    { stars: 1, width: "6%", count: 16 },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header & Subtitle */}
      <div>
        <h2 className="text-[22px] font-semibold text-[#242528]">
          What Learners Are Saying
        </h2>
        <p className="mt-2 text-[15px] leading-[25px] text-[#4B4C53]">
          Discover what our learners have to say about their experience with
          &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews
          and ratings from individuals who have embarked on the transformative
          journey of mastering digital asset creation.
        </p>
      </div>

      {/* Ratings Breakdown Card */}
      <div className="p-6 rounded-[22px] border border-[#E5E6E8] bg-white flex flex-col md:flex-row items-center gap-8">
        {/* Lime Rating Box */}
        <div className="w-full md:w-[150px] h-[130px] rounded-[18px] bg-[#D4FB20] flex flex-col items-center justify-center shrink-0">
          <span className="text-[14px] font-medium text-[#242528]">Ratings</span>
          <span className="text-[48px] font-bold text-[#242528] leading-none mt-1">
            4.7
          </span>
        </div>

        {/* Rating Rows */}
        <div className="flex-1 w-full flex flex-col gap-2.5">
          {ratingDistribution.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 w-full">
              {/* Lime Progress Bar */}
              <div className="flex-1 h-2 rounded-full bg-[#E5E6E8] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#D4FB20]"
                  style={{ width: item.width }}
                />
              </div>

              {/* 5 Stars Icons */}
              <div className="flex items-center gap-0.5 text-[#242528] shrink-0">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Count */}
              <span className="w-8 text-right text-[13px] font-medium text-[#242528] shrink-0">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Individual Reviews Section */}
      <ReviewListSection reviews={MOCK_REVIEWS} />
    </div>
  );
}
