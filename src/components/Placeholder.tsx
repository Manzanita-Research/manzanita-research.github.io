interface PlaceholderProps {
  prompt: string;
  aspectRatio?: string;
  className?: string;
}

export function Placeholder({
  prompt,
  aspectRatio = "16/9",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-[var(--border-color)] ${className}`}
      style={{ aspectRatio }}
    >
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-fog)] via-[var(--bg-surface)] to-[var(--color-fog)]" />

      {/* Cross lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="var(--border-color)"
          strokeWidth="1"
        />
        <line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="var(--border-color)"
          strokeWidth="1"
        />
      </svg>

      {/* Prompt text */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <p className="max-w-md text-center font-mono text-xs leading-relaxed text-[var(--text-secondary)] opacity-70">
          {prompt}
        </p>
      </div>
    </div>
  );
}
