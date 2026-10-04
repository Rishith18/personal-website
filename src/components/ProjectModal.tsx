"use client";

import Modal from "./Modal";
import ProjectCover from "./ProjectCover";
import ProjectLinks from "./ProjectLinks";
import type { Project } from "@/data/site";

type Props = {
  project: Project | null;
  index: number;
  onClose: () => void;
};

export default function ProjectModal({ project, index, onClose }: Props) {
  return (
    <Modal
      open={project !== null}
      onClose={onClose}
      label={project ? `${project.title} details` : "Project details"}
      className="max-w-3xl"
    >
      {project && (
        <>
          <div className="group relative aspect-[16/8] overflow-hidden">
            <ProjectCover project={project} index={index} sizes="(min-width: 768px) 768px, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
          </div>
          <div className="p-6 md:p-10 -mt-16 relative">
            <p className="text-mono text-[10px] text-accent uppercase tracking-widest">
              {project.badge}
            </p>
            <h3 className="text-display text-4xl md:text-5xl text-paper mt-2">{project.title}</h3>
            <p className="text-mono text-xs text-muted mt-2 uppercase tracking-widest">
              {project.period}
            </p>
            <p className="text-lg text-paper/90 mt-8 leading-relaxed">{project.blurb}</p>
            <ul className="mt-6 space-y-3">
              {project.details.map((detail, i) => (
                <li key={i} className="flex gap-3 text-muted leading-relaxed">
                  <span className="mt-[0.7em] w-1.5 h-px bg-accent/70 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-mono text-[10px] uppercase tracking-wider text-muted border border-[var(--border)] px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            {project.links.length > 0 && (
              <div className="mt-8 pt-8 border-t border-[var(--border)] flex flex-wrap gap-3">
                <ProjectLinks links={project.links} />
              </div>
            )}
          </div>
        </>
      )}
    </Modal>
  );
}
