import React from 'react';
import { Award, UserCheck, DollarSign, ShieldCheck, ArrowRight } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import { PageView } from '../types';

interface WhyDarinSectionProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const WhyDarinSection: React.FC<WhyDarinSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const advantages = [
    {
      icon: Award,
      title: 'Experienced Counsel',
      description:
        'Practical legal guidance backed by real-world experience representing Texas businesses, founders, and corporations. Grounded by academic excellence (Baylor Law J.D., cum laude) and prior experience in tech, media, and enterprise industry environments.',
      tag: 'Baylor Law J.D. Cum Laude',
    },
    {
      icon: UserCheck,
      title: 'Personal Attention',
      description:
        'You work directly with principal attorney Darin Siefkes. Your business matters are never delegated to junior associates, paralegals, or revolving case managers. You receive tailored counsel from an attorney who understands your long-term vision.',
      tag: 'Direct Attorney Access',
    },
    {
      icon: DollarSign,
      title: 'Cost-Conscious Representation',
      description:
        'Many core business legal services—such as business entity formations, trademark applications, and contract reviews—can be structured under transparent flat-fee arrangements, eliminating unexpected billing surprises.',
      tag: 'Flat-Fee Transparency',
    },
    {
      icon: ShieldCheck,
      title: 'Prevent Problems Before They Start',
      description:
        'Proactive legal planning and watertight foundational documents protect your business far more effectively and affordably than courtroom defense. We identify and resolve hidden liability traps before they become expensive disputes.',
      tag: 'Proactive Risk Shielding',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] text-[#1E293B] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#B38E45] font-semibold">
            Firm Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0E1726] font-normal leading-tight">
            Legal Advice Built Around Your Business
          </h2>
          <p className="text-base text-slate-700 font-light">
            We provide strategic business counsel designed for the practical realities of Austin entrepreneurs, executives, and company owners.
          </p>
        </div>

        {/* 4 Pillars Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-lg p-8 shadow-sm hover:border-[#C5A059] transition-colors space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded bg-[#0E1726] text-[#C5A059] flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B38E45] bg-[#F3EFE6] px-3 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-[#0E1726] font-medium leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center text-xs font-mono text-stone-400">
                  Advantage 0{idx + 1} &bull; The Law Office of Darin Siefkes
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 bg-[#0E1726] text-white rounded-xl p-8 sm:p-10 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              Austin, Texas &bull; Commercial Legal Counsel
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif font-normal">
              Experience the difference of dedicated, approachable counsel.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Get direct answers to your business questions without long wait times or opaque hourly billing.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-md"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
