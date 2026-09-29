// Public route-group layout — wraps public pages with SiteHeader and SiteFooter.
// Keeps auth pages completely independent without header/footer clutter.

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      {/* Transparent header positioned over the blue grid hero section */}
      <SiteHeader className="absolute top-0 left-0 right-0" />

      {/* Main page content */}
      <main className="flex-1">{children}</main>

      {/* Shared site footer */}
      <SiteFooter />
    </div>
  );
}
