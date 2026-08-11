import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useReveal from "../hooks/useReveal";
<<<<<<< HEAD
import { scrollToSection } from "../hooks/useLenis";
=======
import { scrollToHash, scrollToTopNow } from "../lib/lenis";
>>>>>>> 6b51494 (fix: reset Lenis scroll on route change so About CTA lands correctly)
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const location = useLocation();
  useReveal();

  useEffect(() => {
<<<<<<< HEAD
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
=======
    if (!location.hash) return;

    // Arriving from another route: park at the top, land on the target,
    // then re-correct once images / reveal animations have settled the layout.
    scrollToTopNow();
    const land = () => scrollToHash(location.hash, { immediate: true, force: true });
    const timers = [80, 350, 800, 1400].map((d) => setTimeout(land, d));
    return () => timers.forEach(clearTimeout);
  }, [location.key, location.hash]);
>>>>>>> 6b51494 (fix: reset Lenis scroll on route change so About CTA lands correctly)

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
