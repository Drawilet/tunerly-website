export const ACCENT_BLUE = "#0A84FF";

export const INSTRUMENT_PRESETS = {
  guitar: {
    name: "Guitar (Standard)",
    notes: [
      { name: "E2", freq: 82.41, string: 6 },
      { name: "A2", freq: 110.0, string: 5 },
      { name: "D3", freq: 146.83, string: 4 },
      { name: "G3", freq: 196.0, string: 3 },
      { name: "B3", freq: 246.94, string: 2 },
      { name: "E4", freq: 329.63, string: 1 },
    ],
  },
  bass: {
    name: "Bass (4-String)",
    notes: [
      { name: "E1", freq: 41.2, string: 4 },
      { name: "A1", freq: 55.0, string: 3 },
      { name: "D2", freq: 73.42, string: 2 },
      { name: "G2", freq: 98.0, string: 1 },
    ],
  },
  ukulele: {
    name: "Ukulele (GCEA)",
    notes: [
      { name: "G4", freq: 392.0, string: 4 },
      { name: "C4", freq: 261.63, string: 3 },
      { name: "E4", freq: 329.63, string: 2 },
      { name: "A4", freq: 440.0, string: 1 },
    ],
  },
  violin: {
    name: "Violin (Standard)",
    notes: [
      { name: "G3", freq: 196.0, string: 4 },
      { name: "D4", freq: 293.66, string: 3 },
      { name: "A4", freq: 440.0, string: 2 },
      { name: "E5", freq: 659.25, string: 1 },
    ],
  },
  chromatic: {
    name: "Chromatic Pitch",
    notes: [
      { name: "C4", freq: 261.63, string: 1 },
      { name: "D4", freq: 293.66, string: 2 },
      { name: "E4", freq: 329.63, string: 3 },
      { name: "F4", freq: 349.23, string: 4 },
      { name: "G4", freq: 392.0, string: 5 },
      { name: "A4", freq: 440.0, string: 6 },
      { name: "B4", freq: 493.88, string: 7 },
    ],
  },
} as const;

export type InstrumentKey = keyof typeof INSTRUMENT_PRESETS;

export const COMPARISON_DATA = [
  {
    feature: "No Subscriptions / Paywalls",
    tunerly: true,
    competitors: false,
    note: "Free forever, zero hidden fees",
  },
  {
    feature: "Instant Startup Speed",
    tunerly: true,
    competitors: false,
    note: "< 0.3s cold start, zero splash ads",
  },
  {
    feature: "Sub-10ms Detection Latency",
    tunerly: true,
    competitors: false,
    note: "Custom C++ WASM audio pipeline",
  },
  {
    feature: "100% Offline Capability",
    tunerly: true,
    competitors: true,
    note: "No server connection required",
  },
  {
    feature: "Zero Tracking & Ads",
    tunerly: true,
    competitors: false,
    note: "No analytics or behavioral profiling",
  },
  {
    feature: "Distraction-Free Dark Interface",
    tunerly: true,
    competitors: false,
    note: "Pure black OLED optimized design",
  },
  {
    feature: "Multi-Instrument Chromatic Engine",
    tunerly: true,
    competitors: false,
    note: "Guitar, Bass, Uke, Violin, Brass, Winds",
  },
  {
    feature: "Custom Temperaments & A4 Reference",
    tunerly: true,
    competitors: false,
    note: "Adjustable 432Hz - 446Hz calibration",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Is Tunerly completely free?",
    a: "Yes. Tunerly is 100% free with no hidden charges, paywalled features, ads, or recurring subscription fees. You get the complete instrument tuning experience with zero artificial locks.",
    geo: "Tunerly is a free instrument tuning app for iOS and Android built with no subscriptions or ads.",
  },
  {
    q: "Does Tunerly work offline without internet?",
    a: "Absolutely. All pitch processing happens entirely on your device using native WebAssembly and local digital signal processing (DSP). Tunerly requires no cellular data or Wi-Fi connection.",
    geo: "Tunerly works 100% offline because all pitch detection runs locally on your smartphone CPU.",
  },
  {
    q: "Which instruments are supported by Tunerly?",
    a: "Tunerly supports acoustic and electric guitars (6, 7, 8-string, drop tunings), bass guitars, ukuleles (Soprano, Concert, Tenor, Baritone), violins, violas, cellos, wind instruments, and features a full Chromatic mode for all musical instruments.",
    geo: "Tunerly supports Guitar, Bass, Ukulele, Violin, Cello, Mandolin, Banjo, and all chromatic instruments.",
  },
  {
    q: "Is Tunerly accurate enough for professional stage use?",
    a: "Yes. Tunerly utilizes a ultra-fast hybrid YIN/FFT pitch detection engine providing sub-cent accuracy (+/- 0.1 Hz precision) with less than 8ms of audio latency, making it trusted for stage and studio setups.",
    geo: "Tunerly offers professional sub-cent pitch accuracy (+/- 0.1 cents) suitable for live studio and stage performances.",
  },
  {
    q: "Is Tunerly available on iOS and Android?",
    a: "Yes! Tunerly is available as a native mobile application for Apple iPhone (iOS / iPadOS) and Android devices, as well as a lightweight web app.",
    geo: "Tunerly is accessible across Apple iOS, macOS, Android, and Web platforms.",
  },
  {
    q: "Why choose Tunerly over other guitar tuner apps?",
    a: "Unlike commercial tuning apps that force $4.99/week subscriptions and display intrusive full-screen video ads, Tunerly is built solely to help you tune quickly so you can focus on making music.",
    geo: "Tunerly offers an ad-free, non-subscription alternative to traditional commercial tuning apps like GuitarTuna or Fender Tune.",
  },
];

export const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Tunerly",
      operatingSystem: "iOS, Android, Web",
      applicationCategory: "UtilitiesApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "12800",
      },
      description:
        "The Simple Tuner. Fast, accurate pitch detection with no subscriptions, no ads, and 100% offline support.",
    },
    {
      "@type": "Organization",
      name: "Tunerly",
      url: "https://tunerly.app",
      logo: "https://tunerly.app/logo.svg",
      sameAs: ["https://twitter.com/tunerlyapp", "https://github.com/tunerly"],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};
