import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Search, Menu, X, ChevronDown, Shield, ArrowRight } from 'lucide-react';
import { FIRM_INFO, PRACTICE_AREAS } from '../data/firmData';
import { PageView } from '../types';
import { FirmLogo } from './FirmLogo';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView, param?: string) => void;
  onOpenConsultation: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageView, param?: string) => {
    onNavigate(page, param);
    setMobileMenuOpen(false);
    setPracticeDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar with classic crimson accent banner */}
      <div className="bg-[#7A1B28] text-slate-100 text-xs py-2 px-4 border-b border-[#66101C] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-stone-100 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#D8B252] mr-1.5" />
              {FIRM_INFO.address.full}
            </span>
            <span className="text-red-300/60">|</span>
            <span className="text-stone-200">Austin Business, Corporate & Transactional Law</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${FIRM_INFO.phoneRaw}`}
              className="flex items-center text-white hover:text-[#D8B252] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#D8B252] mr-1.5" />
              {FIRM_INFO.phone}
            </a>
            <span className="text-red-300/60">|</span>
            <span className="text-stone-200">Mon–Fri 8:30 AM – 5:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0C2340]/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3.5'
            : 'bg-[#0C2340] border-b border-slate-800/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Authentic Brand Logo */}
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none focus:ring-2 focus:ring-[#C29B38]/50 rounded-sm"
              aria-label="The Law Office of Darin Siefkes - Home"
            >
              <FirmLogo variant="light" size="md" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <button
                onClick={() => handleNav('home')}
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  currentPage === 'home'
                    ? 'text-[#D8B252] font-semibold bg-slate-800/40'
                    : 'text-slate-200 hover:text-[#D8B252] hover:bg-slate-800/30'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNav('about')}
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  currentPage === 'about'
                    ? 'text-[#D8B252] font-semibold bg-slate-800/40'
                    : 'text-slate-200 hover:text-[#D8B252] hover:bg-slate-800/30'
                }`}
              >
                About
              </button>

              {/* Practice Areas with Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPracticeDropdownOpen(true)}
                onMouseLeave={() => setPracticeDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNav('practice-areas')}
                  className={`px-3.5 py-2 text-sm font-medium rounded transition-colors inline-flex items-center space-x-1 ${
                    currentPage === 'practice-areas' || currentPage === 'practice-area-detail'
                      ? 'text-[#D8B252] font-semibold bg-slate-800/40'
                      : 'text-slate-200 hover:text-[#D8B252] hover:bg-slate-800/30'
                  }`}
                >
                  <span>Practice Areas</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${practiceDropdownOpen ? 'rotate-180 text-[#D8B252]' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                {practiceDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-[#0C2340] border border-slate-700 rounded-lg shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-slate-700/80 flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D8B252]">
                        Core Business Counsel
                      </span>
                      <button
                        onClick={() => handleNav('practice-areas')}
                        className="text-xs text-slate-300 hover:text-white flex items-center"
                      >
                        View All <ArrowRight className="w-3 h-3 ml-1 text-[#D8B252]" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-0.5 py-1">
                      {PRACTICE_AREAS.slice(0, 7).map((area) => (
                        <button
                          key={area.id}
                          onClick={() => handleNav('practice-area-detail', area.id)}
                          className="w-full text-left px-3 py-2 rounded text-xs text-slate-200 hover:bg-[#122B4D] hover:text-[#D8B252] transition-colors flex items-center justify-between group"
                        >
                          <span className="font-medium group-hover:translate-x-0.5 transition-transform">
                            {area.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {area.number}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="p-2 border-t border-slate-700/80 bg-[#071324]/60 rounded-b-md">
                      <button
                        onClick={() => handleNav('entity-guide')}
                        className="w-full text-center text-xs text-[#D8B252] font-semibold hover:underline py-1"
                      >
                        Interactive Texas Entity Selector &rarr;
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNav('resources')}
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  currentPage === 'resources' || currentPage === 'resource-detail'
                    ? 'text-[#D8B252] font-semibold bg-slate-800/40'
                    : 'text-slate-200 hover:text-[#D8B252] hover:bg-slate-800/30'
                }`}
              >
                Resources
              </button>

              <button
                onClick={() => handleNav('contact')}
                className={`px-3.5 py-2 text-sm font-medium rounded transition-colors ${
                  currentPage === 'contact'
                    ? 'text-[#D8B252] font-semibold bg-slate-800/40'
                    : 'text-slate-200 hover:text-[#D8B252] hover:bg-slate-800/30'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Right CTAs and Search */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={onOpenSearch}
                aria-label="Search practice areas and resources"
                className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors focus:outline-none"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7A1B28] hover:bg-[#8D2030] border border-[#66101C] rounded transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none"
              >
                Schedule a Consultation
              </button>
            </div>

            {/* Mobile Menu & Search triggers */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 text-slate-300 hover:text-white focus:outline-none"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 text-slate-300 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#071324]/98 backdrop-blur-xl flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <FirmLogo variant="light" size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => handleNav('home')}
                className={`text-left text-lg py-2 px-3 rounded font-serif ${
                  currentPage === 'home' ? 'text-[#D8B252] bg-slate-800/60' : 'text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNav('about')}
                className={`text-left text-lg py-2 px-3 rounded font-serif ${
                  currentPage === 'about' ? 'text-[#D8B252] bg-slate-800/60' : 'text-white'
                }`}
              >
                About the Attorney
              </button>
              <button
                onClick={() => handleNav('practice-areas')}
                className={`text-left text-lg py-2 px-3 rounded font-serif ${
                  currentPage === 'practice-areas' ? 'text-[#D8B252] bg-slate-800/60' : 'text-white'
                }`}
              >
                Practice Areas
              </button>
              <div className="pl-4 border-l border-slate-800 space-y-1">
                {PRACTICE_AREAS.slice(0, 5).map((area) => (
                  <button
                    key={area.id}
                    onClick={() => handleNav('practice-area-detail', area.id)}
                    className="block text-left text-sm text-slate-300 hover:text-[#D8B252] py-1"
                  >
                    {area.title}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleNav('entity-guide')}
                className="text-left text-base py-2 px-3 text-[#D8B252] font-semibold"
              >
                Texas Entity Selection Tool &rarr;
              </button>
              <button
                onClick={() => handleNav('resources')}
                className={`text-left text-lg py-2 px-3 rounded font-serif ${
                  currentPage === 'resources' ? 'text-[#D8B252] bg-slate-800/60' : 'text-white'
                }`}
              >
                Business Law Resources
              </button>
              <button
                onClick={() => handleNav('contact')}
                className={`text-left text-lg py-2 px-3 rounded font-serif ${
                  currentPage === 'contact' ? 'text-[#D8B252] bg-slate-800/60' : 'text-white'
                }`}
              >
                Contact & Office
              </button>
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-[#7A1B28] hover:bg-[#8D2030] rounded shadow-lg"
            >
              Schedule a Consultation
            </button>
            <div className="text-center text-xs text-slate-400">
              <a href={`tel:${FIRM_INFO.phoneRaw}`} className="text-white font-medium hover:text-[#D8B252]">
                Direct: {FIRM_INFO.phone}
              </a>
              <p className="mt-1 text-slate-400">{FIRM_INFO.address.full}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
