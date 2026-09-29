// Deterministic mock data for course creators.

import { Creator } from "@/types/creator";

export const CREATORS: Creator[] = [
  {
    id: "creator-1",
    slug: "sarah-jenkins",
    name: "PurePearl Studio",
    title: "Professional Creator",
    avatar: "/images/avatar-creator-2.png",
    biography:
      "Passionate product designer and digital creator with over a decade of experience crafting high-impact digital experiences and guiding over 50,000 learners worldwide.",
    productCount: 3,
    followerCount: 12,
  },
  {
    id: "creator-2",
    slug: "alex-rivera",
    name: "Alex Rivera",
    title: "Senior Full Stack Engineer",
    avatar: "/images/avatar-student-7.png",
    biography:
      "Full-stack developer specializing in scalable cloud architectures, React ecosystems, and modern backend frameworks.",
    productCount: 5,
    followerCount: 840,
  },
  {
    id: "creator-3",
    slug: "elena-rostova",
    name: "Elena Rostova",
    title: "Lead Visual Designer",
    avatar: "/images/avatar-student-6.png",
    biography:
      "Award-winning brand identity designer helping tech companies build memorable, cohesive design systems and marketing visuals.",
    productCount: 4,
    followerCount: 1250,
  },
];

export function getCreatorBySlug(slug: string): Creator | undefined {
  return CREATORS.find((c) => c.slug === slug || slug.includes(c.slug));
}
