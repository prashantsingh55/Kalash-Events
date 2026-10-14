"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneIcon, MailIcon, WhatsAppIcon, MenuIcon, XIcon, SparklesIcon } from "./Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Flagship Pageants", href: "#programs" },
    { name: "Services", href: "#services" },
    { name: "Videos", href: "#videos" },
    { name: "Estimator", href: "#calculator" },
    { name: "Gallery", href: "#gallery" },
    { name: "Announcements", href: "#updates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Announcements & Quick Dial Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 select-none relative z-50 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-emerald-50 font-semibold tracking-wide">
              Official Hub: Kalash Events Pvt. Ltd. (कलश इभेन्ट्स)
            </span>
            <span className="hidden md:inline-block text-emerald-500">•</span>
            <span className="hidden md:inline-block text-emerald-200">
              Registrations Open for Newa: Maicha Baucha &amp; Little Miss Angel Nepal
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+9779841436874"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold">+977 984-1436874</span>
            </a>
            <span className="text-emerald-700 hidden sm:inline">|</span>
            <a
              href="mailto:kalashevents12@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MailIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>kalashevents12@gmail.com</span>
            </a>
            <a
              href="https://wa.me/9779841436874?text=Hello%20Kalash%20Events,%20I%20would%20like%20to%20inquire%20about%20your%20events%20and%20pageants."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-emerald-700 hover:bg-emerald-600 text-white px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all shadow-sm"
            >
              <WhatsAppIcon className="w-3 h-3 text-emerald-100" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200"
            : "bg-white/90 backdrop-blur-md py-4 border-b border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Link */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-emerald-600/40 shadow-sm group-hover:border-emerald-600 transition-all">
              <Image
                src="/kalash-logo.jpg"
                alt="Kalash Events Official Logo"
                fill
                sizes="48px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  KALASH
                </span>
                <span className="text-xs uppercase tracking-widest px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                  Events
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-wide">
                Pvt. Ltd. • Kathmandu, Nepal
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#registration"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 shadow-md shadow-emerald-900/15 hover:shadow-emerald-900/30 hover:scale-105 active:scale-95 transition-all"
            >
              <SparklesIcon className="w-4 h-4 text-emerald-200" />
              <span>Audition Register</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl px-4 pt-4 pb-6 mt-2 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="#registration"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-center text-sm font-bold text-white bg-gradient-to-r from-emerald-700 to-teal-900 shadow-sm"
              >
                <SparklesIcon className="w-4 h-4 text-emerald-200" />
                <span>Audition Registration</span>
              </a>

              <a
                href="https://wa.me/9779841436874"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-center text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                <span>Quick WhatsApp: +977 9841436874</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
