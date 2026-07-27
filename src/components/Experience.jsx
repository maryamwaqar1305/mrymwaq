import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="index">02</span>
          <span className="eyebrow">Career</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline">
          {experience.map((job, i) => (
            <div className="tl-item" key={i} data-reveal data-delay={i * 90}>
              <div className="tl-marker" />
              <div className="tl-period">{job.period}</div>
              <div className="tl-content">
                <h3 className="tl-role">{job.role}</h3>
                <p className="tl-company">{job.company}</p>
                <p className="tl-desc">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
