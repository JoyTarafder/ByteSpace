// Shared CourseHero component.
// Sits on the blue grid hero section across Details, Lessons, and Reviews routes.

import Link from "next/link";
import { Course } from "@/types/course";
import { ROUTES } from "@/lib/constants";
import Container from "@/components/layout/Container";
import ShareCourseButton from "@/components/course/ShareCourseButton";

interface CourseHeroProps {
  course: Course;
}

export default function CourseHero({ course }: CourseHeroProps) {
  return (
    <div className="pt-28 sm:pt-36 lg:pt-[140px] pb-8 lg:pb-10 text-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Left Title and Byline Area */}
          <div className="max-w-[820px]">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[120%] tracking-tight text-white">
              {course.title}
            </h1>

            {course.subtitle && (
              <p className="mt-3 text-[18px] text-white/90 font-normal">
                {course.subtitle}
              </p>
            )}

            <p className="mt-4 text-[16px] text-white/80">
              by{" "}
              <Link
                href={ROUTES.creator(course.creator.slug)}
                className="text-[#D4FB20] font-medium hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4FB20] rounded"
              >
                {course.creator.name.toLowerCase()}
              </Link>
            </p>

            {/* Metadata Pills Row (White background pills) */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* Level Pill */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-[14px] font-medium text-[#242528] shadow-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 text-[#003BE2]"
                >
                  <path
                    d="M13.75 3.3335H16.25V16.6668H13.75V3.3335ZM3.75 11.6668H6.25V16.6668H3.75V11.6668ZM8.75 7.50016H11.25V16.6668H8.75V7.50016Z"
                    fill="currentColor"
                  />
                </svg>
                <span>{course.level}</span>
              </div>

              {/* Rating & Review Count Pill */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-[14px] font-medium text-[#242528] shadow-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 text-[#003BE2]"
                >
                  <path
                    d="M6.10588 0.344297C6.25624 -0.11492 6.90587 -0.114919 7.05623 0.344298L8.27423 4.06417C8.34137 4.26924 8.53249 4.4081 8.74827 4.40859L12.6625 4.41747C13.1457 4.41856 13.3464 5.0364 12.9561 5.32131L9.79471 7.6292C9.62043 7.75642 9.54743 7.9811 9.61364 8.18646L10.8148 11.9118C10.963 12.3717 10.4375 12.7536 10.0459 12.4704L6.87403 10.1769C6.69917 10.0505 6.46294 10.0505 6.28808 10.1769L3.11621 12.4704C2.72464 12.7536 2.19908 12.3717 2.34736 11.9118L3.54847 8.18646C3.61468 7.9811 3.54168 7.75642 3.3674 7.62919L0.205968 5.3213C-0.18431 5.0364 0.016438 4.41856 0.499644 4.41747L4.41384 4.40859C4.62961 4.4081 4.82074 4.26924 4.88788 4.06417L6.10588 0.344297Z"
                    fill="currentColor"
                  />
                </svg>
                <span>
                  {course.rating.toFixed(1)} ({course.reviewCount} reviews)
                </span>
              </div>

              {/* Students Count Pill */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-[14px] font-medium text-[#242528] shadow-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 text-[#003BE2]"
                >
                  <path
                    d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
                    fill="currentColor"
                  />
                </svg>
                <span>{course.studentCount} Students</span>
              </div>
            </div>
          </div>

          {/* Right Action: Share Pill Button */}
          <div className="shrink-0 mt-4 lg:mt-0">
            <ShareCourseButton
              title={course.title}
              subtitle={course.subtitle}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
