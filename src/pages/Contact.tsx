import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Instagram, Send, Sparkles } from "lucide-react";
import { clinicData } from "../data/mockData";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Simulate successful contact submission if key not present for demo
      setTimeout(() => {
        setIsSubmitted(true);
        form.reset();
        setIsLoading(false);
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 500);
      return;
    }

    formData.append("access_key", accessKey);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    formData.append("name", `${firstName} ${lastName}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-[#121113] min-h-screen py-14 sm:py-20 relative overflow-hidden transition-colors duration-200">
      {/* Dental clinic ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d87943]/10 dark:bg-[#e78a53]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#527575]/10 dark:bg-[#5f8787]/10 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-sm bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#333333] text-[#d87943] dark:text-[#e78a53] text-xs font-semibold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation & Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Contact Xpertdental Junagadh</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#888888] leading-relaxed font-normal">
            Have questions about clinical treatments, dental surgeries, or appointments at Xpertdental Hospital in Junagadh? Our front desk is ready to help you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Message Form */}
          <motion.div
             initial={{ opacity: 0, x: -40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-[#121212] p-5 sm:p-8 md:p-10 rounded-sm border border-gray-200 dark:border-[#222222] shadow-xs">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Send an Inquiry</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-sm p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Inquiry Received!</h3>
                  <p className="text-green-700 dark:text-green-400 text-sm">Our hospital administrative team will get back to you shortly.</p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-sm p-4 text-red-600 dark:text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-[#161517] border border-gray-200 dark:border-[#333333] text-gray-900 dark:text-white rounded-sm focus:ring-2 focus:ring-[#d87943]/30 focus:border-[#d87943] transition-all outline-none text-sm" 
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-[#161517] border border-gray-200 dark:border-[#333333] text-gray-900 dark:text-white rounded-sm focus:ring-2 focus:ring-[#d87943]/30 focus:border-[#d87943] transition-all outline-none text-sm" 
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Phone or Email</label>
                    <input 
                      type="text" 
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#161517] border border-gray-200 dark:border-[#333333] text-gray-900 dark:text-white rounded-sm focus:ring-2 focus:ring-[#d87943]/30 focus:border-[#d87943] transition-all outline-none text-sm" 
                      placeholder="+91-9876543210 or name@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Message / Clinical Concern</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-[#161517] border border-gray-200 dark:border-[#333333] text-gray-900 dark:text-white rounded-sm focus:ring-2 focus:ring-[#d87943]/30 focus:border-[#d87943] transition-all outline-none resize-none text-sm" 
                      placeholder="Please describe your symptoms, preferred treatment, or timing..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[#d87943] hover:bg-[#b85e2b] dark:bg-[#e78a53] dark:hover:bg-[#f59e6c] text-white dark:text-[#121113] font-bold py-3.5 rounded-sm transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-sm uppercase tracking-wide flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {isLoading ? "Submitting..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Details & Map Card */}
          <motion.div
             initial={{ opacity: 0, x: 40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7, delay: 0.3 }}
             className="lg:col-span-5 space-y-6"
          >
            {/* Contact Cards */}
            <div className="bg-[#121212] p-5 sm:p-8 rounded-sm text-white border border-[#222222] shadow-sm relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                style={{ backgroundImage: "url('/assets/dental-operatory-bg.webp')" }}
              />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-white">Direct Contacts</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#d87943]/20 text-[#e78a53] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-400 text-xs tracking-wider uppercase">Emergency & Booking</h3>
                      <a href={`tel:${clinicData.phone.replace(/[^0-9+]/g, '')}`} className="text-lg font-bold text-white hover:text-[#e78a53] transition-colors">
                        {clinicData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#527575]/20 text-[#5f8787] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-400 text-xs tracking-wider uppercase">Email Desk</h3>
                      <a href={`mailto:${clinicData.email}`} className="text-base font-medium text-white hover:text-[#e78a53] transition-colors break-all">
                        {clinicData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#d87943]/20 text-[#e78a53] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-400 text-xs tracking-wider uppercase">Hospital Location</h3>
                      <p className="text-sm font-normal text-gray-300 leading-relaxed mt-0.5">{clinicData.address}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Social Links:</span>
                    <div className="flex gap-3">
                      <a 
                        href={clinicData.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-sm bg-white/10 hover:bg-[#d87943] text-white flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a 
                        href={clinicData.social.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-sm bg-white/10 hover:bg-[#527575] text-white flex items-center justify-center transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Exterior Photo with Map Pin */}
            <a 
              href={clinicData.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white dark:bg-[#121212] rounded-sm h-56 flex items-center justify-center overflow-hidden relative border border-gray-200 dark:border-[#222222] group block shadow-xs"
            >
              <OptimizedImage 
                src="/assets/clinicboardphoto.webp"
                alt="Clinic Exterior Board" 
                aspectRatio="16/9"
                containerClassName="absolute inset-0 w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/55" />
              <div className="relative bg-white/95 dark:bg-[#121212]/95 px-5 py-2.5 rounded-sm flex gap-2.5 items-center group-hover:bg-[#d87943] transition-colors duration-300 shadow-md">
                <MapPin className="w-4 h-4 text-[#d87943] dark:text-[#e78a53] group-hover:text-white transition-colors duration-300" />
                <span className="font-bold text-gray-900 dark:text-white group-hover:text-white text-xs uppercase tracking-wider transition-colors duration-300">
                  Open In Google Maps
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
