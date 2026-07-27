import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept only pure in-page hash links on the current (home) path.
    const onClick = (e) => {
      const a = e.target.closest('a[href^="/#"], a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      const hash = href.includes("#") ? "#" + href.split("#")[1] : "";
      if (!hash || hash.length < 2) return;
      // Only smooth-scroll if we're already on the home page and target exists
      if (window.location.pathname === "/") {
        const el = document.querySelector(hash);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { duration: 1.2 });
        }
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
}
