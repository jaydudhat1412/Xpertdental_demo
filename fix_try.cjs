const fs = require('fs');
let code = fs.readFileSync('src/pages/BookAppointment.tsx', 'utf-8');
code = code.replace(/setIsSubmitting\(true\);\n\n      \/\/ Then attempt to send email/g, 'setIsSubmitting(true);\n    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;\n    try {\n      // Then attempt to send email');
fs.writeFileSync('src/pages/BookAppointment.tsx', code);
