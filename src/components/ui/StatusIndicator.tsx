import { site } from "@/data/site";

export function StatusIndicator() {
  return (
    <span className="inline-flex max-w-[140px] items-center gap-2 font-mono text-[10px] text-offwhite/70 sm:max-w-none sm:text-xs">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 glow-emerald" />
      </span>
      {site.status}
    </span>
  );
}
