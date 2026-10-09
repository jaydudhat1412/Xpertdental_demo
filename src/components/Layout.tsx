import { motion } from "motion/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Sun, Moon } from "lucide-react";
import { clinicData } from "../data/mockData";
import { cn } from "../lib/utils";
import { useTheme } from "../context/ThemeContext";
import BackToTop from "./BackToTop";
import WhatsAppButton from "./WhatsAppButton";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import { updateSeoMetadata } from "../utils/seo";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Dynamically update SEO metadata (title, meta description, og/twitter tags, schema.org) on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    updateSeoMetadata(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          if (isScrolled !== lastScrolled) {
            lastScrolled = isScrolled;
            setScrolled(isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 dark:text-[#c1c1c1] bg-white dark:bg-[#121113] transition-colors duration-200">
      {/* Top Bar */}
      <div className="bg-[#527575] dark:bg-[#121212] text-white py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm hidden md:block border-b border-[#446060] dark:border-[#222222]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center space-x-2 hover:text-white/80 transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#e78a53]" />
              <span>{clinicData.phone}</span>
            </a>
            <a href={`mailto:${clinicData.email}`} className="flex items-center space-x-2 hover:text-white/80 transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#e78a53]" />
              <span>{clinicData.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#e78a53]" />
              <span>{clinicData.short_address}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 backdrop-blur-md",
          scrolled 
            ? "bg-white/95 dark:bg-[#121212]/95 border-b border-gray-200 dark:border-[#222222] shadow-xs" 
            : "bg-white/90 dark:bg-[#121212]/90 border-b border-gray-100 dark:border-[#222222]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Brand Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <img 
                  loading="lazy" 
                  referrerPolicy="no-referrer" 
                  src="/logo.svg"
                  alt="Xpertdental Logo"
                  className="w-10 h-10 md:w-11 md:h-11 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Xpert<span className="text-[#d87943] dark:text-[#e78a53]">dental</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "relative text-sm font-semibold tracking-wide transition-colors py-2",
                    isActive(link.path) 
                      ? "text-[#d87943] dark:text-[#e78a53]" 
                      : "text-gray-700 hover:text-[#d87943] dark:text-gray-300 dark:hover:text-[#e78a53]"
                  )}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d87943] dark:bg-[#e78a53] rounded-sm" 
                    />
                  )}
                </Link>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="p-2 rounded-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#222222] transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {/* Book Appointment CTA Button */}
              <a 
                href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                className="bg-[#d87943] hover:bg-[#b85e2b] dark:bg-[#e78a53] dark:hover:bg-[#f59e6c] text-white dark:text-[#121113] px-6 py-2.5 rounded-sm text-sm font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5 transform shadow-xs"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Controls (Theme Toggle + Menu Button) */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={toggleTheme}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="p-2 rounded-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#222222] transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-800 dark:text-gray-200 hover:text-[#d87943] dark:hover:text-[#e78a53] focus:outline-none p-2 rounded-sm cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Animated Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
        isActive={isActive}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <CallToAction />

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
