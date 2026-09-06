const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

// Replace Dr. Kishan Dudhat photo_url
code = code.replace(
  /photo_url: "https:\/\/images\.unsplash\.com\/photo-1622253692010-333f2da6031d\?auto=format&fit=crop&w=800&q=80"/,
  'photo_url: "/dr.Kishandudhat.png"'
);

// Replace Dr. Nikunj Bhuva photo_url
code = code.replace(
  /photo_url: "https:\/\/images\.unsplash\.com\/photo-1594824436998-d50d0df3f009\?auto=format&fit=crop&w=800&q=80"/,
  'photo_url: "/dr.nikunjbhuva.png"'
);

fs.writeFileSync('src/data/mockData.ts', code);
