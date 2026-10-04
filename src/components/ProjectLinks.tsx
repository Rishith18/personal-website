import type { ProjectLink } from "@/data/site";
import { GithubIcon, GlobeIcon, PaperIcon } from "./Icons";

const icons = {
  github: GithubIcon,
  live: GlobeIcon,
  paper: PaperIcon,
};

export default function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <>
      {links.map((link) => {
        const Icon = icons[link.kind];
        const primary = link.kind === "live";
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              primary
                ? "inline-flex items-center gap-2 bg-accent text-ink text-mono text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity"
                : "inline-flex items-center gap-2 border border-[var(--border)] text-paper text-mono text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full hover:border-accent hover:text-accent transition-colors"
            }
          >
            <Icon className="w-3.5 h-3.5" />
            {link.label}
          </a>
        );
      })}
    </>
  );
}
