"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CameraIcon, XIcon, ArrowRightIcon } from "./Icons";

interface MediaItem {
  id: string;
  title: string;
  category: "cultural" | "kids" | "music" | "stage";
  image: string;
  tag: string;
  year: string;
  description: string;
}

const mediaGallery: MediaItem[] = [
  {
    id: "g1",
    title: "Official Brand Mark: The Sacred Kalash & Devanagari Wordmark",
    category: "cultural",
    image: "/kalash-logo.jpg",
    tag: "Brand Identity",
    year: "Official Mark",
    description:
      "The official profile identity of Kalash Events Pvt. Ltd. featuring the sacred Kalash pot, coconut, and holy mango leaves in emerald relief, with Devanagari typography.",
  },
  {
    id: "g2",
    title: "Grand Stage Lighting & Production at Rastriya Nachghar",
    category: "stage",
    image: "/images/hero-stage.jpg",
    tag: "Concert Lighting & Truss",
    year: "Grand Finale",
    description:
      "Intelligent moving head fixtures, high-output fog effects, and acoustic line arrays engineered for national pageants and cultural galas.",
  },
  {
    id: "g3",
    title: "Newa: Maicha Baucha Heritage Showcase at Rastriya Nachghar",
    category: "cultural",
    image: "/images/newa-pageant-real.jpg",
    tag: "Cultural Pageantry",
    year: "Grand Finale",
    description:
      "Contestants proudly adorning authentic Newari Haku Patasi attire, demonstrating Nepal Bhasa knowledge and cultural dances before a full house at the National Cultural Theatre.",
  },
  {
    id: "g4",
    title: "Misa Dhime Baja Rhythmic Showdown in Historic Kathmandu",
    category: "music",
    image: "/images/misa-dhime-real.jpg",
    tag: "Traditional Percussion",
    year: "Historic Championship",
    description:
      "Female Dhime percussionists commanding the grand stage with thunderous beats, celebrating women's cultural empowerment and living Newar heritage.",
  },
  {
    id: "g5",
    title: "Little Miss Angel Nepal & Little Master Coronation Ceremony",
    category: "kids",
    image: "/images/little-miss-angel-real.jpg",
    tag: "Runway Grooming",
    year: "National Crown",
    description:
      "Young titleholders holding national championship trophies and crowned in sparkling tiaras after completing their 30-day intensive confidence grooming bootcamp.",
  },
  {
    id: "g6",
    title: "Executive Corporate Gala & Brand Launch Stage",
    category: "stage",
    image: "/images/corporate-gala.jpg",
    tag: "Corporate Summit",
    year: "Brand Production",
    description:
      "Flawless corporate summit staging featuring high-definition LED backdrop displays, keynote podiums, and VIP hospitality.",
  },
  {
    id: "g7",
    title: "Bespoke Cultural Wedding & Mandap Design",
    category: "cultural",
    image: "/images/wedding-mandap.jpg",
    tag: "Luxury Weddings",
    year: "Royal Celebration",
    description:
      "Exquisite floral architecture and traditional ritual setup tailored for authentic Vedic and Newari wedding celebrations.",
  },
  {
    id: "g8",
    title: "Championship Trophies, Crowns & Accolades",
    category: "stage",
    image: "/images/talent-trophy.jpg",
    tag: "Awards & Honors",
    year: "Recognition",
    description:
      "Gold-plated crowns, engraved crystal trophies, and merit certificates presented to titleholders and rising stars.",
  },
  {
    id: "g9",
    title: "Badhya Samrat Junior Beat Master Madal Competition",
    category: "music",
    image: "/images/junior-madal-real.jpg",
    tag: "Folk Percussion",
    year: "National Contest",
    description:
      "Folk percussionists under 16 showcasing blistering finger work, traditional Nepali folk Taals, and stage presence before legendary judges.",
  },
];

export default function InteractiveGallery() {
  const [filter, setFilter] = useState<"all" | "cultural" | "kids" | "music" | "stage">("all");
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);

  const filteredItems =
    filter === "all" ? mediaGallery : mediaGallery.filter((m) => m.category === filter);

  return (
    <section id="gallery" className="py-20 lg:py-28 relative bg-[#f8faf8] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
            <CameraIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Visual Archive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Moments of Splendor, Heritage &amp; Victory
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Browse through our photographic journey of crowned champions, traditional drumming festivals, and monumental stage setups.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm mt-4">
            {(
              [
                { id: "all", label: `All Photos (${mediaGallery.length})` },
                { id: "cultural", label: "Cultural Heritage" },
                { id: "kids", label: "Kids Runway" },
                { id: "music", label: "Dhime & Madal" },
                { id: "stage", label: "Stage & Awards" },
              ] as const
            ).map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === f.id
                    ? "bg-emerald-700 text-white font-bold shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden bg-white border border-slate-200/90 cursor-pointer shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>

              {/* Top Tags */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-950/75 backdrop-blur-md text-emerald-300 border border-white/20">
                  {item.tag}
                </span>
                <span className="text-[11px] text-slate-200 font-medium">
                  {item.year}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center gap-1 text-[11px] font-semibold text-emerald-300">
                  <span>Click to view in high resolution</span>
                  <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full border border-slate-200 p-6 space-y-4 shadow-2xl overflow-hidden text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                  {activeItem.tag} • {activeItem.year}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>

            {/* High Resolution Image View */}
            <div className="relative h-80 sm:h-[480px] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-950">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="(max-width: 1200px) 100vw, 896px"
                className="object-contain"
              />
            </div>

            {/* Description Details */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeItem.description}
            </div>

            {/* Footer with share / inquiry */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs text-slate-500">
                Official Archives • Kalash Events Pvt. Ltd. Kathmandu
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/Kalasheventspvtltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  View on Facebook
                </a>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
