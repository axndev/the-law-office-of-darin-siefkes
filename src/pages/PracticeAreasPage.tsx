import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Search, Filter } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';
import { PageView } from '../types';

interface PracticeAreasPageProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [filter, setFilter] = useState<'all' | 'formation' | 'contracts' | 'transactions' | 'disputes' | 'ip'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = PRACTICE_AREAS.filter((p) => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch =
      searchTerm.trim() === '' ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.whatWeHelpWith.some((w) => w.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-[#FBF9F5] text-[#1E293B]">
      {/* Header Banner */}
      <section className="bg-[#0E1726] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141F32] border border-[#C5A059]/30 text-xs text-[#C5A059]">
            <span>Austin Business Law Practice Areas</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight">
            Legal Counsel for the <span className="italic text-[#D6B36E]">Business Lifecycle</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
            The Law Office of Darin Siefkes provides experienced outside general counsel and specialized transactional representation for Austin businesses, founders, and companies.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-[#F3EFE6] border-b border-stone-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Practice Areas' },
              { id: 'formation', label: 'Formation & Tech' },
              { id: 'contracts', label: 'Contracts & Real Estate' },
              { id: 'transactions', label: 'Transactions, Franchise & M&A' },
              { id: 'ip', label: 'Trademarks & IP' },
              { id: 'disputes', label: 'Business Disputes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-[#0E1726] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-stone-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search practice areas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-300 rounded text-xs text-slate-900 focus:outline-none focus:border-[#B38E45]"
            />
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAreas.map((area) => (
              <div
                key={area.id}
                onClick={() => onNavigate('practice-area-detail', area.id)}
                className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-[#B38E45]">
                      {area.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F3EFE6] group-hover:bg-[#0E1726] text-slate-500 group-hover:text-[#C5A059] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#0E1726] font-medium group-hover:text-[#B38E45] transition-colors leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {area.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-stone-100 space-y-2 text-xs text-slate-700">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 block">
                      Key Services:
                    </span>
                    {area.whatWeHelpWith.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B38E45] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1 text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0E1726] group-hover:text-[#B38E45]">
                  <span>Explore Practice Area</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {filteredAreas.length === 0 && (
            <div className="py-16 text-center text-slate-500">
              <p className="text-lg font-serif text-slate-800">No practice areas match your search.</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSearchTerm('');
                }}
                className="mt-3 text-xs text-[#B38E45] font-semibold uppercase tracking-wider hover:underline"
              >
                Reset Filters & Search
              </button>
            </div>
          )}

          {/* Interactive Entity Selector Promo */}
          <div className="bg-[#0E1726] text-white p-8 sm:p-10 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-[#C5A059]">Interactive Planning Tool</span>
              <h3 className="text-2xl font-serif font-normal">Unsure Which Entity Structure Fits Your Business?</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Compare Texas LLCs, S-Corporations, C-Corporations, and Partnerships with our interactive evaluation tool.
              </p>
            </div>
            <button
              onClick={() => onNavigate('entity-guide')}
              className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-wider rounded transition-colors whitespace-nowrap"
            >
              Open Entity Comparison &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
