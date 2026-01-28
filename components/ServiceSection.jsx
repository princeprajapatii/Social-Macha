import Image from "next/image";

export default function ServiceSection({ service, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <section className="py-24 border-b border-gray-100">
      <div
        className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* HEADING + IMAGE */}
        <div className={isReversed ? "lg:order-2" : ""}>
          <span className="text-sm font-semibold text-purple-600">
            Service {index + 1}
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            {service.title}
          </h2>

          {/* IMAGE BELOW HEADING */}
          <div className="mt-6 relative h-[260px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-6 text-lg text-gray-700">
            <span className="font-semibold text-purple-600">
              What it is —{" "}
            </span>
            {service.whatItIs}
          </p>
        </div>

        {/* CONTENT */}
        <div className={isReversed ? "lg:order-1" : ""}>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Who it’s for
              </h4>
              <p className="text-base mt-1 text-gray-600">
                {service.whoItsFor}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                What we do
              </h4>
              <ul className="text-base mt-2 space-y-2 text-gray-600">
                {service.whatWeDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-purple-50 p-5">
              <h4 className="text-lg font-semibold text-purple-700">
                Outcome
              </h4>
              <p className="text-base mt-1 text-gray-700">
                {service.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
