import Image from "next/image";
import { profile } from "@/data/site";
import { ArrowRight } from "../Icons";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-ink to-ink" />
      <div className="relative max-w-site mx-auto w-full min-w-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1 min-w-0">
          <p
            data-reveal
            className="text-mono text-[10px] uppercase tracking-[0.35em] text-muted mb-6"
          >
            {profile.location} · {profile.eyebrow}
          </p>
          <h1
            data-reveal
            data-reveal-delay="100"
            className="text-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-paper break-words"
          >
            {profile.firstName}
            <br />
            <span className="italic text-muted">{profile.lastName}</span>
          </h1>
          <p
            data-reveal
            data-reveal-delay="200"
            className="mt-8 text-lg md:text-xl text-muted max-w-prose leading-relaxed"
          >
            {profile.tagline}
          </p>
          <div data-reveal data-reveal-delay="300" className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent text-ink text-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              View work <ArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[var(--border)] text-paper text-mono text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          data-reveal
          data-reveal-delay="150"
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-3 border border-accent/20 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative aspect-[4/5] w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden border border-[var(--border)] bg-surface">
              <Image
                src={profile.headshot}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 768px) 320px, 288px"
                className="object-cover object-[50%_30%] group-hover:grayscale transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-mono text-[10px] text-muted uppercase tracking-widest">
        <span>Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-muted to-transparent animate-pulse" />
      </div>
    </section>
  );
}
