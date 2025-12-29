import { Library, Plus, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    // ❗ Hidden on mobile, visible from md screens
    <div className="hidden md:flex w-20 bg-black border-r border-white/10 flex-col items-center py-6 gap-6">
      
      {/* Library */}
      <Library
        size={22}
        className="text-gray-400 hover:text-white cursor-pointer"
        onClick={() => navigate("/library")}
      />

      {/* Create Playlist */}
      <Plus
        size={22}
        className="text-gray-400 hover:text-white cursor-pointer"
        onClick={() => alert("Create playlist")}
      />

      {/* Saved */}
      <Bookmark
        size={22}
        className="text-green-500 cursor-pointer"
        onClick={() => navigate("/library/liked")}
      />
    </div>
  );
}
