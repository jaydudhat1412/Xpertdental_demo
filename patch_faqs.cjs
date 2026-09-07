const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

content = content.replace(
  '"How much does a dental implant cost?"', 
  '"Are your treatments affordable?"'
);
content = content.replace(
  '"The cost of a dental implant varies depending on the complexity of the case, but it generally ranges from ₹25,000 to ₹40,000 per implant. We offer flexible payment plans to make the procedure more accessible."',
  '"The cost of our treatments varies depending on the complexity of the case. We offer flexible payment plans to make procedures more accessible. Please contact us for a detailed consultation."'
);
content = content.replace(
  '"Are there hidden charges in your pricing?"',
  '"Are there hidden charges in your treatments?"'
);

fs.writeFileSync('src/data/mockData.ts', content);
