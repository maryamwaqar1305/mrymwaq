import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__thanks">Thanks for scrolling all the way down.</p>
        <p className="footer__year">
          © {year} <span className="footer__name">{profile.navname}</span>
        </p>
      </div>
    </footer>
  );
}
