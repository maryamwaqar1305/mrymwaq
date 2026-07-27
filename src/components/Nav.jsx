import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav, profile } from "../data/content";
import "./Nav.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
          {profile.name}
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="nav__resume"
            data-cursor="Resume"
          >
            Resume
          </a>
        </nav>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="nav__drawer-link"
              style={{ transitionDelay: `${open ? 0.08 + i * 0.05 : 0}s` }}
              onClick={() => setOpen(false)}
            >
              <span className="nav__drawer-index">0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="nav__drawer-link"
            style={{ transitionDelay: `${open ? 0.08 + nav.length * 0.05 : 0}s` }}
            onClick={() => setOpen(false)}
          >
            <span className="nav__drawer-index">0{nav.length + 1}</span>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
