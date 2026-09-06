const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

// The original teeth whitening image:
const oldTeethWhiteningImage = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80";
// The original braces image:
const oldBracesImage = "https://images.unsplash.com/photo-1593085260707-5377ba37f868?auto=format&fit=crop&w=600&q=80";

// A new image for teeth whitening (bright smile)
const newTeethWhiteningImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80";

// First, find the teeth whitening object (id: 2) and replace its image
const teethWhiteningRegex = /(name:\s*"Teeth Whitening"[\s\S]*?image_url:\s*")([^"]+)(")/;
code = code.replace(teethWhiteningRegex, `$1${newTeethWhiteningImage}$3`);

// Then, find the braces object (id: 3) and replace its image with the old teeth whitening one
const bracesRegex = /(name:\s*"Braces & Aligners"[\s\S]*?image_url:\s*")([^"]+)(")/;
code = code.replace(bracesRegex, `$1${oldTeethWhiteningImage}$3`);

fs.writeFileSync('src/data/mockData.ts', code);
