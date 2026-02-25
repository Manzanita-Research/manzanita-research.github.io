import { Placeholder } from "./Placeholder";

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 md:px-8">
      {/* Warm gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bg-page)] via-transparent to-[var(--bg-page)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <p className="reveal mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ochre)]">
              Independent AI Lab &middot; California
            </p>
            <h1 className="reveal font-display text-5xl leading-[1.05] font-light md:text-6xl lg:text-7xl">
              We build{" "}
              <em className="not-italic text-[var(--color-bark)]">
                instruments
              </em>{" "}
              for the people who make music.
            </h1>
            <p className="reveal mt-8 max-w-lg text-lg leading-relaxed text-[var(--text-secondary)]">
              A small, independent lab making music technology the way it should
              be made — by musicians, for musicians, in the open.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bark)] px-6 py-3 text-sm font-medium text-[var(--color-cream)] transition-all duration-300 hover:bg-[var(--color-warm-black)]"
              >
                See what we're building
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a
                href="https://github.com/manzanita-research"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-6 py-3 text-sm text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="reveal hidden lg:block">
            <Placeholder
              prompt="A woman's hands assembling an unfamiliar electronic instrument on a sunlit wooden workbench, components that don't quite exist yet, manzanita branches visible through an open window overlooking coastal California hills, golden afternoon light, eco-futurist, feminine, Kodak Eastman 100T 5247 35mm film, grain, halation, faded warm colors"
              aspectRatio="4/5"
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text-secondary)"
          strokeWidth="1.5"
          className="opacity-40"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
