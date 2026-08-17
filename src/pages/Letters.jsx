import { Link } from "react-router-dom";
import "./Letters.css";

const letters = [
  {
    date: "14 AUGUST 2026",
    category: "LETTERS",
    slug: "all-roads-lead-back-to-myself",
    title: "All roads lead back to myself.",
    excerpt:
      "A reflection on returning to yourself when life becomes noisy, learning to sit with uncertainty, and finding steadiness within.",
  },
];

export default function Letters() {
  return (
    <main className="letters-page">
      <section className="letters-container">
        <div className="letters-list">
          {letters.map((letter) => (
            <article className="letter-item" key={letter.slug}>
              <div className="letter-meta">
                <span>{letter.date}</span>
                <span>{letter.category}</span>
              </div>

              <h1 className="letter-title">{letter.title}</h1>

              <p className="letter-excerpt">{letter.excerpt}</p>

              <Link
                to={`/blog/${letter.slug}`}
                className="letter-link"
              >
                Read letter ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}