"use client";

// Accessible Enrollment Confirmation Modal.
// Strictly adheres to PRD rules: explicitly identifies prototype preview enrollment,
// does NOT simulate fake credit card or payment processing, and provides clear pending and success feedback.

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Course } from "@/types/course";
import { ROUTES } from "@/lib/constants";

interface EnrollmentModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  onEnrolled: () => void;
}

export default function EnrollmentModal({
  course,
  isOpen,
  onClose,
  onEnrolled,
}: EnrollmentModalProps) {
  const [isPending, setIsPending] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const confirmButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setIsConfirmed(false);
    setIsPending(false);
    onClose();
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Focus confirm button on open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        confirmButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsPending(true);
    setTimeout(() => {
      try {
        const stored = localStorage.getItem("bytespace_enrolled_courses");
        const list: string[] = stored ? JSON.parse(stored) : [];
        if (!list.includes(course.slug)) {
          list.push(course.slug);
          localStorage.setItem("bytespace_enrolled_courses", JSON.stringify(list));
        }
      } catch {
        // Ignore localStorage error
      }
      setIsPending(false);
      setIsConfirmed(true);
      onEnrolled();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#242528]/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enrollment-modal-title"
    >
      <div
        ref={dialogRef}
        className="w-full max-w-[500px] rounded-[28px] bg-white p-6 sm:p-8 shadow-2xl border border-[#E5E6E8] flex flex-col gap-6 animate-scale-up"
      >
        {!isConfirmed ? (
          <>
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[13px] font-semibold tracking-wider text-[#003BE2] uppercase">
                  Enrollment Preview
                </span>
                <h3
                  id="enrollment-modal-title"
                  className="text-[22px] font-bold text-[#242528] mt-1"
                >
                  Confirm Course Enrollment
                </h3>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-full bg-[#F5F5F6] text-[#242528] hover:bg-[#E5E6E8] transition-colors flex items-center justify-center cursor-pointer shrink-0"
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
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Course Summary Box */}
            <div className="rounded-[18px] bg-[#F5F5F6] p-4.5 border border-[#E5E6E8] flex flex-col gap-2">
              <h4 className="text-[16px] font-semibold text-[#242528] leading-snug">
                {course.title}
              </h4>
              <p className="text-[13px] text-[#4B4C53]">
                By {course.creator.name} • {course.lessonCount} lessons ({course.duration})
              </p>
              <div className="flex items-baseline gap-1 mt-1 pt-2 border-t border-[#E5E6E8]">
                <span className="text-[24px] font-bold text-[#003BE2]">
                  ${course.price}
                </span>
                <span className="text-[13px] text-[#4B4C53]">
                  /{course.billingLabel}
                </span>
              </div>
            </div>

            {/* Prototype notice conforming to PRD rule */}
            <div className="p-3.5 rounded-[14px] bg-[#003BE2]/5 border border-[#003BE2]/15 text-[13px] leading-[20px] text-[#003BE2]">
              <strong>Prototype Notice:</strong> In accordance with development rules, real payment processing is disabled. Confirming enrollment will register your access locally and unlock course lessons.
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                disabled={isPending}
                className="px-5 py-2.5 rounded-full text-[14px] font-medium text-[#4B4C53] hover:bg-[#F5F5F6] transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                ref={confirmButtonRef}
                type="button"
                onClick={handleConfirm}
                disabled={isPending}
                className="px-6 py-3 rounded-full bg-[#D4FB20] text-[#242528] font-semibold text-[15px] hover:bg-[#CBFC01] transition-all flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-60"
              >
                {isPending ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-[#242528]"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Enrolling...</span>
                  </>
                ) : (
                  <span>Confirm Free Enrollment</span>
                )}
              </button>
            </div>
          </>
        ) : (
          /* Enrollment Success State */
          <div className="flex flex-col items-center text-center py-4 gap-4">
            <div className="w-16 h-16 rounded-full bg-[#D4FB20] flex items-center justify-center text-[#242528] shadow-md">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div>
              <h3 className="text-[22px] font-bold text-[#242528]">
                Enrollment Successful!
              </h3>
              <p className="mt-2 text-[14px] text-[#4B4C53] leading-relaxed max-w-[380px]">
                You now have full access to &apos;{course.title}&apos;. You can stream all module lessons right now.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-3">
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-1/2 py-3 rounded-full border border-[#CED0D3] text-[14px] font-medium text-[#242528] hover:bg-[#F5F5F6] transition-colors cursor-pointer"
              >
                Close
              </button>
              <Link
                href={ROUTES.courseLessons(course.slug)}
                onClick={handleClose}
                className="w-full sm:w-1/2 py-3 rounded-full bg-[#003BE2] text-white font-semibold text-[14px] hover:bg-[#002fba] transition-colors text-center shadow-sm"
              >
                Start Learning
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
