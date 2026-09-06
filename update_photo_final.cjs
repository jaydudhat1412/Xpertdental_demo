const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

const newWhiteningPhoto = "/teeth-whitening.png";

code = code.replace(/(name:\s*"Teeth Whitening"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${newWhiteningPhoto}$3`);

fs.writeFileSync('src/data/mockData.ts', code);
