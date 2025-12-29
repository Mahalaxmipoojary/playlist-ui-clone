import albums from "../data/albums.json";

// 🔹 All songs
export const allSongs = albums.flatMap(album =>
  album.tracks.map(track => ({
    ...track,
    albumName: album.name,
    albumId: album.id,
    image: album.image,
  }))
);

// 🔹 Popular Radio
export const popularRadio = albums.slice(0, 6);

// 🔹 Trending Songs
export const trendingSongs = allSongs.slice(0, 10);

// 🔹 Party Hits
export const partyAlbums = albums.filter(album =>
  album.name.toLowerCase().includes("party")
);

// 🔹 Romantic Hits
export const romanticAlbums = albums.filter(album =>
  album.name.toLowerCase().includes("love") ||
  album.description.toLowerCase().includes("romantic")
);
