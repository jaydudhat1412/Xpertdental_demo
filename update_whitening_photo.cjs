const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

const newWhiteningPhoto = "https://images.pexels.com/photos/6502025/pexels-photo-6502025.jpeg?auto=compress&cs=tinysrgb&w=600";

code = code.replace(/(name:\s*"Teeth Whitening"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${newWhiteningPhoto}$3`);

fs.writeFileSync('src/data/mockData.ts', code);
