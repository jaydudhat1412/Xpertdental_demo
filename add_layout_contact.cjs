const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf-8');

// Insert desktop Contact Us button after ThemeToggle
code = code.replace(/<ThemeToggle \/>\s*<\/div>\s*\{\/\* Mobile menu button/g, `<ThemeToggle />
              <Link
                to="/contact"
                className="bg-gray-900 dark:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 transform"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button`);

// Insert mobile Contact Us button inside the mobile menu
code = code.replace(/<\/Link>\s*\}\)\}\s*<\/div>\s*<\/motion.div>/g, `</Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center mt-4 bg-gray-900 dark:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>`);

fs.writeFileSync('src/components/Layout.tsx', code);
