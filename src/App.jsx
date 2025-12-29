import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Podcasts from "./pages/Podcasts";
import Library from "./pages/Library";
import PlaylistPage from "./pages/PlaylistPage";
import LikedSongs from "./pages/LikedSongs";
import IndiaCategory from "./pages/IndiaCategory";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<Music />} />
      <Route path="/podcasts" element={<Podcasts />} />
      <Route path="/library" element={<Library />} />
      <Route path="/library/liked" element={<LikedSongs />} />
      <Route path="/playlist/:id" element={<PlaylistPage />} />
      <Route path="/india/:id" element={<IndiaCategory />} />
    </Routes>
  );
}
