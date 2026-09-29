"use client";

import BlueGrid from "@/components/layout/BlueGrid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function HomeHero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  };

  return (
    <section className="relative overflow-hidden w-full">
      <BlueGrid
        className="relative text-white flex flex-col items-center justify-between"
        style={{ paddingTop: "75px", paddingBottom: "0" }}
      >
        {/* ═══════════ LEFT 3D DECORATIVES ═══════════ */}

        {/* Lime zigzag — top-left */}
        <div className="absolute top-[100px] sm:top-[110px] lg:top-[220px] left-[-25px] sm:left-[-15px] lg:left-[-60px] w-[130px] sm:w-[160px] lg:w-[240px] pointer-events-none select-none z-[2]">
          <Image
            src="/images/home/lime-zigzag.png"
            alt=""
            width={190}
            height={190}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* White coil — mid-left */}
        <div className="absolute top-[51%] left-[2%] sm:left-[3.5%] lg:left-[16%] w-[65px] sm:w-[80px] lg:w-[135px] pointer-events-none select-none z-[2] -rotate-15">
          <Image
            src="/images/home/white-coil.png"
            alt=""
            width={95}
            height={110}
            unoptimized
            className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* White donut — bottom-left */}
        <div className="absolute bottom-[15px] left-[-30px] sm:left-[-20px] lg:left-[145px] w-[150px] sm:w-[190px] lg:w-[230px] pointer-events-none select-none z-[30]">
          <Image
            src="/images/home/white-donut.png"
            alt=""
            width={230}
            height={230}
            priority
            unoptimized
            className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
          />
        </div>

        {/* ═══════════ RIGHT 3D DECORATIVES ═══════════ */}

        {/* Lime cylinder — top-right */}
        <div className="absolute top-[90px] sm:top-[100px] lg:top-[235px] right-[-25px] sm:right-[-15px] lg:right-[-20px] w-[85px] sm:w-[100px] lg:w-[185px] pointer-events-none select-none z-[2]">
          <Image
            src="/images/home/lime-cylinder-clean.png"
            alt=""
            width={115}
            height={155}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* White pyramid — mid-right */}
        <div className="absolute top-[49%] right-[3%] sm:right-[5%] lg:right-[13%] w-[95px] sm:w-[120px] lg:w-[145px] pointer-events-none select-none z-[2]">
          <Image
            src="/images/home/white-pyramid.png"
            alt=""
            width={145}
            height={145}
            unoptimized
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* White zigzag — bottom-right */}
        <div className="absolute bottom-[40px] right-[-25px] sm:right-[-15px] lg:right-[125px] w-[150px] sm:w-[190px] lg:w-65 pointer-events-none select-none z-[2] rotate-[125deg]">
          <Image
            src="/images/home/white-zigzag.png"
            alt=""
            width={230}
            height={230}
            priority
            unoptimized
            className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
          />
        </div>

        {/* ═══════════ HERO HEADER TEXT & SEARCH ═══════════ */}
        <div className="relative z-10 text-center max-w-[920px] mx-auto px-4 w-full">
          <h1
            className="font-bold text-white text-center tracking-[-0.025em] lg:mt-18 sm:mt-3"
            style={{
              fontFamily: 'var(--font-poppins), "Poppins", sans-serif',
              fontSize: "clamp(34px, 4.4vw, 58px)",
              lineHeight: "1.12",
              marginBottom: "12px",
            }}
          >
            Get Access to Hundreds <br /> Courses Available
          </h1>

          <p
            className="text-center font-normal mx-auto max-w-[820px] lg:mt-9 my-3 sm:my-4"
            style={{
              fontFamily: 'var(--font-poppins), "Poppins", sans-serif',
              color: "#E5E6E8",
              fontSize: "clamp(13px, 1.05vw, 15.5px)",
              lineHeight: "1.5",
            }}
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mx-auto flex items-center justify-center gap-3 w-full max-w-[510px] lg:mt-18 my-2.5 sm:my-3"
          >
            <div className="flex-1 bg-white rounded-full flex items-center shadow-lg h-[48px] px-4">
              <svg
                className="w-4 h-4 text-[#9CA3AF] mr-2.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent outline-none text-[#1B1D1F] text-[14px]"
                style={{
                  fontFamily: 'var(--font-poppins), "Poppins", sans-serif',
                }}
              />
            </div>
            <button
              type="submit"
              className="bg-[#D4FB20] hover:bg-[#c6ec15] active:scale-95 text-[#1B1D1F] font-semibold rounded-full transition-all cursor-pointer shrink-0 h-[48px] px-7 text-[14px] shadow-md"
              style={{
                fontFamily: 'var(--font-poppins), "Poppins", sans-serif',
              }}
            >
              Search
            </button>
          </form>
        </div>

        {/* ═══════════ HERO VISUAL STAGE ═══════════ */}
        <div
          className="relative w-full max-w-[1100px] mx-auto flex justify-center items-end"
          style={{
            height: "clamp(360px, 40vw, 490px)",
            marginTop: "-55px",
            zIndex: 5,
          }}
        >
          {/* Lime Circle Arc Asset from Figma */}
          <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[1149px] pointer-events-none select-none z-[1] flex justify-center">
            <Image
              src="/images/home/hero-ellipse-arc.png"
              alt=""
              width={1149}
              height={442}
              priority
              className="w-[1149px] max-w-none h-auto object-contain object-bottom"
            />
          </div>

          {/* Student Cutout Image */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
            style={{
              width: "clamp(300px, 36vw, 470px)",
              zIndex: 3,
            }}
          >
            <Image
              src="/images/home/student-hero.png"
              alt="Student with headphones and laptop"
              width={470}
              height={530}
              priority
              className="w-full h-auto object-contain object-bottom"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Left) */}
          <div
            className="absolute bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.14)] border border-white/90 transition-transform hover:scale-105"
            style={{
              top: "30%",
              left: "clamp(120px, 62%, 240px)",
              zIndex: 10,
              padding: "13px 18px",
              minWidth: "165px",
            }}
          >
            <p className="text-[#1B1D1F] font-bold text-[13.5px] leading-tight font-poppins">
              UI/UX Design
            </p>
            <p className="text-[#8C9298] text-[11px] mt-1 font-poppins">
              200 Courses &nbsp;•&nbsp; 1000+ Students
            </p>
          </div>

          {/* Floating Card 2: Learning Progress 55% (Right) */}
          <div
            className="absolute bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.14)] border border-white/90 transition-transform hover:scale-105"
            style={{
              top: "38%",
              right: "clamp(60px, 20%, 290px)",
              zIndex: 10,
              padding: "14px 20px",
              minWidth: "195px",
            }}
          >
            <p className="text-[#8C9298] text-[11px] mb-1 font-poppins">
              Learning Progress
            </p>
            <p className="text-[#1B1D1F] font-extrabold text-[34px] leading-none mb-2.5 font-poppins">
              55%
            </p>
            <div className="h-[5px] bg-[#EAECF0] rounded-full overflow-hidden w-full">
              <div className="h-full w-[55%] bg-[#D4FB20] rounded-full" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Bottom-Left) */}
          <div
            className="absolute bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.14)] border border-white/90 transition-transform hover:scale-105"
            style={{
              bottom: "clamp(30px, 6vw, 65px)",
              left: "clamp(120px, 20%, 230px)",
              zIndex: 10,
              padding: "12px 14px",
            }}
          >
            <p className="text-[#1B1D1F] font-bold text-[13px] font-poppins">
              Happy Students
            </p>
            <div className="flex items-center gap-1.5 my-1">
              <span className="text-[#1B1D1F] font-semibold text-[12px]">
                4.5
              </span>
              <span className="text-[#8C9298] text-[11px]">(240)</span>
              <Image
                src="/images/home/Star.svg"
                alt=""
                width={14}
                height={13}
                className="w-3.5 h-3.5 inline-block shrink-0"
              />
            </div>
            <div className="flex items-center mt-2">
              {[
                "/images/home/student-avatar-1.png",
                "/images/avatar-student-10.png",
                "/images/avatar-student-9.png",
                "/images/avatar-student-11.png",
                "/images/avatar-student-5.png",
                "/images/avatar-student-8.png",
                "/images/avatar-student-2.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-[28px] h-[28px] rounded-full border-2 border-white overflow-hidden relative shrink-0 shadow-sm"
                  style={{
                    marginLeft: i === 0 ? 0 : "-7px",
                    zIndex: i + 1,
                  }}
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
                className="w-[28px] h-[28px] rounded-full bg-[#D4FB20] flex items-center justify-center shrink-0 -ml-[7px] relative shadow-sm"
                style={{ zIndex: 10 }}
              >
                <span className="text-[#1B1D1F] text-[9.5px] font-bold leading-none">
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>
      </BlueGrid>
    </section>
  );
}
