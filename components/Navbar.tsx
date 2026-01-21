"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#f6f4ff] border-b border-purple-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center mr-auto">
          <div className="relative w-[90px] h-[70px] sm:w-[110px] sm:h-[85px] md:w-[130px] md:h-[100px]">
            <Image
              src="/logo.png"
              alt="Social Macha Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800 px-10">
          {["Home", "About", "Services","Work", "Contact"].map((item) => (
            <li key={item} className="hover:text-purple-600 transition">
              <Link href={`/${item === "Home" ? "" : item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA (Desktop) */}
        <Link
          href="/contact"
          className="hidden md:inline-block rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-3 text-sm font-semibold text-white hover:shadow-lg transition"
        >
          Get Started
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-purple-700 text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#f6f4ff] px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-purple-600"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-4 inline-block w-full text-center rounded-full bg-purple-600 py-3 text-white font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
