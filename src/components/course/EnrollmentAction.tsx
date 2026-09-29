"use client";

// Accessible Enrollment action button with persistence and modal confirmation.
// Matches exact Figma Course Details sidebar styling and behavior.

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Course } from "@/types/course";
import { ROUTES } from "@/lib/constants";
import EnrollmentModal from "@/components/course/EnrollmentModal";

interface EnrollmentActionProps {
  course: Course;
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("bytespace_enrollment_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("bytespace_enrollment_change", callback);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem("bytespace_enrolled_courses") ?? "[]";
  } catch {
    return "[]";
  }
}

function getServerSnapshot() {
  return "[]";
}

export default function EnrollmentAction({ course }: EnrollmentActionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const enrolledJson = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isEnrolled = enrolledJson.includes(`"${course.slug}"`);

  return (
    <>
      {isEnrolled ? (
        <div className="flex flex-col gap-2">
          <Link
            href={ROUTES.courseLessons(course.slug)}
            className="w-full py-4 rounded-full bg-[#003BE2] text-white text-[16px] font-semibold hover:bg-[#002fba] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] shadow-sm text-center flex items-center justify-center gap-2"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Access Lessons (Enrolled)</span>
          </Link>
          <p className="text-center text-[12px] text-[#4B4C53]">
            You have full lifetime access to this course
          </p>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="w-full py-4 rounded-full bg-[#D4FB20] text-[#242528] text-[16px] font-semibold hover:bg-[#CBFC01] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] shadow-sm text-center cursor-pointer active:scale-[0.99]"
        >
          Enroll Now
        </button>
      )}

      {/* Modal Dialog */}
      <EnrollmentModal
        course={course}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnrolled={() => {
          if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("bytespace_enrollment_change"));
          }
        }}
      />
    </>
  );
}
