import { useNavigate, useLocation } from "react-router-dom";

export default function Filters() {
  const navigate = useNavigate();
  const location = useLocation();

  const base =
    "px-4 py-1 rounded-full text-sm cursor-pointer bg-[#2a2a2a] hover:bg-[#333] z-10 relative";

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex gap-3 mt-4 relative z-10">
      <button
        onClick={() => navigate("/")}
        className={`${base} ${
          isActive("/") ? "bg-white text-black" : "text-white"
        }`}
      >
        All
      </button>

      <button
        onClick={() => navigate("/music")}
        className={`${base} ${
          isActive("/music") ? "bg-white text-black" : "text-white"
        }`}
      >
        Music
      </button>

      <button
        onClick={() => navigate("/podcasts")}
        className={`${base} ${
          isActive("/podcasts") ? "bg-white text-black" : "text-white"
        }`}
      >
        Podcasts
      </button>
    </div>
  );
}
