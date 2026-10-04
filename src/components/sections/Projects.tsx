"use client";

import { useState } from "react";
import { profile, type Project } from "@/data/site";
import ProjectCover from "../ProjectCover";
import ProjectLinks from "../ProjectLinks";
import ProjectModal from "../ProjectModal";
import { ArrowUpRight, PlusIcon } from "../Icons";

export default function Projects({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-[var(--border)]"
    >
      <div className="max-w-site mx-auto">
        <div
          data-reveal
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 min-w-0"
        >
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
              01 - Projects
            </p>
            <h2 className="text-display text-4xl md:text-6xl text-paper mt-4 break-words">
              Selected work
            </h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors link-underline shrink-0 self-start md:self-auto"
          >
            More on GitHub →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              data-reveal
              data-reveal-delay={String((index % 3) * 120)}
              className="group flex flex-col min-w-0"
            >
              <button
                type="button"
                onClick={() => setSelected(index)}
                aria-label={`Learn more about ${project.title}`}
                className="relative block w-full text-left aspect-[16/10] overflow-hidden rounded-lg bg-surface border border-[var(--border)] group-hover:border-accent/40 transition-colors duration-500"
              >
                <ProjectCover
                  project={project}
                  index={index}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink from-15% via-ink/80 via-50% to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-6 xl:p-7">
                  <p className="text-mono text-[10px] text-accent uppercase tracking-widest">
                    {project.badge}
                  </p>
                  <h3 className="text-display text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-paper mt-2 group-hover:text-accent transition-colors break-words">
                    {project.title}
                  </h3>
                  <p className="text-mono text-[10px] text-muted mt-2 uppercase tracking-widest">
                    {project.period}
                  </p>
                </div>
              </button>

              <p className="text-muted mt-6 leading-relaxed">{project.blurb}</p>

              <div className="mt-5 mb-6 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-mono text-[10px] uppercase tracking-wider text-muted border border-[var(--border)] px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-3">
                <ProjectLinks links={project.links} />
                <button
                  type="button"
                  onClick={() => setSelected(index)}
                  className="inline-flex items-center gap-2 text-mono text-[10px] uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors px-2 py-2.5"
                >
                  <PlusIcon className="w-3.5 h-3.5" />
                  Learn more
                </button>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-20 flex justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors link-underline"
          >
            Explore all projects <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <ProjectModal
        project={selected !== null ? projects[selected] : null}
        index={selected ?? 0}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
