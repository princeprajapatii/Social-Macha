import Image from "next/image";

export default function ServicesIntro() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <span className="inline-block mb-4 rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-700">
            Our Services
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Tailored Strategies for <br />
            <span className="text-purple-600">
              Maximum Business Growth
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-600">
            We design performance-driven marketing systems that help brands grow,
            scale, and win attention across digital platforms.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/Herosection.png"
            alt="Our Services"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
