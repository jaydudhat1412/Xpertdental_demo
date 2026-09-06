const fs = require('fs');
let code = fs.readFileSync('src/pages/BookAppointment.tsx', 'utf-8');

const regex = /const handleSubmit = async \(e: React\.FormEvent\) => \{[\s\S]*?setIsSubmitting\(false\);\n    \}\n  \};/;

const replacement = `const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;
    setIsSubmitting(true);
    
    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;
    try {
      if (accessKey) {
        const formDataObj = new FormData();
        formDataObj.append("access_key", accessKey);
        formDataObj.append("subject", \`New Appointment Request - \${formData.name}\`);
        formDataObj.append("name", formData.name);
        formDataObj.append("email", formData.email);
        const text = generateMessageText();
        formDataObj.append("message", text.replace(/\\*/g, ''));
        
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataObj,
        });
      }
      setStep(3); // Success step
    } catch (err) {
      console.error(err);
      alert("Failed to send appointment request. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };`;

code = code.replace(regex, replacement);
fs.writeFileSync('src/pages/BookAppointment.tsx', code);
