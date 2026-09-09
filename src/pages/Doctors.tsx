import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, User, RefreshCw } from "lucide-react";
import { DoctorCardSkeleton } from "../components/Skeletons";
import { doctors as mockDoctors } from "../data/mockData";

export default function Doctors() {
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState<any[]>(mockDoctors);

  const fetchDoctors = async (showLoading = false) => {
    if (showLoading) setIsLoading(true);
    // Simulate network delay for refresh
    setTimeout(() => {
      setDoctors(mockDoctors);
      if (showLoading) setIsLoading(false);
    }, 600);
  };

  useEffect(() => {
    fetchDoctors(false);
  }, []);

  const handleRefresh = () => {
    // Re-load mock data temporarily to simulate refresh
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  return (
    <div className="bg-gray-50 dark:bg-[#050400] min-h-screen pt-12 pb-24 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
           <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-900/50 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6">
            <User className="w-4 h-4" />
            <span>Dedicated Specialists</span>
            <button 
              onClick={handleRefresh}
              title="Re-simulate loading skeleton"
              className="ml-1 p-1 hover:bg-teal-100 dark:hover:bg-teal-900/80 rounded-full transition-colors text-teal-500 hover:text-teal-700 dark:hover:text-teal-200"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            </button>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Our Experts</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Meet our team of experienced and compassionate dental professionals.
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {[1, 2, 3].map((n) => (
                <DoctorCardSkeleton key={n} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {doctors.map((doctor) => (
                <motion.div variants={itemVariants} key={doctor.id}>
                   <div className="bg-white dark:bg-[#0a0801] rounded-sm overflow-hidden group  hover: hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-800">
                    <div className="aspect-[4/5] overflow-hidden relative m-3 md:m-4 rounded-sm">
                      <img loading="lazy" referrerPolicy="no-referrer" src={doctor.photo_url}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      <div className="absolute inset-0 bg-black/40"></div>
                      
                      

                      <div className="absolute bottom-6 left-6 right-6">
                         <h2 className="text-3xl font-bold text-white mb-2">{doctor.name}</h2>
                         <p className="text-blue-300 font-semibold tracking-wide text-lg">{doctor.specialization}</p>
                      </div>
                    </div>
                    
                    <div className="p-8 pt-4">
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 text-sm font-semibold rounded-full">
                          {doctor.qualifications}
                        </span>
                        <span className="bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 px-3 py-1 text-sm font-semibold rounded-full flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                          {doctor.experience_years} Yrs Exp
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3 leading-relaxed font-medium">
                        {doctor.bio}
                      </p>
                      
                      <Link
                        to={`/doctors/${doctor.id}`}
                        className="flex justify-between items-center w-full bg-gray-900 dark:bg-blue-600 text-white px-6 py-4 rounded-sm font-bold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300"
                      >
                        <span>View Full Profile</span>
                        <ChevronRight className="w-5 h-5 opacity-70" />
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
