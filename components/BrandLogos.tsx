import Image from "next/image";

const brands = [
  { name: "magicpin" },
  { name: "DKMS Foundation" },
  { name: "Zomato" },
  { name: "Confidential Brand" },
];


export default function BrandLogos() {
    return (
        <section className="mt-16">
            <p className="text-sm font-medium text-gray-500">
                Trusted by brands across industries
            </p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-10">
                {brands.map((brand, i) => (
                    <div
                        key={i}
                        className="
        flex items-center justify-center
        rounded-xl border border-dashed border-purple-200
        px-6 py-4
        text-sm font-semibold text-purple-700
        transition hover:bg-purple-50
      "
                    >
                        {brand.name}
                    </div>
                ))}
            </div>

        </section>
    );
}
