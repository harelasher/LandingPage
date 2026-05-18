"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useBlueprint } from "@/context/BlueprintContext";
import type { Project } from "@/types/project";
import { BrowserMockup } from "@/components/projects/BrowserMockup";
import { BlueprintDiagram } from "@/components/projects/BlueprintDiagram";

type ProjectCardProps = {
  project: Project;
  priorityImage?: boolean;
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export function ProjectCard({ project, priorityImage }: ProjectCardProps) {
  const { isBlueprintMode } = useBlueprint();
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.35 };

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="rounded-xl border border-offwhite/10 bg-obsidian/60 p-4 backdrop-blur-sm transition-[border-color,box-shadow] hover:border-emerald-500/20 hover:shadow-[0_8px_32px_rgba(16,185,129,0.08)] sm:p-6"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          {project.flagship ? (
            <span className="mb-2 inline-block font-mono text-[10px] uppercase tracking-widest text-emerald-500">
              Flagship
            </span>
          ) : null}
          <h3 className="text-lg font-semibold tracking-tight text-offwhite sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-emerald-500/90 sm:text-sm">
            {project.tagline}
          </p>
        </div>
      </div>

      <p className="mb-4 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-offwhite/70">
        {project.description}
      </p>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mb-6 space-y-2 text-sm text-offwhite/80 sm:mb-8"
      >
        {project.achievements.map((item) => (
          <motion.li key={item} variants={itemVariants} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>

      <div
        className={
          isBlueprintMode
            ? "relative w-full overflow-x-hidden rounded-lg"
            : "relative min-h-[220px] w-full overflow-hidden rounded-lg sm:min-h-[320px]"
        }
      >
        <AnimatePresence mode="wait">
          {!isBlueprintMode ? (
            <motion.div
              key="mockup"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={transition}
              className="w-full"
            >
              <BrowserMockup
                src={project.imageSrc}
                alt={project.imageAlt}
                priority={priorityImage}
                url={project.url}
              />
            </motion.div>
          ) : (
            <motion.div
              key="blueprint"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={transition}
              className="w-full"
            >
              <BlueprintDiagram
                nodes={project.topology.nodes}
                edges={project.topology.edges}
                metrics={project.topology.metrics}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
