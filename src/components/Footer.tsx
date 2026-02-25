export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] px-6 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p
              className="font-display text-lg text-[var(--text-primary)]"
              style={{ fontVariationSettings: '"WONK" 1, "SOFT" 50' }}
            >
              Manzanita Research
            </p>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              With love from California
            </p>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
              Links
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/manzanita-research"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                GitHub
              </a>
            </div>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
              Ethos
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Local-first. Open where it matters.
              <br />
              No data collection. No subscriptions.
              <br />
              Instruments, not automations.
            </p>
          </div>
        </div>
        <div className="mt-16 border-t border-[var(--border-color)] pt-8">
          <p className="text-xs text-[var(--text-secondary)] opacity-60">
            &copy; {new Date().getFullYear()} Manzanita Research
          </p>
        </div>
      </div>
    </footer>
  );
}
