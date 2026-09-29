// Shared SiteFooter component for all public pages.
// Matches exact columns, typography, and copyright row from Figma 1440px desktop reference.

import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import Container from "@/components/layout/Container";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "@/components/layout/NewsletterForm";

export default function SiteFooter() {
  const col1Links = [
    { label: "Featured Courses", href: ROUTES.search },
    { label: "Featured Categories", href: ROUTES.search },
    { label: "Business", href: `${ROUTES.search}?category=business` },
    { label: "IT", href: `${ROUTES.search}?category=it` },
    { label: "Design", href: `${ROUTES.search}?category=design` },
  ];

  const col2Links = [
    { label: "Development", href: `${ROUTES.search}?category=development` },
    { label: "Marketing", href: `${ROUTES.search}?category=marketing` },
    { label: "Photography", href: `${ROUTES.search}?category=photography` },
    { label: "Finance", href: `${ROUTES.search}?category=finance` },
    { label: "Sport", href: `${ROUTES.search}?category=sport` },
  ];

  const col3Links = [
    { label: "Become a Creator", href: ROUTES.register },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <footer className="w-full bg-white border-t border-[#E5E6E8]">
      <Container className="pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Brand & Newsletter Column (left) */}
          <div className="lg:col-span-6 max-w-[480px]">
            <Logo variant="dark" size="md" />

            <p className="mt-4 text-[16px] leading-[24px] text-[#4B4C53]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <NewsletterForm />

            <p className="mt-4 text-[12px] leading-[18px] text-[#949696]">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy"
                className="underline hover:text-[#003BE2] transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Navigation Links Columns (right) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <ul className="flex flex-col gap-3.5">
                {col1Links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[16px] text-[#242528] hover:text-[#003BE2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="flex flex-col gap-3.5">
                {col2Links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[16px] text-[#242528] hover:text-[#003BE2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="flex flex-col gap-3.5">
                {col3Links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[16px] text-[#242528] hover:text-[#003BE2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Legal / Copyright Strip */}
      <div className="border-t border-[#CED0D3]">
        <Container className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-[#4B4C53]">
            © 2025 ByteSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
