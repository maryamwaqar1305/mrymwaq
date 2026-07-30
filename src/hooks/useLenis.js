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

// Scroll to a section id, waiting until the layout has settled so the intro
// loader and late-loading images don't throw off the final position.
export function scrollToSection(id) {
  const scrollNow = () => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis && typeof window.__lenis.scrollTo === "function") {
      window.__lenis.scrollTo(el, { duration: 0.9, offset: -10 });
    } else {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 10;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Wait until the element exists AND its position stops changing (layout
  // settled), then scroll a single time.
  let waited = 0;
  let lastTop = null;
  let stable = 0;

  const check = () => {
    const el = document.getElementById(id);
    if (el) {
      const top = Math.round(el.getBoundingClientRect().top + window.pageYOffset);
      if (top === lastTop) {
        stable++;
      } else {
        stable = 0;
        lastTop = top;
      }
      // position unchanged for 3 checks in a row → settled
      if (stable >= 3) {
        scrollNow();
        return;
      }
    }
    waited++;
    if (waited < 40) setTimeout(check, 100); // up to ~4s
    else scrollNow(); // give up waiting, scroll anyway
  };

  check();
}