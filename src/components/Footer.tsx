import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 bg-black text-xs text-neutral-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-lg bg-neutral-900 border border-white/20 flex items-center justify-center text-white">
            <img src="/Tunerly.svg" alt="Tunerly Logo" width={24} height={24} />
          </div>
          <span className="font-semibold text-white text-sm">Tunerly</span>
          <span className="text-neutral-600">|</span>
          <span>Made with ❤️ for musicians.</span>
        </div>

        <div className="flex items-center gap-6 text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div>
          © {new Date().getFullYear()} Tunerly App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
