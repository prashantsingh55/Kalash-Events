"use client";

import React from "react";
import Image from "next/image";
import { KalashPotIcon, ShieldCheckIcon, TrophyIcon, SparklesIcon, CheckCircleIcon } from "./Icons";

export default function AboutSection() {
  const pillars = [
    {
      title: "Cultural Heritage Preservation",
      desc: "Championing indigenous Nepal Bhasa, Ranjana lipi traditions, traditional Newari attire (Haku Patasi), and time-honored rituals for the next generation.",
      icon: KalashPotIcon,
    },
    {
      title: "Holistic Youth Grooming",
      desc: "Transformative 30-day bootcamps focusing on stage ramp walk, public speaking, poise, self-esteem, table etiquette, and camera presence.",
      icon: SparklesIcon,
    },
    {
      title: "Celebrated Musical Legacies",
      desc: "Promoting living heritage through landmark competitions like the Misa Dhime Baja and Badhya Samrat Junior Beat Master Madal contests.",
      icon: TrophyIcon,
    },
    {
      title: "Turnkey Event Management",
      desc: "End-to-end concert-grade audio-visuals, stage architecture, VIP protocol, and media coverage across prominent venues in Nepal.",
      icon: ShieldCheckIcon,
    },
  ];

  const highlights = [
    "Directed by visionary Executive Chairperson Sanjay Maharjan",
    "Official stage partner for Rastriya Nachghar (National Theatre), Jamal",
    "Bespoke choreography and personality mentoring by industry legends",
    "Thousands of proud parents and alumni across Nepal and worldwide",
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80">
      {/* Background Subtle Ambient Lights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
            <KalashPotIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Our Heritage &amp; Legacy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Pioneering Cultural Pride &amp; Youth Excellence in Nepal
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Kalash Events Pvt. Ltd. was founded with a singular conviction: to empower youth with modern stage confidence while anchoring them deeply in Nepal&apos;s rich cultural heritage.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Images Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl h-80 sm:h-96">
              <Image
                src="/images/newa-pageant-real.jpg"
                alt="Newa: Maicha Baucha Grand Finale Showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-emerald-500/30">
                  Newa: Maicha Baucha Heritage Showcase
                </span>
                <p className="text-white text-sm font-semibold mt-1.5">
                  Inspiring younger generations to embrace their cultural identity with dignity.
                </p>
              </div>
            </div>

            {/* Inset Second Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 w-52 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/misa-dhime-real.jpg"
                alt="Misa Dhime Baja Women Percussionists"
                fill
                sizes="208px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="text-[10px] font-bold text-emerald-200 bg-slate-950/90 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  Misa Dhime Baja
                </span>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Behind The Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 leading-snug">
                Where Tradition Meets the Grand Stage
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Led by <strong className="text-emerald-800 font-semibold">Executive Chairperson Sanjay Maharjan</strong>, Kalash Events has become a household name across Kathmandu Valley and Nepal. We have redefined children&apos;s pageantry—moving away from superficial beauty contests toward substantive personality development, cultural literacy, public articulation, and community leadership.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether creating historical cultural milestones like the <strong className="text-emerald-800 font-semibold">Misa Dhime Baja</strong> (empowering female percussionists to command the sacred Newar drums) or organizing high-stakes corporate launches, our team brings relentless precision, artistic finesse, and heartfelt hospitality.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Sanjay Maharjan direct CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-md shadow-emerald-900/15"
              >
                <span>Connect With Leadership</span>
              </a>
              <span className="text-xs text-slate-600">
                Direct Inquiries: <strong className="text-slate-950">+977 9841436874</strong>
              </span>
            </div>
          </div>

        </div>

        {/* Four Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fafbfc] hover:bg-white border border-slate-200/90 hover:border-emerald-300 shadow-sm hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-950">{pillar.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
