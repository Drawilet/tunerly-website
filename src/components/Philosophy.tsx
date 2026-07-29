import React from "react";
import { CheckCircle2, X, Check } from "lucide-react";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-24 sm:py-36 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Philosophy Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[#0A84FF] text-xs font-semibold tracking-widest uppercase">
            Core Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
            Finally, a tuner that respects musicians.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-neutral-400 leading-relaxed pt-2">
            <p>
              Most tuning apps have become bloated subscription traps. Weekly
              charges. Full-screen ads before you can tune E2. Locked tunings
              behind paywalls. Constant interruptions.
            </p>
            <p>
              Tunerly takes a fundamentally different approach. Inspired by
              the clarity of tools like Linear and Raycast, Tunerly is built
              around one singular promise:
            </p>
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl my-6 space-y-2 text-white">
              <div className="flex items-center gap-3 font-semibold text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#0A84FF]" />
                <span>Open the app.</span>
              </div>
              <div className="flex items-center gap-3 font-semibold text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#0A84FF]" />
                <span>Tune your instrument.</span>
              </div>
              <div className="flex items-center gap-3 font-semibold text-lg">
                <CheckCircle2 className="w-5 h-5 text-[#0A84FF]" />
                <span>Start playing. Nothing else.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Side Comparison Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Bloated Apps Card */}
          <div className="p-6 rounded-3xl bg-rose-950/20 border border-rose-500/20 space-y-3 relative overflow-hidden">
            <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
              Typical Tuning Apps
            </div>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>$4.99/week subscription popups</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Full-screen 30-second unskippable video ads</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Requires online connection & tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Drop tunings & bass locked behind VIP tier</span>
              </li>
            </ul>
          </div>

          {/* Tunerly Card */}
          <div className="p-6 rounded-3xl bg-neutral-900/80 border border-[#0A84FF]/40 space-y-3 relative overflow-hidden shadow-[0_0_30px_rgba(10,132,255,0.15)]">
            <div className="text-xs font-semibold text-[#0A84FF] uppercase tracking-wider flex items-center justify-between">
              <span>Tunerly Standard</span>
              <span className="text-white text-[10px] bg-[#0A84FF] px-2 py-0.5 rounded-full">
                ALWAYS FREE
              </span>
            </div>
            <ul className="space-y-2 text-sm text-neutral-200">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#0A84FF] shrink-0 mt-0.5" />
                <span>Zero subscriptions. Ever.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#0A84FF] shrink-0 mt-0.5" />
                <span>Instant startup under 300 milliseconds</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#0A84FF] shrink-0 mt-0.5" />
                <span>100% offline signal processing</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#0A84FF] shrink-0 mt-0.5" />
                <span>All instruments & alternate tunings included</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
