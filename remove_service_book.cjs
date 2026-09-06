const fs = require('fs');
let code = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf-8');

code = code.replace(/<Link\s+to="\/book"[\s\S]*?Book Consultation[\s\S]*?<\/Link>/g, '');

fs.writeFileSync('src/pages/ServiceDetail.tsx', code);
