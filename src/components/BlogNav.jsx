import { Link } from "react-router-dom";
import "./BlogNav.css";

export default function BlogNav() {
  return (
    <header className="blog-site-nav">
      <div className="blog-site-nav__inner">

        <Link to="/blog/quotes" className="blog-site-nav__logo">
          Maryam Waqar
        </Link>

        <nav className="blog-site-nav__links">
          <Link to="/blog/quotes">Quotes</Link>
          <Link to="/blog/letters">Letters</Link>
        </nav>

      </div>
    </header>
  );
}