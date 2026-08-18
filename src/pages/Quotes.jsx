import "./Quotes.css";

const quotes = [
  {
    id: "01",
    date: "14 AUGUST 2026",
    text:
      "As long as I have myself, I will be fine. I have lost people, changed cities, outgrown dreams, and watched entire chapters of my life come to an end. Yet somehow, I have always found my way back to myself. That realization is strangely comforting. It means no matter what life takes from me, it can never take the person who keeps rebuilding it.",
  },
  {
    id: "02",
    date: "18 AUGUST 2026",
    text:
      "The urge to disappear from everyone and abandon everything. To leave without a goodbye. To board the first train to a place I’ve never heard of and walk its streets as a complete stranger. To sit in small cafés where nobody knows my name, rent a tiny apartment with a window overlooking a busy road, and spend my evenings watching people pass by. To exist without a past, without expectations, without anyone asking where I’ve been. Just me and the strange comfort of starting over somewhere no memory can find me.",
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