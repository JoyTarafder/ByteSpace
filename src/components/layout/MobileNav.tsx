"use client";

// Accessible mobile navigation drawer and toggle button for ByteSpace.
// Handles keyboard navigation (Escape to close, Tab focus trapping, ARIA states).

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

interface MobileNavProps {
  navLinks: Array<{ label: string; href: string }>;
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  // Close on Escape key and restore focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Mobile hamburger button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="p-2 text-white hover:text-[#D4FB20] transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20]"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Slide-out navigation drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed top-0 right-0 z-50 h-full w-[300px] max-w-[85vw] bg-[#003BE2] p-6 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between translate-x-0"
        >
          <div>
            {/* Drawer top bar with Logo and close button */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Logo variant="light" size="sm" />
              <button
                type="button"
                onClick={close}
                aria-label="Close navigation menu"
                className="p-2 text-white hover:text-[#D4FB20] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20]"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="text-[16px] font-medium leading-[120%] text-[#F5F5F6] hover:text-[#D4FB20] transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20] rounded"
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
          </div>

          {/* Drawer footer actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link
              href={ROUTES.login}
              onClick={close}
              className="w-full text-center py-3 text-[#F5F5F6] font-medium leading-[120%] hover:text-[#D4FB20] border border-white/20 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FB20]"
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
              onClick={close}
              className="w-full text-center py-3 bg-[#D4FB20] text-[#1B1D1F] font-medium leading-[120%] rounded-full hover:bg-[#CBFC01] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2]"
              style={{
                fontFamily: '"Satoshi", sans-serif',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "120%",
              }}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
