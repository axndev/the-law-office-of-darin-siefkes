import React from 'react';
import { ArrowRight, Shield, Award, Phone, Calendar, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import { PageView } from '../types';
import { AttorneyPortrait } from './AttorneyPortrait';

interface HeroSectionProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <section className="relative bg-[#071324] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Subtle architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #D8B252 1px, transparent 1px), linear-gradient(to bottom, #D8B252 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Editorial Presentation */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Direct Attorney Access Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-sm bg-[#122B4D]/90 border border-[#D8B252]/40 text-xs text-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D8B252]"></span>
              <span className="font-semibold text-white tracking-wide">Direct Counsel with Attorney Darin Siefkes</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-[#D8B252] font-mono text-[11px]">Austin, Texas</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-4">
              <h1 
                className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-white leading-[1.12]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                Outside General Counsel & Commercial Contracts for <span className="italic text-[#EAD59A]">Texas Businesses</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                Skip junior associates and billable-hour anxiety. Get direct, partner-level counsel from <strong>Darin Siefkes</strong>—Baylor Law J.D., <em>cum laude</em>, with over 20 years guiding Texas business owners through corporate formation, complex contracts, M&A deals, and governance.
              </p>
            </div>

            {/* Direct Action Conversion Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-[#7A1B28] hover:bg-[#8D2030] border border-[#66101C] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 shadow-lg hover:shadow-xl text-center flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D8B252]" />
                <span>Schedule a 15-Minute Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#D8B252] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${FIRM_INFO.phoneRaw}`}
                className="px-6 py-4 bg-[#0C2340] hover:bg-[#122B4D] text-slate-200 hover:text-white border border-[#D8B252]/30 hover:border-[#D8B252] font-semibold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 text-center shadow-sm flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D8B252]" />
                <span>(512) 291-6991</span>
              </a>
            </div>

            {/* Key Trust Strip */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-sm bg-[#122B4D] flex items-center justify-center text-[#D8B252] flex-shrink-0 border border-[#D8B252]/20">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Baylor Law J.D., <em>cum laude</em></span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-6 h-6 rounded-sm bg-[#122B4D] flex items-center justify-center text-[#D8B252] flex-shrink-0 border border-[#D8B252]/20">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <span>Texas Bar Admitted 2005</span>
              </div>
              <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
                <div className="w-6 h-6 rounded-sm bg-[#122B4D] flex items-center justify-center text-[#D8B252] flex-shrink-0 border border-[#D8B252]/20">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Predictable Fixed-Fee Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prestige Attorney & Practice Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#0C2340] border border-[#D8B252]/30 rounded-sm overflow-hidden shadow-2xl">
              
              {/* Top Accent Header */}
              <div className="bg-[#122B4D] px-6 py-3 border-b border-slate-800 flex items-center justify-between">
                <span 
                  className="text-xs uppercase tracking-widest text-[#D8B252] font-semibold"
                  style={{ fontFamily: '"Cinzel", serif' }}
                >
                  Principal Counsel
                </span>
                <span className="text-[11px] text-slate-300">
                  Central Austin Office
                </span>
              </div>

              {/* Attorney Snapshot Frame */}
              <div className="p-6 sm:p-7 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden flex-shrink-0 border border-[#D8B252]/40 bg-[#071324]">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                      alt="Darin P. Siefkes - Austin Business Attorney"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 
                      className="text-2xl font-serif text-white font-medium leading-none"
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      Darin P. Siefkes
                    </h3>
                    <p className="text-xs text-[#D8B252] font-sans uppercase tracking-wider font-semibold">
                      Business & Corporate Attorney
                    </p>
                    <p className="text-[11px] text-slate-400 font-light leading-tight">
                      20+ years of commercial counsel for Texas founders, operators & investors.
                    </p>
                  </div>
                </div>

                {/* Direct Practice Pillars */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    Core Business Practice Areas
                  </span>

                  {[
                    { id: 'business-formation', title: 'Texas LLC & Corporate Formation', time: 'Fixed Fee' },
                    { id: 'contracts-agreements', title: 'Commercial Contract Drafting & Review', time: '48h Turnaround' },
                    { id: 'outside-general-counsel', title: 'Fractional General Counsel Retainers', time: 'Priority Access' },
                    { id: 'mergers-acquisitions', title: 'Business Acquisitions & M&A Buyouts', time: 'Closing Counsel' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onNavigate('practice-area-detail', item.id)}
                      className="w-full text-left p-2.5 rounded bg-[#122B4D]/60 hover:bg-[#193863] border border-slate-800 hover:border-[#D8B252]/40 transition-all flex items-center justify-between text-xs text-slate-200 group"
                    >
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3.5 h-3.5 text-[#D8B252] group-hover:translate-x-0.5 transition-transform" />
                        <span className="font-medium text-slate-100 group-hover:text-[#D8B252]">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#D8B252] font-mono flex-shrink-0 ml-2">
                        {item.time}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Direct Consultation Schedule Callout */}
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 bg-[#7A1B28] hover:bg-[#8D2030] border border-[#66101C] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Request Strategy Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D8B252]" />
                </button>
              </div>

              {/* Bottom Assurance Bar */}
              <div className="bg-[#071324] px-6 py-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>100% Direct Attorney Representation</span>
                <span className="text-[#D8B252] font-semibold">No Junior Hand-Offs</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
