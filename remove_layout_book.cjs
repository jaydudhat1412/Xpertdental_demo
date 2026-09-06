const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf-8');

// Desktop
code = code.replace(/<Link\s+to="\/book"[\s\S]*?Book Appointment\s*<\/Link>/g, '');

fs.writeFileSync('src/components/Layout.tsx', code);
