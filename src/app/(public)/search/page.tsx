// Search page route (/search).
// Displays SearchHero, FilterToolbar, CategoryChips, 18-course reference grid, and Pagination.

import { COURSES } from "@/data/courses";
import Container from "@/components/layout/Container";
import SearchHero from "@/components/filters/SearchHero";
import FilterToolbar from "@/components/filters/FilterToolbar";
import CategoryChips from "@/components/filters/CategoryChips";
import CourseGrid from "@/components/course/CourseGrid";
import Pagination from "@/components/filters/Pagination";
import EmptySearchState from "@/components/filters/EmptySearchState";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    level?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const q = params.q?.toLowerCase() ?? "";
  const category = params.category?.toLowerCase() ?? "";
  const level = params.level?.toLowerCase() ?? "";
  const sort = params.sort ?? "relevant";

  // Filter courses based on active search parameters
  let filtered = [...COURSES];

  if (q) {
    filtered = filtered.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.subtitle?.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }

  if (category && category !== "featured") {
    filtered = filtered.filter(
      (c) => c.category.toLowerCase() === category
    );
  }

  if (level && level !== "all") {
    filtered = filtered.filter(
      (c) => c.level.toLowerCase() === level
    );
  }

  // Sort courses
  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }


  // Pagination calculation
  const rawPage = params.page ? parseInt(params.page, 10) : undefined;
  const isExplicitPage = rawPage !== undefined && !isNaN(rawPage) && rawPage > 0;
  const currentPage = isExplicitPage ? rawPage : 1;
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const validPage = Math.min(currentPage, totalPages);

  // When an explicit page is navigated to, or when filtered, slice by pageSize.
  // When on default /search without filters or page query, render all 18 reference cards.
  const isDefaultView = !q && (!category || category === "featured") && (!level || level === "all") && !rawPage;
  const displayCourses = isDefaultView
    ? filtered.slice(0, 18)
    : filtered.slice((validPage - 1) * pageSize, validPage * pageSize);

  return (
    <div className="bg-white min-h-screen">
      {/* Search Blue Hero */}
      <SearchHero />

      {/* Toolbar and Results Container */}
      <Container className="py-8">
        {/* Filter controls row */}
        <FilterToolbar />

        {/* Category Chips row */}
        <CategoryChips />

        {/* Course Results or Empty State */}
        {filtered.length > 0 ? (
          <>
            <div className="mt-8">
              <CourseGrid courses={displayCourses} />
            </div>

            {/* Pagination */}
            <Pagination currentPage={validPage} totalPages={totalPages} />
          </>
        ) : (
          <EmptySearchState
            query={q}
            category={category}
            level={level}
          />
        )}
      </Container>
    </div>
  );
}
