import { profile } from "../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="index">04</span>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Get in touch</h2>
        </div>

        <div className="contact__inner" data-reveal>
          <a
            href={`mailto:${profile.email}`}
            className="contact__email display"
            data-cursor="Email"
          >
            {profile.email}
          </a>

          <p className="contact__note">
            Have a project in mind, or just want to talk shop about anything? I read every message.
          </p>

          <div className="contact__links">
            <a href={`mailto:${profile.email}`} className="btn btn--solid">
              Say hello
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact__ext">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__ext">
              LinkedIn
            </a>
            <a href={profile.x} target="_blank" rel="noreferrer" className="contact__ext">
              X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
