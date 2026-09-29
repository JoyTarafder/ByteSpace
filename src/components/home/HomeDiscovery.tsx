"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "@/components/layout/Container";
import CourseCard from "@/components/course/CourseCard";
import { FEATURED_COURSES, COURSES } from "@/data/courses";
import { ROUTES } from "@/lib/constants";

const ROW_1 = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

const ROW_2 = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];

const ROW_3 = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

export default function HomeDiscovery() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("Featured");

  const handleCategoryClick = (cat: string) => {
    if (cat === "+ More") {
      router.push(ROUTES.search);
      return;
    }
    setActiveCategory(cat);
  };

  const filtered =
    activeCategory === "Featured"
      ? FEATURED_COURSES
      : COURSES.filter(
          (c) =>
            c.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
            c.title.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const displayedCourses =
    filtered.length > 0 ? filtered.slice(0, 6) : FEATURED_COURSES.slice(0, 6);

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-[960px] mx-auto mb-9 sm:mb-11">
          <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold text-[#1B1D1F] tracking-[-0.02em] leading-[120%] mb-3 sm:mb-4 font-poppins">
            Discover Your Passion, <br />
            Build Your Skills
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#8C9298] leading-[160%] max-w-[930px] mx-auto font-poppins font-normal">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different
            <br className="hidden md:inline" />
            {" "}fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Pill Filters (3 rows, matching Figma exact layout) */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-14 max-w-[1280px] mx-auto">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {ROW_1.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`h-[40px] sm:h-[43px] px-4 sm:px-5 rounded-full text-[13px] sm:text-[14px] font-medium font-poppins inline-flex items-center justify-center transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4FB20] text-[#1B1D1F] shadow-xs"
                      : "bg-[#F5F5F6] text-[#242528] hover:bg-[#EAEAEB]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-[18px]">
            {ROW_2.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`h-[40px] sm:h-[43px] px-4 sm:px-5 rounded-full text-[13px] sm:text-[14px] font-medium font-poppins inline-flex items-center justify-center transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4FB20] text-[#1B1D1F] shadow-xs"
                      : "bg-[#F5F5F6] text-[#242528] hover:bg-[#EAEAEB]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-[23px]">
            {ROW_3.map((cat) => {
              const isActive = activeCategory === cat;
              if (cat === "+ More") {
                return (
                  <Link
                    key={cat}
                    href={ROUTES.search}
                    className="h-[40px] sm:h-[43px] px-2 text-[13px] sm:text-[14px] font-medium font-poppins text-[#003BE2] hover:underline transition-colors cursor-pointer inline-flex items-center justify-center"
                  >
                    + More
                  </Link>
                );
              }
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`h-[40px] sm:h-[43px] px-4 sm:px-5 rounded-full text-[13px] sm:text-[14px] font-medium font-poppins inline-flex items-center justify-center transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4FB20] text-[#1B1D1F] shadow-xs"
                      : "bg-[#F5F5F6] text-[#242528] hover:bg-[#EAEAEB]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Featured Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
