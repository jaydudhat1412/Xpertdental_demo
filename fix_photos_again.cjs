const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

// The teeth whitening photo currently used (160984...)
const photoBracesWillGet = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80";

// The new teeth whitening shade guide photo
const photoWhiteningWillGet = "https://upload.wikimedia.org/wikipedia/commons/7/73/Shade_guide.jpg";

code = code.replace(/(name:\s*"Braces & Aligners"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${photoBracesWillGet}$3`);
code = code.replace(/(name:\s*"Teeth Whitening"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${photoWhiteningWillGet}$3`);

fs.writeFileSync('src/data/mockData.ts', code);
