import { Placeholder } from "./Placeholder";

export function Philosophy() {
  return (
    <section
      id="values"
      className="grain relative overflow-hidden px-6 py-32 md:px-8 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-surface)] to-transparent opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div className="max-w-lg">
            <p className="reveal mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ochre)]">
              The shape of the thing
            </p>
            <h2 className="reveal font-display text-4xl leading-snug font-light md:text-5xl">
              A lab in the canyon.
            </h2>
            <div className="reveal mt-8 space-y-5 text-[var(--text-secondary)]">
              <p>
                The manzanita is a California native — a scrubby, twisting tree
                that grows wild on coastal hillsides. Thrives in hard soil and
                rocky margins. Produces something unmistakable: dark red bark
                smooth as skin, sculptural branches that are never the same
                twice.
              </p>
              <p>
                We liked that as a name for a lab. Not a venture-backed entity
                with a runway and an exit strategy. A place where things get
                made — more canyon than campus, more workshop than office.
              </p>
              <p>
                The people here play in bands and write DSP code and argue about
                gain staging and read old issues of CoEvolution Quarterly.
              </p>
            </div>

            <div className="reveal mt-12">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                Books & records on the shelf
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Rumours",
                  "Whole Earth Catalog",
                  "5/8/77",
                  "Computer Lib / Dream Machines",
                  "Be Here Now",
                  "Crystals & sage",
                  "The Art of Mixing",
                ].map((ref) => (
                  <span
                    key={ref}
                    className="rounded-full border border-[var(--border-color)] px-3 py-1 font-mono text-xs text-[var(--text-secondary)]"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal space-y-6">
            <Placeholder
              prompt="Manzanita tree with dark red bark twisting against coastal California hills, golden hour light, slightly grainy, Kodak Eastman 100T 5247 35mm film, halation, faded warm colors, shallow depth of field, the beauty of something wild that grows on its own terms"
              aspectRatio="3/4"
            />
            <blockquote className="border-l-2 border-[var(--color-bark)] pl-4 text-sm italic text-[var(--text-secondary)]">
              "We are as gods and might as well get good at it. So far, remotely
              done power and glory — as via government, big business, formal
              education, church — has succeeded to the point where gross defects
              obscure actual gains. In response to this dilemma and to these
              gains a realm of intimate, personal power is developing — power of
              the individual to conduct his own education, find his own
              inspiration, shape his own environment, and share his adventure
              with whoever is interested."
              <span className="mt-1 block text-xs not-italic opacity-60">
                — Stewart Brand, Whole Earth Catalog, 1968
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
