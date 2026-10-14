"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SparklesIcon, CheckCircleIcon, ArrowRightIcon } from "./Icons";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  image: string;
  summary: string;
  inclusions: string[];
}

const services: ServiceItem[] = [
  {
    id: "pageant-production",
    title: "Pageant & Talent Show Direction",
    category: "Specialty",
    iconName: "crown",
    image: "/images/hero-stage.jpg",
    summary:
      "End-to-end management of beauty and cultural pageants, from franchise licensing, auditions across provinces, 30-day candidate grooming, to spectacular grand finales.",
    inclusions: [
      "Audition logistics & contestant registration portal",
      "Celebrity judge & mentor panel curation",
      "Choreographed runway ramps & music synchronization",
      "Trophies, crowns, sashes & media press conferences",
    ],
  },
  {
    id: "corporate-galas",
    title: "Corporate Summits & Brand Launches",
    category: "Corporate",
    iconName: "building",
    image: "/images/corporate-gala.jpg",
    summary:
      "Precision execution for brand reveals, corporate conferences, award ceremonies, and anniversary celebrations with seamless audiovisuals and VIP protocols.",
    inclusions: [
      "High-definition curved LED video walls & presentation switching",
      "Keynote speaker stage design & teleprompter setups",
      "VIP & dignitary protocol, security & red carpet hospitality",
      "Full digital photo/video live streaming & recap reels",
    ],
  },
  {
    id: "luxury-weddings",
    title: "Bespoke Cultural Weddings & Galas",
    category: "Private Celebrations",
    iconName: "heart",
    image: "/images/wedding-mandap.jpg",
    summary:
      "Bespoke wedding orchestration marrying time-honored Vedic/Newari rituals with royal floral architecture, live Dhime/shehnai ensembles, and immaculate guest hospitality.",
    inclusions: [
      "Sacred Mandap architecture & custom floral installations",
      "Traditional Newari or cultural live music & folk dance troupe",
      "Baraat procession management with traditional musicians",
      "Guest reception, luxury seating layout & ambient lighting",
    ],
  },
  {
    id: "stage-av",
    title: "Stage, Lighting & Concert Sound",
    category: "Technical Production",
    iconName: "sliders",
    image: "/images/hero-stage.jpg",
    summary:
      "State-of-the-art concert sound line arrays, intelligent moving head beams, haze effects, cold pyrotechnics, and custom stage trussing suited for national halls.",
    inclusions: [
      "Digital mixing consoles & tuned line array speakers",
      "DMX-controlled moving head beam, spot & wash fixtures",
      "Cold spark fountains, low-fog clouds & CO2 jet effects",
      "On-site certified audio and lighting engineers",
    ],
  },
  {
    id: "cultural-shows",
    title: "Folk Ensembles & Cultural Showcases",
    category: "Heritage",
    iconName: "music",
    image: "/images/dhime-baja.jpg",
    summary:
      "Curating authentic Nepali cultural entertainment featuring synchronized Dhime drummers, Lakhey dancers, Madal rhythms, and traditional living arts.",
    inclusions: [
      "Misa Dhime Baja percussionists & grand drum ensembles",
      "Traditional Lakhey & Pulukisi masked dances",
      "Folk orchestra featuring Madal, Sarangi, Flute & Dhimay",
      "Cultural storytelling & bilingual master of ceremonies",
    ],
  },
  {
    id: "grooming-academy",
    title: "Personality & Runway Bootcamps",
    category: "Training",
    iconName: "star",
    image: "/images/kids-pageant.jpg",
    summary:
      "Dedicated talent coaching for aspiring models, children, and youth. Covering posture, speech articulation, runway poise, etiquette, and overcoming camera anxiety.",
    inclusions: [
      "Certified trainers with over a decade of industry mentorship",
      "Studio photoshoots with professional lookbooks",
      "Public speaking & mock television interviews",
      "Personal branding & social media etiquette",
    ],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceItem>(services[0]);

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#f8faf8] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
            <SparklesIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Turnkey Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Full-Spectrum Event Management &amp; Production
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From national pageants at Rastriya Nachghar to executive corporate summits and traditional weddings, Kalash Events brings turnkey excellence to every milestone.
          </p>
        </div>

        {/* Interactive Service Spotlight + List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Service Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs uppercase tracking-widest text-emerald-800 font-bold px-2">
              Select A Service Dimension
            </p>
            {services.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveService(item)}
                className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between border cursor-pointer ${
                  activeService.id === item.id
                    ? "bg-emerald-800 border-emerald-900 shadow-md translate-x-1 text-white"
                    : "bg-white border-slate-200/90 hover:bg-slate-50 hover:border-emerald-300 text-slate-800 shadow-sm"
                }`}
              >
                <div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block ${
                      activeService.id === item.id ? "text-emerald-200" : "text-emerald-700"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span
                    className={`text-sm sm:text-base font-bold block mt-0.5 ${
                      activeService.id === item.id ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                <ArrowRightIcon
                  className={`w-4 h-4 transition-transform ${
                    activeService.id === item.id ? "text-emerald-200 translate-x-1" : "text-slate-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Column: Active Service Featured Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6">
              
              {/* Media Banner */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white shadow-sm">
                    {activeService.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeService.summary}
              </p>

              {/* Inclusions List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  What We Deliver:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.inclusions.map((inc, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action bar */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-600">
                  <span>Venue Ready: </span>
                  <strong className="text-slate-900">Rastriya Nachghar, Soltee, Hyatt, Open Grounds</strong>
                </div>

                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 hover:scale-105 transition-all shadow-md shadow-emerald-900/15"
                >
                  <SparklesIcon className="w-4 h-4 text-emerald-200" />
                  <span>Estimate Budget For This</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
