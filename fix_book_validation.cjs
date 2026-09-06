const fs = require('fs');
let code = fs.readFileSync('src/pages/BookAppointment.tsx', 'utf-8');

// Relax phone number validation
code = code.replace(
  /!formData\.phone\.trim\(\) \|\| !\/^\d\{10\}\$\/\.test\(formData\.phone\.replace\(\/\\D\/g, ''\)\)/,
  '!formData.phone.trim() || formData.phone.replace(/\\D/g, "").length < 10 || formData.phone.replace(/\\D/g, "").length > 15'
);

// Fix todayStr to use local timezone date
code = code.replace(
  /const todayStr = new Date\(\)\.toISOString\(\)\.split\('T'\)\[0\];/,
  `const now = new Date();
  const todayStr = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split('T')[0];`
);

fs.writeFileSync('src/pages/BookAppointment.tsx', code);
