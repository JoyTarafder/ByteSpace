import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import BlueGrid from "@/components/layout/BlueGrid";
import Container from "@/components/layout/Container";
import { ROUTES } from "@/lib/constants";

export const metadata = {
  title: "404 — Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist on ByteSpace.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Upper 404 Hero Section with BlueGrid */}
      <div className="relative overflow-hidden bg-[#003BE2]">
        {/* Transparent Header */}
        <SiteHeader className="absolute top-0 inset-x-0 z-30" />

        <BlueGrid className="pt-28 sm:pt-36 lg:pt-[180px] pb-24 sm:pb-32 md:pb-40 text-white relative flex flex-col items-center justify-center min-h-[680px] md:min-h-[820px] overflow-hidden">
          <Container className="flex flex-col items-center justify-center text-center relative z-10">
            {/* Giant 404 gradient numbers in the background */}
            <div
              className="select-none pointer-events-none font-black text-[180px] sm:text-[280px] md:text-[360px] lg:text-[420px] tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#D4FB20] via-[#B8E238]/60 to-transparent -mb-20 sm:-mb-32 md:-mb-44 z-0"
              aria-hidden="true"
            >
              404
            </div>

            {/* Foreground Heading */}
            <h1 className="relative z-10 text-[32px] sm:text-[44px] md:text-[56px] font-bold text-white tracking-tight leading-[1.14] text-center max-w-[780px] mx-auto px-4">
              The page you are looking <br className="hidden sm:inline" />
              for doesn’t exist
            </h1>

            {/* Subtitle */}
            <p className="relative z-10 text-sm sm:text-base text-white/80 text-center mt-5 mb-9 max-w-[500px] mx-auto px-4 font-normal">
              Try to use a correct url or go back to homepage to start again
            </p>

            {/* Action button */}
            <Link href={ROUTES.home} className="relative z-10">
              <button className="bg-[#D4FB20] hover:bg-[#c6ec15] active:scale-95 text-[#242528] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-lg">
                Back to Home
              </button>
            </Link>
          </Container>
        </BlueGrid>
      </div>

      {/* Footer on white background matching 404 Not Found.png */}
      <SiteFooter />
    </div>
  );
}
