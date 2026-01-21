type CaseStudyProps = {
  brand: string;
  objective: string;
  challenge: string;
  strategy: string[];
  results: string[];
  impact: string;
};

export default function CaseStudyCard({
  brand,
  objective,
  challenge,
  strategy,
  results,
  impact,
}: CaseStudyProps) {
  return (
    <div className="group rounded-3xl bg-white p-10 shadow-sm hover:shadow-xl transition duration-300">
      
      {/* Brand */}
      <h3 className="text-3xl font-extrabold text-purple-700">
        {brand}
      </h3>

      {/* Divider */}
      <div className="my-6 h-px bg-gradient-to-r from-purple-200 to-transparent" />

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h4 className="font-semibold text-gray-900">Objective</h4>
          <p className="mt-2 text-gray-600">{objective}</p>

          <h4 className="mt-5 font-semibold text-gray-900">Challenge</h4>
          <p className="mt-2 text-gray-600">{challenge}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Strategy & Execution</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            {strategy.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-purple-600">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h4 className="mt-5 font-semibold text-gray-900">Results</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            {results.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-green-600">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Impact */}
      <div className="mt-8 rounded-2xl bg-purple-50 p-5">
        <p className="text-sm font-medium text-purple-800">
          {impact}
        </p>
      </div>
    </div>
  );
}
