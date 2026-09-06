const fs = require('fs');
let data = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Replace name
data = data.replace(/"Rathod Kirti"/g, '"Sejal Shiroya"');

// Remove photo_url lines from testimonials
data = data.replace(/\s*photo_url:\s*"[^"]+",\n/g, '\n');

fs.writeFileSync('src/data/mockData.ts', data, 'utf8');
console.log("Success");
