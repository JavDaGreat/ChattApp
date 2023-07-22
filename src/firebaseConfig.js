import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCQpgH1Txn9U6ZCL6652yF01HTyCrbRAwk",
  authDomain: "chatt-app-95383.firebaseapp.com",
  projectId: "chatt-app-95383",
  storageBucket: "chatt-app-95383.appspot.com",
  messagingSenderId: "725687925030",
  appId: "1:725687925030:web:baea59cb3593e77ad769e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)