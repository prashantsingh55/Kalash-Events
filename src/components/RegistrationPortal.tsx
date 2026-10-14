"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  SparklesIcon,
  CrownIcon,
  HandshakeIcon,
  LockIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  MailIcon,
  PhoneIcon,
  KalashPotIcon,
} from "./Icons";

export default function RegistrationPortal() {
  const [activeTab, setActiveTab] = useState<"audition" | "client" | "sponsor">("audition");
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Audition Form State
  const [auditionForm, setAuditionForm] = useState({
    program: "Newa: Maicha Baucha (नेवा: मैचा बौचा)",
    participantName: "",
    age: "10",
    gender: "Female",
    parentName: "",
    phone: "",
    email: "",
    city: "Kathmandu",
    talent: "Cultural Dance / Speech",
    remarks: "",
  });

  useEffect(() => {
    const handleSelectProgram = (e: Event) => {
      const customEvent = e as CustomEvent<{ programName: string }>;
      if (customEvent.detail && customEvent.detail.programName) {
        const name = customEvent.detail.programName;
        setActiveTab("audition");
        setSubmitted(false);
        if (name.includes("Newa")) {
          setAuditionForm((prev) => ({ ...prev, program: "Newa: Maicha Baucha (नेवा: मैचा बौचा)" }));
        } else if (name.includes("Angel")) {
          setAuditionForm((prev) => ({ ...prev, program: "Little Miss Angel Nepal" }));
        } else if (name.includes("Little Master")) {
          setAuditionForm((prev) => ({ ...prev, program: "Little Master Nepal" }));
        } else if (name.includes("Dhime")) {
          setAuditionForm((prev) => ({ ...prev, program: "Misa Dhime Baja Competition" }));
        } else if (name.includes("Madal") || name.includes("Beat Master")) {
          setAuditionForm((prev) => ({ ...prev, program: "Badhya Samrat Junior Beat Master Madal" }));
        }
      }
    };

    window.addEventListener("kalash-select-program", handleSelectProgram);
    return () => window.removeEventListener("kalash-select-program", handleSelectProgram);
  }, []);

  // Client Event Form State
  const [clientForm, setClientForm] = useState({
    organization: "",
    contactPerson: "",
    eventType: "Corporate Gala & Award Night",
    expectedDate: "",
    estimatedGuests: "300",
    venuePreference: "Rastriya Nachghar / Luxury Hotel",
    phone: "",
    email: "",
    notes: "",
  });

  // Pure Canvas Confetti Burst (No external dependencies)
  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      r: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
    }[] = [];

    const colors = ["#047857", "#059669", "#10b981", "#d97706", "#f59e0b", "#0284c7", "#4338ca"];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 3,
        r: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 16,
        alpha: 1,
      });
    }

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravity
        p.alpha -= 0.01;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      if (frame < 90) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    animate();
  };

  const handleAuditionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditionForm.participantName || !auditionForm.phone) {
      alert("Please enter the participant name and phone number.");
      return;
    }

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newId = `KLSH-2025-${randomNum}`;
    setTicketId(newId);
    setSubmitted(true);
    setTimeout(triggerConfetti, 100);
  };

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientForm.contactPerson || !clientForm.phone) {
      alert("Please provide your contact person name and phone number.");
      return;
    }

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newId = `KLSH-CORP-${randomNum}`;
    setTicketId(newId);
    setSubmitted(true);
    setTimeout(triggerConfetti, 100);
  };

  const resetForm = () => {
    setSubmitted(false);
    setTicketId("");
  };

  return (
    <section id="registration" className="py-20 lg:py-28 relative bg-[#f8faf8] border-t border-slate-200/80">
      
      {/* Floating Canvas for Pure Confetti Burst */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <SparklesIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Interactive Application Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Register for Auditions &amp; Inquiries
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Secure an audition slot for your child or submit an event production RFP directly to the Kalash Events executive management.
          </p>

          {/* Tab Selector */}
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm mt-4">
            <button
              onClick={() => {
                setActiveTab("audition");
                setSubmitted(false);
              }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "audition"
                  ? "bg-emerald-700 text-white font-bold shadow-md shadow-emerald-700/20"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <CrownIcon className="w-4 h-4" />
              <span>Contestant Audition Pass</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("client");
                setSubmitted(false);
              }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "client"
                  ? "bg-emerald-700 text-white font-bold shadow-md shadow-emerald-700/20"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <SparklesIcon className="w-4 h-4" />
              <span>Event Planning &amp; RFP</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("sponsor");
                setSubmitted(false);
              }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "sponsor"
                  ? "bg-emerald-700 text-white font-bold shadow-md shadow-emerald-700/20"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <HandshakeIcon className="w-4 h-4" />
              <span>Partner &amp; Sponsor</span>
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">
          
          {submitted ? (
            /* Submission Success & Digital Pass Display */
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-600 flex items-center justify-center text-emerald-700 shadow-md">
                <CheckCircleIcon className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Application Successfully Received!
                </span>
                <h3 className="text-3xl font-black text-slate-950">
                  Welcome to the Kalash Events Family
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Our coordinators will contact you within 24 hours to confirm your audition time slot and venue orientation details.
                </p>
              </div>

              {/* Digital Pass / Ticket Card */}
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/50 border-2 border-emerald-600/40 shadow-lg space-y-4 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>

                <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3">
                  <div className="flex items-center gap-2">
                    <KalashPotIcon className="w-6 h-6 text-emerald-700" />
                    <div>
                      <strong className="text-xs text-slate-950 block font-bold">Kalash Events Pvt. Ltd.</strong>
                      <span className="text-[10px] text-emerald-700 font-semibold">Official Verification Pass</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300 shadow-xs">
                    {ticketId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 text-[10px] block font-medium">Registrant</span>
                    <strong className="text-slate-950 font-bold">
                      {activeTab === "audition" ? auditionForm.participantName : clientForm.contactPerson}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[10px] block font-medium">Contact Phone</span>
                    <strong className="text-slate-950 font-bold">
                      {activeTab === "audition" ? auditionForm.phone : clientForm.phone}
                    </strong>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 text-[10px] block font-medium">Selected Category</span>
                    <strong className="text-emerald-800 font-bold">
                      {activeTab === "audition" ? auditionForm.program : clientForm.eventType}
                    </strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
                  <span>Venue: Rastriya Nachghar / Central Office</span>
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>

              {/* Action Buttons for Pass */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/9779841436874?text=Hello%20Kalash%20Events,%20I%20have%20submitted%20my%20registration%20pass%20(${ticketId})%20for%20${activeTab === "audition" ? auditionForm.participantName : clientForm.contactPerson}.%20Please%20confirm%20my%20audition.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all text-xs shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>

                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors text-xs"
                >
                  Submit Another Application
                </button>
              </div>

            </div>
          ) : activeTab === "audition" ? (
            /* Tab 1: Audition Registration Form */
            <form onSubmit={handleAuditionSubmit} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-950">Contestant Audition Application</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Open for girls and boys across Kathmandu Valley and Nepal. No previous stage experience required.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Program Choice */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">
                    Choose Program / Pageant *
                  </label>
                  <select
                    value={auditionForm.program}
                    onChange={(e) => setAuditionForm({ ...auditionForm, program: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs"
                  >
                    <option value="Newa: Maicha Baucha (नेवा: मैचा बौचा)">
                      Newa: Maicha Baucha (Cultural Talent &amp; Grooming - Ages 8–14)
                    </option>
                    <option value="Little Miss Angel Nepal">
                      Little Miss Angel Nepal (Kids Confidence &amp; Runway - Ages 7–14)
                    </option>
                    <option value="Little Master Nepal">
                      Little Master Nepal (Boys Grooming &amp; Ramp Walk - Ages 7–14)
                    </option>
                    <option value="Misa Dhime Baja Competition">
                      Misa Dhime Baja (Female Traditional Percussion Championship)
                    </option>
                    <option value="Badhya Samrat Junior Beat Master Madal">
                      Badhya Samrat Junior Beat Master (Folk Madal Percussion Contest)
                    </option>
                  </select>
                </div>

                {/* Participant Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">
                    Contestant Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alisha Maharjan"
                    value={auditionForm.participantName}
                    onChange={(e) => setAuditionForm({ ...auditionForm, participantName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>

                {/* Age & Gender */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 block">Age (Years) *</label>
                    <input
                      type="number"
                      min="5"
                      max="20"
                      required
                      value={auditionForm.age}
                      onChange={(e) => setAuditionForm({ ...auditionForm, age: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 block">Gender *</label>
                    <select
                      value={auditionForm.gender}
                      onChange={(e) => setAuditionForm({ ...auditionForm, gender: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs"
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                  </div>
                </div>

                {/* Parent / Guardian Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Maharjan"
                    value={auditionForm.parentName}
                    onChange={(e) => setAuditionForm({ ...auditionForm, parentName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>

                {/* Primary Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9841436874"
                    value={auditionForm.phone}
                    onChange={(e) => setAuditionForm({ ...auditionForm, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>

                {/* City & Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">
                    City / Location in Nepal *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lalitpur / Kathmandu"
                    value={auditionForm.city}
                    onChange={(e) => setAuditionForm({ ...auditionForm, city: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>

                {/* Talent Category */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">
                    Special Talent (If Any)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Singing, Traditional Dance, Art, Speech"
                    value={auditionForm.talent}
                    onChange={(e) => setAuditionForm({ ...auditionForm, talent: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>

                {/* Remarks */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">
                    Any Additional Questions or Expectations
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Feel free to mention any specific queries regarding timing, school exam schedules, or transport."
                    value={auditionForm.remarks}
                    onChange={(e) => setAuditionForm({ ...auditionForm, remarks: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[12px] text-slate-500 flex items-center gap-1.5">
                  <LockIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>Your details remain confidential under Kalash Events privacy code.</span>
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-emerald-700 hover:bg-emerald-800 hover:scale-105 active:scale-95 transition-all text-sm shadow-md"
                >
                  <SparklesIcon className="w-4 h-4 text-emerald-200" />
                  <span>Generate Audition Pass Now</span>
                </button>
              </div>
            </form>
          ) : activeTab === "client" ? (
            /* Tab 2: Client RFP / Event Booking */
            <form onSubmit={handleClientSubmit} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-950">Event Planning &amp; Production Inquiry</h3>
                <p className="text-xs text-slate-600 mt-1">
                  For organizations, brands, corporate houses, and families seeking professional event management.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">Organization / Family Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Premier Bank / Maharjan Family"
                    value={clientForm.organization}
                    onChange={(e) => setClientForm({ ...clientForm, organization: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suman Shrestha"
                    value={clientForm.contactPerson}
                    onChange={(e) => setClientForm({ ...clientForm, contactPerson: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">Phone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9841436874"
                    value={clientForm.phone}
                    onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. contact@company.com"
                    value={clientForm.email}
                    onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">Event Type *</label>
                  <select
                    value={clientForm.eventType}
                    onChange={(e) => setClientForm({ ...clientForm, eventType: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs"
                  >
                    <option value="Corporate Gala & Award Night">Corporate Gala &amp; Award Night</option>
                    <option value="Brand Product Launch & Press Meet">Brand Product Launch &amp; Press Meet</option>
                    <option value="Luxury Cultural Wedding & Mandap">Luxury Cultural Wedding &amp; Mandap</option>
                    <option value="School / College Cultural Fest">School / College Cultural Fest</option>
                    <option value="Dhime / Madal Percussion Show">Dhime / Madal Percussion Show</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">Estimated Attendees</label>
                  <input
                    type="text"
                    placeholder="e.g. 400 Guests"
                    value={clientForm.estimatedGuests}
                    onChange={(e) => setClientForm({ ...clientForm, estimatedGuests: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">Event Scope &amp; Brief</label>
                  <textarea
                    rows={3}
                    placeholder="Outline your target date, venue preference, audiovisual requirements, and expectations."
                    value={clientForm.notes}
                    onChange={(e) => setClientForm({ ...clientForm, notes: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full font-bold text-white bg-emerald-700 hover:bg-emerald-800 hover:scale-105 transition-all text-sm shadow-md"
                >
                  Submit Proposal Request
                </button>
              </div>
            </form>
          ) : (
            /* Tab 3: Partner & Sponsor */
            <div className="space-y-6 text-center py-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-xs">
                <CrownIcon className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-950">
                  Partner with Nepal&apos;s Most Celebrated Pageants
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Join reputable brands, banks, media houses, and fashion labels that sponsor <em>Newa: Maicha Baucha</em> and <em>Little Miss Angel Nepal</em>. Gain prominent stage visibility, digital reach across thousands of families, and direct brand affinity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-950 block font-bold">Title Sponsorship</strong>
                  <span className="text-slate-600 text-[11px] block mt-1">Naming rights, trophy branding &amp; media presence</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-950 block font-bold">Category Partner</strong>
                  <span className="text-slate-600 text-[11px] block mt-1">Apparel, Crown, Hospitality or Media Partner</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-950 block font-bold">Cultural Patron</strong>
                  <span className="text-slate-600 text-[11px] block mt-1">Supporting language, youth scholarships &amp; arts</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:kalashevents12@gmail.com?subject=Sponsorship%20Inquiry%20-%20Kalash%20Events"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-emerald-700 hover:bg-emerald-800 text-xs transition-colors shadow-sm"
                >
                  <MailIcon className="w-4 h-4" />
                  <span>Email Sponsorship Deck</span>
                </a>
                <a
                  href="tel:+9779841436874"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 text-xs transition-colors shadow-xs"
                >
                  <PhoneIcon className="w-4 h-4 text-emerald-700" />
                  <span>Call Director: +977 9841436874</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
