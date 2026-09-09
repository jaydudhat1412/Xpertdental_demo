import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import { clinicData } from "../data/mockData";

export default function CallToAction() {
  return (
    <section className="bg-blue-600 dark:bg-blue-800 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      


      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready for a healthier smile?</h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Book a consultation today and experience dental care that puts your comfort and health first.
          </p>
          <a 
            href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white text-blue-600 rounded-sm hover:bg-blue-50 transition-colors  hover: transform hover:-translate-y-1 duration-200"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call to Book
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
