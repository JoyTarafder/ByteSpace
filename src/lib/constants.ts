// Application-wide constants — routes

export const ROUTES = {
  home: "/",
  search: "/search",
  creator: (slug: string) => `/creators/${slug}`,
  courseDetails: (slug: string) => `/courses/${slug}`,
  courseLessons: (slug: string) => `/courses/${slug}/lessons`,
  courseReviews: (slug: string) => `/courses/${slug}/reviews`,
  login: "/login",
  register: "/register",
} as const;
