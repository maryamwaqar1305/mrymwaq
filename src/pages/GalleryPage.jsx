import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { gallery } from "../data/gallery";
import useReveal from "../hooks/useReveal";
import "./GalleryPage.css";

export default function GalleryPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null); // index of open image
  useReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % gallery.length)),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  return (
    <article className="gp">
      <header className="gp-hero container">
        <button className="gp-back" onClick={() => navigate("/designs")} data-cursor="Back">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <span className="eyebrow gp-eyebrow">Graphic Design</span>
        <h1 className="gp-title display">Design Gallery</h1>
        <p className="gp-intro">
          A selection of social-media and graphic-design work. Click any piece to
          view it full screen.
        </p>
      </header>

      <div className="gp-masonry container">
        {gallery.map((item, i) => (
          <figure
            className="gp-item"
            key={i}
            data-reveal
            data-delay={(i % 3) * 70}
            onClick={() => setActive(i)}
            data-cursor="View"
          >
            <div className="gp-frame">
              <img src={item.src} alt={item.caption} loading="lazy" />
            </div>
            <figcaption className="gp-cap">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lb-min" onClick={close} aria-label="Minimise">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
              <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <button
            className="lb-nav lb-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M15 6l-6 6 6 6"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[active].src} alt={gallery[active].caption} />
            <figcaption className="lb-cap">{gallery[active].caption}</figcaption>
          </figure>

          <button
            className="lb-nav lb-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M9 6l6 6-6 6"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      )}
    </article>
  );
}
