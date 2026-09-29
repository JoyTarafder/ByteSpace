import Container from "@/components/layout/Container";
import Image from "next/image";

export default function HomeGrowthFeature() {
  return (
    <section className="relative overflow-visible pt-8 sm:pt-12 lg:pt-14 pb-0 bg-transparent">
      {/* Background Ambient Glow Orbs */}
      {/* Top-Right/Center Ambient Lime Glow */}
      <div className="absolute -top-24 right-0 sm:right-[10%] lg:right-[15%] w-[640px] h-[480px] bg-[#E2FC53]/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      {/* Mid-Left Ambient Blue Glow (spanning between Growth stats & Revenue) */}
      <div className="absolute top-[200px] -left-32 sm:-left-40 w-[540px] h-[540px] bg-[#3B82F6]/28 rounded-full blur-[130px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading, Subtitle, Stats */}
          <div className="lg:col-span-6 flex flex-col justify-start max-w-[540px] lg:pt-6">
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-bold text-[#242528] tracking-tight leading-[1.14] mb-5">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="text-base text-[#6C7278] leading-relaxed mb-8 max-w-[480px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Metrics (Clean spacing without separator line, matching Figma) */}
            <div className="grid grid-cols-3 gap-6 pt-1">
              <div>
                <div className="text-[32px] sm:text-[40px] font-bold text-[#003BE2] leading-none mb-2">
                  12K
                </div>
                <div className="text-sm font-medium text-[#6C7278]">
                  Students
                </div>
              </div>

              <div>
                <div className="text-[32px] sm:text-[40px] font-bold text-[#003BE2] leading-none mb-2">
                  70+
                </div>
                <div className="text-sm font-medium text-[#6C7278]">
                  Courses
                </div>
              </div>

              <div>
                <div className="text-[32px] sm:text-[40px] font-bold text-[#003BE2] leading-none mb-2">
                  16
                </div>
                <div className="text-sm font-medium text-[#6C7278]">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Student & Floating Cards */}
          <div className="lg:col-span-6 flex items-start justify-center relative">
            <div className="relative w-full max-w-[560px] h-[480px] sm:h-[510px] md:h-[520px] mx-auto select-none">
              {/* Main Course Preview Card (Shifted further right as requested) */}
              <div className="absolute left-[50px] sm:left-[60px] md:left-[68px] top-[-16px] sm:top-[-14px] md:top-[-12px] z-10 w-[240px] sm:w-[258px] md:w-[272px] bg-white rounded-[20px] sm:rounded-[24px] p-2.5 sm:p-3 shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-[#EBEBEF]">
                {/* Thumbnail */}
                <div className="relative w-full h-[118px] sm:h-[126px] md:h-[132px] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-[#F5F5F7]">
                  <Image
                    src="/images/course-thumb-figma.jpg"
                    alt="Learn Figma from Basic course preview"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                  />
                  {/* Floating Badges (Side-by-side on the left with translucent pill style) */}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5 z-10">
                    <span className="px-2 py-0.5 rounded-full bg-black/45 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-normal leading-none">
                      17 Lessons
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-black/45 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-normal leading-none">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>

                {/* Course Metadata */}
                <div className="mt-2.5 space-y-1">
                  <h4 className="text-[14px] sm:text-[16px] md:text-[17px] font-bold text-[#1B1D1F] leading-snug tracking-tight">
                    Learn Figma from Basic
                  </h4>
                  <p className="text-[11px] sm:text-[12px] text-[#6C7278]">
                    by{" "}
                    <span className="text-[#003BE2] font-semibold">
                      purepearl studio
                    </span>
                  </p>
                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-[#6C7278] text-[9.5px] sm:text-[10.5px] font-medium">
                      <svg
                        className="w-3 h-3 text-[#6C7278]"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <rect x="2" y="10" width="2.5" height="4" rx="0.5" />
                        <rect x="6.5" y="7" width="2.5" height="7" rx="0.5" />
                        <rect x="11" y="3" width="2.5" height="11" rx="0.5" />
                      </svg>
                      Beginner
                    </span>
                    <div className="w-5 h-5 rounded-full overflow-hidden border border-white bg-[#FFA2B8] shrink-0 shadow-xs flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-[#2E1A29]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <circle cx="12" cy="8" r="4" fill="#3D1D28" />
                        <path
                          d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8"
                          fill="#3D1D28"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Clean price row without top border */}
                  <div className="pt-1 flex items-baseline gap-1">
                    <span className="text-[15px] sm:text-[17px] font-bold text-[#003BE2] tracking-tight">
                      $25
                    </span>
                    <span className="text-[11px] sm:text-[12px] text-[#6C7278] font-normal">
                      /lifetime
                    </span>
                  </div>
                </div>
              </div>

              {/* 3D Lime Zigzag Spring on Top-Right (Behind Learning Progress Card) */}
              <div className="absolute top-[95px] sm:top-[105px] md:top-[80px] left-[375px] sm:left-[390px] md:left-[410px] z-50 w-[78px] sm:w-[86px] md:w-[94px] pointer-events-none drop-shadow-sm rotate-[-50deg]">
                <Image
                  src="/images/home/lime-zigzag.png"
                  alt=""
                  width={160}
                  height={180}
                  priority
                  unoptimized
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Center/Right: Boy with Headphones & Laptop (3D cutout overlapping course card) */}
              <div className="absolute left-[60px] sm:left-[68px] md:left-[76px] top-[6px] sm:top-[4px] md:top-[2px] z-20 w-[330px] sm:w-[380px] md:w-[410px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.22)]">
                <Image
                  src="/images/home/student-hero.png"
                  alt="Student learning with ByteSpace"
                  width={516}
                  height={483}
                  priority
                  unoptimized
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Right Floating Card: Learning Progress (Shifted to the right as requested) */}
              <div className="absolute left-[280px] sm:left-[310px] md:left-[330px] top-[150px] sm:top-[154px] md:top-[158px] z-30 w-[140px] sm:w-[150px] md:w-[156px] bg-white rounded-[18px] p-2.5 sm:p-3 shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-[#EBEBEF]">
                <div className="text-[10px] sm:text-[11px] font-medium text-[#6C7278]">
                  Learning Progress
                </div>
                <div className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1B1D1F] leading-tight my-0.5 tracking-tight">
                  55%
                </div>
                <div className="w-full h-1 sm:h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden mt-1 sm:mt-1.5">
                  <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
