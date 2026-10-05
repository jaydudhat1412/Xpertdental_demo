import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { clinicData } from "../data/mockData";

export default function CallToAction() {
  return (
    <section className="bg-[#d87943] dark:bg-[#161517] text-white py-16 sm:py-20 relative overflow-hidden border-t border-gray-100 dark:border-[#222222]">
      {/* Dental clinic operatory backdrop with soft atmospheric overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20 pointer-events-none transition-opacity duration-700"
        style={{ backgroundImage: "url('/assets/dental-operatory-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#d87943]/90 via-[#c96d38]/90 to-[#b85e2b]/90 dark:from-[#121113]/95 dark:via-[#1a191b]/95 dark:to-[#121113]/95 pointer-events-none" />
      
      {/* Subtle clinic ambient glow circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 dark:bg-[#e78a53]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#527575]/20 dark:bg-[#5f8787]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/15 dark:bg-[#222222] border border-white/20 dark:border-[#333333] text-white dark:text-[#c1c1c1] text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-white dark:text-[#e78a53]" />
            <span>Consult With Leading Dental Specialists</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready for a healthier, confident smile?
          </h2>
          <p className="text-white/90 dark:text-[#c1c1c1] text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            Book an appointment today at {clinicData.clinic_name} Dental Hospital. Experience compassionate, world-class dental care with minimal waiting time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-white text-[#d87943] rounded-sm hover:bg-gray-100 dark:bg-[#e78a53] dark:text-[#121113] dark:hover:bg-[#f59e6c] transition-all shadow-md hover:-translate-y-0.5 duration-200"
            >
              <Phone className="mr-2 w-5 h-5 shrink-0" />
              Call to Book: {clinicData.phone}
              <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
