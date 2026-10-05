import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MapPin, 
  Activity, 
  Award, 
  Users, 
  HeartPulse, 
  Stethoscope, 
  Microscope,
  Target,
  Compass
} from "lucide-react";
import { clinicData } from "../data/mockData";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export default function About() {
  const stats = [
    { label: "Satisfied Patients", value: "10,000+", icon: Users, color: "text-[#d87943] dark:text-[#e78a53]", bg: "bg-[#d87943]/10" },
    { label: "Years of Service", value: "15+", icon: Clock, color: "text-[#527575] dark:text-[#5f8787]", bg: "bg-[#527575]/10" },
    { label: "Clinical Excellence Awards", value: "25+", icon: Award, color: "text-[#d87943] dark:text-[#e78a53]", bg: "bg-[#d87943]/10" },
    { label: "Successful Surgeries", value: "5,000+", icon: HeartPulse, color: "text-[#527575] dark:text-[#5f8787]", bg: "bg-[#527575]/10" },
  ];

  const hospitalFeatures = [
    {
      icon: Microscope,
      title: "Advanced Diagnostic Technology",
      description: "Equipped with high-resolution digital intraoral sensors (RVG) and low-radiation imaging systems for instant, millimeter-precise clinical diagnosis."
    },
    {
      icon: ShieldCheck,
      title: "Hospital-Grade Sterilization",
      description: "Adhering to rigorous international sterilization protocols with Class-B vacuum autoclaves, 100% disposable PPE, and sealed instrument pouches for total infection control."
    },
    {
      icon: Stethoscope,
      title: "Multispecialty Dental Operatories",
      description: "Ergonomic, fully motorized dental operatories optimized for specialized procedures ranging from oral & maxillofacial surgery to painless root canals and implantology."
    },
    {
      icon: Activity,
      title: "Dedicated Surgical Care Unit",
      description: "A sterile, specialized clinical suite engineered specifically for dental implants, bone grafting, and wisdom tooth extractions under optimal surgical conditions."
    },
    {
      icon: Sparkles,
      title: "Aesthetic & Digital Dentistry",
      description: "Comprehensive smile design lab and high-precision restorative setup utilizing premium biocompatible ceramics and modern cosmetic dental technologies."
    },
    {
      icon: HeartPulse,
      title: "Patient Comfort & Emergency Care",
      description: "Climate-controlled patient lounge, calm and hygienic environment, barrier-free access, and rapid triage for acute toothaches and dental trauma."
    }
  ];

  const coreValues = [
    {
      icon: Compass,
      title: "Our Vision",
      description: "To be recognized across Saurashtra and Gujarat as the premier benchmark in clinical dental excellence, patient trust, and pioneering dental technology."
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver accessible, painless, and ethically transparent dental healthcare of international standards through advanced infrastructure and compassionate service."
    },
    {
      icon: Building2,
      title: "Hospital Culture",
      description: "A patient-centric culture anchored in uncompromising hygiene, continuous clinical advancements, clear treatment communication, and honest pricing."
    }
  ];

  return (
    <div className="bg-white dark:bg-[#121113] text-gray-900 dark:text-[#c1c1c1] transition-colors duration-200 overflow-hidden">
      {/* Hero Section with Dental Clinic Background */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 bg-gray-50 dark:bg-[#121113] transition-colors duration-200 border-b border-gray-100 dark:border-[#222222] overflow-hidden">
        {/* Dental clinic background texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.06] dark:opacity-[0.12] pointer-events-none"
          style={{ backgroundImage: "url('/assets/dental-clinic-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(216,121,67,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(231,138,83,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-sm bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-[#d87943] dark:text-[#e78a53] text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <Building2 className="w-4 h-4 text-[#d87943] dark:text-[#e78a53]" />
              <span>Multispecialty Dental Hospital • Junagadh</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              About <span className="text-[#d87943] dark:text-[#e78a53]">{clinicData.clinic_name}</span> Dental Hospital
            </h1>
            <p className="text-base sm:text-xl text-gray-600 dark:text-[#888888] max-w-3xl mx-auto leading-relaxed font-normal">
              A modern healthcare institution built to bring world-class dental surgery, advanced oral diagnostics, and painless treatment solutions to Junagadh and surrounding regions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hospital Overview & Facility Section */}
      <section className="py-14 sm:py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left: Hospital Facility Showcase with OptimizedImage */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Primary Hospital Facility Photo */}
              <div className="relative rounded-sm overflow-hidden border border-gray-200 dark:border-[#222222] bg-gray-100 dark:bg-[#121212] shadow-sm">
                <OptimizedImage 
                  src="/assets/clinicboardphoto.webp"
                  alt="Xpertdental Dental Hospital & Implant Center Facility"
                  aspectRatio="16/9"
                  priority={true}
                  containerClassName="w-full h-56 sm:h-80 md:h-96"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#d87943] dark:bg-[#e78a53] text-[#ffffff] dark:text-[#121113] text-xs font-bold uppercase tracking-wider mb-2">
                    <Building2 className="w-3.5 h-3.5" />
                    Facility & Center
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{clinicData.clinic_name} Dental Hospital</h3>
                  <p className="text-xs sm:text-sm text-gray-200 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#e78a53] shrink-0" />
                    Akshar Plaza, Zanzarda Chowkdi Bypass Road, Junagadh
                  </p>
                </div>
              </div>

              {/* Clinical Operatory Highlights Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-sm overflow-hidden border border-gray-200 dark:border-[#222222] relative group aspect-[16/9]">
                  <OptimizedImage 
                    src="/assets/dental-clinic-bg.webp"
                    alt="Dental Operatory Suite"
                    aspectRatio="16/9"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-3 pointer-events-none">
                    <span className="text-xs font-bold text-white tracking-wide">Modern Operatories</span>
                  </div>
                </div>
                <div className="rounded-sm overflow-hidden border border-gray-200 dark:border-[#222222] relative group aspect-[16/9]">
                  <OptimizedImage 
                    src="/assets/dental-operatory-bg.webp"
                    alt="Sterilization & Clinical Lab"
                    aspectRatio="16/9"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-3 pointer-events-none">
                    <span className="text-xs font-bold text-white tracking-wide">Sterile Surgical Suites</span>
                  </div>
                </div>
              </div>

              {/* Key Facility Highlights Bar */}
              <div className="bg-gray-50 dark:bg-[#161517] p-5 rounded-sm border border-gray-200 dark:border-[#222222]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-sm bg-[#d87943]/10 dark:bg-[#e78a53]/15 text-[#d87943] dark:text-[#e78a53] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Class-B</p>
                      <p className="text-xs text-gray-500 dark:text-[#888888]">Autoclave Sterilization</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-sm bg-[#527575]/10 dark:bg-[#5f8787]/15 text-[#527575] dark:text-[#5f8787] flex items-center justify-center shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Low Radiation</p>
                      <p className="text-xs text-gray-500 dark:text-[#888888]">Digital RVG Imaging</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-sm bg-[#d87943]/10 dark:bg-[#e78a53]/15 text-[#d87943] dark:text-[#e78a53] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Emergency Care</p>
                      <p className="text-xs text-gray-500 dark:text-[#888888]">Rapid Pain Relief</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Detailed Text & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-sm bg-gray-100 dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-[#d87943] dark:text-[#e78a53] text-xs font-semibold">
                Clinical Excellence
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                Setting New Standards in Advanced Dental Care
              </h2>
              <p className="text-gray-600 dark:text-[#888888] leading-relaxed text-base sm:text-lg font-normal">
                {clinicData.clinic_name} Dental Hospital was established with a clear mandate: to make surgical-grade, painless, and technologically advanced dental healthcare accessible to families across Junagadh.
              </p>
              <p className="text-gray-600 dark:text-[#888888] leading-relaxed text-base font-normal">
                From guided dental implantology and aesthetic ceramic restorations to complex wisdom tooth extractions and periodontal regeneration, our hospital provides complete multi-specialty expertise under one roof.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-sm border border-gray-200 dark:border-[#222222] bg-gray-50/50 dark:bg-[#161517]">
                  <p className="text-2xl font-bold text-[#d87943] dark:text-[#e78a53]">100%</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-[#888888] mt-1 font-medium">Sterile Instrument Protocols</p>
                </div>
                <div className="p-4 rounded-sm border border-gray-200 dark:border-[#222222] bg-gray-50/50 dark:bg-[#161517]">
                  <p className="text-2xl font-bold text-[#527575] dark:text-[#5f8787]">MDS</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-[#888888] mt-1 font-medium">Super-Specialist Surgeons</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hospital Infrastructure & Standards Grid */}
      <section className="py-20 bg-gray-50 dark:bg-[#121113] transition-colors duration-200 border-y border-gray-100 dark:border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-sm bg-white dark:bg-[#222222] text-[#d87943] dark:text-[#e78a53] border border-gray-200 dark:border-[#333333] text-xs font-bold uppercase tracking-wider mb-4">
              State-of-the-Art Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              Designed for Clinical Precision
            </h2>
            <p className="text-gray-600 dark:text-[#888888] text-base sm:text-lg font-normal">
              Explore the hospital infrastructure, high-end equipment, and hygiene standards that safeguard every smile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white dark:bg-[#121212] p-8 rounded-sm border border-gray-200 dark:border-[#222222] hover:border-[#d87943]/40 dark:hover:border-[#e78a53]/40 transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#d87943]/10 dark:bg-[#e78a53]/15 text-[#d87943] dark:text-[#e78a53] flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-[#888888] text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission & Hospital Principles */}
      <section className="py-20 lg:py-24 bg-white dark:bg-[#121212] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              Our Vision, Mission & Principles
            </h2>
            <p className="text-gray-600 dark:text-[#888888] text-base sm:text-lg font-normal">
              The guiding ethos behind our commitment to ethical dental medicine and patient well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50/60 dark:bg-[#161517] p-8 rounded-sm border border-gray-200 dark:border-[#222222]"
              >
                <div className="w-12 h-12 rounded-sm bg-[#527575]/10 dark:bg-[#5f8787]/15 text-[#527575] dark:text-[#5f8787] flex items-center justify-center mb-6">
                  <val.icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                  {val.title}
                </h3>
                <p className="text-gray-600 dark:text-[#888888] leading-relaxed font-normal text-sm">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Key Achievements / Stats Section */}
      <section className="py-20 bg-[#121212] text-white z-10 relative border-t border-[#222222]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/assets/dental-operatory-bg.webp')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-sm p-6 sm:p-8 text-center"
              >
                <div className={`w-14 h-14 mx-auto ${stat.bg} ${stat.color} rounded-sm flex items-center justify-center mb-5`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium tracking-wide uppercase text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Location & Visiting Hours Information */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-[#121113] border-t border-gray-100 dark:border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#222222] rounded-sm p-8 sm:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-sm bg-gray-100 dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-[#d87943] dark:text-[#e78a53] text-xs font-bold uppercase tracking-wider mb-4">
                  Hospital Visiting & Appointment Desk
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Plan Your Visit to {clinicData.clinic_name} Dental Hospital
                </h3>
                <p className="text-gray-600 dark:text-[#888888] mb-6 font-normal text-sm sm:text-base leading-relaxed">
                  Located above Dr. Sangani Hospital on the Zanzarda Bypass Road in Junagadh. Ample parking, elevator access, and a supportive administrative desk ready to assist you.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-[#888888] font-normal">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-[#d87943] dark:text-[#e78a53] shrink-0 mt-0.5" />
                    <span>{clinicData.address}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-5 h-5 text-[#d87943] dark:text-[#e78a53] shrink-0 mt-0.5" />
                    <div>
                      <p><span className="font-semibold text-gray-900 dark:text-white">Mon - Fri:</span> {clinicData.hours["Mon-Fri"]}</p>
                      <p><span className="font-semibold text-gray-900 dark:text-white">Saturday:</span> {clinicData.hours["Sat"]}</p>
                      <p><span className="font-semibold text-gray-900 dark:text-white">Sunday:</span> {clinicData.hours["Sun"]}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 justify-center">
                <Link
                  to="/contact"
                  className="w-full text-center py-4 px-6 bg-[#d87943] hover:bg-[#b85e2b] dark:bg-[#e78a53] dark:hover:bg-[#f59e6c] text-white dark:text-[#121113] font-bold rounded-sm text-sm tracking-wide transition-all shadow-sm"
                >
                  Book Hospital Appointment
                </Link>
                <a
                  href={clinicData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 px-6 border border-gray-300 dark:border-[#222222] hover:bg-gray-100 dark:hover:bg-[#222222] text-gray-900 dark:text-white font-bold rounded-sm text-sm tracking-wide transition-all"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
