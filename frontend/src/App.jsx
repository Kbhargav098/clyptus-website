import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import ServicePillarsSection from './components/ServicePillarsSection';
import ProjectsSection from './components/ProjectsSection';
import IndustriesSection from './components/IndustriesSection';
import SolutionsWorkflowSection from './components/SolutionsWorkflowSection';
import InteractiveRoiSection from './components/InteractiveRoiSection';
import WhyClyptusSection from './components/WhyClyptusSection';
import BlogsSection from './components/BlogsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Teammate Domain Features
import RecruitmentFeature from './components/domains/recruitment/RecruitmentFeature';
import SapFeature from './components/domains/sap/SapFeature';
import AiFeature from './components/domains/ai/AiFeature';

export default function App() {
  // activeService state: null (overview), 'sap', 'recruitment', 'ai'
  const [activeService, setActiveService] = useState(null);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Dynamic Navbar */}
      <Navbar
        activeService={activeService}
        setActiveService={setActiveService}
        onOpenContact={handleOpenContact}
      />

      {/* Hero Canvas with 3D particles & dynamic headline */}
      <HeroCanvas
        activeService={activeService}
        setActiveService={setActiveService}
        onOpenContact={handleOpenContact}
      />

      {/* 3 Core Interactive Service Pillars */}
      <ServicePillarsSection
        activeService={activeService}
        setActiveService={setActiveService}
      />

      {/* Teammate Workspace Interactive Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(!activeService || activeService === 'recruitment') && (
          <RecruitmentFeature />
        )}

        {(!activeService || activeService === 'sap') && (
          <SapFeature />
        )}

        {(!activeService || activeService === 'ai') && (
          <AiFeature />
        )}
      </div>

      {/* Dynamic Projects Showcase */}
      <ProjectsSection
        activeService={activeService}
        setActiveService={setActiveService}
        onOpenContact={handleOpenContact}
      />

      {/* Dynamic Industries */}
      <IndustriesSection
        activeService={activeService}
        onOpenContact={handleOpenContact}
      />

      {/* Solutions & Execution Workflow */}
      <SolutionsWorkflowSection
        activeService={activeService}
        setActiveService={setActiveService}
        onOpenContact={handleOpenContact}
      />

      {/* Interactive Enterprise ROI Estimator */}
      <InteractiveRoiSection
        activeService={activeService}
        onOpenContact={handleOpenContact}
      />

      {/* Why Clyptus Advantage */}
      <WhyClyptusSection />

      {/* Dynamic Insights & Blogs */}
      <BlogsSection
        activeService={activeService}
        onOpenContact={handleOpenContact}
      />

      {/* Verified Client Testimonials */}
      <TestimonialsSection />

      {/* Dynamic Contact & Quote Request Form */}
      <ContactSection
        activeService={activeService}
      />

      {/* Footer */}
      <Footer
        setActiveService={setActiveService}
      />
    </div>
  );
}
