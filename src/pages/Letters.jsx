import { Link } from "react-router-dom";
import "./Letters.css";

const letters = [
  {
    date: "14 AUGUST 2026",
    slug: "all-roads-lead-back-to-myself",
    title: "All roads lead back to myself.",
    excerpt:
      "The art of returning to yourself when the world gets too loud.",
  },
  {
    date: "17 AUGUST 2026",
    title: "I want to delete myself from the internet completely",
    excerpt:
      "Somewhere Along the Way, Living Started Feeling Performative.",
    slug: "i-want-to-delete-myself-from-the-internet-completely",
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