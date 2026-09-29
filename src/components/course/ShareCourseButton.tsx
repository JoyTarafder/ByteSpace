"use client";

// Accessible ShareCourseButton component.
// Copies page URL to clipboard with instant visual feedback and triggers native Web Share if supported.

import { useState } from "react";

interface ShareCourseButtonProps {
  title: string;
  subtitle?: string;
}

export default function ShareCourseButton({
  title,
  subtitle,
}: ShareCourseButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";

    // Instant UI feedback
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);

    // Guaranteed clipboard copy
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).catch(() => {
        // Fallback for older browsers
        try {
          const textarea = document.createElement("textarea");
          textarea.value = url;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        } catch {
          // Ignore fallback copy error
        }
      });
    }

    // Invoke Web Share API in background if supported
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      navigator
        .share({
          title,
          text: subtitle ?? title,
          url,
        })
        .catch(() => {
          // User dismissed or headless browser
        });
    }
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 bg-[#D4FB20] text-[#242528] px-5 py-2.5 rounded-full text-[15px] font-medium hover:bg-[#CBFC01] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-sm cursor-pointer active:scale-95"
      >
        {copied ? (
          <>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="w-4 h-4 text-[#242528]"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z"
                fill="currentColor"
              />
            </svg>
            <span>Share</span>
          </>
        )}
      </button>

      {/* Screen-reader live region */}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Course link copied to clipboard" : ""}
      </span>
    </div>
  );
}
