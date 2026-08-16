import React from 'react';
import { ArrowRight, CheckCircle2, FileSpreadsheet, Building, Store, ShieldAlert } from 'lucide-react';
import { PageView } from '../types';

interface TransactionsSectionProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const TransactionsSection: React.FC<TransactionsSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const transactionPillars = [
    { title: 'Buying a Business', desc: 'Asset vs. stock purchase structures, Letters of Intent (LOI), and thorough financial/legal due diligence.' },
    { title: 'Selling a Business', desc: 'Maximizing purchase price realization while insulating the seller from post-closing liabilities.' },
    { title: 'Corporate Mergers', desc: 'Texas statutory mergers, cross-entity consolidations, and strategic business combinations.' },
    { title: 'Commercial Contracts', desc: 'Master services agreements, enterprise licensing, vendor terms, and liability limitation.' },
    { title: 'Commercial Real Estate', desc: 'Office and retail commercial lease reviews, CAM fee limits, and purchase/sale agreements.' },
    { title: 'Franchise Matters', desc: 'Franchise Disclosure Document (FDD) legal audits, franchise agreements, and multi-unit expansions.' },
    { title: 'Intellectual Property', desc: 'Federal trademark registrations, software licensing, and assignment protocols.' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] text-[#1E293B] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Imagery / Atmosphere */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Austin corporate boardroom and executive legal transactions"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Float Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0E1726] text-white p-5 rounded-lg border border-slate-800 shadow-xl max-w-xs">
                <div className="flex items-center space-x-2 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pragmatic Deal Structuring</span>
                </div>
                <p className="text-xs text-slate-300">
                  Protecting purchase proceeds and isolating liabilities at every stage of the commercial lifecycle.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#B38E45] font-semibold">
              Commercial Growth & Transactions
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0E1726] font-normal leading-tight">
              When Your Business Is Growing, Your Legal Strategy Should Grow With It.
            </h2>

            <p className="text-base text-slate-700 font-light leading-relaxed">
              Major transactions represent the inflection points of your company’s lifespan. Whether you are acquiring a competitor, negotiating a mission-critical enterprise agreement, expanding through a franchise model, or preparing for an exit, disciplined legal drafting preserves value and mitigates risk.
            </p>

            {/* List of Transaction Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {transactionPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded bg-white border border-stone-200/90 hover:border-[#C5A059] transition-colors space-y-1 shadow-sm"
                >
                  <h4 className="font-serif text-base text-[#0E1726] font-medium">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-snug">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-[#0E1726] hover:bg-[#1C2B44] text-white text-xs uppercase tracking-widest font-semibold rounded transition-colors text-center"
              >
                Discuss a Transaction
              </button>

              <button
                onClick={() => onNavigate('practice-areas')}
                className="px-7 py-3.5 bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs uppercase tracking-widest font-semibold rounded transition-colors text-center"
              >
                View Transaction Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
