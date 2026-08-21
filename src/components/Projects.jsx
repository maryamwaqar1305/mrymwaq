import { Link } from "react-router-dom";
import { projects } from "../data/content";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="work" className="section projects">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="index">01</span>
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">Work</h2>
        </div>

        <div className="projects__list">
          {projects.map((p, i) => (
            <article
              className={`pcard ${i % 2 === 1 ? "pcard--right" : "pcard--left"}`}
              key={p.slug}
              data-reveal
            >
              <Link
                to={`/work/${p.slug}`}
                className="pcard__frame"
                data-cursor="view case study"
              >
                <div className="pcard__image">
                  {p.cover ? (
                    <img src={p.cover} alt={p.title} loading="lazy" decoding="async" />
                  ) : (
                    <span className="pcard__mark">{p.title.charAt(0)}</span>
                  )}
                </div>
              </Link>

              <div className="pcard__meta">
                <h3 className="pcard__title">{p.title}</h3>
                <p className="pcard__desc">{p.tagline}</p>
                <div className="pcard__tags">
                  <span>{p.stack[0]}</span>
                  <span>{p.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
