import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import { scrollToSection } from "../hooks/useLenis";
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
    const id = location.hash.slice(1);
    setTimeout(() => scrollToSection(id), 150);
  }, [location]);

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
