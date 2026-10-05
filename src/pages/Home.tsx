import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Shield, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  X, 
  User, 
  ChevronDown 
} from "lucide-react";
import { clinicData, testimonials, faqs, oralHealthTips, doctors as mockDoctors, services as mockServices } from "../data/mockData";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

const heroSlides = [
  {
    image: "/assets/clinicboardphoto.webp",
    badge: "Hospital Facility • Junagadh",
    title: "Xpert Dental Hospital",
    description: "Akshar Plaza, 1, Zanzarda Chowkdi Bypass Road, above Dr. Sangani Hospital"
  },
  {
    image: "/assets/dental-operatory-bg.webp",
    badge: "Sterile Operatory Suites",
    title: "Advanced Surgical & Implant Facility",
    description: "Ultra-modern ergonomic operatory chairs with Class-B autoclaving sterilization"
  },
  {
    image: "/assets/dental-clinic-bg.webp",
    badge: "Modern Clinical Infrastructure",
    title: "Multispecialty Diagnosis & Care",
    description: "Low-radiation digital radiography, intraoral imaging, and comfortable ambiance"
  },
  {
    image: "/assets/dental-care.webp",
    badge: "Clinical Excellence",
    title: "Painless Dental & Maxillofacial Care",
    description: "Led by MDS specialist surgeons Dr. Kishan Dudhat & Dr. Nikunj Bhuva"
  },
  {
    image: "/assets/dental-smile.webp",
    badge: "Aesthetic Dentistry",
    title: "Natural Smile Design & Whitening",
    description: "Precision ceramic veneers, crown restorations, and cosmetic smile makeovers"
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedTipCategory, setSelectedTipCategory] = useState("All");
  const [activeTip, setActiveTip] = useState<typeof oralHealthTips[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [doctors] = useState<any[]>(mockDoctors);
  const [services] = useState<any[]>(mockServices);

  // Mobile Touch Swipe Handlers for Hero Slider
  const heroTouchStartX = useRef<number | null>(null);

  const handleHeroTouchStart = (e: React.TouchEvent) => {
    heroTouchStartX.current = e.touches[0].clientX;
    setIsSliderPaused(true);
  };

  const handleHeroTouchEnd = (e: React.TouchEvent) => {
    if (heroTouchStartX.current === null) return;
    const diff = heroTouchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next slide
        setCurrentHeroImage((prev) => (prev + 1) % heroSlides.length);
      } else {
        // Swiped right -> prev slide
        setCurrentHeroImage((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
      }
    }
    heroTouchStartX.current = null;
    setIsSliderPaused(false);
  };

  // Mobile Touch Swipe Handlers for Testimonials
  const testimonialTouchStartX = useRef<number | null>(null);

  const handleTestimonialTouchStart = (e: React.TouchEvent) => {
    testimonialTouchStartX.current = e.touches[0].clientX;
  };

  const handleTestimonialTouchEnd = (e: React.TouchEvent) => {
    if (testimonialTouchStartX.current === null) return;
    const diff = testimonialTouchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      }
    }
    testimonialTouchStartX.current = null;
  };

  // Lock body scroll when tip detail modal is open
  useEffect(() => {
    if (activeTip) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeTip]);

  // Auto-play sliders (pause on user hover)
  useEffect(() => {
    if (isSliderPaused) return;
    const heroTimer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    
    return () => {
      clearInterval(heroTimer);
    };
  }, [isSliderPaused]);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => {
      clearInterval(testimonialTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-[#121113] text-gray-900 dark:text-[#c1c1c1] transition-colors duration-200">
      
      {/* Enhanced Hero Section with Dental Clinic Background & Image Slider */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-gray-50/80 dark:bg-[#121113] transition-colors duration-200 overflow-hidden">
        {/* Subtle Modern Dental Clinic Architectural Background Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.06] dark:opacity-[0.14] pointer-events-none transition-opacity duration-700"
          style={{ backgroundImage: "url('/assets/dental-clinic-bg.webp')" }}
        />
        {/* Dental Ambient Lighting & Clean Subtle Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(216,121,67,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(231,138,83,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(82,117,117,0.06),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 sm:py-16 md:py-20 mt-2 md:mt-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <motion.div
              className="lg:col-span-6 z-20"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-sm bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-gray-800 dark:text-[#c1c1c1] text-xs sm:text-sm font-semibold mb-6 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#d87943] dark:text-[#e78a53]" />
                <span>Multispecialty Dental Hospital • Junagadh</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.18] mb-5 tracking-tight">
                Refining your <span className="italic text-[#527575] dark:text-[#5f8787] font-serif">natural smile</span> with precision
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-[#888888] mb-8 max-w-lg leading-relaxed font-normal">
                State-of-the-art dental surgeries, implants, and cosmetic care focused on clinical excellence, long-term oral health, and complete patient comfort.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <a 
                  href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                  className="group relative flex w-full sm:w-auto justify-center items-center px-7 py-3.5 text-xs sm:text-sm tracking-widest uppercase font-bold rounded-sm overflow-hidden text-white bg-[#d87943] hover:bg-[#b85e2b] dark:bg-[#e78a53] dark:hover:bg-[#f59e6c] dark:text-[#121113] transition-all shadow-sm"
                >
                  <span className="relative flex items-center">
                    Book Appointment
                  </span>
                </a>
                <Link
                  to="/services"
                  className="flex w-full sm:w-auto justify-center items-center px-7 py-3.5 border border-gray-300 dark:border-[#222222] text-xs sm:text-sm tracking-widest uppercase font-bold rounded-sm text-gray-900 dark:text-[#c1c1c1] hover:bg-white dark:hover:bg-[#222222] transition-all"
                >
                  Explore Services
                </Link>
              </div>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/80 dark:border-[#222222] max-w-md">
                <div className="flex -space-x-2">
                  <img loading="lazy" referrerPolicy="no-referrer" src="/assets/avatar-1.webp" alt="Patient" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#121113] object-cover" />
                  <img loading="lazy" referrerPolicy="no-referrer" src="/assets/avatar-2.webp" alt="Patient" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#121113] object-cover" />
                  <img loading="lazy" referrerPolicy="no-referrer" src="/assets/avatar-3.webp" alt="Patient" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-[#121113] object-cover" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                    ))}
                    <span className="text-xs sm:text-sm font-bold ml-1 text-gray-900 dark:text-white">4.9/5</span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-gray-500 dark:text-[#888888] font-medium">From 1,000+ satisfied patients</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative z-10 w-full"
            >
              <div 
                className="relative rounded-sm overflow-hidden border-2 sm:border-4 border-white dark:border-[#222222] shadow-2xl h-[260px] sm:h-[360px] md:h-[440px] lg:h-[490px] bg-[#121113] group select-none touch-pan-y"
                onMouseEnter={() => setIsSliderPaused(true)}
                onMouseLeave={() => setIsSliderPaused(false)}
                onTouchStart={handleHeroTouchStart}
                onTouchEnd={handleHeroTouchEnd}
              >
                {/* Stacked Slide Images with Smooth Crossfade */}
                {heroSlides.map((slide, idx) => {
                  const isActive = idx === currentHeroImage;
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                        isActive 
                          ? "opacity-100 scale-100 z-10 pointer-events-auto" 
                          : "opacity-0 scale-105 z-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        loading={idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/assets/dental-clinic-bg.webp";
                        }}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark Gradient Overlay for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20 pointer-events-none" />

                      {/* Slide Caption Badge & Info */}
                      <div className="absolute bottom-9 sm:bottom-12 md:bottom-14 left-3 sm:left-6 right-3 sm:right-6 z-20 pointer-events-none">
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm bg-black/60 backdrop-blur-md border border-white/20 text-[#e78a53] text-[10px] sm:text-xs font-semibold mb-1 shadow-sm">
                          <Sparkles className="w-3 h-3 text-[#e78a53]" />
                          <span>{slide.badge}</span>
                        </div>
                        <h4 className="text-white text-sm sm:text-lg md:text-xl font-bold tracking-tight drop-shadow-md">
                          {slide.title}
                        </h4>
                        <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm drop-shadow-sm font-normal line-clamp-1 mt-0.5">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* Left/Right Navigation Arrows */}
                <button
                  onClick={() => setCurrentHeroImage((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md border border-white/25 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 opacity-80 hover:opacity-100 cursor-pointer shadow-lg"
                  aria-label="Previous image slide"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={() => setCurrentHeroImage((prev) => (prev + 1) % heroSlides.length)}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md border border-white/25 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 opacity-80 hover:opacity-100 cursor-pointer shadow-lg"
                  aria-label="Next image slide"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                {/* Slide Indicator Dots / Bars */}
                <div className="absolute bottom-2.5 sm:bottom-4 left-0 right-0 flex justify-center items-center gap-1.5 sm:gap-2 z-30">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentHeroImage(idx)}
                      className="p-1 cursor-pointer focus:outline-none"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <div 
                        className={`rounded-full transition-all duration-300 ${
                          idx === currentHeroImage 
                            ? "bg-[#d87943] dark:bg-[#e78a53] w-6 sm:w-8 h-2 sm:h-2.5 shadow-sm" 
                            : "bg-white/50 hover:bg-white/90 w-2 sm:w-2.5 h-2 sm:h-2.5"
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Bento Features */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#121212] transition-colors duration-200 relative border-t border-gray-100 dark:border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Shield, title: "Advanced Technology", desc: "State-of-the-art equipment and low-radiation digital imaging for precise diagnosis." },
              { icon: Clock, title: "Flexible Timings", desc: "Open 6 days a week including evenings to fit your busy schedule seamlessly." },
              { icon: Calendar, title: "Easy Booking", desc: "Direct telephone booking or quick consultations with dedicated dental specialists." }
            ].map((feature, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="group flex flex-col p-8 rounded-sm border border-gray-200/80 dark:border-[#222222] bg-gray-50/50 dark:bg-[#161517] hover:bg-white dark:hover:bg-[#1a191c] hover:border-[#d87943]/40 dark:hover:border-[#e78a53]/40 transition-all duration-300 shadow-xs"
              >
                <div className="mb-6 text-[#d87943] dark:text-[#e78a53] transition-transform group-hover:-translate-y-1 duration-300">
                  <feature.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-[#888888] leading-relaxed font-normal text-sm sm:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Smooth Staggered Services */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#121113] transition-colors duration-200 border-t border-gray-100 dark:border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-sm bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-[#d87943] dark:text-[#e78a53] text-xs font-semibold mb-3">
                Comprehensive Care
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Specialized Treatments</h2>
              <p className="text-base sm:text-xl text-gray-600 dark:text-[#888888]">Advanced dental solutions tailored to your unique clinical needs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="inline-flex items-center font-bold text-[#d87943] dark:text-[#e78a53] hover:underline text-base sm:text-lg group">
                View All Treatments <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div variants={itemVariants} key={service.id}>
                <Link 
                  to={`/services/${service.id}`} 
                  className="group block bg-white dark:bg-[#121212] rounded-sm overflow-hidden hover:border-[#d87943] dark:hover:border-[#e78a53] transition-all duration-300 h-full border border-gray-200 dark:border-[#222222] flex flex-col focus:outline-none shadow-xs hover:shadow-md"
                >
                  <div className="h-52 overflow-hidden relative shrink-0">
                    <OptimizedImage
                      src={service.image_url}
                      alt={service.name}
                      aspectRatio="16/9"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#d87943] dark:group-hover:text-[#e78a53] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 dark:text-[#888888] text-sm mb-6 line-clamp-2 font-normal flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <div className="inline-flex max-w-max items-center text-[#d87943] dark:text-[#e78a53] font-bold text-xs sm:text-sm tracking-widest uppercase group-hover:translate-x-1 transition-transform">
                      Discover <ArrowRight className="ml-1.5 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section with Clinic Highlights */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#121212] transition-colors duration-200 relative border-t border-gray-100 dark:border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-sm bg-gray-100 dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-gray-700 dark:text-[#c1c1c1] text-xs font-semibold mb-3">
              Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">Our Modern Facility</h2>
            <p className="text-gray-600 dark:text-[#888888] text-base sm:text-xl font-normal">Take a look inside our sterile, state-of-the-art hospital.</p>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { src: "/assets/dental-operatory-bg.webp", alt: "State-of-the-Art Dental Facility", title: "Sterile Surgical Suite" },
              { src: "/assets/dental-clinic-bg.webp", alt: "Modern Clinic Interior", title: "Ergonomic Dental Operatory" },
              { src: "/assets/clinicboardphoto.webp", alt: "Xpert Dental Hospital Facility", title: "Hospital Center • Junagadh" },
              { src: "/assets/dental-care.webp", alt: "Specialist Care & Surgery", title: "Advanced Treatment Technology" },
            ].map((img, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="overflow-hidden rounded-sm group relative aspect-[16/9] border border-gray-200 dark:border-[#222222]"
              >
                <OptimizedImage
                  src={img.src}
                  alt={img.alt}
                  aspectRatio="16/9"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <span className="text-white text-lg font-bold tracking-wide">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Oral Health Tips / Blog Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#121113] transition-colors duration-200 relative border-t border-gray-100 dark:border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-sm bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-[#d87943] dark:text-[#e78a53] text-xs font-semibold mb-3">
                <BookOpen className="w-3.5 h-3.5 text-[#d87943] dark:text-[#e78a53]" />
                <span>Dental Care Knowledge Base</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Oral Health Tips & Advice</h2>
              <p className="text-base sm:text-xl text-gray-600 dark:text-[#888888] mt-3">Expert guidance and practical care tips from our clinical team to maintain your smile.</p>
            </motion.div>

            {/* Category Filter Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-nowrap overflow-x-auto gap-2 pb-2 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {["All", "Daily Care", "Gum Care", "Pediatric Care", "Restorative"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedTipCategory(category)}
                  className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-bold transition-all whitespace-nowrap snap-start cursor-pointer ${
                    selectedTipCategory === category
                      ? "bg-[#d87943] text-white dark:bg-[#e78a53] dark:text-[#121113]"
                      : "bg-white dark:bg-[#161517] text-gray-700 dark:text-[#c1c1c1] hover:bg-gray-100 dark:hover:bg-[#222222] border border-gray-200 dark:border-[#222222]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedTipCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {oralHealthTips
                .filter(tip => selectedTipCategory === "All" || tip.category === selectedTipCategory)
                .map((tip) => (
                  <motion.div variants={itemVariants} key={tip.id}>
                    <div 
                      onClick={() => setActiveTip(tip)}
                      className="group cursor-pointer bg-white dark:bg-[#121212] rounded-sm overflow-hidden hover:border-[#d87943]/60 dark:hover:border-[#e78a53]/60 hover:-translate-y-1 transition-all duration-300 h-full border border-gray-200 dark:border-[#222222] flex flex-col shadow-xs"
                    >
                      <div className="h-48 overflow-hidden relative shrink-0">
                        <OptimizedImage
                          src={tip.imageUrl}
                          alt={tip.title}
                          aspectRatio="16/9"
                          containerClassName="w-full h-full"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#121212]/95 px-3 py-1 rounded-sm text-xs font-bold text-[#d87943] dark:text-[#e78a53] shadow-xs">
                          {tip.category}
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/75 px-2.5 py-1 rounded-sm text-[11px] text-white flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3 text-[#e78a53]" />
                          {tip.readTime}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="text-xs text-gray-500 dark:text-[#888888] mb-2 font-medium flex items-center gap-2">
                          <span>{tip.date}</span>
                          <span>•</span>
                          <span>{tip.author}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#d87943] dark:group-hover:text-[#e78a53] transition-colors line-clamp-2 leading-snug">
                          {tip.title}
                        </h3>
                        <p className="text-gray-600 dark:text-[#888888] text-sm mb-6 line-clamp-3 font-normal flex-grow leading-relaxed">
                          {tip.summary}
                        </p>
                        <div className="inline-flex items-center text-[#d87943] dark:text-[#e78a53] font-bold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
                          Read Care Advice <ArrowRight className="ml-1.5 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal for Reading Oral Health Tip in detail */}
      <AnimatePresence>
        {activeTip && (
          <div 
            onClick={() => setActiveTip(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-[#121212] rounded-sm max-w-2xl w-full overflow-hidden relative my-auto border border-gray-200 dark:border-[#222222] max-h-[92vh] flex flex-col text-gray-900 dark:text-[#c1c1c1] shadow-2xl"
            >
              <button
                onClick={() => setActiveTip(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-40 sm:h-60 relative overflow-hidden shrink-0">
                <OptimizedImage
                  src={activeTip.imageUrl}
                  alt={activeTip.title}
                  aspectRatio="16/9"
                  priority={true}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <div className="inline-block bg-[#d87943] text-white text-[11px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-sm mb-2 sm:mb-3">
                    {activeTip.category}
                  </div>
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                    {activeTip.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-8 overflow-y-auto flex-grow">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-[#222222] pb-3 mb-5 text-xs sm:text-sm text-gray-500 dark:text-[#888888]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d87943] dark:text-[#e78a53]" />
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{activeTip.author}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span>{activeTip.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold text-[#d87943] dark:text-[#e78a53]">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {activeTip.readTime}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-[#c1c1c1] text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  {activeTip.summary}
                </p>

                <div className="bg-gray-50 dark:bg-[#161517] border border-gray-200 dark:border-[#222222] rounded-sm p-4 sm:p-6 mb-6">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#d87943] dark:text-[#e78a53] shrink-0" />
                    Key Dental Advice & Takeaways
                  </h4>
                  <ul className="space-y-2.5">
                    {activeTip.content.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-800 dark:text-gray-200 text-xs sm:text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#d87943] dark:text-[#e78a53] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <a 
                    href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                    onClick={() => setActiveTip(null)}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 bg-[#d87943] hover:bg-[#b85e2b] text-white font-bold rounded-sm text-sm transition-all"
                  >
                    Book Dental Checkup
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setActiveTip(null)}
                    className="w-full sm:w-auto px-6 py-3 border border-gray-200 dark:border-[#222222] text-gray-700 dark:text-[#c1c1c1] font-bold rounded-sm text-sm hover:bg-gray-100 dark:hover:bg-[#222222] transition-all text-center cursor-pointer"
                  >
                    Close Advice
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Styled Testimonials Slider with Dental Operatory Backdrop */}
      <section className="py-16 md:py-24 bg-[#121212] text-white relative overflow-hidden border-t border-[#222222]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/assets/dental-operatory-bg.webp')" }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d87943]/15 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5f8787]/15 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-sm bg-white/10 border border-white/20 text-[#e78a53] text-xs font-semibold mb-3">
              Patient Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">Patient Stories</h2>
            <p className="text-gray-300 text-base sm:text-xl font-normal">Hear what our community says about their treatment experience.</p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Side Arrows */}
            <div className="hidden sm:block absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-20">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-sm bg-[#1e1d21] hover:bg-[#28272c] border border-[#333333] flex items-center justify-center text-white transition-all hover:scale-105 shadow-md cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            
            <div className="hidden sm:block absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-20">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-sm bg-[#1e1d21] hover:bg-[#28272c] border border-[#333333] flex items-center justify-center text-white transition-all hover:scale-105 shadow-md cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div 
              className="overflow-hidden px-1 sm:px-4 md:px-0 min-h-[260px] flex items-center justify-center touch-pan-y"
              onTouchStart={handleTestimonialTouchStart}
              onTouchEnd={handleTestimonialTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 40, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-[#18171b] border border-[#26242a] p-5 sm:p-10 md:p-14 rounded-sm text-center w-full shadow-lg"
                >
                  <div className="flex justify-center text-yellow-400 mb-5 sm:mb-8">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 fill-current mx-0.5 sm:mx-1" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-xl md:text-2xl italic mb-6 sm:mb-10 text-white leading-relaxed font-light">
                    "{testimonials[currentTestimonial].review}"
                  </p>
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-base sm:text-xl text-white">{testimonials[currentTestimonial].patient_name}</p>
                    <p className="text-xs sm:text-sm text-[#e78a53] font-medium tracking-wide uppercase mt-1">Verified Hospital Patient</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Controls */}
            <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="sm:hidden w-10 h-10 rounded-sm bg-[#1e1d21] border border-[#333333] flex items-center justify-center text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className="p-1.5 cursor-pointer focus:outline-none"
                    aria-label={`Go to testimonial ${idx + 1}`}
                  >
                    <div className={`rounded-sm transition-all duration-300 ${
                      idx === currentTestimonial ? "bg-[#d87943] dark:bg-[#e78a53] w-8 sm:w-10 h-2.5 sm:h-3" : "bg-white/40 hover:bg-white/70 w-2.5 sm:w-3 h-2.5 sm:h-3"
                    }`} />
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="sm:hidden w-10 h-10 rounded-sm bg-[#1e1d21] border border-[#333333] flex items-center justify-center text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Styled Doctors Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#121113] transition-colors duration-200 overflow-hidden relative border-t border-gray-100 dark:border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-sm bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-[#d87943] dark:text-[#e78a53] text-xs font-semibold mb-3">
              Clinical Team
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Meet Our Specialists</h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-[#888888]">Highly qualified surgeons and periodontal specialists committed to patient health.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-4xl mx-auto">
            {doctors.map((doctor, idx) => (
              <motion.div 
                key={doctor.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#121212] rounded-sm overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-[#222222] shadow-xs hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden relative m-4 md:m-6 rounded-sm bg-gray-100 dark:bg-[#161517]">
                  <OptimizedImage
                    src={doctor.photo_url}
                    alt={doctor.name}
                    aspectRatio="4/3"
                    priority={true}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-6 md:px-8 pb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{doctor.name}</h3>
                  <p className="text-[#d87943] dark:text-[#e78a53] font-bold mb-4 text-base tracking-wide">{doctor.specialization}</p>
                  <p className="text-gray-600 dark:text-[#888888] mb-6 line-clamp-2 leading-relaxed text-sm sm:text-base font-normal">{doctor.bio}</p>
                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="block w-full text-center py-3.5 bg-gray-50 dark:bg-[#161517] border border-gray-200 dark:border-[#222222] rounded-sm font-bold text-gray-900 dark:text-white hover:bg-[#d87943] dark:hover:bg-[#e78a53] hover:text-white dark:hover:text-[#121113] hover:border-[#d87943] dark:hover:border-[#e78a53] transition-all duration-300"
                  >
                    View Full Profile
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#121212] transition-colors duration-200 border-t border-gray-100 dark:border-[#222222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-sm bg-gray-100 dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-[#d87943] dark:text-[#e78a53] text-xs font-semibold mb-3">
              Help & Answers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-[#888888]">Answers to common queries about treatments, recovery, and appointments.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-gray-50/50 dark:bg-[#161517] border border-gray-200/80 dark:border-[#222222] rounded-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-gray-100/50 dark:hover:bg-[#1e1d21] transition-colors text-left cursor-pointer"
                >
                  <span className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white pr-6">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${openFaq === faq.id ? "rotate-180 text-[#d87943] dark:text-[#e78a53]" : "text-gray-400"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-[#888888] leading-relaxed border-t border-gray-200/60 dark:border-[#222222] text-sm sm:text-base font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
