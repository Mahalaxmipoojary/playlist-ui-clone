import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function LocalFiles() {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <TopBar />
        <div className="px-6 mt-6">
          <h1 className="text-3xl font-bold">Local Files</h1>
          <p className="text-gray-400 mt-4">No local files found</p>
        </div>
      </div>
    </div>
  );
}
