const fs = require('fs');

// 1. Fix Doctors.tsx (Remove unused Star import if no other rating exists)
let docs = fs.readFileSync('src/pages/Doctors.tsx', 'utf-8');
docs = docs.replace(/Star, /, '');
fs.writeFileSync('src/pages/Doctors.tsx', docs);

