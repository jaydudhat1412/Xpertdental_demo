import { motion, AnimatePresence } from "motion/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { clinicData } from "../data/mockData";
import { cn } from "../lib/utils";
import ThemeToggle from "./ThemeToggle";
import BackToTop from "./BackToTop";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950 transition-colors duration-200">
      {/* Top Bar */}
      <div className="bg-blue-900 dark:bg-slate-950 text-white py-2 px-4 sm:px-6 lg:px-8 text-sm hidden md:block border-b border-blue-800/50 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-300" />
              <span>{clinicData.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-300" />
              <span>{clinicData.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-300" />
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
          "sticky top-0 z-50 transition-all duration-300 ",
          scrolled 
            ? "bg-white/90 dark:bg-gray-900/90 shadow-md border-b border-gray-100 dark:border-gray-800" 
            : "bg-white/95 dark:bg-gray-900/95 border-b border-gray-100/50 dark:border-gray-800/50"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <img
                  src="/logo.svg"
                  alt="Xpertdental Logo"
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full object-contain shadow-md group-hover:scale-105 transition-transform duration-300 ring-1 ring-amber-500/40"
                />
                <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Xpert<span className="text-blue-600 dark:text-blue-400">dental</span></span>
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
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" 
                    />
                  )}
                </Link>
              ))}
              
              {/* Theme Toggle Button */}
              <ThemeToggle />
              <a href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                className="bg-gray-900 dark:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300 shadow-md hover:shadow-md hover:-translate-y-0.5 transform"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="flex items-center space-x-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none p-2 rounded-lg"
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden shadow-md"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      isActive(link.path)
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-bold"
                        : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/60"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center mt-4 bg-gray-900 dark:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-md"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/logo.svg"
                  alt="Xpertdental Logo"
                  className="w-12 h-12 rounded-full object-contain shadow-lg ring-1 ring-amber-500/40"
                />
                <span className="text-xl font-bold text-white">Xpertdental</span>
              </div>
              <p className="text-gray-400 mb-6">
                Providing world-class dental care with state-of-the-art technology and compassionate professionals.
              </p>
              <div className="flex space-x-4">
                <a 
                  href={clinicData.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-md hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={clinicData.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300 shadow-md hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Dental Implants</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Teeth Whitening</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Braces & Aligners</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Root Canal</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-gray-400">{clinicData.address}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-gray-400">{clinicData.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-gray-400">{clinicData.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {clinicData.clinic_name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
