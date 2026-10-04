import { profile } from "@/data/site";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Resume", href: profile.resume },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-site mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-display text-2xl text-paper">{profile.name}</p>
          <p className="text-mono text-xs text-muted mt-2 uppercase tracking-widest">
            {profile.location}
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-4">
          <div className="flex flex-wrap gap-6 text-mono text-xs uppercase tracking-widest">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="text-muted hover:text-accent transition-colors link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-mono text-[10px] text-muted/70 uppercase tracking-widest">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
