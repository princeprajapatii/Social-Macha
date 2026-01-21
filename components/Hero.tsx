import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#f6f4ff]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700">
            Digital Marketing
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Grow Your Business with <br />
            <span className="text-purple-700">
              Data-Driven Digital Marketing
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-600">
            We help brands scale faster using influencer marketing,
            content, and performance-driven digital strategies.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition"
            >
              Read More
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-purple-300 px-6 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">

          {/* IMAGE CONTAINER (HEIGHT REDUCED & RESPONSIVE) */}
          <div className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/Hero-image.jpg"
              alt="Marketing"
              fill
              priority
              className="object-cover"
            />

            {/* IMAGE CTA */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <button className="rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black">
                Join the Future of Marketing
              </button>
            </div>
          </div>

          {/* FLOATING CARD (RESPONSIVE) */}
          <div
            className="
              static mt-6
              lg:absolute lg:-left-10 lg:top-12
              w-full lg:w-72
              rounded-xl bg-white p-5 shadow-xl
            "
          >
            <h4 className="text-md font-bold text-gray-800">
              Creating Impactful Digital Experiences for your Business
            </h4>

            <div className="mt-3 flex items-center gap-1 text-yellow-400">
              ★ ★ ★ ★ ★
            </div>

            <div className="mt-2 text-3xl font-bold text-gray-900">
              9.6
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Our Client Active
            </p>

            <div className="mt-4 flex -space-x-3">
              {["/user1.jpg", "/user2.jpg", "/user1.jpg"].map((img, index) => (
                <div
                  key={index}
                  className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-white"
                >
                  <Image
                    src={img}
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
