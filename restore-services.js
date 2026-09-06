import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, query, where } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "spiritual-media-xq6d2",
  appId: "1:1082053100804:web:172f62854bdb9aaae57c51",
  apiKey: "AIzaSyAUpF5Si3hFpA5uWrmkEsesXbOp-8IxSGo",
  authDomain: "spiritual-media-xq6d2.firebaseapp.com",
  storageBucket: "spiritual-media-xq6d2.firebasestorage.app",
  messagingSenderId: "1082053100804"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "ai-studio-xpertdental-ebb44f89-bdf8-4303-ac0d-c395fc9107ad");

const mockServices = [
  {
    id: 1,
    name: "Dental Implants",
    department_id: 1,
    description: "Permanent replacement for missing teeth using titanium posts.",
    duration: "2-3 sessions",
    cost_range: "₹25,000 - ₹50,000",
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
    cost_range: "₹5,000 - ₹10,000",
    image_url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
    benefits: ["Removes stubborn stains", "Boosts confidence", "Quick and painless"],
    procedure_steps: ["Dental Cleaning", "Application of Whitening Gel", "Laser Activation", "Post-treatment Care"]
  },
  {
    id: 3,
    name: "Braces & Aligners",
    department_id: 2,
    description: "Straighten crooked teeth and correct bite issues.",
    duration: "12-24 months",
    cost_range: "₹30,000 - ₹80,000",
    image_url: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?auto=format&fit=crop&w=600&q=80",
    benefits: ["Improves oral hygiene", "Enhances facial aesthetics", "Corrects bite problems"],
    procedure_steps: ["Consultation & X-rays", "Treatment Planning", "Fitting Braces/Aligners", "Regular Adjustments"]
  },
  {
    id: 4,
    name: "Root Canal Treatment",
    department_id: 1,
    description: "Save a severely decayed or infected tooth.",
    duration: "1-2 sessions",
    cost_range: "₹4,000 - ₹8,000",
    image_url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    benefits: ["Relieves dental pain", "Saves the natural tooth", "Prevents spread of infection"],
    procedure_steps: ["X-ray & Anesthesia", "Removal of Infected Pulp", "Cleaning & Shaping", "Filling & Sealing", "Crown Placement"]
  }
];

async function run() {
  try {
    const snap = await getDocs(collection(db, "services"));
    const currentServices = snap.docs.map(doc => doc.data().name);
    console.log("Current services:", currentServices);
    
    for (const service of mockServices) {
      if (!currentServices.includes(service.name)) {
        console.log("Adding missing service:", service.name);
        await addDoc(collection(db, "services"), {
          ...service,
          createdAt: new Date()
        });
      }
    }
    console.log("Done.");
  } catch(e) {
    console.error(e);
  }
}
run();
