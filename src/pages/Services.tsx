import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, RefreshCw } from "lucide-react";
import { ServiceCardSkeleton } from "../components/Skeletons";
import { services as mockServices } from "../data/mockData";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export default function Services() {
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState<any[]>(mockServices);

  const fetchServices = async (showLoading = false) => {
    if (showLoading) setIsLoading(true);
    setTimeout(() => {
      setServices(mockServices);
      if (showLoading) setIsLoading(false);
    }, 400);
  };

  useEffect(() => {
    fetchServices(false);
  }, []);

  const handleRefresh = () => {
    setServices([]);
    fetchServices(true);
  };

  return (
    <div className="bg-gray-50 dark:bg-[#121113] min-h-screen pt-12 pb-24 border-t border-gray-100 dark:border-[#222222] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-sm bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-[#d87943] dark:text-[#e78a53] text-xs sm:text-sm font-semibold mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#d87943] dark:text-[#e78a53]" />
            <span>Comprehensive Clinical Care</span>
            <button 
              onClick={handleRefresh}
              title="Refresh Services"
              className="ml-1 p-1 hover:bg-gray-100 dark:hover:bg-[#333333] rounded-sm transition-colors text-gray-400 hover:text-[#d87943] dark:hover:text-[#e78a53] cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            </button>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Dental Treatments at Xpertdental Junagadh</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#888888] leading-relaxed font-normal">
            From routine checkups and teeth whitening to complex surgical dental implants, we provide complete multi-specialty care in Junagadh.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[1, 2, 3, 4].map((n) => (
                <ServiceCardSkeleton key={n} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
                >
                  <Link 
                    to={`/services/${service.id}`} 
                    className="group flex flex-col bg-white dark:bg-[#121212] rounded-sm overflow-hidden hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-[#222222] h-full shadow-xs hover:shadow-md"
                  >
                    <div className="h-60 overflow-hidden relative shrink-0">
                      <OptimizedImage
                        src={service.image_url}
                        alt={service.name}
                        aspectRatio="16/9"
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <h2 className="text-2xl font-bold mb-1">{service.name}</h2>
                        <span className="text-xs text-[#e78a53] font-semibold uppercase tracking-wider">{service.duration}</span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow justify-between space-y-6">
                      <p className="text-gray-600 dark:text-[#888888] leading-relaxed text-sm font-normal">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-[#222222]">
                        <span className="text-[#d87943] dark:text-[#e78a53] font-bold text-sm tracking-wide group-hover:translate-x-1 transition-transform inline-flex items-center">
                          Treatment Details <ArrowRight className="w-4 h-4 ml-1.5" />
                        </span>
                        <div className="w-8 h-8 rounded-sm bg-gray-50 dark:bg-[#1a191c] flex items-center justify-center text-gray-500 group-hover:bg-[#d87943] group-hover:text-white dark:group-hover:bg-[#e78a53] dark:group-hover:text-[#121113] transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
