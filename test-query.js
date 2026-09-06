import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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

async function run() {
  try {
    const q = query(collection(db, "appointments"), where("userId", "==", "some-uid"));
    await getDocs(q);
    console.log("Success");
  } catch(e) {
    console.error(e.message);
  }
}
run();
