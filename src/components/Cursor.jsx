import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dot = useRef(null);
  const label = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState("default"); // default | label | pixel
  const [text, setText] = useState("");
  const [pixel, setPixel] = useState({ w: 0, h: 0 });

  // Re-check on change, so toggling DevTools device mode doesn't leave the page
  // with `cursor: none` applied and no dot tracking the pointer.
  const [fine, setFine] = useState(
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = (e) => setFine(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!fine) {
      setEnabled(false);
      document.body.classList.remove("custom-cursor");
      return;
    }
    setEnabled(true);
    document.body.classList.add("custom-cursor");

    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const cur = { ...pos };
    let raf;

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const loop = () => {
      cur.x += (pos.x - cur.x) * 0.25;
      cur.y += (pos.y - cur.y) * 0.25;
      if (dot.current)
        dot.current.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      if (label.current)
        label.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const over = (e) => {
      const cs = e.target.closest("[data-cursor]");
      if (cs) {
        setText(cs.getAttribute("data-cursor") || "");
        setMode("label");
        return;
      }
      // Over the hero pixel grid: size the cursor to one tile.
      const grid = e.target.closest(".hero__grid");
      if (grid) {
        const rect = grid.getBoundingClientRect();
        const cols = parseInt(grid.style.getPropertyValue("--cols")) || 5;
        const rows = parseInt(grid.style.getPropertyValue("--rows")) || 7;
        setPixel({ w: rect.width / cols, h: rect.height / rows });
        setMode("pixel");
        setText("");
        return;
      }
      setText("");
      setMode("default");
    };

    addEventListener("mousemove", move);
    addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", move);
      removeEventListener("mouseover", over);
      document.body.classList.remove("custom-cursor");
    };
  }, [fine]);

  if (!enabled) return null;

  const pixelStyle =
    mode === "pixel"
      ? { width: `${pixel.w}px`, height: `${pixel.h}px`, marginLeft: `${-pixel.w / 2}px`, marginTop: `${-pixel.h / 2}px` }
      : undefined;

  return (
    <>
      <div ref={dot} className={`cur cur--${mode}`} style={pixelStyle} aria-hidden="true" />
      <div
        ref={label}
        className={`cur-label ${mode === "label" ? "is-on" : ""}`}
        aria-hidden="true"
      >
        {text}
      </div>
    </>
  );
}