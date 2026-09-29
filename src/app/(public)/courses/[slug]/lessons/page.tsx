// Course Lessons tab body content.
// Displays module curriculum list, lesson content details, and progress tracking card.
// Matches Figma Course Lessons.png 1:1.

import { COURSE_MODULES } from "@/data/lessons";

export default function CourseLessonsPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header & Subtitle */}
      <div>
        <h2 className="text-[22px] font-semibold text-[#242528]">
          Explore the Modules
        </h2>
        <p className="mt-2 text-[15px] leading-[25px] text-[#4B4C53]">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </div>

      {/* Lesson List */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#242528] mb-6">
          Lesson List
        </h3>
        <div className="flex flex-col gap-6">
          {COURSE_MODULES.map((module) => (
            <div key={module.id} className="flex items-start gap-4">
              {/* Lime rounded video icon */}
              <div className="w-12 h-12 rounded-[14px] bg-[#D4FB20] flex items-center justify-center shrink-0 text-[#242528] mt-0.5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="23 7 16 12 23 17 23 7" fill="currentColor" />
                  <rect width="15" height="14" x="1" y="5" rx="3" ry="3" />
                </svg>
              </div>

              {/* Title & Description */}
              <div>
                <h4 className="text-[16px] font-semibold text-[#242528]">
                  {module.title}
                </h4>
                <p className="mt-1 text-[14px] leading-[23px] text-[#4B4C53]">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Content */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#242528] mb-2">
          Lesson Content
        </h3>
        <p className="text-[15px] leading-[25px] text-[#4B4C53]">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* Lesson Progress Tracking */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#242528] mb-2">
          Lesson Progress Tracking
        </h3>
        <p className="text-[15px] leading-[25px] text-[#4B4C53] mb-5">
          Witness your growth as you complete lessons, with an intuitive progress
          tracking feature guiding you through your learning journey.
        </p>

        {/* Progress Card */}
        <div className="p-6 rounded-[20px] border border-[#E5E6E8] bg-white">
          <span className="text-[14px] font-medium text-[#4B4C53]">
            Learning Progress
          </span>
          <div className="text-[36px] font-bold text-[#242528] my-1 leading-none">
            55%
          </div>
          <div className="w-full h-2 rounded-full bg-[#E5E6E8] overflow-hidden mt-3">
            <div
              className="h-full rounded-full bg-[#D4FB20] transition-all duration-300"
              style={{ width: "55%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
