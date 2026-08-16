import React from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight, Shield, HelpCircle, Phone, Calendar, Sparkles } from 'lucide-react';
import { PRACTICE_AREAS, FIRM_INFO } from '../data/firmData';
import { PageView } from '../types';

interface PracticeAreaDetailPageProps {
  areaId: string;
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const PracticeAreaDetailPage: React.FC<PracticeAreaDetailPageProps> = ({
  areaId,
  onNavigate,
  onOpenConsultation,
}) => {
  const currentArea = PRACTICE_AREAS.find((a) => a.id === areaId) || PRACTICE_AREAS[0];
  const otherAreas = PRACTICE_AREAS.filter((a) => a.id !== currentArea.id).slice(0, 3);

  return (
    <div className="bg-[#FBF9F5] text-[#1E293B]">
      {/* Hero Banner */}
      <section className="bg-[#0E1726] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <button
            onClick={() => onNavigate('practice-areas')}
            className="inline-flex items-center text-xs uppercase tracking-widest text-[#C5A059] hover:text-[#D6B36E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to All Practice Areas</span>
          </button>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-sm px-2.5 py-1 rounded bg-[#141F32] border border-[#C5A059]/40 text-[#C5A059] font-semibold">
                Area {currentArea.number}
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-400">
                Austin Business Law Counsel
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-tight">
              {currentArea.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
              {currentArea.shortDescription}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-md text-center"
            >
              Consult On This Matter
            </button>
            <a
              href={`tel:${FIRM_INFO.phoneRaw}`}
              className="px-8 py-3.5 bg-[#141F32] hover:bg-[#1C2B44] text-slate-200 hover:text-white border border-slate-700 text-xs uppercase tracking-widest font-medium rounded transition-all text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Direct Phone: {FIRM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0E1726] font-medium">
                Practice Overview
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-light">
                {currentArea.overview}
              </p>
            </div>

            {/* What The Firm Helps With */}
            <div className="space-y-6 bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B38E45]">
                  Comprehensive Scope
                </span>
                <h3 className="text-2xl font-serif text-[#0E1726] font-medium">
                  What The Firm Helps With
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {currentArea.whatWeHelpWith.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded bg-[#FBF9F5] border border-stone-100">
                    <CheckCircle2 className="w-4 h-4 text-[#B38E45] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-800 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Considerations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-[#0E1726] font-medium">
                Strategic Considerations for Business Owners
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentArea.keyConsiderations.map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm space-y-2">
                    <div className="text-xs font-mono text-[#B38E45]">Consideration 0{idx + 1}</div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Real-World Scenarios */}
            <div className="space-y-6 bg-[#F3EFE6] p-8 rounded-xl border border-stone-200">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B38E45]">
                  Real-World Client Context
                </span>
                <h3 className="text-2xl font-serif text-[#0E1726] font-medium">
                  Common Commercial Scenarios
                </h3>
              </div>

              <div className="space-y-3">
                {currentArea.commonScenarios.map((scenario, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-lg border border-stone-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start space-x-3">
                    <span className="text-xs font-bold text-[#B38E45] mt-0.5">#{idx + 1}</span>
                    <span>{scenario}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs for this practice area */}
            {currentArea.faqs.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#0E1726] font-medium">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {currentArea.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg border border-stone-200 space-y-2">
                      <h4 className="font-serif text-lg text-[#0E1726] font-medium flex items-start">
                        <HelpCircle className="w-4 h-4 text-[#B38E45] mr-2 flex-shrink-0 mt-1" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            {/* Direct Consultation Box */}
            <div className="bg-[#0E1726] text-white p-6 sm:p-7 rounded-xl border border-slate-800 space-y-4 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block">
                Direct Legal Counsel
              </span>
              <h4 className="font-serif text-xl text-white font-medium">
                Discuss Your {currentArea.title} Needs
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with attorney Darin Siefkes to evaluate your options, draft enforceable agreements, or protect your enterprise.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-300 border-t border-slate-700/80">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <a href={`tel:${FIRM_INFO.phoneRaw}`} className="hover:text-white font-medium">
                    {FIRM_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Mon–Fri 8:30 AM – 5:30 PM</span>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-wider rounded transition-colors text-center shadow-md"
              >
                Schedule a Consultation
              </button>
            </div>

            {/* Related Practice Areas */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
              <h4 className="font-serif text-lg text-[#0E1726] font-medium border-b border-stone-100 pb-2">
                Related Practice Areas
              </h4>
              <div className="space-y-2">
                {otherAreas.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => {
                      onNavigate('practice-area-detail', rel.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left p-3 rounded hover:bg-[#F3EFE6] transition-colors flex items-center justify-between group text-xs text-slate-800"
                  >
                    <span className="font-medium group-hover:text-[#B38E45]">{rel.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#B38E45] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
