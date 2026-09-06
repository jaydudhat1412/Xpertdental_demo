const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

const img1 = "https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=600";
const img2 = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80";
const img3 = "https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg?auto=compress&cs=tinysrgb&w=600";
const img4 = "https://images.pexels.com/photos/3779702/pexels-photo-3779702.jpeg?auto=compress&cs=tinysrgb&w=600";

code = code.replace(/(name:\s*"Dental Implants"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${img1}$3`);
code = code.replace(/(name:\s*"Teeth Whitening"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${img2}$3`);
code = code.replace(/(name:\s*"Braces & Aligners"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${img3}$3`);
code = code.replace(/(name:\s*"Root Canal Treatment"[\s\S]*?image_url:\s*")([^"]+)(")/, `$1${img4}$3`);

fs.writeFileSync('src/data/mockData.ts', code);
