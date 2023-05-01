// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf2HoM-d4CDfe0CxN5AZCyzHBDijDXV_0",
  authDomain: "chef-recipe-authentication.firebaseapp.com",
  projectId: "chef-recipe-authentication",
  storageBucket: "chef-recipe-authentication.appspot.com",
  messagingSenderId: "892560543739",
  appId: "1:892560543739:web:3c6ec55d804e097420c55e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;