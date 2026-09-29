// Type definitions for courses, creators, lessons, and reviews.

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface CreatorSummary {
  name: string;
  slug: string;
  avatar: string;
  role?: string;
}

export interface PreviewLesson {
  order: string;
  title: string;
  duration: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  creator: CreatorSummary;
  thumbnail: string;
  previewImage?: string;
  level: CourseLevel;
  lessonCount: number;
  duration: string;
  commentCount: number;
  studentCount: number;
  rating: number;
  reviewCount: number;
  price: number;
  billingLabel: string;
  category: string;
  studentAvatars: string[];
  description?: string[];
  keyPoints?: string[];
  benefits?: string[];
  previewLessons?: PreviewLesson[];
}

export interface Lesson {
  id: string;
  order: number;
  title: string;
  description: string;
  duration?: string;
}

export interface Review {
  id: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  rating: number;
  relativeDate: string;
  body: string;
}
