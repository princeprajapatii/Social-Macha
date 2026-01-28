"use client";

import React, { useState } from "react";

type Form = {
    name: string;
    phone: string;
    email: string;
    service: string;
    description: string;
};

export default function ContactPage() {
    const [form, setForm] = useState<Form>({
        name: "",
        phone: "",
        email: "",
        service: "",
        description: "",
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const name = e.target.name as keyof Form;
        const value = e.target.value;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Submission failed");

            setSuccess(true);
            setForm({
                name: "",
                phone: "",
                email: "",
                service: "",
                description: "",
            });
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* PAGE */}
            <section className="min-h-screen py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT CONTENT */}
                    <div>

                        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Let’s build something <br />
                            <span className="text-purple-600">
                                people care about.
                            </span>
                        </h1>

                        {/* CTA BUTTONS */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#contact-form"
                                className="rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition"
                            >
                                Book a Call
                            </a>

                            <a
                                href="https://wa.me/919999999999"
                                target="_blank"
                                className="rounded-full border border-purple-600 px-8 py-3 text-sm font-semibold text-purple-600 hover:bg-purple-50 transition"
                            >
                                WhatsApp Us
                            </a>
                        </div>

                        {/* CONTACT DETAILS */}
                        <div className="mt-12 space-y-4 text-gray-700">
                            <p>
                                <span className="font-semibold">Email:</span>{" "}
                                <a
                                    href="mailto:Connect@socialmacha.com"
                                    className="text-purple-600 hover:underline"
                                >
                                    Connect@socialmacha.com
                                </a>
                            </p>

                            <p>
                                <span className="font-semibold">Location:</span>{" "}
                                Gurugram, India
                            </p>
                        </div>
                    </div>

                     {/* RIGHT FORM */}
                    <div className="max-w-xl mx-auto px-6">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            Let’s build something{" "}
                            <span className="text-purple-600">people care about.</span>
                        </h1>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 space-y-6 bg-gray-50 p-8 rounded-2xl"
                        >
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-lg border"
                            />

                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Contact Number"
                                required
                                className="w-full px-4 py-3 rounded-lg border"
                            />

                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="w-full px-4 py-3 rounded-lg border"
                            />

                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border"
                            >
                                <option value="">Select Service</option>
                                <option>Social Media Management</option>
                                <option>Influencer Marketing</option>
                                <option>Personal Branding</option>
                                <option>Campaign Strategy & Execution</option>
                                <option>Content & Production</option>
                                <option>PR Services</option>
                                <option>Other</option>
                            </select>

                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                placeholder="Description (Optional)"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border"
                            />

                            {/* SUBMIT BUTTON */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-full bg-purple-600 py-3 text-white font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition disabled:opacity-60"
                            >
                                {loading && (
                                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                )}
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* SUCCESS POPUP */}
            {success && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-xl animate-fadeIn">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Thank you!
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Your request has been submitted successfully.
                            We’ll get back to you shortly.
                        </p>

                        <button
                            onClick={() => setSuccess(false)}
                            className="mt-6 rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
