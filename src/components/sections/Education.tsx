import { education } from "@/data/site";

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-[var(--border)]"
    >
      <div className="max-w-site mx-auto">
        <div data-reveal>
          <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
            02 - Education
          </p>
          <h2 className="text-display text-4xl md:text-5xl text-paper mt-4 mb-16">
            Where I&apos;m learning
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div data-reveal className="lg:col-span-7">
            <p className="text-mono text-[10px] uppercase tracking-widest text-accent">
              {education.period}
            </p>
            <h3 className="text-display text-3xl md:text-4xl text-paper mt-3 leading-tight">
              {education.degree}
            </h3>
            <p className="text-lg text-paper/80 mt-2">{education.concentration}</p>
            <p className="text-mono text-xs text-muted mt-3 uppercase tracking-wider">
              {education.school} · {education.location}
            </p>

            <h4 className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted mt-14 mb-2">
              Relevant coursework
            </h4>
            <ul className="border-t border-[var(--border)]">
              {education.coursework.map((course) => (
                <li
                  key={course.code}
                  className="group grid grid-cols-[5.5rem_1fr] gap-4 py-4 border-b border-[var(--border)]"
                >
                  <span className="text-mono text-xs text-accent tracking-wider pt-0.5">
                    {course.code}
                  </span>
                  <span className="text-paper/90 group-hover:text-paper transition-colors">
                    {course.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal data-reveal-delay="150" className="lg:col-span-5">
            <div className="relative overflow-hidden border border-[var(--border)] rounded-lg p-8 md:p-10 bg-surface/50 aspect-[4/5] max-h-[560px] w-full flex flex-col justify-between">
              <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
              <div className="relative flex items-start justify-between gap-4">
                <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
                  School of Computer Science
                </p>
                <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-accent">
                  Class of
                </p>
              </div>
              <p className="relative text-display text-[clamp(6rem,16vw,11rem)] leading-none text-paper">
                &apos;{education.gradYear.slice(2)}
              </p>
              <div className="relative">
                <p className="text-display text-2xl md:text-3xl text-paper">{education.school}</p>
                <p className="text-mono text-xs text-muted mt-2 uppercase tracking-widest">
                  {education.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
