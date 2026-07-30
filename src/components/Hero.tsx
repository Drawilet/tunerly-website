import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  previewMobileSrc?: string;
  previewDesktopSrc?: string;
}

export default function Hero({ previewMobileSrc, previewDesktopSrc }: HeroProps) {
  const mobileSrc = previewMobileSrc || "/assets/preview.webp";
  const desktopSrc = previewDesktopSrc || "/assets/preview.webp";
  const srcSet = `${mobileSrc} 384w, ${desktopSrc} 844w`;

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
        Tunerly is currently being prepared for release on iPhone and Android. In the meantime, you can try the web experience today.
      </motion.p>

      {/* Hero CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
      >
        {/* Primary CTA (Disabled/Coming Soon) */}
        <div className="relative w-full sm:w-auto">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A84FF]/10 text-[#389FFF] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-[#0A84FF]/20 backdrop-blur-sm z-10 whitespace-nowrap">
            Available Soon
          </span>
          <button
            disabled
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 text-neutral-400 font-medium text-base px-8 py-3.5 rounded-full cursor-not-allowed transition-all opacity-70"
          >
            <span>Coming Soon</span>
          </button>
        </div>

        {/* Secondary CTA (Live Demo) */}
        <a
          href="https://web.tunerly.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 text-white font-medium text-base px-7 py-3.5 rounded-full backdrop-blur-md transition-all"
        >
          <span>Live Demo</span>
          <ArrowRight className="w-4 h-4 text-neutral-400" />
        </a>
      </motion.div>

      {/* Centerpiece Mockup Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 sm:mt-24 w-full max-w-xs sm:max-w-sm mx-auto px-4"
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[844/1702] w-full"
        >
          <img
            src={desktopSrc}
            srcSet={srcSet}
            sizes="(max-width: 640px) 288px, 352px"
            alt="Tunerly App Preview"
            width={844}
            height={1702}
            className="w-full h-auto object-cover aspect-[844/1702]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
