import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo & Brand Identity */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0A84FF] rounded-lg p-1"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-neutral-900 border border-white/20 flex items-center justify-center relative overflow-hidden group-hover:border-[#0A84FF]/50 transition-colors">
            <div className="absolute inset-0 bg-linear-to-tr from-[#0A84FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <img src="/Tunerly.svg" alt="Tunerly Logo" width={36} height={36} />
          </div>
          <span className="font-semibold text-lg sm:text-xl tracking-tight text-white group-hover:text-white/90">
            Tunerly
          </span>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#philosophy" className="hover:text-white transition-colors">
            Philosophy
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#performance" className="hover:text-white transition-colors">
            Performance
          </a>
          <a href="#comparison" className="hover:text-white transition-colors">
            Comparison
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            disabled
            className="inline-flex items-center justify-center bg-neutral-900 border border-white/10 text-neutral-400 text-xs sm:text-sm font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-full cursor-not-allowed opacity-75 focus:outline-none"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </header>
  );
}
