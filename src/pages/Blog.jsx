import { Link } from "react-router-dom";
import "./Blog.css";

const posts = [
  {
    number: "01",
    date: "14 AUGUST 2026",
    category: "LETTERS",
    slug: "all-roads-lead-back-to-myself",
    title: "All roads lead back to myself.",
    excerpt:
      "A reflection on returning to yourself when life becomes noisy, learning to sit with uncertainty, and finding steadiness within.",
  },
];

export default function Blog() {
  return (
    <main className="blog-page">
      <section className="blog-list">
        {posts.map((post) => (
          <article className="blog-item" key={post.slug}>
            <div className="blog-number">{post.number}</div>

            <div className="blog-content">
              <div className="blog-meta">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>

              <h1 className="blog-title">{post.title}</h1>

              <p className="blog-excerpt">{post.excerpt}</p>

              <Link
                to={`/blog/${post.slug}`}
                className="blog-read-more"
              >
                Read more ↗
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}