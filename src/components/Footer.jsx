import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright © 2026, Maryam Waqar.</p>
    </footer>
  );
}
