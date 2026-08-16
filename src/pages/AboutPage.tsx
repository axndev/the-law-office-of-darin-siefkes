import React from 'react';
import { Award, GraduationCap, Shield, UserCheck, CheckCircle2, ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { FIRM_INFO, PHILOSOPHY_PILLARS } from '../data/firmData';
import { PageView } from '../types';
import { AttorneyPortrait } from '../components/AttorneyPortrait';

interface AboutPageProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="bg-[#FBF9F5] text-[#1E293B]">
      {/* Page Header Hero */}
      <section className="bg-[#0C2340] text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A1B28]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#122B4D] border border-[#C29B38]/40 text-xs text-[#D8B252] font-semibold">
            <span>About The Firm & Attorney</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight">
            Dedicated Counsel for <span className="italic text-[#D8B252]">Austin Businesses</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-light max-w-3xl leading-relaxed">
            The Law Office of Darin Siefkes, PLLC provides practical, experienced legal counsel focused on protecting business owners, structuring solid foundations, and negotiating commercial transactions.
          </p>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="py-16 lg:py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Portrait & Credentials Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-stone-200">
                <div className="relative h-96 sm:h-[440px] bg-[#0C2340]">
                  <AttorneyPortrait className="w-full h-full" variant="card" showOverlay={true} />
                </div>

                <div className="p-6 space-y-4 text-xs text-slate-700">
                  <h3 className="font-serif text-base text-[#0C2340] font-medium border-b border-stone-100 pb-2">
                    Education & Credentials
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="w-4 h-4 text-[#7A1B28] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900">Baylor University School of Law</div>
                        <div className="text-slate-600">Juris Doctor (J.D.), <em>cum laude</em>, 2005</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <GraduationCap className="w-4 h-4 text-[#7A1B28] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900">Kansas State University</div>
                        <div className="text-slate-600">Master of Science (M.S.), Mass Communication, 1999</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <GraduationCap className="w-4 h-4 text-[#7A1B28] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900">Kansas State University</div>
                        <div className="text-slate-600">Bachelor of Science (B.S.), History, 1996</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 pt-2 border-t border-stone-100">
                      <Award className="w-4 h-4 text-[#7A1B28] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900">State Bar Admissions</div>
                        <div className="text-slate-600">State Bar of Texas (2005) & The Missouri Bar (2005)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Koenig Lane Office Callout */}
              <div className="bg-[#0C2340] text-white p-6 rounded-xl border border-slate-800 space-y-2 text-xs shadow-lg">
                <span className="text-[#D8B252] uppercase tracking-wider font-semibold">Austin Office Location</span>
                <p className="text-sm font-serif font-medium text-white">{FIRM_INFO.address.full}</p>
                <p className="text-slate-300">Centrally located on Koenig Lane to serve clients throughout the Austin metro area.</p>
                <div className="pt-2">
                  <a href={`tel:${FIRM_INFO.phoneRaw}`} className="text-[#D8B252] font-semibold hover:underline">
                    Direct Phone: {FIRM_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Narrative Copy */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed font-light">
              <span className="text-xs uppercase tracking-widest text-[#7A1B28] font-bold block">
                Professional Background
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#0C2340] font-normal leading-tight">
                Practical Experience Meets Business Realities
              </h2>

              <p className="text-lg text-slate-900 font-normal leading-snug">
                Darin P. Siefkes has practiced business and corporate law in Texas since 2005. His firm is built around a simple principle: small businesses and growing companies deserve the same caliber of attentive, strategic legal counsel that large corporations receive from internal general counsel.
              </p>

              <div className="space-y-4 text-sm sm:text-base text-slate-600">
                <p>
                  Prior to entering the legal profession, Darin worked across diverse commercial industries including oil field operations, media, and information technology corporations of varying scale. This real-world experience gives him firsthand insight into operational cash flow, contractor relationships, technology licensing, and commercial risk management.
                </p>
                <p>
                  After earning his Juris Doctor <em>cum laude</em> from Baylor University School of Law in 2005, Darin focused his legal career on counseling entrepreneurs, founders, small business owners, and corporate executives.
                </p>
                <p>
                  Darin's practice spans business entity formation, bespoke commercial contract drafting, federal trademark registration, franchise review, corporate mergers and acquisitions, commercial lease negotiation, and commercial dispute resolution.
                </p>
              </div>

              {/* Core Tenets */}
              <div className="pt-6 border-t border-stone-200 space-y-4">
                <h3 className="font-serif text-2xl text-[#0C2340] font-medium">Why Clients Choose Darin Siefkes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-stone-200 space-y-1 shadow-sm">
                    <div className="flex items-center space-x-2 text-[#7A1B28] font-semibold text-xs uppercase">
                      <UserCheck className="w-4 h-4" />
                      <span>Direct Attention</span>
                    </div>
                    <p className="text-xs text-slate-600">You work directly with Darin Siefkes, ensuring consistent communication and personalized strategy.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-stone-200 space-y-1 shadow-sm">
                    <div className="flex items-center space-x-2 text-[#7A1B28] font-semibold text-xs uppercase">
                      <Shield className="w-4 h-4" />
                      <span>Proactive Protection</span>
                    </div>
                    <p className="text-xs text-slate-600">We prioritize solid foundational drafting and contract terms that prevent expensive disputes.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-stone-200 space-y-1 shadow-sm">
                    <div className="flex items-center space-x-2 text-[#7A1B28] font-semibold text-xs uppercase">
                      <Briefcase className="w-4 h-4" />
                      <span>Flat-Fee Predictability</span>
                    </div>
                    <p className="text-xs text-slate-600">Transparent flat-rate options for formations, trademark filings, and contract reviews.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-stone-200 space-y-1 shadow-sm">
                    <div className="flex items-center space-x-2 text-[#7A1B28] font-semibold text-xs uppercase">
                      <MapPin className="w-4 h-4" />
                      <span>Austin Roots</span>
                    </div>
                    <p className="text-xs text-slate-600">Centrally established in Austin, understanding local commercial dynamics and Texas statutory law.</p>
                  </div>
                </div>
              </div>

              {/* Consultation Action */}
              <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-8 py-3.5 bg-[#7A1B28] hover:bg-[#8D2030] border border-[#66101C] text-white text-xs uppercase tracking-widest font-semibold rounded transition-colors text-center shadow-md"
                >
                  Schedule a Consultation
                </button>
                <button
                  onClick={() => onNavigate('practice-areas')}
                  className="px-8 py-3.5 bg-[#0C2340] hover:bg-[#122B4D] text-white text-xs uppercase tracking-widest font-semibold rounded transition-colors text-center shadow-sm"
                >
                  Explore Practice Areas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Philosophy Section */}
      <section className="py-16 lg:py-24 bg-[#F4F0E8] border-b border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#7A1B28] font-bold">Our Approach</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0C2340] font-normal">
              Outside Business Counsel Built for Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light">
              We help Austin business owners move through every phase of the commercial lifecycle with legal clarity and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm space-y-3">
                <span className="text-xs font-mono text-[#7A1B28] font-semibold">0{idx + 1}</span>
                <h3 className="font-serif text-lg text-[#0C2340] font-medium">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
