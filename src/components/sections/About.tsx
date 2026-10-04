"use client";

import { useState } from "react";
import { about, skillGroups } from "@/data/site";
import ResumeModal from "../ResumeModal";
import { ArrowRight } from "../Icons";

export default function About() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-[var(--border)]"
    >
      <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div data-reveal className="lg:col-span-4">
          <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">01 - About</p>
          <h2 className="text-display text-3xl md:text-4xl text-paper mt-6 leading-tight">
            {about.heading}
          </h2>
          <p className="text-mono text-xs text-muted mt-2 uppercase tracking-widest">
            {about.subheading}
          </p>
          <p className="text-display text-2xl md:text-3xl text-muted mt-10 leading-tight">
            What I build
          </p>
          <p className="text-paper/80 mt-3 leading-relaxed">{about.whatIBuild}</p>
        </div>

        <div data-reveal data-reveal-delay="120" className="lg:col-span-8">
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-xl md:text-2xl text-paper leading-relaxed"
                    : "text-base md:text-lg text-muted leading-relaxed"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-ink text-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch <ArrowRight />
            </a>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 border border-[var(--border)] text-paper text-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              View resume
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-site mx-auto mt-24 pt-16 border-t border-[var(--border)]">
        <div
          data-reveal
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted">
              Full toolkit
            </p>
            <h3 className="text-display text-2xl md:text-3xl text-paper mt-3">
              Technologies I work with
            </h3>
          </div>
          <p className="text-muted text-sm max-w-sm leading-relaxed">
            Grouped by practice area — the same stack I use in production, in research, and at
            hackathons.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              data-reveal
              data-reveal-delay={String(index * 100)}
              className="border border-[var(--border)] rounded-lg p-6 md:p-8 bg-surface/50 hover:bg-surface transition-colors"
            >
              <p className="text-mono text-[10px] text-accent uppercase tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h4 className="text-display text-2xl text-paper mt-3 mb-6">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-mono text-[10px] uppercase tracking-wider text-muted/90 border border-[var(--border)] px-3 py-1.5 rounded-full bg-ink/40 hover:border-accent/30 hover:text-paper transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
