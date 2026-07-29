import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-44 pb-20 sm:pb-32 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
      {/* Subtle Ambient Radial Backlight Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 sm:w-150 h-87.5 sm:h-150 bg-[#0A84FF]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Minimal Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-neutral-900/80 backdrop-blur-md mb-6 text-xs sm:text-sm font-medium text-neutral-300"
      >
        <span className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" />
        <span>No subscriptions. No ads. Just tune.</span>
      </motion.div>

      {/* Large Apple Typography Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white max-w-4xl leading-[1.08]"
      >
        The Simple Tuner.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg sm:text-2xl text-neutral-400 max-w-2xl font-normal leading-relaxed"
      >
        Everything you need to tune your instrument. Nothing you don’t.
      </motion.p>

      {/* Hero CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <a
          href="#download"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A84FF] hover:bg-[#0071E3] text-white font-medium text-base px-8 py-3.5 rounded-full transition-all shadow-[0_0_30px_rgba(10,132,255,0.35)] hover:shadow-[0_0_40px_rgba(10,132,255,0.55)]"
        >
          <Download className="w-5 h-5" />
          <span>Download Free</span>
        </a>

        <a
          href="#demo"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 text-white font-medium text-base px-7 py-3.5 rounded-full backdrop-blur-md transition-all"
        >
          <span>Try Interactive Demo</span>
          <ArrowRight className="w-4 h-4 text-neutral-400" />
        </a>
      </motion.div>
    </section>
  );
}
