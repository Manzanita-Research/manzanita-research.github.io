import { useTheme } from "./hooks/useTheme";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { Projects } from "./components/Projects";
import { Philosophy } from "./components/Philosophy";
import { Closing } from "./components/Closing";
import { Footer } from "./components/Footer";

export function App() {
  const { theme, toggle } = useTheme();
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <Nav theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <Manifesto />
        <Projects />
        <Philosophy />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
