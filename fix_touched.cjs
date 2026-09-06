const fs = require('fs');
let code = fs.readFileSync('src/pages/BookAppointment.tsx', 'utf-8');

code = code.replace(
  /setTouched\(\{ name: true, phone: true, email: true \}\);/g,
  'setTouched(prev => ({ ...prev, name: true, phone: true, email: true }));'
);

code = code.replace(
  /setTouched\(\{ serviceId: true, date: true, time: true \}\);/g,
  'setTouched(prev => ({ ...prev, serviceId: true, date: true, time: true }));'
);

fs.writeFileSync('src/pages/BookAppointment.tsx', code);
