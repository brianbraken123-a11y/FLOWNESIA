/**
 * FlowNesia Kas Basic - Premium Landing Page
 * Complete, production-grade landing page for Indonesian UMKM financial recording via WhatsApp.
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Introducing } from './components/Introducing';
import { HowItWorks } from './components/HowItWorks';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { WhyFlowNesia } from './components/WhyFlowNesia';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ImageModal } from './components/ImageModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  // Modal state for screenshot lightbox
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
    caption: '',
  });

  // Modal state for Privacy Policy & Terms
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms';
  }>({
    isOpen: false,
    type: 'privacy',
  });

  const handleOpenImageModal = (imageSrc: string, title: string, caption: string) => {
    setModalState({
      isOpen: true,
      imageSrc,
      title,
      caption,
    });
  };

  const handleCloseImageModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const isAnyModalOpen = modalState.isOpen || legalModal.isOpen;

  return (
    <div className="min-h-screen bg-[#FFF9EB] text-[#182820] flex flex-col selection:bg-[#D9AE52]/30 selection:text-[#063B2D]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections (Strict Order) */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onOpenImageModal={handleOpenImageModal} />

        {/* Section 2: Problems */}
        <Problems />

        {/* Section 3: Introducing FlowNesia */}
        <Introducing />

        {/* Section 4: How It Works */}
        <HowItWorks onOpenImageModal={handleOpenImageModal} />

        {/* Section 5: Product Showcase */}
        <ProductShowcase onOpenImageModal={handleOpenImageModal} />

        {/* Section 6: Pricing */}
        <Pricing />

        {/* Section 7: Why FlowNesia? */}
        <WhyFlowNesia />

        {/* Section 8: FAQ */}
        <FaqSection />

        {/* Section 9: Final CTA */}
        <FinalCta />
      </main>

      {/* Section 10: Footer */}
      <Footer
        onOpenPrivacyModal={() => setLegalModal({ isOpen: true, type: 'privacy' })}
        onOpenTermsModal={() => setLegalModal({ isOpen: true, type: 'terms' })}
      />

      {/* Floating & Sticky WhatsApp Conversion CTA (Disabled/hidden when modal is open) */}
      <FloatingWhatsApp isModalOpen={isAnyModalOpen} />

      {/* Interactive Lightbox Modal for Screenshots */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={handleCloseImageModal}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
        caption={modalState.caption}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal((prev) => ({ ...prev, isOpen: false }))}
        type={legalModal.type}
      />
    </div>
  );
}
