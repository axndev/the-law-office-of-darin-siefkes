import React from 'react';
import { Phone, Mail, MapPin, Printer, Shield, ArrowUp, ArrowRight } from 'lucide-react';
import { FIRM_INFO, PRACTICE_AREAS } from '../data/firmData';
import { PageView } from '../types';
import { FirmLogo } from './FirmLogo';

interface FooterProps {
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09101D] text-slate-300 border-t border-slate-800">
      {/* Top CTA Banner inside footer */}
      <div className="border-b border-slate-800/80 bg-[#0E1726]/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium block mb-1">
              Austin, Texas &bull; Business Law Practice
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
              Ready to discuss legal counsel for your company?
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              From business formations and contract reviews to commercial transactions and dispute resolution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={`tel:${FIRM_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-200 border border-slate-700 hover:border-[#C5A059] hover:text-white rounded transition-colors text-center inline-flex items-center justify-center"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
              Call {FIRM_INFO.phone}
            </a>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0E1726] bg-[#C5A059] hover:bg-[#D6B36E] rounded transition-colors text-center font-medium shadow-md"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="mb-2">
              <FirmLogo variant="light" size="md" />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-6 font-light">
              Practical, experienced legal counsel for Austin small businesses, founders, and companies. Dedicated outside business counsel focused on protection, operational clarity, and proactive legal foundations.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D8B252] flex-shrink-0 mt-0.5" />
                <span>{FIRM_INFO.address.full}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D8B252] flex-shrink-0" />
                <a href={`tel:${FIRM_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {FIRM_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Printer className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span className="text-slate-400">Fax: {FIRM_INFO.fax}</span>
              </div>
            </div>
          </div>

          {/* Practice Areas Column 1 */}
          <div>
            <h5 className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] mb-4">
              Core Practice Areas
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {PRACTICE_AREAS.slice(0, 5).map((area) => (
                <li key={area.id}>
                  <button
                    onClick={() => {
                      onNavigate('practice-area-detail', area.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#C5A059] text-left transition-colors flex items-center group"
                  >
                    <span className="text-[10px] text-slate-500 font-mono mr-1.5">{area.number}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{area.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas Column 2 */}
          <div>
            <h5 className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] mb-4">
              Transactions & Growth
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {PRACTICE_AREAS.slice(5).map((area) => (
                <li key={area.id}>
                  <button
                    onClick={() => {
                      onNavigate('practice-area-detail', area.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#C5A059] text-left transition-colors flex items-center group"
                  >
                    <span className="text-[10px] text-slate-500 font-mono mr-1.5">{area.number}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{area.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('entity-guide');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#D6B36E] hover:underline text-left inline-flex items-center"
                >
                  Texas Entity Matrix <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </li>
            </ul>
          </div>

          {/* Firm & Navigation Column */}
          <div>
            <h5 className="text-xs uppercase tracking-widest font-semibold text-[#C5A059] mb-4">
              Navigation & Info
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  About Darin Siefkes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  All Practice Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('resources');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Business Law Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Contact & Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="bg-[#141F32]/60 rounded border border-slate-800 p-4 text-xs text-slate-400 leading-relaxed">
            <p className="font-semibold text-slate-300 mb-1 flex items-center">
              <Shield className="w-3.5 h-3.5 text-[#C5A059] mr-1.5" />
              Legal Disclaimer & Notice:
            </p>
            <p>
              This website is designed for general information only. The information presented at this site should not be construed as formal legal advice nor the formation of a lawyer/client relationship. Persons accessing this site should not act upon this information without seeking professional legal counsel. Submitting a contact form, email, or message does not create an attorney-client relationship.
            </p>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {FIRM_INFO.legalName}. All rights reserved. Austin, Texas.
          </div>
          <div className="flex items-center space-x-6">
            <span>Licensed by the State Bar of Texas</span>
            <button
              onClick={scrollToTop}
              className="flex items-center text-slate-400 hover:text-[#C5A059] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
