import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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

async function check() {
  const snap = await getDocs(collection(db, "doctors"));
  snap.docs.forEach(d => {
    console.log(d.id, d.data().name, d.data().photo_url);
  });
  process.exit(0);
}
check();
