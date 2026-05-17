import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Projects() {
  return (
    <ScrollReveal>
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-10">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500">
            Projects
          </h2>
          <p className="mt-2 text-2xl font-semibold text-offwhite">
            Selected work
          </p>
          <p className="mt-2 max-w-xl text-sm text-offwhite/60">
            Toggle Blueprint mode to see system architecture diagrams.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.08 + index * 0.06}>
              <ProjectCard
                project={project}
                priorityImage={index === 0}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
