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

  "i-want-to-delete-myself-from-the-internet-completely": {
    title: "I want to delete myself from the internet completely",
    date: "17 AUGUST 2026",
    category: "LETTERS",

    content: [
      `There are days where I genuinely feel exhausted by how aware I have become of my own existence. Every part of life feels observed now, even when nobody is physically watching. I can be sitting in a café with coffee getting cold beside me, sunlight falling perfectly across the table, music playing somewhere in the background, and instead of fully being there, part of my brain immediately turns the moment into something visual. Something postable. Something that could become a story, a photo dump, a tweet, a paragraph, a memory designed for an audience before it even becomes a memory for myself. That realization scares me more than I admit because I don’t think humans were meant to constantly witness themselves from the outside like this. I think we were meant to disappear inside moments fully, without interruption, without documentation, without feeling this constant pressure to archive ourselves so we can later prove that we lived.`,

      `What makes it worse is that the internet convinced us this behavior is normal. Entire generations now experience life while mentally standing outside of it at the same time. Every dinner table has somebody checking how they look in the front camera. Every concert has thousands of people recording songs they will barely rewatch later. Every beautiful interaction immediately becomes content material in our heads. Even grief gets formatted now. Even loneliness becomes aesthetic. Sometimes I scroll through social media and feel like everybody is performing emotional intimacy instead of actually living it. Everybody knows how to sound self-aware now. Everybody knows how to phrase their sadness beautifully. Everybody knows how to package vulnerability into something consumable. Somewhere along the way, being human started feeling strangely theatrical. And also people digging up ‘relatable quotes’ to justify their nasty behaviour, like be serious for once! Stop hiding behind Pinterest philosophy and take some god damn accountability.`,

      `I think that’s why privacy feels so emotionally important to me now. Privacy used to mean hiding things out of shame or fear. Now it feels sacred. There is something deeply comforting about experiences that exist nowhere except inside your own memory. Some moments become more beautiful when they remain untouched by other people’s opinions. A conversation during a midnight walk. Somebody laughing in the passenger seat while rain hits the windows. Crying during a train ride while nobody notices. Hearing a song at the exact right moment in your life. These things lose something when they immediately become public. The internet keeps teaching us that experiences gain value once they are seen, but honestly, some things feel more alive when nobody else knows they happened.`,
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