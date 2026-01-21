import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* CTA CARD */}
        <div
          className="relative overflow-hidden rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage: "url('bg.png')" // replace with your image
          }}
        >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center text-white">
            
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Subscribe Our Newsletter
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-200">
              Stay updated with the latest digital marketing insights, strategies,
              and growth hacks delivered straight to your inbox.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              

              <Link
                href="/contact"
                className="rounded-full border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
