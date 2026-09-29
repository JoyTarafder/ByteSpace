// Shared course shell layout for Details, Lessons, and Reviews routes.
// Fetches course data once, rendering CourseHero, MediaPreview, CourseSidebar, and CourseTabs.
// Children renders route-specific body content without shell drift.

import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/data/courses";
import Container from "@/components/layout/Container";
import CourseHero from "@/components/course/CourseHero";
import MediaPreview from "@/components/course/MediaPreview";
import CourseSidebar from "@/components/course/CourseSidebar";
import CourseTabs from "@/components/course/CourseTabs";

interface CourseLayoutProps {
  children: React.ReactNode;
  params?: Promise<{ slug?: string }>;
}

export default async function CourseLayout({
  children,
  params,
}: CourseLayoutProps) {
  const resolvedParams = params ? await params : undefined;
  const slug = resolvedParams?.slug;
  if (!slug) {
    notFound();
  }
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Blue Grid Hero background region */}
      <div className="absolute top-0 inset-x-0 h-[580px] sm:h-[620px] lg:h-[660px] bg-blue-grid pointer-events-none" />

      <div className="relative z-10">
        {/* Shared Course Hero with Title, Metadata Pills, and Share */}
        <CourseHero course={course} />

        {/* Main Unified 2-Column Content Grid */}
        <Container className="pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (8 cols): Media Preview, Tabs, Route-Specific Content */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Video Player Media Preview */}
            <MediaPreview
              imageSrc={course.previewImage ?? course.thumbnail}
              alt={course.title}
            />

            {/* Route-Aware Tabs (About | Lessons | Reviews) */}
            <div className="mt-8">
              <CourseTabs slug={course.slug} />
            </div>

            {/* Route-specific body content */}
            <div className="mt-8">{children}</div>
          </div>

          {/* Right Column (4 cols): Course Purchase Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <CourseSidebar course={course} />
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
}
