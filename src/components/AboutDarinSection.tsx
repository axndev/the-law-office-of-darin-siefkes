import React from 'react';
import { Award, BookOpen, GraduationCap, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import { PageView } from '../types';
import { AttorneyPortrait } from './AttorneyPortrait';

interface AboutDarinSectionProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const AboutDarinSection: React.FC<AboutDarinSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F0E8] text-[#1E293B] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Credentials Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold accent */}
              <div className="absolute -inset-2 rounded-2xl border-2 border-[#C29B38]/50 translate-x-2 translate-y-2 pointer-events-none hidden sm:block"></div>

              {/* Main Attorney Presentation Card */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl border border-stone-200">
                {/* Attorney Portrait Area */}
                <div className="relative h-96 sm:h-[420px] bg-[#0C2340] overflow-hidden">
                  <AttorneyPortrait className="w-full h-full" variant="card" showOverlay={true} />
                </div>

                {/* Verified Credentials Quick Summary */}
                <div className="p-6 bg-white space-y-3 text-xs text-slate-700">
                  <div className="flex items-start space-x-2.5">
                    <GraduationCap className="w-4 h-4 text-[#7A1B28] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Baylor Law School:</strong> J.D., <em>cum laude</em> (2005)
                    </div>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Award className="w-4 h-4 text-[#7A1B28] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">State Bar Admissions:</strong> Texas (2005) & Missouri (2005)
                    </div>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Shield className="w-4 h-4 text-[#7A1B28] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Industry Background:</strong> Information Technology, Media & Energy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#7A1B28]/10 border border-[#7A1B28]/20 text-xs text-[#7A1B28] font-semibold uppercase tracking-wider">
              <span>Austin Business Attorney Profile</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0C2340] font-normal leading-tight">
              Meet Darin Siefkes
            </h2>

            <p className="text-lg text-slate-800 font-normal leading-snug">
              An Austin business attorney focused on helping business owners, founders, and companies protect, operate, and grow their enterprises with clarity.
            </p>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-light">
              <p>
                Darin founded The Law Office of Darin Siefkes, PLLC to deliver experienced legal representation grounded in real-world commercial realities. Before attending Baylor Law School—where he graduated <em>cum laude</em> in 2005—Darin spent years working across diverse commercial sectors including media, oil field operations, and both emerging and established IT corporations.
              </p>
              <p>
                This practical corporate and industry background allows Darin to understand the daily operational, financial, and strategic challenges business owners face. When reviewing a contract or structuring an acquisition, his counsel is never theoretical—it is structured to protect your enterprise and move deals forward.
              </p>
              <p>
                As your outside business counsel, Darin provides direct, responsive attorney access. You will always work with Darin personally, benefiting from continuity of counsel throughout your company’s lifespan.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-7 py-3.5 bg-[#0C2340] hover:bg-[#122B4D] text-white text-xs uppercase tracking-widest font-semibold rounded transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Learn More About Darin</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8B252]" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-[#7A1B28] hover:bg-[#8D2030] text-white border border-[#66101C] text-xs uppercase tracking-widest font-semibold rounded transition-colors text-center shadow-md"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
