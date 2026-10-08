import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  X, 
  Home, 
  Info, 
  Stethoscope, 
  UserCheck, 
  PhoneCall, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Sun, 
  Moon, 
  Calendar,
  ExternalLink
} from "lucide-react";
import { clinicData } from "../data/mockData";
import { cn } from "../lib/utils";
import { useTheme } from "../context/ThemeContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; path: string }>;
  isActive: (path: string) => boolean;
}

const navMetadata: Record<string, { icon: React.ComponentType<{ className?: string }>; description: string; number: string }> = {
  Home: { icon: Home, description: "Hospital overview & care", number: "01" },
  About: { icon: Info, description: "Facility & modern technology", number: "02" },
  Services: { icon: Stethoscope, description: "Implants, whitening & surgery", number: "03" },
  Doctors: { icon: UserCheck, description: "Surgeons & specialists", number: "04" },
  Contact: { icon: MapPin, description: "Location, hours & booking", number: "05" },
};

export default function MobileNav({ isOpen, onClose, navLinks, isActive }: MobileNavProps) {
  const { theme, toggleTheme } = useTheme();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Framer motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 25 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 350, damping: 26 }
    },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Translucent Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Full-Screen Sliding Navigation Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300, mass: 0.8 }}
            className="fixed inset-0 w-full h-[100dvh] bg-white dark:bg-[#121113] flex flex-col justify-between overflow-y-auto z-10 shadow-2xl will-change-transform"
          >
            {/* Top Bar inside Full-Screen Menu */}
            <div className="shrink-0 flex items-center justify-between px-5 h-20 border-b border-gray-200/80 dark:border-[#222222]">
              <Link 
                to="/" 
                onClick={onClose}
                className="flex items-center space-x-3 group"
              >
                <img 
                  loading="lazy" 
                  referrerPolicy="no-referrer" 
                  src="/logo.svg"
                  alt="Xpertdental Logo"
                  className="w-10 h-10 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-none">
                    Xpert<span className="text-[#d87943] dark:text-[#e78a53]">dental</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 dark:text-[#888888] mt-0.5">
                    Dental Hospital
                  </span>
                </div>
              </Link>

              <div className="flex items-center space-x-2">
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  className="p-2.5 rounded-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#201f23] hover:bg-gray-200 dark:hover:bg-[#2a292e] transition-colors cursor-pointer"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-700" />
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-[#201f23] hover:bg-gray-200 dark:hover:bg-[#2a292e] hover:text-[#d87943] dark:hover:text-[#e78a53] focus:outline-none transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Navigation Body */}
            <div className="flex-1 px-5 py-6 overflow-y-auto space-y-6">
              {/* Navigation Links with animated stagger */}
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-2.5"
              >
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  const meta = navMetadata[link.name] || {
                    icon: ChevronRight,
                    description: "Dental care",
                    number: "00",
                  };
                  const Icon = meta.icon;

                  return (
                    <motion.li key={link.name} variants={itemVariants}>
                      <Link
                        to={link.path}
                        onClick={onClose}
                        className={cn(
                          "group flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200",
                          active
                            ? "bg-[#d87943]/10 dark:bg-[#e78a53]/15 border-[#d87943]/30 dark:border-[#e78a53]/40 shadow-xs"
                            : "bg-gray-50/70 dark:bg-[#1a191d]/70 border-gray-100 dark:border-[#222222] hover:bg-gray-100 dark:hover:bg-[#222126]"
                        )}
                      >
                        <div className="flex items-center space-x-3.5">
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                            active 
                              ? "bg-[#d87943] dark:bg-[#e78a53] text-white dark:text-[#121113]"
                              : "bg-white dark:bg-[#252428] text-gray-600 dark:text-gray-300 group-hover:text-[#d87943] dark:group-hover:text-[#e78a53] border border-gray-200 dark:border-[#333333]"
                          )}>
                            <Icon className="w-5 h-5" />
                          </div>

                          <div className="flex flex-col text-left">
                            <div className="flex items-center space-x-2">
                              <span className={cn(
                                "text-lg font-bold tracking-tight",
                                active
                                  ? "text-[#d87943] dark:text-[#e78a53]"
                                  : "text-gray-900 dark:text-white group-hover:text-[#d87943] dark:group-hover:text-[#e78a53]"
                              )}>
                                {link.name}
                              </span>
                              <span className="text-[11px] font-mono font-medium text-gray-400 dark:text-[#666666]">
                                /{meta.number}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-[#888888] font-medium">
                              {meta.description}
                            </span>
                          </div>
                        </div>

                        <ChevronRight className={cn(
                          "w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 shrink-0",
                          active 
                            ? "text-[#d87943] dark:text-[#e78a53]" 
                            : "text-gray-400 dark:text-[#666666] group-hover:text-gray-700 dark:group-hover:text-gray-300"
                        )} />
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Direct Quick Actions Card */}
              <div className="rounded-xl border border-gray-200 dark:border-[#222222] bg-gray-50 dark:bg-[#18171b] p-4 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-[#888888]">
                  Hospital Highlights & Hours
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start space-x-2.5 text-gray-700 dark:text-gray-300">
                    <Clock className="w-4 h-4 text-[#d87943] dark:text-[#e78a53] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Visiting Hours</p>
                      <p className="text-gray-500 dark:text-[#999999]">Mon - Fri: {clinicData.hours["Mon-Fri"]}</p>
                      <p className="text-gray-500 dark:text-[#999999]">Sat: {clinicData.hours["Sat"]} | Sun: {clinicData.hours["Sun"]}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2.5 text-gray-700 dark:text-gray-300 pt-1.5 border-t border-gray-200/60 dark:border-[#262529]">
                    <MapPin className="w-4 h-4 text-[#d87943] dark:text-[#e78a53] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Junagadh Location</p>
                      <p className="text-gray-500 dark:text-[#999999] leading-snug">{clinicData.short_address}</p>
                      <a 
                        href={clinicData.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[11px] font-bold text-[#d87943] dark:text-[#e78a53] hover:underline mt-1"
                      >
                        Open in Google Maps <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center space-x-2 py-3 px-3 rounded-lg border border-gray-200 dark:border-[#2b2a2f] bg-white dark:bg-[#1e1d22] text-gray-800 dark:text-gray-200 hover:border-[#d87943] dark:hover:border-[#e78a53] transition-colors text-xs font-bold shadow-2xs"
                >
                  <PhoneCall className="w-4 h-4 text-[#d87943] dark:text-[#e78a53]" />
                  <span>Call Hospital</span>
                </a>
                <a
                  href="https://wa.me/919104827340?text=Hello%20Xpertdental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 px-3 rounded-lg border border-emerald-200 dark:border-emerald-950 bg-emerald-50 dark:bg-[#0f241a] text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 transition-colors text-xs font-bold shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Bottom Sticky Action Button */}
            <div className="shrink-0 p-5 border-t border-gray-200 dark:border-[#222222] bg-white/95 dark:bg-[#121113]/95 backdrop-blur-md">
              <a
                href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                onClick={onClose}
                className="w-full flex items-center justify-center space-x-2.5 py-4 px-6 rounded-xl bg-[#d87943] hover:bg-[#b85e2b] dark:bg-[#e78a53] dark:hover:bg-[#f59e6c] text-white dark:text-[#121113] font-bold text-sm sm:text-base tracking-wide shadow-md transition-all active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span>Book Appointment • {clinicData.phone}</span>
              </a>
              <p className="text-[11px] text-center text-gray-500 dark:text-[#777777] font-medium mt-2.5">
                Experienced Specialists • Advanced 3D Technology • Junagadh
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
