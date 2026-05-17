"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { BlueprintToggle } from "@/components/layout/BlueprintToggle";
import { StatusIndicator } from "@/components/ui/StatusIndicator";

export function Nav() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b border-offwhite/10 bg-obsidian/90 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <a href="#" className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-500/50 bg-emerald-500/5 font-mono text-[11px] font-semibold tracking-tight text-emerald-400 transition-[border-color,box-shadow] hover:border-emerald-500/80 hover:shadow-[0_0_10px_rgba(16,185,129,0.25)] sm:h-8 sm:w-8 sm:text-xs">
            HA
          </span>
          <span className="font-sans text-sm font-semibold tracking-tight text-offwhite sm:text-base">
            {site.brand}
          </span>
        </a>
        <div className="flex min-w-0 items-center gap-2 sm:gap-6">
          <StatusIndicator />
          <BlueprintToggle />
        </div>
      </nav>
    </motion.header>
  );
}
