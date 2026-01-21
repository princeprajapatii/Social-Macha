export default function CaseStudySection({ caseStudy, index }) {
  const reverse = index % 2 !== 0;

  return (
    <section className="py-24 border-b border-gray-100">
      <div
        className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* LEFT / BRAND */}
        <div className={reverse ? "lg:order-2" : ""}>
          <span className="text-sm font-semibold text-purple-600 uppercase">
            Case Study
          </span>

          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
            {caseStudy.brand}
          </h2>
        </div>

        {/* RIGHT / DETAILS */}
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="space-y-8">

            {/* OBJECTIVE */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Objective
              </h4>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {caseStudy.objective}
              </p>
            </div>

            {/* EXECUTION */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Execution
              </h4>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {caseStudy.execution}
              </p>
            </div>

            {/* RESULT */}
            <div className="rounded-xl bg-purple-50 p-6">
              <h4 className="text-lg font-semibold text-purple-700">
                Result
              </h4>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {caseStudy.result}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
