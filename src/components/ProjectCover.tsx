import Image from "next/image";
import type { Project } from "@/data/site";

// Shows the project screenshot if one exists, otherwise a styled placeholder
// in the site palette.
export default function ProjectCover({
  project,
  index,
  sizes,
}: {
  project: Project;
  index: number;
  sizes: string;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-105">
      <div className="absolute inset-0 bg-surface" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute w-[70%] aspect-square rounded-full bg-accent/15 blur-3xl"
        style={{ left: `${(index % 2) * 45 - 10}%`, top: `${index < 2 ? -35 : 20}%` }}
      />
      <span className="absolute right-6 md:right-10 top-1/2 -translate-y-[60%] text-display italic text-[9rem] md:text-[13rem] leading-none text-paper/[0.07] select-none">
        {project.title.charAt(0)}
      </span>
      <span className="absolute top-6 left-6 md:top-8 md:left-8 text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
        {String(index + 1).padStart(2, "0")} / Project
      </span>
    </div>
  );
}
