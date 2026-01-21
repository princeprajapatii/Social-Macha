import Image from "next/image";
import HighlightItem from "./HighlightItem";
import { highlights } from "@/data/highlights";

export default function AboutHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm font-semibold text-purple-600">
            About Us
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Maximize Your Growth with Our <br />
            Digital Marketing
          </h2>

          <p className="mt-4 max-w-xl text-gray-600">
            We help brands grow through data-driven strategies, creative execution,
            and performance-focused digital marketing solutions.
          </p>

          {/* IMAGE */}
          <div className="mt-8 relative h-[300px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/HIghlights.jpg"
              alt="Digital Marketing Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="rounded-2xl bg-gray-50 p-8 space-y-6">
          {highlights.map((item, index) => (
            <HighlightItem
              key={item.id}
              index={`0${index + 1}`}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
