import React from "react";
import { motion } from "framer-motion";

export default function Performance() {
  return (
    <section
      id="performance"
      className="py-24 sm:py-36 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[#0A84FF] text-xs font-semibold tracking-widest uppercase">
            Audio Engine
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.12]">
            Fast. Accurate. Reliable.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Engineered with a lightweight Digital Signal Processing (DSP)
            pipeline that isolates room noise and harmonic overtones,
            delivering immediate note locks even in noisy rehearsal rooms.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0A84FF]/20 text-[#0A84FF] flex items-center justify-center font-bold text-xs">
                1
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Sub-10ms Latency
                </h4>
                <p className="text-xs text-neutral-400">
                  Zero lag between pluck and visual pitch feedback.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0A84FF]/20 text-[#0A84FF] flex items-center justify-center font-bold text-xs">
                2
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Overtone Suppression
                </h4>
                <p className="text-xs text-neutral-400">
                  Ignores natural octave resonance on acoustic instruments.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#0A84FF]/20 text-[#0A84FF] flex items-center justify-center font-bold text-xs">
                3
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Stage-Ready Visualizer
                </h4>
                <p className="text-xs text-neutral-400">
                  High contrast needle visible under direct sunlight.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Simulated DSP Spectrum Analyzer Box */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#30D158] animate-ping" />
              <span className="text-xs font-mono text-neutral-300">
                DSP AUDIO FFT BUFFER
              </span>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              SAMPLE RATE: 48.0 kHz
            </span>
          </div>

          {/* Live Waveform Audio Bars */}
          <div className="my-10 h-32 flex items-end justify-between gap-1 sm:gap-1.5 px-2">
            {Array.from({ length: 32 }).map((_, i) => {
              const heightPercent = Math.min(
                100,
                Math.max(
                  15,
                  Math.sin(i * 0.4) * 40 + 50 + Math.random() * 15,
                ),
              );
              return (
                <motion.div
                  key={i}
                  animate={{ height: `${heightPercent}%` }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.02,
                  }}
                  className={`w-full rounded-t-sm ${
                    i >= 12 && i <= 20
                      ? "bg-[#0A84FF] shadow-[0_0_10px_rgba(10,132,255,0.8)]"
                      : "bg-neutral-800"
                  }`}
                />
              );
            })}
          </div>

          {/* Readout Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center">
            <div>
              <span className="text-2xl font-bold text-white font-mono">
                440.0
              </span>
              <span className="text-xs text-neutral-500 block">
                FREQUENCY (Hz)
              </span>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#30D158] font-mono">
                &lt; 8ms
              </span>
              <span className="text-xs text-neutral-500 block">
                DETECTION TIME
              </span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white font-mono">
                ±0.1
              </span>
              <span className="text-xs text-neutral-500 block">
                CENTS VARIANCE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
