import { useEffect, useRef } from "react";
import portrait from "../assets/portrait.jpg";
import { profile } from "../data/content";
import "./Hero.css";

const COLS = 5;
const ROWS = 7;

/*
 * Hero pixel-reveal — DOM tiles (no canvas/SVG).
 * Each tile shows its OWN slice of the photo. Tiles start covered by a white
 * overlay (matching the page bg), except a random ~25% that start revealed so
 * it reads as half-pixelated at rest.
 * As the cursor moves over the stage, whatever tile it's on (plus immediate
 * neighbours) reveals with a smooth fade — one pixel at a time. Revealed tiles
 * STAY revealed. Once every tile is revealed the image is seamless.
 */
export default function Hero() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    grid.innerHTML = "";
    const tiles = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const t = document.createElement("span");
        t.className = "tile";
        t.style.backgroundImage = `url(${portrait})`;
        t.style.backgroundSize = `${COLS * 100}% ${ROWS * 100}%`;
        const px = COLS > 1 ? (c / (COLS - 1)) * 100 : 0;
        const py = ROWS > 1 ? (r / (ROWS - 1)) * 100 : 0;
        t.style.backgroundPosition = `${px}% ${py}%`;
        t.dataset.col = c;
        t.dataset.row = r;
        grid.appendChild(t);
        tiles.push(t);
      }
    }

    const idx = (c, r) => r * COLS + c;

    const revealTile = (c, r) => {
      if (c < 0 || r < 0 || c >= COLS || r >= ROWS) return;
      tiles[idx(c, r)].classList.add("is-revealed");
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      tiles.forEach((t) => t.classList.add("is-revealed"));
      return;
    }

    // ~25% start revealed
    const shuffled = tiles.map((_, i) => i).sort(() => Math.random() - 0.5);
    shuffled.slice(0, Math.round(tiles.length * 0.25)).forEach((i) =>
      tiles[i].classList.add("is-revealed")
    );

    // Reveal the tile under the cursor (and its 4-neighbours for a soft brush).
    const onMove = (e) => {
      const rect = grid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      const c = Math.floor((x / rect.width) * COLS);
      const r = Math.floor((y / rect.height) * ROWS);
      revealTile(c, r);
      revealTile(c - 1, r);
      revealTile(c + 1, r);
      revealTile(c, r - 1);
      revealTile(c, r + 1);
    };

    const onTouch = (e) => {
      const t = e.touches[0];
      if (!t) return;
      onMove(t);
    };

    grid.addEventListener("mousemove", onMove);
    grid.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      grid.removeEventListener("mousemove", onMove);
      grid.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <section id="home" className="hero" data-pixel-hero>
      <span className="hero__hint">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
          <path d="M5 3l14 8-6 1.5L10 19 5 3z" stroke="currentColor" strokeWidth="1.4"
            strokeLinejoin="round" />
        </svg>
        <em>hover to reveal</em>
      </span>

      <div className="hero__stage">
        <div
          className="hero__grid"
          ref={gridRef}
          aria-hidden="true"
          style={{ "--cols": COLS, "--rows": ROWS }}
        />
      </div>

      <div className="hero__text">
        <h1 className="hero__title display">Hi, I&apos;m {profile.firstName}.</h1>
        <p className="hero__sub">{profile.heroSub}</p>
      </div>

      <div className="hero__foot container">
        <span>Scroll</span>
        <span className="hero__line" />
      </div>
    </section>
  );
}
