"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VideoIcon, PlayIcon, XIcon, ArrowRightIcon, SparklesIcon, ExternalLinkIcon, VolumeIcon } from "./Icons";

interface VideoItem {
  id: string;
  title: string;
  category: "pageants" | "percussion" | "grooming";
  duration: string;
  views: string;
  network: string;
  season: string;
  thumbnail: string;
  description: string;
  highlights: string[];
  youtubeSearch: string;
  facebookUrl: string;
}

const videoShowcaseData: VideoItem[] = [
  {
    id: "v1",
    title: "Little Miss Angel Nepal & Little Master Nepal — Grand Finale Coronation Broadcast",
    category: "pageants",
    duration: "18:45",
    views: "45K+ Views",
    network: "Life Ok TV Nepal / Kalash Productions",
    season: "Annual Grand Finale",
    thumbnail: "/images/little-miss-angel-real.jpg",
    description:
      "Full televised coverage of the prestigious Little Miss Angel Nepal and Little Master Nepal grand coronation at Rastriya Nachghar, Jamal. Watch contestants shine in runway rounds, speech eloquence, and the emotional crowning moment.",
    highlights: [
      "Auditorium runway walk with live stage lighting and orchestral soundtrack",
      "Talent presentation round: traditional Newar dance & declamation speech",
      "Judges' Q&A session testing wit, empathy, and cultural values",
      "Official crown presentation, sashes, and winner celebration confetti",
    ],
    youtubeSearch: "https://www.youtube.com/results?search_query=Little+Miss+Angel+Nepal+Grand+Finale",
    facebookUrl: "https://www.facebook.com/Kalasheventspvtltd",
  },
  {
    id: "v2",
    title: "Newa: Maicha Baucha — Cultural Heritage Ramp & Nepal Bhasa Showcase",
    category: "pageants",
    duration: "14:20",
    views: "32K+ Views",
    network: "NewsNepa & Kalash Media",
    season: "Season Showcase",
    thumbnail: "/images/newa-pageant-real.jpg",
    description:
      "Children aged 8 to 14 proudly dressed in authentic Newari Haku Patasi and Daura Suruwal. Contestants demonstrate conversational Nepal Bhasa, traditional Newar greeting etiquette, and cultural knowledge before an esteemed jury of Newar scholars.",
    highlights: [
      "Traditional Newar attire promenade in Haku Patasi and gold jewellery",
      "Nepal Bhasa oral self-introduction and poetry recitation",
      "Heritage quiz: Kathmandu valley temples, jatras, and festivals",
      "Alumni performance & felicitations by senior Newar dignitaries",
    ],
    youtubeSearch: "https://www.youtube.com/results?search_query=Newa+Maicha+Baucha+Kalash+Events",
    facebookUrl: "https://www.facebook.com/Kalasheventspvtltd",
  },
  {
    id: "v3",
    title: "Misa Dhime Baja — Historic All-Women Dhime Percussion Championship",
    category: "percussion",
    duration: "12:10",
    views: "58K+ Views",
    network: "Kalash Cultural Archives",
    season: "Cultural Championship",
    thumbnail: "/images/misa-dhime-real.jpg",
    description:
      "Historic footage capturing the thunderous power of women percussionists wielding the sacred Dhime drums in Kathmandu. Breaking historical boundaries, female drummers showcase intricate bols, synchronized steps, and devotion to indigenous music.",
    highlights: [
      "Solo and ensemble drumming showdowns with curved wooden sticks",
      "Bhusya (brass cymbal) accompaniment and synchronized group movement",
      "Fierce rhythmic tempo shifts from Dapa to fast-paced festival beats",
      "Award ceremony honoring master female percussionists and Gurus",
    ],
    youtubeSearch: "https://www.youtube.com/results?search_query=Misa+Dhime+Baja+Kalash+Events",
    facebookUrl: "https://www.facebook.com/Kalasheventspvtltd",
  },
  {
    id: "v4",
    title: "Badhya Samrat Nhuchhe Bahadur Dangol Junior Beat Master Madal Battle",
    category: "percussion",
    duration: "09:35",
    views: "28K+ Views",
    network: "Nepal Folk Music Trust & Kalash",
    season: "National Championship",
    thumbnail: "/images/junior-madal-real.jpg",
    description:
      "Prodigies under 16 competing live with zero electronic synthesizers or backing tracks. Watch young masters execute blindingly fast finger rolls, Khemta, and Jhyaure folk Taals under the guidance of folk maestro Nhuchhe Bahadur Dangol.",
    highlights: [
      "Live acoustic acoustic solo: left-bass and right-treble finger acrobatics",
      "Traditional folk Taals: Jhyaure, Khemta, Tamang Selo, and Roila",
      "Evaluation by senior recording artists and Radio Nepal veterans",
      "Golden Madal trophy and music recording scholarship conferral",
    ],
    youtubeSearch: "https://www.youtube.com/results?search_query=Badhya+Samrat+Junior+Beat+Master+Madal",
    facebookUrl: "https://www.facebook.com/Kalasheventspvtltd",
  },
  {
    id: "v5",
    title: "30-Day Grooming Camp & Confidence Transformation Journey",
    category: "grooming",
    duration: "08:15",
    views: "21K+ Views",
    network: "Kalash Academy Diaries",
    season: "Behind-the-Scenes",
    thumbnail: "/images/kids-pageant.jpg",
    description:
      "An inspiring look behind closed doors into the 30-day intensive grooming camp led by Sanjay Maharjan and industry mentors. See shy children blossom into confident stage orators with poise, empathy, and leadership skills.",
    highlights: [
      "Runway poise: head alignment, stride rhythm, and natural stage smile",
      "Public speaking drills overcoming microphone and camera anxiety",
      "Dining etiquette, teamwork games, and positive peer encouragement",
      "Emotional reflections and testimonials from proud parents",
    ],
    youtubeSearch: "https://www.youtube.com/results?search_query=Kalash+Events+Kathmandu+Grooming",
    facebookUrl: "https://www.facebook.com/Kalasheventspvtltd",
  },
];

export default function VideoShowcase() {
  const [filter, setFilter] = useState<"all" | "pageants" | "percussion" | "grooming">("all");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredVideos =
    filter === "all"
      ? videoShowcaseData
      : videoShowcaseData.filter((v) => v.category === filter);

  const handleOpenVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setActiveVideo(null);
    setIsPlaying(false);
  };

  return (
    <section id="videos" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
            <VideoIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Televised Broadcasts &amp; Reels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Grand Finale Video Highlights &amp; Stage Magic
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Relive the exhilarating energy of our grand finale broadcasts, traditional drumming battles, and transformational grooming journeys recorded across Nepal&apos;s premier auditoriums.
          </p>

          {/* Filter Tabs - Clean typographic badges with no emojis */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 mt-4">
            {(
              [
                { id: "all", label: `All Videos (${videoShowcaseData.length})` },
                { id: "pageants", label: "Pageant Grand Finales" },
                { id: "percussion", label: "Traditional Percussion" },
                { id: "grooming", label: "Grooming & Training" },
              ] as const
            ).map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleOpenVideo(video)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 cursor-pointer shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-slate-950/85 text-white backdrop-blur-sm border border-white/20">
                  {video.duration}
                </span>

                {/* Season & Views Badge */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-bold">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-emerald-300 border border-white/20">
                    {video.season}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-slate-200 border border-white/20">
                    {video.views}
                  </span>
                </div>

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
                    <PlayIcon className="w-6 h-6 fill-white" />
                  </div>
                </div>
              </div>

              {/* Video Info Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-white">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                    <span>Broadcast:</span>
                    <span className="text-slate-600 font-medium">{video.network}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-950 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Watch Now Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-900">
                  <span>Watch Video Recap</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Reel Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <VideoIcon className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-sm text-slate-950 block">Official Broadcasts &amp; Live Streams</strong>
              <p className="text-xs text-slate-600">
                Missed the live telecast? Watch full uninterrupted recordings on our social channels.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/Kalasheventspvtltd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Facebook Videos</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.youtube.com/results?search_query=Kalash+Events+Kathmandu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Search YouTube</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full border border-slate-200 p-6 sm:p-8 space-y-5 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                  {activeVideo.season} • {activeVideo.network}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-950 mt-0.5">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors flex-shrink-0 cursor-pointer"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Simulated Live Video Player Screen */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-300 bg-black group">
              <Image
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                fill
                sizes="(max-width: 1200px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40"></div>

              {/* Status Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white uppercase tracking-wider">
                  Official Highlight Reel
                </span>
              </div>

              {/* Center Play/Pause Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center pl-1 shadow-2xl transition-all hover:scale-105 cursor-pointer"
                  title={isPlaying ? "Pause Video" : "Play Video"}
                >
                  <PlayIcon className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
                </button>
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent space-y-2">
                {/* Progress Bar */}
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`bg-emerald-400 h-full rounded-full ${
                      isPlaying ? "animate-pulse w-2/3" : "w-1/3"
                    }`}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-white">04:12 / {activeVideo.duration}</span>
                    <span className="hidden sm:inline-block text-emerald-400">•</span>
                    <span className="hidden sm:inline-block text-[11px]">{activeVideo.views}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <VolumeIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-[11px] text-emerald-300">HD 1080p Master</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Segment Breakdown */}
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeVideo.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Program Highlights Featured:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeVideo.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2"
                    >
                      <PlayIcon className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={activeVideo.youtubeSearch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Stream on YouTube</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href={activeVideo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Watch on Facebook</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#registration"
                  onClick={handleCloseModal}
                  className="px-5 py-2 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <SparklesIcon className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Audition for This Program</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

