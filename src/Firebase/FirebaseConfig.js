// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCd3_4Q7QFjbOMTPmaz4y1aznh2Shr4H9Y",
  authDomain: "plantea-1d582.firebaseapp.com",
  projectId: "plantea-1d582",
  storageBucket: "plantea-1d582.firebasestorage.app",
  messagingSenderId: "697918269526",
  appId: "1:697918269526:web:524353801b0acd89f633f7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const addEquipment = async (equipmentData) => {
  try {
    const docRef = await addDoc(collection(db, "equipment"), equipmentData);
    console.log("Equipment added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding equipment: ", e);
  }
};

export const getEquipment = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "equipment"));
    const equipmentList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return equipmentList;
  } catch (e) {
    console.error("Error fetching equipment: ", e);
  }
};

export { auth, db, storage };
