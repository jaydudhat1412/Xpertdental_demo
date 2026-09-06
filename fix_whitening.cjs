const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

const newWhiteningPhoto = "https://upload.wikimedia.org/wikipedia/commons/f/f2/Office_Teeth_Whitening.jpg";

code = code.replace(/(name:\s*"Teeth Whitening"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${newWhiteningPhoto}$3`);

fs.writeFileSync('src/data/mockData.ts', code);
