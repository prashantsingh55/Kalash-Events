"use client";

import React, { useState } from "react";
import { ChevronDownIcon, KalashPotIcon } from "./Icons";

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: "What are the age limits and eligibility for Newa: Maicha Baucha?",
    a: "Newa: Maicha Baucha is open for both girls (Maicha) and boys (Baucha) typically aged between 8 and 14 years. Contestants must belong to or have cultural interest in the Newa community. Prior modeling experience is NOT required; the core focus is willingness to learn Nepal Bhasa, cultural traditions, and stage communication.",
  },
  {
    q: "Does my child need prior stage or ramp-walk experience for Little Miss Angel Nepal?",
    a: "Not at all! Over 80% of our contestants have never stepped on a public stage before. Our 25-to-30 day grooming program is specifically crafted to dissolve stage fear, build posture, teach proper microphone technique, and nurture organic self-confidence in a friendly, encouraging environment.",
  },
  {
    q: "Where do the training sessions and grand finales take place?",
    a: "Grooming sessions are held on weekends and convenient after-school hours at our central academy facilities in Kathmandu. Grand Finales and crowning ceremonies are traditionally hosted at premier national auditoriums such as Rastriya Nachghar (National Cultural Cooperation), Jamal, or Nepal Academy, Kamaladi.",
  },
  {
    q: "What makes Kalash Events different from ordinary beauty pageants?",
    a: "Kalash Events rejects superficial beauty criteria. Our initiatives focus on substantive cultural literacy (Nepal Bhasa, Newar culinary customs, Ranjana script, Dhime/Madal percussion), positive leadership, public speaking, empathy, and academic discipline. We emphasize character over vanity.",
  },
  {
    q: "What is the Misa Dhime Baja competition?",
    a: "Misa Dhime Baja is a historic cultural initiative organized by Kalash Events to honor and promote female Dhime percussionists. It provides women drummers and cultural ensembles a prestigious platform to demonstrate their rhythmic dexterity, synchronization, and devotion to Newar folk heritage.",
  },
  {
    q: "How can corporate houses or families hire Kalash Events for private management?",
    a: "Kalash Events provides full-service corporate gala management, brand product launches, fashion shows, and bespoke cultural weddings. You can use our interactive Budget Estimator above, submit the RFP form, or call our director directly at +977 9841436874.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#f8faf8] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <KalashPotIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything parents, contestants, and corporate clients need to know about our pageants and event production standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  {faq.q}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-emerald-700 flex-shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 block mb-1">Still have questions?</span>
          <p className="text-sm text-slate-900 font-bold">
            Call our support desk directly at{" "}
            <a href="tel:+9779841436874" className="text-emerald-700 underline hover:text-emerald-800">
              +977 984-1436874
            </a>{" "}
            or message us on WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}
