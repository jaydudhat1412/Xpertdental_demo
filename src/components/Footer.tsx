import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Stethoscope,
  MessageCircle
} from "lucide-react";
import { clinicData } from "../data/mockData";

export default function Footer() {
  const footerLinks = [
    {
      title: "Clinic & Info",
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
      title: "Core Treatments",
      links: [
        { label: "General Dentistry", href: "/services" },
        { label: "Dental Implants", href: "/services" },
        { label: "Root Canal Treatment", href: "/services" },
        { label: "Teeth Whitening", href: "/services" },
        { label: "Braces & Orthodontics", href: "/services" },
        { label: "Cosmetic Dentistry", href: "/services" },
        { label: "Pediatric Dentistry", href: "/services" },
        { label: "Emergency Dental Care", href: "/services" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Phone size={17} className="text-[#0284c7] shrink-0 mt-0.5" />,
      text: clinicData.phone,
      href: `tel:${clinicData.raw_phone}`,
    },
    {
      icon: <MessageCircle size={17} className="text-emerald-500 shrink-0 mt-0.5" />,
      text: "WhatsApp Consultations",
      href: `https://wa.me/${clinicData.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Xpert%20Dental,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments.`,
      target: "_blank"
    },
    {
      icon: <Mail size={17} className="text-[#0284c7] shrink-0 mt-0.5" />,
      text: clinicData.email,
      href: `mailto:${clinicData.email}`,
    },
    {
      icon: <MapPin size={17} className="text-[#0284c7] shrink-0 mt-0.5" />,
      text: clinicData.address,
      href: clinicData.mapUrl,
      target: "_blank",
    },
    {
      icon: <Clock size={17} className="text-[#0284c7] shrink-0 mt-0.5" />,
      text: `Mon - Fri: ${clinicData.hours["Mon-Fri"]} | Sat: ${clinicData.hours["Sat"]}`,
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-[#07111e] text-slate-700 dark:text-slate-300 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10">
          
          {/* Brand section */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-10 h-10 rounded-lg bg-[#0284c7] flex items-center justify-center text-white shadow-sm">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold text-[#0f2942] dark:text-white tracking-tight">
                Xpert<span className="text-[#0284c7]">Dental</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              {clinicData.short_description}
            </p>
            <div className="p-3 bg-white dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                Client Demo Template:
              </span>
              Designed for easy customization — replace clinic name, doctors, and treatments with actual clinic details.
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors inline-flex items-center gap-1.5"
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
            <h4 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles size={15} className="text-[#0284c7]" />
              Clinic Desk & Hours
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      className="hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors leading-relaxed"
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

        {/* Footer bottom legal & quick contact */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {clinicData.clinic_name}. Professional Dental Clinic Demo. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <a
              href={`tel:${clinicData.raw_phone}`}
              className="text-[#0284c7] dark:text-[#38bdf8] hover:underline font-bold"
            >
              Call Clinic: {clinicData.phone}
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <Link to="/contact" className="hover:text-[#0284c7] transition-colors">
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
