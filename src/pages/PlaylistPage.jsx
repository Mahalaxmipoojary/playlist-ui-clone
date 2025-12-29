import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PlaylistHeader from "../components/PlaylistHeader";
import TrackList from "../components/TrackList";
import playlists from "../data/playlist.json";

export default function PlaylistPage() {
  const { id } = useParams();
  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) return null;

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <PlaylistHeader playlist={playlist} />
        <TrackList tracks={playlist.tracks} />
      </div>
    </div>
  );
}
