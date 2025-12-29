import TrackRow from "./TrackRow";

export default function TrackList({ tracks, showAlbum = true }) {
  if (!tracks || tracks.length === 0) {
    return (
      <p className="text-gray-400 px-6 mt-6">
        No songs available
      </p>
    );
  }

  return (
    <div className="mt-6 px-6">
      {/* Header */}
      <div className="grid grid-cols-[40px_3fr_2fr_1fr] text-gray-400 border-b border-white/10 pb-2 mb-2">
        <span>#</span>
        <span>Title</span>
        <span>{showAlbum ? "Album" : ""}</span>
        <span className="text-right">⏱</span>
      </div>

      {tracks.map((track, index) => (
        <TrackRow
          key={track.uid}
          track={track}
          index={index + 1}
          showAlbum={showAlbum}
        />
      ))}
    </div>
  );
}
