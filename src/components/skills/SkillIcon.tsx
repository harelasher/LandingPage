"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Braces,
  Cloud,
  Network,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiLangchain,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSharp,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { SkillId } from "@/data/site";

const brandIcons: Partial<Record<SkillId, IconType>> = {
  csharp: SiSharp,
  typescript: SiTypescript,
  python: SiPython,
  react: SiReact,
  nodedotjs: SiNodedotjs,
  express: SiExpress,
  pgvector: SiPostgresql,
  docker: SiDocker,
  git: SiGit,
  openai: SiOpenai,
  langchain: SiLangchain,
};

const lucideIcons: Partial<Record<SkillId, LucideIcon>> = {
  agents: Bot,
  prompt: Sparkles,
  rest: Cloud,
  network: Network,
};

const cardVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.1, y: -5 },
};

const labelVariants = {
  rest: { opacity: 0.65 },
  hover: { opacity: 1 },
};

type SkillIconProps = {
  id: SkillId;
  label: string;
};

function SqlMark() {
  return (
    <span
      className="font-mono text-sm font-bold tracking-tight text-offwhite/90"
      aria-hidden
    >
      SQL
    </span>
  );
}

function CSharpMark() {
  return (
    <span
      className="font-mono text-sm font-bold tracking-tight text-offwhite/90"
      aria-hidden
    >
      C#
    </span>
  );
}

export function SkillIcon({ id, label }: SkillIconProps) {
  const BrandIcon = brandIcons[id];
  const LucideIcon = lucideIcons[id];
  const FallbackIcon = Braces;

  const renderIcon = () => {
    if (id === "sql") return <SqlMark />;
    if (id === "csharp") return <CSharpMark />;
    if (BrandIcon) {
      return <BrandIcon className="h-7 w-7 text-offwhite/90" aria-hidden />;
    }
    if (LucideIcon) {
      return (
        <LucideIcon
          className="h-7 w-7 text-offwhite/90"
          strokeWidth={1.5}
          aria-hidden
        />
      );
    }
    return (
      <FallbackIcon className="h-7 w-7 text-offwhite/90" strokeWidth={1.5} aria-hidden />
    );
  };

  return (
    <motion.div
      className="flex w-[72px] flex-col items-center gap-2"
      initial="rest"
      whileHover="hover"
    >
      <motion.div
        variants={cardVariants}
        transition={{ type: "spring", stiffness: 420, damping: 16 }}
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-offwhite/10 bg-offwhite/5 transition-[border-color,background,box-shadow] hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] sm:h-14 sm:w-14"
      >
        {renderIcon()}
      </motion.div>
      <motion.span
        variants={labelVariants}
        className="w-full text-center font-mono text-[10px] leading-tight text-offwhite/70"
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
