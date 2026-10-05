import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, User, RefreshCw } from "lucide-react";
import { DoctorCardSkeleton } from "../components/Skeletons";
import { doctors as mockDoctors } from "../data/mockData";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export default function Doctors() {
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState<any[]>(mockDoctors);

  const fetchDoctors = async (showLoading = false) => {
    if (showLoading) setIsLoading(true);
    setTimeout(() => {
      setDoctors(mockDoctors);
      if (showLoading) setIsLoading(false);
    }, 400);
  };

  useEffect(() => {
    fetchDoctors(false);
  }, []);

  const handleRefresh = () => {
    setDoctors([]);
    fetchDoctors(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <div className="bg-gray-50 dark:bg-[#121113] min-h-screen pt-12 pb-24 border-t border-gray-100 dark:border-[#222222] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-sm bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-[#527575] dark:text-[#5f8787] text-xs sm:text-sm font-semibold mb-4 shadow-xs">
            <User className="w-4 h-4 text-[#d87943] dark:text-[#e78a53]" />
            <span>Hospital Super-Specialists</span>
            <button 
              onClick={handleRefresh}
              title="Refresh Doctors"
              className="ml-1 p-1 hover:bg-gray-100 dark:hover:bg-[#333333] rounded-sm transition-colors text-gray-500 hover:text-gray-700 dark:text-gray-400 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            </button>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Our Expert Doctors</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#888888] leading-relaxed font-normal">
            Meet our team of experienced, super-specialized oral surgeons and periodontal doctors.
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
              className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
            >
              {[1, 2].map((n) => (
                <DoctorCardSkeleton key={n} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
            >
              {doctors.map((doctor) => (
                <motion.div variants={itemVariants} key={doctor.id}>
                  <div className="bg-white dark:bg-[#121212] rounded-sm overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-[#222222] shadow-xs hover:shadow-md">
                    <div className="aspect-[4/5] overflow-hidden relative m-3 md:m-4 rounded-sm bg-gray-100 dark:bg-[#161517]">
                      <OptimizedImage
                        src={doctor.photo_url}
                        alt={doctor.name}
                        aspectRatio="4/5"
                        priority={true}
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-1">{doctor.name}</h2>
                        <p className="text-[#e78a53] font-semibold tracking-wide text-base">{doctor.specialization}</p>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8 pt-2">
                      <div className="flex flex-wrap gap-2 mb-5">
                        <span className="bg-gray-100 dark:bg-[#222222] text-gray-700 dark:text-[#c1c1c1] px-3 py-1 text-xs font-semibold rounded-sm">
                          {doctor.qualifications}
                        </span>
                        <span className="bg-[#527575]/10 dark:bg-[#5f8787]/15 text-[#527575] dark:text-[#5f8787] px-3 py-1 text-xs font-semibold rounded-sm flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                          {doctor.experience_years} Yrs Exp
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-[#888888] mb-6 line-clamp-3 leading-relaxed text-sm font-normal">
                        {doctor.bio}
                      </p>
                      
                      <Link
                        to={`/doctors/${doctor.id}`}
                        className="flex justify-between items-center w-full bg-[#d87943] hover:bg-[#b85e2b] dark:bg-[#e78a53] dark:hover:bg-[#f59e6c] text-white dark:text-[#121113] px-6 py-3.5 rounded-sm font-bold text-sm tracking-wide transition-colors duration-300 shadow-xs"
                      >
                        <span>View Full Profile & Timings</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
