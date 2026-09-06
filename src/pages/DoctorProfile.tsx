import { useParams, Link } from "react-router-dom";
import { Star, Award, Clock, Calendar, Languages, IndianRupee, MessageSquareHeart } from "lucide-react";
import { doctors, testimonials, clinicData } from "../data/mockData";
import { useState, useEffect } from "react";

export default function DoctorProfile() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200 pb-20 animate-pulse">
        {/* Profile Header Skeleton */}
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
                <div className="w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
              </div>
              <div className="flex-grow w-full">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-1/2 md:w-1/3"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-full w-24"></div>
                </div>
                <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 md:w-1/4 mb-6"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 w-full max-w-2xl">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex items-start">
                      <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded mr-3 shrink-0"></div>
                      <div className="w-full">
                        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-2"></div>
                        <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-14 bg-gray-200 dark:bg-gray-800 rounded-xl w-48"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-6"></div>
                <div className="space-y-3">
                  <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                  <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                  <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
                </div>
              </section>
              
              <section>
                <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2].map(i => (
                    <div key={i} className="bg-gray-200 dark:bg-gray-800 h-40 rounded-2xl"></div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const doctor = doctors.find(d => d.id === Number(id));

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor not found</h2>
          <Link to="/doctors" className="text-blue-600 hover:underline">Return to Doctors</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950 transition-colors duration-200 pb-20">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
              <img
                src={doctor.photo_url}
                alt={doctor.name}
                className="w-full aspect-square object-cover object-top rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{doctor.name}</h1>
                
              </div>
              <p className="text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">{doctor.specialization}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-gray-400 dark:text-gray-500 mr-3 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Qualifications</p>
                    <p className="font-medium text-gray-900 dark:text-white">{doctor.qualifications}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-gray-400 dark:text-gray-500 mr-3 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="font-medium text-gray-900 dark:text-white">{doctor.experience_years} Years</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Languages className="w-6 h-6 text-gray-400 dark:text-gray-500 mr-3 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Languages</p>
                    <p className="font-medium text-gray-900 dark:text-white">{doctor.languages_spoken.join(", ")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <IndianRupee className="w-6 h-6 text-gray-400 dark:text-gray-500 mr-3 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Consultation Fee</p>
                    <p className="font-medium text-gray-900 dark:text-white">₹{doctor.consultation_fee}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg hover:shadow-md inline-flex items-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Doctor</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{doctor.bio}</p>
            </section>

            {/* Testimonials Section */}
            {testimonials.filter(t => t.doctor_id === doctor.id).length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <MessageSquareHeart className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Patient Testimonials</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.filter(t => t.doctor_id === doctor.id).map(testimonial => (
                    <div key={testimonial.id} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.patient_name}</h4>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-700'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 italic flex-grow">"{testimonial.review}"</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mt-4 pt-4 border-t border-gray-50 dark:border-gray-800">{testimonial.date}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Availability
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-600 dark:text-gray-400">Days</span>
                  <span className="font-medium text-gray-900 dark:text-white">{doctor.available_days.join(", ")}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-600 dark:text-gray-400">Timings</span>
                  <span className="font-medium text-gray-900 dark:text-white">{doctor.timings}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
