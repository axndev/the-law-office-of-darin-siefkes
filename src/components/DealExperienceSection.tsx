import React, { useState } from 'react';
import { Briefcase, CheckCircle2, ArrowRight, Building, FileSpreadsheet, Scale, Layers } from 'lucide-react';
import { PageView } from '../types';

interface DealExperienceSectionProps {
  onOpenConsultation: () => void;
  onNavigate: (page: PageView, param?: string) => void;
}

interface RepresentativeMatter {
  id: string;
  category: string;
  title: string;
  clientType: string;
  dealSize: string;
  challenge: string;
  strategy: string;
  outcome: string;
}

const MATTERS: RepresentativeMatter[] = [
  {
    id: 'saas-mna',
    category: 'M&A & Asset Sales',
    title: 'Acquisition & Asset Sale for Austin B2B SaaS Platform',
    clientType: 'Austin Cloud Software Company',
    dealSize: '$11.8M Asset Purchase',
    challenge: 'The founder was negotiating a fast-paced buyout with an out-of-state private equity group attempting to impose onerous uncapped indemnities and severe non-compete restrictions.',
    strategy: 'Negotiated customized disclosure schedules, established an escrow indemnity cap at 7.5% of purchase price, and restructured founder consulting retention agreements.',
    outcome: 'Successfully closed transaction on schedule with full owner liquidity and clean liability shields.',
  },
  {
    id: 'founder-buyout',
    category: 'Corporate Governance & Buyouts',
    title: 'Multi-Member LLC Equity Split & Clean Founder Buyout',
    clientType: 'Tech & Media Agency',
    dealSize: '3-Way Equity Restructuring',
    challenge: 'A co-founder departing on contentious terms held 35% voting equity with no formal buyout formula in the company’s original template Operating Agreement.',
    strategy: 'Structured a tax-advantageous deferred redemption promissory note, negotiated full mutual IP releases, and enacted a new comprehensive Texas Company Agreement.',
    outcome: 'Averted destructive litigation, secured company proprietary assets, and preserved continuous business operations.',
  },
  {
    id: 'enterprise-msa',
    category: 'Commercial Contracts',
    title: 'Standardizing Enterprise Master Services Agreements for High-Growth Consultancy',
    clientType: 'Austin Digital Product Consultancy',
    dealSize: '40+ Enterprise Client Contracts',
    challenge: 'Client was executing piecemeal contracts provided by enterprise customers containing one-sided indemnity clauses and extreme payment delay terms (Net-90).',
    strategy: 'Drafted modular Master Services Agreement (MSA) with customized Statements of Work (SOW), clear acceptance test windows, and strict limitation of liability caps.',
    outcome: 'Reduced sales contract closing cycles by 60% and eliminated balance-sheet exposure to consequential damages.',
  },
  {
    id: 'commercial-lease',
    category: 'Real Estate & Commercial Leases',
    title: 'Austin Retail & Office Headquarters Lease Negotiation',
    clientType: 'Expanding Healthcare & Wellness Brand',
    dealSize: '10-Year Commercial Lease',
    challenge: 'Landlord proposed a 45-page standard triple-net (NNN) lease with uncapped Common Area Maintenance (CAM) overages and personal founder guaranties.',
    strategy: 'Negotiated a 5% annual cumulative cap on controllable operating expenses, secured a $120,000 tenant improvement allowance, and implemented a phased release of the personal guaranty.',
    outcome: 'Saved the client an estimated $140,000+ in potential pass-through overcharges over the lease term.',
  },
];

export const DealExperienceSection: React.FC<DealExperienceSectionProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [selectedMatter, setSelectedMatter] = useState<string>('saas-mna');
  const activeMatter = MATTERS.find((m) => m.id === selectedMatter) || MATTERS[0];

  return (
    <section className="py-20 lg:py-28 bg-[#0C2340] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A1B28]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C29B38]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#122B4D] border border-[#C29B38]/40 text-xs text-[#D8B252] font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Representative Matters & Case Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
            Proven Legal Execution on Real Commercial Deals
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            Every business decision involves legal risk and commercial opportunity. Here is how attorney Darin Siefkes has structured, protected, and negotiated key matters for Texas companies.
          </p>
        </div>

        {/* Matter Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {MATTERS.map((matter) => (
            <button
              key={matter.id}
              onClick={() => setSelectedMatter(matter.id)}
              className={`p-4 rounded-lg text-left transition-all border ${
                selectedMatter === matter.id
                  ? 'bg-[#122B4D] border-[#C29B38] shadow-lg ring-1 ring-[#C29B38]'
                  : 'bg-[#071324] border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D8B252]">
                  {matter.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400">{matter.dealSize}</span>
              </div>
              <h3 className="font-serif text-sm font-medium text-white leading-snug line-clamp-2">
                {matter.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Selected Matter Spotlight */}
        <div className="bg-[#071324] border border-slate-700/80 rounded-xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Detail */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2 pb-4 border-b border-slate-800">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#7A1B28] text-white text-[10px] font-bold uppercase tracking-wider">
                    {activeMatter.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    Client: <strong className="text-white">{activeMatter.clientType}</strong>
                  </span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="text-xs text-[#D8B252] font-semibold">
                    Scope: {activeMatter.dealSize}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                  {activeMatter.title}
                </h3>
              </div>

              {/* Three Stage Breakdown */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-lg bg-[#122B4D]/60 border border-slate-700/70 space-y-1">
                  <strong className="text-[#D8B252] uppercase tracking-wider text-[11px] block">
                    1. The Commercial Challenge
                  </strong>
                  <p className="text-slate-300 leading-relaxed font-light">{activeMatter.challenge}</p>
                </div>

                <div className="p-4 rounded-lg bg-[#122B4D]/60 border border-slate-700/70 space-y-1">
                  <strong className="text-[#D8B252] uppercase tracking-wider text-[11px] block">
                    2. Strategic Legal Move & Execution
                  </strong>
                  <p className="text-slate-300 leading-relaxed font-light">{activeMatter.strategy}</p>
                </div>

                <div className="p-4 rounded-lg bg-[#7A1B28]/20 border border-[#7A1B28]/40 space-y-1">
                  <strong className="text-white uppercase tracking-wider text-[11px] flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#D8B252] mr-1.5" />
                    3. Tangible Business Outcome
                  </strong>
                  <p className="text-slate-200 leading-relaxed font-normal">{activeMatter.outcome}</p>
                </div>
              </div>
            </div>

            {/* Right Direct CTA Box */}
            <div className="lg:col-span-4 bg-[#122B4D] rounded-xl p-6 border border-slate-700 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D8B252]">
                  Direct Partner Experience
                </span>
                <h4 className="font-serif text-lg text-white font-medium">
                  Have a Similar Deal or Contract on Your Desk?
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Darin Siefkes personally drafts, analyzes, and negotiates your business agreements with direct partner-level precision.
                </p>
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 bg-[#7A1B28] hover:bg-[#8D2030] border border-[#66101C] text-white font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Discuss Your Transaction</span>
                  <ArrowRight className="w-4 h-4 text-[#D8B252]" />
                </button>

                <button
                  onClick={() => onNavigate('practice-areas')}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white font-medium rounded transition-colors text-center"
                >
                  Explore All Practice Areas &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
