const fs = require('fs');
let code = fs.readFileSync('src/pages/BookAppointment.tsx', 'utf-8');

code = code.replace(
  /await fetch\("https:\/\/api\.web3forms\.com\/submit", \{\s*method: "POST",\s*body: formDataObj,\s*\}\);/g,
  `const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataObj,
        });
        if (!response.ok) {
          throw new Error("Failed to submit form");
        }`
);

fs.writeFileSync('src/pages/BookAppointment.tsx', code);
