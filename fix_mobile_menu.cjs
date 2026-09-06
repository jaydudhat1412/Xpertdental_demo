const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf-8');

code = code.replace(
  /\{\s*\/\* Mobile Menu \*\/\s*\}[\s\S]*?<\/AnimatePresence>/,
  `{/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden shadow-xl"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      isActive(link.path)
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-bold"
                        : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/60"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/book"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center mt-4 bg-gray-900 dark:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-md"
                >
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>`
);

fs.writeFileSync('src/components/Layout.tsx', code);
