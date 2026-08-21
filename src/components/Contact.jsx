import { profile } from "../data/content";
import "./Contact.css";

export default function Contact() {
  // Break at the "@" on narrow screens instead of mid-word.
  const [emailUser, emailDomain] = profile.email.split("@");

  return (
    <section className="section contact" id="contact">
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
            {emailUser}
            <wbr />
            @{emailDomain}
          </a>

          <p className="contact__note">
            Have a project in mind or want to collaborate? I&apos;m always open to
            discussing new opportunities and ideas.
          </p>

          <div className="contact__links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact__ext"
            >
              GitHub
              <span className="contact__ext-arrow" aria-hidden="true">↗</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact__ext"
            >
              LinkedIn
              <span className="contact__ext-arrow" aria-hidden="true">↗</span>
            </a>
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="contact__ext"
            >
              X
              <span className="contact__ext-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
