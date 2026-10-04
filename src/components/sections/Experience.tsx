import { experience } from "@/data/site";
import { ArrowUpRight } from "../Icons";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-[var(--border)]"
    >
      <div className="max-w-site mx-auto">
        <div data-reveal>
          <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
            03 - Experience
          </p>
          <h2 className="text-display text-4xl md:text-5xl text-paper mt-4 mb-16">
            Where I&apos;ve shipped
          </h2>
        </div>

        <div className="flex flex-col gap-0 border-t border-[var(--border)]">
          {experience.map((job) => (
            <article
              key={job.company}
              data-reveal
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-[var(--border)] group"
            >
              <div className="md:col-span-3">
                <p className="text-mono text-[10px] uppercase tracking-widest text-muted">
                  {job.period}
                </p>
                <p className="text-mono text-[10px] uppercase tracking-widest text-muted/70 mt-2">
                  {job.location}
                </p>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-display text-xl md:text-2xl text-paper group-hover:text-accent transition-colors">
                  {job.company}
                </h3>
                <p className="text-mono text-xs text-muted mt-1 uppercase tracking-wider">
                  {job.role}
                </p>
                {job.links && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {job.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-mono text-[10px] uppercase tracking-[0.2em] text-paper hover:text-accent transition-colors link-underline"
                      >
                        {link.label} <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="md:col-span-5">
                <ul className="space-y-3">
                  {job.bullets.map((bullet, index) => (
                    <li key={index} className="flex gap-3 text-muted leading-relaxed">
                      <span className="mt-[0.7em] w-1.5 h-px bg-accent/70 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-mono text-[10px] uppercase tracking-wider text-muted border border-[var(--border)] px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
