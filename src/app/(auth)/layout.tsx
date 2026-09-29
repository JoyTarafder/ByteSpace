// Authentication route-group layout (Login / Register).
// Dedicated full-viewport blue grid without public header and footer.

import BlueGrid from "@/components/layout/BlueGrid";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-[#0052FF]">
      <BlueGrid className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 py-4 sm:py-6 lg:py-8">
        {children}
      </BlueGrid>
    </div>
  );
}
