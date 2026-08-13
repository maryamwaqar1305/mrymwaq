import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { nav, profile } from "../data/content";
import { scrollToHash, getLenis } from "../lib/lenis";
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

  // Lock scrolling while the drawer is open.
  // NOTE: do NOT set an inline overflow on <html> here. Lenis owns that
  // property via its .lenis-stopped class; an inline style beats the class
  // and, if it ever fails to clear, kills scrolling across the whole site.
  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      if (lenis) lenis.stop();
      else document.body.classList.add("no-scroll");
    } else {
      if (lenis) lenis.start();
      else document.body.classList.remove("no-scroll");
    }
    // Safety net: never leave the page locked.
    return () => {
      getLenis()?.start();
      document.body.classList.remove("no-scroll");
      document.documentElement.style.removeProperty("overflow");
    };
  }, [open]);

  // Close the drawer if the viewport grows past the mobile breakpoint.
  // Otherwise `open` stays true and the scroll lock persists on desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 761px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Hash links (/#work, /#contact): scroll if the target is already on this
  // page, otherwise route home and let Home.jsx scroll on arrival.
  // Checking the DOM (not the pathname) matters because App renders Home at
  // "/", "/work", "/contact", "/designs" and "*".
  const handleClick = (e, href) => {
    setOpen(false);

    if (!href.startsWith("/#")) return; // "/about" - let <Link> handle it

    e.preventDefault();
    const hash = href.slice(1); // "#work" | "#contact"

    if (!document.querySelector(hash)) {
      navigate(href);
      return;
    }

    // Wait for the drawer to close and the scroll lock to lift. Scrolling
    // synchronously here gets swallowed while the page is still locked.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHash(hash, { immediate: true, force: true });
        window.history.replaceState(null, "", href);
      });
    });
  };

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="container nav__inner">
          <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
            {profile.navname}
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
      </header>

      {/* Must live OUTSIDE <header>: .nav--scrolled applies backdrop-filter,
          which makes the header a containing block for position:fixed children.
          Inside it, this drawer sizes itself to the 72px header instead of the
          viewport and its links spill out over the page. */}
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
    </>
  );
}
