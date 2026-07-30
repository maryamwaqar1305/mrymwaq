import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProject, projects } from "../data/content";
import useReveal from "../hooks/useReveal";
import "./CaseStudy.css";

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProject(slug);

  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="cs-missing container">
        <h1 className="display">Not found</h1>
        <p>That project doesn&apos;t exist.</p>
        <Link to="/" className="cs-back-link">← Back home</Link>
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="cs">
      {/* Header */}
      <header className="cs-hero">
        <div className="container">
          <button className="cs-back" onClick={() => navigate("/work")} data-cursor="Back">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Work
          </button>

          <div className="cs-hero__meta">
            <span>{project.year}</span>
            <span>{project.role}</span>
          </div>

          <h1 className="cs-hero__title display">{project.title}</h1>
          <p className="cs-hero__tagline">{project.tagline}</p>
        </div>
      </header>

      {/* Cover */}
      <div className="container">
        <div
          className="cs-cover"
          style={{ background: project.hue }}
        >
          <span className="cs-cover__mark" style={{ color: project.accent }}>
            {project.title}
          </span>
        </div>
      </div>

      {/* Overview + facts */}
      <section className="cs-section container">
        <div className="cs-overview">
          <p className="cs-overview__text display" data-reveal>{project.overview}</p>

          <aside className="cs-facts" data-reveal data-delay="100">
            <div className="cs-fact">
              <span className="cs-fact__label">Role</span>
              <span className="cs-fact__value">{project.role}</span>
            </div>
            <div className="cs-fact">
              <span className="cs-fact__label">Year</span>
              <span className="cs-fact__value">{project.year}</span>
            </div>
            <div className="cs-fact">
              <span className="cs-fact__label">Stack</span>
              <span className="cs-fact__value">{project.stack.join(", ")}</span>
            </div>
            <div className="cs-fact cs-fact--links">
              <a href={project.demo} target="_blank" rel="noreferrer">Live Demo ↗</a>
              <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </aside>
        </div>
      </section>

      {/* Metrics */}
      <section className="cs-metrics container" data-reveal>
        {project.metrics.map((m) => (
          <div className="cs-metric" key={m.label}>
            <span className="cs-metric__value display" style={{ color: project.accent }}>
              {m.value}
            </span>
            <span className="cs-metric__label">{m.label}</span>
          </div>
        ))}
      </section>

      {/* Challenge */}
      <section className="cs-section container">
        <div className="cs-block" data-reveal>
          <span className="cs-block__label eyebrow">The Challenge</span>
          <p className="cs-block__body">{project.challenge}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="cs-section container">
        <div className="cs-block" data-reveal>
          <span className="cs-block__label eyebrow">The Approach</span>
          <ol className="cs-approach">
            {project.approach.map((step, i) => (
              <li key={i} data-reveal data-delay={i * 70}>
                <span className="cs-approach__num">0{i + 1}</span>
                <span className="cs-approach__text">
                  {typeof step === "string" ? (
                    step
                  ) : (
                    <>
                      <strong className="cs-approach__title">{step.title}</strong>
                      {step.text}
                    </>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured Highlights */}
      {project.highlights && (
        <section className="cs-section container">
          <div className="cs-block" data-reveal>
            <span className="cs-block__label eyebrow">Featured Highlights</span>
            <ul className="cs-highlights">
              {project.highlights.map((h, i) => (
                <li key={i} data-reveal data-delay={i * 50}>{h}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Outcome */}
      <section className="cs-section container">
        <div className="cs-block" data-reveal>
          <span className="cs-block__label eyebrow">The Outcome</span>
          <p className="cs-block__body cs-block__body--lead">{project.outcome}</p>
        </div>
      </section>

      {/* What I Learned */}
      {project.learned && (
        <section className="cs-section container">
          <div className="cs-block" data-reveal>
            <span className="cs-block__label eyebrow">What I Learned</span>
            <p className="cs-block__body">{project.learned}</p>
          </div>
        </section>
      )}

      {/* Next project */}
      <Link to={`/work/${next.slug}`} className="cs-next" data-cursor="Open">
        <div className="container cs-next__inner">
          <span className="cs-next__label eyebrow">Next Project</span>
          <span className="cs-next__title display">{next.title}</span>
          <span className="cs-next__arrow">
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
