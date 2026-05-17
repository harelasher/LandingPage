import { site } from "@/data/site";

export function TelemetryTicker() {
  const line = site.ticker.join("   ·   ");
  const duplicated = `${line}   ·   ${line}`;

  return (
    <div
      className="overflow-hidden border-t border-offwhite/10 bg-[#0a0a0c] py-2"
      aria-hidden
    >
      <div className="ticker-track font-mono text-[10px] uppercase tracking-wider text-offwhite/40">
        <span>{duplicated}</span>
      </div>
    </div>
  );
}
