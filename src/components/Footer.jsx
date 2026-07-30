import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.navname}</span>
          <p className="footer__thanks">Thanks for scrolling all the way down.</p>
        </div>
        <div className="footer__meta">
          <div className="footer__social">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.x} target="_blank" rel="noreferrer">X</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <span className="footer__year">© {year}</span>
        </div>
      </div>
    </footer>
  );
}
