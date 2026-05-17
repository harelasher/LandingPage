"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Leadership() {
  const { leadership } = site;

  return (
    <ScrollReveal delay={0.1}>
      <section id="leadership" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500">
          Leadership
        </h2>
        <p className="mt-2 text-2xl font-semibold text-offwhite">
          {leadership.title}
        </p>
        <p className="mt-2 font-mono text-sm text-offwhite/50">
          {leadership.subtitle}
        </p>
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-8 max-w-3xl space-y-4 border-l border-emerald-500/30 pl-6 text-sm leading-relaxed text-offwhite/75"
        >
          {leadership.bullets.map((bullet) => (
            <motion.li key={bullet.slice(0, 40)} variants={itemVariants}>
              {bullet}
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </ScrollReveal>
  );
}
