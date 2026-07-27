import album from "../assets/album.jpg";

// "Last played" track shown in the Spotify-style widget.
// - Put your audio file at:  public/missu.mp3   (served at /missu.mp3)
// - Put the album image at:  src/assets/album.jpg
export const lastPlayed = {
  status: "Last played",
  title: "Dance with me",
  artist: "Bruno Mars",
  cover: album,
  audio: "/missu.mp3",
};
