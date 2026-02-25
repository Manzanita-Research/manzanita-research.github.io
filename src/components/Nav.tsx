import { ThemeToggle } from "./ThemeToggle";

interface NavProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Nav({ theme, toggleTheme }: NavProps) {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[var(--bg-page)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <a
          href="#"
          className="font-display text-lg tracking-tight text-[var(--text-primary)] transition-opacity hover:opacity-70"
          style={{ fontVariationSettings: '"WONK" 1, "SOFT" 50' }}
        >
          Manzanita Research
        </a>
        <div className="flex items-center gap-4">
          <a
            href="#work"
            className="hidden text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] md:block"
          >
            Work
          </a>
          <a
            href="#values"
            className="hidden text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] md:block"
          >
            Values
          </a>
          <a
            href="https://github.com/manzanita-research"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            GitHub
          </a>
          <ThemeToggle theme={theme} toggle={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}
