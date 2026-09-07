const fs = require('fs');
let content = fs.readFileSync('src/pages/About.tsx', 'utf8');

// Restore the stats array with blue colors
content = content.replace(
  `  const stats = [
    { label: "Happy Patients", value: "10k+", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Years Experience", value: "15+", icon: Clock, color: "text-teal-500", bg: "bg-teal-50" },
  ];`,
  `  const stats = [
    { label: "Happy Patients", value: "10k+", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Years Experience", value: "15+", icon: Clock, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Awards Won", value: "25", icon: Award, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Successful Surgeries", value: "5k+", icon: HeartPulse, color: "text-blue-500", bg: "bg-blue-50" },
  ];`
);

// Restore the grid
content = content.replace(
  'className="grid grid-cols-2 md:grid-cols-2 max-w-4xl mx-auto gap-8"',
  'className="grid grid-cols-2 lg:grid-cols-4 gap-8"'
);

fs.writeFileSync('src/pages/About.tsx', content);
