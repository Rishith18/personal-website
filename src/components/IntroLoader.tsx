"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { profile } from "@/data/site";
import { lockScroll } from "@/lib/scroll";

const SESSION_KEY = "intro-seen";
const DURATION = 2600;

type Phase = "enter" | "shown" | "leaving" | "done";

export default function IntroLoader() {
  const [phase, setPhase] = useState<Phase>("enter");

  const finish = useCallback(() => {
    setPhase((current) => (current === "done" || current === "leaving" ? current : "leaving"));
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // storage unavailable — just show the intro
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      setPhase("done");
      return;
    }

    lockScroll(true);
    const show = requestAnimationFrame(() => setPhase("shown"));
    const timer = setTimeout(finish, DURATION);
    return () => {
      cancelAnimationFrame(show);
      clearTimeout(timer);
    };
  }, [finish]);

  useEffect(() => {
    if (phase !== "leaving") return;
    lockScroll(false);
    const timer = setTimeout(() => setPhase("done"), 600);
    return () => clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  const contentVisible = phase === "shown";

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink px-6 transition-opacity duration-500 ${
        phase === "leaving" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={phase === "leaving"}
    >
      <div
        className={`flex flex-col items-center transition-all duration-700 ${
          contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="relative w-28 h-28 md:w-36 md:h-36 mb-8 rounded-full overflow-hidden border-2 border-accent/40 ring-4 ring-accent/10">
          <Image
            src={profile.headshot}
            alt={profile.name}
            fill
            priority
            sizes="144px"
            className="object-cover object-[50%_25%]"
          />
        </div>
        <p className="text-mono text-[10px] uppercase tracking-[0.4em] text-muted mb-4 text-center">
          Portfolio
        </p>
        <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-paper text-center">
          {profile.name}
        </h2>
        <p className="text-mono text-xs text-muted mt-3 uppercase tracking-widest text-center">
          {profile.title}
        </p>
        <p className="text-muted text-sm md:text-base mt-6 max-w-md text-center leading-relaxed">
          {profile.tagline}
        </p>
      </div>
      <button
        type="button"
        onClick={finish}
        className="absolute bottom-12 text-mono text-[10px] uppercase tracking-[0.3em] text-muted hover:text-accent transition-colors"
      >
        Skip
      </button>
    </div>
  );
}
