import { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { about, profile, experience, skills } from "../data/content";
import useReveal from "../hooks/useReveal";
import ImageTrail from "../components/ImageTrail";
import SpotifyCard from "../components/SpotifyCard";
import "./About.css";

export default function AboutPage() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="ab">
      <header className="ab-hero container" ref={heroRef}>
        <ImageTrail zoneRef={heroRef} />
        <button className="ab-back" onClick={() => navigate("/")} data-cursor="Home">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Home
        </button>

        <span className="eyebrow ab-eyebrow">About</span>
        <h1 className="ab-title display">{profile.name}</h1>
        <p className="ab-intro">{about.intro}</p>

        <div className="ab-spotify">
          <SpotifyCard />
        </div>
      </header>

      <div className="container ab-body">
        <div className="ab-facts" data-reveal>
          {about.facts.map((f) => (
            <div className="ab-fact" key={f.label}>
              <span className="ab-fact__label">{f.label}</span>
              <span className="ab-fact__value">{f.value}</span>
            </div>
          ))}
        </div>

        <section className="ab-section ab-section--wide" data-reveal>
          <h2 className="ab-section__head display">Experience</h2>
          <div className="ab-timeline">
            {experience.map((job, i) => (
              <div className="ab-job" key={i}>
                <span className="ab-job__period">{job.period}</span>
                <div className="ab-job__main">
                  <h3 className="ab-job__role">{job.role}</h3>
                  <p className="ab-job__company">{job.company}</p>
                  {job.bullets ? (
                    <ul className="ab-job__list">
                      {job.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="ab-job__desc">{job.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="ab-spacer" aria-hidden="true" />

        {about.sections.map((sec, i) => (
          <section className="ab-section" key={i} data-reveal>
            <h2 className="ab-section__head display">{sec.heading}</h2>
            <div className="ab-section__body">
              {sec.body.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="ab-section ab-section--wide" data-reveal>
          <h2 className="ab-section__head display">Toolkit</h2>
          <div className="ab-skills">
            {skills.map((s) => (
              <div className="ab-skill-group" key={s.group}>
                <h4 className="ab-skill-label">{s.group}</h4>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Link to="/#contact" className="ab-cta" data-cursor="Say hi">
        <div className="container ab-cta__inner">
          <span className="eyebrow">Let&apos;s talk</span>
          <span className="ab-cta__title display">Work with me</span>
          <span className="ab-cta__arrow">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
