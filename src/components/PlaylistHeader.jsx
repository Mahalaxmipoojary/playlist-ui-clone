import { Play, Plus, Download } from "lucide-react";

export default function PlaylistHeader({ playlist, onLike }) {
  const downloadPlaylist = () => {
    const blob = new Blob(
      [JSON.stringify(playlist, null, 2)],
      { type: "application/json" }
    );
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${playlist.name}.json`;
    link.click();
  };

  return (
    <div className="bg-gradient-to-b from-orange-700 to-black p-6 flex gap-6 items-end">
      <img
        src={playlist.image}
        alt={playlist.name}
        className="w-52 h-52 shadow-2xl"
      />

      <div>
        <p className="uppercase text-sm">Public Playlist</p>
        <h1 className="text-5xl font-bold mt-2">
          {playlist.name}
        </h1>
        <p className="text-gray-300 mt-4">
          {playlist.description}
        </p>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-6">
          <button className="bg-green-500 p-4 rounded-full">
            <Play fill="black" />
          </button>

          <Plus
            className="cursor-pointer hover:text-green-500"
            onClick={onLike}
          />

          <Download
            className="cursor-pointer hover:text-green-500"
            onClick={downloadPlaylist}
          />
        </div>
      </div>
    </div>
  );
}
