import { Home, Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Read existing search query from URL
  const params = new URLSearchParams(location.search);
  const urlQuery = params.get("q") || "";

  const [query, setQuery] = useState(urlQuery);

  // Sync input when route changes
  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Always search inside Music page
    if (value.trim()) {
      navigate(`/music?q=${encodeURIComponent(value)}`);
    } else {
      navigate("/music");
    }
  };

  return (
    <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-b from-[#1a1a1a] to-black sticky top-0 z-10">
      {/* Home icon */}
      <Home
        className="text-white cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Search icon */}
      <Search className="text-white" />

      {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="What do you want to play?"
        className="ml-4 bg-[#242424] text-sm px-4 py-2 rounded-full w-80 focus:outline-none text-white"
      />
    </div>
  );
}
