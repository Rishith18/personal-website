import { contact, profile } from "@/data/site";
import { ArrowUpRight } from "../Icons";

const rows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, external: true },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, external: true },
  { label: "Resume", value: "View PDF", href: profile.resume, external: true },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-[var(--border)] min-h-[80vh] flex flex-col justify-center"
    >
      <div className="max-w-site mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div data-reveal>
          <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">04 - Contact</p>
          <h2 className="text-display text-4xl md:text-6xl text-paper mt-4 leading-tight">
            {contact.heading}
          </h2>
          <p className="text-muted mt-6 max-w-prose leading-relaxed">{contact.note}</p>
          <div className="mt-12 flex flex-col gap-4 text-mono text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="text-paper hover:text-accent transition-colors link-underline w-fit break-all"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors link-underline w-fit"
            >
              {profile.linkedinHandle}
            </a>
            <span className="text-muted">{profile.location}</span>
          </div>
        </div>

        <div
          data-reveal
          data-reveal-delay="150"
          className="flex flex-col border border-[var(--border)] rounded-lg p-6 md:p-8 bg-surface/30"
        >
          <p className="text-mono text-[10px] uppercase tracking-widest text-muted mb-4">
            Find me online
          </p>
          {rows.map((row) => (
            <a
              key={row.label}
              href={row.href}
              {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center justify-between gap-4 py-6 border-b last:border-b-0 border-[var(--border)]"
            >
              <div className="min-w-0">
                <p className="text-mono text-[10px] uppercase tracking-widest text-muted">
                  {row.label}
                </p>
                <p className="text-xl md:text-2xl tracking-tight text-paper mt-1 group-hover:text-accent transition-colors truncate">
                  {row.value}
                </p>
              </div>
              <span className="shrink-0 w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
