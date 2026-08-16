import React, { useState } from 'react';
import { Shield, CheckCircle2, HelpCircle, ArrowRight, Sparkles, Building, FileSpreadsheet, Scale, RefreshCw } from 'lucide-react';
import { PageView } from '../types';

interface EntityComparisonToolProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const EntityComparisonTool: React.FC<EntityComparisonToolProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  // Assessment Quiz State
  const [numOwners, setNumOwners] = useState<'single' | 'multiple' | ''>('');
  const [fundingGoal, setFundingGoal] = useState<'bootstrapped' | 'venture' | ''>('');
  const [taxPriority, setTaxPriority] = useState<'simplicity' | 'self-employment-tax' | 'institutional' | ''>('');
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleCalculate = () => {
    if (numOwners && fundingGoal && taxPriority) {
      setShowRecommendation(true);
    }
  };

  const handleReset = () => {
    setNumOwners('');
    setFundingGoal('');
    setTaxPriority('');
    setShowRecommendation(false);
  };

  const getRecommendation = () => {
    if (fundingGoal === 'venture') {
      return {
        title: 'Delaware or Texas C-Corporation',
        reason: 'Because you intend to seek institutional venture capital and issue equity options to employees, a C-Corporation is the standard legal structure required by institutional investors.',
        keyNeeds: [
          'Certificate of Formation with Texas Secretary of State or Delaware Division of Corporations',
          'Corporate Bylaws with board composition and supermajority thresholds',
          'Stockholder Agreements, Founder Restricted Stock Purchase Agreements, and 83(b) elections',
          'IP Assignment and Proprietary Information Agreements (PIIA)',
        ],
      };
    }

    if (taxPriority === 'self-employment-tax' && numOwners !== '') {
      return {
        title: 'Texas LLC with S-Corporation Tax Election (IRS Form 2553)',
        reason: 'Provides the structural flexibility and low administrative burden of a Texas LLC while enabling active owner-operators to draw a W-2 salary and take remaining profits as dividends to potentially reduce self-employment taxes.',
        keyNeeds: [
          'Texas LLC Certificate of Formation',
          'Tailored Texas Company Agreement (Operating Agreement)',
          'IRS Form 2553 S-Corporation Election timely filed within 75 days',
          'Formal payroll and reasonable owner compensation structure',
        ],
      };
    }

    return {
      title: 'Texas Limited Liability Company (LLC)',
      reason: 'The optimal balance of robust personal liability shielding, pass-through taxation, operational flexibility, and minimal statutory administrative burdens.',
      keyNeeds: [
        'Certificate of Formation with the Texas Secretary of State',
        'Customized Texas Company Agreement with clear buy-sell and voting provisions',
        'Initial Member/Manager resolutions and EIN registration',
        'State-specific registered agent and annual Texas Franchise Tax reporting',
      ],
    };
  };

  return (
    <div className="bg-[#FBF9F5] text-[#1E293B]">
      {/* Header Banner */}
      <section className="bg-[#0E1726] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141F32] border border-[#C5A059]/30 text-xs text-[#C5A059]">
            <Scale className="w-3.5 h-3.5" />
            <span>Interactive Legal Evaluation Matrix</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight">
            Texas Business Entity <span className="italic text-[#D6B36E]">Comparison & Guide</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
            Evaluate LLCs, S-Corporations, C-Corporations, and Partnerships under Texas Business Organizations Code (BOC). Compare liability, tax posture, and governance rules.
          </p>
        </div>
      </section>

      {/* Main Interactive Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
        {/* Step 1: Interactive Recommendation Assessment */}
        <div className="bg-white border border-stone-300 rounded-xl p-8 sm:p-12 shadow-lg space-y-8">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-xs uppercase tracking-widest text-[#B38E45] font-semibold">
              Interactive Tool
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0E1726] font-medium">
              Find the Right Entity Structure for Your Goals
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Answer 3 brief questions about your business model to evaluate suitable Texas legal structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Question 1 */}
            <div className="space-y-3 bg-[#FBF9F5] p-5 rounded-lg border border-stone-200">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
                1. Ownership Structure
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setNumOwners('single')}
                  className={`w-full text-left p-3 rounded text-xs transition-colors border ${
                    numOwners === 'single'
                      ? 'bg-[#0E1726] text-white border-[#0E1726]'
                      : 'bg-white text-slate-700 border-stone-300 hover:border-[#B38E45]'
                  }`}
                >
                  <span className="font-semibold block">Single Owner / Solo Founder</span>
                  <span className="text-[11px] opacity-80">100% individual control</span>
                </button>

                <button
                  onClick={() => setNumOwners('multiple')}
                  className={`w-full text-left p-3 rounded text-xs transition-colors border ${
                    numOwners === 'multiple'
                      ? 'bg-[#0E1726] text-white border-[#0E1726]'
                      : 'bg-white text-slate-700 border-stone-300 hover:border-[#B38E45]'
                  }`}
                >
                  <span className="font-semibold block">2+ Co-Founders / Partners</span>
                  <span className="text-[11px] opacity-80">Shared equity & governance</span>
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-3 bg-[#FBF9F5] p-5 rounded-lg border border-stone-200">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
                2. Capital & Investment Plans
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setFundingGoal('bootstrapped')}
                  className={`w-full text-left p-3 rounded text-xs transition-colors border ${
                    fundingGoal === 'bootstrapped'
                      ? 'bg-[#0E1726] text-white border-[#0E1726]'
                      : 'bg-white text-slate-700 border-stone-300 hover:border-[#B38E45]'
                  }`}
                >
                  <span className="font-semibold block">Self-Funded / Bank / SBA</span>
                  <span className="text-[11px] opacity-80">Organic revenue or debt loans</span>
                </button>

                <button
                  onClick={() => setFundingGoal('venture')}
                  className={`w-full text-left p-3 rounded text-xs transition-colors border ${
                    fundingGoal === 'venture'
                      ? 'bg-[#0E1726] text-white border-[#0E1726]'
                      : 'bg-white text-slate-700 border-stone-300 hover:border-[#B38E45]'
                  }`}
                >
                  <span className="font-semibold block">Venture Capital / Angels</span>
                  <span className="text-[11px] opacity-80">Preferred stock, SAFEs, equity options</span>
                </button>
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-3 bg-[#FBF9F5] p-5 rounded-lg border border-stone-200">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
                3. Primary Operational Priority
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setTaxPriority('simplicity')}
                  className={`w-full text-left p-3 rounded text-xs transition-colors border ${
                    taxPriority === 'simplicity'
                      ? 'bg-[#0E1726] text-white border-[#0E1726]'
                      : 'bg-white text-slate-700 border-stone-300 hover:border-[#B38E45]'
                  }`}
                >
                  <span className="font-semibold block">Operational Simplicity</span>
                  <span className="text-[11px] opacity-80">Minimal paperwork & pass-through tax</span>
                </button>

                <button
                  onClick={() => setTaxPriority('self-employment-tax')}
                  className={`w-full text-left p-3 rounded text-xs transition-colors border ${
                    taxPriority === 'self-employment-tax'
                      ? 'bg-[#0E1726] text-white border-[#0E1726]'
                      : 'bg-white text-slate-700 border-stone-300 hover:border-[#B38E45]'
                  }`}
                >
                  <span className="font-semibold block">Tax Optimization</span>
                  <span className="text-[11px] opacity-80">Active business owner salary & dividends</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleReset}
              className="text-xs text-stone-500 hover:text-slate-900 flex items-center"
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              <span>Reset Assessment</span>
            </button>

            <button
              onClick={handleCalculate}
              disabled={!numOwners || !fundingGoal || !taxPriority}
              className="px-8 py-3.5 bg-[#0E1726] hover:bg-[#1C2B44] text-white font-semibold text-xs uppercase tracking-widest rounded transition-all disabled:opacity-40"
            >
              Generate Structure Assessment
            </button>
          </div>

          {/* Assessment Output Card */}
          {showRecommendation && (
            <div className="mt-8 bg-[#141F32] text-white p-8 rounded-xl border border-slate-700 space-y-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
                  Preliminary Legal Recommendation
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                  {getRecommendation().title}
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {getRecommendation().reason}
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-700">
                <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block">
                  Essential Foundational Legal Documents:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  {getRecommendation().keyNeeds.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-700">
                <p className="text-xs text-slate-400">
                  Ready to draft your formation documents and Texas filings with attorney Darin Siefkes?
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-wider rounded transition-colors whitespace-nowrap"
                >
                  Schedule Formation Consultation
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Step 2: Comprehensive Texas Entity Comparison Matrix */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B38E45] font-semibold">
              Texas BOC Legal Comparison Matrix
            </span>
            <h2 className="text-3xl font-serif text-[#0E1726] font-medium">
              Detailed Entity Classification Breakdown
            </h2>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-stone-300 shadow-md">
            <table className="w-full text-left text-xs text-slate-700 border-collapse">
              <thead>
                <tr className="bg-[#0E1726] text-white border-b border-slate-800">
                  <th className="p-4 sm:p-5 font-serif text-sm uppercase tracking-wider">Legal Dimension</th>
                  <th className="p-4 sm:p-5 font-serif text-sm uppercase tracking-wider text-[#C5A059]">Texas LLC</th>
                  <th className="p-4 sm:p-5 font-serif text-sm uppercase tracking-wider">S-Corporation</th>
                  <th className="p-4 sm:p-5 font-serif text-sm uppercase tracking-wider">C-Corporation</th>
                  <th className="p-4 sm:p-5 font-serif text-sm uppercase tracking-wider">Limited Partnership (LP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr className="hover:bg-[#FBF9F5]">
                  <td className="p-4 font-semibold text-slate-900 bg-stone-50">Personal Liability Protection</td>
                  <td className="p-4 font-medium text-emerald-800">Full Limited Liability</td>
                  <td className="p-4 font-medium text-emerald-800">Full Corporate Shield</td>
                  <td className="p-4 font-medium text-emerald-800">Full Corporate Shield</td>
                  <td className="p-4 text-slate-600">Limited for LPs; GP has liability</td>
                </tr>

                <tr className="hover:bg-[#FBF9F5]">
                  <td className="p-4 font-semibold text-slate-900 bg-stone-50">Federal Tax Treatment</td>
                  <td className="p-4 text-slate-600">Pass-through default (flexible)</td>
                  <td className="p-4 text-slate-600">Pass-through with owner salary/dividend split</td>
                  <td className="p-4 text-slate-600">Corporate tax; eligible for Sec. 1202 QSBS</td>
                  <td className="p-4 text-slate-600">Pass-through partnership taxation</td>
                </tr>

                <tr className="hover:bg-[#FBF9F5]">
                  <td className="p-4 font-semibold text-slate-900 bg-stone-50">Management Structure</td>
                  <td className="p-4 text-slate-600">Member-managed or Manager-managed</td>
                  <td className="p-4 text-slate-600">Board of Directors & Officers</td>
                  <td className="p-4 text-slate-600">Board of Directors & Officers</td>
                  <td className="p-4 text-slate-600">General Partner manages all operations</td>
                </tr>

                <tr className="hover:bg-[#FBF9F5]">
                  <td className="p-4 font-semibold text-slate-900 bg-stone-50">Corporate Formalities</td>
                  <td className="p-4 font-medium text-emerald-800">Low (no mandatory annual meetings)</td>
                  <td className="p-4 text-slate-600">Moderate (payroll & board resolutions)</td>
                  <td className="p-4 text-amber-800">High (annual meetings, minutes, resolutions)</td>
                  <td className="p-4 text-slate-600">Moderate (partnership recordkeeping)</td>
                </tr>

                <tr className="hover:bg-[#FBF9F5]">
                  <td className="p-4 font-semibold text-slate-900 bg-stone-50">Primary Governing Document</td>
                  <td className="p-4 text-slate-600 font-medium">Company Agreement</td>
                  <td className="p-4 text-slate-600 font-medium">Corporate Bylaws + IRS Form 2553</td>
                  <td className="p-4 text-slate-600 font-medium">Corporate Bylaws & Stockholder Agmt</td>
                  <td className="p-4 text-slate-600 font-medium">Limited Partnership Agreement</td>
                </tr>

                <tr className="hover:bg-[#FBF9F5]">
                  <td className="p-4 font-semibold text-slate-900 bg-stone-50">Best Suited For</td>
                  <td className="p-4 text-slate-700 font-medium">Small-to-mid businesses, agencies, consulting, real estate</td>
                  <td className="p-4 text-slate-700 font-medium">Profitable operating businesses with owner-employees</td>
                  <td className="p-4 text-slate-700 font-medium">Tech startups, institutional VC rounds, equity plans</td>
                  <td className="p-4 text-slate-700 font-medium">Real estate syndications & passive investment funds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
