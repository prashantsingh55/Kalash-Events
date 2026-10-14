"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SparklesIcon, CrownIcon, ArrowRightIcon, WhatsAppIcon, AwardIcon, BuildingIcon } from "./Icons";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"pageants" | "corporate">("pageants");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-8 pb-16 lg:py-20 bg-[#fcfcfb]">
      {/* Background Hero Image with Crisp Light Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-stage.jpg"
          alt="Kalash Events Stage Production"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-10 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/95 to-[#fcfcfb]"></div>
        {/* Decorative Subtle Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Highlights, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>2025/2026 Audition Registrations Open</span>
              <span className="text-emerald-400 font-bold">•</span>
              <span className="text-emerald-700">Kathmandu, Nepal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Preserving <span className="gold-gradient-text">Heritage</span>, Grooming <span className="emerald-gradient-text">Champions</span> &amp; Staging Grand Celebrations.
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Welcome to <strong className="text-slate-900 font-semibold">Kalash Events Pvt. Ltd.</strong>, Nepal&apos;s celebrated powerhouse for cultural pageantry, kids &amp; youth grooming, traditional percussion championships (<em className="text-emerald-800 not-italic font-semibold">Newa: Maicha Baucha, Little Miss Angel Nepal, Misa Dhime Baja</em>), and premier corporate gala productions.
            </p>

            {/* Interactive Tab Switcher for Quick Intent - Replaced emojis with clean SVG icons */}
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setActiveTab("pageants")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "pageants"
                    ? "bg-emerald-700 text-white shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <AwardIcon className="w-4 h-4 text-current" />
                <span>Cultural &amp; Youth Pageants</span>
              </button>
              <button
                onClick={() => setActiveTab("corporate")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "corporate"
                    ? "bg-emerald-700 text-white shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <BuildingIcon className="w-4 h-4 text-current" />
                <span>Corporate Galas &amp; Weddings</span>
              </button>
            </div>

            {/* Dynamic Intent Box based on Active Tab */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-left max-w-xl mx-auto lg:mx-0">
              {activeTab === "pageants" ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <CrownIcon className="w-4 h-4 text-emerald-600" />
                    <span>Next Audition: Newa: Maicha Baucha &amp; Little Miss Angel Nepal</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comprehensive personality development, public speaking, ramp-walk choreography, and Newari cultural preservation for boys and girls ages 7–14.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <SparklesIcon className="w-4 h-4 text-emerald-600" />
                    <span>Full-Service Event &amp; Stage Production</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    From Rastriya Nachghar to 5-star hotel ballrooms: intelligent stage lighting, LED video backdrops, concert sound arrays, and VIP protocol coordination.
                  </p>
                </div>
              )}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#registration"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 shadow-lg shadow-emerald-900/15 hover:shadow-emerald-900/30 hover:scale-105 active:scale-95 transition-all text-base"
              >
                <SparklesIcon className="w-5 h-5 text-emerald-200" />
                <span>Register Contestant / Inquire</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-emerald-600 hover:text-emerald-800 shadow-sm transition-all text-base"
              >
                <span>Budget Estimator</span>
              </a>

              <a
                href="https://wa.me/9779841436874?text=Hello%20Kalash%20Events,%20I%20would%20like%20to%20discuss%20an%20event%20or%20audition."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-4 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 transition-all shadow-sm"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Indicator Footnotes */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Official Facebook Verified Presence
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Directed by Sanjay Maharjan
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Headquartered in Kathmandu
              </span>
            </div>
          </div>

          {/* Right Column: Prominent Logo Visual & Card Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-200 via-amber-200 to-emerald-300 rounded-3xl blur-lg opacity-40"></div>

              {/* Central Card */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center space-y-6">
                
                {/* Official Profile Logo Display */}
                <div className="relative mx-auto w-44 h-44 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-emerald-600/30 shadow-md group">
                  <Image
                    src="/kalash-logo.jpg"
                    alt="Official Kalash Events Profile Logo"
                    fill
                    priority
                    sizes="(max-width: 640px) 176px, 224px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <span className="text-[11px] font-bold text-white bg-slate-950/70 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/20">
                      Official Brand Mark
                    </span>
                  </div>
                </div>

                {/* Company Name & Badge */}
                <div>
                  <h3 className="text-2xl font-black text-slate-950 tracking-wide">
                    KALASH EVENTS
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-emerald-700 font-bold mt-1">
                    कलश इभेन्ट्स प्रा. लि.
                  </p>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    &ldquo;Celebrating Traditions, Igniting Aspirations&rdquo;
                  </p>
                </div>

                {/* Quick Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-left">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] text-emerald-700 font-semibold block">Flagship Pageant</span>
                    <strong className="text-xs font-bold text-slate-900 block mt-0.5">Newa: Maicha Baucha</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] text-emerald-700 font-semibold block">National Kids Title</span>
                    <strong className="text-xs font-bold text-slate-900 block mt-0.5">Little Miss Angel</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] text-emerald-700 font-semibold block">Percussion Beat</span>
                    <strong className="text-xs font-bold text-slate-900 block mt-0.5">Misa Dhime Baja</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] text-emerald-700 font-semibold block">Keynote Stages</span>
                    <strong className="text-xs font-bold text-slate-900 block mt-0.5">Rastriya Nachghar</strong>
                  </div>
                </div>

                {/* Direct Action Link to Facebook */}
                <a
                  href="https://www.facebook.com/Kalasheventspvtltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <span>Follow @Kalasheventspvtltd on Facebook</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-emerald-700" />
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-3xl sm:text-4xl font-black gold-gradient-text">10+</div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">Years of Legacy</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-3xl sm:text-4xl font-black gold-gradient-text">25+</div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">Grand Pageants Produced</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-3xl sm:text-4xl font-black gold-gradient-text">500+</div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">Youth Talents Groomed</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-3xl sm:text-4xl font-black gold-gradient-text">6,200+</div>
            <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">Engaged Community &amp; Fans</div>
          </div>
        </div>

      </div>
    </section>
  );
}

