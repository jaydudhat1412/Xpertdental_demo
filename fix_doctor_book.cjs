const fs = require('fs');
let code = fs.readFileSync('src/pages/DoctorProfile.tsx', 'utf-8');

code = code.replace(/<Link to="\/book"\s*className="px-8/g, '<Link\n                  to="/book"\n                  state={{ prefilledDoctorId: doctor.id.toString() }}\n                  className="px-8');

fs.writeFileSync('src/pages/DoctorProfile.tsx', code);
