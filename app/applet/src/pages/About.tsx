import { motion } from "motion/react";
import { Users, Award, Clock, HeartPulse, Shield, Stethoscope, Sparkles, Target } from "lucide-react";
import { clinicData } from "../data/mockData";

export default function About() {
  const stats = [
    { label: "Happy Patients", value: "10k+", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Years Experience", value: "15+", icon: Clock, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Awards Won", value: "25", icon: Award, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Successful Surgeries", value: "5k+", icon: HeartPulse, color: "text-blue-500", bg: "bg-blue-50" },
  ];

  const values = [
    { 
      title: "Advanced Technology", 
      description: "Equipped with the latest dental technologies for precise diagnostics and painless treatments.", 
      icon: Sparkles 
    },
    { 
      title: "Expert Specialists", 
      description: "A highly qualified team of specialized doctors dedicated to comprehensive oral care.", 
      icon: Stethoscope 
    },
    { 
      title: "Strict Sterilization", 
      description: "We maintain the highest international standards of hygiene and cross-infection control.", 
      icon: Shield 
    },
    { 
      title: "Patient-Centric Care", 
      description: "Personalized care plans tailored to your specific needs, ensuring comfort at every step.", 
      icon: Target 
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-200 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-50/50 dark:bg-blue-900/20 blur-3xl rounded-full"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              About <span className="text-blue-600 dark:text-blue-400">{clinicData.clinic_name}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We are dedicated to providing the highest quality dental care in a comfortable and friendly environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section (Centered, No Photo) */}
      <section className="py-24 relative bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 tracking-tight">Our Story</h2>
            <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-6 text-left sm:text-center mx-auto">
              <p>
                Founded with a vision to revolutionize dental healthcare, {clinicData.clinic_name} has grown from a small clinic to a state-of-the-art dental hospital. Our journey has always been about combining cutting-edge technology with compassionate patient care.
              </p>
              <p>
                We believe that everyone deserves a healthy, beautiful smile. Our team of specialists works tirelessly to ensure that every patient receives personalized treatment plans tailored to their specific needs.
              </p>
              <p>
                From routine check-ups to complex surgical procedures, we maintain the highest standards of hygiene and sterilization, making us a trusted name in the community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">The pillars of our dental excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{val.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-900 border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className={`w-16 h-16 mx-auto ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
