import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Filters from "../components/Filters";
import AlbumCard from "../components/AlbumCard";
import MobilePlayer from "../components/MobilePlayer";
import MobileBottomNav from "../components/MobileBottomNav";

import albums from "../data/albums.json";
import indiaBest from "../data/indiaBest.json";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black text-white overflow-x-hidden">

      {/* ✅ HIDE SIDEBAR ON MOBILE */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* ✅ MAIN SCROLL AREA */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <TopBar />

        {/* 🔥 bottom padding for mobile fixed UI */}
        <div className="px-6 pb-40 md:pb-6">
          <Filters />

          <Section title="Popular Radio" items={albums} />
          <Section title="India’s Best" items={indiaBest} />
          <Section title="Trending Now" items={albums.slice(6)} />
        </div>
      </div>

    </div>
  );
}

/* =========================
   REUSABLE SECTION
   ========================= */
function Section({ title, items }) {
  const LIMIT = 6;
  const [showAll, setShowAll] = useState(false);

  const hasMore = items.length > LIMIT;
  const visibleItems = showAll ? items : items.slice(0, LIMIT);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>

        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-gray-400 hover:underline"
          >
            {showAll ? "Show less" : "Show all"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {visibleItems.map((item) => (
          <AlbumCard key={item.id} album={item} />
        ))}
      </div>
    </section>
  );
}
