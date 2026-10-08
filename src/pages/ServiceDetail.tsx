import { useParams, Link } from "react-router-dom";
import { CheckCircle2, Clock, ArrowRight, Sparkles, Phone, Calendar } from "lucide-react";
import { services, clinicData } from "../data/mockData";
import { useEffect } from "react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export default function ServiceDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const service = services.find(s => String(s.id) === String(id)) || services[0];

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 dark:bg-[#0b1727]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0f2942] dark:text-white mb-4">Treatment not found</h2>
          <Link to="/services" className="text-[#0284c7] hover:underline font-bold">
            Return to All Treatments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/70 dark:bg-[#0b1727] text-slate-800 dark:text-slate-200 transition-colors duration-200 pb-20">
      {/* Hero Banner */}
      <div className="relative h-[36vh] md:h-[46vh] bg-[#0f2942] overflow-hidden">
        <OptimizedImage
          src={service.image_url}
          alt={service.name}
          priority={true}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2942] via-[#0f2942]/60 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/15 text-[#38bdf8] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.category || "Specialized Treatment"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight">
              {service.name}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal">
              {service.short_desc || service.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-[#0f1d2e] p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <h2 className="text-2xl font-bold text-[#0f2942] dark:text-white mb-4">
                Treatment Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {service.description}
              </p>
            </section>

            {/* Benefits */}
            <section className="bg-white dark:bg-[#0f1d2e] p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <h2 className="text-2xl font-bold text-[#0f2942] dark:text-white mb-6">
                Clinical Benefits & Outcomes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#0284c7] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step Procedure */}
            <section className="bg-white dark:bg-[#0f1d2e] p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <h2 className="text-2xl font-bold text-[#0f2942] dark:text-white mb-6">
                Step-by-Step Procedure
              </h2>
              <div className="space-y-4">
                {service.procedure_steps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/80">
                    <div className="w-8 h-8 rounded-full bg-[#0284c7] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      0{index + 1}
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#0f1d2e] p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
              <h3 className="text-xl font-bold text-[#0f2942] dark:text-white">
                Quick Treatment Summary
              </h3>

              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 py-2 border-b border-slate-100 dark:border-slate-800">
                <Clock className="w-5 h-5 text-[#0284c7] shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Estimated Duration</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{service.duration}</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={`tel:${clinicData.raw_phone}`}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-[#0f2942] hover:bg-[#163b65] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#38bdf8]" />
                  <span>Call to Inquire: {clinicData.phone}</span>
                </a>

                <Link
                  to="/#appointment"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>

            {/* Back link */}
            <div className="text-center">
              <Link 
                to="/services" 
                className="inline-flex items-center text-sm font-bold text-[#0284c7] hover:underline"
              >
                <span>&larr; Back to All Treatments</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
