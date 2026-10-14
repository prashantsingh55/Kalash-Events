"use client";

import React from "react";
import Image from "next/image";
import { KalashPotIcon, PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon, WhatsAppIcon, CrownIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#f8faf8] text-slate-600 border-t border-slate-200/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/kalash-logo.jpg"
                  alt="Kalash Events Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-black text-slate-950 tracking-tight">KALASH EVENTS</span>
                <p className="text-[11px] text-emerald-800 uppercase tracking-widest font-bold">
                  कलश इभेन्ट्स प्रा.लि.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nepal&apos;s pioneering cultural pageant organizer and full-service event production agency. Dedicated to youth personality grooming, Newa heritage celebration, and world-class stage excellence.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/Kalasheventspvtltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 transition-colors shadow-xs"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/kalashevents"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 transition-colors shadow-xs"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/9779841436874"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 transition-colors shadow-xs"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-emerald-700 transition-colors">
                  About Our Legacy
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-700 transition-colors">
                  Flagship Pageants
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-emerald-700 transition-colors">
                  Video Highlights &amp; TV
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-700 transition-colors">
                  Production Services
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-700 transition-colors">
                  Budget Estimator
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-700 transition-colors">
                  Media Archives
                </a>
              </li>
              <li>
                <a href="#updates" className="hover:text-emerald-700 transition-colors">
                  Facebook Notices
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-emerald-700 transition-colors">
                  Parent Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-700 transition-colors">
                  Contact &amp; Venues
                </a>
              </li>
            </ul>
          </div>

          {/* Signature Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Proprietary Pageants
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-slate-800 font-medium">
                <CrownIcon className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>Newa: Maicha Baucha (नेवा: मैचा बौचा)</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-800 font-medium">
                <CrownIcon className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>Little Miss Angel Nepal</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-800 font-medium">
                <CrownIcon className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>Little Master Nepal</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-800 font-medium">
                <KalashPotIcon className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>Misa Dhime Baja Championship</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-800 font-medium">
                <KalashPotIcon className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                <span>Junior Beat Master Madal Contest</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Executive Office
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Kathmandu, Bagmati, Nepal</span>
              </div>
              <div className="flex items-start gap-2">
                <PhoneIcon className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+9779841436874" className="hover:text-emerald-700 block font-semibold text-slate-900">
                    +977 984-1436874
                  </a>
                  <a href="tel:+9779862433311" className="hover:text-emerald-700 block text-slate-600">
                    +977 986-2433311
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MailIcon className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <a href="mailto:kalashevents12@gmail.com" className="hover:text-emerald-700 font-medium text-slate-900">
                  kalashevents12@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#registration"
                className="w-full inline-block text-center py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
              >
                Register for Audition
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; 2025–2026 Kalash Events Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Empowering Nepali Youth &amp; Preserving Living Traditions</span>
            <span>•</span>
            <span className="text-emerald-800 font-semibold">Kathmandu, Nepal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
