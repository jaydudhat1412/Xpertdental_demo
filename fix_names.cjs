const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

// Temporary placeholder to avoid collision
code = code.replace(/"Sejal Shiroya"/g, '"TEMP_NAME_123"');
code = code.replace(/"Mansi Sitapra"/g, '"Sejal Shiroya"');
code = code.replace(/"Mansi Sitapara"/g, '"Sejal Shiroya"'); // Just in case
code = code.replace(/"TEMP_NAME_123"/g, '"Mansi Sitapara"');

fs.writeFileSync('src/data/mockData.ts', code);
