import { Home, Search, Library, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MobileBottomNav() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 md:hidden">
      <div className="flex justify-around items-center py-3 text-xs text-gray-400">
        
        <button onClick={() => navigate("/")} className="flex flex-col items-center gap-1 text-white">
          <Home size={22} />
          <span>Home</span>
        </button>

        <button onClick={() => navigate("/music")} className="flex flex-col items-center gap-1">
          <Search size={22} />
          <span>Search</span>
        </button>

        <button onClick={() => navigate("/library")} className="flex flex-col items-center gap-1">
          <Library size={22} />
          <span>Library</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <Plus size={22} />
          <span>Create</span>
        </button>

      </div>
    </div>
  );
}
