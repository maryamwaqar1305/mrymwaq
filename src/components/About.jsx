import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="index">03</span>
          <span className="eyebrow">Profile</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="about__teaser" data-reveal>
          <p className="about__lead display">
            I build and design digital experiences, writing the code and shaping
            the design behind them.
          </p>

          <div className="about__row">
            <p className="about__note">
              A developer and designer, so the thing I hand off is the thing that
              ships.
            </p>
            <Link to="/about" className="btn btn--ghost about__cta" data-cursor="Read">
              More about me
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
