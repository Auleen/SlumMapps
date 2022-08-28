// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoUYKhzjDIe9zyFxvz2nYMVVWqrtYms1g",
  authDomain: "tutorial-help-me.firebaseapp.com",
  projectId: "tutorial-help-me",
  storageBucket: "tutorial-help-me.appspot.com",
  messagingSenderId: "868309290579",
  appId: "1:868309290579:web:d45b9eb40e3082e6c3c0a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"
await setDoc(doc(app, "persons"), {
  name: "pranav joshi",
  slum: "bhojpura"
});
