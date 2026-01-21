export default function HighlightItem({ index, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-600 font-bold text-black">
        {index}
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900">
          {title}
        </h4>
        <p className="mt-1 text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
