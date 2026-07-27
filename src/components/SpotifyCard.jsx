import { useEffect, useRef, useState } from "react";
import { lastPlayed } from "../data/spotify";
import "./SpotifyCard.css";

// Official Spotify wordmark-style circular logo, cleanly drawn.
function SpotifyLogo() {
  return (
    <svg className="sp-logo" viewBox="0 0 168 168" width="16" height="16" aria-hidden="true">
      <circle cx="84" cy="84" r="84" fill="#1ED760" />
      <path
        fill="#000"
        d="M122.6 118.3c-1.5 2.5-4.8 3.3-7.3 1.7-20-12.2-45.1-15-74.7-8.2-2.9.7-5.7-1.1-6.4-4-.7-2.9 1.1-5.7 4-6.4 32.4-7.4 60.2-4.2 82.6 9.5 2.6 1.6 3.4 4.9 1.8 7.4zm10.3-22.9c-1.9 3.1-6 4.1-9.1 2.2-22.9-14.1-57.8-18.2-84.9-10-3.5 1.1-7.2-.9-8.2-4.4-1.1-3.5.9-7.2 4.4-8.3 30.9-9.4 69.4-4.8 95.7 11.3 3.1 1.9 4.1 6 2.1 9.2zm.9-23.8C106.3 55.5 61.6 53.8 35.9 61.6c-4.2 1.3-8.6-1.1-9.9-5.3-1.3-4.2 1.1-8.6 5.3-9.9 29.5-9 78.9-7.2 110 11.3 3.8 2.2 5 7.1 2.7 10.8-2.2 3.7-7.1 5-10.8 2.7z"
      />
    </svg>
  );
}

export default function SpotifyCard() {
  const t = lastPlayed;
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = (e) => {
    e.preventDefault();
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const seek = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
    setProgress(pct * 100);
  };

  return (
    <div className={`sp-card ${playing ? "is-playing" : ""}`}>
      <audio ref={audioRef} src={t.audio} preload="metadata" />

      <img className="sp-cover" src={t.cover} alt="" />

      <div className="sp-info">
        <span className="sp-status">
          <SpotifyLogo />
          {playing ? "Now playing" : t.status}
        </span>
        <span className="sp-title">{t.title}</span>
        <span className="sp-artist">{t.artist}</span>

        {playing && (
          <div className="sp-progress" onClick={seek}>
            <div className="sp-progress__fill" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>

      <button className="sp-play" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
        {playing ? (
          <svg viewBox="0 0 24 24" width="18" height="18">
            <rect x="6" y="5" width="4" height="14" fill="currentColor" />
            <rect x="14" y="5" width="4" height="14" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}
