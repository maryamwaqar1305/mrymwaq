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
    // Map clean paths to section ids. "/" (or unknown) scrolls to top.
    const path = location.pathname;
    const map = { "/work": "work", "/contact": "contact", "/designs": "designs" };
    const id = map[path];

    // also support old hash style just in case (#contact)
    const hashId = location.hash ? location.hash.slice(1) : null;
    const target = id || hashId;

    if (target) {
      setTimeout(() => scrollToSection(target), 150);
    } else {
      // plain home — go to top
      setTimeout(() => {
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: false });
        else window.scrollTo({ top: 0 });
      }, 100);
    }
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
