import React from "react";
import { Download as DownloadIcon } from "lucide-react";

export default function Download() {
  return (
    <section
      id="download"
      className="py-24 sm:py-36 px-4 sm:px-6 max-w-6xl mx-auto text-center relative"
    >
      <div className="p-10 sm:p-20 rounded-[40px] bg-linear-to-b from-neutral-900/80 to-black border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0A84FF]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Stop fighting your tuner.
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-400 font-light">
            Start playing.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A84FF] hover:bg-[#0071E3] text-white font-medium text-base px-8 py-4 rounded-full transition-all shadow-[0_0_35px_rgba(10,132,255,0.4)]"
            >
              <DownloadIcon className="w-5 h-5" />
              <span>Download for iOS & Android</span>
            </a>
          </div>

          <p className="text-xs text-neutral-500 font-mono pt-4">
            Requires iOS 15.0+ or Android 8.0+. No sign-up or credit card
            required.
          </p>
        </div>
      </div>
    </section>
  );
}
