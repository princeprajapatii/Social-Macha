import Image from "next/image";
import { brands } from "@/data/brands";

export default function BrandStrip() {
  return (
    <section className="bg-gray-50 py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden">
          <div className="flex gap-20 animate-marquee w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="
                  relative
                  h-16 w-40
                  opacity-80 grayscale
                  transition
                  hover:opacity-100 hover:grayscale-0
                "
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
