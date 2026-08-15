import { Link, useLocation } from "react-router-dom";
import "./BlogNav.css";

export default function BlogNav() {
  const location = useLocation();

  const onQuotesPage = location.pathname === "/blog/quotes";

  return (
    <header className="blog-site-nav">

      <div className="blog-site-nav__inner">

        <Link
          to="/blog"
          className="blog-site-nav__logo"
        >
          Maryam Waqar
        </Link>

        <nav className="blog-site-nav__links">

          <Link
            to="/blog/quotes"
            className={onQuotesPage ? "active" : ""}
          >
            Quotes
          </Link>

          <Link
            to="/blog"
            className={!onQuotesPage ? "active" : ""}
          >
            Letters
          </Link>

        </nav>

      </div>

    </header>
  );
}