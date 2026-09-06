const fs = require('fs');
let code = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf-8');

code = code.replace(/<p className="font-semibold text-gray-900 dark:text-white">\{service\.cost_range\}<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, `<p className="font-semibold text-gray-900 dark:text-white">{service.cost_range}</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="flex items-center justify-center w-full mt-8 py-4 px-6 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-md"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>`);

fs.writeFileSync('src/pages/ServiceDetail.tsx', code);
