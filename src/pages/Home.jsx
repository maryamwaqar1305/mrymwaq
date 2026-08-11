import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import { scrollToHash, scrollToTopNow } from "../lib/lenis";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const location = useLocation();
  useReveal();

  useEffect(() => {
    if (!location.hash) return;

    // Arriving from another route: park at the top, land on the target,
    // then re-correct once images / reveal animations have settled the layout.
    scrollToTopNow();
    const land = () => scrollToHash(location.hash, { immediate: true, force: true });
    const timers = [80, 350, 800, 1400].map((d) => setTimeout(land, d));
    return () => timers.forEach(clearTimeout);
  }, [location.key, location.hash]);

  return (
    <main>
      <Hero />
      <Projects />
      <Gallery />
      <About />
      <Contact />
    </main>
  );
}