export const clinicData = {
  clinic_name: "Xpertdental",
  address: "Akshar Plaza, 1, Zanzarda chowkdi Bypass Road, above Dr.Sangani Hospital, Zanzarda, Junagadh",
  short_address: "Akshar Plaza, 1, Zanzarda chowkdi Bypass Road, Zanzarda, Junagadh",
  phone: "+91-9104827340",
  email: "xpertdental991@gmail.com",
  mapUrl: "https://maps.app.goo.gl/ZccyYBAUFxMaEWps8",
  hours: {
    "Mon-Fri": "9:00 AM - 7:00 PM",
    "Sat": "9:00 AM - 5:00 PM",
    "Sun": "Closed"
  },
  social: {
    facebook: "https://www.facebook.com/share/1R44JqPmaC/",
    instagram: "https://www.instagram.com/xpertdental.jnd?igsh=MW5kODM3NTlkeGdiMQ=="
  }
};

export const departments = [
  { id: 1, name: "Oral Surgery", description: "Surgical procedures for oral health.", icon: "Syringe" },
  { id: 2, name: "Orthodontics", description: "Alignment of teeth and jaws.", icon: "Smile" },
  { id: 3, name: "Cosmetic Dentistry", description: "Improving the appearance of teeth.", icon: "Sparkles" },
  { id: 4, name: "Pediatric Dentistry", description: "Dental care for children.", icon: "Baby" }
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Kishan Dudhat",
    photo_url: "/dr.Kishandudhat.png",
    specialization: "Oral & Maxillofacial Surgeon",
    department_id: 1,
    experience_years: 4,
    qualifications: "BDS, MDS (OMFS)",
    bio: "Dr. Kishan is a highly skilled oral and maxillofacial surgeon specializing in complex extractions and jaw surgeries.",
    available_days: ["Mon"," Tue","Wed", "Fri","Sat"],
    timings: "10:00 AM - 2:00 PM",
    rating: 4.9,
    languages_spoken: ["English", "Hindi", "Gujarati"]
  },
  {
    id: 2,
    name: "Dr. Nikunj Bhuva",
    photo_url: "/dr.nikunjbhuva.png",
    specialization: "Periodontist",
    department_id: 3,
    experience_years: 6,
    qualifications: "BDS, MDS (Perio)",
    bio: "Dr. Nikunj has over a decade of experience in gum diseases, dental implants, and periodontal surgeries.",
    available_days: ["Tue", "Thu", "Sat"],
    timings: "4:00 PM - 8:00 PM",
    rating: 4.8,
    languages_spoken: ["English", "Hindi","Gujarati"]
  }
];

export const services = [
  {
    id: 1,
    name: "Dental Implants",
    department_id: 1,
    description: "Permanent replacement for missing teeth using titanium posts.",
    duration: "2-3 sessions",
    image_url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    benefits: ["Looks and feels like natural teeth", "Prevents bone loss", "Long-lasting solution"],
    procedure_steps: ["Initial Consultation", "Implant Placement", "Healing Period", "Crown Placement"]
  },
  {
    id: 2,
    name: "Teeth Whitening",
    department_id: 3,
    description: "Professional bleaching to brighten your smile.",
    duration: "1 session",
    image_url: "/teeth-whitening.png",
    benefits: ["Removes stubborn stains", "Boosts confidence", "Quick and painless"],
    procedure_steps: ["Dental Cleaning", "Application of Whitening Gel", "Laser Activation", "Post-treatment Care"]
  },
  {
    id: 3,
    name: "Braces & Aligners",
    department_id: 2,
    description: "Straighten crooked teeth and correct bite issues.",
    duration: "12-24 months",
    image_url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
    benefits: ["Improves oral hygiene", "Enhances facial aesthetics", "Corrects bite problems"],
    procedure_steps: ["Consultation & X-rays", "Treatment Planning", "Fitting Braces/Aligners", "Regular Adjustments"]
  },
  {
    id: 4,
    name: "Root Canal Treatment",
    department_id: 1,
    description: "Save a severely decayed or infected tooth.",
    duration: "1-2 sessions",
    image_url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    benefits: ["Relieves dental pain", "Saves the natural tooth", "Prevents spread of infection"],
    procedure_steps: ["X-ray & Anesthesia", "Removal of Infected Pulp", "Cleaning & Shaping", "Filling & Sealing", "Crown Placement"]
  }
];

export const testimonials = [
  {
    id: 1,
    doctor_id: 1,
    patient_name: "Bharat Timbadiya",
    rating: 5,
    review: "I recently had my full mouth implant surgery done at Xpert Dental and Maxillofacial Hospital, Junagadh, and I am extremely satisfied with the entire experience. Dr. Kishan and Dr. Nikunj are highly skilled, professional, and very caring.",
    date: "2024-02-15"
  },
  {
    id: 2,
    doctor_id: 2,
    patient_name: "Mansi Sitapara",
    rating: 5,
    review: "Excellent dental and maxillofacial care. Doctors are highly skilled, polite, and explain everything clearly. Treatment was painless and very professional. Clean hospital, modern equipment, and supportive staff.",
    date: "2024-02-10"
  },
  {
    id: 3,
    doctor_id: 1,
    patient_name: "Itoliya Hemali",
    rating: 5,
    review: "I was suffering from severe wisdom tooth pain for the last two years. I visited Xpert Dental Care and followed the doctor's advice for treatment. The care was excellent, and now I am completely pain-free.",
    date: "2024-02-05"
  },
  {
    id: 4,
    doctor_id: 2,
    patient_name: "Jigar Gothi",
    rating: 5,
    review: "I visited Xpert Dental & Maxillofacial Hospital, Junagadh for my mother’s treatment, and I am extremely satisfied with the experience. The doctor was very kind, patient, and explained the entire treatment process.",
    date: "2024-01-20"
  },
  {
    id: 5,
    doctor_id: 1,
    patient_name: "Sejal Shiroya",
    rating: 5,
    review: "I had a jaw problem for which I chose XPERT DENTAL. The doctor explained the complex procedure like maxillofacial surgery very calmly and completed it successfully.",
    date: "2024-01-15"
  }
];

export const faqs = [
  {
    id: 1,
    question: "Are your treatments affordable?",
    answer: "The cost of our treatments varies depending on the complexity of the case. We offer flexible payment plans to make procedures more accessible. Please contact us for a detailed consultation.",
    category: "Pricing"
  },
  {
    id: 2,
    question: "Will I experience pain after a root canal or extraction?",
    answer: "It's normal to experience mild discomfort and swelling for a few days after these procedures. We will provide you with specific post-operative care instructions and prescribe pain relief medication to ensure a smooth and comfortable recovery.",
    category: "Recovery"
  },
  {
    id: 3,
    question: "Do dental implants hurt?",
    answer: "The procedure is done under local anesthesia, so you won't feel pain during the surgery. Mild discomfort during healing is normal and manageable with medication.",
    category: "Surgery"
  },
  {
    id: 4,
    question: "How long is the recovery time for wisdom tooth removal?",
    answer: "Initial recovery usually takes about 3 to 5 days, during which you should eat soft foods and avoid strenuous activity. Complete healing of the gum tissue takes a few weeks.",
    category: "Recovery"
  },
  {
    id: 5,
    question: "Are there hidden charges in your treatments?",
    answer: "No, we believe in complete transparency. After your initial consultation and diagnosis, we provide a detailed breakdown of the treatment plan and associated costs before proceeding with any procedure.",
    category: "Pricing"
  },
  {
    id: 6,
    question: "Is teeth whitening safe?",
    answer: "Yes, when performed by professionals, teeth whitening is completely safe and does not damage your enamel.",
    category: "Cosmetic"
  }
];

export const oralHealthTips = [
  {
    id: 1,
    title: "5 Essential Daily Habits for Stronger Enamel & Bright Teeth",
    category: "Daily Care",
    readTime: "3 min read",
    summary: "Simple yet effective daily brushing, flossing, and dietary routines to keep your tooth enamel healthy and stain-free.",
    content: [
      "Brush twice a day with fluoride toothpaste for at least two full minutes.",
      "Use soft-bristled toothbrushes and gentle circular motions to protect sensitive gums.",
      "Floss once daily to clean plaque between teeth where brush bristles cannot reach.",
      "Avoid brushing immediately after eating acidic foods (like citrus or soda)—wait 30 minutes for enamel to remineralize.",
      "Stay hydrated with water throughout the day to rinse away food particles and boost natural saliva protection."
    ],
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Kishan Dudhat",
    date: "May 10, 2026"
  },
  {
    id: 2,
    title: "Understanding Gum Health: How to Detect and Prevent Periodontal Disease",
    category: "Gum Care",
    readTime: "4 min read",
    summary: "Recognize early warning signs of gingivitis and learn how specialized periodontal maintenance preserves your natural smile.",
    content: [
      "Pay attention to early signs like bleeding during brushing or persistent redness and swelling in gums.",
      "Incorporate anti-bacterial oral rinses recommended by your periodontist.",
      "Schedule professional scaling and cleaning every 6 months to remove hardened tartar buildup.",
      "Avoid tobacco products, which significantly increase the risk of gum inflammation and bone loss."
    ],
    imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Nikunj Bhuva",
    date: "Apr 28, 2026"
  },
  {
    id: 3,
    title: "Children's Dental Milestones: Making Brushing Fun & Preventive Care",
    category: "Pediatric Care",
    readTime: "3 min read",
    summary: "Guide your kids towards lifelong dental health with engaging routines, cavity prevention, and early orthodontic evaluations.",
    content: [
      "Start cleaning your child's gums even before their first tooth emerges using a damp, clean cloth.",
      "Schedule your child's first dental visit around their first birthday or when their first tooth appears.",
      "Turn brushing into a 2-minute musical game using timer apps or favorite songs.",
      "Ask about dental sealants to protect young molars from deep grooves that harbor decay."
    ],
    imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Kishan Dudhat",
    date: "Apr 15, 2026"
  },
  {
    id: 4,
    title: "Dental Implants vs. Bridges: Choosing the Right Tooth Replacement Solution",
    category: "Restorative",
    readTime: "5 min read",
    summary: "Compare longevity, aesthetics, jawbone health benefits, and maintenance to decide on the optimal procedure with your surgeon.",
    content: [
      "Implants fuse directly with the jawbone, acting as a natural tooth root and preventing bone loss.",
      "Bridges rely on neighboring teeth for support, making them a suitable option when adjacent teeth already need crowns.",
      "Implants do not affect surrounding healthy teeth and can last a lifetime with proper care.",
      "Consult with an Oral & Maxillofacial Surgeon to evaluate bone density and custom treatment plans."
    ],
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Kishan Dudhat",
    date: "Mar 30, 2026"
  },
  {
    id: 5,
    title: "How to Prevent Sensitivity: Causes, Triggers, and In-Clinic Solutions",
    category: "Daily Care",
    readTime: "4 min read",
    summary: "Learn what causes sharp pain when eating hot or cold foods and how desensitizing toothpaste and fluoride varnishes can help.",
    content: [
      "Enamel erosion and gum recession are the leading causes of exposed dentin and tooth sensitivity.",
      "Use desensitizing toothpaste containing potassium nitrate or stannous fluoride daily.",
      "Avoid aggressive brushing with hard bristles which can wear down protective enamel.",
      "Visit Xpertdental for professional fluoride application or bonding treatments if sensitivity persists."
    ],
    imageUrl: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Nikunj Bhuva",
    date: "Mar 18, 2026"
  },
  {
    id: 6,
    title: "Post-Surgical Care Guide: Speedy Recovery After Tooth Extractions",
    category: "Restorative",
    readTime: "4 min read",
    summary: "Essential guidelines after wisdom tooth extraction or minor oral surgery to reduce swelling and speed up healing.",
    content: [
      "Keep gentle pressure on the gauze pad for 30-45 minutes immediately following surgery.",
      "Apply an ice pack to the outside of your cheek in 15-minute intervals to minimize swelling.",
      "Stick to soft, cool foods like yogurt, smoothies, and mashed potatoes for the first 24-48 hours.",
      "Avoid using straws, smoking, or spitting vigorously to protect the blood clot and prevent dry socket."
    ],
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    author: "Dr. Kishan Dudhat",
    date: "Feb 22, 2026"
  }
];

