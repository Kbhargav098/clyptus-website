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

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPillar = (pillarId) => {
    setSelectedFilter(pillarId);
    const projElem = document.getElementById('projects');
    if (projElem) {
      projElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Clean Navbar */}
      <Navbar
        onOpenContact={handleOpenContact}
      />

      {/* Hero Canvas with 3D particles */}
      <HeroCanvas
        onOpenContact={handleOpenContact}
        onSelectPillar={handleSelectPillar}
      />

      {/* 3 Core Interactive Service Pillars */}
      <ServicePillarsSection
        onSelectPillar={handleSelectPillar}
        onOpenContact={handleOpenContact}
      />

      {/* Featured Projects Showcase */}
      <ProjectsSection
        activeService={selectedFilter}
        setActiveService={setSelectedFilter}
        onOpenContact={handleOpenContact}
      />

      {/* Vertical Domain Industries */}
      <IndustriesSection
        activeService={selectedFilter}
        onOpenContact={handleOpenContact}
      />

      {/* Solutions & Execution Workflow */}
      <SolutionsWorkflowSection
        onOpenContact={handleOpenContact}
      />

      {/* Interactive Enterprise ROI Estimator */}
      <InteractiveRoiSection
        onOpenContact={handleOpenContact}
      />

      {/* Why Clyptus Advantage */}
      <WhyClyptusSection />

      {/* Insights & Blogs */}
      <BlogsSection
        activeService={selectedFilter}
        onOpenContact={handleOpenContact}
      />

      {/* Verified Client Testimonials */}
      <TestimonialsSection />

      {/* Contact & Quote Request Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
