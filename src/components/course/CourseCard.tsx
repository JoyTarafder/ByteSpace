// Reusable CourseCard component.
// Shared across Home, Search, and Creator Profile grids matching 1440px Figma reference.

import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types/course";
import { ROUTES } from "@/lib/constants";
import AvatarStack from "@/components/ui/AvatarStack";
import { cn } from "@/lib/cn";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export default function CourseCard({ course, className }: CourseCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col justify-between bg-white rounded-[22px] border border-[#CED0D3] p-4 transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <div>
        {/* Course Thumbnail with Floating Metadata Pills */}
        <div className="relative w-full h-[195px] rounded-[16px] overflow-hidden bg-[#F5F5F6]">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 341px"
          />

          {/* Overlay Metadata Pills */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 flex-wrap">
            <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[12px] font-medium text-[#242528] shrink-0">
              {course.lessonCount} Lessons
            </span>
            <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[12px] font-medium text-[#242528] shrink-0">
              {course.duration}
            </span>
            <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[12px] font-medium text-[#242528] shrink-0">
              {course.commentCount} Comments
            </span>
          </div>
        </div>

        {/* Course Title and Rating */}
        <div className="mt-4 flex items-start justify-between gap-3">
          <h3 className="font-semibold text-[18px] sm:text-[20px] leading-[26px] text-[#242528] group-hover:text-[#003BE2] transition-colors line-clamp-1">
            <Link
              href={ROUTES.courseDetails(course.slug)}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] rounded"
            >
              {course.title}
            </Link>
          </h3>

          <div className="flex items-center gap-1 shrink-0 text-[15px] font-medium text-[#242528]">
            <span>{course.rating.toFixed(1)}</span>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-3.5 h-3.5 text-[#CED0D3]"
            >
              <path
                d="M6.10588 0.344297C6.25624 -0.11492 6.90587 -0.114919 7.05623 0.344298L8.27423 4.06417C8.34137 4.26924 8.53249 4.4081 8.74827 4.40859L12.6625 4.41747C13.1457 4.41856 13.3464 5.0364 12.9561 5.32131L9.79471 7.6292C9.62043 7.75642 9.54743 7.9811 9.61364 8.18646L10.8148 11.9118C10.963 12.3717 10.4375 12.7536 10.0459 12.4704L6.87403 10.1769C6.69917 10.0505 6.46294 10.0505 6.28808 10.1769L3.11621 12.4704C2.72464 12.7536 2.19908 12.3717 2.34736 11.9118L3.54847 8.18646C3.61468 7.9811 3.54168 7.75642 3.3674 7.62919L0.205968 5.3213C-0.18431 5.0364 0.016438 4.41856 0.499644 4.41747L4.41384 4.40859C4.62961 4.4081 4.82074 4.26924 4.88788 4.06417L6.10588 0.344297Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Creator Byline */}
        <p className="mt-1 text-[14px] text-[#4B4C53]">
          by{" "}
          <Link
            href={ROUTES.creator(course.creator.slug)}
            className="text-[#003BE2] hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#003BE2] rounded"
          >
            {course.creator.name}
          </Link>
        </p>

        {/* Level and Enrolled Avatars Stack */}
        <div className="mt-3 flex items-center justify-between gap-2">
          {/* Difficulty pill */}
          <div className="flex items-center gap-1.5 bg-[#F2F2F2] px-3 py-1.5 rounded-full text-[13px] font-medium text-[#242528]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4 text-[#4B4C53]"
            >
              <path
                d="M13.75 3.3335H16.25V16.6668H13.75V3.3335ZM3.75 11.6668H6.25V16.6668H3.75V11.6668ZM8.75 7.50016H11.25V16.6668H8.75V7.50016Z"
                fill="currentColor"
              />
            </svg>
            <span>{course.level}</span>
          </div>

          {/* Student Avatars Stack with lime 26+ counter */}
          <AvatarStack
            avatars={course.studentAvatars}
            badgeCount="26+"
          />
        </div>
      </div>

      {/* Pricing Row */}
      <div className="mt-4 pt-3 border-t border-[#E5E6E8] flex items-baseline gap-1">
        <span className="text-[24px] font-bold text-[#003BE2]">
          ${course.price}
        </span>
        <span className="text-[14px] text-[#4B4C53]">
          /{course.billingLabel}
        </span>
      </div>
    </article>
  );
}
