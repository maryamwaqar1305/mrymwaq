import { useEffect, useState } from "react";
import "./Loader.css";

// Persist across route changes AND component remounts within the session.
const KEY = "mw_loaded";
const alreadyLoaded = () => {
  try { return sessionStorage.getItem(KEY) === "1"; } catch { return false; }
};
const markLoaded = () => {
  try { sessionStorage.setItem(KEY, "1"); } catch {}
};

export default function Loader({ onDone }) {
  const [done] = useState(alreadyLoaded());
  const [gone, setGone] = useState(alreadyLoaded());

  useEffect(() => {
    if (alreadyLoaded()) {
      onDone && onDone();
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 200 : 900;
    const t1 = setTimeout(() => setGone(true), total);
    const t2 = setTimeout(() => {
      markLoaded();
      onDone && onDone();
    }, total + 550);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Once loaded this session, never render the loader again.
  if (done) return null;

  return (
    <div className={`loader ${gone ? "loader--out" : ""}`} aria-hidden="true">
      <div className="loader__inner">
        <span className="loader__tag">there you go :3</span>
        <span className="loader__bar">
          <span className="loader__fill" />
        </span>
      </div>
    </div>
  );
}
