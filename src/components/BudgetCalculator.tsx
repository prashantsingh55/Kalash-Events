"use client";

import React, { useState } from "react";
import { SlidersIcon, CheckCircleIcon, WhatsAppIcon, ShieldCheckIcon } from "./Icons";

type EventType = "pageant" | "corporate" | "wedding" | "school";
type ProductionTier = "essential" | "premium" | "grand";

export default function BudgetCalculator() {
  const [eventType, setEventType] = useState<EventType>("pageant");
  const [guests, setGuests] = useState<number>(350);
  const [tier, setTier] = useState<ProductionTier>("premium");
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    dhime: true,
    livestream: true,
    trophies: false,
    photobooth: true,
  });

  // Base pricing matrix in NPR
  const basePrices: Record<EventType, number> = {
    pageant: 180000,
    corporate: 150000,
    wedding: 220000,
    school: 120000,
  };

  const tierMultipliers: Record<ProductionTier, number> = {
    essential: 1.0,
    premium: 1.45,
    grand: 1.9,
  };

  const addonPrices = {
    dhime: 35000,
    livestream: 45000,
    trophies: 28000,
    photobooth: 22000,
  };

  const calculateTotal = () => {
    const base = basePrices[eventType];
    // Scale slightly with guest capacity
    const guestScale = 1 + (guests - 100) * 0.0006;
    const tierCost = base * tierMultipliers[tier] * guestScale;

    let addonTotal = 0;
    if (addons.dhime) addonTotal += addonPrices.dhime;
    if (addons.livestream) addonTotal += addonPrices.livestream;
    if (addons.trophies) addonTotal += addonPrices.trophies;
    if (addons.photobooth) addonTotal += addonPrices.photobooth;

    return Math.round(tierCost + addonTotal);
  };

  const totalNPR = calculateTotal();

  const handleAddonToggle = (key: string) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const eventTypeLabels = {
    pageant: "Cultural Pageant & Talent Show",
    corporate: "Corporate Gala & Award Ceremony",
    wedding: "Luxury Cultural Wedding / Mandap",
    school: "School / College Cultural Fest",
  };

  const tierLabels = {
    essential: "Essential Auditorium Setup",
    premium: "Premium Professional Stage (Recommended)",
    grand: "Grand National Spectacle (Rastriya Nachghar Class)",
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Kalash Events, I used your website budget calculator:%0A- Event Type: ${eventTypeLabels[eventType]}%0A- Guests: ${guests}%0A- Production Tier: ${tierLabels[tier]}%0A- Estimated Budget: NPR ${totalNPR.toLocaleString()}%0APlease send me a formal detailed proposal.`;
    return `https://wa.me/9779841436874?text=${text}`;
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
            <SlidersIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instant Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Interactive Event Budget &amp; Package Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Customize your event parameters to receive an instant ballpark estimate in Nepalese Rupees (NPR). Transparent, tailored, and ready for instant consultation.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#fafbfc] rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-8 shadow-sm">
            
            {/* 1. Event Type Selector */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest text-emerald-800 font-bold block">
                1. Select Event Dimension
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(
                  [
                    { id: "pageant", title: "Cultural Pageant", desc: "Auditions + 30-day grooming + stage finale" },
                    { id: "corporate", title: "Corporate Gala", desc: "Annual summit, brand launch & awards" },
                    { id: "wedding", title: "Luxury Wedding", desc: "Sacred Mandap, Baraat, music & decor" },
                    { id: "school", title: "Youth / College Fest", desc: "Inter-school talent contest & stage" },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEventType(item.id)}
                    className={`p-3.5 rounded-2xl text-left border cursor-pointer transition-all ${
                      eventType === item.id
                        ? "bg-emerald-800 border-emerald-900 text-white shadow-md"
                        : "bg-white border-slate-200/90 hover:border-emerald-300 text-slate-700 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold ${eventType === item.id ? "text-white" : "text-slate-900"}`}>
                        {item.title}
                      </span>
                      {eventType === item.id && (
                        <CheckCircleIcon className="w-4 h-4 text-emerald-300" />
                      )}
                    </div>
                    <span
                      className={`text-[11px] block mt-1 leading-snug ${
                        eventType === item.id ? "text-emerald-100" : "text-slate-500"
                      }`}
                    >
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Guest Count Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-widest text-emerald-800 font-bold">
                  2. Expected Attendees / Audience
                </label>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {guests} Guests
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="1200"
                step="50"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                <span>50 (Intimate)</span>
                <span>350 (Nachghar Standard)</span>
                <span>800 (Hall Capacity)</span>
                <span>1,200+ (Grand Arena)</span>
              </div>
            </div>

            {/* 3. Production Tier */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest text-emerald-800 font-bold block">
                3. Stage &amp; Technical Production Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(
                  [
                    { id: "essential", name: "Essential", note: "Standard PA & wash lights" },
                    { id: "premium", name: "Premium", note: "Line array + moving beams + LED" },
                    { id: "grand", name: "Grand Spectacle", note: "Curved LED + cold sparks + 4K" },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTier(t.id)}
                    className={`p-3 rounded-2xl text-left border cursor-pointer transition-all ${
                      tier === t.id
                        ? "bg-emerald-800 border-emerald-900 text-white shadow-md"
                        : "bg-white border-slate-200/90 hover:border-emerald-300 text-slate-700 shadow-sm"
                    }`}
                  >
                    <span className={`text-xs font-bold block ${tier === t.id ? "text-white" : "text-slate-900"}`}>
                      {t.name}
                    </span>
                    <span className={`text-[10px] block mt-1 ${tier === t.id ? "text-emerald-100" : "text-slate-500"}`}>
                      {t.note}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Optional Add-ons */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest text-emerald-800 font-bold block">
                4. Select Performance &amp; Production Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: "dhime", label: "Misa Dhime Baja Troupe", price: "+ NPR 35,000", desc: "Live traditional drummers & Lakhey dancers" },
                  { key: "livestream", label: "4K Multi-Camera Live Stream", price: "+ NPR 45,000", desc: "Live YouTube/FB broadcast & 4K master edit" },
                  { key: "trophies", label: "Custom Crown & Trophy Suite", price: "+ NPR 28,000", desc: "Gold-plated crowns, engraved trophies, sashes" },
                  { key: "photobooth", label: "Red Carpet VIP Photo Lounge", price: "+ NPR 22,000", desc: "Custom step-and-repeat media backdrop" },
                ].map((addon) => (
                  <div
                    key={addon.key}
                    onClick={() => handleAddonToggle(addon.key)}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                      addons[addon.key]
                        ? "bg-emerald-50 border-emerald-400 text-slate-900 shadow-sm"
                        : "bg-white border-slate-200/80 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={addons[addon.key]}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600 mt-0.5 accent-emerald-700"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-900">{addon.label}</span>
                        <span className="text-[11px] font-bold text-emerald-700">{addon.price}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-0.5">{addon.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Real-time Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-600/30 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold">
                  Estimated Investment
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                  NPR (Nepali Rupees)
                </span>
              </div>

              {/* Big Price Display */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black gold-gradient-text">
                  NPR {totalNPR.toLocaleString()}*
                </div>
                <p className="text-[11px] text-slate-500 italic">
                  *Indicative baseline estimate. Final quotation customized upon venue inspection.
                </p>
              </div>

              {/* Package Summary List */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100 text-slate-600">
                  <span>Selected Dimension:</span>
                  <strong className="text-slate-900">{eventTypeLabels[eventType]}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 text-slate-600">
                  <span>Audience Scope:</span>
                  <strong className="text-slate-900">{guests} Guests</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 text-slate-600">
                  <span>Production Tier:</span>
                  <strong className="text-slate-900">{tier.toUpperCase()}</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 text-slate-600">
                  <span>Add-ons Active:</span>
                  <strong className="text-emerald-700">
                    {Object.values(addons).filter(Boolean).length} Selected
                  </strong>
                </div>
              </div>

              {/* Standard Guarantees */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-left">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
                  <span>The Kalash Assurance:</span>
                </div>
                <ul className="text-[11px] text-slate-600 space-y-1.5 pl-1">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Dedicated Event Director &amp; Stage Flow Choreographer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Soundcheck &amp; dress rehearsal time slot at venue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Professional technical crew &amp; backup power protocol</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 hover:scale-105 active:scale-95 transition-all shadow-md shadow-emerald-900/15"
                >
                  <WhatsAppIcon className="w-5 h-5 text-emerald-200" />
                  <span>Send Estimate to WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="w-full block text-center py-3 px-6 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  Schedule an In-Person Meeting at Office
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
