import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function clean() {
  const collections = ['doctors', 'services', 'testimonials', 'faqs', 'oralHealthTips'];
  for (const c of collections) {
    const snap = await getDocs(collection(db, c));
    let count = 0;
    for (const d of snap.docs) {
      await deleteDoc(doc(db, c, d.id));
      count++;
    }
    console.log(`Deleted ${count} from ${c}`);
  }
}
clean().catch(console.error);
