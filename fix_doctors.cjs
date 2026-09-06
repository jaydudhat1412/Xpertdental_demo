const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

// Replace Dr. Kishan Dudhat
code = code.replace(
  /name: "Dr\. Kishan Dudhat",\s*specialization: "Oral & Maxillofacial Surgeon",/,
  'name: "Dr. Kishan Dudhat",\n    photo_url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",\n    specialization: "Oral & Maxillofacial Surgeon",'
);

// Replace Dr. Nikunj Bhuva
code = code.replace(
  /name: "Dr\. Nikunj Bhuva",\s*specialization: "Periodontist",/,
  'name: "Dr. Nikunj Bhuva",\n    photo_url: "https://images.unsplash.com/photo-1594824436998-d50d0df3f009?auto=format&fit=crop&w=800&q=80",\n    specialization: "Periodontist",'
);

fs.writeFileSync('src/data/mockData.ts', code);
