"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const wordVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const words = site.hero.title.split(" ");

  return (
    <ScrollReveal>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:pt-24">
        <motion.h1
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="max-w-4xl text-2xl font-semibold leading-tight tracking-tight text-offwhite md:text-4xl md:leading-[1.15]"
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block">
              {word}{i < words.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </motion.h1>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-offwhite/75 md:text-lg">
          {site.hero.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
