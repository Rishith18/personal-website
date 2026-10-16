"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

// Project keys are publishable (they ship to every browser), so a default is fine here.
const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_rTuyzYksVMTyjCSqjwCmtwVsqYUVod5Gh49zsCbE9ktu";
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

// Page views, autocaptured clicks, and GeoIP (city/country) via PostHog.
// Skipped in development so local testing doesn't pollute the data.
export default function PostHogInit() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: "history_change",
      capture_pageleave: true,
      autocapture: true,
      person_profiles: "identified_only",
    });
  }, []);

  return null;
}
