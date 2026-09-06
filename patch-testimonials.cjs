const fs = require('fs');

let data = fs.readFileSync('src/data/mockData.ts', 'utf8');

const oldTestimonials = `export const testimonials = [
  {
    id: 1,
    doctor_id: 1,
    patient_name: "Rahul Sharma",
    rating: 5,
    review: "Amazing service, painless treatment! Dr. Kishan made my surgical extraction so easy.",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    date: "2023-10-15"
  },
  {
    id: 2,
    doctor_id: 2,
    patient_name: "Priya Desai",
    rating: 5,
    review: "Highly professional. My gum treatment with Dr. Nikunj was wonderful and healed quickly.",
    photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    date: "2023-11-02"
  },
  {
    id: 3,
    doctor_id: 1,
    patient_name: "Vikram Singh",
    rating: 5,
    review: "Dr. Kishan is the best maxillofacial surgeon in the city. Very clean and hygienic environment.",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    date: "2023-12-20"
  },
  {
    id: 4,
    doctor_id: 2,
    patient_name: "Anjali Patel",
    rating: 4,
    review: "Thank you Dr. Nikunj for saving my teeth. Excellent periodontal care and very understanding.",
    photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    date: "2024-01-10"
  }
];`;

const newTestimonials = `export const testimonials = [
  {
    id: 1,
    doctor_id: 1,
    patient_name: "Bharat Timbadiya",
    rating: 5,
    review: "I recently had my full mouth implant surgery done at Xpert Dental and Maxillofacial Hospital, Junagadh, and I am extremely satisfied with the entire experience. Dr. Kishan and Dr. Nikunj are highly skilled, professional, and very caring.",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    date: "2024-02-15"
  },
  {
    id: 2,
    doctor_id: 2,
    patient_name: "Rathod Kirti",
    rating: 5,
    review: "Excellent dental and maxillofacial care. Doctors are highly skilled, polite, and explain everything clearly. Treatment was painless and very professional. Clean hospital, modern equipment, and supportive staff.",
    photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    date: "2024-02-10"
  },
  {
    id: 3,
    doctor_id: 1,
    patient_name: "Itoliya Hemali",
    rating: 5,
    review: "I was suffering from severe wisdom tooth pain for the last two years. I visited Xpert Dental Care and followed the doctor's advice for treatment. The care was excellent, and now I am completely pain-free.",
    photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    date: "2024-02-05"
  },
  {
    id: 4,
    doctor_id: 2,
    patient_name: "Jigar Gothi",
    rating: 5,
    review: "I visited Xpert Dental & Maxillofacial Hospital, Junagadh for my mother’s treatment, and I am extremely satisfied with the experience. The doctor was very kind, patient, and explained the entire treatment process.",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    date: "2024-01-20"
  },
  {
    id: 5,
    doctor_id: 1,
    patient_name: "Mansi Sitapra",
    rating: 5,
    review: "I had a jaw problem for which I chose XPERT DENTAL. The doctor explained the complex procedure like maxillofacial surgery very calmly and completed it successfully.",
    photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    date: "2024-01-15"
  }
];`;

if (data.includes(oldTestimonials)) {
  data = data.replace(oldTestimonials, newTestimonials);
  fs.writeFileSync('src/data/mockData.ts', data, 'utf8');
  console.log("Success");
} else {
  console.log("Could not find exactly matching old testimonials string.");
}
