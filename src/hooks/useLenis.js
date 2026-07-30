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

    // Expose globally so Nav / Home can scroll to sections through Lenis.
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.__lenis = null;
      lenis.destroy();
    };
  }, []);
}

// Scroll to a section id using Lenis if available, else native fallback.
// Retries until the element exists, and re-scrolls a few times so late-loading
// content (images changing page height) doesn't leave us at the wrong spot.
export function scrollToSection(id) {
  let tries = 0;
  const doScroll = () => {
    const el = document.getElementById(id);
    if (!el) return false;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { duration: 1.0, offset: -10 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
    return true;
  };

  const tick = () => {
    if (doScroll()) {
      // re-issue the scroll a couple times as layout settles
      setTimeout(doScroll, 400);
      setTimeout(doScroll, 900);
    } else if (tries < 40) {
      tries++;
      setTimeout(tick, 100);
    }
  };
  tick();
}