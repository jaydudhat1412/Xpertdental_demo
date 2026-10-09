"use client";

import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Facebook,
  Instagram
} from "lucide-react";
import { clinicData } from "../data/mockData";
import { FooterBackgroundGradient, TextHoverEffect } from "./ui/hover-footer";

export default function Footer() {
  const footerLinks = [
    {
      title: "Clinic & Hospital",
      links: [
        { label: "Home", href: "/" },
        { label: "About Our Clinic", href: "/about" },
        { label: "Specialist Doctors", href: "/doctors" },
        { label: "Patient Reviews", href: "/#reviews" },
        { label: "Frequently Asked Questions", href: "/#faq" },
        { label: "Contact & Directions", href: "/contact" },
      ],
    },
    {
      title: "Dental Treatments",
      links: [
        { label: "Dental Implants", href: "/services/1" },
        { label: "Root Canal Treatment", href: "/services/2" },
        { label: "Teeth Whitening", href: "/services/3" },
        { label: "Braces & Aligners", href: "/services/4" },
        { label: "Cosmetic Dentistry", href: "/services/5" },
        { label: "Pediatric Dental Care", href: "/services/6" },
        { label: "General Dentistry", href: "/services" },
      ],
    },
  ];

  const phoneDisplay = clinicData?.phone || "+91-9104827340";
  const rawPhone =
    clinicData?.raw_phone ||
    (clinicData?.phone ? clinicData.phone.replace(/[^0-9+]/g, "") : "+919104827340");
  const whatsappDigits = (
    clinicData?.whatsapp ||
    clinicData?.phone ||
    "+919104827340"
  ).replace(/[^0-9]/g, "");

  const contactInfo = [
    {
      icon: <Phone size={17} className="text-[#d87943] dark:text-[#e78a53] shrink-0 mt-0.5" />,
      text: phoneDisplay,
      href: `tel:${rawPhone}`,
    },
    {
      icon: <MessageCircle size={17} className="text-emerald-500 shrink-0 mt-0.5" />,
      text: "WhatsApp Consultations",
      href: `https://wa.me/${whatsappDigits}?text=Hello%20Xpert%20Dental,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments.`,
      target: "_blank",
    },
    {
      icon: <Mail size={17} className="text-[#d87943] dark:text-[#e78a53] shrink-0 mt-0.5" />,
      text: clinicData?.email || "xpertdental991@gmail.com",
      href: `mailto:${clinicData?.email || "xpertdental991@gmail.com"}`,
    },
    {
      icon: <MapPin size={17} className="text-[#d87943] dark:text-[#e78a53] shrink-0 mt-0.5" />,
      text: clinicData?.address || clinicData?.short_address || "Akshar Plaza, 1, Zanzarda chowkdi Bypass Road, Junagadh",
      href: clinicData?.mapUrl || "https://maps.app.goo.gl/ZccyYBAUFxMaEWps8",
      target: "_blank",
    },
    {
      icon: <Clock size={17} className="text-[#527575] dark:text-[#5f8787] shrink-0 mt-0.5" />,
      text: `Mon - Fri: ${clinicData?.hours?.["Mon-Fri"] || "9:00 AM - 7:00 PM"} | Sat: ${clinicData?.hours?.["Sat"] || "9:00 AM - 5:00 PM"}`,
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      label: "Facebook",
      href: clinicData?.social?.facebook || "https://www.facebook.com/share/1R44JqPmaC/",
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      href:
        clinicData?.social?.instagram ||
        "https://www.instagram.com/xpertdental.jnd?igsh=MW5kODM3NTlkeGdiMQ==",
    },
  ];

  return (
    <footer className="bg-white dark:bg-[#121113] text-gray-800 dark:text-[#c1c1c1] relative overflow-hidden border-t border-gray-200 dark:border-[#222222] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10">
          
          {/* Brand section */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                loading="lazy"
                referrerPolicy="no-referrer"
                src="/logo.svg"
                alt="Xpertdental Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Xpert<span className="text-[#d87943] dark:text-[#e78a53]">dental</span>
              </span>
            </Link>

            <p className="text-sm text-gray-600 dark:text-[#888888] leading-relaxed font-normal">
              {clinicData?.short_description ||
                "Multispecialty Dental Hospital & Implant Center in Junagadh, Gujarat. World-class oral healthcare with gentle touch."}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#d87943] text-gray-600 hover:text-white dark:bg-[#1a191b] dark:hover:bg-[#e78a53] dark:text-[#888888] dark:hover:text-[#121113] flex items-center justify-center transition-all duration-200 shadow-xs"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-gray-600 dark:text-[#888888] hover:text-[#d87943] dark:hover:text-[#e78a53] transition-colors inline-flex items-center gap-1.5"
                    >
                      <ArrowRight size={12} className="opacity-40" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div className="lg:col-span-4">
            <h4 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles size={15} className="text-[#d87943] dark:text-[#e78a53]" />
              Clinic Desk & Hours
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-600 dark:text-[#888888]"
                >
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      className="hover:text-[#d87943] dark:hover:text-[#e78a53] transition-colors leading-relaxed"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="leading-relaxed">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big Word Animated Interactive Xpertdental Section */}
        <div className="pt-6 pb-2 my-2 border-t border-gray-100 dark:border-[#222222]">
          <div className="flex h-24 sm:h-36 md:h-44 items-center justify-center overflow-hidden px-2">
            <TextHoverEffect text="Xpertdental" className="z-20 w-full max-w-5xl" />
          </div>
        </div>

        {/* Footer bottom legal & quick contact */}
        <div className="pt-6 border-t border-gray-200 dark:border-[#222222] flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 dark:text-[#888888] gap-4">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {clinicData?.clinic_name || "Xpertdental"} Dental Hospital. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <a
              href={`tel:${rawPhone}`}
              className="text-[#d87943] dark:text-[#e78a53] hover:underline font-bold"
            >
              Call Clinic: {phoneDisplay}
            </a>
            <span className="text-gray-300 dark:text-[#333333]">|</span>
            <Link
              to="/contact"
              className="hover:text-[#d87943] dark:hover:text-[#e78a53] transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
