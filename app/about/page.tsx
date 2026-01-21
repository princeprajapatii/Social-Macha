import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            {/* BRAND STORY */}
            <section className="relative bg-white py-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <span className="text-sm font-semibold tracking-wide text-purple-600 uppercase">
                            About Social Macha
                        </span>

                        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                            Built to challenge how brands
                            <br />
                            <span className="text-purple-600">
                                show up online
                            </span>
                        </h1>

                        <p className="mt-8 text-lg leading-relaxed text-gray-600 max-w-xl">
                            Social Macha was built to challenge how brands show up online.
                            We’re a creative & influencer marketing agency that blends strategy,
                            culture, and execution to help brands stay relevant — and profitable —
                            in a fast-moving internet world.
                        </p>

                        <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
                            No filler decks. No vanity metrics. No buzzwords.
                            <br />
                            Just sharp thinking, fast execution, and work that delivers.
                        </p>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="/about/HeroSection.png"
                            alt="Social Macha Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* CREDIBILITY */}
            <section className="bg-gray-50 py-14">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

                        {/* POINT 1 */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                Strategy first.
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Every move starts with clarity. We don’t chase trends — we align
                                strategy with business outcomes.
                            </p>
                        </div>

                        {/* POINT 2 */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                Culture-aware execution.
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We understand internet culture, creators, and communities —
                                and translate that into meaningful brand presence.
                            </p>
                        </div>

                        {/* POINT 3 */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                Results over noise.
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                No vanity metrics. No inflated numbers.
                                We focus on impact, consistency, and long-term value.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
