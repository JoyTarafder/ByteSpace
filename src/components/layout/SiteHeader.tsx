// Desktop and mobile navigation header for ByteSpace.
// Transparent foreground over blue grid sections, adhering to 1440px desktop reference.

import Container from "@/components/layout/Container";
import MobileNav from "@/components/layout/MobileNav";
import Logo from "@/components/ui/Logo";
import { ROUTES } from "@/lib/constants";
import Link from "next/link";

interface SiteHeaderProps {
  className?: string;
}

export default function SiteHeader({ className }: SiteHeaderProps) {
  const navLinks = [
    { label: "Home", href: ROUTES.home },
    { label: "Courses", href: ROUTES.search },
    { label: "Creators", href: ROUTES.creator("sarah-jenkins") },
  ];

  return (
    <header
      className={`w-full bg-transparent z-40 transition-colors ${className ?? ""}`}
    >
      <Container className="flex h-20 sm:h-24 lg:h-[120px] items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Logo variant="light" size="md" />
        </div>

        {/* Center: Main Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] font-medium leading-[120%] text-[#F5F5F6] hover:text-[#D4FB20] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20] rounded px-1"
              style={{
                fontFamily: '"Satoshi", sans-serif',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "120%",
                color: "var(--Shuttle-Gray-50, #F5F5F6)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Account Actions and Shopping Bag (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href={ROUTES.login}
            className="text-[16px] font-medium leading-[120%] text-[#F5F5F6] hover:text-[#D4FB20] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20] rounded px-1"
            style={{
              fontFamily: '"Satoshi", sans-serif',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "120%",
              color: "var(--Shuttle-Gray-50, #F5F5F6)",
            }}
          >
            Sign In
          </Link>

          <Link
            href={ROUTES.register}
            className="text-[16px] font-medium leading-[120%] text-[#F5F5F6] hover:text-[#D4FB20] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20] rounded px-1"
            style={{
              fontFamily: '"Satoshi", sans-serif',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "120%",
              color: "var(--Shuttle-Gray-50, #F5F5F6)",
            }}
          >
            Join Us
          </Link>

          {/* Shopping bag button with SVG from public/icons/Style=Outlined-4.svg */}
          <button
            type="button"
            aria-label="Shopping bag, 0 items"
            className="p-1.5 text-white hover:text-[#D4FB20] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Trigger */}
        <MobileNav navLinks={navLinks} />
      </Container>
    </header>
  );
}
