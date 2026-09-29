"use client";

// Route-aware course navigation tabs (About, Lesson, Reviews).
// Keeps the shared course shell synchronized across subroutes.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/cn";

interface CourseTabsProps {
  slug: string;
}

export default function CourseTabs({ slug }: CourseTabsProps) {
  const pathname = usePathname();

  const tabs = [
    {
      label: "About",
      href: ROUTES.courseDetails(slug),
      isActive:
        pathname === ROUTES.courseDetails(slug) ||
        pathname === `/courses/${slug}/`,
    },
    {
      label: "Lesson",
      href: ROUTES.courseLessons(slug),
      isActive: pathname.startsWith(ROUTES.courseLessons(slug)),
    },
    {
      label: "Reviews",
      href: ROUTES.courseReviews(slug),
      isActive: pathname.startsWith(ROUTES.courseReviews(slug)),
    },
  ];

  return (
    <nav
      aria-label="Course section navigation"
      className="flex items-center gap-3 flex-wrap"
    >
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          aria-current={tab.isActive ? "page" : undefined}
          className={cn(
            "px-6 py-2 rounded-full text-[14px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]",
            tab.isActive
              ? "bg-[#D4FB20] text-[#242528] shadow-sm"
              : "bg-[#F2F2F2] text-[#4B4C53] hover:text-[#242528] hover:bg-[#E5E6E8]"
          )}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
