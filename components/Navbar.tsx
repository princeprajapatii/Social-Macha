"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Contact", path: "/contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
  <header className="w-full bg-[#f6f4ff] border-b border-purple-100 sticky top-0 z-50 md:py-1 overflow-visible">
      <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center mr-auto">
          <div className="relative w-[110px] h-[85px] sm:w-[130px] sm:h-[100px] md:w-[160px] md:h-[120px] logo-animate">
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
          {navItems.map((item) => (
            <li key={item.name} className="hover:text-purple-600 transition">
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

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
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-purple-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </header>
  );
}
