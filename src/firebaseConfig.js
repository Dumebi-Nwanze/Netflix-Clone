import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj0JOcTIJ1v-I3VthkU-WbqQcf9-a1jqI",
  authDomain: "netflix-clone-fb5f1.firebaseapp.com",
  projectId: "netflix-clone-fb5f1",
  storageBucket: "netflix-clone-fb5f1.appspot.com",
  messagingSenderId: "631102256108",
  appId: "1:631102256108:web:4f186d732a412641b7c6c9",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth };
export default db;
