// Course Details (About) tab body content.
// Displays course description, 4 sneak peek images, and 8 key points checklist.

import Image from "next/image";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/data/courses";

interface CourseDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const sneakPeekImages = [
    "/images/course-thumb-photography.jpg",
    "/images/course-thumb-business.jpg",
    "/images/course-thumb-figma.jpg",
    "/images/avatar-creator-1.jpg",
  ];

  const keyPoints = course.keyPoints ?? [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* Course Description */}
      <div>
        <h2 className="text-[22px] font-semibold text-[#242528] mb-3">
          Description
        </h2>
        <div className="flex flex-col gap-4 text-[15px] leading-[26px] text-[#4B4C53]">
          {course.description && course.description.length > 0 ? (
            course.description.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>
              Embark on an enlightening exploration into the world of digital
              creation with our comprehensive course, &quot;{course.title}&quot;.
              This transformative learning experience invites you to unravel the
              intricate layers of digital innovation.
            </p>
          )}
        </div>
      </div>

      {/* Sneak Peek Gallery (4 images) */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#242528] mb-4">
          Sneak Peak
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sneakPeekImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-[#F5F5F6] border border-[#E5E6E8] group"
            >
              <Image
                src={src}
                alt={`Sneak peek preview ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 180px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Key Points Checklist */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#242528] mb-4">
          Key Points
        </h3>
        <ul className="grid grid-cols-1 gap-3.5">
          {keyPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-3.5 text-[15px] leading-[24px] text-[#242528]"
            >
              {/* Blue circular checkmark icon */}
              <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 text-white">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
