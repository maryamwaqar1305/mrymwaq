import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogPost.css";

const posts = {
  "all-roads-lead-back-to-myself": {
    title: "All roads lead back to myself.",
    date: "14 AUGUST 2026",
    category: "LETTERS",

    content: [
      `There is a strange thing I have been noticing about life lately. Every time I think I am moving away from myself, I somehow end up right back here, sitting with my own thoughts again, trying to understand what they are trying to tell me. I used to think growth meant distance. Distance from old habits, old fears, old versions of me that felt too small for the life I wanted. I kept believing that if I kept moving, kept chasing something bigger, I would eventually arrive at a place where everything inside me felt settled. A place where my mind felt clear, where my heart felt lighter, where living felt less like carrying invisible weight and more like breathing.`,

      `Life had other plans.`,

      `There have been seasons where everything around me felt louder than my own thoughts. Work piling up, expectations growing taller, people needing things from me, my own mind asking questions I did not have answers for. It is strange how chaos enters life without knocking. One week everything feels manageable and then suddenly even the smallest task feels heavier than it should. Replying to emails feels exhausting. Getting out of bed feels like negotiating with myself. Existing feels crowded. I think that is the hardest part about chaos. It fills every corner so quietly that by the time I notice it, it has already made itself at home.`,

      `For a long time, I treated chaos like something to defeat. Like if I organized my days better or worked harder or stayed busier, I could outrun it. I kept trying to fix the outside, thinking it would repair the inside. It never worked that way. The outside kept changing its shape. Life kept shifting. People changed, plans broke, feelings moved around like furniture in a dark room. I kept realizing the world would always remain unpredictable, and the only place that could hold any real steadiness was inside me.`,

      `That thought scared me at first because it meant I had nowhere else to escape. It meant I had to meet myself fully, with all the unfinished thoughts and unresolved feelings I kept placing in the background. There is something deeply uncomfortable about sitting with yourself when your mind feels crowded. Silence starts feeling louder than noise. Old memories return like unfinished conversations. Things I thought I had moved past begin sitting across from me again, asking to be felt properly this time.`,
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams();

  const post = posts[slug];

  useEffect(() => {
    if (post) {
      document.title = post.title;
    }

    return () => {
      document.title = "Maryam Waqar | Portfolio";
    };
  }, [post]);

  if (!post) {
    return (
      <main className="blog-post-page">

        <article className="blog-post-container">

          <p className="blog-post-not-found">
            This letter does not exist.
          </p>

          <Link
            to="/blog"
            className="blog-post-not-found-link"
          >
            Letters ↗
          </Link>

        </article>

      </main>
    );
  }

  return (
    <main className="blog-post-page">

      <article className="blog-post-container">

        <header className="blog-post-header">

          <div className="blog-post-meta">
            <span>{post.date}</span>
            <span>{post.category}</span>
          </div>

          <h1>{post.title}</h1>

        </header>


        <div className="blog-post-body">

          {post.content.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}

        </div>

      </article>

    </main>
  );
}