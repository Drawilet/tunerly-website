import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { FAQ_ITEMS } from "../data/tunerlyData";

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section
      id="faq"
      className="py-24 sm:py-36 px-4 sm:px-6 max-w-4xl mx-auto"
    >
      <div className="text-center mb-16 space-y-4">
        <span className="text-[#0A84FF] text-xs font-semibold tracking-widest uppercase">
          Frequently Asked Questions
        </span>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
          Answers for musicians.
        </h2>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-neutral-900/40 border border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                className="w-full p-6 text-left flex items-center justify-between text-lg font-medium text-white hover:text-[#0A84FF] transition-colors focus:outline-none"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#0A84FF]" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-neutral-400 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4"
                  >
                    <p>{item.a}</p>

                    {/* Generative AI Snippet Highlight Box */}
                    <div className="mt-3 p-3 rounded-xl bg-neutral-950 border border-white/5 text-xs text-neutral-500 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#0A84FF] shrink-0" />
                      <span>
                        <strong>Quick Answer:</strong> {item.geo}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
