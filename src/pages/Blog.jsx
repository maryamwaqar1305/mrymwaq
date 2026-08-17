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

  {
  number: "02",
  date: "17 AUGUST 2026",
  category: "LETTERS",
  slug: "i-want-to-delete-myself-from-the-internet-completely",
  title: "I want to delete myself from the internet completely",
  excerpt:
    "Somewhere Along the Way, Living Started Feeling Performative.",
},
];

export default function Blog() {
  return (
    <main className="blog-page">
      <section className="blog-list">
        {posts.map((post) => (
          <article className="blog-item" key={post.slug}>
            <div className="blog-content">
              <div className="blog-meta">
                <span>{post.date}</span>
              </div>

              <h1 className="blog-title">{post.title}</h1>

              <p className="blog-excerpt">{post.excerpt}</p>

              <a
                href={`/blog/${post.slug}`}
                className="blog-read-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more ↗
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}