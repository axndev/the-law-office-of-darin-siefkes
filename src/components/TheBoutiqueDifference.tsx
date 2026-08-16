import React from 'react';
import { Check, X, Shield, ArrowRight, Star } from 'lucide-react';
import { PageView } from '../types';

interface TheBoutiqueDifferenceProps {
  onOpenConsultation: () => void;
  onNavigate: (page: PageView, param?: string) => void;
}

export const TheBoutiqueDifference: React.FC<TheBoutiqueDifferenceProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] text-[#1E293B] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#7A1B28]/10 border border-[#7A1B28]/20 text-xs text-[#7A1B28] font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>The Boutique Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0C2340] font-normal leading-tight">
            Why Austin Founders Choose Our Firm
          </h2>
          <p className="text-base text-slate-700 font-light max-w-2xl mx-auto">
            Compare the direct personal counsel of a senior Texas business lawyer with big-firm overhead or risky automated document websites.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl border border-stone-300 shadow-xl overflow-hidden text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-300 bg-stone-50">
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-600 w-1/3">
                  Legal Delivery Model
                </th>
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-white bg-[#0C2340] w-1/3 border-x border-[#0C2340]">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-[#D8B252] fill-[#D8B252]" />
                    <span>The Law Office of Darin Siefkes</span>
                  </div>
                </th>
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/6">
                  BigLaw Mega Firms
                </th>
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/6">
                  Online Template Websites
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
              <tr>
                <td className="p-5 font-semibold text-slate-900">
                  Direct Attorney Access
                  <span className="block text-xs font-normal text-slate-500 mt-0.5">
                    Who actually analyzes and drafts your documents?
                  </span>
                </td>
                <td className="p-5 bg-[#0C2340]/5 font-medium text-[#0C2340] border-x border-stone-200">
                  <div className="flex items-center space-x-2 text-emerald-800 font-semibold">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>100% Direct with Attorney Darin Siefkes</span>
                  </div>
                </td>
                <td className="p-5 text-slate-600">Junior associates & paralegals billed out</td>
                <td className="p-5 text-slate-600">Zero attorney review (automated algorithm)</td>
              </tr>

              <tr>
                <td className="p-5 font-semibold text-slate-900">
                  Pricing & Fee Transparency
                  <span className="block text-xs font-normal text-slate-500 mt-0.5">
                    How are you billed for services?
                  </span>
                </td>
                <td className="p-5 bg-[#0C2340]/5 font-medium text-[#0C2340] border-x border-stone-200">
                  <div className="flex items-center space-x-2 text-emerald-800 font-semibold">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Transparent Flat Fees & Predictable Retainers</span>
                  </div>
                </td>
                <td className="p-5 text-slate-600">$850–$1,400/hr meter in 6-min increments</td>
                <td className="p-5 text-slate-600">Recurring hidden subscriptions & add-ons</td>
              </tr>

              <tr>
                <td className="p-5 font-semibold text-slate-900">
                  Texas Legal Customization
                  <span className="block text-xs font-normal text-slate-500 mt-0.5">
                    Is the work tailored to Texas Business Organizations Code?
                  </span>
                </td>
                <td className="p-5 bg-[#0C2340]/5 font-medium text-[#0C2340] border-x border-stone-200">
                  <div className="flex items-center space-x-2 text-emerald-800 font-semibold">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Bespoke Texas governance & statutory nuance</span>
                  </div>
                </td>
                <td className="p-5 text-slate-600">Customized, but with extreme billable hours</td>
                <td className="p-5 text-slate-600">Generic multi-state forms with critical omissions</td>
              </tr>

              <tr>
                <td className="p-5 font-semibold text-slate-900">
                  Turnaround & Responsiveness
                  <span className="block text-xs font-normal text-slate-500 mt-0.5">
                    How quickly do you get answers and contracts?
                  </span>
                </td>
                <td className="p-5 bg-[#0C2340]/5 font-medium text-[#0C2340] border-x border-stone-200">
                  <div className="flex items-center space-x-2 text-emerald-800 font-semibold">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Rapid 24–48h response & direct cell/email</span>
                  </div>
                </td>
                <td className="p-5 text-slate-600">Days of committee reviews and delays</td>
                <td className="p-5 text-slate-600">Unresponsive robotic chat support</td>
              </tr>

              <tr>
                <td className="p-5 font-semibold text-slate-900">
                  Practical Business Judgment
                  <span className="block text-xs font-normal text-slate-500 mt-0.5">
                    Does your counsel understand commercial realities?
                  </span>
                </td>
                <td className="p-5 bg-[#0C2340]/5 font-medium text-[#0C2340] border-x border-stone-200">
                  <div className="flex items-center space-x-2 text-emerald-800 font-semibold">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Deal-maker mindset balancing risk & revenue</span>
                  </div>
                </td>
                <td className="p-5 text-slate-600">Overly academic & risk-averse deal friction</td>
                <td className="p-5 text-slate-600">None</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Callout */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#7A1B28] hover:bg-[#8D2030] border border-[#66101C] text-white font-semibold text-xs uppercase tracking-widest rounded shadow-lg transition-all inline-flex items-center space-x-2"
          >
            <span>Schedule a 15-Minute Strategy Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#D8B252]" />
          </button>
        </div>
      </div>
    </section>
  );
};
