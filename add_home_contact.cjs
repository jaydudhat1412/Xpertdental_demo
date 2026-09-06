const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Insert hero Contact Us button
code = code.replace(/<div className="flex flex-col sm:flex-row gap-4">\s*<Link\s*to="\/services"/g, `<div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group relative inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full overflow-hidden text-white bg-gray-900 dark:bg-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-blue-500/20"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/services"`);

// Insert tip modal Contact Us button
code = code.replace(/<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">\s*<button/g, `<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setActiveTip(null)}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <button`);

fs.writeFileSync('src/pages/Home.tsx', code);
