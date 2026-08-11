import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis, scrollToTopNow } from "../lib/lenis";

/** Resets scroll on every route change. Runs Lenis-aware, so Lenis
 *  can't re-apply the previous page's scroll offset after navigation. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (hash) return; // hash routes scroll themselves (see Home.jsx)

    const lenis = getLenis();
    lenis?.stop();
    scrollToTopNow();

    // Kill any in-flight Lenis animation that survived the route change.
    const id = requestAnimationFrame(() => {
      scrollToTopNow();
      lenis?.start();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
}
