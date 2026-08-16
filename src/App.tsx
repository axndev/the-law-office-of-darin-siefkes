import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SearchModal } from './components/SearchModal';
import { QuickActionDock } from './components/QuickActionDock';

// Homepage Sections
import { HeroSection } from './components/HeroSection';
import { TheBoutiqueDifference } from './components/TheBoutiqueDifference';
import { FeeCalculatorSection } from './components/FeeCalculatorSection';
import { PracticeAreasGrid } from './components/PracticeAreasGrid';
import { LegalRiskAudit } from './components/LegalRiskAudit';
import { DealExperienceSection } from './components/DealExperienceSection';
import { AboutDarinSection } from './components/AboutDarinSection';
import { LocalAustinSection } from './components/LocalAustinSection';
import { ResourcesPreviewSection } from './components/ResourcesPreviewSection';
import { ConsultationCTASection } from './components/ConsultationCTASection';
import { ContactSection } from './components/ContactSection';

// Inner Pages
import { AboutPage } from './pages/AboutPage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { PracticeAreaDetailPage } from './pages/PracticeAreaDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { ContactPage } from './pages/ContactPage';
import { EntityComparisonTool } from './pages/EntityComparisonTool';

import { PageView } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>('business-formation');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('contract-review-guide');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  const handleNavigate = (page: PageView, param?: string) => {
    setCurrentPage(page);
    if (page === 'practice-area-detail' && param) {
      setSelectedPracticeId(param);
    }
    if (page === 'resource-detail' && param) {
      setSelectedArticleId(param);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E293B] pb-16 sm:pb-0">
      {/* Sticky Header with Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* 1. High-Impact Hero with Instant Matter Selector */}
            <HeroSection
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 2. Transparent Pricing & Service Packages */}
            <FeeCalculatorSection
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* 3. The Boutique Advantage vs BigLaw */}
            <TheBoutiqueDifference
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 4. Core Practice Areas */}
            <PracticeAreasGrid
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 5. Interactive Texas Legal Health Diagnostic */}
            <LegalRiskAudit
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 6. Real Deal Experience & Representative Matters */}
            <DealExperienceSection
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* 7. About Attorney Darin Siefkes */}
            <AboutDarinSection
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 8. Local Austin Connection */}
            <LocalAustinSection
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 9. Guides & Legal Resources */}
            <ResourcesPreviewSection onNavigate={handleNavigate} />

            {/* 10. Consultation Closing Section */}
            <ConsultationCTASection
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />

            {/* 11. Direct Contact & Office Section */}
            <ContactSection />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="animate-in fade-in duration-300">
            <AboutPage
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />
          </div>
        )}

        {currentPage === 'practice-areas' && (
          <div className="animate-in fade-in duration-300">
            <PracticeAreasPage
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />
          </div>
        )}

        {currentPage === 'practice-area-detail' && (
          <div className="animate-in fade-in duration-300">
            <PracticeAreaDetailPage
              practiceId={selectedPracticeId}
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />
          </div>
        )}

        {currentPage === 'resources' && (
          <div className="animate-in fade-in duration-300">
            <ResourcesPage
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />
          </div>
        )}

        {currentPage === 'resource-detail' && (
          <div className="animate-in fade-in duration-300">
            <ResourceDetailPage
              articleId={selectedArticleId}
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />
          </div>
        )}

        {currentPage === 'entity-tool' && (
          <div className="animate-in fade-in duration-300">
            <EntityComparisonTool
              onNavigate={handleNavigate}
              onOpenConsultation={() => setIsConsultationModalOpen(true)}
            />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="animate-in fade-in duration-300">
            <ContactPage onOpenConsultation={() => setIsConsultationModalOpen(true)} />
          </div>
        )}
      </main>

      {/* Persistent Quick Action Call & Booking Dock */}
      <QuickActionDock
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Site-Wide Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
      />

      {/* Consultation Scheduling Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      {/* Site-Wide Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
