// Deterministic mock data for course reviews.
// Matches Figma Course Reviews.png 1:1.

import { Review } from "@/types/course";

export const MOCK_REVIEWS: Review[] = [
  {
    id: "review-1",
    authorName: "PurePearl Studio",
    authorRole: "UI/UX Designer",
    authorAvatar: "/images/creator-profile-photo.png",
    rating: 5,
    relativeDate: "a year ago",
    body: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    id: "review-2",
    authorName: "Albert Flores",
    authorRole: "UI/UX Designer",
    authorAvatar: "/images/avatar-creator-2.png",
    rating: 5,
    relativeDate: "a year ago",
    body: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: "review-3",
    authorName: "Cody Fisher",
    authorRole: "UI/UX Designer",
    authorAvatar: "/images/creator-bg-large.png",
    rating: 5,
    relativeDate: "a year ago",
    body: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
];
