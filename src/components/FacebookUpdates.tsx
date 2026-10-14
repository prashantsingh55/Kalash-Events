"use client";

import React, { useState } from "react";
import { FacebookIcon, CalendarIcon, PhoneIcon, WhatsAppIcon, ExternalLinkIcon, CheckCircleIcon, SparklesIcon } from "./Icons";

interface UpdatePost {
  id: string;
  badge: string;
  badgeColor: string;
  category: "audition" | "competition" | "cultural";
  title: string;
  nepaliTitle: string;
  date: string;
  content: string;
  keyDetails: string[];
  contactPerson: string;
  phone: string;
  facebookUrl: string;
}

const fbUpdatesData: UpdatePost[] = [
  {
    id: "up1",
    badge: "Official Auditions Open",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    category: "audition",
    title: "Newa: Maicha Baucha (Season 3) — Official Call for Auditions",
    nepaliTitle: "नेवा: मैचा बौचा (सिजन ३) - अडिसन फारम खुला",
    date: "Latest Active Notice",
    content:
      "कलश इभेन्ट्स प्रा.लि. द्वारा आयोजित 'नेवा: मैचा बौचा' सिजन ३ को लागि आवेदन फारम खुला भएको जानकारी गराउंदछौं। ८ देखि १४ वर्ष सम्मका नेवा: बालबालिकाहरुका लागि नेपाल भाषा, संस्कृति, व्यक्तित्व विकास, स्टेज र्‍याम्प वाक तथा आत्मविश्वास अभिवृद्धि गराउने उद्देश्यले यो कार्यक्रम आयोजना गरिएको हो।",
    keyDetails: [
      "Eligibility: Boys & Girls aged 8–14 Years",
      "Focus: Nepal Bhasa fluency, Ranjana Lipi, Cultural Dress & Ramp Poise",
      "Venue: Rastriya Nachghar (National Cultural Cooperation), Jamal",
      "Grooming: 30 days weekend schedule tailored around school hours",
    ],
    contactPerson: "Sanjay Maharjan (Director)",
    phone: "+977 984-1436874",
    facebookUrl: "https://www.facebook.com/Kalasheventspvtltd",
  },
  {
    id: "up2",
    badge: "National Kids Title",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    category: "audition",
    title: "Little Miss Angel Nepal & Little Master Nepal — Registration Announcement",
    nepaliTitle: "लिटल मिस एन्जल नेपाल तथा लिटल मास्टर नेपाल",
    date: "Current Season Notice",
    content:
      "The premier talent and runway grooming pageant for children and teenagers across Kathmandu Valley. Designed to eliminate stage fear, hone articulation, and foster leadership in young minds under expert mentors and media personalities.",
    keyDetails: [
      "Age Categories: 7 to 14 Years (Juniors & Teens)",
      "Curriculum: Microphone technique, runway walking, camera training & ethics",
      "Broadcast: Grand Finale televised in partnership with Life Ok TV Nepal",
      "Awards: National title crown, crystal trophies, cash awards & modeling contracts",
    ],
    contactPerson: "Audition Desk",
    phone: "+977 986-2433311",
    facebookUrl: "https://www.facebook.com/Kalasheventspvtltd",
  },
  {
    id: "up3",
    badge: "Music Competition",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    category: "competition",
    title: "Badhya Samrat Nhuchhe Bahadur Dangol Junior Beat Master Madal (Season 2)",
    nepaliTitle: "बाद्य सम्राट न्हुच्छे बहादुर डंगोल जुनियर बिट मास्टर (सिजन २)",
    date: "Folk Percussion Notice",
    content:
      "नेपाली मौलिक लोक बाजाहरुको संरक्षण तथा नयाँ पुस्तामा पुस्तान्तरण गर्ने पवित्र उद्देश्यका साथ राष्ट्रिय स्तरको जुनियर मादल प्रतियोगिताको दोश्रो सिजनको तयारी भइरहेको छ। १६ वर्ष मुनिका प्रतिभाशाली मादल बादकहरुको सहभागिता रहनेछ।",
    keyDetails: [
      "Eligibility: Young folk percussionists under 16 years of age",
      "Format: Pure acoustic live performance (No electronic tracks)",
      "Folk Taals: Jhyaure, Khemta, Tamang Selo, Roila, and folk variations",
      "Jury: Senior recording artists, music scholars & Radio Nepal gurus",
    ],
    contactPerson: "Percussion Department",
    phone: "+977 970-3001122",
    facebookUrl: "https://www.facebook.com/Kalasheventspvtltd",
  },
  {
    id: "up4",
    badge: "Cultural Milestone",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
    category: "cultural",
    title: "Misa Dhime Baja — Celebrating Female Percussionists of Nepal",
    nepaliTitle: "मिसा धिमे बाजा प्रतियोगिता तथा सांस्कृतिक उत्सव",
    date: "Special Archive Post",
    content:
      "नेपालको इतिहासमै पहिलो पटक महिला धिमे बादकहरुको वृहत् प्रतियोगिता सम्पन्न गरी इतिहास रच्न सफल भएकोमा सम्पूर्ण सहभागी धिमे खल:, गुरुवर्ग तथा दर्शकहरु प्रति कलश इभेन्ट्स हार्दिक कृतज्ञता व्यक्त गर्दछ। महिला सशक्तिकरण र सांस्कृतिक धरोहरको संरक्षण हाम्रो मूल संकल्प हो।",
    keyDetails: [
      "Showcase: Female Dhime drummers commanding the historic Newar drums",
      "Atmosphere: Traditional Newari dress, sacred rhythm bols & ensemble synchrony",
      "Community Reach: Broadcasted live across social channels with 50K+ views",
      "Annual Revival: Regular festival editions hosted across Kathmandu Valley",
    ],
    contactPerson: "Cultural Committee",
    phone: "+977 984-1436874",
    facebookUrl: "https://www.facebook.com/Kalasheventspvtltd",
  },
];

export default function FacebookUpdates() {
  const [filter, setFilter] = useState<"all" | "audition" | "competition" | "cultural">("all");

  const filteredUpdates =
    filter === "all"
      ? fbUpdatesData
      : fbUpdatesData.filter((u) => u.category === filter);

  return (
    <section id="updates" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold tracking-wider uppercase">
            <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />
            <span>Official Facebook Feed &amp; Notices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Live Announcements &amp; Audition Callouts
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Real-time notices synchronized with our official Facebook page (<span className="text-emerald-700 font-bold">@Kalasheventspvtltd</span>). Never miss an audition deadline, grooming orientation, or event date.
          </p>

          {/* Filter Pills - Removed all emojis */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 mt-4">
            {(
              [
                { id: "all", label: `All Notices (${fbUpdatesData.length})` },
                { id: "audition", label: "Pageant Auditions" },
                { id: "competition", label: "Music Competitions" },
                { id: "cultural", label: "Cultural Festivals" },
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

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredUpdates.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                {/* Post Top Meta */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${post.badgeColor}`}>
                    {post.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Post Titles */}
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-700 font-bold block mb-1">
                    {post.nepaliTitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-emerald-800 transition-colors">
                    {post.title}
                  </h3>
                </div>

                {/* Content Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {post.content}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-1.5 pt-2">
                  {post.keyDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-100 p-2 rounded-xl">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Direct Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-600">
                  <span className="text-slate-400 block text-[10px]">Direct Coordinator:</span>
                  <a href={`tel:${post.phone}`} className="font-bold text-slate-900 hover:text-emerald-700 transition-colors flex items-center gap-1.5 mt-0.5">
                    <PhoneIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{post.phone}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/9779841436874?text=Hello%20Kalash%20Events,%20I%20am%20inquiring%20about%20the%20notice:%20${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                    title="Inquire on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={post.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-white" />
                    <span>View on FB</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>

                  <a
                    href="#registration"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 hover:scale-105 transition-transform flex items-center gap-1 shadow-sm"
                  >
                    <SparklesIcon className="w-3 h-3 text-emerald-200" />
                    <span>Apply</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Facebook Page Connect Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-50 via-slate-50 to-emerald-50 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 border border-blue-500 flex items-center justify-center text-white flex-shrink-0 shadow-md">
              <FacebookIcon className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-950">Join 6,250+ Followers on Facebook</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Daily photoshoots, live parent feedback, contestant voting links, and official winner ceremonies.
              </p>
            </div>
          </div>

          <a
            href="https://www.facebook.com/Kalasheventspvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>Follow @Kalasheventspvtltd</span>
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
