import { Play } from "lucide-react";

export default function MobilePlayer() {
  return (
    <div className="fixed bottom-14 left-0 right-0 z-40 bg-[#2a1a0a] md:hidden px-4 py-3">
      <div className="flex items-center justify-between">
        
        <div className="max-w-[70%]">
          <p className="text-sm font-semibold text-white truncate">
            Sitaare (From "Ikkis")
          </p>
          <p className="text-xs text-gray-300 truncate">
            Arijit Singh
          </p>
        </div>

        <Play size={24} fill="white" className="text-white" />
      </div>
    </div>
  );
}
