import Image from "next/image";
import { Globe, Lock } from "lucide-react";

type BrowserMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  url?: string;
};

export function BrowserMockup({ src, alt, priority, url }: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-offwhite/10 bg-[#1a1a1e] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-offwhite/10 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        <div className="ml-2 flex flex-1 items-center gap-2 rounded-md bg-obsidian px-3 py-1 font-mono text-[10px] text-offwhite/50">
          <Lock className="h-3 w-3 text-emerald-500/80" />
          <Globe className="h-3 w-3" />
          <span className="truncate">{url ?? "localhost:5173"}</span>
        </div>
      </div>
      <div className="relative flex min-h-[240px] w-full items-center justify-center bg-[#121214] p-3 sm:min-h-[320px] md:min-h-[400px]">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 672px"
          className="h-auto max-h-[min(70vh,520px)] w-full object-contain"
        />
      </div>
    </div>
  );
}

