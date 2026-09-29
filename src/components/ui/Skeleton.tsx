import { cn } from "@/lib/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[#E5E6E8]/80",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}
