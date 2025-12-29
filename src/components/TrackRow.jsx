import { Plus, Check } from "lucide-react";
import { likeSong, isSongLiked } from "../utils/likedSongs";
import { useState } from "react";

export default function TrackRow({ track, index, showAlbum }) {
  const [liked, setLiked] = useState(
    isSongLiked(track.uid) // ✅ FIXED
  );

  const handleLike = () => {
    likeSong(track); // stores full song object
    setLiked(true);
  };

  return (
    <div className="grid grid-cols-[40px_3fr_2fr_1fr] items-center py-3 px-2 hover:bg-[#2a2a2a] rounded group">
      <span className="text-gray-400">
        {index}
      </span>

      {/* Title */}
      <div>
        <p className="font-medium">
          {track.title}
        </p>
        <p className="text-sm text-gray-400">
          {track.artist}
        </p>
      </div>

      {/* Album */}
      <span className="text-gray-400 text-sm">
        {showAlbum ? track.album : ""}
      </span>

      {/* Duration & Like */}
      <div className="flex justify-end items-center gap-4">
        {liked ? (
          <Check className="text-green-500" />
        ) : (
          <Plus
            className="cursor-pointer opacity-0 group-hover:opacity-100 hover:text-green-500"
            onClick={handleLike}
          />
        )}

        <span className="text-gray-400">
          {track.duration}
        </span>
      </div>
    </div>
  );
}
