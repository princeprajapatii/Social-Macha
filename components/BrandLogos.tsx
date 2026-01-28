"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "HUL", logo: "/brands/HUL logo.jpeg" },
  { name: "lenskart", logo: "/brands/lenskart Logo.jpeg" },
  { name: "MagicPin", logo: "/brands/Magicpin logo.jpeg" },
  { name: "Palmonas", logo: "/brands/Palmonas logo.jpeg" },
  { name: "Shaddi", logo: "/brands/Shadi LOgo.jpeg" },
  { name: "Zepto", logo: "/brands/Zepto Logo.jpeg" },
  { name: "Zometo", logo: "/brands/zometo logo.png" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, easing: "easeOut" },
  },
};

export default function BrandLogos() {
  return (
    <section className="mt-16">
      <p className="text-sm font-medium text-gray-500 mb-6">
        Trusted by brands across industries
      </p>

      {/* Fade Mask Wrapper */}
      <div className="relative overflow-hidden">

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        {/* SLIDER */}
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                rounded-xl border border-dashed border-purple-200
                px-6 py-4
                bg-white
                min-w-[180px]
              "
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
