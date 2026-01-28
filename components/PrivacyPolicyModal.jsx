"use client";

import { motion, AnimatePresence } from "framer-motion";
import { privacyPolicyData } from "@/data/privacyPolicy";

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-[95%] max-w-4xl h-[85vh] rounded-xl shadow-lg"
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 50, scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-semibold">
                {privacyPolicyData.title}
              </h2>
              <button
                onClick={onClose}
                className="text-2xl font-bold hover:text-red-500"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-4 overflow-y-auto h-[calc(85vh-72px)] text-sm text-gray-700 space-y-6">
              <p className="font-medium">
                Last updated: {privacyPolicyData.lastUpdated}
              </p>

              {privacyPolicyData.intro.map((line, i) => (
                <p key={i}>{line}</p>
              ))}

              {privacyPolicyData.sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-gray-900">
                    {section.heading}
                  </h3>

                  {section.content && (
                    <ul className="list-disc ml-5 space-y-1">
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.subSections &&
                    section.subSections.map((sub, i) => (
                      <div key={i} className="ml-3 space-y-2">
                        <h4 className="font-medium">{sub.subHeading}</h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {sub.content.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
