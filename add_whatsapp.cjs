const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf-8');

if (!code.includes('WhatsAppButton')) {
  code = code.replace(
    'import BackToTop from "./BackToTop";', 
    'import BackToTop from "./BackToTop";\nimport WhatsAppButton from "./WhatsAppButton";'
  );

  code = code.replace(
    '{/* Floating Back to Top Button */}\n      <BackToTop />', 
    '{/* Floating Buttons */}\n      <WhatsAppButton />\n      <BackToTop />'
  );

  fs.writeFileSync('src/components/Layout.tsx', code);
}
