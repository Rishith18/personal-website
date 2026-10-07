"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// Sends a Vercel Analytics custom event for every link or button click.
// Label comes from `data-track`, then `aria-label`, then visible text.
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("a, button");
      if (!target) return;

      const label = (
        target.dataset.track ||
        target.getAttribute("aria-label") ||
        target.textContent ||
        ""
      )
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 100);

      const href = target instanceof HTMLAnchorElement ? target.getAttribute("href") : null;
      const section = target.closest("section[id]")?.id ?? target.closest("nav, footer")?.tagName.toLowerCase();

      track("Click", {
        label: label || "(unlabeled)",
        ...(href && { href: href.slice(0, 200) }),
        ...(section && { section }),
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
