"use client";

import React, { useState } from "react";
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon, FacebookIcon, InstagramIcon, CheckCircleIcon } from "./Icons";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry / Audition",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wider uppercase shadow-sm">
            <PhoneIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Connect with Kalash Events
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether inquiring about upcoming pageant auditions, booking event production, or proposing a sponsorship collaboration, our team is always eager to connect.
          </p>
        </div>

        {/* Contact Info + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Call Direct / WhatsApp</h4>
                  <p className="text-[11px] text-slate-500">Available 9:00 AM – 7:00 PM NPT</p>
                </div>
              </div>
              <div className="space-y-1.5 pt-2">
                <a
                  href="tel:+9779841436874"
                  className="block text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  +977 984-1436874 <span className="text-[11px] font-normal text-slate-500">(Executive Chairperson)</span>
                </a>
                <a
                  href="tel:+9779862433311"
                  className="block text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
                >
                  +977 986-2433311 <span className="text-[11px] font-normal text-slate-500">(Audition Coordinator)</span>
                </a>
                <a
                  href="tel:+9779703001122"
                  className="block text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
                >
                  +977 970-3001122 <span className="text-[11px] font-normal text-slate-500">(Production Desk)</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Official Email</h4>
                  <p className="text-[11px] text-slate-500">For proposals &amp; formal decks</p>
                </div>
              </div>
              <a
                href="mailto:kalashevents12@gmail.com"
                className="block text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors pt-1"
              >
                kalashevents12@gmail.com
              </a>
            </div>

            {/* Location & Regular Venues */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Central Hub &amp; Venues</h4>
                  <p className="text-[11px] text-slate-500">Kathmandu, Bagmati Province, Nepal</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Central Event Office &amp; Grooming Studios in Kathmandu. Flagship pageants hosted regularly at <strong>Rastriya Nachghar (National Theatre), Jamal</strong> and <strong>Army Officers Club, Bhrikutimandap</strong>.
              </p>
            </div>

            {/* Social Media Connect Links */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 space-y-3 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600">
                Official Digital Channels
              </h4>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://www.facebook.com/Kalasheventspvtltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 text-xs font-semibold transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-600" />
                  <span>Facebook Page (6.2K+ Fans)</span>
                </a>
                <a
                  href="https://www.instagram.com/kalashevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-50 border border-pink-200 text-pink-700 hover:bg-pink-100 text-xs font-semibold transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-600" />
                  <span>@kalashevents</span>
                </a>
                <a
                  href="https://wa.me/9779841436874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-[#fafbfc] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md">
            {sent ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-600 flex items-center justify-center text-emerald-700">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">Thank You for Reaching Out!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Your message has been dispatched to Kalash Events Pvt. Ltd. management. Our team will review your inquiry and get back promptly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-xl font-bold text-slate-950">Direct Message Desk</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Send your inquiry directly to our executive team.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 block">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anish Maharjan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 block">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9841436874"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 block">Subject / Purpose</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs"
                    >
                      <option value="General Inquiry / Audition">General Inquiry / Audition Details</option>
                      <option value="Newa: Maicha Baucha Registration">Newa: Maicha Baucha Registration</option>
                      <option value="Little Miss Angel Nepal">Little Miss Angel Nepal</option>
                      <option value="Corporate Event Production">Corporate Event Production</option>
                      <option value="Sponsorship & Brand Partnership">Sponsorship &amp; Brand Partnership</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 block">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can Kalash Events assist you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 shadow-xs placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-emerald-700 hover:bg-emerald-800 hover:scale-105 active:scale-95 transition-all text-sm shadow-md"
                  >
                    Send Message Now
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
