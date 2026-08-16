import React from 'react';
import { ArrowRight, Phone, Shield } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import { PageView } from '../types';

interface ConsultationCTASectionProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const ConsultationCTASection: React.FC<ConsultationCTASectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#09101D] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle gold decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#141F32] border border-[#C5A059]/30 text-xs text-[#C5A059]">
          <Shield className="w-3.5 h-3.5" />
          <span>Austin, Texas &bull; Outside Business Counsel</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
          Protect What You've Built. <span className="italic text-[#D6B36E]">Plan for What's Next.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          Whether you're starting a business, negotiating an agreement, acquiring a company, or facing a business dispute, experienced legal counsel can help you make informed decisions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-widest rounded transition-all duration-200 shadow-xl flex items-center justify-center space-x-2"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-[#141F32] hover:bg-[#1C2B44] text-slate-200 hover:text-white border border-slate-700 text-xs uppercase tracking-widest font-medium rounded transition-all duration-200"
          >
            Contact the Office
          </button>
        </div>

        <div className="pt-6 text-xs text-slate-400">
          Direct Phone: <a href={`tel:${FIRM_INFO.phoneRaw}`} className="text-white hover:text-[#C5A059] font-medium">{FIRM_INFO.phone}</a> &bull; {FIRM_INFO.address.full}
        </div>
      </div>
    </section>
  );
};
