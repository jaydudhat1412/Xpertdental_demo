import { useParams, Link } from "react-router-dom";
import { CheckCircle2, Clock, IndianRupee, ArrowRight } from "lucide-react";
import { services, clinicData } from "../data/mockData";
import { useState, useEffect } from "react";

export default function ServiceDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200 pb-20 animate-pulse">
        {/* Hero Skeleton */}
        <div className="relative h-[40vh] md:h-[50vh] bg-gray-200 dark:bg-gray-800">
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-2/3 md:w-1/3 mb-4"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full md:w-1/2"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Skeleton */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-6"></div>
                <div className="space-y-3">
                  <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                  <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
                </div>
              </section>
              
              <section>
                <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-6"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex items-center">
                      <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded-full mr-3 shrink-0"></div>
                      <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </section>
              
              <section>
                <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-6"></div>
                <div className="space-y-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 shrink-0 mr-4"></div>
                      <div className="w-full pb-6">
                        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-2"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
                
                <div className="space-y-6 mb-8">
                  {[1, 2].map(i => (
                    <div key={i} className="flex items-center">
                      <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded mr-4"></div>
                      <div className="w-full">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const service = services.find(s => s.id === Number(id));

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
          <Link to="/services" className="text-blue-600 hover:underline">Return to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200 pb-20">
      {/* Hero */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gray-900">
        <img
          src={service.image_url}
          alt={service.name}
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.name}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{service.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description} Our team of specialists ensures that you receive the highest standard of care using the latest techniques and materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400 mr-3 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Procedure Steps</h2>
              <div className="space-y-6">
                {service.procedure_steps.map((step, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </div>
                      {idx !== service.procedure_steps.length - 1 && (
                        <div className="w-0.5 h-full bg-blue-100 dark:bg-blue-900/40 mt-2"></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">Detailed explanation of this step will be provided during your consultation.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl sticky top-28 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Service Details</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{service.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Cost</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{service.cost_range}</p>
                  </div>
                </div>
              </div>

              <a href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center w-full mt-8 py-4 px-6 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-md"
              >
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
