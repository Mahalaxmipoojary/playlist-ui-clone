import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import TrackList from "../components/TrackList";
import indiaSongs from "../data/indiaSongs.json";

export default function IndiaCategory() {
  const { id } = useParams();

  const songs = indiaSongs[id] || [];

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        <TopBar />

        <div className="px-6 mt-6">
          <h1 className="text-3xl font-bold mb-6">
            {id.replace("-", " ").toUpperCase()}
          </h1>

          {songs.length === 0 ? (
            <p className="text-gray-400">No songs available</p>
          ) : (
            <TrackList tracks={songs} showAlbum />
          )}
        </div>
      </div>
    </div>
  );
}
