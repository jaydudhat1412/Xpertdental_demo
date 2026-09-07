import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { clinicData } from "../data/mockData";

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

    // Fallback if access key is not set
    if (!accessKey) {
      setError("Email service is not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your environment variables.");
      setIsLoading(false);
      return;
    }

    formData.append("access_key", accessKey);
    // Combine first and last name
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
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-20 relative overflow-hidden transition-colors duration-200">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-950/20 rounded-full blur-[100px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/30 dark:bg-teal-950/20 rounded-full blur-[100px] translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Let's Connect</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Have questions or want to make an appointment? We're here to help you get the best dental care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-900 p-10 md:p-12 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 h-full">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send us a message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-green-600 dark:text-green-300">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-2xl p-4 text-red-600 dark:text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" 
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" 
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" 
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Message</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      required
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gray-900 dark:bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-lg hover:shadow-md hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:-translate-y-0"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-blue-600 dark:bg-blue-800 p-6 md:p-10 rounded-2xl shadow-md text-white">
              <h2 className="text-3xl font-bold mb-8">Contact Info</h2>
              <div className="space-y-8">
                <div className="flex bg-blue-700 p-5 rounded-2xl ">
                  <Phone className="w-8 h-8 mr-5 text-blue-200 shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-100 text-sm tracking-wide uppercase mb-1">Phone Number</h3>
                    <p className="text-xl font-medium">{clinicData.phone}</p>
                  </div>
                </div>
                <div className="flex bg-blue-700 p-5 rounded-2xl ">
                  <Mail className="w-8 h-8 mr-5 text-blue-200 shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-100 text-sm tracking-wide uppercase mb-1">Email Address</h3>
                    <p className="text-xl font-medium">{clinicData.email}</p>
                  </div>
                </div>
                <div className="flex bg-blue-700 p-5 rounded-2xl ">
                  <MapPin className="w-8 h-8 mr-5 text-blue-200 shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-100 text-sm tracking-wide uppercase mb-1">Clinic Address</h3>
                    <p className="text-lg font-medium leading-relaxed">{clinicData.address}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <h3 className="font-bold text-blue-100 text-sm tracking-wide uppercase mb-3">Follow Us On Social Media</h3>
                  <div className="flex flex-col sm:flex-row gap-4 ">
                    <a 
                      href={clinicData.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl font-medium transition-all shadow-md hover:scale-105"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Instagram</span>
                    </a>
                    <a 
                      href={clinicData.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition-all shadow-md hover:scale-105"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Exterior Photo */}
            <a 
              href={clinicData.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white dark:bg-gray-900 rounded-2xl h-64 flex items-center justify-center overflow-hidden relative shadow-lg border border-gray-100 dark:border-gray-800 group block"
            >
              <img 
                src="/clinicboardphoto.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80";
                }}
                alt="Clinic Exterior" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gray-900/40 transition-colors duration-300 group-hover:bg-gray-900/50"></div>
              <div className="relative bg-white/95 dark:bg-gray-900/95  px-6 py-3 rounded-full flex gap-3 items-center shadow-md group-hover:bg-blue-600 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                <span className="font-bold text-gray-900 dark:text-white group-hover:text-white text-sm uppercase tracking-wide transition-colors duration-300">View on Map</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
