"use client";

import React from "react";
import { StarIcon, SparklesIcon, CheckCircleIcon } from "./Icons";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  relation: string;
  avatarText: string;
  rating: number;
  program: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sunita Maharjan",
    role: "Mother of Aayusha Maharjan",
    relation: "Newa: Maicha Baucha Titleholder Parent",
    avatarText: "SM",
    rating: 5,
    program: "Newa: Maicha Baucha",
    quote:
      "Enrolling our 10-year-old daughter in Newa: Maicha Baucha was the best decision we made. Not only did she gain immense stage poise, but she also started conversing in Nepal Bhasa with her grandparents at home. Sanjay Maharjan Sir and the trainers provided a thoroughly safe, disciplined, and nurturing environment.",
  },
  {
    id: "t2",
    name: "Pratistha Shrestha",
    role: "Former Titleholder (Alumni)",
    relation: "Little Miss Angel Nepal Winner",
    avatarText: "PS",
    rating: 5,
    program: "Little Miss Angel Nepal",
    quote:
      "Before joining Kalash Events, I had overwhelming stage fright. The 25 days of runway training, public speaking drills, and mock interviews completely transformed my personality. Today, I can address an auditorium without hesitation. Kalash Events gave me wings!",
  },
  {
    id: "t3",
    name: "Guru Krishna Manandhar",
    role: "Senior Folk Percussionist & Cultural Judge",
    relation: "Traditional Arts Mentor",
    avatarText: "KM",
    rating: 5,
    program: "Misa Dhime Baja & Madal Contests",
    quote:
      "What Kalash Events has achieved with the Misa Dhime Baja competition is historic. Giving women the center stage to play sacred Dhime drums broke age-old barriers while preserving living Newar heritage. The respect they accord to traditional Gurus is exemplary.",
  },
  {
    id: "t4",
    name: "Bikash Pradhan",
    role: "Marketing Director",
    relation: "Corporate Brand Sponsor & Partner",
    avatarText: "BP",
    rating: 5,
    program: "Corporate Gala & Summit Production",
    quote:
      "We contracted Kalash Events for our national dealer summit and award banquet. From the curved LED stage design to VIP protocol and timing, their technical precision was world-class. You are in safe hands with Kalash Events.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <SparklesIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Voices of Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Loved by Parents, Titleholders &amp; Cultural Gurus
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Discover how Kalash Events has inspired confidence, preserved cultural pride, and set unforgettable stage memories across Nepal.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#fafbfc] hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                    {t.program}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Bio */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 flex items-center justify-center font-black text-sm flex-shrink-0 shadow-xs">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-[11px] text-slate-600 font-medium">{t.role}</p>
                  <p className="text-[10px] text-slate-400">{t.relation}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Community Proof Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center">
              <StarIcon className="w-5 h-5 fill-amber-500" />
            </div>
            <div>
              <strong className="text-sm text-slate-950 block">4.9 / 5.0 Rating Across 500+ Contestant Families</strong>
              <span className="text-xs text-slate-500">
                Official feedback from 10+ seasons of pageants and cultural galas.
              </span>
            </div>
          </div>

          <a
            href="https://www.facebook.com/Kalasheventspvtltd/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-xs"
          >
            Read Community Reviews on Facebook &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
