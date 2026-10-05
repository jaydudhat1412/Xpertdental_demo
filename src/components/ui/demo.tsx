"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Clock,
  Sparkles,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { clinicData } from "@/data/mockData";

export function HoverFooter() {
  // Footer link data tailored to Xpertdental
  const footerLinks = [
    {
      title: "About Hospital",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Specialist Doctors", href: "/doctors" },
        { label: "Clinical Infrastructure", href: "/about" },
        { label: "Patient Testimonials", href: "/#testimonials" },
      ],
    },
    {
      title: "Dental Treatments",
      links: [
        { label: "Dental Implants", href: "/services/1" },
        { label: "Teeth Whitening", href: "/services/2" },
        { label: "Braces & Aligners", href: "/services/3" },
        {
          label: "Root Canal Therapy",
          href: "/services/4",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data tailored to Xpertdental
  const contactInfo = [
    {
      icon: <Phone size={18} className="text-[#d87943] dark:text-[#e78a53]" />,
      text: clinicData.phone,
      href: `tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      icon: <Mail size={18} className="text-[#d87943] dark:text-[#e78a53]" />,
      text: clinicData.email,
      href: `mailto:${clinicData.email}`,
    },
    {
      icon: <MapPin size={18} className="text-[#d87943] dark:text-[#e78a53]" />,
      text: clinicData.short_address,
      href: clinicData.mapUrl,
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: clinicData.social.facebook },
    { icon: <Instagram size={20} />, label: "Instagram", href: clinicData.social.instagram },
  ];

  return (
    <footer className="bg-white dark:bg-[#121113] text-gray-800 dark:text-[#c1c1c1] relative h-fit rounded-3xl overflow-hidden m-4 sm:m-8 border border-gray-200 dark:border-[#222222]">
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#d87943] dark:text-[#e78a53] text-3xl font-extrabold">
                &hearts;
              </span>
              <span className="text-gray-900 dark:text-white text-3xl font-bold">{clinicData.clinic_name}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-[#888888]">
              Multispecialty Dental Hospital & Implant Center in Junagadh, Gujarat. World-class oral healthcare with gentle touch.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#d87943] dark:hover:text-[#e78a53] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#d87943] dark:bg-[#e78a53] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-gray-900 dark:text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#d87943] dark:hover:text-[#e78a53] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#d87943] dark:hover:text-[#e78a53] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-200 dark:border-[#222222] my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 text-gray-500 dark:text-[#888888]">
          {/* Social icons */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-[#d87943] dark:hover:text-[#e78a53] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {clinicData.clinic_name} Dental Hospital. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect with animation name "Xpertdental" */}
      <div className="flex h-24 sm:h-36 md:h-44 my-4 items-center justify-center overflow-hidden px-4">
        <TextHoverEffect text="Xpertdental" className="z-20 w-full max-w-5xl" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
