const fs = require('fs');
let code = fs.readFileSync('src/pages/DoctorProfile.tsx', 'utf-8');

code = code.replace(/<div className="flex gap-4">[\s\S]*?<\/div>/g, `<div className="flex gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl inline-flex items-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </div>`);

fs.writeFileSync('src/pages/DoctorProfile.tsx', code);
