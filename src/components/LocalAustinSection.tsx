import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ArrowRight } from 'lucide-react';
import { FIRM_INFO, AUSTIN_COMMUNITY } from '../data/firmData';
import { PageView } from '../types';

interface LocalAustinSectionProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const LocalAustinSection: React.FC<LocalAustinSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#0E1726] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141F32] border border-[#C5A059]/30 text-xs text-[#C5A059]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Central Austin Practice</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
              {AUSTIN_COMMUNITY.headline}
            </h2>

            <p className="text-lg text-[#D6B36E] font-light">
              {AUSTIN_COMMUNITY.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {AUSTIN_COMMUNITY.copy}
            </p>

            {/* Austin Highlights Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {AUSTIN_COMMUNITY.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#141F32] border border-slate-700/80 rounded-lg p-4 space-y-1"
                >
                  <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-medium block">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-white block">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-wider rounded transition-colors text-center"
              >
                Schedule Austin Office Consultation
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-white text-xs uppercase tracking-wider font-semibold rounded border border-slate-600 transition-colors text-center"
              >
                View Map & Directions
              </button>
            </div>
          </div>

          {/* Right Austin Visual & Office Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#141F32] border border-slate-700 rounded-xl overflow-hidden shadow-2xl space-y-4">
              {/* Austin Skyline Image */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=1000&q=80"
                  alt="Downtown Austin Texas skyline and Lady Bird Lake"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141F32] via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3 bg-[#09101D]/90 backdrop-blur px-3 py-1 rounded text-[11px] text-white font-medium border border-slate-700">
                  Austin, TX 78756
                </div>
              </div>

              {/* Office Details */}
              <div className="p-6 pt-2 space-y-4 text-xs text-slate-300">
                <div className="space-y-1">
                  <h4 className="font-serif text-lg text-white font-medium">Koenig Lane Office</h4>
                  <p className="text-slate-400">Conveniently located in North-Central Austin with accessible parking.</p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-700/70">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">{FIRM_INFO.address.street}</div>
                      <div className="text-slate-400">{FIRM_INFO.address.city}, {FIRM_INFO.address.state} {FIRM_INFO.address.zip}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                    <div>
                      <a href={`tel:${FIRM_INFO.phoneRaw}`} className="text-white font-medium hover:text-[#C5A059] transition-colors">
                        {FIRM_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                    <div>
                      <span className="text-white">{FIRM_INFO.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=1523+W+Koenig+Ln+Austin+TX+78756"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-600 text-xs font-medium transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
