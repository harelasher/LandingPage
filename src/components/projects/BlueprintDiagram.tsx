"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Monitor,
  Server,
  Shield,
  type LucideIcon,
} from "lucide-react";
import type {
  ProjectMetric,
  TopologyEdge,
  TopologyNode,
  TopologyRole,
} from "@/types/project";

const roleIcons: Record<TopologyRole, LucideIcon> = {
  client: Monitor,
  server: Server,
  database: Database,
  genai: Brain,
  logic: Shield,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const nodeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
};

type BlueprintDiagramProps = {
  nodes: TopologyNode[];
  edges: TopologyEdge[];
  metrics: ProjectMetric[];
};

export function BlueprintDiagram({ nodes, edges, metrics }: BlueprintDiagramProps) {
  return (
    <div className="blueprint-grid flex flex-col rounded-lg border border-emerald-500/20 bg-[#0a0a0c] p-3 sm:p-4">
      <p className="shrink-0 font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-500/80 sm:text-[10px] sm:tracking-[0.2em]">
        Architectural schematic
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-2 flex flex-col items-stretch sm:mt-3 md:flex-row md:items-center"
      >
        {nodes.map((node, index) => {
          const Icon = roleIcons[node.role];
          const edge = edges.find((e) => e.from === node.id);
          const showConnector = index < nodes.length - 1;

          return (
            <React.Fragment key={node.id}>
              <motion.div variants={nodeVariants} className="min-w-0 flex-1">
                <div className="w-full rounded-md border border-offwhite/15 bg-obsidian/90 p-2.5 text-center sm:p-3">
                  <div className="mx-auto mb-1.5 flex h-7 w-7 items-center justify-center rounded border border-emerald-500/30 bg-emerald-500/5 sm:mb-2 sm:h-8 sm:w-8">
                    <Icon
                      className="h-3.5 w-3.5 text-emerald-500 sm:h-4 sm:w-4"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="font-mono text-[11px] font-medium text-offwhite sm:text-xs">
                    {node.label}
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] leading-snug text-offwhite/50 sm:mt-1 sm:text-[10px]">
                    {node.detail}
                  </p>
                </div>
              </motion.div>

              {showConnector && edge ? (
                <>
                  {/* Mobile: vertical connector */}
                  <div className="flex flex-col items-center py-1 md:hidden">
                    <div className="h-3 w-px bg-emerald-500/30" />
                    <span className="font-mono text-xs text-emerald-500/70">
                      {edge.bidirectional ? "↕" : "↓"}
                    </span>
                    <div className="h-3 w-px bg-emerald-500/30" />
                  </div>
                  {/* Desktop: horizontal connector */}
                  <div className="hidden shrink-0 items-center gap-0.5 px-1 md:flex">
                    <div className="h-px w-4 bg-emerald-500/40" />
                    <span className="font-mono text-[10px] text-emerald-500/70">
                      {edge.bidirectional ? "↔" : "→"}
                    </span>
                    <div className="h-px w-4 bg-emerald-500/40" />
                  </div>
                </>
              ) : null}
            </React.Fragment>
          );
        })}
      </motion.div>

      <div className="mt-3 flex shrink-0 flex-wrap justify-center gap-2 border-t border-offwhite/10 pt-3 sm:mt-4 sm:gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="font-mono text-[9px] sm:text-[10px]">
            <span className="text-offwhite/40">{m.label}: </span>
            <span className="text-emerald-400">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
