const fs = require('fs');
let code = fs.readFileSync('src/pages/DoctorProfile.tsx', 'utf-8');

code = code.replace(/<Link\s+to="\/book"[\s\S]*?Book Appointment\s*<\/Link>/g, '');

fs.writeFileSync('src/pages/DoctorProfile.tsx', code);
