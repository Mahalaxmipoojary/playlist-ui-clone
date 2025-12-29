import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import TrackList from "../components/TrackList";
import { getLikedSongs } from "../utils/likedSongs";

export default function LikedSongs() {
  const likedSongs = getLikedSongs();

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        <TopBar />

        <div className="px-6 mt-6">
          <h1 className="text-3xl font-bold mb-4">Liked Songs</h1>

          {likedSongs.length === 0 ? (
            <p className="text-gray-400">No liked songs yet</p>
          ) : (
            <TrackList tracks={likedSongs} showAlbum />
          )}
        </div>
      </div>
    </div>
  );
}
