// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTP8c7n7AzN11t3uU890lqPX4QJ6eWH0k",
  authDomain: "bistroboss2.firebaseapp.com",
  projectId: "bistroboss2",
  storageBucket: "bistroboss2.appspot.com",
  messagingSenderId: "684321793350",
  appId: "1:684321793350:web:f54f7a82bc21ed9a4f3147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth