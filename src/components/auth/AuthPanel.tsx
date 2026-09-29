// Dedicated white panel wrapper for authentication forms.
// Renders elevated surface with rounded-32px styling matching Figma desktop frames.

import { cn } from "@/lib/cn";

interface AuthPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuthPanel({ children, className }: AuthPanelProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[500px] bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-between transition-all",
        className,
      )}
    >
      {children}
    </div>
  );
}
