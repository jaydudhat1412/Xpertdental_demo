import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { clinicData } from "../data/mockData";

export default function Footer() {
  const footerLinks = [
    {
      title: "Explore Hospital",
      links: [
        { label: "About Hospital", href: "/about" },
        { label: "Our Doctors", href: "/doctors" },
        { label: "All Treatments", href: "/services" },
        { label: "Contact & Appointments", href: "/contact" },
      ],
    },
    {
      title: "Specialized Services",
      links: [
        { label: "Dental Implants", href: "/services/1" },
        { label: "Teeth Whitening", href: "/services/2" },
        { label: "Braces & Aligners", href: "/services/3" },
        { label: "Root Canal Treatment", href: "/services/4" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Phone size={18} className="text-[#d87943] dark:text-[#e78a53] shrink-0" />,
      text: clinicData.phone,
      href: `tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      icon: <Mail size={18} className="text-[#d87943] dark:text-[#e78a53] shrink-0" />,
      text: clinicData.email,
      href: `mailto:${clinicData.email}`,
    },
    {
      icon: <MapPin size={18} className="text-[#d87943] dark:text-[#e78a53] shrink-0 mt-0.5" />,
      text: clinicData.address,
      href: clinicData.mapUrl,
      target: "_blank",
    },
    {
      icon: <Clock size={18} className="text-[#d87943] dark:text-[#e78a53] shrink-0 mt-0.5" />,
      text: `Mon - Fri: ${clinicData.hours["Mon-Fri"]} | Sat: ${clinicData.hours["Sat"]}`,
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-[#121113] text-gray-700 dark:text-[#c1c1c1] relative h-fit overflow-hidden border-t border-gray-200 dark:border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-10">
          
          {/* Brand section */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                loading="lazy"
                referrerPolicy="no-referrer"
                src="/logo.svg"
                alt="Xpertdental Logo"
                className="w-10 h-10 rounded-sm object-contain ring-1 ring-[#d87943]/40 dark:ring-[#e78a53]/40"
              />
              <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-[#d87943] dark:group-hover:text-[#e78a53] transition-colors">
                {clinicData.clinic_name}
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-[#888888] leading-relaxed font-medium">
              Multispecialty Dental Hospital & Implant Center in Junagadh. Delivering high-precision oral healthcare, Class-B sterilization, and advanced surgical dentistry.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={clinicData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-sm bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-[#888888] hover:text-white hover:bg-[#d87943] dark:hover:bg-[#e78a53] transition-all hover:scale-105"
              >
                <Facebook size={18} />
              </a>
              <a
                href={clinicData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-sm bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-[#888888] hover:text-white hover:bg-gradient-to-tr hover:from-[#d87943] hover:to-[#527575] transition-all hover:scale-105"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h4 className="text-gray-900 dark:text-white text-base font-semibold mb-5 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-600 dark:text-[#888888] hover:text-[#d87943] dark:hover:text-[#e78a53] transition-colors inline-flex items-center gap-1.5"
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
            <h4 className="text-gray-900 dark:text-white text-base font-semibold mb-5 tracking-wide flex items-center gap-2">
              <Sparkles size={16} className="text-[#d87943] dark:text-[#e78a53]" />
              Hospital Desk
            </h4>
            <ul className="space-y-3.5">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm text-gray-600 dark:text-[#888888]">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target}
                      rel={item.target ? "noopener noreferrer" : undefined}
                      className="hover:text-[#d87943] dark:hover:text-[#e78a53] transition-colors leading-snug"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="leading-snug">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Text hover effect with Name "Xpertdental" - safely spaced without negative overlapping */}
        <div className="py-6 sm:py-8 my-2 border-y border-gray-200/80 dark:border-[#222222] relative z-20">
          <div className="h-20 sm:h-28 md:h-36 flex items-center justify-center overflow-hidden px-2">
            <TextHoverEffect 
              text="Xpertdental" 
              className="w-full max-w-5xl" 
            />
          </div>
        </div>

        {/* Footer bottom legal & quick contact */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 dark:text-[#888888] gap-4 relative z-20">
          <p className="text-center sm:text-left font-medium">
            &copy; {new Date().getFullYear()} {clinicData.clinic_name} Dental Hospital. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-medium">
            <Link to="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Hospital Info
            </Link>
            <Link to="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Consultation
            </Link>
            <a
              href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
              className="text-[#d87943] dark:text-[#e78a53] hover:underline font-semibold transition-colors"
            >
              Emergency: {clinicData.phone}
            </a>
          </div>
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
