import Image from "next/image";
import { brands } from "@/data/brands";

export default function BrandStrip() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* LOGOS */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="relative h-10 w-28 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
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
    </section>
  );
}
