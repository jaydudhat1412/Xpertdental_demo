const fs = require('fs');
let code = fs.readFileSync('src/pages/BookAppointment.tsx', 'utf-8');
code = code.replace(/createdAt: Timestamp\.now\(\)\n      \}\);\n/g, '');
code = code.replace(/const accessKey = \(import\.meta as any\)\.env\.VITE_WEB3FORMS_ACCESS_KEY;\n    try {\n/g, 'const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;\n    try {\n');
fs.writeFileSync('src/pages/BookAppointment.tsx', code);
