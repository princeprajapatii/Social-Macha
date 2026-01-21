import FeatureCard from "./FeatureCard";
import { features } from "@/data/features";

export default function KeyFeatures() {
  return (
    <section className="bg-purple-800 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold text-lime-400">
            Features
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">
            What Makes Our Digital Marketing Stand Out?
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              index={`0${index + 1}`}
              title={feature.title}
              tagline={feature.tagline}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}