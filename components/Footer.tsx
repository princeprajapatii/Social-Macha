"use client";

import Link from "next/link";
import { useState } from "react";
import { footerData } from "@/data/footer";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [openPolicy, setOpenPolicy] = useState(false);

  return (
    <>
      <footer className="bg-purple-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-extrabold text-purple-400">
              {footerData.brand.name}
            </h3>

            <p className="mt-4 text-sm max-w-xs">
              {footerData.brand.description}
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/919696185175"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-500 transition"
              >
                <FaWhatsapp size={16} />
              </a>

              <a
                href="https://www.instagram.com/social_macha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-500 transition"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://www.linkedin.com/company/social-macha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-500 transition"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {footerData.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-purple-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  {link.label === "Privacy Policy" ? (
                    <button
                      onClick={() => setOpenPolicy(true)}
                      className="hover:text-purple-400 transition"
                    >
                      Privacy Policy
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-purple-400 transition"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li>{footerData.contact.phone}</li>
              <li>{footerData.contact.email}</li>
              <li>{footerData.contact.address}</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {footerData.brand.name}. All rights reserved.
        </div>
      </footer>

      {/* PRIVACY POLICY MODAL */}
      <PrivacyPolicyModal
        isOpen={openPolicy}
        onClose={() => setOpenPolicy(false)}
      />
    </>
  );
}
