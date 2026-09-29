// Shared layout wrapper that constrains content to max-width with consistent gutters.

import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-[120px] max-w-[1440px]",
        className
      )}
    >
      {children}
    </div>
  );
}
