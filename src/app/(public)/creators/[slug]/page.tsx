// Creator Profile page route (/creators/[slug]).
// Displays CreatorHero, FilterToolbar, 6-card creator product grid, and Pagination.

import { notFound } from "next/navigation";
import { getCreatorBySlug } from "@/data/creators";
import { COURSES } from "@/data/courses";
import Container from "@/components/layout/Container";
import CreatorHero from "@/components/creator/CreatorHero";
import FilterToolbar from "@/components/filters/FilterToolbar";
import CourseGrid from "@/components/course/CourseGrid";
import Pagination from "@/components/filters/Pagination";

interface CreatorPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CreatorProfilePage({ params }: CreatorPageProps) {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);

  if (!creator) {
    notFound();
  }

  // Exactly six creator courses matching reference
  const creatorCourses = COURSES.slice(0, 6);

  return (
    <div className="bg-white min-h-screen">
      {/* Creator Profile Hero Section */}
      <CreatorHero creator={creator} />

      {/* Course Grid Container */}
      <Container className="py-8">
        {/* Filter and Sort Toolbar */}
        <FilterToolbar />

        {/* 6-Card Product Grid */}
        <div className="mt-8">
          <CourseGrid courses={creatorCourses} />
        </div>

        {/* Pagination */}
        <Pagination totalPages={3} />
      </Container>
    </div>
  );
}
