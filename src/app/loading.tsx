import Container from "@/components/layout/Container";
import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="w-full min-h-[85vh] py-8 sm:py-12 bg-[#FBFBFB]">
      {/* Top subtle indeterminate progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#003BE2] via-[#D4FB20] to-[#003BE2] animate-pulse w-full" />
      </div>

      <Container>
        {/* Search & Categories Bar Skeleton */}
        <div className="flex flex-col items-center mb-10 max-w-[720px] mx-auto text-center space-y-4">
          <Skeleton className="h-9 sm:h-11 w-3/4 max-w-[480px] rounded-xl" />
          <Skeleton className="h-4 sm:h-5 w-2/3 max-w-[360px] rounded-lg" />

          {/* Search Input Box Skeleton */}
          <div className="w-full pt-3">
            <Skeleton className="h-[50px] w-full rounded-full shadow-xs" />
          </div>

          {/* Category Filter Pills Skeleton */}
          <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
            <Skeleton className="h-9 w-20 rounded-full" />
            <Skeleton className="h-9 w-28 rounded-full" />
            <Skeleton className="h-9 w-24 rounded-full" />
            <Skeleton className="h-9 w-32 rounded-full hidden sm:inline-block" />
            <Skeleton className="h-9 w-24 rounded-full hidden md:inline-block" />
          </div>
        </div>

        {/* Section Header Skeleton */}
        <div className="flex items-center justify-between mb-6 pt-4 border-t border-[#CED0D3]/40">
          <div className="space-y-2">
            <Skeleton className="h-7 w-48 rounded-lg" />
            <Skeleton className="h-4 w-32 rounded-md" />
          </div>
          <Skeleton className="h-9 w-28 rounded-xl hidden sm:block" />
        </div>

        {/* Course Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white rounded-[22px] border border-[#CED0D3]/80 p-4 shadow-xs"
            >
              <div>
                {/* Thumbnail Skeleton */}
                <div className="relative w-full h-[195px] rounded-[16px] overflow-hidden bg-[#E5E6E8]/70">
                  <Skeleton className="w-full h-full rounded-[16px]" />
                  {/* Floating Metadata Pills Skeleton */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <Skeleton className="h-6 w-20 rounded-full bg-white/80" />
                    <Skeleton className="h-6 w-16 rounded-full bg-white/80" />
                  </div>
                </div>

                {/* Title & Rating Skeleton */}
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-5 w-5/6 rounded-md" />
                    <Skeleton className="h-4 w-1/2 rounded-md" />
                  </div>
                  <Skeleton className="h-5 w-10 rounded-md shrink-0" />
                </div>

                {/* Creator Avatar & Name Skeleton */}
                <div className="mt-4 flex items-center gap-2.5">
                  <Skeleton className="w-7 h-7 rounded-full shrink-0" />
                  <Skeleton className="h-4 w-28 rounded-md" />
                </div>

                {/* Tag Pill Skeleton */}
                <div className="mt-3">
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>
              </div>

              {/* Card Footer Divider & Price Skeleton */}
              <div className="mt-5 pt-3.5 border-t border-[#CED0D3]/50 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Skeleton className="h-6 w-14 rounded-md" />
                  <Skeleton className="h-3.5 w-12 rounded-sm" />
                </div>
                {/* Student Avatar Stack Skeleton */}
                <div className="flex items-center -space-x-1.5">
                  <Skeleton className="w-6 h-6 rounded-full border-2 border-white" />
                  <Skeleton className="w-6 h-6 rounded-full border-2 border-white" />
                  <Skeleton className="w-6 h-6 rounded-full border-2 border-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

