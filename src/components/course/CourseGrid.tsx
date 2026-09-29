// Reusable CourseGrid component.
// Displays a 3-column responsive grid of CourseCards with gap spacing matching Figma.

import { Course } from "@/types/course";
import CourseCard from "@/components/course/CourseCard";
import { cn } from "@/lib/cn";

interface CourseGridProps {
  courses: Course[];
  className?: string;
}

export default function CourseGrid({ courses, className }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="py-16 text-center text-[#4B4C53]">
        <p className="text-[18px]">No courses found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
        className
      )}
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
