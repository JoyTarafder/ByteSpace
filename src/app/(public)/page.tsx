import HomeHero from "@/components/home/HomeHero";
import HomePartners from "@/components/home/HomePartners";
import HomeDiscovery from "@/components/home/HomeDiscovery";
import HomePaths from "@/components/home/HomePaths";
import HomeGrowthFeature from "@/components/home/HomeGrowthFeature";
import HomeManageFeature from "@/components/home/HomeManageFeature";
import HomeCreatorCTA from "@/components/home/HomeCreatorCTA";
import HomeTestimonials from "@/components/home/HomeTestimonials";

export const metadata = {
  title: {
    absolute: "ByteSpace",
  },
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your career with our wide range of world-class online courses crafted by industry-leading creators.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-clip">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Partner Logo Strip */}
      <HomePartners />

      {/* 3. Discover Your Passion / 6 Featured Courses */}
      <HomeDiscovery />

      {/* 4. Explore Diverse Learning Paths */}
      <HomePaths />

      {/* 5. Professional Growth Feature */}
      <HomeGrowthFeature />

      {/* 6. Create & Manage Courses Feature */}
      <HomeManageFeature />

      {/* 7. Creator CTA Banner */}
      <HomeCreatorCTA />

      {/* 8. Community Testimonials */}
      <HomeTestimonials />
    </div>
  );
}
