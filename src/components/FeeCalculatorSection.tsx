import React, { useState } from 'react';
import { Check, ArrowRight, Shield, Zap, Sparkles, HelpCircle, Clock, FileText, CheckCircle2 } from 'lucide-react';
import { PageView } from '../types';

interface FeeCalculatorSectionProps {
  onOpenConsultation: () => void;
  onNavigate: (page: PageView, param?: string) => void;
}

interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  category: string;
  priceRange: string;
  turnaround: string;
  description: string;
  deliverables: string[];
  bestFor: string;
  popular?: boolean;
}

const PACKAGES: ServicePackage[] = [
  {
    id: 'formation',
    name: 'Texas Entity Launch & Structuring',
    badge: 'Fixed Fee',
    category: 'Formation & Governance',
    priceRange: '$1,250 – $1,950',
    turnaround: '3–5 Business Days (Expedited Available)',
    description: 'Bespoke corporate architecture customized for Texas founders. Far beyond automated online forms—we structure voting, transfer rights, and cap tables properly.',
    deliverables: [
      'Custom Texas LLC Certificate of Formation or Certificate of Incorporation',
      'Tailored Company Agreement (Operating Agreement) or Corporate Bylaws',
      'Organizational Consent & Board / Member Initial Resolutions',
      'Federal EIN Registration & Texas Franchise Tax setup instructions',
      'Founder Stock / Unit Issuance & Vesting Assignment framework',
      'Initial 45-minute strategic consultation with attorney Darin Siefkes',
    ],
    bestFor: 'New ventures, tech startups, professional practices, and co-founder partnerships.',
    popular: true,
  },
  {
    id: 'contracts',
    name: 'Commercial Contract Architecture',
    badge: 'Fixed Fee',
    category: 'Commercial Contracts',
    priceRange: '$950 – $2,400',
    turnaround: '3–4 Business Days',
    description: 'Ironclad commercial agreements designed to protect your revenue, limit legal liability, and establish enforceable terms under Texas law.',
    deliverables: [
      'Master Services Agreement (MSA) or Client Consulting Agreement',
      'Standard Statements of Work (SOW) & Change Order templates',
      'Independent Contractor & 1099 Vendor Agreements with IP assignment',
      'Mutual or Unilateral Non-Disclosure Agreements (NDA)',
      'Customized Texas Limitation of Liability & Indemnification clauses',
      'Two rounds of revisions and direct attorney negotiation guidance',
    ],
    bestFor: 'B2B service providers, agencies, software vendors, and growing businesses.',
  },
  {
    id: 'fractional-gc',
    name: 'Outside General Counsel Retainer',
    badge: 'Monthly Retainer',
    category: 'Ongoing Business Counsel',
    priceRange: '$1,850 – $3,950 / mo',
    turnaround: 'Same-Day / Next-Day Priority Access',
    description: 'Your dedicated corporate attorney on speed dial. Get proactive legal oversight and rapid contract reviews without hiring a six-figure in-house counsel.',
    deliverables: [
      'Direct cell & email access to attorney Darin Siefkes (no junior staff)',
      'Ongoing contract reviews, vendor negotiations, and markup redlines',
      'Corporate governance maintenance, board minutes, and annual filings',
      'Employment law compliance, offer letters, and contractor oversight',
      'Pre-dispute mitigation and demand letter escalation',
      'Guaranteed response times with predictable monthly budgeting',
    ],
    bestFor: 'Companies with $500k–$15M revenue needing regular legal support.',
  },
  {
    id: 'transactions',
    name: 'M&A, Buyouts & Asset Transactions',
    badge: 'Project Retainer',
    category: 'Transactions & M&A',
    priceRange: 'Custom Project Fee',
    turnaround: 'Deal-Dependent (Milestone Schedule)',
    description: 'Comprehensive deal structuring and transactional execution for business sales, partner buyouts, equity financing, and asset acquisitions.',
    deliverables: [
      'Letter of Intent (LOI) / Term Sheet drafting and deal negotiation',
      'Definitive Asset Purchase Agreement (APA) or Stock Purchase Agreement',
      'Disclosure Schedules, Bill of Sale, and Assignment of Contracts',
      'Founder Non-Compete, Non-Solicit, and Consulting Transition Agreements',
      'Corporate Authorizations, Board Consents, and Closing Escrow checklist',
    ],
    bestFor: 'Owners buying or selling a business, restructuring partners, or raising capital.',
  },
];

export const FeeCalculatorSection: React.FC<FeeCalculatorSectionProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const [selectedId, setSelectedId] = useState<string>('formation');
  const activePackage = PACKAGES.find((p) => p.id === selectedId) || PACKAGES[0];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F0E8] text-[#1E293B] border-b border-stone-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#7A1B28]/10 border border-[#7A1B28]/20 text-xs text-[#7A1B28] font-semibold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>Transparent Legal Packaging</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0C2340] font-normal leading-tight">
              Predictable Pricing. Zero Billing Surprises.
            </h2>
            <p className="text-base text-slate-700 font-light leading-relaxed">
              We reject the archaic BigLaw practice of vague hourly meters for standard business matters. Review our core service packages, transparent scopes, and rapid turnaround commitments below.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 bg-[#7A1B28] hover:bg-[#8D2030] border border-[#66101C] text-white text-xs uppercase tracking-widest font-semibold rounded shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <span>Request Custom Scope & Quote</span>
              <ArrowRight className="w-4 h-4 text-[#D8B252]" />
            </button>
          </div>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {PACKAGES.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedId(pkg.id)}
              className={`p-4 rounded-lg text-left transition-all border ${
                selectedId === pkg.id
                  ? 'bg-[#0C2340] text-white border-[#C29B38] shadow-lg ring-1 ring-[#C29B38]'
                  : 'bg-white text-slate-800 border-stone-300 hover:border-stone-400 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                    selectedId === pkg.id
                      ? 'bg-[#7A1B28] text-white'
                      : 'bg-stone-100 text-slate-700'
                  }`}
                >
                  {pkg.badge}
                </span>
                {pkg.popular && (
                  <span className={`text-[10px] uppercase tracking-wider font-semibold ${selectedId === pkg.id ? 'text-[#D8B252]' : 'text-[#7A1B28]'}`}>
                    High Demand
                  </span>
                )}
              </div>
              <h3 className={`font-serif text-base font-medium leading-snug ${
                selectedId === pkg.id ? 'text-white' : 'text-[#0C2340]'
              }`}>
                {pkg.name}
              </h3>
              <p className={`text-xs mt-1 font-semibold ${
                selectedId === pkg.id ? 'text-[#D8B252]' : 'text-[#7A1B28]'
              }`}>
                {pkg.priceRange}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Package Deep Dive Card */}
        <div className="bg-white rounded-xl border border-stone-300 shadow-xl overflow-hidden">
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Scope Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#7A1B28]">
                    {activePackage.category}
                  </span>
                  <span className="text-stone-300">&bull;</span>
                  <span className="text-xs text-slate-600 flex items-center">
                    <Clock className="w-3.5 h-3.5 text-[#C29B38] mr-1" />
                    Turnaround: {activePackage.turnaround}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0C2340] font-medium">
                  {activePackage.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                  {activePackage.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-[#7A1B28]" />
                  <span>Standard Included Deliverables & Legal Work:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePackage.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 text-xs text-slate-700 bg-[#FBF9F5] p-2.5 rounded border border-stone-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#7A1B28] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 text-xs text-slate-700">
                <strong className="text-slate-900">Ideal For:</strong> {activePackage.bestFor}
              </div>
            </div>

            {/* Right Summary & Immediate Action Box */}
            <div className="lg:col-span-5 bg-[#0C2340] text-white rounded-xl p-6 sm:p-8 space-y-6 border border-slate-700 shadow-lg">
              <div className="space-y-1 pb-4 border-b border-slate-700">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D8B252]">
                  Transparent Fee Estimate
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-normal text-white">
                  {activePackage.priceRange}
                </div>
                <p className="text-xs text-slate-300">
                  Fixed pricing confirmed in writing prior to commencing work.
                </p>
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#D8B252] flex-shrink-0" />
                  <span>Work directly with attorney Darin Siefkes</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#D8B252] flex-shrink-0" />
                  <span>Tailored specifically to Texas statutes & case law</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#D8B252] flex-shrink-0" />
                  <span>Includes client strategy call & custom revisions</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#D8B252] flex-shrink-0" />
                  <span>No hidden overhead, retainer surprises, or clerical fees</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-4 bg-[#7A1B28] hover:bg-[#8D2030] border border-[#66101C] text-white font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-md text-center flex items-center justify-center space-x-2"
                >
                  <span>Select Package & Schedule Call</span>
                  <ArrowRight className="w-4 h-4 text-[#D8B252]" />
                </button>

                <div className="text-center">
                  <span className="text-[11px] text-slate-300">
                    Need a customized engagement?{' '}
                    <button
                      onClick={onOpenConsultation}
                      className="text-[#D8B252] hover:underline font-semibold"
                    >
                      Request a Custom Scope &rarr;
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
