import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedStats } from './components/FeaturedStats';
import { MeetMentors } from './components/MeetMentors';
import { ServicesGrid } from './components/ServicesGrid';
import { TransformationTimeline } from './components/TransformationTimeline';
import { StudentSuccessProof } from './components/StudentSuccessProof';
import { VideoReels } from './components/VideoReels';
import { PackagesPricing } from './components/PackagesPricing';
import { IncomeCalculator } from './components/IncomeCalculator';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

import { MobileBottomBar } from './components/MobileBottomBar';
import { StickyCtaBar } from './components/StickyCtaBar';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('growth');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleOpenBooking = (packageId?: string) => {
    if (packageId) {
      setSelectedPackageId(packageId);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#F8FAFC] text-slate-900'}`}>
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      {/* Sticky Desktop CTA bar after 40% scroll */}
      <StickyCtaBar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Featured Success Numbers */}
        <FeaturedStats />

        {/* Meet Mentors (Sanchit Puri & Syed Husna Ali) */}
        <MeetMentors onOpenBooking={() => handleOpenBooking()} />

        {/* Services Grid */}
        <ServicesGrid onOpenBooking={() => handleOpenBooking()} />

        {/* Packages & Pricing */}
        <PackagesPricing onOpenBooking={handleOpenBooking} />

        {/* Transformation Process */}
        <TransformationTimeline onOpenBooking={() => handleOpenBooking()} />

        {/* Real Student Success & Screenshot Proof */}
        <StudentSuccessProof />

        {/* Video Reels Feedbacks */}
        <VideoReels />


        {/* Interactive Income Calculator */}
        <IncomeCalculator onOpenBooking={() => handleOpenBooking()} />

        {/* Photo Gallery */}
        <GallerySection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Popups & Floating Widgets */}
      <ConsultationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedPackageId={selectedPackageId}
      />

  
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

    </div>
  );
}

