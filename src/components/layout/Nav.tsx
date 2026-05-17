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
        <a
          href="#"
          className="shrink-0 font-sans text-sm font-semibold tracking-tight text-offwhite sm:text-base"
        >
          {site.brand}
        </a>
        <div className="flex min-w-0 items-center gap-2 sm:gap-6">
          <StatusIndicator />
          <BlueprintToggle />
        </div>
      </nav>
    </motion.header>
  );
}
