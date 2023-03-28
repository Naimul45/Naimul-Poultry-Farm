// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1-mj5-jtS7Z7FhQQYbqdBDa-RBuFceNU",
  authDomain: "poultry-farm-bfe6b.firebaseapp.com",
  projectId: "poultry-farm-bfe6b",
  storageBucket: "poultry-farm-bfe6b.appspot.com",
  messagingSenderId: "53005223986",
  appId: "1:53005223986:web:b743757f23fab1761b542b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app