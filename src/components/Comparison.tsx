import React from "react";
import { Check, X } from "lucide-react";
import { COMPARISON_DATA } from "../data/tunerlyData";

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="py-24 sm:py-36 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-[#0A84FF] text-xs font-semibold tracking-widest uppercase">
          Honest Comparison
        </span>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
          Why musicians switch to Tunerly.
        </h2>
        <p className="text-neutral-400 text-lg">
          See how Tunerly compares to typical subscription-based tuner
          applications.
        </p>
      </div>

      {/* Comparison Table Component */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-150">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-6 text-sm font-semibold text-neutral-400">
                Feature
              </th>
              <th className="py-4 px-6 text-lg font-semibold text-white bg-[#0A84FF]/10 border-x border-t border-white/10 rounded-t-2xl w-1/3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0A84FF]" />
                  <span>Tunerly</span>
                </div>
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-neutral-500 w-1/3">
                Typical Tuner Apps
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {COMPARISON_DATA.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-neutral-900/30 transition-colors"
              >
                <td className="py-4 px-6 text-neutral-300 font-medium">
                  <div>{row.feature}</div>
                  <div className="text-xs text-neutral-500 font-normal">
                    {row.note}
                  </div>
                </td>
                <td className="py-4 px-6 bg-[#0A84FF]/5 border-x border-white/10 text-white font-semibold">
                  {row.tunerly ? (
                    <span className="inline-flex items-center gap-1.5 text-[#30D158]">
                      <Check className="w-5 h-5" />
                      <span>Included</span>
                    </span>
                  ) : (
                    <X className="w-5 h-5 text-neutral-600" />
                  )}
                </td>
                <td className="py-4 px-6 text-neutral-500">
                  {row.competitors ? (
                    <span className="inline-flex items-center gap-1.5 text-neutral-300">
                      <Check className="w-4 h-4 text-neutral-400" />
                      <span>Limited</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-rose-400">
                      <X className="w-4 h-4" />
                      <span>Paywalled / Ads</span>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
