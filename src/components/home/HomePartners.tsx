import Image from "next/image";
import Container from "@/components/layout/Container";

export default function HomePartners() {
  return (
    <section className="bg-[#F5F5F6] py-12 sm:py-14 md:py-[70px] border-b border-[#EBEBEF]">
      <Container className="flex items-center justify-center">
        <div className="w-full max-w-[1160px] mx-auto flex items-center justify-center">
          <Image
            src="/images/home-partners-logos.png"
            alt="Trusted partner organizations and brands"
            width={1160}
            height={62}
            className="w-full max-w-[1160px] h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
