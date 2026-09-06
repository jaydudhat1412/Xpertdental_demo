const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

// The 4 new image URLs to guarantee uniqueness:
const imgImplants = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"; 
const imgWhitening = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"; // Bright smile
const imgBraces = "https://images.unsplash.com/photo-1593085260707-5377ba37f868?auto=format&fit=crop&w=600&q=80"; // Original braces image
const imgRootCanal = "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80"; // Dentist treating patient

// Replace service 1 (Dental Implants)
code = code.replace(/(name:\s*"Dental Implants"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${imgImplants}$3`);

// Replace service 2 (Teeth Whitening)
code = code.replace(/(name:\s*"Teeth Whitening"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${imgWhitening}$3`);

// Replace service 3 (Braces & Aligners)
code = code.replace(/(name:\s*"Braces & Aligners"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${imgBraces}$3`);

// Replace service 4 (Root Canal)
code = code.replace(/(name:\s*"Root Canal Treatment"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${imgRootCanal}$3`);

fs.writeFileSync('src/data/mockData.ts', code);
