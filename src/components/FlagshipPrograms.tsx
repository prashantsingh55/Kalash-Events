"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CrownIcon, SparklesIcon, TrophyIcon, CheckCircleIcon, ArrowRightIcon, XIcon, DrumIcon, LightbulbIcon } from "./Icons";


interface Program {
  id: string;
  name: string;
  nepaliTitle: string;
  category: "cultural" | "kids" | "music";
  tagline: string;
  ageGroup: string;
  duration: string;
  venue: string;
  image: string;
  description: string;
  highlights: string[];
  curriculum: string[];
  awards: string[];
}

const programsData: Program[] = [
  {
    id: "newa-maicha-baucha",
    name: "Newa: Maicha Baucha",
    nepaliTitle: "नेवा: मैचा बौचा",
    category: "cultural",
    tagline: "Preserving Ancient Newa Heritage, Language & Culture Through Youth",
    ageGroup: "8 – 14 Years (Girls & Boys)",
    duration: "30-Day Grooming & Training Camp",
    venue: "Rastriya Nachghar, Jamal, Kathmandu",
    image: "/images/newa-pageant-real.jpg",
    description:
      "Newa: Maicha Baucha is Nepal's premier unisex cultural pageant and personality development platform tailored for Newa youth. It teaches children to speak Nepal Bhasa, wear authentic traditional attire (Haku Patasi / Daura Suruwal) with pride, appreciate centuries-old rituals, and speak confidently in public.",
    highlights: [
      "Nepal Bhasa & Ranjana Lipi basic orientation",
      "Traditional Newar cuisine & ritual etiquette workshop",
      "Ramp-walk choreography and poise in cultural dress",
      "Public speaking & cultural knowledge talent round",
    ],
    curriculum: [
      "Week 1: Heritage orientation, Nepal Bhasa conversation basics, self-introduction",
      "Week 2: Traditional Newari attire dressing protocol, posture & stage ramp walk",
      "Week 3: Public speaking drills, Q&A rounds, cultural history with elders",
      "Week 4: Grand dress rehearsals, photoshoot, talent stage presentation",
    ],
    awards: [
      "Title Winner Trophy, Crown & Cash Prize",
      "Best Traditional Attire, Best Talent, Best Smile, Best Discipline",
      "Official Title Certificate & Ambassador Opportunities",
    ],
  },
  {
    id: "little-miss-angel",
    name: "Little Miss Angel Nepal & Little Master Nepal",
    nepaliTitle: "लिटल मिस एन्जल नेपाल",
    category: "kids",
    tagline: "Nurturing Self-Confidence, Stage Poise & Leadership in Tomorrow's Stars",
    ageGroup: "7 – 14 Years (Kids & Teens)",
    duration: "25-Day Comprehensive Grooming",
    venue: "Rastriya Nachghar / Nepal Academy, Kathmandu",
    image: "/images/little-miss-angel-real.jpg",
    description:
      "One of the nation's longest-running and most respected kids' pageants. Little Miss Angel Nepal and Little Master Nepal focus on confidence-building, ramp-walk training, public speaking, camera presence, and positive character development.",
    highlights: [
      "Confidence building & overcoming stage fright",
      "Professional runway ramp walk & posture coaching",
      "Public speech delivery & live interview training",
      "Teamwork, empathy, and social grace workshops",
    ],
    curriculum: [
      "Phase 1: Ice-breaking, vocal projection, body language basics",
      "Phase 2: Runway techniques, fashion choreography, photoshoot poise",
      "Phase 3: Talent exploration (singing, dancing, acting, debating)",
      "Phase 4: Finale grand rehearsals under stage lighting and live audience",
    ],
    awards: [
      "Main National Crown & Sashes for Winners & Runners-Up",
      "Sub-titles: Miss/Master Photogenic, Miss/Master Confident, Miss/Master Intelligent",
      "Exclusive Media Appearances & Brand Modeling Opportunities",
    ],
  },
  {
    id: "misa-dhime-baja",
    name: "Misa Dhime Baja Competition",
    nepaliTitle: "मिसा धिमे बाजा",
    category: "music",
    tagline: "Historical Female Dhime Percussion Festival Empowering Women Drummers",
    ageGroup: "Open to Female Drummers & Teams",
    duration: "Multi-Day Festival & Competition",
    venue: "Kathmandu Valley Cultural Squares & Auditoriums",
    image: "/images/misa-dhime-real.jpg",
    description:
      "A historic milestone event organized by Kalash Events, Misa Dhime Baja honors the strength and rhythmic spirit of women through the thunderous traditional Dhime drum—an instrument historically played primarily by men. This platform celebrates gender empowerment and preservation of living folk music.",
    highlights: [
      "Solo & Ensemble female Dhime drumming showdowns",
      "Guidance from master percussionists and Newar Gurus",
      "Revival of sacred rhythmic bols (beats) and choreography",
      "Huge community audience and national TV/digital broadcast",
    ],
    curriculum: [
      "Workshop: Masterclass on sacred rhythms (Chwo, Dapa, and Jhyaure)",
      "Session: Synchronization with Bhusya (cymbals) and traditional footwork",
      "Stage: Live solo improvisation and ensemble dynamic battles",
    ],
    awards: [
      "Historical Best Female Dhime Drummer Trophy & Cash Award",
      "Best Ensemble Rhythm, Best Synchronization, Most Inspiring Team",
    ],
  },
  {
    id: "junior-beat-master",
    name: "Badhya Samrat Junior Beat Master Madal Competition",
    nepaliTitle: "बाद्य सम्राट जुनियर बिट मास्टर",
    category: "music",
    tagline: "Discovering & Elevating Nepal's Next Generation Folk Percussion Maestros",
    ageGroup: "Under 16 Years",
    duration: "Auditions & National Championship",
    venue: "National Cultural Centers, Kathmandu",
    image: "/images/junior-madal-real.jpg",
    description:
      "Nepal's heartbeat lies in the rhythm of the Madal. The Badhya Samrat Junior Beat Master Madal competition invites young folk musicians from across Nepal to demonstrate their finger speed, traditional Taals, rhythmic mastery, and soulful folk musicality.",
    highlights: [
      "Celebration of indigenous Nepali folk beats (Khemta, Jhyaure, Tamang Selo)",
      "Adjudicated by senior folk music scholars & recording legends",
      "Live acoustic performance with zero pre-recorded backing tracks",
      "Fostering generational continuity of indigenous instruments",
    ],
    curriculum: [
      "Audition screening of rhythm precision and timing",
      "Speed, variation, and improvisation drills",
      "Duet showcase with folk vocalists in the grand finale",
    ],
    awards: [
      "Title of 'Badhya Samrat Junior Master', Golden Madal Trophy",
      "Scholarships, recording studio opportunities & musical gear",
    ],
  },
];

export default function FlagshipPrograms() {
  const [filter, setFilter] = useState<"all" | "cultural" | "kids" | "music">("all");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleApply = (programName: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kalash-select-program", { detail: { programName } })
      );
      const elem = document.getElementById("registration");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const filteredPrograms =
    filter === "all"
      ? programsData
      : programsData.filter((p) => p.category === filter);

  return (
    <section id="programs" className="py-20 lg:py-28 relative bg-[#f8faf8] border-t border-slate-200/80">
      {/* Background Accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
            <CrownIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Signature Initiatives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Our Flagship Cultural &amp; Youth Pageants
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From premier cultural pageants to ground-breaking percussion championships, Kalash Events creates stages that nurture confidence, preserve language, and crown deserving talent.
          </p>

          {/* Category Filter Tabs - Replaced emojis with clean SVG icons */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm mt-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "all"
                  ? "bg-emerald-700 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Events ({programsData.length})
            </button>
            <button
              onClick={() => setFilter("cultural")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "cultural"
                  ? "bg-emerald-700 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <CrownIcon className="w-3.5 h-3.5 text-current" />
              <span>Cultural Heritage</span>
            </button>
            <button
              onClick={() => setFilter("kids")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "kids"
                  ? "bg-emerald-700 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <SparklesIcon className="w-3.5 h-3.5 text-current" />
              <span>Kids &amp; Youth Pageantry</span>
            </button>
            <button
              onClick={() => setFilter("music")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === "music"
                  ? "bg-emerald-700 text-white font-bold shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <DrumIcon className="w-3.5 h-3.5 text-current" />
              <span>Dhime &amp; Madal Music</span>
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Program Thumbnail Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/75 backdrop-blur-md text-emerald-300 border border-white/20">
                    {program.ageGroup}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-700 text-white shadow-sm">
                    {program.duration}
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">
                      {program.nepaliTitle}
                    </span>
                    <span className="text-xs text-slate-200 font-medium">
                      Venue: {program.venue}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:text-emerald-300 transition-colors">
                    {program.name}
                  </h3>
                </div>
              </div>

              {/* Program Content Details */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-emerald-800 font-semibold italic border-l-2 border-emerald-600 pl-3">
                    &ldquo;{program.tagline}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {program.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-1">
                    {program.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors cursor-pointer"
                  >
                    <span>View Syllabus &amp; Details</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleApply(program.name)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all cursor-pointer"
                  >
                    <SparklesIcon className="w-3.5 h-3.5 text-emerald-200" />
                    <span>Apply for Audition</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom Note - Replaced emoji with LightbulbIcon */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 max-w-3xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-slate-800 font-medium flex items-center justify-center flex-wrap gap-1.5">
            <LightbulbIcon className="w-4 h-4 text-amber-600 inline flex-shrink-0" />
            <strong>Are you an educational institution or cultural trust?</strong>
            <span>Kalash Events partners with schools and cultural societies to organize tailored grooming camps and inter-school talent galas.</span>
          </p>
          <a
            href="#contact"
            className="inline-block mt-3 text-xs font-bold text-emerald-700 hover:text-emerald-900 underline"
          >
            Inquire about Institutional Partnerships &rarr;
          </a>
        </div>

      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  {selectedProgram.nepaliTitle} • {selectedProgram.ageGroup}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
                  {selectedProgram.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Venue: {selectedProgram.venue} | Duration: {selectedProgram.duration}
                </p>
              </div>
              <button
                onClick={() => setSelectedProgram(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Program Description
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedProgram.description}
              </p>
            </div>

            {/* Detailed Curriculum */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                4-Week Syllabus &amp; Training Breakdown
              </h4>
              <div className="space-y-2">
                {selectedProgram.curriculum.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold flex-shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Awards &amp; Recognition
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProgram.awards.map((award, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/70 text-xs text-amber-950 flex items-center gap-2">
                    <TrophyIcon className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = selectedProgram.name;
                  setSelectedProgram(null);
                  handleApply(name);
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 text-center shadow transition-all cursor-pointer"
              >
                Register for Audition Now
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
