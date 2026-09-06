const fs = require('fs');

// 1. Fix Doctors.tsx
let docs = fs.readFileSync('src/pages/Doctors.tsx', 'utf-8');
docs = docs.replace(
  /<div className="absolute top-4 right-4 bg-white\/90 dark:bg-gray-900\/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center shadow-lg">[\s\S]*?<\/div>/,
  ''
);
fs.writeFileSync('src/pages/Doctors.tsx', docs);

// 2. Fix DoctorProfile.tsx
let docProfile = fs.readFileSync('src/pages/DoctorProfile.tsx', 'utf-8');
docProfile = docProfile.replace(
  /<div className="flex items-center bg-green-100 dark:bg-green-950\/80 px-3 py-1 rounded-full border border-green-200 dark:border-green-800">\s*<Star className="w-5 h-5 text-green-600 dark:text-green-400 fill-current mr-1" \/>\s*<span className="font-bold text-green-700 dark:text-green-300">\{doctor.rating\} Rating<\/span>\s*<\/div>/,
  ''
);
fs.writeFileSync('src/pages/DoctorProfile.tsx', docProfile);

// 3. Fix Home.tsx
let home = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
home = home.replace(
  /<div className="absolute top-4 right-4 bg-white\/90 dark:bg-gray-900\/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center shadow-lg">[\s\S]*?<\/div>/g,
  ''
);
fs.writeFileSync('src/pages/Home.tsx', home);

