import Sidebar from "../components/Sidebar";
import { Plus, Heart, Folder, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getLikedSongs } from "../utils/likedSongs";

export default function Library() {
  const navigate = useNavigate();
  const likedCount = getLikedSongs().length;

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />

      <div className="flex-1 px-6 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Library</h1>

          <button className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-full hover:bg-[#333]">
            <Plus size={16} />
            Create
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => navigate("/library")}
            className="bg-white text-black px-4 py-1 rounded-full text-sm"
          >
            Playlists
          </button>

          <button
            onClick={() => navigate("/podcasts")}
            className="bg-[#2a2a2a] px-4 py-1 rounded-full text-sm hover:bg-[#333]"
          >
            Podcasts
          </button>
        </div>

        {/* Library Items */}
        <div className="space-y-4">

          {/* Liked Songs */}
          <div
            onClick={() => navigate("/library/liked")}
            className="flex items-center gap-4 hover:bg-[#181818] p-3 rounded cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center rounded">
              <Heart fill="white" />
            </div>
            <div>
              <p className="font-medium">Liked Songs</p>
              <p className="text-sm text-gray-400">
                Playlist • {likedCount} songs
              </p>
            </div>
          </div>

          {/* Local Files */}
          <div
            onClick={() => navigate("/library/local")}
            className="flex items-center gap-4 hover:bg-[#181818] p-3 rounded cursor-pointer"
          >
            <div className="w-12 h-12 bg-[#1DB954] flex items-center justify-center rounded">
              <Music />
            </div>
            <div>
              <p className="font-medium">Local Files</p>
              <p className="text-sm text-gray-400">Device files</p>
            </div>
          </div>

          {/* Saved Playlists */}
          <div
            onClick={() => navigate("/library/playlists")}
            className="flex items-center gap-4 hover:bg-[#181818] p-3 rounded cursor-pointer"
          >
            <div className="w-12 h-12 bg-[#333] flex items-center justify-center rounded">
              <Folder />
            </div>
            <div>
              <p className="font-medium">Saved Playlists</p>
              <p className="text-sm text-gray-400">Folders</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
