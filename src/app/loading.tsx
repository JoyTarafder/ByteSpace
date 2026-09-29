export default function Loading() {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center p-8">
      {/* Animated Brand Pulse Loader */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-[#003BE2]/20 animate-ping" />
        <div className="w-12 h-12 rounded-full border-4 border-[#003BE2] border-t-[#D4FB20] animate-spin" />
      </div>
      <p className="mt-6 text-sm font-semibold text-[#6C7278] tracking-wide animate-pulse">
        Loading ByteSpace...
      </p>
    </div>
  );
}
