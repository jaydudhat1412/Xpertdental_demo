import { useParams, Link } from "react-router-dom";
import { CheckCircle2, Clock, ArrowRight, Sparkles } from "lucide-react";
import { services, clinicData } from "../data/mockData";
import { useEffect } from "react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export default function ServiceDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const service = services.find(s => s.id === Number(id));

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-[#121113]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service not found</h2>
          <Link to="/services" className="text-[#d87943] dark:text-[#e78a53] hover:underline font-semibold">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-[#121113] text-gray-900 dark:text-[#c1c1c1] transition-colors duration-200 pb-20">
      {/* Hero Banner */}
      <div className="relative h-[38vh] md:h-[48vh] bg-[#121212] overflow-hidden">
        <OptimizedImage
          src={service.image_url}
          alt={service.name}
          priority={true}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-sm bg-white/10 text-[#e78a53] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Specialized Treatment
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">{service.name}</h1>
            <p className="text-base sm:text-xl text-gray-200 max-w-2xl font-normal">{service.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <section className="bg-white dark:bg-[#121212] p-5 sm:p-8 rounded-sm border border-gray-200 dark:border-[#222222] shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Treatment Overview</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-[#888888] leading-relaxed font-normal">
                {service.description} At {clinicData.clinic_name} Dental Hospital, our specialists ensure that you receive the highest standard of painless, sterile care using advanced digital diagnostics and biocompatible materials.
              </p>
            </section>

            <section className="bg-white dark:bg-[#121212] p-5 sm:p-8 rounded-sm border border-gray-200 dark:border-[#222222] shadow-xs">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#d87943] dark:text-[#e78a53] mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-800 dark:text-[#c1c1c1] font-medium text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-[#121212] p-5 sm:p-8 rounded-sm border border-gray-200 dark:border-[#222222] shadow-xs">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Procedure Steps</h2>
              <div className="space-y-6">
                {service.procedure_steps.map((step, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-[#d87943]/15 dark:bg-[#e78a53]/20 text-[#d87943] dark:text-[#e78a53] flex items-center justify-center font-bold text-sm shrink-0">
                        {idx + 1}
                      </div>
                      {idx !== service.procedure_steps.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 dark:bg-[#222222] mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{step}</h3>
                      <p className="text-gray-600 dark:text-[#888888] text-sm mt-1">Detailed explanation and pre-procedure guidance will be provided during your clinical evaluation.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#121212] p-8 rounded-sm sticky top-28 border border-gray-200 dark:border-[#222222] shadow-xs">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Treatment Details</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-[#d87943] dark:text-[#e78a53] mr-3" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-[#888888] uppercase tracking-wide font-medium">Estimated Duration</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-base">{service.duration}</p>
                  </div>
                </div>
              </div>

              <a 
                href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center w-full py-4 px-6 bg-[#d87943] hover:bg-[#b85e2b] dark:bg-[#e78a53] dark:hover:bg-[#f59e6c] text-white dark:text-[#121113] rounded-sm font-bold text-sm tracking-wide transition-all shadow-sm"
              >
                Book Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
