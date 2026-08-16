import React, { useState } from 'react';
import { Check, Shield, FileText, ArrowRight, Sparkles, Building2, HelpCircle } from 'lucide-react';
import { PageView } from '../types';

interface FormationFeatureSectionProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const FormationFeatureSection: React.FC<FormationFeatureSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'llc' | 'scorp' | 'ccorp' | 'lp'>('llc');

  const entityDetails = {
    llc: {
      title: 'Limited Liability Company (LLC)',
      bestFor: 'Startups, small-to-mid businesses, professional practices, real estate ventures',
      liability: 'Shields personal assets from business obligations and lawsuits',
      taxation: 'Pass-through taxation by default (Schedule C, Partnership, or S-Corp election)',
      governance: 'Flexible: Member-managed or Manager-managed with customized Company Agreement',
      formalities: 'Low: No mandatory annual board meetings or rigid statutory minutes',
      keyDocument: 'Texas Company Agreement (Operating Agreement)',
    },
    scorp: {
      title: 'S-Corporation (Tax Election)',
      bestFor: 'Profitable operating businesses with active owner-operators seeking tax optimization',
      liability: 'Full limited liability protection under underlying state entity',
      taxation: 'Pass-through with potential reduction in self-employment Medicare/FICA taxes',
      governance: 'Board of Directors & Officers or Manager-managed LLC with S-Corp tax status',
      formalities: 'Moderate: Requires formal payroll, reasonable salary distribution, and IRS Form 2553',
      keyDocument: 'Bylaws or Operating Agreement + IRS Form 2553 Election',
    },
    ccorp: {
      title: 'C-Corporation',
      bestFor: 'High-growth technology startups intending to raise institutional venture capital or issue stock options',
      liability: 'Robust corporate veil protecting shareholders, directors, and officers',
      taxation: 'Corporate-level taxation; potential Section 1202 QSBS tax exclusions on capital gains',
      governance: 'Standard statutory hierarchy: Shareholders -> Board of Directors -> Officers',
      formalities: 'High: Annual meetings, detailed minutes, stock ledgers, formal resolutions',
      keyDocument: 'Certificate of Formation, Corporate Bylaws, Stockholder Agreements',
    },
    lp: {
      title: 'Limited Partnership (LP)',
      bestFor: 'Real estate syndications, investment funds, and family asset protection holding structures',
      liability: 'Limited partners enjoy liability protection; General Partner maintains operational control',
      taxation: 'Pass-through partnership taxation',
      governance: 'General Partner manages all operations; Limited Partners remain passive investors',
      formalities: 'Moderate: Formal partnership agreement and state registration filings',
      keyDocument: 'Limited Partnership Agreement',
    },
  };

  const current = entityDetails[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-[#0E1726] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
            Startup & Entity Structuring
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
            Build Your Business on the Right Legal Foundation.
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            Selecting and structuring the correct business entity is not just paperwork—it dictates your personal liability exposure, tax posture, management authority, and investment readiness.
          </p>
        </div>

        {/* Evaluation Pillars Checklist */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12 text-xs">
          {[
            'LLCs & Series LLCs',
            'LPs & Partnerships',
            'S-Corporations',
            'C-Corporations',
            'Liability Shields',
            'Tax Considerations',
            'Management Rules',
            'Profit Sharing Terms',
            'Governance Documents',
            'Corporate Formalities',
            'Where to Form (TX / DE)',
            'Buy-Sell Provisions',
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#141F32] border border-slate-700/80 rounded px-3 py-2.5 flex items-center space-x-2 text-slate-200"
            >
              <Check className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* Interactive Entity Comparison Box */}
        <div className="bg-[#141F32] border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
          {/* Tab Selector */}
          <div className="flex flex-wrap border-b border-slate-700 bg-[#09101D]/70">
            {[
              { id: 'llc', label: 'Texas LLC' },
              { id: 'scorp', label: 'S-Corporation' },
              { id: 'ccorp', label: 'C-Corporation' },
              { id: 'lp', label: 'Limited Partnership (LP)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 flex-1 text-center min-w-[140px] ${
                  activeTab === tab.id
                    ? 'border-[#C5A059] text-[#C5A059] bg-[#141F32]'
                    : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/70 pb-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059]">
                  Entity Classification
                </span>
                <h3 className="text-2xl font-serif text-white font-medium">{current.title}</h3>
              </div>
              <div className="text-xs text-slate-300 bg-[#09101D] px-3.5 py-1.5 rounded border border-slate-700">
                <span className="text-slate-400">Best for: </span>
                <span className="text-white font-medium">{current.bestFor}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <div className="bg-[#09101D]/60 p-4 rounded-lg border border-slate-800 space-y-1">
                  <div className="text-xs uppercase font-semibold text-[#C5A059]">Personal Liability Shield</div>
                  <p className="text-xs sm:text-sm text-slate-300">{current.liability}</p>
                </div>
                <div className="bg-[#09101D]/60 p-4 rounded-lg border border-slate-800 space-y-1">
                  <div className="text-xs uppercase font-semibold text-[#C5A059]">Tax Structure & Flexibility</div>
                  <p className="text-xs sm:text-sm text-slate-300">{current.taxation}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-[#09101D]/60 p-4 rounded-lg border border-slate-800 space-y-1">
                  <div className="text-xs uppercase font-semibold text-[#C5A059]">Management & Governance</div>
                  <p className="text-xs sm:text-sm text-slate-300">{current.governance}</p>
                </div>
                <div className="bg-[#09101D]/60 p-4 rounded-lg border border-slate-800 space-y-1">
                  <div className="text-xs uppercase font-semibold text-[#C5A059]">Key Foundational Document</div>
                  <p className="text-xs sm:text-sm text-slate-300">{current.keyDocument}</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-700/70">
              <p className="text-xs text-slate-400">
                Need advice on structuring co-founder equity, Texas state filings, and customized operating agreements?
              </p>
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  onClick={() => onNavigate('practice-area-detail', 'business-formation')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs uppercase tracking-wider font-semibold rounded border border-slate-600 transition-colors"
                >
                  Explore Business Formation
                </button>
                <button
                  onClick={() => onNavigate('entity-guide')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] text-xs uppercase tracking-wider font-semibold rounded transition-colors"
                >
                  Interactive Selector &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
