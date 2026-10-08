import { useParams, Link } from "react-router-dom";
import { Star, Award, Clock, Calendar, Languages, MessageSquareHeart } from "lucide-react";
import { doctors, testimonials, clinicData } from "../data/mockData";
import { useState, useEffect } from "react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export default function DoctorProfile() {
  const { id } = useParams();
  const [isLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const doctor = doctors.find(d => d.id === Number(id));

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-[#121113]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Doctor not found</h2>
          <Link to="/doctors" className="text-[#d87943] dark:text-[#e78a53] hover:underline font-semibold">
            Return to Doctors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-[#121113] text-gray-900 dark:text-[#c1c1c1] transition-colors duration-200 pb-20">
      {/* Profile Header */}
      <div className="bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full sm:w-72 md:w-80 shrink-0">
              <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gray-200 dark:border-[#222222] shadow-sm bg-gray-100 dark:bg-[#161517]">
                <OptimizedImage 
                  src={doctor.photo_url}
                  alt={doctor.name}
                  aspectRatio="4/5"
                  priority={true}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-sm bg-[#527575]/10 dark:bg-[#5f8787]/15 text-[#527575] dark:text-[#5f8787] text-xs font-semibold mb-3">
                {doctor.id === 1 ? "Dr. Kishan Dudhat's Clinic" : "Dr. Nikunj Bhuva's Clinic"} • Xpertdental Clinic Junagadh
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                {doctor.name}
              </h1>
              <p className="text-xl sm:text-2xl text-[#d87943] dark:text-[#e78a53] font-semibold mb-6">
                {doctor.specialization} • Best Dental Clinic in Junagadh
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-xl">
                <div className="flex items-start">
                  <Award className="w-5 h-5 text-[#d87943] dark:text-[#e78a53] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-[#888888] uppercase tracking-wide font-medium">Qualifications</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{doctor.qualifications}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#d87943] dark:text-[#e78a53] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-[#888888] uppercase tracking-wide font-medium">Experience</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{doctor.experience_years} Years</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Languages className="w-5 h-5 text-[#d87943] dark:text-[#e78a53] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-[#888888] uppercase tracking-wide font-medium">Languages</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{doctor.languages_spoken.join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 w-full sm:w-auto">
                <a
                  href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full sm:w-auto justify-center text-center px-8 py-3.5 bg-[#d87943] hover:bg-[#b85e2b] dark:bg-[#e78a53] dark:hover:bg-[#f59e6c] text-white dark:text-[#121113] rounded-sm font-bold text-sm tracking-wide transition-all shadow-sm inline-flex items-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment with {doctor.name.split(" ")[1] || "Doctor"}
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
            <section className="bg-white dark:bg-[#121212] p-8 rounded-sm border border-gray-200 dark:border-[#222222]">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Doctor</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-[#888888] leading-relaxed font-normal">
                {doctor.bio}
              </p>
            </section>

            {/* Testimonials Section */}
            {testimonials.filter(t => t.doctor_id === doctor.id).length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <MessageSquareHeart className="w-6 h-6 text-[#d87943] dark:text-[#e78a53] mr-2.5" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Patient Feedback</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.filter(t => t.doctor_id === doctor.id).map(testimonial => (
                    <div key={testimonial.id} className="bg-white dark:bg-[#121212] p-6 rounded-sm border border-gray-200 dark:border-[#222222] flex flex-col h-full shadow-xs">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-gray-900 dark:text-white text-base">{testimonial.patient_name}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-700'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-[#888888] italic text-sm leading-relaxed flex-grow">"{testimonial.review}"</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 pt-4 border-t border-gray-100 dark:border-[#222222]">{testimonial.date}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#121212] p-8 rounded-sm border border-gray-200 dark:border-[#222222] shadow-xs">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-[#d87943] dark:text-[#e78a53]" />
                Clinic Schedule
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-[#222222]">
                  <span className="text-gray-600 dark:text-[#888888] text-sm">Consultation Days</span>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">{doctor.available_days.join(", ")}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-[#222222]">
                  <span className="text-gray-600 dark:text-[#888888] text-sm">Timings</span>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">{doctor.timings}</span>
                </div>
                <div className="pt-2">
                  <a
                    href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`}
                    className="block w-full text-center py-3 bg-gray-100 hover:bg-[#d87943] dark:bg-[#1a191c] dark:hover:bg-[#e78a53] text-gray-900 hover:text-white dark:text-white dark:hover:text-[#121113] rounded-sm font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Confirm Slot via Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
