import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919104827340?text=Hello%20Xpertdental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 md:bottom-24 md:right-8 z-50 p-3.5 rounded-full bg-[#25D366] text-white shadow-md hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 border border-white/20 transition-all duration-300 flex items-center justify-center group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.12.553 4.195 1.602 6.012L.15 23.518l5.632-1.478A11.965 11.965 0 0 0 12.031 24c6.646 0 12.034-5.388 12.034-12.035C24.065 5.388 18.677 0 12.031 0zm0 22.008c-1.802 0-3.565-.484-5.111-1.4l-.367-.217-3.793.995.996-3.7-.238-.378a9.98 9.98 0 0 1-1.528-5.308c0-5.541 4.512-10.052 10.05-10.052 5.539 0 10.053 4.511 10.053 10.052 0 5.54-4.514 10.052-10.053 10.052zm5.53-7.557c-.302-.152-1.792-.885-2.072-.988-.28-.102-.482-.152-.685.152-.202.302-.782.988-.958 1.19-.176.202-.353.227-.655.076-1.558-.787-2.73-1.666-3.8-3.411-.216-.35.105-.333.541-.986.074-.112.037-.212 0-.288-.037-.076-.685-1.654-.937-2.264-.246-.595-.494-.515-.685-.524-.176-.008-.378-.01-.58-.01-.202 0-.528.076-.804.378-.276.302-1.054 1.03-1.054 2.508 0 1.478 1.08 2.906 1.232 3.108.152.202 2.115 3.225 5.12 4.524 1.892.818 2.656.924 3.593.774 1.077-.17 2.316-.948 2.64-1.865.323-.916.323-1.7.227-1.865-.096-.165-.353-.254-.655-.406z"/>
      </svg>
    </motion.a>
  );
}
