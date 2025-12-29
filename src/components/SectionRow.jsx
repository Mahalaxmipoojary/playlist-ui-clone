export default function SectionRow({ title, children }) {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-sm text-gray-400 hover:underline cursor-pointer">
          Show all
        </span>
      </div>
      {children}
    </div>
  );
}
