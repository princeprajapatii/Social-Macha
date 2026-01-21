export default function FeatureCard({ index, title, tagline, description }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
        {index}
      </div>

      <h3 className="text-lg font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-1 text-sm font-medium text-gray-700">
        {tagline}
      </p>

      <p className="mt-2 text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}
