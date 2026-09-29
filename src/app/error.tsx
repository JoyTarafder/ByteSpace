"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ROUTES } from "@/lib/constants";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected runtime error to monitor or telemetry if needed
  }, [error]);

  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mb-6 text-red-600 shadow-xs">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-[#242528] mb-3">
        Something went wrong
      </h2>

      <p className="text-sm sm:text-base text-[#6C7278] max-w-[460px] mb-8 leading-relaxed">
        An unexpected error occurred while loading this section. You can try refreshing the component or return to the homepage.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="bg-[#D4FB20] hover:bg-[#c6ec15] active:scale-95 text-[#242528] font-bold text-sm px-6 py-3 rounded-full transition-all cursor-pointer shadow-sm"
        >
          Try Again
        </button>

        <Link href={ROUTES.home}>
          <button className="bg-[#F5F5F6] hover:bg-[#EBEBEF] text-[#242528] font-semibold text-sm px-6 py-3 rounded-full transition-all cursor-pointer">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
