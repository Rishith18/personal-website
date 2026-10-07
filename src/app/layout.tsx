import type { Metadata, Viewport } from "next";
import { DM_Sans, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import RevealObserver from "@/components/RevealObserver";
import ClickTracker from "@/components/ClickTracker";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Rishith Prathi — CS + Machine Learning at Carnegie Mellon. Building LLM systems, data pipelines, and production ML infrastructure.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | Software Engineer`,
  description,
  authors: [{ name: profile.name }],
  keywords: [profile.name, "Carnegie Mellon", "Software Engineer", "Machine Learning", "LLM"],
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description,
    type: "website",
    locale: "en_US",
    images: [{ url: profile.headshot, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title: profile.name,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a09",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <ScrollProgress />
        <SmoothScroll />
        <RevealObserver />
        <ClickTracker />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
