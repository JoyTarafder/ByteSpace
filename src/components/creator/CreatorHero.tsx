"use client";

// CreatorHero component for /creators/[slug] route.
// Sits on the BlueGrid background with creator avatar, bio, metrics pills, and Follow action.

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { Creator } from "@/types/creator";
import BlueGrid from "@/components/layout/BlueGrid";
import Container from "@/components/layout/Container";

interface CreatorHeroProps {
  creator: Creator;
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("bytespace_follow_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("bytespace_follow_change", callback);
  };
}

export default function CreatorHero({ creator }: CreatorHeroProps) {
  const isFollowing = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return localStorage.getItem(`bytespace_follow_${creator.slug}`) === "true";
      } catch {
        return false;
      }
    },
    () => false
  );

  const followerCount = creator.followerCount + (isFollowing ? 1 : 0);

  const toggleFollow = () => {
    const nextFollowing = !isFollowing;
    try {
      localStorage.setItem(`bytespace_follow_${creator.slug}`, String(nextFollowing));
      window.dispatchEvent(new Event("bytespace_follow_change"));
    } catch {
      // Ignore localStorage write exceptions
    }
  };

  return (
    <BlueGrid className="pt-28 sm:pt-36 lg:pt-[140px] pb-12 sm:pb-16 text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Creator Large Rounded Square Avatar */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[28px] overflow-hidden bg-white/10 border-2 border-white/20 shrink-0 shadow-lg">
            <Image
              src={creator.avatar}
              alt={creator.name}
              fill
              priority
              className="object-cover"
              sizes="128px"
            />
          </div>

          {/* Details & Copy */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Creator Name + Role Pill */}
              <div className="flex items-center gap-3.5 flex-wrap">
                <h1 className="text-[32px] sm:text-[38px] font-semibold text-white tracking-tight leading-none">
                  {creator.name}
                </h1>
                <span className="bg-[#D4FB20] text-[#242528] px-3.5 py-1 rounded-full text-[13px] font-semibold tracking-wide">
                  Creator
                </span>
              </div>

              {/* Subtitle */}
              <p className="mt-2.5 text-[16px] text-white/90 font-medium">
                {creator.title}
              </p>

              {/* Biography */}
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[26px] text-white/80 max-w-[760px]">
                {creator.biography}
              </p>
            </div>

            {/* Metrics Pills & Follow Action Row */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              {/* Left: Products & Followers Metrics */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-white px-5 py-2.5 rounded-full shadow-sm text-[14px] text-[#242528]">
                  <span className="font-bold text-[#003BE2]">
                    {creator.productCount}
                  </span>
                  <span className="font-medium text-[#242528]">Products</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white px-5 py-2.5 rounded-full shadow-sm text-[14px] text-[#242528]">
                  <span className="font-bold text-[#003BE2]">
                    {followerCount}
                  </span>
                  <span className="font-medium text-[#242528]">Followers</span>
                </div>
              </div>

              {/* Right: Follow CTA */}
              <button
                type="button"
                onClick={toggleFollow}
                aria-pressed={isFollowing}
                className={`px-8 py-3 rounded-full text-[15px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-md cursor-pointer ${
                  isFollowing
                    ? "bg-white text-[#003BE2] hover:bg-white/90"
                    : "bg-[#D4FB20] text-[#242528] hover:bg-[#CBFC01]"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </BlueGrid>
  );
}
