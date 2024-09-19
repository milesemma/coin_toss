import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAV9RoJzXTJeMBoW0MaDF5Pk4F_qEh-DmY",
  authDomain: "final-project-27976.firebaseapp.com",
  projectId: "final-project-27976",
  storageBucket: "final-project-27976.appspot.com",
  messagingSenderId: "483848698693",
  appId: "1:483848698693:web:76a3229bdea263d49a9c2c",
  measurementId: "G-QW3QVVQBV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);