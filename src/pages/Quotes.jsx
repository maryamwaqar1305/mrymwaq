import "./Quotes.css";

const quotes = [
  {
    id: "01",
    date: "14 AUGUST 2026",
    text:
      "As long as I have myself, I will be fine. I have lost people, changed cities, outgrown dreams, and watched entire chapters of my life come to an end. Yet somehow, I have always found my way back to myself. That realization is strangely comforting. It means no matter what life takes from me, it can never take the person who keeps rebuilding it.",
  },
];

export default function Quotes() {
  return (
    <main className="quotes-page">

      <section className="quotes-container">

        <div className="quotes-list">

          {quotes.map((quote) => (
            <article className="quote-post" key={quote.id}>

              <p className="quote-post__text">
                {quote.text}
              </p>

              <time className="quote-post__date">
                {quote.date}
              </time>

            </article>
          ))}

        </div>

      </section>

    </main>
  );
}