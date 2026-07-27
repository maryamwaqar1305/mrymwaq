import { useEffect, useState } from "react";

// Cycles through words with a typewriter effect.
export default function useTyping(words, { typeSpeed = 90, deleteSpeed = 45, hold = 1600 } = {}) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setText(words[0]);
      return;
    }

    const word = words[i % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) {
      delay = hold;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
      );
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, hold]);

  return text;
}
