import Image from "next/image";
import Link from "next/link";


export default function GrowthSection() {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

                {/* LEFT MAIN CARD */}
                <div className="lg:col-span-2 rounded-2xl bg-purple-800 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">

                    {/* IMAGE */}
                    <div className="relative h-48 w-full md:w-56 rounded-xl overflow-hidden">
                        <Image
                            src="/why.jpg"
                            alt="Marketing Growth"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="text-white">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Most agencies chase trends.<br className="hidden sm:block" />
                            We engineer outcomes.
                        </h3>

                        <p className="mt-3 max-w-xl text-sm text-gray-200">
                            • Strategy before execution always <br />
                            • Creator first, audience obsessed approach <br />
                            • Strong network across fashion, lifestyle & youth culture <br />
                            • Fast moving, performance driven teams <br />
                            • Desi insight with global delivery standards <br />
                        </p>

                        <Link
                            href=""
                            className="inline-block mt-5 rounded-full bg-lime-400 px-6 py-2 text-sm font-semibold text-black hover:bg-lime-300 transition"
                        >
                            We don’t sell services. We build momentum.
                        </Link>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-6">

                    {/* SUCCESS CARD */}
                    <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg font-bold text-gray-900">
                                Success Our Priority
                            </h4>

                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f3d2e] text-white">
                                ✓
                            </div>
                        </div>

                        <p className="mt-2 text-sm text-gray-600">
                            We focus on delivering consistent results that help brands scale
                            and succeed in competitive markets.
                        </p>
                    </div>

                    {/* STATS CARD */}
                    <div className="rounded-2xl bg-lime-400 p-6 grid grid-cols-3 text-center">
                        <div>
                            <h3 className="text-2xl font-extrabold text-black">250+</h3>
                            <p className="mt-1 text-xs font-medium text-black">
                                Campaigns Delivered
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold text-black">5M+</h3>
                            <p className="mt-1 text-xs font-medium text-black">
                                Monthly Reach
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-extrabold text-black">98%</h3>
                            <p className="mt-1 text-xs font-medium text-black">
                                Client Retention
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
