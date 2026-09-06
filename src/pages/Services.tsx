import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, RefreshCw } from "lucide-react";
import { ServiceCardSkeleton } from "../components/Skeletons";
import { services as mockServices } from "../data/mockData";

export default function Services() {
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState<any[]>(mockServices);

  const fetchServices = async (showLoading = false) => {
    if (showLoading) setIsLoading(true);
    setTimeout(() => {
      setServices(mockServices);
      if (showLoading) setIsLoading(false);
    }, 600);
  };

  useEffect(() => {
    fetchServices(false);
  }, []);

  const handleRefresh = () => {
    setServices([]);
    fetchServices(true);
  };

  

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen pt-12 pb-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900/50 shadow-sm text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Comprehensive Care</span>
            <button 
              onClick={handleRefresh}
              title="Re-simulate loading skeleton"
              className="ml-1 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            </button>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            From routine checkups to complex surgeries, we offer a complete range of dental treatments under one roof.
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
              {[1, 2, 3, 4, 5, 6].map((n) => (
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
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
                >
                   <Link 
                      to={`/services/${service.id}`} 
                      className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-800 h-full"
                    >
                      <div className="h-64 overflow-hidden relative shrink-0">
                        <img
                          src={service.image_url}
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                           <h2 className="text-3xl font-bold text-white mb-2">{service.name}</h2>
                           <p className="text-white/90 font-medium">{service.cost_range}</p>
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-grow">{service.description}</p>
                        
                        <div className="flex items-center justify-between text-blue-600 dark:text-blue-400 font-bold group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                          <span className="uppercase tracking-wide text-sm">View Details</span>
                          <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60 transition-colors">
                             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
