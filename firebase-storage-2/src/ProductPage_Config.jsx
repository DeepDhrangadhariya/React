// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuhXfrgwGOISLgtPkvTQ9L0D7WaZ4yU2c",
  authDomain: "first-84c09.firebaseapp.com",
  databaseURL: "https://first-84c09-default-rtdb.firebaseio.com",
  projectId: "first-84c09",
  storageBucket: "first-84c09.appspot.com",
  messagingSenderId: "180330634290",
  appId: "1:180330634290:web:d6c9a8bdfc079abd2bf02b",
  measurementId: "G-1307DE0P7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export {database}