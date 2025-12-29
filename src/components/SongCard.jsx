import { Play } from "lucide-react";

export default function SongCard({ song }) {
  return (
    <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition group cursor-pointer">
      <div className="relative">
        <img
          src={song.image}
          alt={song.title}
          className="rounded-md w-full aspect-square object-cover"
        />

        {/* Play button */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2 right-2 bg-green-500 p-3 rounded-full
                     opacity-0 translate-y-2 group-hover:opacity-100
                     group-hover:translate-y-0 transition shadow-xl"
        >
          <Play size={18} fill="black" />
        </button>
      </div>

      <h3 className="mt-4 font-semibold truncate">{song.title}</h3>
      <p className="text-sm text-gray-400 truncate">{song.artist}</p>
    </div>
  );
}
