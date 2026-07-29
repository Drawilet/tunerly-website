import React from "react";
import { ArrowRight } from "lucide-react";

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
            Start tuning today.
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-400 font-light">
            Experience Tunerly on the web while we prepare the mobile apps for release.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://web.tunerly.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A84FF] hover:bg-[#0071E3] text-white font-medium text-base px-8 py-4 rounded-full transition-all shadow-[0_0_35px_rgba(10,132,255,0.4)]"
            >
              <span>Try the Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 flex flex-col items-center justify-center gap-4">
            <p className="text-sm font-medium text-neutral-400">
              Available soon for iPhone and Android.
            </p>
            
            {/* Muted App Store & Google Play indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 opacity-40 grayscale select-none pointer-events-none">
              {/* App Store Badge outline */}
              <div className="flex items-center gap-2 border border-white/10 rounded-xl bg-black px-4 py-2 text-left">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z" />
                </svg>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-neutral-400 leading-none">Coming soon on the</div>
                  <div className="text-xs font-semibold text-white leading-tight">App Store</div>
                </div>
              </div>

              {/* Google Play Badge outline */}
              <div className="flex items-center gap-2 border border-white/10 rounded-xl bg-black px-4 py-2 text-left">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5,3.14L15.22,13.36L5,23.58V3.14M20.3,12.06L17.3,13.56L16.28,12.54L17.3,11.52L20.3,13.02C20.8,13.27 20.8,13.8 20.3,14.06M5.56,2.5L16.27,11.51L15.22,12.56L5.56,2.5M5.56,24.2L15.22,14.16L16.27,15.21L5.56,24.2Z" />
                </svg>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-neutral-400 leading-none">Get it soon on</div>
                  <div className="text-xs font-semibold text-white leading-tight">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
