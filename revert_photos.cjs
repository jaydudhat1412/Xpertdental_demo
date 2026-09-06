const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

const originalImplants = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80";
const originalWhitening = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80";
const originalBraces = "https://images.unsplash.com/photo-1593085260707-5377ba37f868?auto=format&fit=crop&w=600&q=80";
const originalRootCanal = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80";

code = code.replace(/(name:\s*"Dental Implants"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${originalImplants}$3`);
code = code.replace(/(name:\s*"Teeth Whitening"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${originalWhitening}$3`);
code = code.replace(/(name:\s*"Braces & Aligners"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${originalBraces}$3`);
code = code.replace(/(name:\s*"Root Canal Treatment"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${originalRootCanal}$3`);

fs.writeFileSync('src/data/mockData.ts', code);
