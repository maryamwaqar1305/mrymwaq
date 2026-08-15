import "./Quotes.css";

const quotes = [
  {
    id: "01",
    date: "14 AUGUST 2026",
    text:
      "Sometimes finding yourself means returning to the places within you that you thought you had already outgrown.",
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