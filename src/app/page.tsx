import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FlagshipPrograms from "@/components/FlagshipPrograms";
import VideoShowcase from "@/components/VideoShowcase";
import ServicesSection from "@/components/ServicesSection";
import BudgetCalculator from "@/components/BudgetCalculator";
import InteractiveGallery from "@/components/InteractiveGallery";
import FacebookUpdates from "@/components/FacebookUpdates";
import RegistrationPortal from "@/components/RegistrationPortal";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9] text-slate-900 selection:bg-emerald-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <FlagshipPrograms />
        <VideoShowcase />
        <ServicesSection />
        <BudgetCalculator />
        <InteractiveGallery />
        <FacebookUpdates />
        <RegistrationPortal />
        <Testimonials />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
