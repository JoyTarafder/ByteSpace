// AvatarStack — overlapping row of small avatars with optional count label or badge.
// Used on course cards and hero sections to show enrolled students.

import Avatar from "./Avatar";
import { cn } from "@/lib/cn";

interface AvatarStackProps {
  /** Array of avatar image URLs (max 4 displayed) */
  avatars: string[];
  /** Total count label shown after the stack (e.g. "2K+ Students") */
  countLabel?: string;
  /** Optional badge count inside overlapping lime circle (e.g. "26+") */
  badgeCount?: string | number;
  className?: string;
}

/** Stacked circular avatars with optional student count label and lime counter pill. */
export default function AvatarStack({
  avatars,
  countLabel,
  badgeCount,
  className,
}: AvatarStackProps) {
  const displayed = avatars.slice(0, 4);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center">
        {displayed.map((src, i) => (
          <div
            key={src}
            className={cn("border-2 border-white rounded-full", i !== 0 && "-ml-2")}
            style={{ zIndex: displayed.length - i }}
          >
            <Avatar src={src} alt={`Student ${i + 1}`} size="sm" />
          </div>
        ))}

        {badgeCount && (
          <div
            className="-ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-[#D4FB20] text-[#242528] text-[11px] font-bold border-2 border-white shrink-0"
            style={{ zIndex: 0 }}
          >
            {badgeCount}
          </div>
        )}
      </div>

      {countLabel && (
        <span className="font-[family-name:var(--font-satoshi)] font-medium text-[14px] text-[#4B4C53]">
          {countLabel}
        </span>
      )}
    </div>
  );
}
