import React from 'react';
import { Shield, CheckCircle, Scale, Users, FileCheck, ArrowRight } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/firmData';
import { PageView } from '../types';

interface TrustPositioningSectionProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const TrustPositioningSection: React.FC<TrustPositioningSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] text-[#1E293B] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#B38E45] font-semibold">
            Firm Philosophy & Positioning
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0E1726] font-normal leading-tight">
            Your Business Deserves Counsel You Can Count On.
          </h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Text */}
          <div className="lg:col-span-6 space-y-6 text-base text-slate-700 leading-relaxed font-light">
            <p className="text-lg text-slate-900 font-normal leading-snug">
              Large corporations employ entire in-house legal departments to review every contract, evaluate every risk, and negotiate every deal. Small businesses and entrepreneurs rarely have that luxury.
            </p>
            <p>
              Yet small businesses and growing enterprises face the exact same high-stakes legal terrain: complex vendor agreements, shareholder and partner dynamics, proprietary intellectual property, commercial real estate leases, employment considerations, and potential business disputes.
            </p>
            <p>
              The Law Office of Darin Siefkes serves as your company’s <strong className="text-slate-900 font-semibold">dedicated outside business counsel</strong>. You gain the advantage of experienced, proactive legal guidance when you need it—without paying for full-time executive overhead or navigating the bureaucratic layers of massive corporate firms.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#0E1726] hover:bg-[#1C2B44] text-white text-xs uppercase tracking-widest font-semibold rounded transition-colors"
              >
                Discuss Your Business
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#B38E45] hover:text-[#997A3D] hover:underline flex items-center"
              >
                <span>Read About Our Approach</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>
          </div>

          {/* Right Supporting Detail / Pillars Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PHILOSOPHY_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-stone-200/90 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B38E45] bg-[#F3EFE6] px-2.5 py-0.5 rounded">
                      {pillar.highlight}
                    </span>
                    <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif text-lg text-[#0E1726] font-medium">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Quote Box */}
            <div className="bg-[#0E1726] text-slate-200 rounded-lg p-6 border border-slate-800 space-y-3">
              <p className="font-serif text-base italic text-slate-100 leading-relaxed">
                "Our focus is providing practical, cost-effective legal advice that helps you operate smoothly and make sound business decisions with total confidence."
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                <span className="text-white font-medium">Darin P. Siefkes</span>
                <span className="text-[#C5A059]">Founder & Attorney</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
