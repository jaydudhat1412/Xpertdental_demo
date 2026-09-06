const fs = require('fs');
let code = fs.readFileSync('src/pages/BookAppointment.tsx', 'utf-8');

// Fix Step header
code = code.replace(
  /<p className="text-blue-100">Step \{step\} of 2<\/p>/,
  '{step < 3 && <p className="text-blue-100">Step {step} of 2</p>}'
);

code = code.replace(
  /<div className="flex gap-2">\s*<div className=\{`w-3 h-3 rounded-full \$\{step >= 1 \? 'bg-white' : 'bg-white\/30'\}`\}><\/div>\s*<div className=\{`w-3 h-3 rounded-full \$\{step >= 2 \? 'bg-white' : 'bg-white\/30'\}`\}><\/div>\s*<\/div>/,
  `{step < 3 && (
                <div className="flex gap-2">
                  <div className={\`w-3 h-3 rounded-full \${step >= 1 ? 'bg-white' : 'bg-white/30'}\`}></div>
                  <div className={\`w-3 h-3 rounded-full \${step >= 2 ? 'bg-white' : 'bg-white/30'}\`}></div>
                </div>
              )}`
);

// Fix Time Input
const timeSlotsArray = `["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"]`;

code = code.replace(
  /<input \s*name="time" \s*type="time" \s*value=\{formData\.time\} \s*onChange=\{handleChange\} \s*onBlur=\{handleBlur\}\s*className=\{`w-full px-5 py-4 border rounded-2xl focus:ring-4 outline-none transition-all \$\{getInputClass\("time"\)\}`\}\s*\/>/g,
  `<select 
                      name="time" 
                      value={formData.time} 
                      onChange={handleChange} 
                      onBlur={handleBlur}
                      className={\`w-full px-5 py-4 border rounded-2xl focus:ring-4 outline-none transition-all appearance-none bg-white dark:bg-gray-800 \${getInputClass("time")}\`}
                    >
                      <option value="">-- Select Time --</option>
                      {${timeSlotsArray}.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>`
);

fs.writeFileSync('src/pages/BookAppointment.tsx', code);
