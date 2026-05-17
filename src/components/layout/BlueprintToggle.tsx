"use client";

import { motion } from "framer-motion";
import { useBlueprint } from "@/context/BlueprintContext";

export function BlueprintToggle() {
  const { isBlueprintMode, toggleBlueprintMode } = useBlueprint();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isBlueprintMode}
      aria-label="Toggle blueprint mode"
      onClick={toggleBlueprintMode}
      className="group flex shrink-0 items-center gap-1.5 rounded-full border border-offwhite/10 bg-obsidian/80 px-2 py-1.5 transition-colors hover:border-emerald-500/30 sm:gap-3 sm:px-3"
    >
      <span className="hidden font-mono text-[10px] uppercase tracking-widest text-offwhite/40 sm:inline">
        View
      </span>
      <span
        className={`relative h-6 w-10 rounded-full border transition-colors sm:h-7 sm:w-12 ${
          isBlueprintMode
            ? "border-emerald-500/50 bg-emerald-500/10"
            : "border-offwhite/15 bg-offwhite/5"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={`absolute top-1/2 left-0.5 h-5 w-5 -translate-y-1/2 rounded-full sm:h-6 sm:w-6 ${
            isBlueprintMode
              ? "bg-emerald-500 glow-emerald"
              : "bg-offwhite/80"
          }`}
          animate={{ x: isBlueprintMode ? 16 : 0 }}
        />
      </span>
      <span
        className={`hidden font-mono text-[10px] uppercase tracking-widest transition-colors sm:inline ${
          isBlueprintMode ? "text-emerald-400" : "text-offwhite/40"
        }`}
      >
        Blueprint
      </span>
      <span
        className={`font-mono text-[9px] uppercase tracking-widest sm:hidden ${
          isBlueprintMode ? "text-emerald-400" : "text-offwhite/40"
        }`}
      >
        BP
      </span>
    </button>
  );
}
