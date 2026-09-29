// Blue grid background section — used on hero areas and auth pages.
// Renders the brand-blue background with the white grid overlay from Design.md.

import { CSSProperties } from "react";
import { cn } from "@/lib/cn";

interface BlueGridProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function BlueGrid({ children, className, style }: BlueGridProps) {
  return (
    <section className={cn("bg-blue-grid", className)} style={style}>
      {children}
    </section>
  );
}
