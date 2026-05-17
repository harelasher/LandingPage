"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Transition,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ease: Transition["ease"] = [0.16, 1, 0.3, 1];

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.08"],
  });

  const driftY = useTransform(scrollYProgress, [0, 0.45, 1], [28, 0, -22]);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1, margin: "-32px" }}
      transition={{
        duration: 0.8,
        delay,
        ease,
      }}
    >
      <motion.div style={{ y: driftY }}>{children}</motion.div>
    </motion.div>
  );
}
