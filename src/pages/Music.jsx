import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Filters from "../components/Filters";
import TrackList from "../components/TrackList";
import albums from "../data/playlist.json";
import { useLocation } from "react-router-dom";

export default function Music() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  const allSongs = albums.flatMap((album) =>
    album.tracks.map((track, index) => ({
      ...track,
      album: album.name,
      uid: `${album.id}-${index}`,
    }))
  );

  const filteredSongs = query
    ? allSongs.filter(
        (song) =>
          song.title.toLowerCase().includes(query) ||
          song.artist.toLowerCase().includes(query)
      )
    : allSongs;

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        <TopBar />

        <div className="px-6">
          <Filters />

          <h1 className="text-3xl font-bold mt-6 mb-4">Music</h1>

          {filteredSongs.length === 0 ? (
            <p className="text-gray-400 mt-8">No songs found</p>
          ) : (
            <TrackList tracks={filteredSongs} showAlbum />
          )}
        </div>
      </div>
    </div>
  );
}
