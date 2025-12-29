import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AlbumCard({ album }) {
  const navigate = useNavigate();

  const subtitle = album.artist || album.description || "";

  const handleClick = () => {
    // India Best cards → language category page
    if (album.source) {
      navigate(`/india/${album.id}`);
      return;
    }

    // Normal albums → playlist page
    navigate(`/playlist/${album.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition group cursor-pointer"
    >
      <div className="relative">
        <img
          src={album.image}
          alt={album.title}
          className="rounded-md w-full aspect-square object-cover"
        />

        {/* Play button (visual only) */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2 right-2 bg-green-500 p-3 rounded-full
                     opacity-0 translate-y-2 group-hover:opacity-100
                     group-hover:translate-y-0 transition shadow-xl"
        >
          <Play size={18} fill="black" />
        </button>
      </div>

      <h3 className="mt-4 font-semibold truncate">{album.title}</h3>
      <p className="text-sm text-gray-400 truncate">{subtitle}</p>
    </div>
  );
}
