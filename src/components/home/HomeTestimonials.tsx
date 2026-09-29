import Image from "next/image";
import Container from "@/components/layout/Container";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatar-student-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatar-student-6.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatar-student-7.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function HomeTestimonials() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage: `
          radial-gradient(ellipse 520px 420px at 0% 100%, rgba(195, 215, 255, 0.75) 0%, rgba(221, 228, 247, 0.4) 45%, transparent 75%),
          radial-gradient(ellipse 700px 650px at 98% 35%, rgba(212, 251, 32, 0.5) 0%, rgba(225, 252, 80, 0.22) 48%, transparent 75%),
          radial-gradient(circle 500px at 50% 10%, rgba(212, 251, 32, 0.42) 0%, rgba(225, 252, 80, 0.16) 50%, transparent 70%)
        `,
      }}
    >
      <Container>
        {/* Header split into title on left and description on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#242528] tracking-tight leading-[1.14] max-w-[480px]">
              Discover What Our Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6 flex lg:justify-end">
            <p className="text-sm sm:text-base text-[#6C7278] leading-relaxed max-w-[520px]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-[24px] border border-[#EBEBEF] p-8 sm:p-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-[#F5F5F6] border border-[#EBEBEF]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#242528]">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#003BE2] mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm text-[#4E555C] leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
