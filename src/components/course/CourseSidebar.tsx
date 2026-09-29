// Course purchase and curriculum preview sidebar.
// Shared across Details, Lessons, and Reviews routes.

import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types/course";
import { ROUTES } from "@/lib/constants";
import EnrollmentAction from "@/components/course/EnrollmentAction";

interface CourseSidebarProps {
  course: Course;
}

export default function CourseSidebar({ course }: CourseSidebarProps) {
  const previewLessons = course.previewLessons ?? [
    { order: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { order: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    { order: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ];

  const benefits = course.benefits ?? [
    "Learning Resources",
    "Quality Lesson Videos",
    "Certificate of Completion",
    "Private Consultation",
  ];

  const remainingLessonsCount = Math.max(0, course.lessonCount - previewLessons.length);

  return (
    <aside className="w-full bg-white rounded-[24px] border border-[#CED0D3] p-6 sm:p-8 shadow-sm flex flex-col gap-6">
      {/* Lessons Curriculum Preview */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#242528]">
          {course.lessonCount} Lessons ({course.duration})
        </h2>

        <div className="mt-4 flex flex-col gap-3">
          {previewLessons.map((lesson) => (
            <div
              key={lesson.order}
              className="flex items-center justify-between text-[14px] py-1 gap-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[#949696] font-medium shrink-0">
                  {lesson.order}
                </span>
                <span className="text-[#242528] font-medium truncate">
                  {lesson.title}
                </span>
              </div>
              <span className="text-[#003BE2] font-medium shrink-0">
                {lesson.duration}
              </span>
            </div>
          ))}

          {remainingLessonsCount > 0 && (
            <p className="mt-1 text-[13px] text-[#949696]">
              {remainingLessonsCount} more videos
            </p>
          )}
        </div>
      </div>

      {/* Callout copy */}
      <p className="text-[15px] leading-[22px] text-[#4B4C53]">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* Price row */}
      <div className="flex items-baseline gap-1">
        <span className="text-[36px] font-bold text-[#003BE2] leading-none">
          ${course.price}
        </span>
        <span className="text-[15px] text-[#4B4C53]">
          /{course.billingLabel}
        </span>
      </div>

      {/* Enroll Action */}
      <EnrollmentAction course={course} />

      {/* Benefits checklist */}
      <div className="pt-2">
        <h3 className="text-[18px] font-semibold text-[#242528] mb-4">
          This course include
        </h3>

        <ul className="flex flex-col gap-3.5">
          {benefits.map((benefit, index) => (
            <li
              key={benefit}
              className="flex items-center gap-3 text-[15px] text-[#242528]"
            >
              {/* Blue icon matching category */}
              <span className="text-[#003BE2] shrink-0">
                {index === 0 && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 8-6 4 6 4V8Z" />
                    <rect width="14" height="12" x="2" y="6" rx="2" />
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                )}
                {index === 3 && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" x2="19" y1="8" y2="14" />
                    <line x1="22" x2="16" y1="11" y2="11" />
                  </svg>
                )}
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E5E6E8] w-full" />

      {/* Creator summary card */}
      <div className="flex flex-col gap-4">
        <Link
          href={ROUTES.creator(course.creator.slug)}
          className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] rounded-lg p-1 -m-1"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#F2F2F2] shrink-0 border border-[#CED0D3]">
            <Image
              src={course.creator.avatar}
              alt={course.creator.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>

          <div>
            <h4 className="text-[16px] font-semibold text-[#242528] group-hover:text-[#003BE2] transition-colors leading-snug">
              {course.creator.name}
            </h4>
            <p className="text-[13px] text-[#949696]">
              {course.creator.role ?? "Professional Creator"}
            </p>
          </div>
        </Link>

        {/* Creator Callout Copy & Full Profile CTA button from Figma */}
        <p className="text-[14px] leading-[20px] text-[#4B4C53]">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link
          href={ROUTES.creator(course.creator.slug)}
          className="inline-block w-fit px-6 py-2 rounded-full border border-[#CED0D3] text-[14px] font-medium text-[#242528] hover:border-[#003BE2] hover:text-[#003BE2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
