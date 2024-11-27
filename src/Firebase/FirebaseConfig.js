import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCd3_4Q7QFjbOMTPmaz4y1aznh2Shr4H9Y",
  authDomain: "plantea-1d582.firebaseapp.com",
  projectId: "plantea-1d582",
  storageBucket: "plantea-1d582.firebasestorage.app",
  messagingSenderId: "697918269526",
  appId: "1:697918269526:web:524353801b0acd89f633f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const getPots = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "pots"));
    const potsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log("Fetched pots: ", potsList); // Add logging here
    return potsList;
  } catch (e) {
    console.error("Error fetching pots: ", e);
  }
};


export { auth, db, storage };
