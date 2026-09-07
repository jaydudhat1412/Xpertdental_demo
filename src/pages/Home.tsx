import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Star, CheckCircle2, Calendar, Clock, Shield, Sparkles, ChevronLeft, ChevronRight, BookOpen, X, User, ChevronDown } from "lucide-react";
import { clinicData, testimonials, faqs, oralHealthTips, doctors as mockDoctors, services as mockServices } from "../data/mockData";

const heroImages = [
  "/clinicboardphoto.png",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedTipCategory, setSelectedTipCategory] = useState("All");
  const [activeTip, setActiveTip] = useState<typeof oralHealthTips[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [doctors, setDoctors] = useState<any[]>(mockDoctors);
  const [services, setServices] = useState<any[]>(mockServices);

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

  // Auto-play sliders

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => {
      clearInterval(heroTimer);
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
    <div className="flex flex-col overflow-hidden">
      {/* Enhanced Hero Section with Image Slider */}
      <section className="relative min-h-[90vh] flex items-center bg-gray-50 dark:bg-gray-950 transition-colors duration-200 overflow-hidden">
        {/* Subtle motion background element */}
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-100/50 dark:bg-blue-950/20 blur-3xl opacity-60"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-teal-50/60 dark:bg-teal-950/20 blur-3xl opacity-60"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 mt-10 md:mt-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <motion.div
              className="lg:col-span-6 z-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-slate-700 dark:text-slate-300 text-sm font-semibold mb-8">
                <Sparkles className="w-4 h-4 text-slate-500" />
                <span className="font-semibold text-sm">Aesthetic Dentistry</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
                Refining your <span className="italic text-slate-600 dark:text-slate-400 font-serif">natural smile</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
                Precision dental care focused on longevity, aesthetics, and your complete comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                  className="group relative flex w-full sm:w-auto justify-center items-center px-8 py-4 text-base font-bold rounded-full overflow-hidden text-white bg-gray-900 dark:bg-blue-600 shadow-md transition-all hover:scale-105 hover:shadow-blue-500/20"
                >
                  <span className="absolute inset-0 w-full h-full bg-blue-700 dark:bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    Book Appointment
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <Link
                  to="/services"
                  className="flex w-full sm:w-auto justify-center items-center px-8 py-4 border-2 border-gray-400 dark:border-gray-500 text-base font-semibold rounded-full text-gray-900 dark:text-white bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 hover:border-gray-500 dark:hover:border-gray-400 hover:shadow-lg transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative z-10"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white/80 dark:border-gray-800/80 aspect-[4/3] md:aspect-auto md:h-[600px] bg-gray-100 dark:bg-gray-900">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentHeroImage}
                    src={heroImages[currentHeroImage]}
                    onError={(e) => {
                      if (currentHeroImage === 0) {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80";
                      }
                    }}
                    alt="Dental care slider"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    loading="lazy" referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Image Navigator Dots */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentHeroImage(idx)}
                      className="p-2 cursor-pointer focus:outline-none"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <div className={`rounded-full transition-all duration-300 ${
                        idx === currentHeroImage ? "bg-white w-10 h-3" : "bg-white/60 hover:bg-white/90 w-3 h-3"
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Floating review badge */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white/95 dark:bg-gray-800/95  p-5 md:p-6 rounded-3xl shadow-md border border-white/50 dark:border-gray-700/50 z-30 flex items-center gap-4"
              >
                <div className="bg-yellow-100 dark:bg-yellow-950/60 p-3 rounded-2xl shrink-0">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 fill-current" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-none mb-1">4.9/5</div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">From 1000+ Reviews</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Bento Features */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Shield, title: "Advanced Technology", desc: "State-of-the-art equipment for precise diagnosis.", color: "bg-blue-50 text-blue-600" },
              { icon: Clock, title: "Flexible Timings", desc: "Open on weekends and evenings to suit your schedule.", color: "bg-teal-50 text-teal-600" },
              { icon: Calendar, title: "Easy Booking", desc: "Book your appointment online in just a few clicks.", color: "bg-blue-50 text-blue-600" }
            ].map((feature, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className="group flex flex-col p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-300 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Smooth Staggered Services */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Premium Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Comprehensive dental care tailored to your specific needs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="inline-flex items-center font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-lg group">
                View All <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                <Link to={`/services/${service.id}`} className="group block bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-500 h-full border border-gray-100 dark:border-gray-800 flex flex-col focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                  <div className="h-56 overflow-hidden relative shrink-0">
                    <img
                      src={service.image_url}
                      alt={service.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      loading="lazy" referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base mb-6 line-clamp-2 font-medium flex-grow">{service.description}</p>
                    <div className="inline-flex max-w-max items-center border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 font-semibold text-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                      Discover <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">Our Clinic</h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl font-medium">Take a look inside our state-of-the-art facility.</p>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80", alt: "Modern Clinic Interior", className: "col-span-1 md:col-span-1 aspect-[16/9]" },
              { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80", alt: "State-of-the-Art Dental Facility", className: "col-span-1 md:col-span-1 aspect-[16/9]" },
            ].map((img, idx) => (
              <motion.div 
                variants={itemVariants}
                key={idx} 
                className={`overflow-hidden rounded-2xl shadow-md group ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy" referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Oral Health Tips / Blog Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-200 relative border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Dental Care Knowledge Base</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Oral Health Tips & Advice</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mt-3">Expert guidance and practical care tips from our clinical team to keep your smile healthy.</p>
            </motion.div>

            {/* Category Filter Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-nowrap overflow-x-auto gap-2 pb-4 -mb-4 md:pb-0 md:mb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ scrollbarWidth: 'none' }}
            >
              {["All", "Daily Care", "Gum Care", "Pediatric Care", "Restorative"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedTipCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap snap-start ${
                    selectedTipCategory === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
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
                      className="group cursor-pointer bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:-translate-y-1 transition-all duration-500 h-full border border-gray-100 dark:border-gray-800 flex flex-col"
                    >
                      <div className="h-48 overflow-hidden relative shrink-0">
                        <img
                          src={tip.imageUrl}
                          alt={tip.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                          loading="lazy" referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90  px-3 py-1 rounded-full text-xs font-bold text-blue-700 dark:text-blue-400 shadow-md">
                          {tip.category}
                        </div>
                        <div className="absolute bottom-3 right-3 bg-gray-900/80  px-3 py-1 rounded-full text-xs text-white flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3 text-blue-400" />
                          {tip.readTime}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="text-xs text-gray-400 dark:text-gray-400 mb-2 font-medium flex items-center gap-2">
                          <span>{tip.date}</span>
                          <span>•</span>
                          <span>{tip.author}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                          {tip.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3 font-medium flex-grow">
                          {tip.summary}
                        </p>
                        <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                          Read Care Advice <ArrowRight className="ml-2 w-4 h-4" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-900/80 dark:bg-black/80  overflow-y-auto"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md max-w-2xl w-full overflow-hidden relative my-auto border border-gray-100 dark:border-gray-800 max-h-[90vh] flex flex-col text-gray-900 dark:text-gray-100"
            >
              <button
                onClick={() => setActiveTip(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center  transition-all hover:scale-110 shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-56 sm:h-64 relative overflow-hidden shrink-0">
                <img
                  src={activeTip.imageUrl}
                  alt={activeTip.title}
                  className="w-full h-full object-cover"
                  loading="lazy" referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-md">
                    {activeTip.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                    {activeTip.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto flex-grow">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4 mb-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-gray-700 dark:text-gray-200">{activeTip.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{activeTip.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400">
                      <Clock className="w-4 h-4" />
                      {activeTip.readTime}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 font-medium">
                  {activeTip.summary}
                </p>

                <div className="bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 rounded-2xl p-5 sm:p-6 mb-8">
                  <h4 className="font-bold text-blue-900 dark:text-blue-200 text-base sm:text-lg mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    Key Dental Advice & Takeaways
                  </h4>
                  <ul className="space-y-3">
                    {activeTip.content.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <a href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                    onClick={() => setActiveTip(null)}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-all"
                  >
                    Book Dental Checkup
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setActiveTip(null)}
                    className="w-full sm:w-auto px-6 py-3.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-center"
                  >
                    Close Advice
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Styled Testimonials Slider */}
      <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">Patient Stories</h2>
            <p className="text-gray-400 text-xl font-medium">Listen to what our community says about us.</p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-20">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-all hover:scale-110 shadow-md"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-20">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-all hover:scale-110 shadow-md"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-hidden px-4 md:px-0 min-h-[350px] md:min-h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-slate-800 border border-slate-700 p-10 md:p-16 rounded-2xl text-center w-full"
                >
                  <div className="flex justify-center text-yellow-400 mb-8">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 md:w-8 md:h-8 fill-current mx-1" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl italic mb-12 text-white leading-relaxed font-light">
                    "{testimonials[currentTestimonial].review}"
                  </p>
                  <div className="flex flex-col flex-wrap items-center justify-center gap-4">
                    <div>
                      <p className="font-bold text-xl text-white">{testimonials[currentTestimonial].patient_name}</p>
                      <p className="text-sm text-slate-400 font-medium tracking-wide uppercase mt-1">Verified Patient</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className="p-2 cursor-pointer focus:outline-none"
                  aria-label={`Go to testimonial ${idx + 1}`}
                >
                  <div className={`rounded-full transition-all duration-300 ${
                    idx === currentTestimonial ? "bg-blue-500 w-10 h-3" : "bg-white/40 hover:bg-white/70 w-3 h-3"
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Styled Doctors Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Highly qualified and experienced professionals dedicated to your smile.</p>
          </motion.div>

          {/* Simple Slider Layout for Doctors on Mobile, Grid on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center max-w-5xl mx-auto">
            {doctors.map((doctor, idx) => (
              <motion.div 
                key={doctor.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800/90 rounded-2xl overflow-hidden group shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-500 border border-transparent dark:border-gray-700"
              >
                <div className="aspect-[4/3] overflow-hidden relative m-4 md:m-6 rounded-3xl">
                  <img
                    src={doctor.photo_url}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" referrerPolicy="no-referrer"
                  />
                  
                </div>
                <div className="px-6 md:px-8 pb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold mb-6 text-lg tracking-wide">{doctor.specialization}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-2 leading-relaxed">{doctor.bio}</p>
                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="block w-full text-center py-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl font-bold text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-blue-600 hover:border-gray-900 dark:hover:border-blue-600 hover:text-white transition-all duration-300 shadow-sm"
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
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Answers to common concerns about treatments, recovery, and pricing.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
                >
                  <span className="font-semibold text-lg text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${openFaq === faq.id ? "rotate-180 text-blue-600" : "text-gray-400"}`}>
                    <ChevronDown className="w-6 h-6" />
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
                      <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800">
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
