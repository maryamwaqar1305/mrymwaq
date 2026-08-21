import "./Backdrop.css";

/*
 * Ambient page backdrop — sits behind everything on every route.
 * A faint monochrome dot-grid pattern plus a whisper of film grain,
 * so large white areas don't feel flat. Purely decorative: fixed,
 * non-interactive, and static for prefers-reduced-motion users.
 */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__pattern" />
      <div className="backdrop__grain" />
    </div>
  );
}
