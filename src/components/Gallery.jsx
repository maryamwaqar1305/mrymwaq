import { Link } from "react-router-dom";
import { gallery, featured } from "../data/gallery";
import "./Gallery.css";

export default function Gallery() {
  const picks = featured.map((i) => gallery[i]).filter(Boolean);

  return (
    <section id="designs" className="section gallery-teaser">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="index">02</span>
          <span className="eyebrow">Graphic Design</span>
          <h2 className="section-title">Designs</h2>
        </div>
      </div>

      <div className="gt-grid">
        {picks.map((item, i) => (
          <figure className="gt-item" key={i} data-reveal data-delay={i * 90}>
            <div className="gt-frame">
              <img src={item.src} alt={item.caption} loading="lazy" decoding="async" />
            </div>
            <figcaption className="gt-cap">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="container">
        <div className="gt-cta" data-reveal>
          <Link to="/gallery" className="btn btn--solid" data-cursor="Open Gallery">
            Design Gallery
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
