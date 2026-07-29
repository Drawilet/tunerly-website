import React from "react";
import { Sliders, Activity, Music, Radio, Cpu, Sparkles, Moon } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 sm:py-36 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
        <span className="text-[#0A84FF] text-xs font-semibold tracking-widest uppercase">
          Built for Real Musicians
        </span>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
          Everything you need.
        </h2>
        <p className="text-neutral-400 text-lg">
          Crafted with Apple human interface standards for practice, stage,
          and studio.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Guitar */}
        <div className="group p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-900/70 backdrop-blur-xl">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 text-[#0A84FF] group-hover:scale-110 transition-transform">
            <Sliders className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Guitar Tuning
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Standard E, Drop D, DADGAD, Open G, Half-step down, and 7/8-string
            support with harmonic resonance filtering.
          </p>
        </div>

        {/* Card 2: Bass */}
        <div className="group p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-900/70 backdrop-blur-xl">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 text-[#0A84FF] group-hover:scale-110 transition-transform">
            <Activity className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Bass Sub-Octaves
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Deep low-frequency analysis optimized for 4, 5, and 6-string bass
            down to low C0 without pitch jitter.
          </p>
        </div>

        {/* Card 3: Ukulele & Strings */}
        <div className="group p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-900/70 backdrop-blur-xl">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 text-[#0A84FF] group-hover:scale-110 transition-transform">
            <Music className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Ukulele & Strings
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Preset profiles for Soprano, Tenor, Concert Ukulele, Violin,
            Viola, and Cello with standard orchestral A440 calibration.
          </p>
        </div>

        {/* Card 4: Chromatic Engine */}
        <div className="group p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-900/70 backdrop-blur-xl">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 text-[#0A84FF] group-hover:scale-110 transition-transform">
            <Radio className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Chromatic Engine
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Automatic note identification across 8 full octaves. Ideal for
            brass, woodwinds, synthesizers, and vocal warmups.
          </p>
        </div>

        {/* Card 5: Fast Pitch Detection */}
        <div className="group p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-900/70 backdrop-blur-xl">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 text-[#0A84FF] group-hover:scale-110 transition-transform">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Sub-Cent Accuracy
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Hybrid YIN-FFT algorithm written in C++ WebAssembly offers
            sub-10ms response time and precision within 0.1 cents.
          </p>
        </div>

        {/* Card 6: Pure Minimal Interface */}
        <div className="group p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-900/70 backdrop-blur-xl">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 text-[#0A84FF] group-hover:scale-110 transition-transform">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Minimal Interface
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Zero visual clutter. Ultra-large typography designed to be
            readable from 10 feet away while sitting on your pedalboard or
            music stand.
          </p>
        </div>

        {/* Card 7: OLED Battery Saver */}
        <div className="group p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-900/70 backdrop-blur-xl">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 text-[#0A84FF] group-hover:scale-110 transition-transform">
            <Moon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            OLED Black Mode
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            True pure black theme turns off individual screen pixels, reducing
            battery consumption during long rehearsals and gigs.
          </p>
        </div>

        {/* Card 8: Custom Calibration */}
        <div className="group p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all hover:bg-neutral-900/70 backdrop-blur-xl">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 text-[#0A84FF] group-hover:scale-110 transition-transform">
            <Sliders className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            A4 Calibration
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Adjust concert pitch reference freely from 432Hz (Verdi pitch) to
            446Hz for baroque or chamber ensemble performances.
          </p>
        </div>
      </div>
    </section>
  );
}
