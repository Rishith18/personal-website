"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/site";
import { lockScroll, scrollToId } from "@/lib/scroll";

export default function Nav() {
  const [active, setActive] = useState(navItems[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    lockScroll(menuOpen);
  }, [menuOpen]);

  const go = (id: string) => {
    setMenuOpen(false);
    // wait a tick so scrolling is unlocked before we animate
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] mix-blend-difference">
        <nav
          className="flex items-center justify-between gap-3 px-4 sm:px-6 md:px-12 lg:px-20 py-5 md:py-6 min-w-0 max-w-full"
          aria-label="Main"
        >
          <button
            type="button"
            onClick={() => go("intro")}
            className="text-mono text-xs uppercase tracking-[0.2em] text-paper hover:text-accent transition-colors"
          >
            {profile.firstName}
            <span className="text-muted">.</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                aria-current={active === item.id ? "true" : undefined}
                className={`text-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
                  active === item.id ? "text-accent" : "text-muted hover:text-paper"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={profile.resume}
              className="text-mono text-[10px] uppercase tracking-[0.2em] text-paper border border-[var(--border)] px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:border-accent hover:text-accent transition-colors shrink-0"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] text-paper"
            >
              <span
                className={`block w-5 h-px bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-[99] bg-ink flex flex-col justify-center px-6 transition-opacity duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => go(item.id)}
                className={`flex items-baseline gap-4 py-2 text-display text-5xl transition-colors ${
                  active === item.id ? "text-accent" : "text-paper hover:text-accent"
                }`}
              >
                <span className="text-mono text-[10px] text-muted tracking-widest">
                  {String(index).padStart(2, "0")}
                </span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
