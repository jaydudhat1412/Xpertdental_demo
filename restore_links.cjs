const fs = require('fs');

// 1. App.tsx
let appCode = fs.readFileSync('src/App.tsx', 'utf-8');
if (!appCode.includes('BookAppointment')) {
    appCode = appCode.replace('import Contact from "./pages/Contact";', 'import Contact from "./pages/Contact";\nimport BookAppointment from "./pages/BookAppointment";');
    appCode = appCode.replace('<Route path="contact" element={<Contact />} />', '<Route path="contact" element={<Contact />} />\n            <Route path="book" element={<BookAppointment />} />');
    fs.writeFileSync('src/App.tsx', appCode);
}

// 2. Layout.tsx
let layoutCode = fs.readFileSync('src/components/Layout.tsx', 'utf-8');
layoutCode = layoutCode.replace(/<Link\s+to="\/contact"([^>]*?)>(\s*)Contact Us(\s*)<\/Link>/g, '<Link to="/book"$1>$2Book Appointment$3</Link>');
fs.writeFileSync('src/components/Layout.tsx', layoutCode);

// 3. Home.tsx
let homeCode = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
// Fix the hero button
homeCode = homeCode.replace(/<Link\s+to="\/contact"([^>]*?)>([\s\S]*?)Contact Us([\s\S]*?)<\/Link>/, '<Link to="/book"$1>$2Book Appointment$3</Link>');
// Fix the tip button
homeCode = homeCode.replace(/<Link\s+to="\/contact"([^>]*?)>([\s\S]*?)Contact Us([\s\S]*?)<\/Link>/, '<Link to="/book"$1>$2Book Dental Checkup$3</Link>');
fs.writeFileSync('src/pages/Home.tsx', homeCode);

// 4. DoctorProfile.tsx
let doctorCode = fs.readFileSync('src/pages/DoctorProfile.tsx', 'utf-8');
doctorCode = doctorCode.replace(/<Link\s+to="\/contact"([^>]*?)>([\s\S]*?)Contact Us([\s\S]*?)<\/Link>/g, '<Link to="/book"$1>$2Book Appointment$3</Link>');
fs.writeFileSync('src/pages/DoctorProfile.tsx', doctorCode);

// 5. ServiceDetail.tsx
let serviceCode = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf-8');
serviceCode = serviceCode.replace(/<Link\s+to="\/contact"([^>]*?)>([\s\S]*?)Contact Us([\s\S]*?)<\/Link>/g, '<Link to="/book"$1>$2Book Consultation$3</Link>');
fs.writeFileSync('src/pages/ServiceDetail.tsx', serviceCode);

