import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { nav, profile } from "../data/content";
import "./Nav.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Smoothly scroll to a section by id (retries until the element exists).
  const scrollToId = (id) => {
    let tries = 0;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (tries < 30) {
        tries++;
        setTimeout(tick, 100);
      }
    };
    tick();
  };

  // Handle a nav link click. Hash links (/#work, /#contact) scroll to a section;
  // plain routes (/about) navigate normally.
  const handleClick = (e, href) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2); // "work" / "contact"
      if (location.pathname === "/") {
        // already home — scroll directly
        scrollToId(id);
      } else {
        // navigate home WITH the hash so Home's effect scrolls after render
        navigate("/#" + id);
      }
    }
    // non-hash links fall through to the normal <Link> behaviour
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
          {profile.name}
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={item.href}
                className="nav__link"
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
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
          {nav.map((item, i) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={item.href}
                className="nav__drawer-link"
                style={{ transitionDelay: `${open ? 0.08 + i * 0.05 : 0}s` }}
                onClick={(e) => handleClick(e, item.href)}
              >
                <span className="nav__drawer-index">0{i + 1}</span>
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="nav__drawer-link"
                style={{ transitionDelay: `${open ? 0.08 + i * 0.05 : 0}s` }}
                onClick={() => setOpen(false)}
              >
                <span className="nav__drawer-index">0{i + 1}</span>
                {item.label}
              </Link>
            )
          )}
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
