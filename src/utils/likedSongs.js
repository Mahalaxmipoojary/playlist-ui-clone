const STORAGE_KEY = "liked_songs";

export function getLikedSongs() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function likeSong(song) {
  const songs = getLikedSongs();

  if (!songs.find((s) => s.id === song.id && s.album === song.album)) {
    songs.push(song);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
  }
}

export function isSongLiked(id) {
  const songs = getLikedSongs();
  return songs.some((s) => s.id === id);
}
