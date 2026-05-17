"use client";

import { site } from "@/data/site";
import { SkillIcon } from "@/components/skills/SkillIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Skills() {
  return (
    <ScrollReveal delay={0.05}>
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500">
          Skills
        </h2>
        <p className="mt-2 text-2xl font-semibold text-offwhite">
          Technical stack
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {site.skills.map((category) => (
            <div
              key={category.title}
              className="flex flex-col items-center rounded-xl border border-offwhite/10 bg-obsidian/50 p-6"
            >
              <h3 className="w-full text-center font-mono text-sm font-medium text-offwhite">
                {category.title}
              </h3>
              <ul className="mt-6 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-5">
                {category.items.map((item) => (
                  <li key={`${category.title}-${item.id}`}>
                    <SkillIcon id={item.id} label={item.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

