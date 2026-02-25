export function Closing() {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-8 md:py-40">
      {/* Warm gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bark)] to-transparent opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-[38rem] text-center">
        <h2 className="reveal font-display text-4xl leading-snug font-light md:text-5xl">
          With love from California.
        </h2>
        <p className="reveal mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
          We're building in the open. Everything is early. If you make music and
          you care about your tools, come hang out — the work is better with
          more people in the room.
        </p>
        <div className="reveal mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/manzanita-research"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bark)] px-6 py-3 text-sm font-medium text-[var(--color-cream)] transition-all duration-300 hover:bg-[var(--color-warm-black)]"
          >
            Find us on GitHub
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
        </div>

        <div className="reveal mt-20">
          <p className="font-mono text-xs text-[var(--text-secondary)] opacity-40">
            manzanita.computer
          </p>
        </div>
      </div>
    </section>
  );
}
