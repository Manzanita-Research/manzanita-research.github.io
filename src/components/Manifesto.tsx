export function Manifesto() {
  return (
    <section className="grain relative overflow-hidden px-6 py-32 md:px-8 md:py-40">
      {/* Subtle warm gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-surface)] to-transparent opacity-50" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mx-auto max-w-[38rem]">
          <p className="reveal mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-sage)]">
            How we think about tools
          </p>

          <h2 className="reveal font-display text-3xl leading-snug font-light md:text-4xl">
            The best music technology has always come from people who actually
            play.
          </h2>

          <div className="reveal mt-12 space-y-6 text-[var(--text-secondary)]">
            <p>
              Les Paul didn't fill out a product requirements doc. Moog didn't
              run a focus group. They were musicians with soldering irons, and
              the instruments they built changed what music could sound like.
            </p>
            <p>
              Somewhere along the way, music tools got swallowed by the same
              forces that swallowed everything else. Subscriptions. Telemetry.
              Walled gardens. Software that treats your creative work like
              engagement metrics.
            </p>
            <p>
              We think there's a better pattern — the one Stewart Brand was
              writing about in the Whole Earth Catalog. Access to tools.
              Community-scale technology. Things you can take apart, understand,
              and make your own.
            </p>
            <p>
              So that's what we're building. Not a platform. Not a startup. A
              lab where the research happens in the same room as the sessions,
              and the tools we make are the tools we use.
            </p>
          </div>
        </div>

        <div className="reveal mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "~",
              title: "Your machine, your music",
              body: "We lean toward tools that run locally. Your sessions shouldn't depend on someone else's server staying online.",
            },
            {
              icon: "\u00D7",
              title: "Your process is yours",
              body: "We have zero interest in how you create. No telemetry, no training data, no analytics dashboards about your workflow.",
            },
            {
              icon: "&",
              title: "Open by default",
              body: "We share our research. We build things people can read, fork, and learn from. Knowledge wants to be free and all that.",
            },
            {
              icon: "\u266A",
              title: "The human is the point",
              body: "We build instruments that make you more capable, not less necessary. If it replaces the musician, we're not interested.",
            },
          ].map((item) => (
            <div key={item.title} className="group">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-bark)] text-xs text-[var(--color-cream)] opacity-80">
                {item.icon}
              </div>
              <h3 className="mb-2 font-display text-lg font-normal text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
