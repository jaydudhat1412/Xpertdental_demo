const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Replace the two Link blocks to "/book" with just nothing or something generic.
// Hero button
code = code.replace(/<Link\s+to="\/book"[\s\S]*?Book Appointment[\s\S]*?<\/Link>/g, '');
// Tip button
code = code.replace(/<Link\s+to="\/book"[\s\S]*?Book Dental Checkup[\s\S]*?<\/Link>/g, '');

fs.writeFileSync('src/pages/Home.tsx', code);
