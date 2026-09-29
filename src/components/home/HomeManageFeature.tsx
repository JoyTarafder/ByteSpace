import Image from "next/image";
import Container from "@/components/layout/Container";

const FEATURE_POINTS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const STUDENT_AVATARS = [
  "/images/avatar-student-1.png",
  "/images/avatar-student-2.png",
  "/images/avatar-student-6.png",
  "/images/avatar-student-7.png",
  "/images/avatar-student-8.png",
];

export default function HomeManageFeature() {
  return (
    <section className="relative overflow-visible pt-0 sm:pt-2 lg:pt-0 pb-16 sm:pb-20 md:pb-24 bg-transparent">
      {/* Background Ambient Glow Orbs */}
      {/* Bottom-Left Ambient Lime Glow */}
      <div className="absolute -bottom-16 -left-16 w-[550px] h-[520px] bg-[#E2FC53]/45 rounded-full blur-[140px] pointer-events-none -z-10" />
      {/* Bottom-Right Ambient Blue Glow */}
      <div className="absolute -bottom-16 -right-10 w-[560px] h-[520px] bg-[#3B82F6]/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Visual Composition with Creator, Revenue Badges & Happy Students */}
          <div className="lg:col-span-6 flex items-start justify-center relative order-2 lg:order-1">
            <div className="relative w-full max-w-[560px] h-[480px] sm:h-[530px] md:h-[545px] mx-auto select-none">
              {/* 3D Lime Zigzag Spring on Right (Beside Creator's Shoulder) */}
              <div className="absolute right-[28px] sm:right-[44px] md:right-[155px] top-[105px] sm:top-[120px] md:top-[150px] z-30 w-[70px] sm:w-[90px] md:w-[95px] pointer-events-none drop-shadow-sm">
                <Image
                  src="/images/home/lime-zigzag.png"
                  alt=""
                  width={160}
                  height={180}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Blue Card 1: Total Revenue (Top-Left) */}
              <div className="absolute left-[20px] sm:left-[30px] md:left-[38px] top-[50px] sm:top-[60px] md:top-[68px] z-10 w-[190px] sm:w-[210px] md:w-[220px] bg-[#003BE2] rounded-[18px] sm:rounded-[20px] p-3 sm:p-3.5 shadow-[0_14px_32px_rgba(0,59,226,0.28)] text-white">
                <div className="text-[11.5px] sm:text-[12.5px] font-semibold text-white/95 leading-tight">
                  Total Revenue
                </div>
                <div className="text-[9px] sm:text-[10px] text-white/70 mt-0.5">
                  July 1-28
                </div>
                <div className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight my-1">
                  $120.29
                </div>
                {/* Clean split progress bar (Lime + White segments) */}
                <div className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden flex items-center mt-1">
                  <div className="h-full bg-[#D4FB20] rounded-l-full w-[68%]" />
                  <div className="h-full bg-white rounded-r-full w-[32%]" />
                </div>
              </div>

              {/* Blue Card 2: Year to Date (Middle-Left) */}
              <div className="absolute left-[20px] sm:left-[30px] md:left-[38px] top-[175px] sm:top-[195px] md:top-[208px] z-10 w-[116px] sm:w-[126px] md:w-[104px] bg-[#003BE2] rounded-[16px] sm:rounded-[18px] p-2.5 sm:p-2.5 shadow-[0_12px_28px_rgba(0,59,226,0.26)] text-white">
                <div className="text-[10px] sm:text-[10.5px] font-semibold text-white/95 leading-tight">
                  Year to Date
                </div>
                <div className="text-[8px] sm:text-[8.5px] text-white/70 mt-0.5">
                  2023
                </div>
                <div className="text-[14px] sm:text-[15.5px] font-bold text-white tracking-tight my-0.5">
                  $1,200.38
                </div>
                <div className="pt-0.5">
                  <span className="inline-flex items-center justify-center bg-[#D4FB20] text-[#1B1D1F] text-[8.5px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full">
                    +12$
                  </span>
                </div>
              </div>

              {/* Center: Woman with Headphones & Tablet */}
              <div className="absolute inset-x-0 bottom-0 mx-auto z-20 w-[310px] sm:w-[380px] md:w-[415px] drop-shadow-[0_25px_30px_rgba(0,0,0,0.16)]">
                <Image
                  src="/images/home/creator-woman-headphones.png"
                  alt="Course Creator"
                  width={579}
                  height={719}
                  priority
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>

              {/* White Card: Happy Students (Bottom-Right, overlapping Tablet) */}
              <div className="absolute right-1 sm:right-4 bottom-8 sm:bottom-12 md:bottom-14 z-30 w-[235px] sm:w-[265px] bg-white rounded-[22px] p-3 sm:p-4 shadow-[0_20px_45px_rgba(0,0,0,0.12)] border border-[#EBEBEF]">
                <div className="text-[14px] sm:text-[15px] font-bold text-[#1B1D1F]">
                  Happy Students
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 mb-2.5">
                  <span className="text-[12px] sm:text-[13px] font-bold text-[#1B1D1F]">4.5</span>
                  <span className="text-[11px] sm:text-[12px] text-[#6C7278]">(240)</span>
                  <svg className="w-3.5 h-3.5 text-[#FFB800] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex items-center">
                  {STUDENT_AVATARS.map((src, idx) => (
                    <Image
                      key={idx}
                      src={src}
                      alt="Student avatar"
                      width={32}
                      height={32}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover -ml-2 first:ml-0 shadow-xs"
                    />
                  ))}
                  {/* Lime 2K+ Circle Badge */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-[#D4FB20] text-[#1B1D1F] text-[10px] sm:text-[11px] font-bold flex items-center justify-center -ml-2 shrink-0 shadow-xs">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Subtitle, Checkmark List */}
          <div className="lg:col-span-6 flex flex-col justify-start max-w-[540px] order-1 lg:order-2 pt-2 sm:pt-4 lg:pt-8">
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-bold text-[#242528] tracking-tight leading-[1.14] mb-6">
              Create &amp; Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>
            <p className="text-base text-[#6C7278] leading-relaxed mb-8 max-w-[480px]">
              <strong className="text-[#242528] font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {FEATURE_POINTS.map((point) => (
                <div key={point} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-xs">
                    <svg
                      className="w-3.5 h-3.5 text-white stroke-[3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-[#242528]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
