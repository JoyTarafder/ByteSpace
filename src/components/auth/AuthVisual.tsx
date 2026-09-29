// Authentication promotional visual composition.
// Shared across /login and /register with page-specific heading and copy.
// Matches Figma Login.png and Register.png 1:1.

import Logo from "@/components/ui/Logo";
import Image from "next/image";

interface AuthVisualProps {
  title: string;
  description: string;
}

export default function AuthVisual({ title, description }: AuthVisualProps) {
  return (
    <div className="flex flex-col justify-start h-full py-4 text-white">
      {/* Top Header Block */}
      <div className="flex flex-col items-start gap-8 lg:gap-11 mb-6 lg:mb-8">
        {/* Brand Mark */}
        <Logo variant="light" showText={false} size="lg" />

        {/* Heading & Subtext */}
        <div className="flex flex-col gap-3 max-w-[480px]">
          <h1 className="text-[32px] sm:text-[36px] font-bold text-white tracking-tight leading-[1.2]">
            {title}
          </h1>
          <p className="text-[15px] sm:text-[16px] text-white/80 leading-[26px]">
            {description}
          </p>
        </div>
      </div>

      {/* Showcase Visual: Real interactive course cards, avatar stacks, badges & 3D decorative assets */}
      <div className="hidden lg:block relative mt-8 lg:mt-12 w-[530px] h-[560px] origin-top-left xl:scale-100 lg:scale-[0.88] 2xl:scale-100 select-none">
        <div className="relative w-full h-full">
          {/* 1. Background Card: Build Digital Asset */}
          <div
            className="absolute left-[10px] top-[67px] w-[340px] bg-white rounded-[24px] border border-white/60 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.14)] z-[2] transition-transform duration-300 hover:scale-[1.01]"
            style={{
              fontFamily: 'var(--font-poppins), "Poppins", sans-serif',
            }}
          >
            {/* Thumbnail */}
            <div className="relative w-full h-[180px] rounded-[16px] overflow-hidden bg-[#F5F5F6]">
              <Image
                src="/images/course-thumb-digital-asset.jpg"
                alt="Build Digital Asset"
                fill
                className="object-cover"
              />
              {/* 17 Lessons pill */}
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#1B1D1F] shadow-sm">
                  17 Lessons
                </span>
              </div>
            </div>

            {/* Card Info */}
            <div className="mt-3.5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[18px] text-[#1B1D1F] tracking-tight">
                  Build Digital Asset
                </h3>
                <div className="flex items-center gap-1 text-[13px] font-bold text-[#1B1D1F]">
                  <span>4.5</span>
                  <span className="text-[#D4FB20] text-[15px] leading-none">
                    ★
                  </span>
                </div>
              </div>
              <p className="text-[12px] text-[#4F555A] mt-0.5">
                by <span className="text-[#0052FF]">purepearl studio</span>
              </p>

              <div className="mt-3 flex items-center justify-start gap-2.5">
                <div className="flex items-center gap-1.5 bg-[#F4F5F7] px-2.5 py-1 rounded-full text-[11px] font-medium text-[#4B4C53] shrink-0">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.75 3.3335H16.25V16.6668H13.75V3.3335ZM3.75 11.6668H6.25V16.6668H3.75V11.6668ZM8.75 7.50016H11.25V16.6668H8.75V7.50016Z" />
                  </svg>
                  <span>Beginner</span>
                </div>

                {/* Avatars */}
                <div className="flex items-center">
                  {[
                    "/images/avatar-student-5.png",
                    "/images/avatar-student-6.png",
                    "/images/avatar-student-8.png",
                    "/images/avatar-student-9.png",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-[26px] h-[26px] rounded-full border-2 border-white overflow-hidden relative -ml-2 first:ml-0"
                      style={{ zIndex: 10 - i }}
                    >
                      <Image
                        src={src}
                        alt=""
                        width={26}
                        height={26}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className="w-[26px] h-[26px] rounded-full bg-[#1B1D1F] border-2 border-white flex items-center justify-center shrink-0 -ml-2 text-white text-[9px] font-bold"
                    style={{ zIndex: 0 }}
                  >
                    26+
                  </div>
                </div>
              </div>

              <div className="mt-2.5 text-[#0052FF] font-bold text-[17px] leading-tight">
                $25
                <span className="text-[#8C9298] text-[12px] font-normal">
                  /lifetime
                </span>
              </div>
            </div>
          </div>

          {/* 2. 3D Lime Donut: floats over main card top-left */}
          <div className="absolute left-[60px] top-[4px] w-[102px] h-[94px] z-30 pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
            <Image
              src="/images/auth-lime-donut.png"
              alt=""
              width={102}
              height={94}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 3. Foreground Main Card: the Power of Big Data */}
          <div
            className="absolute left-[120px] -top-[36px] w-[360px] bg-white rounded-[26px] border border-white/90 p-4.5 shadow-[0_24px_50px_rgba(0,0,0,0.22)] z-10 transition-transform duration-300 hover:scale-[1.02]"
            style={{
              fontFamily: 'var(--font-poppins), "Poppins", sans-serif',
            }}
          >
            {/* Course Thumbnail */}
            <div className="relative w-full h-[190px] rounded-[18px] overflow-hidden bg-[#0A0D14]">
              <Image
                src="/images/course-big-data-thumb.png"
                alt="the Power of Big Data"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Card Body */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[19.5px] text-[#1B1D1F] tracking-tight">
                  the Power of Big Data
                </h3>
                <div className="flex items-center gap-1 text-[14px] font-bold text-[#1B1D1F]">
                  <span>4.5</span>
                  <span className="text-[#D4FB20] text-[16px] leading-none">
                    ★
                  </span>
                </div>
              </div>
              <p className="text-[12.5px] text-[#4F555A] mt-0.5">
                by <span className="text-[#0052FF]">purepearl studio</span>
              </p>

              <div className="mt-3.5 flex items-center justify-start gap-2.5">
                <div className="flex items-center gap-1.5 bg-[#F4F5F7] px-3 py-1.5 rounded-full text-[11.5px] font-medium text-[#4B4C53] shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.75 3.3335H16.25V16.6668H13.75V3.3335ZM3.75 11.6668H6.25V16.6668H3.75V11.6668ZM8.75 7.50016H11.25V16.6668H8.75V7.50016Z" />
                  </svg>
                  <span>Beginner</span>
                </div>

                {/* Avatars */}
                <div className="flex items-center">
                  {[
                    "/images/avatar-student-5.png",
                    "/images/avatar-student-6.png",
                    "/images/avatar-student-8.png",
                    "/images/avatar-student-9.png",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative -ml-2 first:ml-0"
                      style={{ zIndex: 10 - i }}
                    >
                      <Image
                        src={src}
                        alt=""
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className="w-7 h-7 rounded-full bg-[#1B1D1F] border-2 border-white flex items-center justify-center shrink-0 -ml-2 text-white text-[10px] font-bold"
                    style={{ zIndex: 0 }}
                  >
                    26+
                  </div>
                </div>
              </div>

              <div className="mt-2.5 text-[#0052FF] font-bold text-[18px] leading-tight">
                $25
                <span className="text-[#8C9298] text-[12px] font-normal">
                  /lifetime
                </span>
              </div>
            </div>
          </div>

          {/* 4. 3D Lime Cone: sits in front of background card bottom-left */}
          <div className="absolute left-[18px] top-[375px] w-[104px] h-[116px] z-[15] pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.22)]">
            <Image
              src="/images/auth-cone-perfect.png"
              alt=""
              width={104}
              height={116}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 5. Happy Students Lime Card */}
          <div
            className="absolute left-[226px] top-[365px] w-[260px] bg-[#D4FB20] rounded-[22px] p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.22)] z-[20] transition-transform duration-300 hover:scale-[1.03]"
            style={{
              fontFamily: 'var(--font-poppins), "Poppins", sans-serif',
            }}
          >
            <div>
              <h4 className="font-bold text-[14.5px] text-[#1B1D1F] leading-tight">
                Happy Students
              </h4>
              <div className="flex items-center gap-1 text-[11.5px] font-semibold text-[#1B1D1F] mt-0.5">
                <span>4.5</span>
                <span className="text-[#4B4C53]">(240)</span>
                <span className="text-[#0052FF] text-[13px] ml-0.5 leading-none">
                  ★
                </span>
              </div>
            </div>

            {/* Overlapping student avatars */}
            <div className="flex items-center mt-2.5">
              {[
                "/images/avatar-student-1.png",
                "/images/avatar-student-5.png",
                "/images/avatar-student-2.png",
                "/images/avatar-student-7.png",
                "/images/avatar-student-10.png",
                "/images/avatar-student-11.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-[26px] h-[26px] rounded-full border-2 border-[#D4FB20] overflow-hidden relative -ml-2 first:ml-0"
                  style={{ zIndex: 10 - i }}
                >
                  <Image
                    src={src}
                    alt=""
                    width={26}
                    height={26}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div
                className="w-[26px] h-[26px] rounded-full bg-[#1B1D1F] border-2 border-[#D4FB20] flex items-center justify-center shrink-0 -ml-2 text-white text-[9px] font-bold"
                style={{ zIndex: 0 }}
              >
                2K+
              </div>
            </div>
          </div>

          {/* 6. 3D White Zigzag: floating over main card and Happy Students card */}
          <div className="absolute left-[372px] top-[272px] w-[105px] h-[140px] z-[30] pointer-events-none drop-shadow-[0_16px_32px_rgba(0,0,0,0.22)]">
            <Image
              src="/images/auth-zigzag-clean.png"
              alt=""
              width={105}
              height={140}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
