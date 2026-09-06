const fs = require('fs');
let code = fs.readFileSync('src/data/mockData.ts', 'utf-8');

// Replace the broken image URL for tip 5
code = code.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1598256989800-fea5f00d50ab\?auto=format&fit=crop&w=600&q=80"/g, 
  '"https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&q=80"'
);

fs.writeFileSync('src/data/mockData.ts', code);
