import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Check, Activity } from "lucide-react";
import { INSTRUMENT_PRESETS, type InstrumentKey } from "../data/tunerlyData";

export default function TunerDemo() {
  const [activeTab, setActiveTab] = useState<InstrumentKey>("guitar");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(0);
  const [centsOffset, setCentsOffset] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isMicSimulating, setIsMicSimulating] = useState(true);
  const [a4Frequency] = useState(440);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  const currentInstrument =
    INSTRUMENT_PRESETS[activeTab] || INSTRUMENT_PRESETS.guitar;
  const currentNote =
    currentInstrument.notes[selectedNoteIndex] || currentInstrument.notes[0];

  useEffect(() => {
    let interval: any;
    if (isMicSimulating) {
      interval = setInterval(() => {
        const randomDrift = (Math.random() - 0.5) * 6;
        setCentsOffset((prev) => {
          const next = prev * 0.7 + randomDrift;
          return Math.abs(next) < 0.5 ? 0 : next;
        });
      }, 250);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMicSimulating]);

  const togglePlayNote = () => {
    if (isAudioPlaying) {
      stopAudioTone();
    } else {
      startAudioTone(currentNote.freq);
    }
  };

  const startAudioTone = (freq: number) => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      if (oscRef.current) {
        oscRef.current.stop();
      }

      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);

      gain.gain.setValueAtTime(0.01, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.15,
        audioCtxRef.current.currentTime + 0.05,
      );

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start();
      oscRef.current = osc;
      setIsAudioPlaying(true);
    } catch (err) {
      console.log("Audio play allowed on user interaction", err);
    }
  };

  const stopAudioTone = () => {
    if (oscRef.current) {
      try {
        oscRef.current.stop();
        oscRef.current.disconnect();
      } catch (e) {}
      oscRef.current = null;
    }
    setIsAudioPlaying(false);
  };

  const handleNoteSelect = (index: number) => {
    setSelectedNoteIndex(index);
    setCentsOffset((Math.random() - 0.5) * 24);
    if (isAudioPlaying) {
      const nextNote = currentInstrument.notes[index];
      startAudioTone(nextNote.freq);
    }
  };

  const handleInstrumentChange = (key: InstrumentKey) => {
    setActiveTab(key);
    setSelectedNoteIndex(0);
    setCentsOffset(0);
    if (isAudioPlaying) {
      stopAudioTone();
    }
  };

  return (
    <section id="demo" className="pb-20 sm:pb-32 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
      {/* Interactive Phone Mockup & Live Tuner Engine Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-sm sm:max-w-md mx-auto relative group"
      >
        <div className="absolute -inset-1 bg-linear-to-b from-[#0A84FF]/20 to-transparent rounded-[48px] blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />

        {/* Smartphone Hardware Frame */}
        <div className="relative bg-neutral-950 border-[6px] sm:border-8 border-neutral-800 rounded-[44px] shadow-2xl p-4 sm:p-6 overflow-hidden">
          {/* Dynamic Island Notch */}
          <div className="w-24 sm:w-28 h-4 sm:h-5 bg-black rounded-full mx-auto mb-4 flex items-center justify-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-neutral-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
          </div>

          {/* Tuner App Screen Content */}
          <div className="bg-black rounded-4xl p-4 sm:p-6 border border-white/10 flex flex-col items-center justify-between min-h-120 sm:min-h-130 relative">
            {/* Top Bar inside Fake Phone */}
            <div className="w-full flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-white/5">
              <span className="font-mono text-[11px] tracking-wider uppercase text-neutral-500">
                {currentInstrument.name}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-[#0A84FF]">
                <Activity className="w-3 h-3" />
                <span>A4 = {a4Frequency}Hz</span>
              </span>
            </div>

            {/* Central Tuning Gauge & Cents Offset Arc Meter */}
            <div className="my-auto flex flex-col items-center w-full relative">
              <div className="w-full max-w-60 h-28 relative flex items-center justify-center mb-2">
                <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] text-neutral-600 font-mono">
                  <span>-50</span>
                  <span>-25</span>
                  <span className="text-[#0A84FF]">0</span>
                  <span>+25</span>
                  <span>+50</span>
                </div>

                <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-[#0A84FF]/50" />
                </div>

                <div
                  className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] origin-bottom transition-transform duration-150 ease-out"
                  style={{
                    transform: `translate(-50%, -80%) rotate(${centsOffset * 1.4}deg)`,
                    backgroundColor:
                      Math.abs(centsOffset) < 3
                        ? "#30D158"
                        : Math.abs(centsOffset) < 12
                          ? "#FFD60A"
                          : "#FF453A",
                  }}
                />
              </div>

              {/* Target Note Letter Display */}
              <div className="text-center relative">
                <div
                  className={`text-6xl sm:text-7xl font-bold tracking-tight transition-colors duration-200 ${
                    Math.abs(centsOffset) < 3
                      ? "text-[#30D158]"
                      : "text-white"
                  }`}
                >
                  {currentNote.name}
                </div>

                <div className="mt-2 text-xs font-mono flex items-center justify-center gap-1.5">
                  {Math.abs(centsOffset) < 3 ? (
                    <span className="inline-flex items-center gap-1 text-[#30D158] bg-[#30D158]/10 px-2.5 py-1 rounded-full border border-[#30D158]/30">
                      <Check className="w-3.5 h-3.5" />
                      IN TUNE
                    </span>
                  ) : centsOffset < 0 ? (
                    <span className="text-amber-400 font-medium">
                      TUNE UP ↑ ({centsOffset.toFixed(1)} cents)
                    </span>
                  ) : (
                    <span className="text-amber-400 font-medium">
                      TUNE DOWN ↓ (+{centsOffset.toFixed(1)} cents)
                    </span>
                  )}
                </div>

                <p className="mt-1 text-xs text-neutral-500 font-mono">
                  Target: {currentNote.freq.toFixed(2)} Hz
                </p>
              </div>

              {/* Interactive Pitch Tone Pluck Button */}
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={togglePlayNote}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                    isAudioPlaying
                      ? "bg-rose-500/20 border-rose-500/50 text-rose-300 animate-pulse"
                      : "bg-neutral-900 border-white/10 text-neutral-300 hover:border-white/30"
                  }`}
                >
                  {isAudioPlaying ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-[#0A84FF]" />
                  )}
                  <span>
                    {isAudioPlaying ? "Stop Tone" : "Play Reference Pitch"}
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Interactive String Selector Buttons */}
            <div className="w-full pt-4 border-t border-white/10">
              <div className="text-[11px] text-neutral-500 mb-2 flex justify-between items-center">
                <span>SELECT STRING</span>
                <span className="text-neutral-400">Tap to test</span>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {currentInstrument.notes.map((note, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNoteSelect(idx)}
                    className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedNoteIndex === idx
                        ? "bg-[#0A84FF] text-white shadow-[0_0_15px_rgba(10,132,255,0.4)] scale-105"
                        : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800"
                    }`}
                  >
                    {note.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Instrument Selector Tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
        {(Object.keys(INSTRUMENT_PRESETS) as InstrumentKey[]).map((key) => (
          <button
            key={key}
            onClick={() => handleInstrumentChange(key)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === key
                ? "bg-white text-black font-semibold shadow-lg"
                : "bg-neutral-900 text-neutral-400 hover:text-white border border-white/5"
            }`}
          >
            {INSTRUMENT_PRESETS[key].name}
          </button>
        ))}
      </div>
    </section>
  );
}
