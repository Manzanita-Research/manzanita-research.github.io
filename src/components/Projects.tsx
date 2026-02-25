import { Placeholder } from "./Placeholder";

interface Project {
  name: string;
  tagline: string;
  description: string;
  status: string;
  url: string;
  heroPrompt: string;
}

const projects: Project[] = [
  {
    name: "Toneword",
    tagline: "Semantic EQ",
    description:
      "What if your EQ just said Warmth, Bite, Air, Body, Glass, Velvet instead of making you stare at frequency curves? Six perceptual dimensions mapped to an 11-band parametric EQ underneath. Turns out ears are smarter than eyes.",
    status: "v1.0 shipped",
    url: "https://github.com/Manzanita-Research/toneword",
    heroPrompt:
      "Close-up of a guitar amp's warm glow reflected in a woman's eyes as she adjusts an unfamiliar wooden EQ device with hand-labeled knobs reading 'Warmth' and 'Bite', soft bokeh, eco-futurist, Kodak Eastman 100T 5247 35mm film, grain, halation, faded warm colors",
  },
  {
    name: "Glorybook",
    tagline: "Live setlist sync",
    description:
      "Real-time setlist sync for bands. Bandleader picks the song, everyone's chart updates. Browse ahead if you want, snap back to live with one tap. Bring a travel router to the gig and it runs without WiFi.",
    status: "v1.0 shipped",
    url: "https://github.com/Manzanita-Research/glorybook",
    heroPrompt:
      "A band rehearsal room with warm afternoon light, phones and tablets scattered on stands showing synchronized chord charts, cables and instruments in soft focus, intimate and lived-in, eco-futurist, Kodak Eastman 100T 5247 35mm film, grain, halation",
  },
  {
    name: "Audiotree",
    tagline: "Audio graph components",
    description:
      "React primitives for building audio apps in the browser. Your component tree becomes your signal flow — mixers, tracks, buses, sends, meters. The part between the Web Audio API and having an actual DAW.",
    status: "v1.1 in progress",
    url: "https://github.com/Manzanita-Research/audiotree",
    heroPrompt:
      "An unfamiliar modular instrument with patch cables in warm earth tones — terracotta, sage, rust, cream — panels made of wood and brushed copper, softly glowing connection points, no recognizable hardware, eco-futurist, Kodak Eastman 100T 5247 35mm film, grain, halation",
  },
  {
    name: "Grove",
    tagline: "3D spatial mixer",
    description:
      "What if you could see your mix? Tracks float as colored spheres in 3D space — horizontal is pan, vertical is frequency, depth is reverb. Drag to mix. Heavily inspired by David Gibson's Art of Mixing. Early days, but the idea is right.",
    status: "Proof of concept",
    url: "https://github.com/Manzanita-Research/grove",
    heroPrompt:
      "A dark room with floating orbs of warm colored light — terracotta, sage, ochre, lavender — suspended at different heights and depths, casting soft shadows, like a sound field made visible, eco-futurist, Kodak Eastman 100T 5247 35mm film, grain, halation",
  },
  {
    name: "Chaparral",
    tagline: "Shared skills and config",
    description:
      "How we keep all of this in sync. One brand repo is the source of truth — chaparral symlinks it into every sibling project. Shared AI skills, org-wide voice, multi-repo without the pain. Named after the biome that connects everything on a California hillside.",
    status: "Complete",
    url: "https://github.com/Manzanita-Research/chaparral",
    heroPrompt:
      "A hillside of California native plants — manzanita, ceanothus, sage — connected by thin luminous threads barely visible in golden hour light, the chaparral as a living network, wide shot, atmospheric, Kodak Eastman 100T 5247 35mm film, halation, faded warm colors",
  },
  {
    name: "Understory",
    tagline: "Open-source AI skills",
    description:
      "Open-source tools for working with AI agents. The gap between a good conversation and an actual running project is bigger than it should be — understory helps close it. Take it, fork it, make it yours.",
    status: "Active",
    url: "https://github.com/Manzanita-Research/understory",
    heroPrompt:
      "Redwood forest understory, soft diffused light through the canopy, ferns and sorrel glowing green, a barely-visible thread of light running along the forest floor like a data stream, morning mist, eco-futurist, Kodak Eastman 100T 5247 35mm film, grain, halation",
  },
];

function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    shipped: "bg-[var(--color-sage)] text-[var(--color-cream)]",
    "in progress": "bg-[var(--color-ochre)] text-[var(--color-warm-black)]",
    complete: "bg-[var(--color-sage)] text-[var(--color-cream)]",
    active: "bg-[var(--color-bark)] text-[var(--color-cream)]",
  };

  const key = Object.keys(colorMap).find((k) =>
    status.toLowerCase().includes(k),
  );
  const classes = key
    ? colorMap[key]
    : "bg-[var(--color-fog)] text-[var(--text-secondary)]";

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${classes}`}
    >
      {status}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
        !isEven ? "lg:direction-rtl" : ""
      }`}
      style={!isEven ? { direction: "rtl" } : undefined}
    >
      <div style={!isEven ? { direction: "ltr" } : undefined}>
        <Placeholder prompt={project.heroPrompt} aspectRatio="3/2" />
      </div>
      <div style={!isEven ? { direction: "ltr" } : undefined}>
        <div className="mb-3 flex items-center gap-3">
          <StatusBadge status={project.status} />
        </div>
        <h3 className="font-display text-3xl font-light text-[var(--text-primary)] md:text-4xl">
          {project.name}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[var(--color-bark)]">
          {project.tagline}
        </p>
        <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--color-bark)] transition-colors hover:text-[var(--color-warm-black)]"
        >
          View on GitHub
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
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="px-6 py-32 md:px-8 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-20 max-w-2xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ochre)]">
            The work
          </p>
          <h2 className="font-display text-4xl leading-snug font-light md:text-5xl">
            Everything here started because someone needed it at a gig or in a
            session.
          </h2>
          <p className="mt-6 text-lg text-[var(--text-secondary)]">
            That's still the test. If it doesn't make the music better, it
            doesn't ship.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
