import Image from "next/image";
import Link from "next/link";
import BlueGrid from "@/components/layout/BlueGrid";
import Container from "@/components/layout/Container";
import { ROUTES } from "@/lib/constants";
export default function HomeCreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1F53E5]">
      <BlueGrid className="h-[480px] pt-[90px] pb-[75px] flex flex-col items-center justify-start text-white relative">
        {/* Floating 3D decorative shapes on left side */}
        <div
          className="absolute left-0 top-0 h-[480px] w-[220px] sm:w-[260px] md:w-[300px] lg:w-[330px] pointer-events-none select-none z-10 opacity-70 md:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <Image
            src="/images/home/creator-cta-left.png"
            alt=""
            width={330}
            height={480}
            className="w-full h-full object-contain object-left"
            priority
          />
        </div>

        {/* Floating 3D decorative shapes on right side */}
        <div
          className="absolute right-0 top-0 h-[480px] w-[230px] sm:w-[280px] md:w-[320px] lg:w-[360px] pointer-events-none select-none z-10 opacity-70 md:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <Image
            src="/images/home/creator-cta-right.png"
            alt=""
            width={360}
            height={480}
            className="w-full h-full object-contain object-right"
            priority
          />
        </div>

        <Container className="relative z-20 text-center max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-6 flex flex-col items-center">
          <h2
            className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[48px] font-semibold text-white tracking-[-0.02em] leading-[120%] mb-[27px] font-poppins"
            style={{
              fontFamily: 'var(--font-poppins), "Poppins", sans-serif',
            }}
          >
            Unlock Your Potential as a <br />
            Creator with ByteSpace
          </h2>

          <p
            className="text-[13.5px] sm:text-[14px] md:text-[14.5px] max-w-[1020px] mx-auto mb-[33px] font-normal leading-[160%] font-poppins"
            style={{
              fontFamily: 'var(--font-poppins), "Poppins", sans-serif',
              color: "var(--Shuttle-Gray-100, #E5E6E8)",
            }}
          >
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become&nbsp;a
            <br className="hidden md:inline" />
            {" "}part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase&nbsp;your
            <br className="hidden md:inline" />
            {" "}expertise by publishing your finest course on the ByteSpace Course Library.
          </p>


          <Link
            href={ROUTES.register}
            className="h-[46px] px-8 rounded-full bg-[#D4FB20] hover:bg-[#c6ec15] active:scale-95 text-[#1B1D1F] font-semibold text-[15px] sm:text-[16px] inline-flex items-center justify-center transition-all cursor-pointer shadow-md hover:shadow-lg font-poppins"
          >
            Join as Creator
          </Link>

        </Container>
      </BlueGrid>
    </section>
  );
}

