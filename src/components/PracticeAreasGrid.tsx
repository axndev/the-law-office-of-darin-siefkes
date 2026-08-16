import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';
import { PageView, PracticeArea } from '../types';

interface PracticeAreasGridProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const PracticeAreasGrid: React.FC<PracticeAreasGridProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'formation' | 'contracts' | 'transactions' | 'disputes' | 'ip'>('all');

  const filteredAreas = selectedFilter === 'all'
    ? PRACTICE_AREAS
    : PRACTICE_AREAS.filter((p) => p.category === selectedFilter);

  return (
    <section id="practice-areas" className="py-20 lg:py-28 bg-[#F3EFE6] text-[#1E293B] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B38E45] font-semibold">
              Practice Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0E1726] font-normal leading-tight">
              Legal Counsel for the Business Lifecycle
            </h2>
            <p className="text-base text-slate-700 font-light max-w-2xl">
              From entity formation and operational contracts to IP protection, mergers, acquisitions, and commercial disputes, we provide strategic counsel at every pivotal milestone.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start lg:self-end bg-white p-1.5 rounded-lg border border-stone-300 shadow-sm">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'formation', label: 'Formation & Tech' },
              { id: 'contracts', label: 'Contracts & Real Estate' },
              { id: 'transactions', label: 'Transactions & M&A' },
              { id: 'disputes', label: 'Disputes' },
              { id: 'ip', label: 'Trademarks & IP' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap ${
                  selectedFilter === tab.id
                    ? 'bg-[#0E1726] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area: PracticeArea) => (
            <div
              key={area.id}
              onClick={() => onNavigate('practice-area-detail', area.id)}
              className="group cursor-pointer bg-white border border-stone-200/90 rounded-lg p-7 shadow-sm hover:shadow-xl hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top accent highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="space-y-4">
                {/* Header: Number & External Arrow */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-[#B38E45] tracking-wider">
                    {area.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F3EFE6] group-hover:bg-[#0E1726] text-slate-500 group-hover:text-[#C5A059] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#0E1726] font-medium leading-snug group-hover:text-[#B38E45] transition-colors">
                  {area.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {area.shortDescription}
                </p>

                {/* Top bullet highlights */}
                <div className="pt-2 border-t border-stone-100 space-y-1.5">
                  {area.whatWeHelpWith.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-600">
                      <span className="text-[#C5A059] mr-2 font-bold">&bull;</span>
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA action */}
              <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0E1726] group-hover:text-[#B38E45]">
                <span>View Practice Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Practice Banner */}
        <div className="mt-12 p-6 rounded-lg bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg text-[#0E1726] font-medium">Need customized legal counsel for a specific commercial issue?</h4>
            <p className="text-xs text-slate-600">Schedule a direct conversation with attorney Darin Siefkes to discuss your business requirements.</p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-wider rounded transition-colors whitespace-nowrap"
          >
            Consult With Darin
          </button>
        </div>
      </div>
    </section>
  );
};
